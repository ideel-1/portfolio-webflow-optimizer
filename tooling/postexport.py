#!/usr/bin/env python3
import os, re, json, shutil, zipfile, time, hashlib
from urllib.parse import urlparse, quote
from bs4 import BeautifulSoup
from PIL import Image
import requests

# ----------------- Config -----------------
CONFIG_DEFAULT = {
    "output_dir": "dist",
    "preferred_homepage": "",
    "download_images": True,
    "image_dir": "images",
    "image_variants": [480, 800, 1200, 1600, 2000],
    "image_format": "webp",   # "webp" or "keep"
    "quality": 82,
    "format_html": True,
    "format_css_js": True
}

# Pillow format mapping
PIL_FORMAT = {
    "jpg": "JPEG",
    "jpeg": "JPEG",
    "png": "PNG",
    "webp": "WEBP",
    # "avif": "AVIF",  # requires pillow-avif-plugin if you ever output AVIF
}
def pil_format_for(ext: str) -> str:
    return PIL_FORMAT.get(ext.lower(), ext.upper())

# ----------------- Small utils -----------------
def ensure_dir(p): os.makedirs(p, exist_ok=True)

def slugify_name(name: str) -> str:
    name = name.strip().lower()
    name = name.replace("(", "").replace(")", "")
    name = re.sub(r"\s+", "-", name)
    name = re.sub(r"[^a-z0-9._-]+", "-", name)
    name = re.sub(r"-{2,}", "-", name).strip("-")
    return name or "asset"

def hash12(b: bytes) -> str:
    return hashlib.sha1(b).hexdigest()[:12]

def load_config(path):
    if path and os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            cfg = json.load(f)
        merged = CONFIG_DEFAULT.copy(); merged.update(cfg); return merged
    return CONFIG_DEFAULT

# ----------------- I/O & HTML detection -----------------
def copy_src(src, outdir):
    if src.lower().endswith(".zip") and os.path.isfile(src):
        with zipfile.ZipFile(src, "r") as z: z.extractall(outdir)
    else:
        if os.path.exists(outdir): shutil.rmtree(outdir)
        shutil.copytree(src, outdir)

def looks_like_html(path):
    try:
        with open(path, "rb") as f:
            head = f.read(4096).decode("utf-8", errors="ignore").lower()
        return ("<!doctype html" in head) or ("<html" in head and "</html>" in head)
    except Exception:
        return False

def find_and_fix_extensionless_html(dist_root):
    renamed = {}
    for dirpath, _, filenames in os.walk(dist_root):
        for name in filenames:
            if "." in name: continue
            full = os.path.join(dirpath, name)
            if looks_like_html(full):
                new_full = full + ".html"
                os.rename(full, new_full)
                rel_old = os.path.relpath(full, dist_root).replace(os.sep, "/")
                rel_new = os.path.relpath(new_full, dist_root).replace(os.sep, "/")
                renamed[rel_old] = rel_new
    return renamed

ATTR_PATTERN = re.compile(r'(?P<attr>\b(?:href|src|action)\s*=\s*["\'])(?P<val>[^"\']+)(["\'])', re.IGNORECASE)

def rewrite_links_in_html(file_path, renamed_map, dist_root):
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        text = f.read()

    def fix_link(val):
        if re.match(r'^[a-zA-Z][a-zA-Z0-9+.-]*:', val): return val
        if val.startswith("#") or val.startswith("data:"): return val
        norm = val
        while norm.startswith("./"): norm = norm[2:]
        norm = norm.lstrip("/")
        base = norm.split("#",1)[0].split("?",1)[0]
        if base in renamed_map:
            prefix = "/" if val.startswith("/") else ""
            q = ""; h = ""
            qpos = val.find("?"); hpos = val.find("#")
            if qpos != -1 and (hpos == -1 or qpos < hpos): q = val[qpos:(hpos if hpos!=-1 else len(val))]
            if hpos != -1: h = val[hpos:]
            return prefix + renamed_map[base] + q + h
        return val

    def repl(m):
        before = m.group("val"); after = fix_link(before)
        return m.group("attr") + after + m.group(3)

    new_text = ATTR_PATTERN.sub(repl, text)
    if new_text != text:
        with open(file_path, "w", encoding="utf-8") as f: f.write(new_text)

# ----------------- Image helpers + manifest -----------------
def manifest_path(dist_root): return os.path.join(dist_root, "images", "manifest.json")

def load_manifest(dist_root):
    p = manifest_path(dist_root)
    if os.path.exists(p):
        with open(p, "r", encoding="utf-8") as f:
            return json.load(f)
    return {"images": {}}  # {hash12: {"original": "...", "variants": [...], "ts": 12345}}

def save_manifest(dist_root, manifest):
    ensure_dir(os.path.join(dist_root, "images"))
    with open(manifest_path(dist_root), "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)

def filename_from_url(url):
    name = os.path.basename(urlparse(url).path)
    return name or "asset"

def download_remote_image(url, dest_dir):
    r = requests.get(url, timeout=30); r.raise_for_status()
    data = r.content
    ensure_dir(dest_dir)
    h = hash12(data)
    base = slugify_name(filename_from_url(url))
    out = os.path.join(dest_dir, f"{h}-{base}")
    if not os.path.exists(out):
        with open(out, "wb") as f: f.write(data)
    return out, h  # path + content-hash

def import_local_image(local_path, dest_dir):
    ensure_dir(dest_dir)
    with open(local_path, "rb") as f: data = f.read()
    h = hash12(data)
    base = slugify_name(os.path.basename(local_path))
    out = os.path.join(dest_dir, f"{h}-{base}")
    if not os.path.exists(out):
        with open(out, "wb") as f: f.write(data)
    return out, h

def make_variants(img_path, out_dir, widths, fmt="webp", quality=82):
    ensure_dir(out_dir); variants = []
    im = Image.open(img_path)
    w, h = im.size
    stem = slugify_name(os.path.splitext(os.path.basename(img_path))[0])
    ext = fmt if fmt != "keep" else os.path.splitext(img_path)[1].lstrip(".")

    for target in widths:
        if target >= w: continue
        ratio = target / float(w)
        size = (target, max(1, int(h * ratio)))
        im_resized = im.resize(size, Image.LANCZOS)
        out_path = os.path.join(out_dir, f"{stem}-{target}w.{ext}")
        save_kwargs = {}
        if ext.lower() in ("webp", "jpeg", "jpg", "png"):
            save_kwargs["quality"] = quality
        im_resized.save(out_path, format=pil_format_for(ext), **save_kwargs)
        variants.append((target, out_path))

    largest_path = os.path.join(out_dir, f"{stem}-{w}w.{ext}")
    if fmt == "keep":
        shutil.copy2(img_path, largest_path)
    else:
        im.save(largest_path, format=pil_format_for(ext), quality=quality)
    variants.append((w, largest_path))

    variants.sort(key=lambda t: t[0])
    return variants

def ensure_variants_with_cache(downloaded_path, content_hash, var_dir, widths, fmt, quality, manifest):
    entry = manifest["images"].get(content_hash)
    if entry and all(os.path.exists(p) for p in entry.get("variants", [])):
        return entry["variants"]
    pairs = make_variants(downloaded_path, var_dir, widths, fmt, quality)
    variant_paths = [p for _, p in pairs]
    manifest["images"][content_hash] = {
        "original": downloaded_path,
        "variants": variant_paths,
        "ts": int(time.time())
    }
    return variant_paths

# ----------------- CSS: url(...) rewriting (largest variant) -----------------
CSS_URL_RE = re.compile(r'url\((["\']?)([^\)\s]+)\1\)')

def rewrite_css_urls(file_path, cfg, dist_root, manifest):
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        css = f.read()

    css_dir = os.path.dirname(file_path)
    img_dir = os.path.join(dist_root, cfg["image_dir"])
    orig_dir = os.path.join(img_dir, "original")
    var_dir = os.path.join(img_dir, "responsive")

    def repl(m):
        src_abs = m.group(2)
        if src_abs.startswith("//"): src_abs = "https:" + src_abs
        try:
            if src_abs.startswith(("http://", "https://")):
                downloaded, h = download_remote_image(src_abs, orig_dir)
            else:
                local_candidate = os.path.normpath(os.path.join(css_dir, src_abs))
                if not os.path.exists(local_candidate):
                    local_candidate = os.path.join(dist_root, src_abs.lstrip("/"))
                if not os.path.exists(local_candidate):
                    return m.group(0)
                downloaded, h = import_local_image(local_candidate, orig_dir)

            variant_paths = ensure_variants_with_cache(
                downloaded, h, var_dir,
                cfg["image_variants"], cfg["image_format"], cfg["quality"],
                manifest
            )
            if not variant_paths:
                return m.group(0)

            # choose the largest variant
            def width_of(path):
                mm = re.search(r"-(\d+)w\.", os.path.basename(path))
                return int(mm.group(1)) if mm else 0
            largest = max(variant_paths, key=width_of)
            relv = os.path.relpath(largest, css_dir).replace(os.sep, "/")
            return f"url({quote(relv, safe='/:')})"
        except Exception:
            return m.group(0)

    new_css = CSS_URL_RE.sub(repl, css)
    if new_css != css:
        with open(file_path, "w", encoding="utf-8") as f: f.write(new_css)

# ----------------- HTML: <img> and <picture><source> -----------------
def rewrite_img_tags(file_path, cfg, dist_root, manifest):
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()
    soup = BeautifulSoup(html, "lxml")

    changed = False
    img_dir = os.path.join(dist_root, cfg["image_dir"])
    orig_dir = os.path.join(img_dir, "original")
    var_dir = os.path.join(img_dir, "responsive")
    html_dir = os.path.dirname(file_path)

    def process_one_image_url(src_abs):
        if src_abs.startswith("//"): src_abs = "https:" + src_abs
        if src_abs.startswith(("http://", "https://")):
            downloaded, h = download_remote_image(src_abs, orig_dir)
        else:
            local_candidate = os.path.normpath(os.path.join(html_dir, src_abs))
            if not os.path.exists(local_candidate):
                local_candidate = os.path.join(dist_root, src_abs.lstrip("/"))
            if not os.path.exists(local_candidate):
                return None
            downloaded, h = import_local_image(local_candidate, orig_dir)

        variant_paths = ensure_variants_with_cache(
            downloaded, h, var_dir,
            cfg["image_variants"], cfg["image_format"], cfg["quality"],
            manifest
        )
        if not variant_paths:
            return None

        pairs = []
        for p in variant_paths:
            m = re.search(r"-(\d+)w\.[^.]+$", os.path.basename(p))
            if m: pairs.append((int(m.group(1)), p))
        pairs.sort(key=lambda t: t[0])
        return pairs

    # <img>
    for img in soup.find_all("img"):
        if not cfg.get("download_images", True): continue
        src = img.get("src")
        if not src: continue
        pairs = process_one_image_url(src)
        if not pairs: continue

        mid = pairs[min(len(pairs)//2, len(pairs)-1)][1]
        src_rel = os.path.relpath(mid, html_dir).replace(os.sep, "/")
        src_rel = quote(src_rel, safe="/:")

        srcset_parts = []
        for w, p in pairs:
            relv = os.path.relpath(p, html_dir).replace(os.sep, "/")
            srcset_parts.append(f"{quote(relv, safe='/:')} {w}w")

        img["src"] = src_rel
        img["srcset"] = ", ".join(srcset_parts)
        if not img.get("sizes"):
            img["sizes"] = "(max-width: 1200px) 100vw, 1200px"
        changed = True

    # <picture><source>
    for source in soup.find_all("source"):
        if not cfg.get("download_images", True): continue
        srcset = source.get("srcset")
        if not srcset: continue
        first = srcset.split(",")[0].strip()
        if not first: continue
        first_url = first.split()[0]

        pairs = process_one_image_url(first_url)
        if not pairs: continue

        new_parts = []
        for w, p in pairs:
            relv = os.path.relpath(p, html_dir).replace(os.sep, "/")
            new_parts.append(f"{quote(relv, safe='/:')} {w}w")
        source["srcset"] = ", ".join(new_parts)
        changed = True

    if changed:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(soup.prettify())

# ----------------- Index + formatting (with cache) -----------------
def ensure_index(dist_root, preferred=""):
    index_path = os.path.join(dist_root, "index.html")
    if os.path.exists(index_path): return
    all_html = []
    for dirpath, _, filenames in os.walk(dist_root):
        for n in filenames:
            if n.lower().endswith(".html"):
                rel = os.path.relpath(os.path.join(dirpath, n), dist_root).replace(os.sep, "/")
                all_html.append(rel)
    cand = ""
    if preferred and any(os.path.basename(p) == preferred for p in all_html):
        cand = next(p for p in all_html if os.path.basename(p) == preferred)
    elif all_html:
        cand = all_html[0]
    meta = f'<meta http-equiv="refresh" content="0; url={cand}">' if cand else ""
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(f"<!doctype html><html><head><meta charset='utf-8'>{meta}<title>Index</title></head><body><p>Loading… <a href='{cand}'>Continue</a></p></body></html>")

def format_cache_path(dist_root): return os.path.join(dist_root, ".cache", "format.json")

def load_format_cache(dist_root):
    p = format_cache_path(dist_root)
    if os.path.exists(p):
        with open(p, "r", encoding="utf-8") as f: return json.load(f)
    return {}

def save_format_cache(dist_root, cache):
    ensure_dir(os.path.join(dist_root, ".cache"))
    with open(format_cache_path(dist_root), "w", encoding="utf-8") as f: json.dump(cache, f)

def format_code(dist_root, format_html=True, format_css_js=True, format_cache=None):
    try:
        import jsbeautifier
        have_jsb = True
    except Exception:
        have_jsb = False

    for dirpath, _, filenames in os.walk(dist_root):
        for n in filenames:
            p = os.path.join(dirpath, n)
            low = n.lower()

            # current content hash (for caching)
            try:
                with open(p, "rb") as f:
                    cur_hash = hashlib.sha1(f.read()).hexdigest()
            except Exception:
                cur_hash = None

            key = os.path.relpath(p, dist_root).replace(os.sep, "/")
            if format_cache is not None and key in format_cache and format_cache[key] == cur_hash:
                continue

            try:
                if format_html and low.endswith(".html"):
                    with open(p, "r", encoding="utf-8", errors="ignore") as f:
                        soup = BeautifulSoup(f.read(), "html.parser")
                    with open(p, "w", encoding="utf-8") as f:
                        f.write(soup.prettify())

                elif format_css_js and have_jsb and (low.endswith(".css") or low.endswith(".js")):
                    import jsbeautifier
                    with open(p, "r", encoding="utf-8", errors="ignore") as f:
                        txt = f.read()
                    opts = jsbeautifier.default_options()
                    opts.end_with_newline = True
                    if low.endswith(".css"):
                        formatted = jsbeautifier.beautify_css(txt, opts)
                    else:
                        formatted = jsbeautifier.beautify(txt, opts)
                    with open(p, "w", encoding="utf-8") as f:
                        f.write(formatted)

                # refresh hash after formatting
                with open(p, "rb") as f:
                    cur_hash = hashlib.sha1(f.read()).hexdigest()
                if format_cache is not None and cur_hash:
                    format_cache[key] = cur_hash

            except Exception:
                pass

# ----------------- CLI -----------------
def main():
    import argparse
    ap = argparse.ArgumentParser(description="Minimal post-export pipeline for Webflow/Exflow → Cloudflare Pages")
    ap.add_argument("--input", required=True, help="Path to export folder or .zip")
    ap.add_argument("--config", default="", help="Path to config JSON")
    ap.add_argument("--output", default="", help="Override output directory")
    args = ap.parse_args()

    cfg = load_config(args.config)
    dist_root = os.path.abspath(args.output or cfg["output_dir"])
    src = os.path.abspath(args.input)
    manifest = load_manifest(dist_root)

    print(">> Copying source..."); copy_src(src, dist_root)
    print(">> Fixing extensionless HTML..."); renamed = find_and_fix_extensionless_html(dist_root)
    if renamed: print(f"  - Renamed {len(renamed)} files")
    print(">> Rewriting intra-site links...")
    for dirpath, _, filenames in os.walk(dist_root):
        for n in filenames:
            if n.lower().endswith(".html"):
                rewrite_links_in_html(os.path.join(dirpath, n), renamed, dist_root)

    print(">> Ensuring index.html..."); ensure_index(dist_root, cfg.get("preferred_homepage",""))

    if cfg.get("download_images", True):
        print(">> Processing images (HTML)...")
        for dirpath, _, filenames in os.walk(dist_root):
            for n in filenames:
                if n.lower().endswith(".html"):
                    rewrite_img_tags(os.path.join(dirpath, n), cfg, dist_root, manifest)

        print(">> Processing images (CSS url(...))...")
        for dirpath, _, filenames in os.walk(dist_root):
            for n in filenames:
                if n.lower().endswith(".css"):
                    rewrite_css_urls(os.path.join(dirpath, n), cfg, dist_root, manifest)

    if cfg.get("format_html", True) or cfg.get("format_css_js", True):
        print(">> Formatting code...")
        format_cache = load_format_cache(dist_root)
        format_code(dist_root, cfg.get("format_html", True), cfg.get("format_css_js", True), format_cache)
        save_format_cache(dist_root, format_cache)

    save_manifest(dist_root, manifest)
    print(f"OK. Done. Output at: {dist_root}")

if __name__ == "__main__":
    main()
