(self.webpackChunk = self.webpackChunk || []).push([
    ["40"], {
        5487: function() {
            "use strict";
            window.tram = function(e) {
                function t(e, t) {
                    return (new M.Bare).init(e, t)
                }

                function a(e) {
                    var t = parseInt(e.slice(1), 16);
                    return [t >> 16 & 255, t >> 8 & 255, 255 & t]
                }

                function n(e, t, a) {
                    return "#" + (0x1000000 | e << 16 | t << 8 | a).toString(16).slice(1)
                }

                function i() {}

                function o(e, t, a) {
                    if (void 0 !== t && (a = t), void 0 === e) return a;
                    var n = a;
                    return $.test(e) || !K.test(e) ? n = parseInt(e, 10) : K.test(e) && (n = 1e3 * parseFloat(e)), 0 > n && (n = 0), n == n ? n : a
                }

                function d(e) {
                    Y.debug && window && window.console.warn(e)
                }
                var r, l, c, s = function(e, t, a) {
                        function n(e) {
                            return "object" == typeof e
                        }

                        function i(e) {
                            return "function" == typeof e
                        }

                        function o() {}
                        return function d(r, l) {
                            function c() {
                                var e = new s;
                                return i(e.init) && e.init.apply(e, arguments), e
                            }

                            function s() {}
                            l === a && (l = r, r = Object), c.Bare = s;
                            var u, f = o[e] = r[e],
                                p = s[e] = c[e] = new o;
                            return p.constructor = c, c.mixin = function(t) {
                                return s[e] = c[e] = d(c, t)[e], c
                            }, c.open = function(e) {
                                if (u = {}, i(e) ? u = e.call(c, p, f, c, r) : n(e) && (u = e), n(u))
                                    for (var a in u) t.call(u, a) && (p[a] = u[a]);
                                return i(p.init) || (p.init = r), c
                            }, c.open(l)
                        }
                    }("prototype", {}.hasOwnProperty),
                    u = {
                        ease: ["ease", function(e, t, a, n) {
                            var i = (e /= n) * e,
                                o = i * e;
                            return t + a * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * e)
                        }],
                        "ease-in": ["ease-in", function(e, t, a, n) {
                            var i = (e /= n) * e,
                                o = i * e;
                            return t + a * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                        }],
                        "ease-out": ["ease-out", function(e, t, a, n) {
                            var i = (e /= n) * e,
                                o = i * e;
                            return t + a * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                        }],
                        "ease-in-out": ["ease-in-out", function(e, t, a, n) {
                            var i = (e /= n) * e,
                                o = i * e;
                            return t + a * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                        }],
                        linear: ["linear", function(e, t, a, n) {
                            return a * e / n + t
                        }],
                        "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(e, t, a, n) {
                            return a * (e /= n) * e + t
                        }],
                        "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(e, t, a, n) {
                            return -a * (e /= n) * (e - 2) + t
                        }],
                        "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(e, t, a, n) {
                            return (e /= n / 2) < 1 ? a / 2 * e * e + t : -a / 2 * (--e * (e - 2) - 1) + t
                        }],
                        "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(e, t, a, n) {
                            return a * (e /= n) * e * e + t
                        }],
                        "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(e, t, a, n) {
                            return a * ((e = e / n - 1) * e * e + 1) + t
                        }],
                        "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(e, t, a, n) {
                            return (e /= n / 2) < 1 ? a / 2 * e * e * e + t : a / 2 * ((e -= 2) * e * e + 2) + t
                        }],
                        "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(e, t, a, n) {
                            return a * (e /= n) * e * e * e + t
                        }],
                        "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(e, t, a, n) {
                            return -a * ((e = e / n - 1) * e * e * e - 1) + t
                        }],
                        "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(e, t, a, n) {
                            return (e /= n / 2) < 1 ? a / 2 * e * e * e * e + t : -a / 2 * ((e -= 2) * e * e * e - 2) + t
                        }],
                        "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(e, t, a, n) {
                            return a * (e /= n) * e * e * e * e + t
                        }],
                        "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(e, t, a, n) {
                            return a * ((e = e / n - 1) * e * e * e * e + 1) + t
                        }],
                        "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(e, t, a, n) {
                            return (e /= n / 2) < 1 ? a / 2 * e * e * e * e * e + t : a / 2 * ((e -= 2) * e * e * e * e + 2) + t
                        }],
                        "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(e, t, a, n) {
                            return -a * Math.cos(e / n * (Math.PI / 2)) + a + t
                        }],
                        "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(e, t, a, n) {
                            return a * Math.sin(e / n * (Math.PI / 2)) + t
                        }],
                        "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(e, t, a, n) {
                            return -a / 2 * (Math.cos(Math.PI * e / n) - 1) + t
                        }],
                        "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(e, t, a, n) {
                            return 0 === e ? t : a * Math.pow(2, 10 * (e / n - 1)) + t
                        }],
                        "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(e, t, a, n) {
                            return e === n ? t + a : a * (-Math.pow(2, -10 * e / n) + 1) + t
                        }],
                        "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(e, t, a, n) {
                            return 0 === e ? t : e === n ? t + a : (e /= n / 2) < 1 ? a / 2 * Math.pow(2, 10 * (e - 1)) + t : a / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                        }],
                        "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(e, t, a, n) {
                            return -a * (Math.sqrt(1 - (e /= n) * e) - 1) + t
                        }],
                        "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(e, t, a, n) {
                            return a * Math.sqrt(1 - (e = e / n - 1) * e) + t
                        }],
                        "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(e, t, a, n) {
                            return (e /= n / 2) < 1 ? -a / 2 * (Math.sqrt(1 - e * e) - 1) + t : a / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                        }],
                        "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(e, t, a, n, i) {
                            return void 0 === i && (i = 1.70158), a * (e /= n) * e * ((i + 1) * e - i) + t
                        }],
                        "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(e, t, a, n, i) {
                            return void 0 === i && (i = 1.70158), a * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + t
                        }],
                        "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(e, t, a, n, i) {
                            return void 0 === i && (i = 1.70158), (e /= n / 2) < 1 ? a / 2 * e * e * (((i *= 1.525) + 1) * e - i) + t : a / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
                        }]
                    },
                    f = {
                        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                    },
                    p = window,
                    g = "bkwld-tram",
                    E = /[\-\.0-9]/g,
                    b = /[A-Z]/,
                    I = "number",
                    y = /^(rgb|#)/,
                    T = /(em|cm|mm|in|pt|pc|px)$/,
                    m = /(em|cm|mm|in|pt|pc|px|%)$/,
                    O = /(deg|rad|turn)$/,
                    _ = "unitless",
                    R = /(all|none) 0s ease 0s/,
                    v = /^(width|height)$/,
                    A = document.createElement("a"),
                    S = ["Webkit", "Moz", "O", "ms"],
                    h = ["-webkit-", "-moz-", "-o-", "-ms-"],
                    L = function(e) {
                        if (e in A.style) return {
                            dom: e,
                            css: e
                        };
                        var t, a, n = "",
                            i = e.split("-");
                        for (t = 0; t < i.length; t++) n += i[t].charAt(0).toUpperCase() + i[t].slice(1);
                        for (t = 0; t < S.length; t++)
                            if ((a = S[t] + n) in A.style) return {
                                dom: a,
                                css: h[t] + e
                            }
                    },
                    N = t.support = {
                        bind: Function.prototype.bind,
                        transform: L("transform"),
                        transition: L("transition"),
                        backface: L("backface-visibility"),
                        timing: L("transition-timing-function")
                    };
                if (N.transition) {
                    var C = N.timing.dom;
                    if (A.style[C] = u["ease-in-back"][0], !A.style[C])
                        for (var V in f) u[V][0] = f[V]
                }
                var G = t.frame = (r = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame) && N.bind ? r.bind(p) : function(e) {
                        p.setTimeout(e, 16)
                    },
                    x = t.now = (c = (l = p.performance) && (l.now || l.webkitNow || l.msNow || l.mozNow)) && N.bind ? c.bind(l) : Date.now || function() {
                        return +new Date
                    },
                    P = s(function(t) {
                        function a(e, t) {
                            var a = function(e) {
                                    for (var t = -1, a = e ? e.length : 0, n = []; ++t < a;) {
                                        var i = e[t];
                                        i && n.push(i)
                                    }
                                    return n
                                }(("" + e).split(" ")),
                                n = a[0];
                            t = t || {};
                            var i = z[n];
                            if (!i) return d("Unsupported property: " + n);
                            if (!t.weak || !this.props[n]) {
                                var o = i[0],
                                    r = this.props[n];
                                return r || (r = this.props[n] = new o.Bare), r.init(this.$el, a, i, t), r
                            }
                        }

                        function n(e, t, n) {
                            if (e) {
                                var d = typeof e;
                                if (t || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == d && t) return this.timer = new B({
                                    duration: e,
                                    context: this,
                                    complete: i
                                }), void(this.active = !0);
                                if ("string" == d && t) {
                                    switch (e) {
                                        case "hide":
                                            l.call(this);
                                            break;
                                        case "stop":
                                            r.call(this);
                                            break;
                                        case "redraw":
                                            c.call(this);
                                            break;
                                        default:
                                            a.call(this, e, n && n[1])
                                    }
                                    return i.call(this)
                                }
                                if ("function" == d) return void e.call(this, this);
                                if ("object" == d) {
                                    var f = 0;
                                    u.call(this, e, function(e, t) {
                                        e.span > f && (f = e.span), e.stop(), e.animate(t)
                                    }, function(e) {
                                        "wait" in e && (f = o(e.wait, 0))
                                    }), s.call(this), f > 0 && (this.timer = new B({
                                        duration: f,
                                        context: this
                                    }), this.active = !0, t && (this.timer.complete = i));
                                    var p = this,
                                        g = !1,
                                        E = {};
                                    G(function() {
                                        u.call(p, e, function(e) {
                                            e.active && (g = !0, E[e.name] = e.nextStyle)
                                        }), g && p.$el.css(E)
                                    })
                                }
                            }
                        }

                        function i() {
                            if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                                var e = this.queue.shift();
                                n.call(this, e.options, !0, e.args)
                            }
                        }

                        function r(e) {
                            var t;
                            this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof e ? (t = {})[e] = 1 : t = "object" == typeof e && null != e ? e : this.props, u.call(this, t, f), s.call(this)
                        }

                        function l() {
                            r.call(this), this.el.style.display = "none"
                        }

                        function c() {
                            this.el.offsetHeight
                        }

                        function s() {
                            var e, t, a = [];
                            for (e in this.upstream && a.push(this.upstream), this.props)(t = this.props[e]).active && a.push(t.string);
                            a = a.join(","), this.style !== a && (this.style = a, this.el.style[N.transition.dom] = a)
                        }

                        function u(e, t, n) {
                            var i, o, d, r, l = t !== f,
                                c = {};
                            for (i in e) d = e[i], i in W ? (c.transform || (c.transform = {}), c.transform[i] = d) : (b.test(i) && (i = i.replace(/[A-Z]/g, function(e) {
                                return "-" + e.toLowerCase()
                            })), i in z ? c[i] = d : (r || (r = {}), r[i] = d));
                            for (i in c) {
                                if (d = c[i], !(o = this.props[i])) {
                                    if (!l) continue;
                                    o = a.call(this, i)
                                }
                                t.call(this, o, d)
                            }
                            n && r && n.call(this, r)
                        }

                        function f(e) {
                            e.stop()
                        }

                        function p(e, t) {
                            e.set(t)
                        }

                        function E(e) {
                            this.$el.css(e)
                        }

                        function I(e, a) {
                            t[e] = function() {
                                return this.children ? y.call(this, a, arguments) : (this.el && a.apply(this, arguments), this)
                            }
                        }

                        function y(e, t) {
                            var a, n = this.children.length;
                            for (a = 0; n > a; a++) e.apply(this.children[a], t);
                            return this
                        }
                        t.init = function(t) {
                            if (this.$el = e(t), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, Y.keepInherited && !Y.fallback) {
                                var a = H(this.el, "transition");
                                a && !R.test(a) && (this.upstream = a)
                            }
                            N.backface && Y.hideBackface && Q(this.el, N.backface.css, "hidden")
                        }, I("add", a), I("start", n), I("wait", function(e) {
                            e = o(e, 0), this.active ? this.queue.push({
                                options: e
                            }) : (this.timer = new B({
                                duration: e,
                                context: this,
                                complete: i
                            }), this.active = !0)
                        }), I("then", function(e) {
                            return this.active ? (this.queue.push({
                                options: e,
                                args: arguments
                            }), void(this.timer.complete = i)) : d("No active transition timer. Use start() or wait() before then().")
                        }), I("next", i), I("stop", r), I("set", function(e) {
                            r.call(this, e), u.call(this, e, p, E)
                        }), I("show", function(e) {
                            "string" != typeof e && (e = "block"), this.el.style.display = e
                        }), I("hide", l), I("redraw", c), I("destroy", function() {
                            r.call(this), e.removeData(this.el, g), this.$el = this.el = null
                        })
                    }),
                    M = s(P, function(t) {
                        function a(t, a) {
                            var n = e.data(t, g) || e.data(t, g, new P.Bare);
                            return n.el || n.init(t), a ? n.start(a) : n
                        }
                        t.init = function(t, n) {
                            var i = e(t);
                            if (!i.length) return this;
                            if (1 === i.length) return a(i[0], n);
                            var o = [];
                            return i.each(function(e, t) {
                                o.push(a(t, n))
                            }), this.children = o, this
                        }
                    }),
                    w = s(function(e) {
                        function t() {
                            var e = this.get();
                            this.update("auto");
                            var t = this.get();
                            return this.update(e), t
                        }
                        e.init = function(e, t, a, n) {
                            this.$el = e, this.el = e[0];
                            var i, d, r, l = t[0];
                            a[2] && (l = a[2]), j[l] && (l = j[l]), this.name = l, this.type = a[1], this.duration = o(t[1], this.duration, 500), this.ease = (i = t[2], d = this.ease, r = "ease", void 0 !== d && (r = d), i in u ? i : r), this.delay = o(t[3], this.delay, 0), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = v.test(this.name), this.unit = n.unit || this.unit || Y.defaultUnit, this.angle = n.angle || this.angle || Y.defaultAngle, Y.fallback || n.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + " " + this.duration + "ms" + ("ease" != this.ease ? " " + u[this.ease][0] : "") + (this.delay ? " " + this.delay + "ms" : ""))
                        }, e.set = function(e) {
                            e = this.convert(e, this.type), this.update(e), this.redraw()
                        }, e.transition = function(e) {
                            this.active = !0, e = this.convert(e, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == e && (e = t.call(this))), this.nextStyle = e
                        }, e.fallback = function(e) {
                            var a = this.el.style[this.name] || this.convert(this.get(), this.type);
                            e = this.convert(e, this.type), this.auto && ("auto" == a && (a = this.convert(this.get(), this.type)), "auto" == e && (e = t.call(this))), this.tween = new D({
                                from: a,
                                to: e,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.get = function() {
                            return H(this.el, this.name)
                        }, e.update = function(e) {
                            Q(this.el, this.name, e)
                        }, e.stop = function() {
                            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, Q(this.el, this.name, this.get()));
                            var e = this.tween;
                            e && e.context && e.destroy()
                        }, e.convert = function(e, t) {
                            if ("auto" == e && this.auto) return e;
                            var a, i, o = "number" == typeof e,
                                r = "string" == typeof e;
                            switch (t) {
                                case I:
                                    if (o) return e;
                                    if (r && "" === e.replace(E, "")) return +e;
                                    i = "number(unitless)";
                                    break;
                                case y:
                                    if (r) {
                                        if ("" === e && this.original) return this.original;
                                        if (t.test(e)) return "#" == e.charAt(0) && 7 == e.length ? e : ((a = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e)) ? n(a[1], a[2], a[3]) : e).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                                    }
                                    i = "hex or rgb string";
                                    break;
                                case T:
                                    if (o) return e + this.unit;
                                    if (r && t.test(e)) return e;
                                    i = "number(px) or string(unit)";
                                    break;
                                case m:
                                    if (o) return e + this.unit;
                                    if (r && t.test(e)) return e;
                                    i = "number(px) or string(unit or %)";
                                    break;
                                case O:
                                    if (o) return e + this.angle;
                                    if (r && t.test(e)) return e;
                                    i = "number(deg) or string(angle)";
                                    break;
                                case _:
                                    if (o || r && m.test(e)) return e;
                                    i = "number(unitless) or string(unit or %)"
                            }
                            return d("Type warning: Expected: [" + i + "] Got: [" + typeof e + "] " + e), e
                        }, e.redraw = function() {
                            this.el.offsetHeight
                        }
                    }),
                    U = s(w, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), y))
                        }
                    }),
                    k = s(w, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.animate = this.fallback
                        }, e.get = function() {
                            return this.$el[this.name]()
                        }, e.update = function(e) {
                            this.$el[this.name](e)
                        }
                    }),
                    F = s(w, function(e, t) {
                        function a(e, t) {
                            var a, n, i, o, d;
                            for (a in e) i = (o = W[a])[0], n = o[1] || a, d = this.convert(e[a], i), t.call(this, n, d, i)
                        }
                        e.init = function() {
                            t.init.apply(this, arguments), this.current || (this.current = {}, W.perspective && Y.perspective && (this.current.perspective = Y.perspective, Q(this.el, this.name, this.style(this.current)), this.redraw()))
                        }, e.set = function(e) {
                            a.call(this, e, function(e, t) {
                                this.current[e] = t
                            }), Q(this.el, this.name, this.style(this.current)), this.redraw()
                        }, e.transition = function(e) {
                            var t = this.values(e);
                            this.tween = new X({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease
                            });
                            var a, n = {};
                            for (a in this.current) n[a] = a in t ? t[a] : this.current[a];
                            this.active = !0, this.nextStyle = this.style(n)
                        }, e.fallback = function(e) {
                            var t = this.values(e);
                            this.tween = new X({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.update = function() {
                            Q(this.el, this.name, this.style(this.current))
                        }, e.style = function(e) {
                            var t, a = "";
                            for (t in e) a += t + "(" + e[t] + ") ";
                            return a
                        }, e.values = function(e) {
                            var t, n = {};
                            return a.call(this, e, function(e, a, i) {
                                n[e] = a, void 0 === this.current[e] && (t = 0, ~e.indexOf("scale") && (t = 1), this.current[e] = this.convert(t, i))
                            }), n
                        }
                    }),
                    D = s(function(t) {
                        function o() {
                            var e, t, a, n = l.length;
                            if (n)
                                for (G(o), t = x(), e = n; e--;)(a = l[e]) && a.render(t)
                        }
                        var r = {
                            ease: u.ease[1],
                            from: 0,
                            to: 1
                        };
                        t.init = function(e) {
                            this.duration = e.duration || 0, this.delay = e.delay || 0;
                            var t = e.ease || r.ease;
                            u[t] && (t = u[t][1]), "function" != typeof t && (t = r.ease), this.ease = t, this.update = e.update || i, this.complete = e.complete || i, this.context = e.context || this, this.name = e.name;
                            var a = e.from,
                                n = e.to;
                            void 0 === a && (a = r.from), void 0 === n && (n = r.to), this.unit = e.unit || "", "number" == typeof a && "number" == typeof n ? (this.begin = a, this.change = n - a) : this.format(n, a), this.value = this.begin + this.unit, this.start = x(), !1 !== e.autoplay && this.play()
                        }, t.play = function() {
                            this.active || (this.start || (this.start = x()), this.active = !0, 1 === l.push(this) && G(o))
                        }, t.stop = function() {
                            var t, a;
                            this.active && (this.active = !1, (a = e.inArray(this, l)) >= 0 && (t = l.slice(a + 1), l.length = a, t.length && (l = l.concat(t))))
                        }, t.render = function(e) {
                            var t, a = e - this.start;
                            if (this.delay) {
                                if (a <= this.delay) return;
                                a -= this.delay
                            }
                            if (a < this.duration) {
                                var i, o, d = this.ease(a, 0, 1, this.duration);
                                return t = this.startRGB ? (i = this.startRGB, o = this.endRGB, n(i[0] + d * (o[0] - i[0]), i[1] + d * (o[1] - i[1]), i[2] + d * (o[2] - i[2]))) : Math.round((this.begin + d * this.change) * c) / c, this.value = t + this.unit, void this.update.call(this.context, this.value)
                            }
                            t = this.endHex || this.begin + this.change, this.value = t + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                        }, t.format = function(e, t) {
                            if (t += "", "#" == (e += "").charAt(0)) return this.startRGB = a(t), this.endRGB = a(e), this.endHex = e, this.begin = 0, void(this.change = 1);
                            if (!this.unit) {
                                var n = t.replace(E, "");
                                n !== e.replace(E, "") && d("Units do not match [tween]: " + t + ", " + e), this.unit = n
                            }
                            t = parseFloat(t), e = parseFloat(e), this.begin = this.value = t, this.change = e - t
                        }, t.destroy = function() {
                            this.stop(), this.context = null, this.ease = this.update = this.complete = i
                        };
                        var l = [],
                            c = 1e3
                    }),
                    B = s(D, function(e) {
                        e.init = function(e) {
                            this.duration = e.duration || 0, this.complete = e.complete || i, this.context = e.context, this.play()
                        }, e.render = function(e) {
                            e - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                        }
                    }),
                    X = s(D, function(e, t) {
                        e.init = function(e) {
                            var t, a;
                            for (t in this.context = e.context, this.update = e.update, this.tweens = [], this.current = e.current, e.values) a = e.values[t], this.current[t] !== a && this.tweens.push(new D({
                                name: t,
                                from: this.current[t],
                                to: a,
                                duration: e.duration,
                                delay: e.delay,
                                ease: e.ease,
                                autoplay: !1
                            }));
                            this.play()
                        }, e.render = function(e) {
                            var t, a, n = this.tweens.length,
                                i = !1;
                            for (t = n; t--;)(a = this.tweens[t]).context && (a.render(e), this.current[a.name] = a.value, i = !0);
                            return i ? void(this.update && this.update.call(this.context)) : this.destroy()
                        }, e.destroy = function() {
                            if (t.destroy.call(this), this.tweens) {
                                var e;
                                for (e = this.tweens.length; e--;) this.tweens[e].destroy();
                                this.tweens = null, this.current = null
                            }
                        }
                    }),
                    Y = t.config = {
                        debug: !1,
                        defaultUnit: "px",
                        defaultAngle: "deg",
                        keepInherited: !1,
                        hideBackface: !1,
                        perspective: "",
                        fallback: !N.transition,
                        agentTests: []
                    };
                t.fallback = function(e) {
                    if (!N.transition) return Y.fallback = !0;
                    Y.agentTests.push("(" + e + ")");
                    var t = RegExp(Y.agentTests.join("|"), "i");
                    Y.fallback = t.test(navigator.userAgent)
                }, t.fallback("6.0.[2-5] Safari"), t.tween = function(e) {
                    return new D(e)
                }, t.delay = function(e, t, a) {
                    return new B({
                        complete: t,
                        duration: e,
                        context: a
                    })
                }, e.fn.tram = function(e) {
                    return t.call(null, this, e)
                };
                var Q = e.style,
                    H = e.css,
                    j = {
                        transform: N.transform && N.transform.css
                    },
                    z = {
                        color: [U, y],
                        background: [U, y, "background-color"],
                        "outline-color": [U, y],
                        "border-color": [U, y],
                        "border-top-color": [U, y],
                        "border-right-color": [U, y],
                        "border-bottom-color": [U, y],
                        "border-left-color": [U, y],
                        "border-width": [w, T],
                        "border-top-width": [w, T],
                        "border-right-width": [w, T],
                        "border-bottom-width": [w, T],
                        "border-left-width": [w, T],
                        "border-spacing": [w, T],
                        "letter-spacing": [w, T],
                        margin: [w, T],
                        "margin-top": [w, T],
                        "margin-right": [w, T],
                        "margin-bottom": [w, T],
                        "margin-left": [w, T],
                        padding: [w, T],
                        "padding-top": [w, T],
                        "padding-right": [w, T],
                        "padding-bottom": [w, T],
                        "padding-left": [w, T],
                        "outline-width": [w, T],
                        opacity: [w, I],
                        top: [w, m],
                        right: [w, m],
                        bottom: [w, m],
                        left: [w, m],
                        "font-size": [w, m],
                        "text-indent": [w, m],
                        "word-spacing": [w, m],
                        width: [w, m],
                        "min-width": [w, m],
                        "max-width": [w, m],
                        height: [w, m],
                        "min-height": [w, m],
                        "max-height": [w, m],
                        "line-height": [w, _],
                        "scroll-top": [k, I, "scrollTop"],
                        "scroll-left": [k, I, "scrollLeft"]
                    },
                    W = {};
                N.transform && (z.transform = [F], W = {
                    x: [m, "translateX"],
                    y: [m, "translateY"],
                    rotate: [O],
                    rotateX: [O],
                    rotateY: [O],
                    scale: [I],
                    scaleX: [I],
                    scaleY: [I],
                    skew: [O],
                    skewX: [O],
                    skewY: [O]
                }), N.transform && N.backface && (W.z = [m, "translateZ"], W.rotateZ = [O], W.scaleZ = [I], W.perspective = [T]);
                var $ = /ms/,
                    K = /s|\./;
                return e.tram = t
            }(window.jQuery)
        },
        5756: function(e, t, a) {
            "use strict";
            var n, i, o, d, r, l, c, s, u, f, p, g, E, b, I, y, T, m, O, _, R = window.$,
                v = a(5487) && R.tram;
            (n = {}).VERSION = "1.6.0-Webflow", i = {}, o = Array.prototype, d = Object.prototype, r = Function.prototype, o.push, l = o.slice, o.concat, d.toString, c = d.hasOwnProperty, s = o.forEach, u = o.map, o.reduce, o.reduceRight, f = o.filter, o.every, p = o.some, g = o.indexOf, o.lastIndexOf, E = Object.keys, r.bind, b = n.each = n.forEach = function(e, t, a) {
                if (null == e) return e;
                if (s && e.forEach === s) e.forEach(t, a);
                else if (e.length === +e.length) {
                    for (var o = 0, d = e.length; o < d; o++)
                        if (t.call(a, e[o], o, e) === i) return
                } else
                    for (var r = n.keys(e), o = 0, d = r.length; o < d; o++)
                        if (t.call(a, e[r[o]], r[o], e) === i) return;
                return e
            }, n.map = n.collect = function(e, t, a) {
                var n = [];
                return null == e ? n : u && e.map === u ? e.map(t, a) : (b(e, function(e, i, o) {
                    n.push(t.call(a, e, i, o))
                }), n)
            }, n.find = n.detect = function(e, t, a) {
                var n;
                return I(e, function(e, i, o) {
                    if (t.call(a, e, i, o)) return n = e, !0
                }), n
            }, n.filter = n.select = function(e, t, a) {
                var n = [];
                return null == e ? n : f && e.filter === f ? e.filter(t, a) : (b(e, function(e, i, o) {
                    t.call(a, e, i, o) && n.push(e)
                }), n)
            }, I = n.some = n.any = function(e, t, a) {
                t || (t = n.identity);
                var o = !1;
                return null == e ? o : p && e.some === p ? e.some(t, a) : (b(e, function(e, n, d) {
                    if (o || (o = t.call(a, e, n, d))) return i
                }), !!o)
            }, n.contains = n.include = function(e, t) {
                return null != e && (g && e.indexOf === g ? -1 != e.indexOf(t) : I(e, function(e) {
                    return e === t
                }))
            }, n.delay = function(e, t) {
                var a = l.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, a)
                }, t)
            }, n.defer = function(e) {
                return n.delay.apply(n, [e, 1].concat(l.call(arguments, 1)))
            }, n.throttle = function(e) {
                var t, a, n;
                return function() {
                    t || (t = !0, a = arguments, n = this, v.frame(function() {
                        t = !1, e.apply(n, a)
                    }))
                }
            }, n.debounce = function(e, t, a) {
                var i, o, d, r, l, c = function() {
                    var s = n.now() - r;
                    s < t ? i = setTimeout(c, t - s) : (i = null, a || (l = e.apply(d, o), d = o = null))
                };
                return function() {
                    d = this, o = arguments, r = n.now();
                    var s = a && !i;
                    return i || (i = setTimeout(c, t)), s && (l = e.apply(d, o), d = o = null), l
                }
            }, n.defaults = function(e) {
                if (!n.isObject(e)) return e;
                for (var t = 1, a = arguments.length; t < a; t++) {
                    var i = arguments[t];
                    for (var o in i) void 0 === e[o] && (e[o] = i[o])
                }
                return e
            }, n.keys = function(e) {
                if (!n.isObject(e)) return [];
                if (E) return E(e);
                var t = [];
                for (var a in e) n.has(e, a) && t.push(a);
                return t
            }, n.has = function(e, t) {
                return c.call(e, t)
            }, n.isObject = function(e) {
                return e === Object(e)
            }, n.now = Date.now || function() {
                return new Date().getTime()
            }, n.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            }, y = /(.)^/, T = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, m = /\\|'|\r|\n|\u2028|\u2029/g, O = function(e) {
                return "\\" + T[e]
            }, _ = /^\s*(\w|\$)+\s*$/, n.template = function(e, t, a) {
                !t && a && (t = a);
                var i, o = RegExp([((t = n.defaults({}, t, n.templateSettings)).escape || y).source, (t.interpolate || y).source, (t.evaluate || y).source].join("|") + "|$", "g"),
                    d = 0,
                    r = "__p+='";
                e.replace(o, function(t, a, n, i, o) {
                    return r += e.slice(d, o).replace(m, O), d = o + t.length, a ? r += "'+\n((__t=(" + a + "))==null?'':_.escape(__t))+\n'" : n ? r += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : i && (r += "';\n" + i + "\n__p+='"), t
                }), r += "';\n";
                var l = t.variable;
                if (l) {
                    if (!_.test(l)) throw Error("variable is not a bare identifier: " + l)
                } else r = "with(obj||{}){\n" + r + "}\n", l = "obj";
                r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
                try {
                    i = Function(t.variable || "obj", "_", r)
                } catch (e) {
                    throw e.source = r, e
                }
                var c = function(e) {
                    return i.call(this, e, n)
                };
                return c.source = "function(" + l + "){\n" + r + "}", c
            }, e.exports = n
        },
        9461: function(e, t, a) {
            "use strict";
            var n = a(3949);
            n.define("brand", e.exports = function() {}, function(e) {
                var t, a = {},
                    i = document,
                    o = e("html"),
                    d = e("body"),
                    r = window.location,
                    l = /PhantomJS/i.test(navigator.userAgent),
                    c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

                function s() {
                    var a = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || !!i.webkitFullscreenElement;
                    e(t).attr("style", a ? "display: none !important;" : "")
                }

                function u() {
                    var e = d.children(".w-webflow-badge"),
                        a = e.length && e.get(0) === t,
                        i = n.env("editor");
                    if (a) {
                        i && e.remove();
                        return
                    }
                    e.length && e.remove(), i || d.append(t)
                }
                return a.ready = function() {
                    var a, n, d, f = o.attr("data-wf-status"),
                        p = o.attr("data-wf-domain") || "";
                    /\.webflow\.io$/i.test(p) && r.hostname !== p && (f = !0), f && !l && (t = t || (a = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), n = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }), d = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow"), a.append(n, d), a[0]), u(), setTimeout(u, 500), e(i).off(c, s).on(c, s))
                }, a
            })
        },
        322: function(e, t, a) {
            "use strict";
            var n = a(3949);
            n.define("edit", e.exports = function(e, t, a) {
                if (a = a || {}, (n.env("test") || n.env("frame")) && !a.fixture && ! function() {
                        try {
                            return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST)
                        } catch (e) {
                            return !1
                        }
                    }()) return {
                    exit: 1
                };
                var i, o = e(window),
                    d = e(document.documentElement),
                    r = document.location,
                    l = "hashchange",
                    c = a.load || function() {
                        var t, a, n;
                        i = !0, window.WebflowEditor = !0, o.off(l, u), t = function(t) {
                            var a;
                            e.ajax({
                                url: p("https://editor-api.webflow.com/api/editor/view"),
                                data: {
                                    siteId: d.attr("data-wf-site")
                                },
                                xhrFields: {
                                    withCredentials: !0
                                },
                                dataType: "json",
                                crossDomain: !0,
                                success: (a = t, function(t) {
                                    var n, i, o;
                                    if (!t) return void console.error("Could not load editor data");
                                    t.thirdPartyCookiesSupported = a, i = (n = t.scriptPath).indexOf("//") >= 0 ? n : p("https://editor-api.webflow.com" + n), o = function() {
                                        window.WebflowEditor(t)
                                    }, e.ajax({
                                        type: "GET",
                                        url: i,
                                        dataType: "script",
                                        cache: !0
                                    }).then(o, f)
                                })
                            })
                        }, (a = window.document.createElement("iframe")).src = "https://webflow.com/site/third-party-cookie-check.html", a.style.display = "none", a.sandbox = "allow-scripts allow-same-origin", n = function(e) {
                            "WF_third_party_cookies_unsupported" === e.data ? (g(a, n), t(!1)) : "WF_third_party_cookies_supported" === e.data && (g(a, n), t(!0))
                        }, a.onerror = function() {
                            g(a, n), t(!1)
                        }, window.addEventListener("message", n, !1), window.document.body.appendChild(a)
                    },
                    s = !1;
                try {
                    s = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
                } catch (e) {}

                function u() {
                    !i && /\?edit/.test(r.hash) && c()
                }

                function f(e, t, a) {
                    throw console.error("Could not load editor script: " + t), a
                }

                function p(e) {
                    return e.replace(/([^:])\/\//g, "$1/")
                }

                function g(e, t) {
                    window.removeEventListener("message", t, !1), e.remove()
                }
                return s ? c() : r.search ? (/[?&](edit)(?:[=&?]|$)/.test(r.search) || /\?edit$/.test(r.href)) && c() : o.on(l, u).triggerHandler(l), {}
            })
        },
        2338: function(e, t, a) {
            "use strict";
            a(3949).define("focus-visible", e.exports = function() {
                return {
                    ready: function() {
                        if ("undefined" != typeof document) try {
                            document.querySelector(":focus-visible")
                        } catch (e) {
                            ! function(e) {
                                var t = !0,
                                    a = !1,
                                    n = null,
                                    i = {
                                        text: !0,
                                        search: !0,
                                        url: !0,
                                        tel: !0,
                                        email: !0,
                                        password: !0,
                                        number: !0,
                                        date: !0,
                                        month: !0,
                                        week: !0,
                                        time: !0,
                                        datetime: !0,
                                        "datetime-local": !0
                                    };

                                function o(e) {
                                    return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList
                                }

                                function d(e) {
                                    e.getAttribute("data-wf-focus-visible") || e.setAttribute("data-wf-focus-visible", "true")
                                }

                                function r() {
                                    t = !1
                                }

                                function l() {
                                    document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c)
                                }

                                function c(e) {
                                    e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c))
                                }
                                document.addEventListener("keydown", function(a) {
                                    a.metaKey || a.altKey || a.ctrlKey || (o(e.activeElement) && d(e.activeElement), t = !0)
                                }, !0), document.addEventListener("mousedown", r, !0), document.addEventListener("pointerdown", r, !0), document.addEventListener("touchstart", r, !0), document.addEventListener("visibilitychange", function() {
                                    "hidden" === document.visibilityState && (a && (t = !0), l())
                                }, !0), l(), e.addEventListener("focus", function(e) {
                                    if (o(e.target)) {
                                        var a, n, r;
                                        (t || (n = (a = e.target).type, "INPUT" === (r = a.tagName) && i[n] && !a.readOnly || "TEXTAREA" === r && !a.readOnly || a.isContentEditable || 0)) && d(e.target)
                                    }
                                }, !0), e.addEventListener("blur", function(e) {
                                    if (o(e.target) && e.target.hasAttribute("data-wf-focus-visible")) {
                                        var t;
                                        a = !0, window.clearTimeout(n), n = window.setTimeout(function() {
                                            a = !1
                                        }, 100), (t = e.target).getAttribute("data-wf-focus-visible") && t.removeAttribute("data-wf-focus-visible")
                                    }
                                }, !0)
                            }(document)
                        }
                    }
                }
            })
        },
        8334: function(e, t, a) {
            "use strict";
            var n = a(3949);
            n.define("focus", e.exports = function() {
                var e = [],
                    t = !1;

                function a(a) {
                    t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
                }

                function i(a) {
                    var n, i;
                    i = (n = a.target).tagName, (/^a$/i.test(i) && null != n.href || /^(button|textarea)$/i.test(i) && !0 !== n.disabled || /^input$/i.test(i) && /^(button|reset|submit|radio|checkbox)$/i.test(n.type) && !n.disabled || !/^(button|input|textarea|select|a)$/i.test(i) && !Number.isNaN(Number.parseFloat(n.tabIndex)) || /^audio$/i.test(i) || /^video$/i.test(i) && !0 === n.controls) && (t = !0, setTimeout(() => {
                        for (t = !1, a.target.focus(); e.length > 0;) {
                            var n = e.pop();
                            n.target.dispatchEvent(new MouseEvent(n.type, n))
                        }
                    }, 0))
                }
                return {
                    ready: function() {
                        "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && n.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", a, !0), document.addEventListener("click", a, !0))
                    }
                }
            })
        },
        7199: function(e) {
            "use strict";
            var t = window.jQuery,
                a = {},
                n = [],
                i = ".w-ix",
                o = {
                    reset: function(e, t) {
                        t.__wf_intro = null
                    },
                    intro: function(e, n) {
                        n.__wf_intro || (n.__wf_intro = !0, t(n).triggerHandler(a.types.INTRO))
                    },
                    outro: function(e, n) {
                        n.__wf_intro && (n.__wf_intro = null, t(n).triggerHandler(a.types.OUTRO))
                    }
                };
            a.triggers = {}, a.types = {
                INTRO: "w-ix-intro" + i,
                OUTRO: "w-ix-outro" + i
            }, a.init = function() {
                for (var e = n.length, i = 0; i < e; i++) {
                    var d = n[i];
                    d[0](0, d[1])
                }
                n = [], t.extend(a.triggers, o)
            }, a.async = function() {
                for (var e in o) {
                    var t = o[e];
                    o.hasOwnProperty(e) && (a.triggers[e] = function(e, a) {
                        n.push([t, a])
                    })
                }
            }, a.async(), e.exports = a
        },
        5134: function(e, t, a) {
            "use strict";
            var n = a(7199);

            function i(e, t) {
                var a = document.createEvent("CustomEvent");
                a.initCustomEvent(t, !0, !0, null), e.dispatchEvent(a)
            }
            var o = window.jQuery,
                d = {},
                r = ".w-ix";
            d.triggers = {}, d.types = {
                INTRO: "w-ix-intro" + r,
                OUTRO: "w-ix-outro" + r
            }, o.extend(d.triggers, {
                reset: function(e, t) {
                    n.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    n.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    n.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE")
                }
            }), e.exports = d
        },
        941: function(e, t, a) {
            "use strict";
            var n = a(3949),
                i = a(6011);
            i.setEnv(n.env), n.define("ix2", e.exports = function() {
                return i
            })
        },
        3949: function(e, t, a) {
            "use strict";
            var n, i, o = {},
                d = {},
                r = [],
                l = window.Webflow || [],
                c = window.jQuery,
                s = c(window),
                u = c(document),
                f = c.isFunction,
                p = o._ = a(5756),
                g = o.tram = a(5487) && c.tram,
                E = !1,
                b = !1;

            function I(e) {
                o.env() && (f(e.design) && s.on("__wf_design", e.design), f(e.preview) && s.on("__wf_preview", e.preview)), f(e.destroy) && s.on("__wf_destroy", e.destroy), e.ready && f(e.ready) && function(e) {
                    if (E) return e.ready();
                    p.contains(r, e.ready) || r.push(e.ready)
                }(e)
            }

            function y(e) {
                var t;
                f(e.design) && s.off("__wf_design", e.design), f(e.preview) && s.off("__wf_preview", e.preview), f(e.destroy) && s.off("__wf_destroy", e.destroy), e.ready && f(e.ready) && (t = e, r = p.filter(r, function(e) {
                    return e !== t.ready
                }))
            }
            g.config.hideBackface = !1, g.config.keepInherited = !0, o.define = function(e, t, a) {
                d[e] && y(d[e]);
                var n = d[e] = t(c, p, a) || {};
                return I(n), n
            }, o.require = function(e) {
                return d[e]
            }, o.push = function(e) {
                if (E) {
                    f(e) && e();
                    return
                }
                l.push(e)
            }, o.env = function(e) {
                var t = window.__wf_design,
                    a = void 0 !== t;
                return e ? "design" === e ? a && t : "preview" === e ? a && !t : "slug" === e ? a && window.__wf_slug : "editor" === e ? window.WebflowEditor : "test" === e ? window.__wf_test : "frame" === e ? window !== window.top : void 0 : a
            };
            var T = navigator.userAgent.toLowerCase(),
                m = o.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                O = o.env.chrome = /chrome/.test(T) && /Google/.test(navigator.vendor) && parseInt(T.match(/chrome\/(\d+)\./)[1], 10),
                _ = o.env.ios = /(ipod|iphone|ipad)/.test(T);
            o.env.safari = /safari/.test(T) && !O && !_, m && u.on("touchstart mousedown", function(e) {
                n = e.target
            }), o.validClick = m ? function(e) {
                return e === n || c.contains(e, n)
            } : function() {
                return !0
            };
            var R = "resize.webflow orientationchange.webflow load.webflow",
                v = "scroll.webflow " + R;

            function A(e, t) {
                var a = [],
                    n = {};
                return n.up = p.throttle(function(e) {
                    p.each(a, function(t) {
                        t(e)
                    })
                }), e && t && e.on(t, n.up), n.on = function(e) {
                    "function" == typeof e && (p.contains(a, e) || a.push(e))
                }, n.off = function(e) {
                    if (!arguments.length) {
                        a = [];
                        return
                    }
                    a = p.filter(a, function(t) {
                        return t !== e
                    })
                }, n
            }

            function S(e) {
                f(e) && e()
            }

            function h() {
                i && (i.reject(), s.off("load", i.resolve)), i = new c.Deferred, s.on("load", i.resolve)
            }
            o.resize = A(s, R), o.scroll = A(s, v), o.redraw = A(), o.location = function(e) {
                window.location = e
            }, o.env() && (o.location = function() {}), o.ready = function() {
                E = !0, b ? (b = !1, p.each(d, I)) : p.each(r, S), p.each(l, S), o.resize.up()
            }, o.load = function(e) {
                i.then(e)
            }, o.destroy = function(e) {
                e = e || {}, b = !0, s.triggerHandler("__wf_destroy"), null != e.domready && (E = e.domready), p.each(d, y), o.resize.off(), o.scroll.off(), o.redraw.off(), r = [], l = [], "pending" === i.state() && h()
            }, c(o.ready), h(), e.exports = window.Webflow = o
        },
        7624: function(e, t, a) {
            "use strict";
            var n = a(3949);
            n.define("links", e.exports = function(e, t) {
                var a, i, o, d = {},
                    r = e(window),
                    l = n.env(),
                    c = window.location,
                    s = document.createElement("a"),
                    u = "w--current",
                    f = /index\.(html|php)$/,
                    p = /\/$/;

                function g() {
                    var e = r.scrollTop(),
                        a = r.height();
                    t.each(i, function(t) {
                        if (!t.link.attr("hreflang")) {
                            var n = t.link,
                                i = t.sec,
                                o = i.offset().top,
                                d = i.outerHeight(),
                                r = .5 * a,
                                l = i.is(":visible") && o + d - r >= e && o + r <= e + a;
                            t.active !== l && (t.active = l, E(n, u, l))
                        }
                    })
                }

                function E(e, t, a) {
                    var n = e.hasClass(t);
                    (!a || !n) && (a || n) && (a ? e.addClass(t) : e.removeClass(t))
                }
                return d.ready = d.design = d.preview = function() {
                    a = l && n.env("design"), o = n.env("slug") || c.pathname || "", n.scroll.off(g), i = [];
                    for (var t = document.links, d = 0; d < t.length; ++d) ! function(t) {
                        if (!t.getAttribute("hreflang")) {
                            var n = a && t.getAttribute("href-disabled") || t.getAttribute("href");
                            if (s.href = n, !(n.indexOf(":") >= 0)) {
                                var d = e(t);
                                if (s.hash.length > 1 && s.host + s.pathname === c.host + c.pathname) {
                                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                                    var r = e(s.hash);
                                    r.length && i.push({
                                        link: d,
                                        sec: r,
                                        active: !1
                                    });
                                    return
                                }
                                "#" !== n && "" !== n && E(d, u, s.href === c.href || n === o || f.test(n) && p.test(o))
                            }
                        }
                    }(t[d]);
                    i.length && (n.scroll.on(g), g())
                }, d
            })
        },
        286: function(e, t, a) {
            "use strict";
            var n = a(3949);
            n.define("scroll", e.exports = function(e) {
                var t = {
                        WF_CLICK_EMPTY: "click.wf-empty-link",
                        WF_CLICK_SCROLL: "click.wf-scroll"
                    },
                    a = window.location,
                    i = ! function() {
                        try {
                            return !!window.frameElement
                        } catch (e) {
                            return !0
                        }
                    }() ? window.history : null,
                    o = e(window),
                    d = e(document),
                    r = e(document.body),
                    l = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 15)
                    },
                    c = n.env("editor") ? ".w-editor-body" : "body",
                    s = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])",
                    u = 'a[href="#"]',
                    f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
                    p = document.createElement("style");
                p.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
                var g = /^#[a-zA-Z0-9][\w:.-]*$/;
                let E = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

                function b(e, t) {
                    var a;
                    switch (t) {
                        case "add":
                            (a = e.attr("tabindex")) ? e.attr("data-wf-tabindex-swap", a): e.attr("tabindex", "-1");
                            break;
                        case "remove":
                            (a = e.attr("data-wf-tabindex-swap")) ? (e.attr("tabindex", a), e.removeAttr("data-wf-tabindex-swap")) : e.removeAttr("tabindex")
                    }
                    e.toggleClass("wf-force-outline-none", "add" === t)
                }

                function I(t) {
                    var d = t.currentTarget;
                    if (!(n.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(d.className))) {
                        var c = g.test(d.hash) && d.host + d.pathname === a.host + a.pathname ? d.hash : "";
                        if ("" !== c) {
                            var u, f = e(c);
                            f.length && (t && (t.preventDefault(), t.stopPropagation()), u = c, a.hash !== u && i && i.pushState && !(n.env.chrome && "file:" === a.protocol) && (i.state && i.state.hash) !== u && i.pushState({
                                hash: u
                            }, "", u), window.setTimeout(function() {
                                ! function(t, a) {
                                    var n = o.scrollTop(),
                                        i = function(t) {
                                            var a = e(s),
                                                n = "fixed" === a.css("position") ? a.outerHeight() : 0,
                                                i = t.offset().top - n;
                                            if ("mid" === t.data("scroll")) {
                                                var d = o.height() - n,
                                                    r = t.outerHeight();
                                                r < d && (i -= Math.round((d - r) / 2))
                                            }
                                            return i
                                        }(t);
                                    if (n !== i) {
                                        var d = function(e, t, a) {
                                                if ("none" === document.body.getAttribute("data-wf-scroll-motion") || E.matches) return 0;
                                                var n = 1;
                                                return r.add(e).each(function(e, t) {
                                                    var a = parseFloat(t.getAttribute("data-scroll-time"));
                                                    !isNaN(a) && a >= 0 && (n = a)
                                                }), (472.143 * Math.log(Math.abs(t - a) + 125) - 2e3) * n
                                            }(t, n, i),
                                            c = Date.now(),
                                            u = function() {
                                                var e, t, o, r, s, f = Date.now() - c;
                                                window.scroll(0, (e = n, t = i, (o = f) > (r = d) ? t : e + (t - e) * ((s = o / r) < .5 ? 4 * s * s * s : (s - 1) * (2 * s - 2) * (2 * s - 2) + 1))), f <= d ? l(u) : "function" == typeof a && a()
                                            };
                                        l(u)
                                    }
                                }(f, function() {
                                    b(f, "add"), f.get(0).focus({
                                        preventScroll: !0
                                    }), b(f, "remove")
                                })
                            }, 300 * !t))
                        }
                    }
                }
                return {
                    ready: function() {
                        var {
                            WF_CLICK_EMPTY: e,
                            WF_CLICK_SCROLL: a
                        } = t;
                        d.on(a, f, I), d.on(e, u, function(e) {
                            e.preventDefault()
                        }), document.head.insertBefore(p, document.head.firstChild)
                    }
                }
            })
        },
        3695: function(e, t, a) {
            "use strict";
            a(3949).define("touch", e.exports = function(e) {
                var t = {},
                    a = window.getSelection;

                function n(t) {
                    var n, i, o = !1,
                        d = !1,
                        r = Math.min(Math.round(.04 * window.innerWidth), 40);

                    function l(e) {
                        var t = e.touches;
                        t && t.length > 1 || (o = !0, t ? (d = !0, n = t[0].clientX) : n = e.clientX, i = n)
                    }

                    function c(t) {
                        if (o) {
                            if (d && "mousemove" === t.type) {
                                t.preventDefault(), t.stopPropagation();
                                return
                            }
                            var n, l, c, s, f = t.touches,
                                p = f ? f[0].clientX : t.clientX,
                                g = p - i;
                            i = p, Math.abs(g) > r && a && "" === String(a()) && (n = "swipe", l = t, c = {
                                direction: g > 0 ? "right" : "left"
                            }, s = e.Event(n, {
                                originalEvent: l
                            }), e(l.target).trigger(s, c), u())
                        }
                    }

                    function s(e) {
                        if (o && (o = !1, d && "mouseup" === e.type)) {
                            e.preventDefault(), e.stopPropagation(), d = !1;
                            return
                        }
                    }

                    function u() {
                        o = !1
                    }
                    t.addEventListener("touchstart", l, !1), t.addEventListener("touchmove", c, !1), t.addEventListener("touchend", s, !1), t.addEventListener("touchcancel", u, !1), t.addEventListener("mousedown", l, !1), t.addEventListener("mousemove", c, !1), t.addEventListener("mouseup", s, !1), t.addEventListener("mouseout", u, !1), this.destroy = function() {
                        t.removeEventListener("touchstart", l, !1), t.removeEventListener("touchmove", c, !1), t.removeEventListener("touchend", s, !1), t.removeEventListener("touchcancel", u, !1), t.removeEventListener("mousedown", l, !1), t.removeEventListener("mousemove", c, !1), t.removeEventListener("mouseup", s, !1), t.removeEventListener("mouseout", u, !1), t = null
                    }
                }
                return e.event.special.tap = {
                    bindType: "click",
                    delegateType: "click"
                }, t.init = function(t) {
                    return (t = "string" == typeof t ? e(t).get(0) : t) ? new n(t) : null
                }, t.instance = t.init(document), t
            })
        },
        1655: function(e, t, a) {
            "use strict";
            var n = a(3949),
                i = a(5134);
            let o = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
            n.define("navbar", e.exports = function(e, t) {
                var a, d, r, l, c = {},
                    s = e.tram,
                    u = e(window),
                    f = e(document),
                    p = t.debounce,
                    g = n.env(),
                    E = ".w-nav",
                    b = "w--open",
                    I = "w--nav-dropdown-open",
                    y = "w--nav-dropdown-toggle-open",
                    T = "w--nav-dropdown-list-open",
                    m = "w--nav-link-open",
                    O = i.triggers,
                    _ = e();

                function R() {
                    n.resize.off(v)
                }

                function v() {
                    d.each(P)
                }

                function A(a, n) {
                    var i, d, c, s, p, g = e(n),
                        b = e.data(n, E);
                    b || (b = e.data(n, E, {
                        open: !1,
                        el: g,
                        config: {},
                        selectedIdx: -1
                    })), b.menu = g.find(".w-nav-menu"), b.links = b.menu.find(".w-nav-link"), b.dropdowns = b.menu.find(".w-dropdown"), b.dropdownToggle = b.menu.find(".w-dropdown-toggle"), b.dropdownList = b.menu.find(".w-dropdown-list"), b.button = g.find(".w-nav-button"), b.container = g.find(".w-container"), b.overlayContainerId = "w-nav-overlay-" + a, b.outside = ((i = b).outside && f.off("click" + E, i.outside), function(t) {
                        var a = e(t.target);
                        l && a.closest(".w-editor-bem-EditorOverlay").length || x(i, a)
                    });
                    var I = g.find(".w-nav-brand");
                    I && "/" === I.attr("href") && null == I.attr("aria-label") && I.attr("aria-label", "home"), b.button.attr("style", "-webkit-user-select: text;"), null == b.button.attr("aria-label") && b.button.attr("aria-label", "menu"), b.button.attr("role", "button"), b.button.attr("tabindex", "0"), b.button.attr("aria-controls", b.overlayContainerId), b.button.attr("aria-haspopup", "menu"), b.button.attr("aria-expanded", "false"), b.el.off(E), b.button.off(E), b.menu.off(E), L(b), r ? (h(b), b.el.on("setting" + E, (d = b, function(e, a) {
                        a = a || {};
                        var n = u.width();
                        L(d), !0 === a.open && k(d, !0), !1 === a.open && D(d, !0), d.open && t.defer(function() {
                            n !== u.width() && C(d)
                        })
                    }))) : ((c = b).overlay || (c.overlay = e('<div class="w-nav-overlay" data-wf-ignore />').appendTo(c.el), c.overlay.attr("id", c.overlayContainerId), c.parent = c.menu.parent(), D(c, !0)), b.button.on("click" + E, V(b)), b.menu.on("click" + E, "a", G(b)), b.button.on("keydown" + E, (s = b, function(e) {
                        switch (e.keyCode) {
                            case o.SPACE:
                            case o.ENTER:
                                return V(s)(), e.preventDefault(), e.stopPropagation();
                            case o.ESCAPE:
                                return D(s), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                            case o.HOME:
                            case o.END:
                                if (!s.open) return e.preventDefault(), e.stopPropagation();
                                return e.keyCode === o.END ? s.selectedIdx = s.links.length - 1 : s.selectedIdx = 0, N(s), e.preventDefault(), e.stopPropagation()
                        }
                    })), b.el.on("keydown" + E, (p = b, function(e) {
                        if (p.open) switch (p.selectedIdx = p.links.index(document.activeElement), e.keyCode) {
                            case o.HOME:
                            case o.END:
                                return e.keyCode === o.END ? p.selectedIdx = p.links.length - 1 : p.selectedIdx = 0, N(p), e.preventDefault(), e.stopPropagation();
                            case o.ESCAPE:
                                return D(p), p.button.focus(), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                                return p.selectedIdx = Math.max(-1, p.selectedIdx - 1), N(p), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                                return p.selectedIdx = Math.min(p.links.length - 1, p.selectedIdx + 1), N(p), e.preventDefault(), e.stopPropagation()
                        }
                    }))), P(a, n)
                }

                function S(t, a) {
                    var n = e.data(a, E);
                    n && (h(n), e.removeData(a, E))
                }

                function h(e) {
                    e.overlay && (D(e, !0), e.overlay.remove(), e.overlay = null)
                }

                function L(e) {
                    var a = {},
                        n = e.config || {},
                        i = a.animation = e.el.attr("data-animation") || "default";
                    a.animOver = /^over/.test(i), a.animDirect = /left$/.test(i) ? -1 : 1, n.animation !== i && e.open && t.defer(C, e), a.easing = e.el.attr("data-easing") || "ease", a.easing2 = e.el.attr("data-easing2") || "ease";
                    var o = e.el.attr("data-duration");
                    a.duration = null != o ? Number(o) : 400, a.docHeight = e.el.attr("data-doc-height"), e.config = a
                }

                function N(e) {
                    if (e.links[e.selectedIdx]) {
                        var t = e.links[e.selectedIdx];
                        t.focus(), G(t)
                    }
                }

                function C(e) {
                    e.open && (D(e, !0), k(e, !0))
                }

                function V(e) {
                    return p(function() {
                        e.open ? D(e) : k(e)
                    })
                }

                function G(t) {
                    return function(a) {
                        var i = e(this).attr("href");
                        if (!n.validClick(a.currentTarget)) return void a.preventDefault();
                        i && 0 === i.indexOf("#") && t.open && D(t)
                    }
                }
                c.ready = c.design = c.preview = function() {
                    r = g && n.env("design"), l = n.env("editor"), a = e(document.body), (d = f.find(E)).length && (d.each(A), R(), n.resize.on(v))
                }, c.destroy = function() {
                    _ = e(), R(), d && d.length && d.each(S)
                };
                var x = p(function(e, t) {
                    if (e.open) {
                        var a = t.closest(".w-nav-menu");
                        e.menu.is(a) || D(e)
                    }
                });

                function P(t, a) {
                    var n = e.data(a, E),
                        i = n.collapsed = "none" !== n.button.css("display");
                    if (!n.open || i || r || D(n, !0), n.container.length) {
                        var o, d = ("none" === (o = n.container.css(M)) && (o = ""), function(t, a) {
                            (a = e(a)).css(M, ""), "none" === a.css(M) && a.css(M, o)
                        });
                        n.links.each(d), n.dropdowns.each(d)
                    }
                    n.open && F(n)
                }
                var M = "max-width";

                function w(e, t) {
                    t.setAttribute("data-nav-menu-open", "")
                }

                function U(e, t) {
                    t.removeAttribute("data-nav-menu-open")
                }

                function k(e, t) {
                    if (!e.open) {
                        e.open = !0, e.menu.each(w), e.links.addClass(m), e.dropdowns.addClass(I), e.dropdownToggle.addClass(y), e.dropdownList.addClass(T), e.button.addClass(b);
                        var a = e.config;
                        ("none" === a.animation || !s.support.transform || a.duration <= 0) && (t = !0);
                        var i = F(e),
                            o = e.menu.outerHeight(!0),
                            d = e.menu.outerWidth(!0),
                            l = e.el.height(),
                            c = e.el[0];
                        if (P(0, c), O.intro(0, c), n.redraw.up(), r || f.on("click" + E, e.outside), t) return void p();
                        var u = "transform " + a.duration + "ms " + a.easing;
                        if (e.overlay && (_ = e.menu.prev(), e.overlay.show().append(e.menu)), a.animOver) {
                            s(e.menu).add(u).set({
                                x: a.animDirect * d,
                                height: i
                            }).start({
                                x: 0
                            }).then(p), e.overlay && e.overlay.width(d);
                            return
                        }
                        s(e.menu).add(u).set({
                            y: -(l + o)
                        }).start({
                            y: 0
                        }).then(p)
                    }

                    function p() {
                        e.button.attr("aria-expanded", "true")
                    }
                }

                function F(e) {
                    var t = e.config,
                        n = t.docHeight ? f.height() : a.height();
                    return t.animOver ? e.menu.height(n) : "fixed" !== e.el.css("position") && (n -= e.el.outerHeight(!0)), e.overlay && e.overlay.height(n), n
                }

                function D(e, t) {
                    if (e.open) {
                        e.open = !1, e.button.removeClass(b);
                        var a = e.config;
                        if (("none" === a.animation || !s.support.transform || a.duration <= 0) && (t = !0), O.outro(0, e.el[0]), f.off("click" + E, e.outside), t) {
                            s(e.menu).stop(), r();
                            return
                        }
                        var n = "transform " + a.duration + "ms " + a.easing2,
                            i = e.menu.outerHeight(!0),
                            o = e.menu.outerWidth(!0),
                            d = e.el.height();
                        if (a.animOver) return void s(e.menu).add(n).start({
                            x: o * a.animDirect
                        }).then(r);
                        s(e.menu).add(n).start({
                            y: -(d + i)
                        }).then(r)
                    }

                    function r() {
                        e.menu.height(""), s(e.menu).set({
                            x: 0,
                            y: 0
                        }), e.menu.each(U), e.links.removeClass(m), e.dropdowns.removeClass(I), e.dropdownToggle.removeClass(y), e.dropdownList.removeClass(T), e.overlay && e.overlay.children().length && (_.length ? e.menu.insertAfter(_) : e.menu.prependTo(e.parent), e.overlay.attr("style", "").hide()), e.el.triggerHandler("w-close"), e.button.attr("aria-expanded", "false")
                    }
                }
                return c
            })
        },
        3946: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                actionListPlaybackChanged: function() {
                    return H
                },
                animationFrameChanged: function() {
                    return F
                },
                clearRequested: function() {
                    return M
                },
                elementStateChanged: function() {
                    return Q
                },
                eventListenerAdded: function() {
                    return w
                },
                eventStateChanged: function() {
                    return k
                },
                instanceAdded: function() {
                    return B
                },
                instanceRemoved: function() {
                    return Y
                },
                instanceStarted: function() {
                    return X
                },
                mediaQueriesDefined: function() {
                    return z
                },
                parameterChanged: function() {
                    return D
                },
                playbackRequested: function() {
                    return x
                },
                previewRequested: function() {
                    return G
                },
                rawDataImported: function() {
                    return L
                },
                sessionInitialized: function() {
                    return N
                },
                sessionStarted: function() {
                    return C
                },
                sessionStopped: function() {
                    return V
                },
                stopRequested: function() {
                    return P
                },
                testFrameRendered: function() {
                    return U
                },
                viewportWidthChanged: function() {
                    return j
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = a(7087),
                d = a(9468),
                {
                    IX2_RAW_DATA_IMPORTED: r,
                    IX2_SESSION_INITIALIZED: l,
                    IX2_SESSION_STARTED: c,
                    IX2_SESSION_STOPPED: s,
                    IX2_PREVIEW_REQUESTED: u,
                    IX2_PLAYBACK_REQUESTED: f,
                    IX2_STOP_REQUESTED: p,
                    IX2_CLEAR_REQUESTED: g,
                    IX2_EVENT_LISTENER_ADDED: E,
                    IX2_TEST_FRAME_RENDERED: b,
                    IX2_EVENT_STATE_CHANGED: I,
                    IX2_ANIMATION_FRAME_CHANGED: y,
                    IX2_PARAMETER_CHANGED: T,
                    IX2_INSTANCE_ADDED: m,
                    IX2_INSTANCE_STARTED: O,
                    IX2_INSTANCE_REMOVED: _,
                    IX2_ELEMENT_STATE_CHANGED: R,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: v,
                    IX2_VIEWPORT_WIDTH_CHANGED: A,
                    IX2_MEDIA_QUERIES_DEFINED: S
                } = o.IX2EngineActionTypes,
                {
                    reifyState: h
                } = d.IX2VanillaUtils,
                L = e => ({
                    type: r,
                    payload: {
                        ...h(e)
                    }
                }),
                N = ({
                    hasBoundaryNodes: e,
                    reducedMotion: t
                }) => ({
                    type: l,
                    payload: {
                        hasBoundaryNodes: e,
                        reducedMotion: t
                    }
                }),
                C = () => ({
                    type: c
                }),
                V = () => ({
                    type: s
                }),
                G = ({
                    rawData: e,
                    defer: t
                }) => ({
                    type: u,
                    payload: {
                        defer: t,
                        rawData: e
                    }
                }),
                x = ({
                    actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
                    actionListId: t,
                    actionItemId: a,
                    eventId: n,
                    allowEvents: i,
                    immediate: d,
                    testManual: r,
                    verbose: l,
                    rawData: c
                }) => ({
                    type: f,
                    payload: {
                        actionTypeId: e,
                        actionListId: t,
                        actionItemId: a,
                        testManual: r,
                        eventId: n,
                        allowEvents: i,
                        immediate: d,
                        verbose: l,
                        rawData: c
                    }
                }),
                P = e => ({
                    type: p,
                    payload: {
                        actionListId: e
                    }
                }),
                M = () => ({
                    type: g
                }),
                w = (e, t) => ({
                    type: E,
                    payload: {
                        target: e,
                        listenerParams: t
                    }
                }),
                U = (e = 1) => ({
                    type: b,
                    payload: {
                        step: e
                    }
                }),
                k = (e, t) => ({
                    type: I,
                    payload: {
                        stateKey: e,
                        newState: t
                    }
                }),
                F = (e, t) => ({
                    type: y,
                    payload: {
                        now: e,
                        parameters: t
                    }
                }),
                D = (e, t) => ({
                    type: T,
                    payload: {
                        key: e,
                        value: t
                    }
                }),
                B = e => ({
                    type: m,
                    payload: {
                        ...e
                    }
                }),
                X = (e, t) => ({
                    type: O,
                    payload: {
                        instanceId: e,
                        time: t
                    }
                }),
                Y = e => ({
                    type: _,
                    payload: {
                        instanceId: e
                    }
                }),
                Q = (e, t, a, n) => ({
                    type: R,
                    payload: {
                        elementId: e,
                        actionTypeId: t,
                        current: a,
                        actionItem: n
                    }
                }),
                H = ({
                    actionListId: e,
                    isPlaying: t
                }) => ({
                    type: v,
                    payload: {
                        actionListId: e,
                        isPlaying: t
                    }
                }),
                j = ({
                    width: e,
                    mediaQueries: t
                }) => ({
                    type: A,
                    payload: {
                        width: e,
                        mediaQueries: t
                    }
                }),
                z = () => ({
                    type: S
                })
        },
        6011: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, i = {
                actions: function() {
                    return c
                },
                destroy: function() {
                    return g
                },
                init: function() {
                    return p
                },
                setEnv: function() {
                    return f
                },
                store: function() {
                    return u
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let d = a(9516),
                r = (n = a(7243)) && n.__esModule ? n : {
                    default: n
                },
                l = a(1970),
                c = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = s(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                        } return n.default = e, a && a.set(e, n), n
                }(a(3946));

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (s = function(e) {
                    return e ? a : t
                })(e)
            }
            let u = (0, d.createStore)(r.default);

            function f(e) {
                e() && (0, l.observeRequests)(u)
            }

            function p(e) {
                g(), (0, l.startEngine)({
                    store: u,
                    rawData: e,
                    allowEvents: !0
                })
            }

            function g() {
                (0, l.stopEngine)(u)
            }
        },
        5012: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                elementContains: function() {
                    return T
                },
                getChildElements: function() {
                    return O
                },
                getClosestElement: function() {
                    return R
                },
                getProperty: function() {
                    return g
                },
                getQuerySelector: function() {
                    return b
                },
                getRefType: function() {
                    return v
                },
                getSiblingElements: function() {
                    return _
                },
                getStyle: function() {
                    return p
                },
                getValidDocument: function() {
                    return I
                },
                isSiblingNode: function() {
                    return m
                },
                matchSelector: function() {
                    return E
                },
                queryDocument: function() {
                    return y
                },
                setStyle: function() {
                    return f
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = a(9468),
                d = a(7087),
                {
                    ELEMENT_MATCHES: r
                } = o.IX2BrowserSupport,
                {
                    IX2_ID_DELIMITER: l,
                    HTML_ELEMENT: c,
                    PLAIN_OBJECT: s,
                    WF_PAGE: u
                } = d.IX2EngineConstants;

            function f(e, t, a) {
                e.style[t] = a
            }

            function p(e, t) {
                return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style instanceof CSSStyleDeclaration ? e.style[t] : void 0
            }

            function g(e, t) {
                return e[t]
            }

            function E(e) {
                return t => t[r](e)
            }

            function b({
                id: e,
                selector: t
            }) {
                if (e) {
                    let t = e;
                    if (-1 !== e.indexOf(l)) {
                        let a = e.split(l),
                            n = a[0];
                        if (t = a[1], n !== document.documentElement.getAttribute(u)) return null
                    }
                    return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`
                }
                return t
            }

            function I(e) {
                return null == e || e === document.documentElement.getAttribute(u) ? document : null
            }

            function y(e, t) {
                return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
            }

            function T(e, t) {
                return e.contains(t)
            }

            function m(e, t) {
                return e !== t && e.parentNode === t.parentNode
            }

            function O(e) {
                let t = [];
                for (let a = 0, {
                        length: n
                    } = e || []; a < n; a++) {
                    let {
                        children: n
                    } = e[a], {
                        length: i
                    } = n;
                    if (i)
                        for (let e = 0; e < i; e++) t.push(n[e])
                }
                return t
            }

            function _(e = []) {
                let t = [],
                    a = [];
                for (let n = 0, {
                        length: i
                    } = e; n < i; n++) {
                    let {
                        parentNode: i
                    } = e[n];
                    if (!i || !i.children || !i.children.length || -1 !== a.indexOf(i)) continue;
                    a.push(i);
                    let o = i.firstElementChild;
                    for (; null != o;) - 1 === e.indexOf(o) && t.push(o), o = o.nextElementSibling
                }
                return t
            }
            let R = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
                if (!document.documentElement.contains(e)) return null;
                let a = e;
                do {
                    if (a[r] && a[r](t)) return a;
                    a = a.parentNode
                } while (null != a);
                return null
            };

            function v(e) {
                return null != e && "object" == typeof e ? e instanceof Element ? c : s : null
            }
        },
        1970: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                observeRequests: function() {
                    return q
                },
                startActionGroup: function() {
                    return eg
                },
                startEngine: function() {
                    return en
                },
                stopActionGroup: function() {
                    return ep
                },
                stopAllActionGroups: function() {
                    return ef
                },
                stopEngine: function() {
                    return ei
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = y(a(9777)),
                d = y(a(4738)),
                r = y(a(4659)),
                l = y(a(3452)),
                c = y(a(6633)),
                s = y(a(3729)),
                u = y(a(2397)),
                f = y(a(5082)),
                p = a(7087),
                g = a(9468),
                E = a(3946),
                b = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = T(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                        } return n.default = e, a && a.set(e, n), n
                }(a(5012)),
                I = y(a(8955));

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function T(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (T = function(e) {
                    return e ? a : t
                })(e)
            }
            let m = Object.keys(p.QuickEffectIds),
                O = e => m.includes(e),
                {
                    COLON_DELIMITER: _,
                    BOUNDARY_SELECTOR: R,
                    HTML_ELEMENT: v,
                    RENDER_GENERAL: A,
                    W_MOD_IX: S
                } = p.IX2EngineConstants,
                {
                    getAffectedElements: h,
                    getElementId: L,
                    getDestinationValues: N,
                    observeStore: C,
                    getInstanceId: V,
                    renderHTMLElement: G,
                    clearAllStyles: x,
                    getMaxDurationItemIndex: P,
                    getComputedStyle: M,
                    getInstanceOrigin: w,
                    reduceListToGroup: U,
                    shouldNamespaceEventParameter: k,
                    getNamespacedParameterId: F,
                    shouldAllowMediaQuery: D,
                    cleanupHTMLElement: B,
                    clearObjectCache: X,
                    stringifyTarget: Y,
                    mediaQueriesEqual: Q,
                    shallowEqual: H
                } = g.IX2VanillaUtils,
                {
                    isPluginType: j,
                    createPluginInstance: z,
                    getPluginDuration: W
                } = g.IX2VanillaPlugins,
                $ = navigator.userAgent,
                K = $.match(/iPad/i) || $.match(/iPhone/);

            function q(e) {
                C({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.preview,
                    onChange: Z
                }), C({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.playback,
                    onChange: ee
                }), C({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.stop,
                    onChange: et
                }), C({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.clear,
                    onChange: ea
                })
            }

            function Z({
                rawData: e,
                defer: t
            }, a) {
                let n = () => {
                    en({
                        store: a,
                        rawData: e,
                        allowEvents: !0
                    }), J()
                };
                t ? setTimeout(n, 0) : n()
            }

            function J() {
                document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
            }

            function ee(e, t) {
                let {
                    actionTypeId: a,
                    actionListId: n,
                    actionItemId: i,
                    eventId: o,
                    allowEvents: d,
                    immediate: r,
                    testManual: l,
                    verbose: c = !0
                } = e, {
                    rawData: s
                } = e;
                if (n && i && s && r) {
                    let e = s.actionLists[n];
                    e && (s = U({
                        actionList: e,
                        actionItemId: i,
                        rawData: s
                    }))
                }
                if (en({
                        store: t,
                        rawData: s,
                        allowEvents: d,
                        testManual: l
                    }), n && a === p.ActionTypeConsts.GENERAL_START_ACTION || O(a)) {
                    ep({
                        store: t,
                        actionListId: n
                    }), eu({
                        store: t,
                        actionListId: n,
                        eventId: o
                    });
                    let e = eg({
                        store: t,
                        eventId: o,
                        actionListId: n,
                        immediate: r,
                        verbose: c
                    });
                    c && e && t.dispatch((0, E.actionListPlaybackChanged)({
                        actionListId: n,
                        isPlaying: !r
                    }))
                }
            }

            function et({
                actionListId: e
            }, t) {
                e ? ep({
                    store: t,
                    actionListId: e
                }) : ef({
                    store: t
                }), ei(t)
            }

            function ea(e, t) {
                ei(t), x({
                    store: t,
                    elementApi: b
                })
            }

            function en({
                store: e,
                rawData: t,
                allowEvents: a,
                testManual: n
            }) {
                let {
                    ixSession: i
                } = e.getState();
                if (t && e.dispatch((0, E.rawDataImported)(t)), !i.active) {
                    (e.dispatch((0, E.sessionInitialized)({
                        hasBoundaryNodes: !!document.querySelector(R),
                        reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
                    })), a) && (function(e) {
                        let {
                            ixData: t
                        } = e.getState(), {
                            eventTypeMap: a
                        } = t;
                        er(e), (0, u.default)(a, (t, a) => {
                            let n = I.default[a];
                            if (!n) return void console.warn(`IX2 event type not configured: ${a}`);
                            ! function({
                                logic: e,
                                store: t,
                                events: a
                            }) {
                                ! function(e) {
                                    if (!K) return;
                                    let t = {},
                                        a = "";
                                    for (let n in e) {
                                        let {
                                            eventTypeId: i,
                                            target: o
                                        } = e[n], d = b.getQuerySelector(o);
                                        t[d] || (i === p.EventTypeConsts.MOUSE_CLICK || i === p.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[d] = !0, a += d + "{cursor: pointer;touch-action: manipulation;}")
                                    }
                                    if (a) {
                                        let e = document.createElement("style");
                                        e.textContent = a, document.body.appendChild(e)
                                    }
                                }(a);
                                let {
                                    types: n,
                                    handler: i
                                } = e, {
                                    ixData: l
                                } = t.getState(), {
                                    actionLists: c
                                } = l, s = el(a, es);
                                if (!(0, r.default)(s)) return;
                                (0, u.default)(s, (e, n) => {
                                    let i = a[n],
                                        {
                                            action: r,
                                            id: s,
                                            mediaQueries: u = l.mediaQueryKeys
                                        } = i,
                                        {
                                            actionListId: f
                                        } = r.config;
                                    Q(u, l.mediaQueryKeys) || t.dispatch((0, E.mediaQueriesDefined)()), r.actionTypeId === p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(i.config) ? i.config : [i.config]).forEach(a => {
                                        let {
                                            continuousParameterGroupId: n
                                        } = a, i = (0, d.default)(c, `${f}.continuousParameterGroups`, []), r = (0, o.default)(i, ({
                                            id: e
                                        }) => e === n), l = (a.smoothing || 0) / 100, u = (a.restingState || 0) / 100;
                                        r && e.forEach((e, n) => {
                                            ! function({
                                                store: e,
                                                eventStateKey: t,
                                                eventTarget: a,
                                                eventId: n,
                                                eventConfig: i,
                                                actionListId: o,
                                                parameterGroup: r,
                                                smoothing: l,
                                                restingValue: c
                                            }) {
                                                let {
                                                    ixData: s,
                                                    ixSession: u
                                                } = e.getState(), {
                                                    events: f
                                                } = s, g = f[n], {
                                                    eventTypeId: E
                                                } = g, I = {}, y = {}, T = [], {
                                                    continuousActionGroups: m
                                                } = r, {
                                                    id: O
                                                } = r;
                                                k(E, i) && (O = F(t, O));
                                                let v = u.hasBoundaryNodes && a ? b.getClosestElement(a, R) : null;
                                                m.forEach(e => {
                                                    let {
                                                        keyframe: t,
                                                        actionItems: n
                                                    } = e;
                                                    n.forEach(e => {
                                                        let {
                                                            actionTypeId: n
                                                        } = e, {
                                                            target: i
                                                        } = e.config;
                                                        if (!i) return;
                                                        let o = i.boundaryMode ? v : null,
                                                            d = Y(i) + _ + n;
                                                        if (y[d] = function(e = [], t, a) {
                                                                let n, i = [...e];
                                                                return i.some((e, a) => e.keyframe === t && (n = a, !0)), null == n && (n = i.length, i.push({
                                                                    keyframe: t,
                                                                    actionItems: []
                                                                })), i[n].actionItems.push(a), i
                                                            }(y[d], t, e), !I[d]) {
                                                            I[d] = !0;
                                                            let {
                                                                config: t
                                                            } = e;
                                                            h({
                                                                config: t,
                                                                event: g,
                                                                eventTarget: a,
                                                                elementRoot: o,
                                                                elementApi: b
                                                            }).forEach(e => {
                                                                T.push({
                                                                    element: e,
                                                                    key: d
                                                                })
                                                            })
                                                        }
                                                    })
                                                }), T.forEach(({
                                                    element: t,
                                                    key: a
                                                }) => {
                                                    let i = y[a],
                                                        r = (0, d.default)(i, "[0].actionItems[0]", {}),
                                                        {
                                                            actionTypeId: s
                                                        } = r,
                                                        u = (s === p.ActionTypeConsts.PLUGIN_RIVE ? 0 === (r.config?.target?.selectorGuids || []).length : j(s)) ? z(s)?.(t, r) : null,
                                                        f = N({
                                                            element: t,
                                                            actionItem: r,
                                                            elementApi: b
                                                        }, u);
                                                    eE({
                                                        store: e,
                                                        element: t,
                                                        eventId: n,
                                                        actionListId: o,
                                                        actionItem: r,
                                                        destination: f,
                                                        continuous: !0,
                                                        parameterId: O,
                                                        actionGroups: i,
                                                        smoothing: l,
                                                        restingValue: c,
                                                        pluginInstance: u
                                                    })
                                                })
                                            }({
                                                store: t,
                                                eventStateKey: s + _ + n,
                                                eventTarget: e,
                                                eventId: s,
                                                eventConfig: a,
                                                actionListId: f,
                                                parameterGroup: r,
                                                smoothing: l,
                                                restingValue: u
                                            })
                                        })
                                    }), (r.actionTypeId === p.ActionTypeConsts.GENERAL_START_ACTION || O(r.actionTypeId)) && eu({
                                        store: t,
                                        actionListId: f,
                                        eventId: s
                                    })
                                });
                                let g = e => {
                                        let {
                                            ixSession: n
                                        } = t.getState();
                                        ec(s, (o, d, r) => {
                                            let c = a[d],
                                                s = n.eventState[r],
                                                {
                                                    action: u,
                                                    mediaQueries: f = l.mediaQueryKeys
                                                } = c;
                                            if (!D(f, n.mediaQueryKey)) return;
                                            let g = (a = {}) => {
                                                let n = i({
                                                    store: t,
                                                    element: o,
                                                    event: c,
                                                    eventConfig: a,
                                                    nativeEvent: e,
                                                    eventStateKey: r
                                                }, s);
                                                H(n, s) || t.dispatch((0, E.eventStateChanged)(r, n))
                                            };
                                            u.actionTypeId === p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(c.config) ? c.config : [c.config]).forEach(g) : g()
                                        })
                                    },
                                    I = (0, f.default)(g, 12),
                                    y = ({
                                        target: e = document,
                                        types: a,
                                        throttle: n
                                    }) => {
                                        a.split(" ").filter(Boolean).forEach(a => {
                                            let i = n ? I : g;
                                            e.addEventListener(a, i), t.dispatch((0, E.eventListenerAdded)(e, [a, i]))
                                        })
                                    };
                                Array.isArray(n) ? n.forEach(y) : "string" == typeof n && y(e)
                            }({
                                logic: n,
                                store: e,
                                events: t
                            })
                        });
                        let {
                            ixSession: n
                        } = e.getState();
                        n.eventListeners.length && function(e) {
                            let t = () => {
                                er(e)
                            };
                            ed.forEach(a => {
                                window.addEventListener(a, t), e.dispatch((0, E.eventListenerAdded)(window, [a, t]))
                            }), t()
                        }(e)
                    }(e), function() {
                        let {
                            documentElement: e
                        } = document; - 1 === e.className.indexOf(S) && (e.className += ` ${S}`)
                    }(), e.getState().ixSession.hasDefinedMediaQueries && C({
                        store: e,
                        select: ({
                            ixSession: e
                        }) => e.mediaQueryKey,
                        onChange: () => {
                            ei(e), x({
                                store: e,
                                elementApi: b
                            }), en({
                                store: e,
                                allowEvents: !0
                            }), J()
                        }
                    }));
                    e.dispatch((0, E.sessionStarted)()),
                        function(e, t) {
                            let a = n => {
                                let {
                                    ixSession: i,
                                    ixParameters: o
                                } = e.getState();
                                if (i.active)
                                    if (e.dispatch((0, E.animationFrameChanged)(n, o)), t) {
                                        let t = C({
                                            store: e,
                                            select: ({
                                                ixSession: e
                                            }) => e.tick,
                                            onChange: e => {
                                                a(e), t()
                                            }
                                        })
                                    } else requestAnimationFrame(a)
                            };
                            a(window.performance.now())
                        }(e, n)
                }
            }

            function ei(e) {
                let {
                    ixSession: t
                } = e.getState();
                if (t.active) {
                    let {
                        eventListeners: a
                    } = t;
                    a.forEach(eo), X(), e.dispatch((0, E.sessionStopped)())
                }
            }

            function eo({
                target: e,
                listenerParams: t
            }) {
                e.removeEventListener.apply(e, t)
            }
            let ed = ["resize", "orientationchange"];

            function er(e) {
                let {
                    ixSession: t,
                    ixData: a
                } = e.getState(), n = window.innerWidth;
                if (n !== t.viewportWidth) {
                    let {
                        mediaQueries: t
                    } = a;
                    e.dispatch((0, E.viewportWidthChanged)({
                        width: n,
                        mediaQueries: t
                    }))
                }
            }
            let el = (e, t) => (0, l.default)((0, s.default)(e, t), c.default),
                ec = (e, t) => {
                    (0, u.default)(e, (e, a) => {
                        e.forEach((e, n) => {
                            t(e, a, a + _ + n)
                        })
                    })
                },
                es = e => h({
                    config: {
                        target: e.target,
                        targets: e.targets
                    },
                    elementApi: b
                });

            function eu({
                store: e,
                actionListId: t,
                eventId: a
            }) {
                let {
                    ixData: n,
                    ixSession: i
                } = e.getState(), {
                    actionLists: o,
                    events: r
                } = n, l = r[a], c = o[t];
                if (c && c.useFirstGroupAsInitialState) {
                    let o = (0, d.default)(c, "actionItemGroups[0].actionItems", []);
                    if (!D((0, d.default)(l, "mediaQueries", n.mediaQueryKeys), i.mediaQueryKey)) return;
                    o.forEach(n => {
                        let {
                            config: i,
                            actionTypeId: o
                        } = n, d = h({
                            config: i?.target?.useEventTarget === !0 && i?.target?.objectId == null ? {
                                target: l.target,
                                targets: l.targets
                            } : i,
                            event: l,
                            elementApi: b
                        }), r = j(o);
                        d.forEach(i => {
                            let d = r ? z(o)?.(i, n) : null;
                            eE({
                                destination: N({
                                    element: i,
                                    actionItem: n,
                                    elementApi: b
                                }, d),
                                immediate: !0,
                                store: e,
                                element: i,
                                eventId: a,
                                actionItem: n,
                                actionListId: t,
                                pluginInstance: d
                            })
                        })
                    })
                }
            }

            function ef({
                store: e
            }) {
                let {
                    ixInstances: t
                } = e.getState();
                (0, u.default)(t, t => {
                    if (!t.continuous) {
                        let {
                            actionListId: a,
                            verbose: n
                        } = t;
                        eb(t, e), n && e.dispatch((0, E.actionListPlaybackChanged)({
                            actionListId: a,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function ep({
                store: e,
                eventId: t,
                eventTarget: a,
                eventStateKey: n,
                actionListId: i
            }) {
                let {
                    ixInstances: o,
                    ixSession: r
                } = e.getState(), l = r.hasBoundaryNodes && a ? b.getClosestElement(a, R) : null;
                (0, u.default)(o, a => {
                    let o = (0, d.default)(a, "actionItem.config.target.boundaryMode"),
                        r = !n || a.eventStateKey === n;
                    if (a.actionListId === i && a.eventId === t && r) {
                        if (l && o && !b.elementContains(l, a.element)) return;
                        eb(a, e), a.verbose && e.dispatch((0, E.actionListPlaybackChanged)({
                            actionListId: i,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function eg({
                store: e,
                eventId: t,
                eventTarget: a,
                eventStateKey: n,
                actionListId: i,
                groupIndex: o = 0,
                immediate: r,
                verbose: l
            }) {
                let {
                    ixData: c,
                    ixSession: s
                } = e.getState(), {
                    events: u
                } = c, f = u[t] || {}, {
                    mediaQueries: p = c.mediaQueryKeys
                } = f, {
                    actionItemGroups: g,
                    useFirstGroupAsInitialState: E
                } = (0, d.default)(c, `actionLists.${i}`, {});
                if (!g || !g.length) return !1;
                o >= g.length && (0, d.default)(f, "config.loop") && (o = 0), 0 === o && E && o++;
                let I = (0 === o || 1 === o && E) && O(f.action?.actionTypeId) ? f.config.delay : void 0,
                    y = (0, d.default)(g, [o, "actionItems"], []);
                if (!y.length || !D(p, s.mediaQueryKey)) return !1;
                let T = s.hasBoundaryNodes && a ? b.getClosestElement(a, R) : null,
                    m = P(y),
                    _ = !1;
                return y.forEach((d, c) => {
                    let {
                        config: s,
                        actionTypeId: u
                    } = d, p = j(u), {
                        target: g
                    } = s;
                    g && h({
                        config: s,
                        event: f,
                        eventTarget: a,
                        elementRoot: g.boundaryMode ? T : null,
                        elementApi: b
                    }).forEach((s, f) => {
                        let g = p ? z(u)?.(s, d) : null,
                            E = p ? W(u)(s, d) : null;
                        _ = !0;
                        let y = M({
                                element: s,
                                actionItem: d
                            }),
                            T = N({
                                element: s,
                                actionItem: d,
                                elementApi: b
                            }, g);
                        eE({
                            store: e,
                            element: s,
                            actionItem: d,
                            eventId: t,
                            eventTarget: a,
                            eventStateKey: n,
                            actionListId: i,
                            groupIndex: o,
                            isCarrier: m === c && 0 === f,
                            computedStyle: y,
                            destination: T,
                            immediate: r,
                            verbose: l,
                            pluginInstance: g,
                            pluginDuration: E,
                            instanceDelay: I
                        })
                    })
                }), _
            }

            function eE(e) {
                let t, {
                        store: a,
                        computedStyle: n,
                        ...i
                    } = e,
                    {
                        element: o,
                        actionItem: d,
                        immediate: r,
                        pluginInstance: l,
                        continuous: c,
                        restingValue: s,
                        eventId: u
                    } = i,
                    f = V(),
                    {
                        ixElements: g,
                        ixSession: I,
                        ixData: y
                    } = a.getState(),
                    T = L(g, o),
                    {
                        refState: m
                    } = g[T] || {},
                    O = b.getRefType(o),
                    _ = I.reducedMotion && p.ReducedMotionTypes[d.actionTypeId];
                if (_ && c) switch (y.events[u]?.eventTypeId) {
                    case p.EventTypeConsts.MOUSE_MOVE:
                    case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                        t = s;
                        break;
                    default:
                        t = .5
                }
                let R = w(o, m, n, d, b, l);
                if (a.dispatch((0, E.instanceAdded)({
                        instanceId: f,
                        elementId: T,
                        origin: R,
                        refType: O,
                        skipMotion: _,
                        skipToValue: t,
                        ...i
                    })), eI(document.body, "ix2-animation-started", f), r) return void
                function(e, t) {
                    let {
                        ixParameters: a
                    } = e.getState();
                    e.dispatch((0, E.instanceStarted)(t, 0)), e.dispatch((0, E.animationFrameChanged)(performance.now(), a));
                    let {
                        ixInstances: n
                    } = e.getState();
                    ey(n[t], e)
                }(a, f);
                C({
                    store: a,
                    select: ({
                        ixInstances: e
                    }) => e[f],
                    onChange: ey
                }), c || a.dispatch((0, E.instanceStarted)(f, I.tick))
            }

            function eb(e, t) {
                eI(document.body, "ix2-animation-stopping", {
                    instanceId: e.id,
                    state: t.getState()
                });
                let {
                    elementId: a,
                    actionItem: n
                } = e, {
                    ixElements: i
                } = t.getState(), {
                    ref: o,
                    refType: d
                } = i[a] || {};
                d === v && B(o, n, b), t.dispatch((0, E.instanceRemoved)(e.id))
            }

            function eI(e, t, a) {
                let n = document.createEvent("CustomEvent");
                n.initCustomEvent(t, !0, !0, a), e.dispatchEvent(n)
            }

            function ey(e, t) {
                let {
                    active: a,
                    continuous: n,
                    complete: i,
                    elementId: o,
                    actionItem: d,
                    actionTypeId: r,
                    renderType: l,
                    current: c,
                    groupIndex: s,
                    eventId: u,
                    eventTarget: f,
                    eventStateKey: p,
                    actionListId: g,
                    isCarrier: I,
                    styleProp: y,
                    verbose: T,
                    pluginInstance: m
                } = e, {
                    ixData: O,
                    ixSession: _
                } = t.getState(), {
                    events: R
                } = O, {
                    mediaQueries: S = O.mediaQueryKeys
                } = R && R[u] ? R[u] : {};
                if (D(S, _.mediaQueryKey) && (n || a || i)) {
                    if (c || l === A && i) {
                        t.dispatch((0, E.elementStateChanged)(o, r, c, d));
                        let {
                            ixElements: e
                        } = t.getState(), {
                            ref: a,
                            refType: n,
                            refState: i
                        } = e[o] || {}, s = i && i[r];
                        (n === v || j(r)) && G(a, i, s, u, d, y, b, l, m)
                    }
                    if (i) {
                        if (I) {
                            let e = eg({
                                store: t,
                                eventId: u,
                                eventTarget: f,
                                eventStateKey: p,
                                actionListId: g,
                                groupIndex: s + 1,
                                verbose: T
                            });
                            T && !e && t.dispatch((0, E.actionListPlaybackChanged)({
                                actionListId: g,
                                isPlaying: !1
                            }))
                        }
                        eb(e, t)
                    }
                }
            }
        },
        8955: function(e, t, a) {
            "use strict";
            let n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return ep
                }
            });
            let i = u(a(5801)),
                o = u(a(4738)),
                d = u(a(3789)),
                r = a(7087),
                l = a(1970),
                c = a(3946),
                s = a(9468);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                MOUSE_CLICK: f,
                MOUSE_SECOND_CLICK: p,
                MOUSE_DOWN: g,
                MOUSE_UP: E,
                MOUSE_OVER: b,
                MOUSE_OUT: I,
                DROPDOWN_CLOSE: y,
                DROPDOWN_OPEN: T,
                SLIDER_ACTIVE: m,
                SLIDER_INACTIVE: O,
                TAB_ACTIVE: _,
                TAB_INACTIVE: R,
                NAVBAR_CLOSE: v,
                NAVBAR_OPEN: A,
                MOUSE_MOVE: S,
                PAGE_SCROLL_DOWN: h,
                SCROLL_INTO_VIEW: L,
                SCROLL_OUT_OF_VIEW: N,
                PAGE_SCROLL_UP: C,
                SCROLLING_IN_VIEW: V,
                PAGE_FINISH: G,
                ECOMMERCE_CART_CLOSE: x,
                ECOMMERCE_CART_OPEN: P,
                PAGE_START: M,
                PAGE_SCROLL: w
            } = r.EventTypeConsts, U = "COMPONENT_ACTIVE", k = "COMPONENT_INACTIVE", {
                COLON_DELIMITER: F
            } = r.IX2EngineConstants, {
                getNamespacedParameterId: D
            } = s.IX2VanillaUtils, B = e => t => !!("object" == typeof t && e(t)) || t, X = B(({
                element: e,
                nativeEvent: t
            }) => e === t.target), Y = B(({
                element: e,
                nativeEvent: t
            }) => e.contains(t.target)), Q = (0, i.default)([X, Y]), H = (e, t) => {
                if (t) {
                    let {
                        ixData: a
                    } = e.getState(), {
                        events: n
                    } = a, i = n[t];
                    if (i && !ee[i.eventTypeId]) return i
                }
                return null
            }, j = ({
                store: e,
                event: t
            }) => {
                let {
                    action: a
                } = t, {
                    autoStopEventId: n
                } = a.config;
                return !!H(e, n)
            }, z = ({
                store: e,
                event: t,
                element: a,
                eventStateKey: n
            }, i) => {
                let {
                    action: d,
                    id: r
                } = t, {
                    actionListId: c,
                    autoStopEventId: s
                } = d.config, u = H(e, s);
                return u && (0, l.stopActionGroup)({
                    store: e,
                    eventId: s,
                    eventTarget: a,
                    eventStateKey: s + F + n.split(F)[1],
                    actionListId: (0, o.default)(u, "action.config.actionListId")
                }), (0, l.stopActionGroup)({
                    store: e,
                    eventId: r,
                    eventTarget: a,
                    eventStateKey: n,
                    actionListId: c
                }), (0, l.startActionGroup)({
                    store: e,
                    eventId: r,
                    eventTarget: a,
                    eventStateKey: n,
                    actionListId: c
                }), i
            }, W = (e, t) => (a, n) => !0 === e(a, n) ? t(a, n) : n, $ = {
                handler: W(Q, z)
            }, K = {
                ...$,
                types: [U, k].join(" ")
            }, q = [{
                target: window,
                types: "resize orientationchange",
                throttle: !0
            }, {
                target: document,
                types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                throttle: !0
            }], Z = "mouseover mouseout", J = {
                types: q
            }, ee = {
                PAGE_START: M,
                PAGE_FINISH: G
            }, et = (() => {
                let e = void 0 !== window.pageXOffset,
                    t = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
                return () => ({
                    scrollLeft: e ? window.pageXOffset : t.scrollLeft,
                    scrollTop: e ? window.pageYOffset : t.scrollTop,
                    stiffScrollTop: (0, d.default)(e ? window.pageYOffset : t.scrollTop, 0, t.scrollHeight - window.innerHeight),
                    scrollWidth: t.scrollWidth,
                    scrollHeight: t.scrollHeight,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                })
            })(), ea = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), en = ({
                element: e,
                nativeEvent: t
            }) => {
                let {
                    type: a,
                    target: n,
                    relatedTarget: i
                } = t, o = e.contains(n);
                if ("mouseover" === a && o) return !0;
                let d = e.contains(i);
                return "mouseout" === a && !!o && !!d
            }, ei = e => {
                let {
                    element: t,
                    event: {
                        config: a
                    }
                } = e, {
                    clientWidth: n,
                    clientHeight: i
                } = et(), o = a.scrollOffsetValue, d = "PX" === a.scrollOffsetUnit ? o : i * (o || 0) / 100;
                return ea(t.getBoundingClientRect(), {
                    left: 0,
                    top: d,
                    right: n,
                    bottom: i - d
                })
            }, eo = e => (t, a) => {
                let {
                    type: n
                } = t.nativeEvent, i = -1 !== [U, k].indexOf(n) ? n === U : a.isActive, o = {
                    ...a,
                    isActive: i
                };
                return (!a || o.isActive !== a.isActive) && e(t, o) || o
            }, ed = e => (t, a) => {
                let n = {
                    elementHovered: en(t)
                };
                return (a ? n.elementHovered !== a.elementHovered : n.elementHovered) && e(t, n) || n
            }, er = e => (t, a = {}) => {
                let n, i, {
                        stiffScrollTop: o,
                        scrollHeight: d,
                        innerHeight: r
                    } = et(),
                    {
                        event: {
                            config: l,
                            eventTypeId: c
                        }
                    } = t,
                    {
                        scrollOffsetValue: s,
                        scrollOffsetUnit: u
                    } = l,
                    f = d - r,
                    p = Number((o / f).toFixed(2));
                if (a && a.percentTop === p) return a;
                let g = ("PX" === u ? s : r * (s || 0) / 100) / f,
                    E = 0;
                a && (n = p > a.percentTop, E = (i = a.scrollingDown !== n) ? p : a.anchorTop);
                let b = c === h ? p >= E + g : p <= E - g,
                    I = {
                        ...a,
                        percentTop: p,
                        inBounds: b,
                        anchorTop: E,
                        scrollingDown: n
                    };
                return a && b && (i || I.inBounds !== a.inBounds) && e(t, I) || I
            }, el = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, ec = e => (t, a = {
                clickCount: 0
            }) => {
                let n = {
                    clickCount: a.clickCount % 2 + 1
                };
                return n.clickCount !== a.clickCount && e(t, n) || n
            }, es = (e = !0) => ({
                ...K,
                handler: W(e ? Q : X, eo((e, t) => t.isActive ? $.handler(e, t) : t))
            }), eu = (e = !0) => ({
                ...K,
                handler: W(e ? Q : X, eo((e, t) => t.isActive ? t : $.handler(e, t)))
            }), ef = {
                ...J,
                handler: (n = (e, t) => {
                    let {
                        elementVisible: a
                    } = t, {
                        event: n,
                        store: i
                    } = e, {
                        ixData: o
                    } = i.getState(), {
                        events: d
                    } = o;
                    return !d[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === L === a ? (z(e), {
                        ...t,
                        triggered: !0
                    }) : t
                }, (e, t) => {
                    let a = {
                        ...t,
                        elementVisible: ei(e)
                    };
                    return (t ? a.elementVisible !== t.elementVisible : a.elementVisible) && n(e, a) || a
                })
            }, ep = {
                [m]: es(),
                [O]: eu(),
                [T]: es(),
                [y]: eu(),
                [A]: es(!1),
                [v]: eu(!1),
                [_]: es(),
                [R]: eu(),
                [P]: {
                    types: "ecommerce-cart-open",
                    handler: W(Q, z)
                },
                [x]: {
                    types: "ecommerce-cart-close",
                    handler: W(Q, z)
                },
                [f]: {
                    types: "click",
                    handler: W(Q, ec((e, {
                        clickCount: t
                    }) => {
                        j(e) ? 1 === t && z(e) : z(e)
                    }))
                },
                [p]: {
                    types: "click",
                    handler: W(Q, ec((e, {
                        clickCount: t
                    }) => {
                        2 === t && z(e)
                    }))
                },
                [g]: {
                    ...$,
                    types: "mousedown"
                },
                [E]: {
                    ...$,
                    types: "mouseup"
                },
                [b]: {
                    types: Z,
                    handler: W(Q, ed((e, t) => {
                        t.elementHovered && z(e)
                    }))
                },
                [I]: {
                    types: Z,
                    handler: W(Q, ed((e, t) => {
                        t.elementHovered || z(e)
                    }))
                },
                [S]: {
                    types: "mousemove mouseout scroll",
                    handler: ({
                        store: e,
                        element: t,
                        eventConfig: a,
                        nativeEvent: n,
                        eventStateKey: i
                    }, o = {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    }) => {
                        let {
                            basedOn: d,
                            selectedAxis: l,
                            continuousParameterGroupId: s,
                            reverse: u,
                            restingState: f = 0
                        } = a, {
                            clientX: p = o.clientX,
                            clientY: g = o.clientY,
                            pageX: E = o.pageX,
                            pageY: b = o.pageY
                        } = n, I = "X_AXIS" === l, y = "mouseout" === n.type, T = f / 100, m = s, O = !1;
                        switch (d) {
                            case r.EventBasedOn.VIEWPORT:
                                T = I ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
                                break;
                            case r.EventBasedOn.PAGE: {
                                let {
                                    scrollLeft: e,
                                    scrollTop: t,
                                    scrollWidth: a,
                                    scrollHeight: n
                                } = et();
                                T = I ? Math.min(e + E, a) / a : Math.min(t + b, n) / n;
                                break
                            }
                            case r.EventBasedOn.ELEMENT:
                            default: {
                                m = D(i, s);
                                let e = 0 === n.type.indexOf("mouse");
                                if (e && !0 !== Q({
                                        element: t,
                                        nativeEvent: n
                                    })) break;
                                let a = t.getBoundingClientRect(),
                                    {
                                        left: o,
                                        top: d,
                                        width: r,
                                        height: l
                                    } = a;
                                if (!e && !el({
                                        left: p,
                                        top: g
                                    }, a)) break;
                                O = !0, T = I ? (p - o) / r : (g - d) / l
                            }
                        }
                        return y && (T > .95 || T < .05) && (T = Math.round(T)), (d !== r.EventBasedOn.ELEMENT || O || O !== o.elementHovered) && (T = u ? 1 - T : T, e.dispatch((0, c.parameterChanged)(m, T))), {
                            elementHovered: O,
                            clientX: p,
                            clientY: g,
                            pageX: E,
                            pageY: b
                        }
                    }
                },
                [w]: {
                    types: q,
                    handler: ({
                        store: e,
                        eventConfig: t
                    }) => {
                        let {
                            continuousParameterGroupId: a,
                            reverse: n
                        } = t, {
                            scrollTop: i,
                            scrollHeight: o,
                            clientHeight: d
                        } = et(), r = i / (o - d);
                        r = n ? 1 - r : r, e.dispatch((0, c.parameterChanged)(a, r))
                    }
                },
                [V]: {
                    types: q,
                    handler: ({
                        element: e,
                        store: t,
                        eventConfig: a,
                        eventStateKey: n
                    }, i = {
                        scrollPercent: 0
                    }) => {
                        let {
                            scrollLeft: o,
                            scrollTop: d,
                            scrollWidth: l,
                            scrollHeight: s,
                            clientHeight: u
                        } = et(), {
                            basedOn: f,
                            selectedAxis: p,
                            continuousParameterGroupId: g,
                            startsEntering: E,
                            startsExiting: b,
                            addEndOffset: I,
                            addStartOffset: y,
                            addOffsetValue: T = 0,
                            endOffsetValue: m = 0
                        } = a;
                        if (f === r.EventBasedOn.VIEWPORT) {
                            let e = "X_AXIS" === p ? o / l : d / s;
                            return e !== i.scrollPercent && t.dispatch((0, c.parameterChanged)(g, e)), {
                                scrollPercent: e
                            }
                        } {
                            let a = D(n, g),
                                o = e.getBoundingClientRect(),
                                d = (y ? T : 0) / 100,
                                r = (I ? m : 0) / 100;
                            d = E ? d : 1 - d, r = b ? r : 1 - r;
                            let l = o.top + Math.min(o.height * d, u),
                                f = Math.min(u + (o.top + o.height * r - l), s),
                                p = Math.min(Math.max(0, u - l), f) / f;
                            return p !== i.scrollPercent && t.dispatch((0, c.parameterChanged)(a, p)), {
                                scrollPercent: p
                            }
                        }
                    }
                },
                [L]: ef,
                [N]: ef,
                [h]: {
                    ...J,
                    handler: er((e, t) => {
                        t.scrollingDown && z(e)
                    })
                },
                [C]: {
                    ...J,
                    handler: er((e, t) => {
                        t.scrollingDown || z(e)
                    })
                },
                [G]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: W(X, (e, t) => {
                        let a = {
                            finished: "complete" === document.readyState
                        };
                        return a.finished && !(t && t.finshed) && z(e), a
                    })
                },
                [M]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: W(X, (e, t) => (t || z(e), {
                        started: !0
                    }))
                }
            }
        },
        4609: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixData", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: n
            } = a(7087).IX2EngineActionTypes, i = (e = Object.freeze({}), t) => t.type === n ? t.payload.ixData || Object.freeze({}) : e
        },
        7718: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixInstances", {
                enumerable: !0,
                get: function() {
                    return O
                }
            });
            let n = a(7087),
                i = a(9468),
                o = a(1185),
                {
                    IX2_RAW_DATA_IMPORTED: d,
                    IX2_SESSION_STOPPED: r,
                    IX2_INSTANCE_ADDED: l,
                    IX2_INSTANCE_STARTED: c,
                    IX2_INSTANCE_REMOVED: s,
                    IX2_ANIMATION_FRAME_CHANGED: u
                } = n.IX2EngineActionTypes,
                {
                    optimizeFloat: f,
                    applyEasing: p,
                    createBezierEasing: g
                } = i.IX2EasingUtils,
                {
                    RENDER_GENERAL: E
                } = n.IX2EngineConstants,
                {
                    getItemConfigByKey: b,
                    getRenderType: I,
                    getStyleProp: y
                } = i.IX2VanillaUtils,
                T = (e, t) => {
                    let a, n, i, d, {
                            position: r,
                            parameterId: l,
                            actionGroups: c,
                            destinationKeys: s,
                            smoothing: u,
                            restingValue: g,
                            actionTypeId: E,
                            customEasingFn: I,
                            skipMotion: y,
                            skipToValue: T
                        } = e,
                        {
                            parameters: m
                        } = t.payload,
                        O = Math.max(1 - u, .01),
                        _ = m[l];
                    null == _ && (O = 1, _ = g);
                    let R = f((Math.max(_, 0) || 0) - r),
                        v = y ? T : f(r + R * O),
                        A = 100 * v;
                    if (v === r && e.current) return e;
                    for (let e = 0, {
                            length: t
                        } = c; e < t; e++) {
                        let {
                            keyframe: t,
                            actionItems: o
                        } = c[e];
                        if (0 === e && (a = o[0]), A >= t) {
                            a = o[0];
                            let r = c[e + 1],
                                l = r && A !== t;
                            n = l ? r.actionItems[0] : null, l && (i = t / 100, d = (r.keyframe - t) / 100)
                        }
                    }
                    let S = {};
                    if (a && !n)
                        for (let e = 0, {
                                length: t
                            } = s; e < t; e++) {
                            let t = s[e];
                            S[t] = b(E, t, a.config)
                        } else if (a && n && void 0 !== i && void 0 !== d) {
                            let e = (v - i) / d,
                                t = p(a.config.easing, e, I);
                            for (let e = 0, {
                                    length: i
                                } = s; e < i; e++) {
                                let i = s[e],
                                    o = b(E, i, a.config),
                                    d = (b(E, i, n.config) - o) * t + o;
                                S[i] = d
                            }
                        } return (0, o.merge)(e, {
                        position: v,
                        current: S
                    })
                },
                m = (e, t) => {
                    let {
                        active: a,
                        origin: n,
                        start: i,
                        immediate: d,
                        renderType: r,
                        verbose: l,
                        actionItem: c,
                        destination: s,
                        destinationKeys: u,
                        pluginDuration: g,
                        instanceDelay: b,
                        customEasingFn: I,
                        skipMotion: y
                    } = e, T = c.config.easing, {
                        duration: m,
                        delay: O
                    } = c.config;
                    null != g && (m = g), O = null != b ? b : O, r === E ? m = 0 : (d || y) && (m = O = 0);
                    let {
                        now: _
                    } = t.payload;
                    if (a && n) {
                        let t = _ - (i + O);
                        if (l) {
                            let t = m + O,
                                a = f(Math.min(Math.max(0, (_ - i) / t), 1));
                            e = (0, o.set)(e, "verboseTimeElapsed", t * a)
                        }
                        if (t < 0) return e;
                        let a = f(Math.min(Math.max(0, t / m), 1)),
                            d = p(T, a, I),
                            r = {},
                            c = null;
                        return u.length && (c = u.reduce((e, t) => {
                            let a = s[t],
                                i = parseFloat(n[t]) || 0,
                                o = parseFloat(a) - i;
                            return e[t] = o * d + i, e
                        }, {})), r.current = c, r.position = a, 1 === a && (r.active = !1, r.complete = !0), (0, o.merge)(e, r)
                    }
                    return e
                },
                O = (e = Object.freeze({}), t) => {
                    switch (t.type) {
                        case d:
                            return t.payload.ixInstances || Object.freeze({});
                        case r:
                            return Object.freeze({});
                        case l: {
                            let {
                                instanceId: a,
                                elementId: n,
                                actionItem: i,
                                eventId: d,
                                eventTarget: r,
                                eventStateKey: l,
                                actionListId: c,
                                groupIndex: s,
                                isCarrier: u,
                                origin: f,
                                destination: p,
                                immediate: E,
                                verbose: b,
                                continuous: T,
                                parameterId: m,
                                actionGroups: O,
                                smoothing: _,
                                restingValue: R,
                                pluginInstance: v,
                                pluginDuration: A,
                                instanceDelay: S,
                                skipMotion: h,
                                skipToValue: L
                            } = t.payload, {
                                actionTypeId: N
                            } = i, C = I(N), V = y(C, N), G = Object.keys(p).filter(e => null != p[e] && "string" != typeof p[e]), {
                                easing: x
                            } = i.config;
                            return (0, o.set)(e, a, {
                                id: a,
                                elementId: n,
                                active: !1,
                                position: 0,
                                start: 0,
                                origin: f,
                                destination: p,
                                destinationKeys: G,
                                immediate: E,
                                verbose: b,
                                current: null,
                                actionItem: i,
                                actionTypeId: N,
                                eventId: d,
                                eventTarget: r,
                                eventStateKey: l,
                                actionListId: c,
                                groupIndex: s,
                                renderType: C,
                                isCarrier: u,
                                styleProp: V,
                                continuous: T,
                                parameterId: m,
                                actionGroups: O,
                                smoothing: _,
                                restingValue: R,
                                pluginInstance: v,
                                pluginDuration: A,
                                instanceDelay: S,
                                skipMotion: h,
                                skipToValue: L,
                                customEasingFn: Array.isArray(x) && 4 === x.length ? g(x) : void 0
                            })
                        }
                        case c: {
                            let {
                                instanceId: a,
                                time: n
                            } = t.payload;
                            return (0, o.mergeIn)(e, [a], {
                                active: !0,
                                complete: !1,
                                start: n
                            })
                        }
                        case s: {
                            let {
                                instanceId: a
                            } = t.payload;
                            if (!e[a]) return e;
                            let n = {},
                                i = Object.keys(e),
                                {
                                    length: o
                                } = i;
                            for (let t = 0; t < o; t++) {
                                let o = i[t];
                                o !== a && (n[o] = e[o])
                            }
                            return n
                        }
                        case u: {
                            let a = e,
                                n = Object.keys(e),
                                {
                                    length: i
                                } = n;
                            for (let d = 0; d < i; d++) {
                                let i = n[d],
                                    r = e[i],
                                    l = r.continuous ? T : m;
                                a = (0, o.set)(a, i, l(r, t))
                            }
                            return a
                        }
                        default:
                            return e
                    }
                }
        },
        1540: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixParameters", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: n,
                IX2_SESSION_STOPPED: i,
                IX2_PARAMETER_CHANGED: o
            } = a(7087).IX2EngineActionTypes, d = (e = {}, t) => {
                switch (t.type) {
                    case n:
                        return t.payload.ixParameters || {};
                    case i:
                        return {};
                    case o: {
                        let {
                            key: a,
                            value: n
                        } = t.payload;
                        return e[a] = n, e
                    }
                    default:
                        return e
                }
            }
        },
        7243: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let n = a(9516),
                i = a(4609),
                o = a(628),
                d = a(5862),
                r = a(9468),
                l = a(7718),
                c = a(1540),
                {
                    ixElements: s
                } = r.IX2ElementsReducer,
                u = (0, n.combineReducers)({
                    ixData: i.ixData,
                    ixRequest: o.ixRequest,
                    ixSession: d.ixSession,
                    ixElements: s,
                    ixInstances: l.ixInstances,
                    ixParameters: c.ixParameters
                })
        },
        628: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixRequest", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let n = a(7087),
                i = a(1185),
                {
                    IX2_PREVIEW_REQUESTED: o,
                    IX2_PLAYBACK_REQUESTED: d,
                    IX2_STOP_REQUESTED: r,
                    IX2_CLEAR_REQUESTED: l
                } = n.IX2EngineActionTypes,
                c = {
                    preview: {},
                    playback: {},
                    stop: {},
                    clear: {}
                },
                s = Object.create(null, {
                    [o]: {
                        value: "preview"
                    },
                    [d]: {
                        value: "playback"
                    },
                    [r]: {
                        value: "stop"
                    },
                    [l]: {
                        value: "clear"
                    }
                }),
                u = (e = c, t) => {
                    if (t.type in s) {
                        let a = [s[t.type]];
                        return (0, i.setIn)(e, [a], {
                            ...t.payload
                        })
                    }
                    return e
                }
        },
        5862: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixSession", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            let n = a(7087),
                i = a(1185),
                {
                    IX2_SESSION_INITIALIZED: o,
                    IX2_SESSION_STARTED: d,
                    IX2_TEST_FRAME_RENDERED: r,
                    IX2_SESSION_STOPPED: l,
                    IX2_EVENT_LISTENER_ADDED: c,
                    IX2_EVENT_STATE_CHANGED: s,
                    IX2_ANIMATION_FRAME_CHANGED: u,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
                    IX2_VIEWPORT_WIDTH_CHANGED: p,
                    IX2_MEDIA_QUERIES_DEFINED: g
                } = n.IX2EngineActionTypes,
                E = {
                    active: !1,
                    tick: 0,
                    eventListeners: [],
                    eventState: {},
                    playbackState: {},
                    viewportWidth: 0,
                    mediaQueryKey: null,
                    hasBoundaryNodes: !1,
                    hasDefinedMediaQueries: !1,
                    reducedMotion: !1
                },
                b = (e = E, t) => {
                    switch (t.type) {
                        case o: {
                            let {
                                hasBoundaryNodes: a,
                                reducedMotion: n
                            } = t.payload;
                            return (0, i.merge)(e, {
                                hasBoundaryNodes: a,
                                reducedMotion: n
                            })
                        }
                        case d:
                            return (0, i.set)(e, "active", !0);
                        case r: {
                            let {
                                payload: {
                                    step: a = 20
                                }
                            } = t;
                            return (0, i.set)(e, "tick", e.tick + a)
                        }
                        case l:
                            return E;
                        case u: {
                            let {
                                payload: {
                                    now: a
                                }
                            } = t;
                            return (0, i.set)(e, "tick", a)
                        }
                        case c: {
                            let a = (0, i.addLast)(e.eventListeners, t.payload);
                            return (0, i.set)(e, "eventListeners", a)
                        }
                        case s: {
                            let {
                                stateKey: a,
                                newState: n
                            } = t.payload;
                            return (0, i.setIn)(e, ["eventState", a], n)
                        }
                        case f: {
                            let {
                                actionListId: a,
                                isPlaying: n
                            } = t.payload;
                            return (0, i.setIn)(e, ["playbackState", a], n)
                        }
                        case p: {
                            let {
                                width: a,
                                mediaQueries: n
                            } = t.payload, o = n.length, d = null;
                            for (let e = 0; e < o; e++) {
                                let {
                                    key: t,
                                    min: i,
                                    max: o
                                } = n[e];
                                if (a >= i && a <= o) {
                                    d = t;
                                    break
                                }
                            }
                            return (0, i.merge)(e, {
                                viewportWidth: a,
                                mediaQueryKey: d
                            })
                        }
                        case g:
                            return (0, i.set)(e, "hasDefinedMediaQueries", !0);
                        default:
                            return e
                    }
                }
        },
        7377: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                clearPlugin: function() {
                    return s
                },
                createPluginInstance: function() {
                    return l
                },
                getPluginConfig: function() {
                    return i
                },
                getPluginDestination: function() {
                    return r
                },
                getPluginDuration: function() {
                    return o
                },
                getPluginOrigin: function() {
                    return d
                },
                renderPlugin: function() {
                    return c
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = e => e.value,
                o = (e, t) => {
                    if ("auto" !== t.config.duration) return null;
                    let a = parseFloat(e.getAttribute("data-duration"));
                    return a > 0 ? 1e3 * a : 1e3 * parseFloat(e.getAttribute("data-default-duration"))
                },
                d = e => e || {
                    value: 0
                },
                r = e => ({
                    value: e.value
                }),
                l = e => {
                    let t = window.Webflow.require("lottie");
                    if (!t) return null;
                    let a = t.createInstance(e);
                    return a.stop(), a.setSubframe(!0), a
                },
                c = (e, t, a) => {
                    if (!e) return;
                    let n = t[a.actionTypeId].value / 100;
                    e.goToFrame(e.frames * n)
                },
                s = e => {
                    let t = window.Webflow.require("lottie");
                    t && t.createInstance(e).stop()
                }
        },
        2570: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                clearPlugin: function() {
                    return g
                },
                createPluginInstance: function() {
                    return f
                },
                getPluginConfig: function() {
                    return l
                },
                getPluginDestination: function() {
                    return u
                },
                getPluginDuration: function() {
                    return c
                },
                getPluginOrigin: function() {
                    return s
                },
                renderPlugin: function() {
                    return p
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = "--wf-rive-fit",
                o = "--wf-rive-alignment",
                d = e => document.querySelector(`[data-w-id="${e}"]`),
                r = () => window.Webflow.require("rive"),
                l = (e, t) => e.value.inputs[t],
                c = () => null,
                s = (e, t) => {
                    if (e) return e;
                    let a = {},
                        {
                            inputs: n = {}
                        } = t.config.value;
                    for (let e in n) null == n[e] && (a[e] = 0);
                    return a
                },
                u = e => e.value.inputs ?? {},
                f = (e, t) => {
                    if ((t.config?.target?.selectorGuids || []).length > 0) return e;
                    let a = t?.config?.target?.pluginElement;
                    return a ? d(a) : null
                },
                p = (e, {
                    PLUGIN_RIVE: t
                }, a) => {
                    let n = r();
                    if (!n) return;
                    let d = n.getInstance(e),
                        l = n.rive.StateMachineInputType,
                        {
                            name: c,
                            inputs: s = {}
                        } = a.config.value || {};

                    function u(e) {
                        if (e.loaded) a();
                        else {
                            let t = () => {
                                a(), e?.off("load", t)
                            };
                            e?.on("load", t)
                        }

                        function a() {
                            let a = e.stateMachineInputs(c);
                            if (null != a) {
                                if (e.isPlaying || e.play(c, !1), i in s || o in s) {
                                    let t = e.layout,
                                        a = s[i] ?? t.fit,
                                        n = s[o] ?? t.alignment;
                                    (a !== t.fit || n !== t.alignment) && (e.layout = t.copyWith({
                                        fit: a,
                                        alignment: n
                                    }))
                                }
                                for (let e in s) {
                                    if (e === i || e === o) continue;
                                    let n = a.find(t => t.name === e);
                                    if (null != n) switch (n.type) {
                                        case l.Boolean:
                                            null != s[e] && (n.value = !!s[e]);
                                            break;
                                        case l.Number: {
                                            let a = t[e];
                                            null != a && (n.value = a);
                                            break
                                        }
                                        case l.Trigger:
                                            s[e] && n.fire()
                                    }
                                }
                            }
                        }
                    }
                    d?.rive ? u(d.rive) : n.setLoadHandler(e, u)
                },
                g = (e, t) => null
        },
        2866: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                clearPlugin: function() {
                    return g
                },
                createPluginInstance: function() {
                    return f
                },
                getPluginConfig: function() {
                    return r
                },
                getPluginDestination: function() {
                    return u
                },
                getPluginDuration: function() {
                    return l
                },
                getPluginOrigin: function() {
                    return s
                },
                renderPlugin: function() {
                    return p
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = e => document.querySelector(`[data-w-id="${e}"]`),
                o = () => window.Webflow.require("spline"),
                d = (e, t) => e.filter(e => !t.includes(e)),
                r = (e, t) => e.value[t],
                l = () => null,
                c = Object.freeze({
                    positionX: 0,
                    positionY: 0,
                    positionZ: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1
                }),
                s = (e, t) => {
                    let a = Object.keys(t.config.value);
                    if (e) {
                        let t = d(a, Object.keys(e));
                        return t.length ? t.reduce((e, t) => (e[t] = c[t], e), e) : e
                    }
                    return a.reduce((e, t) => (e[t] = c[t], e), {})
                },
                u = e => e.value,
                f = (e, t) => {
                    let a = t?.config?.target?.pluginElement;
                    return a ? i(a) : null
                },
                p = (e, t, a) => {
                    let n = o();
                    if (!n) return;
                    let i = n.getInstance(e),
                        d = a.config.target.objectId,
                        r = e => {
                            if (!e) throw Error("Invalid spline app passed to renderSpline");
                            let a = d && e.findObjectById(d);
                            if (!a) return;
                            let {
                                PLUGIN_SPLINE: n
                            } = t;
                            null != n.positionX && (a.position.x = n.positionX), null != n.positionY && (a.position.y = n.positionY), null != n.positionZ && (a.position.z = n.positionZ), null != n.rotationX && (a.rotation.x = n.rotationX), null != n.rotationY && (a.rotation.y = n.rotationY), null != n.rotationZ && (a.rotation.z = n.rotationZ), null != n.scaleX && (a.scale.x = n.scaleX), null != n.scaleY && (a.scale.y = n.scaleY), null != n.scaleZ && (a.scale.z = n.scaleZ)
                        };
                    i ? r(i.spline) : n.setLoadHandler(e, r)
                },
                g = () => null
        },
        1407: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return p
                },
                createPluginInstance: function() {
                    return s
                },
                getPluginConfig: function() {
                    return d
                },
                getPluginDestination: function() {
                    return c
                },
                getPluginDuration: function() {
                    return r
                },
                getPluginOrigin: function() {
                    return l
                },
                renderPlugin: function() {
                    return f
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = a(380),
                d = (e, t) => e.value[t],
                r = () => null,
                l = (e, t) => {
                    if (e) return e;
                    let a = t.config.value,
                        n = t.config.target.objectId,
                        i = getComputedStyle(document.documentElement).getPropertyValue(n);
                    return null != a.size ? {
                        size: parseInt(i, 10)
                    } : "%" === a.unit || "-" === a.unit ? {
                        size: parseFloat(i)
                    } : null != a.red && null != a.green && null != a.blue ? (0, o.normalizeColor)(i) : void 0
                },
                c = e => e.value,
                s = () => null,
                u = {
                    color: {
                        match: ({
                            red: e,
                            green: t,
                            blue: a,
                            alpha: n
                        }) => [e, t, a, n].every(e => null != e),
                        getValue: ({
                            red: e,
                            green: t,
                            blue: a,
                            alpha: n
                        }) => `rgba(${e}, ${t}, ${a}, ${n})`
                    },
                    size: {
                        match: ({
                            size: e
                        }) => null != e,
                        getValue: ({
                            size: e
                        }, t) => "-" === t ? e : `${e}${t}`
                    }
                },
                f = (e, t, a) => {
                    let {
                        target: {
                            objectId: n
                        },
                        value: {
                            unit: i
                        }
                    } = a.config, o = t.PLUGIN_VARIABLE, d = Object.values(u).find(e => e.match(o, i));
                    d && document.documentElement.style.setProperty(n, d.getValue(o, i))
                },
                p = (e, t) => {
                    let a = t.config.target.objectId;
                    document.documentElement.style.removeProperty(a)
                }
        },
        3690: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "pluginMethodMap", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = a(7087),
                i = c(a(7377)),
                o = c(a(2866)),
                d = c(a(2570)),
                r = c(a(1407));

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (l = function(e) {
                    return e ? a : t
                })(e)
            }

            function c(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var a = l(t);
                if (a && a.has(e)) return a.get(e);
                var n = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                    } return n.default = e, a && a.set(e, n), n
            }
            let s = new Map([
                [n.ActionTypeConsts.PLUGIN_LOTTIE, {
                    ...i
                }],
                [n.ActionTypeConsts.PLUGIN_SPLINE, {
                    ...o
                }],
                [n.ActionTypeConsts.PLUGIN_RIVE, {
                    ...d
                }],
                [n.ActionTypeConsts.PLUGIN_VARIABLE, {
                    ...r
                }]
            ])
        },
        8023: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
                    return m
                },
                IX2_ANIMATION_FRAME_CHANGED: function() {
                    return g
                },
                IX2_CLEAR_REQUESTED: function() {
                    return u
                },
                IX2_ELEMENT_STATE_CHANGED: function() {
                    return T
                },
                IX2_EVENT_LISTENER_ADDED: function() {
                    return f
                },
                IX2_EVENT_STATE_CHANGED: function() {
                    return p
                },
                IX2_INSTANCE_ADDED: function() {
                    return b
                },
                IX2_INSTANCE_REMOVED: function() {
                    return y
                },
                IX2_INSTANCE_STARTED: function() {
                    return I
                },
                IX2_MEDIA_QUERIES_DEFINED: function() {
                    return _
                },
                IX2_PARAMETER_CHANGED: function() {
                    return E
                },
                IX2_PLAYBACK_REQUESTED: function() {
                    return c
                },
                IX2_PREVIEW_REQUESTED: function() {
                    return l
                },
                IX2_RAW_DATA_IMPORTED: function() {
                    return i
                },
                IX2_SESSION_INITIALIZED: function() {
                    return o
                },
                IX2_SESSION_STARTED: function() {
                    return d
                },
                IX2_SESSION_STOPPED: function() {
                    return r
                },
                IX2_STOP_REQUESTED: function() {
                    return s
                },
                IX2_TEST_FRAME_RENDERED: function() {
                    return R
                },
                IX2_VIEWPORT_WIDTH_CHANGED: function() {
                    return O
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = "IX2_RAW_DATA_IMPORTED",
                o = "IX2_SESSION_INITIALIZED",
                d = "IX2_SESSION_STARTED",
                r = "IX2_SESSION_STOPPED",
                l = "IX2_PREVIEW_REQUESTED",
                c = "IX2_PLAYBACK_REQUESTED",
                s = "IX2_STOP_REQUESTED",
                u = "IX2_CLEAR_REQUESTED",
                f = "IX2_EVENT_LISTENER_ADDED",
                p = "IX2_EVENT_STATE_CHANGED",
                g = "IX2_ANIMATION_FRAME_CHANGED",
                E = "IX2_PARAMETER_CHANGED",
                b = "IX2_INSTANCE_ADDED",
                I = "IX2_INSTANCE_STARTED",
                y = "IX2_INSTANCE_REMOVED",
                T = "IX2_ELEMENT_STATE_CHANGED",
                m = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
                O = "IX2_VIEWPORT_WIDTH_CHANGED",
                _ = "IX2_MEDIA_QUERIES_DEFINED",
                R = "IX2_TEST_FRAME_RENDERED"
        },
        2686: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                ABSTRACT_NODE: function() {
                    return et
                },
                AUTO: function() {
                    return Q
                },
                BACKGROUND: function() {
                    return k
                },
                BACKGROUND_COLOR: function() {
                    return U
                },
                BAR_DELIMITER: function() {
                    return z
                },
                BORDER_COLOR: function() {
                    return F
                },
                BOUNDARY_SELECTOR: function() {
                    return l
                },
                CHILDREN: function() {
                    return W
                },
                COLON_DELIMITER: function() {
                    return j
                },
                COLOR: function() {
                    return D
                },
                COMMA_DELIMITER: function() {
                    return H
                },
                CONFIG_UNIT: function() {
                    return b
                },
                CONFIG_VALUE: function() {
                    return f
                },
                CONFIG_X_UNIT: function() {
                    return p
                },
                CONFIG_X_VALUE: function() {
                    return c
                },
                CONFIG_Y_UNIT: function() {
                    return g
                },
                CONFIG_Y_VALUE: function() {
                    return s
                },
                CONFIG_Z_UNIT: function() {
                    return E
                },
                CONFIG_Z_VALUE: function() {
                    return u
                },
                DISPLAY: function() {
                    return B
                },
                FILTER: function() {
                    return x
                },
                FLEX: function() {
                    return X
                },
                FONT_VARIATION_SETTINGS: function() {
                    return P
                },
                HEIGHT: function() {
                    return w
                },
                HTML_ELEMENT: function() {
                    return J
                },
                IMMEDIATE_CHILDREN: function() {
                    return $
                },
                IX2_ID_DELIMITER: function() {
                    return i
                },
                OPACITY: function() {
                    return G
                },
                PARENT: function() {
                    return q
                },
                PLAIN_OBJECT: function() {
                    return ee
                },
                PRESERVE_3D: function() {
                    return Z
                },
                RENDER_GENERAL: function() {
                    return en
                },
                RENDER_PLUGIN: function() {
                    return eo
                },
                RENDER_STYLE: function() {
                    return ei
                },
                RENDER_TRANSFORM: function() {
                    return ea
                },
                ROTATE_X: function() {
                    return S
                },
                ROTATE_Y: function() {
                    return h
                },
                ROTATE_Z: function() {
                    return L
                },
                SCALE_3D: function() {
                    return A
                },
                SCALE_X: function() {
                    return _
                },
                SCALE_Y: function() {
                    return R
                },
                SCALE_Z: function() {
                    return v
                },
                SIBLINGS: function() {
                    return K
                },
                SKEW: function() {
                    return N
                },
                SKEW_X: function() {
                    return C
                },
                SKEW_Y: function() {
                    return V
                },
                TRANSFORM: function() {
                    return I
                },
                TRANSLATE_3D: function() {
                    return O
                },
                TRANSLATE_X: function() {
                    return y
                },
                TRANSLATE_Y: function() {
                    return T
                },
                TRANSLATE_Z: function() {
                    return m
                },
                WF_PAGE: function() {
                    return o
                },
                WIDTH: function() {
                    return M
                },
                WILL_CHANGE: function() {
                    return Y
                },
                W_MOD_IX: function() {
                    return r
                },
                W_MOD_JS: function() {
                    return d
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = "|",
                o = "data-wf-page",
                d = "w-mod-js",
                r = "w-mod-ix",
                l = ".w-dyn-item",
                c = "xValue",
                s = "yValue",
                u = "zValue",
                f = "value",
                p = "xUnit",
                g = "yUnit",
                E = "zUnit",
                b = "unit",
                I = "transform",
                y = "translateX",
                T = "translateY",
                m = "translateZ",
                O = "translate3d",
                _ = "scaleX",
                R = "scaleY",
                v = "scaleZ",
                A = "scale3d",
                S = "rotateX",
                h = "rotateY",
                L = "rotateZ",
                N = "skew",
                C = "skewX",
                V = "skewY",
                G = "opacity",
                x = "filter",
                P = "font-variation-settings",
                M = "width",
                w = "height",
                U = "backgroundColor",
                k = "background",
                F = "borderColor",
                D = "color",
                B = "display",
                X = "flex",
                Y = "willChange",
                Q = "AUTO",
                H = ",",
                j = ":",
                z = "|",
                W = "CHILDREN",
                $ = "IMMEDIATE_CHILDREN",
                K = "SIBLINGS",
                q = "PARENT",
                Z = "preserve-3d",
                J = "HTML_ELEMENT",
                ee = "PLAIN_OBJECT",
                et = "ABSTRACT_NODE",
                ea = "RENDER_TRANSFORM",
                en = "RENDER_GENERAL",
                ei = "RENDER_STYLE",
                eo = "RENDER_PLUGIN"
        },
        262: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                ActionAppliesTo: function() {
                    return o
                },
                ActionTypeConsts: function() {
                    return i
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = {
                    TRANSFORM_MOVE: "TRANSFORM_MOVE",
                    TRANSFORM_SCALE: "TRANSFORM_SCALE",
                    TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
                    TRANSFORM_SKEW: "TRANSFORM_SKEW",
                    STYLE_OPACITY: "STYLE_OPACITY",
                    STYLE_SIZE: "STYLE_SIZE",
                    STYLE_FILTER: "STYLE_FILTER",
                    STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
                    STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
                    STYLE_BORDER: "STYLE_BORDER",
                    STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
                    OBJECT_VALUE: "OBJECT_VALUE",
                    PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
                    PLUGIN_SPLINE: "PLUGIN_SPLINE",
                    PLUGIN_RIVE: "PLUGIN_RIVE",
                    PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
                    GENERAL_DISPLAY: "GENERAL_DISPLAY",
                    GENERAL_START_ACTION: "GENERAL_START_ACTION",
                    GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
                    GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
                    GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
                    GENERAL_LOOP: "GENERAL_LOOP",
                    STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
                },
                o = {
                    ELEMENT: "ELEMENT",
                    ELEMENT_CLASS: "ELEMENT_CLASS",
                    TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
                }
        },
        7087: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                ActionTypeConsts: function() {
                    return d.ActionTypeConsts
                },
                IX2EngineActionTypes: function() {
                    return r
                },
                IX2EngineConstants: function() {
                    return l
                },
                QuickEffectIds: function() {
                    return o.QuickEffectIds
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = c(a(1833), t),
                d = c(a(262), t);
            c(a(8704), t), c(a(3213), t);
            let r = u(a(8023)),
                l = u(a(2686));

            function c(e, t) {
                return Object.keys(e).forEach(function(a) {
                    "default" === a || Object.prototype.hasOwnProperty.call(t, a) || Object.defineProperty(t, a, {
                        enumerable: !0,
                        get: function() {
                            return e[a]
                        }
                    })
                }), e
            }

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (s = function(e) {
                    return e ? a : t
                })(e)
            }

            function u(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var a = s(t);
                if (a && a.has(e)) return a.get(e);
                var n = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                    } return n.default = e, a && a.set(e, n), n
            }
        },
        3213: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ReducedMotionTypes", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let {
                TRANSFORM_MOVE: n,
                TRANSFORM_SCALE: i,
                TRANSFORM_ROTATE: o,
                TRANSFORM_SKEW: d,
                STYLE_SIZE: r,
                STYLE_FILTER: l,
                STYLE_FONT_VARIATION: c
            } = a(262).ActionTypeConsts, s = {
                [n]: !0,
                [i]: !0,
                [o]: !0,
                [d]: !0,
                [r]: !0,
                [l]: !0,
                [c]: !0
            }
        },
        1833: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                EventAppliesTo: function() {
                    return o
                },
                EventBasedOn: function() {
                    return d
                },
                EventContinuousMouseAxes: function() {
                    return r
                },
                EventLimitAffectedElements: function() {
                    return l
                },
                EventTypeConsts: function() {
                    return i
                },
                QuickEffectDirectionConsts: function() {
                    return s
                },
                QuickEffectIds: function() {
                    return c
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = {
                    NAVBAR_OPEN: "NAVBAR_OPEN",
                    NAVBAR_CLOSE: "NAVBAR_CLOSE",
                    TAB_ACTIVE: "TAB_ACTIVE",
                    TAB_INACTIVE: "TAB_INACTIVE",
                    SLIDER_ACTIVE: "SLIDER_ACTIVE",
                    SLIDER_INACTIVE: "SLIDER_INACTIVE",
                    DROPDOWN_OPEN: "DROPDOWN_OPEN",
                    DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
                    MOUSE_CLICK: "MOUSE_CLICK",
                    MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
                    MOUSE_DOWN: "MOUSE_DOWN",
                    MOUSE_UP: "MOUSE_UP",
                    MOUSE_OVER: "MOUSE_OVER",
                    MOUSE_OUT: "MOUSE_OUT",
                    MOUSE_MOVE: "MOUSE_MOVE",
                    MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
                    SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
                    SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
                    SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
                    ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
                    ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
                    PAGE_START: "PAGE_START",
                    PAGE_FINISH: "PAGE_FINISH",
                    PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
                    PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
                    PAGE_SCROLL: "PAGE_SCROLL"
                },
                o = {
                    ELEMENT: "ELEMENT",
                    CLASS: "CLASS",
                    PAGE: "PAGE"
                },
                d = {
                    ELEMENT: "ELEMENT",
                    VIEWPORT: "VIEWPORT"
                },
                r = {
                    X_AXIS: "X_AXIS",
                    Y_AXIS: "Y_AXIS"
                },
                l = {
                    CHILDREN: "CHILDREN",
                    SIBLINGS: "SIBLINGS",
                    IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
                },
                c = {
                    FADE_EFFECT: "FADE_EFFECT",
                    SLIDE_EFFECT: "SLIDE_EFFECT",
                    GROW_EFFECT: "GROW_EFFECT",
                    SHRINK_EFFECT: "SHRINK_EFFECT",
                    SPIN_EFFECT: "SPIN_EFFECT",
                    FLY_EFFECT: "FLY_EFFECT",
                    POP_EFFECT: "POP_EFFECT",
                    FLIP_EFFECT: "FLIP_EFFECT",
                    JIGGLE_EFFECT: "JIGGLE_EFFECT",
                    PULSE_EFFECT: "PULSE_EFFECT",
                    DROP_EFFECT: "DROP_EFFECT",
                    BLINK_EFFECT: "BLINK_EFFECT",
                    BOUNCE_EFFECT: "BOUNCE_EFFECT",
                    FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
                    FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
                    RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
                    JELLO_EFFECT: "JELLO_EFFECT",
                    GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
                    SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
                    PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
                },
                s = {
                    LEFT: "LEFT",
                    RIGHT: "RIGHT",
                    BOTTOM: "BOTTOM",
                    TOP: "TOP",
                    BOTTOM_LEFT: "BOTTOM_LEFT",
                    BOTTOM_RIGHT: "BOTTOM_RIGHT",
                    TOP_RIGHT: "TOP_RIGHT",
                    TOP_LEFT: "TOP_LEFT",
                    CLOCKWISE: "CLOCKWISE",
                    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
                }
        },
        8704: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "InteractionTypeConsts", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let a = {
                MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
                MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
                MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
                SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
                SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
                MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
                PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
                PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
                PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
                NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
                DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
                ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
                TAB_INTERACTION: "TAB_INTERACTION",
                SLIDER_INTERACTION: "SLIDER_INTERACTION"
            }
        },
        380: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "normalizeColor", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let a = {
                aliceblue: "#F0F8FF",
                antiquewhite: "#FAEBD7",
                aqua: "#00FFFF",
                aquamarine: "#7FFFD4",
                azure: "#F0FFFF",
                beige: "#F5F5DC",
                bisque: "#FFE4C4",
                black: "#000000",
                blanchedalmond: "#FFEBCD",
                blue: "#0000FF",
                blueviolet: "#8A2BE2",
                brown: "#A52A2A",
                burlywood: "#DEB887",
                cadetblue: "#5F9EA0",
                chartreuse: "#7FFF00",
                chocolate: "#D2691E",
                coral: "#FF7F50",
                cornflowerblue: "#6495ED",
                cornsilk: "#FFF8DC",
                crimson: "#DC143C",
                cyan: "#00FFFF",
                darkblue: "#00008B",
                darkcyan: "#008B8B",
                darkgoldenrod: "#B8860B",
                darkgray: "#A9A9A9",
                darkgreen: "#006400",
                darkgrey: "#A9A9A9",
                darkkhaki: "#BDB76B",
                darkmagenta: "#8B008B",
                darkolivegreen: "#556B2F",
                darkorange: "#FF8C00",
                darkorchid: "#9932CC",
                darkred: "#8B0000",
                darksalmon: "#E9967A",
                darkseagreen: "#8FBC8F",
                darkslateblue: "#483D8B",
                darkslategray: "#2F4F4F",
                darkslategrey: "#2F4F4F",
                darkturquoise: "#00CED1",
                darkviolet: "#9400D3",
                deeppink: "#FF1493",
                deepskyblue: "#00BFFF",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1E90FF",
                firebrick: "#B22222",
                floralwhite: "#FFFAF0",
                forestgreen: "#228B22",
                fuchsia: "#FF00FF",
                gainsboro: "#DCDCDC",
                ghostwhite: "#F8F8FF",
                gold: "#FFD700",
                goldenrod: "#DAA520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#ADFF2F",
                grey: "#808080",
                honeydew: "#F0FFF0",
                hotpink: "#FF69B4",
                indianred: "#CD5C5C",
                indigo: "#4B0082",
                ivory: "#FFFFF0",
                khaki: "#F0E68C",
                lavender: "#E6E6FA",
                lavenderblush: "#FFF0F5",
                lawngreen: "#7CFC00",
                lemonchiffon: "#FFFACD",
                lightblue: "#ADD8E6",
                lightcoral: "#F08080",
                lightcyan: "#E0FFFF",
                lightgoldenrodyellow: "#FAFAD2",
                lightgray: "#D3D3D3",
                lightgreen: "#90EE90",
                lightgrey: "#D3D3D3",
                lightpink: "#FFB6C1",
                lightsalmon: "#FFA07A",
                lightseagreen: "#20B2AA",
                lightskyblue: "#87CEFA",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#B0C4DE",
                lightyellow: "#FFFFE0",
                lime: "#00FF00",
                limegreen: "#32CD32",
                linen: "#FAF0E6",
                magenta: "#FF00FF",
                maroon: "#800000",
                mediumaquamarine: "#66CDAA",
                mediumblue: "#0000CD",
                mediumorchid: "#BA55D3",
                mediumpurple: "#9370DB",
                mediumseagreen: "#3CB371",
                mediumslateblue: "#7B68EE",
                mediumspringgreen: "#00FA9A",
                mediumturquoise: "#48D1CC",
                mediumvioletred: "#C71585",
                midnightblue: "#191970",
                mintcream: "#F5FFFA",
                mistyrose: "#FFE4E1",
                moccasin: "#FFE4B5",
                navajowhite: "#FFDEAD",
                navy: "#000080",
                oldlace: "#FDF5E6",
                olive: "#808000",
                olivedrab: "#6B8E23",
                orange: "#FFA500",
                orangered: "#FF4500",
                orchid: "#DA70D6",
                palegoldenrod: "#EEE8AA",
                palegreen: "#98FB98",
                paleturquoise: "#AFEEEE",
                palevioletred: "#DB7093",
                papayawhip: "#FFEFD5",
                peachpuff: "#FFDAB9",
                peru: "#CD853F",
                pink: "#FFC0CB",
                plum: "#DDA0DD",
                powderblue: "#B0E0E6",
                purple: "#800080",
                rebeccapurple: "#663399",
                red: "#FF0000",
                rosybrown: "#BC8F8F",
                royalblue: "#4169E1",
                saddlebrown: "#8B4513",
                salmon: "#FA8072",
                sandybrown: "#F4A460",
                seagreen: "#2E8B57",
                seashell: "#FFF5EE",
                sienna: "#A0522D",
                silver: "#C0C0C0",
                skyblue: "#87CEEB",
                slateblue: "#6A5ACD",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#FFFAFA",
                springgreen: "#00FF7F",
                steelblue: "#4682B4",
                tan: "#D2B48C",
                teal: "#008080",
                thistle: "#D8BFD8",
                tomato: "#FF6347",
                turquoise: "#40E0D0",
                violet: "#EE82EE",
                wheat: "#F5DEB3",
                white: "#FFFFFF",
                whitesmoke: "#F5F5F5",
                yellow: "#FFFF00",
                yellowgreen: "#9ACD32"
            };

            function n(e) {
                let t, n, i, o = 1,
                    d = e.replace(/\s/g, "").toLowerCase(),
                    r = ("string" == typeof a[d] ? a[d].toLowerCase() : null) || d;
                if (r.startsWith("#")) {
                    let e = r.substring(1);
                    3 === e.length || 4 === e.length ? (t = parseInt(e[0] + e[0], 16), n = parseInt(e[1] + e[1], 16), i = parseInt(e[2] + e[2], 16), 4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255)) : (6 === e.length || 8 === e.length) && (t = parseInt(e.substring(0, 2), 16), n = parseInt(e.substring(2, 4), 16), i = parseInt(e.substring(4, 6), 16), 8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255))
                } else if (r.startsWith("rgba")) {
                    let e = r.match(/rgba\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), n = parseInt(e[1], 10), i = parseInt(e[2], 10), o = parseFloat(e[3])
                } else if (r.startsWith("rgb")) {
                    let e = r.match(/rgb\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), n = parseInt(e[1], 10), i = parseInt(e[2], 10)
                } else if (r.startsWith("hsla")) {
                    let e, a, d, l = r.match(/hsla\(([^)]+)\)/)[1].split(","),
                        c = parseFloat(l[0]),
                        s = parseFloat(l[1].replace("%", "")) / 100,
                        u = parseFloat(l[2].replace("%", "")) / 100;
                    o = parseFloat(l[3]);
                    let f = (1 - Math.abs(2 * u - 1)) * s,
                        p = f * (1 - Math.abs(c / 60 % 2 - 1)),
                        g = u - f / 2;
                    c >= 0 && c < 60 ? (e = f, a = p, d = 0) : c >= 60 && c < 120 ? (e = p, a = f, d = 0) : c >= 120 && c < 180 ? (e = 0, a = f, d = p) : c >= 180 && c < 240 ? (e = 0, a = p, d = f) : c >= 240 && c < 300 ? (e = p, a = 0, d = f) : (e = f, a = 0, d = p), t = Math.round((e + g) * 255), n = Math.round((a + g) * 255), i = Math.round((d + g) * 255)
                } else if (r.startsWith("hsl")) {
                    let e, a, o, d = r.match(/hsl\(([^)]+)\)/)[1].split(","),
                        l = parseFloat(d[0]),
                        c = parseFloat(d[1].replace("%", "")) / 100,
                        s = parseFloat(d[2].replace("%", "")) / 100,
                        u = (1 - Math.abs(2 * s - 1)) * c,
                        f = u * (1 - Math.abs(l / 60 % 2 - 1)),
                        p = s - u / 2;
                    l >= 0 && l < 60 ? (e = u, a = f, o = 0) : l >= 60 && l < 120 ? (e = f, a = u, o = 0) : l >= 120 && l < 180 ? (e = 0, a = u, o = f) : l >= 180 && l < 240 ? (e = 0, a = f, o = u) : l >= 240 && l < 300 ? (e = f, a = 0, o = u) : (e = u, a = 0, o = f), t = Math.round((e + p) * 255), n = Math.round((a + p) * 255), i = Math.round((o + p) * 255)
                }
                if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(i)) throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
                return {
                    red: t,
                    green: n,
                    blue: i,
                    alpha: o
                }
            }
        },
        9468: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                IX2BrowserSupport: function() {
                    return o
                },
                IX2EasingUtils: function() {
                    return r
                },
                IX2Easings: function() {
                    return d
                },
                IX2ElementsReducer: function() {
                    return l
                },
                IX2VanillaPlugins: function() {
                    return c
                },
                IX2VanillaUtils: function() {
                    return s
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = f(a(2662)),
                d = f(a(8686)),
                r = f(a(3767)),
                l = f(a(5861)),
                c = f(a(1799)),
                s = f(a(4124));

            function u(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (u = function(e) {
                    return e ? a : t
                })(e)
            }

            function f(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var a = u(t);
                if (a && a.has(e)) return a.get(e);
                var n = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                    } return n.default = e, a && a.set(e, n), n
            }
        },
        2662: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, i = {
                ELEMENT_MATCHES: function() {
                    return c
                },
                FLEX_PREFIXED: function() {
                    return s
                },
                IS_BROWSER_ENV: function() {
                    return r
                },
                TRANSFORM_PREFIXED: function() {
                    return u
                },
                TRANSFORM_STYLE_PREFIXED: function() {
                    return p
                },
                withBrowser: function() {
                    return l
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let d = (n = a(9777)) && n.__esModule ? n : {
                    default: n
                },
                r = "undefined" != typeof window,
                l = (e, t) => r ? e() : t,
                c = l(() => (0, d.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
                s = l(() => {
                    let e = document.createElement("i"),
                        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
                    try {
                        let {
                            length: a
                        } = t;
                        for (let n = 0; n < a; n++) {
                            let a = t[n];
                            if (e.style.display = a, e.style.display === a) return a
                        }
                        return ""
                    } catch (e) {
                        return ""
                    }
                }, "flex"),
                u = l(() => {
                    let e = document.createElement("i");
                    if (null == e.style.transform) {
                        let t = ["Webkit", "Moz", "ms"],
                            {
                                length: a
                            } = t;
                        for (let n = 0; n < a; n++) {
                            let a = t[n] + "Transform";
                            if (void 0 !== e.style[a]) return a
                        }
                    }
                    return "transform"
                }, "transform"),
                f = u.split("transform")[0],
                p = f ? f + "TransformStyle" : "transformStyle"
        },
        3767: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, i = {
                applyEasing: function() {
                    return u
                },
                createBezierEasing: function() {
                    return s
                },
                optimizeFloat: function() {
                    return c
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let d = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = l(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                        } return n.default = e, a && a.set(e, n), n
                }(a(8686)),
                r = (n = a(1361)) && n.__esModule ? n : {
                    default: n
                };

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (l = function(e) {
                    return e ? a : t
                })(e)
            }

            function c(e, t = 5, a = 10) {
                let n = Math.pow(a, t),
                    i = Number(Math.round(e * n) / n);
                return Math.abs(i) > 1e-4 ? i : 0
            }

            function s(e) {
                return (0, r.default)(...e)
            }

            function u(e, t, a) {
                return 0 === t ? 0 : 1 === t ? 1 : a ? c(t > 0 ? a(t) : t) : c(t > 0 && e && d[e] ? d[e](t) : t)
            }
        },
        8686: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, i = {
                bounce: function() {
                    return X
                },
                bouncePast: function() {
                    return Y
                },
                ease: function() {
                    return r
                },
                easeIn: function() {
                    return l
                },
                easeInOut: function() {
                    return s
                },
                easeOut: function() {
                    return c
                },
                inBack: function() {
                    return x
                },
                inCirc: function() {
                    return N
                },
                inCubic: function() {
                    return g
                },
                inElastic: function() {
                    return w
                },
                inExpo: function() {
                    return S
                },
                inOutBack: function() {
                    return M
                },
                inOutCirc: function() {
                    return V
                },
                inOutCubic: function() {
                    return b
                },
                inOutElastic: function() {
                    return k
                },
                inOutExpo: function() {
                    return L
                },
                inOutQuad: function() {
                    return p
                },
                inOutQuart: function() {
                    return T
                },
                inOutQuint: function() {
                    return _
                },
                inOutSine: function() {
                    return A
                },
                inQuad: function() {
                    return u
                },
                inQuart: function() {
                    return I
                },
                inQuint: function() {
                    return m
                },
                inSine: function() {
                    return R
                },
                outBack: function() {
                    return P
                },
                outBounce: function() {
                    return G
                },
                outCirc: function() {
                    return C
                },
                outCubic: function() {
                    return E
                },
                outElastic: function() {
                    return U
                },
                outExpo: function() {
                    return h
                },
                outQuad: function() {
                    return f
                },
                outQuart: function() {
                    return y
                },
                outQuint: function() {
                    return O
                },
                outSine: function() {
                    return v
                },
                swingFrom: function() {
                    return D
                },
                swingFromTo: function() {
                    return F
                },
                swingTo: function() {
                    return B
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let d = (n = a(1361)) && n.__esModule ? n : {
                    default: n
                },
                r = (0, d.default)(.25, .1, .25, 1),
                l = (0, d.default)(.42, 0, 1, 1),
                c = (0, d.default)(0, 0, .58, 1),
                s = (0, d.default)(.42, 0, .58, 1);

            function u(e) {
                return Math.pow(e, 2)
            }

            function f(e) {
                return -(Math.pow(e - 1, 2) - 1)
            }

            function p(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
            }

            function g(e) {
                return Math.pow(e, 3)
            }

            function E(e) {
                return Math.pow(e - 1, 3) + 1
            }

            function b(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
            }

            function I(e) {
                return Math.pow(e, 4)
            }

            function y(e) {
                return -(Math.pow(e - 1, 4) - 1)
            }

            function T(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
            }

            function m(e) {
                return Math.pow(e, 5)
            }

            function O(e) {
                return Math.pow(e - 1, 5) + 1
            }

            function _(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
            }

            function R(e) {
                return -Math.cos(Math.PI / 2 * e) + 1
            }

            function v(e) {
                return Math.sin(Math.PI / 2 * e)
            }

            function A(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            }

            function S(e) {
                return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
            }

            function h(e) {
                return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
            }

            function L(e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
            }

            function N(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }

            function C(e) {
                return Math.sqrt(1 - Math.pow(e - 1, 2))
            }

            function V(e) {
                return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }

            function G(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function x(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function P(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function M(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function w(e) {
                let t = 1.70158,
                    a = 0,
                    n = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / a)))
            }

            function U(e) {
                let t = 1.70158,
                    a = 0,
                    n = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin(2 * Math.PI * (e - t) / a) + 1)
            }

            function k(e) {
                let t = 1.70158,
                    a = 0,
                    n = 1;
                return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (a || (a = .3 * 1.5), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), e < 1) ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / a)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / a) * .5 + 1
            }

            function F(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function D(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function B(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function X(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function Y(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }
        },
        1799: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return E
                },
                createPluginInstance: function() {
                    return p
                },
                getPluginConfig: function() {
                    return c
                },
                getPluginDestination: function() {
                    return f
                },
                getPluginDuration: function() {
                    return u
                },
                getPluginOrigin: function() {
                    return s
                },
                isPluginType: function() {
                    return r
                },
                renderPlugin: function() {
                    return g
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = a(2662),
                d = a(3690);

            function r(e) {
                return d.pluginMethodMap.has(e)
            }
            let l = e => t => {
                    if (!o.IS_BROWSER_ENV) return () => null;
                    let a = d.pluginMethodMap.get(t);
                    if (!a) throw Error(`IX2 no plugin configured for: ${t}`);
                    let n = a[e];
                    if (!n) throw Error(`IX2 invalid plugin method: ${e}`);
                    return n
                },
                c = l("getPluginConfig"),
                s = l("getPluginOrigin"),
                u = l("getPluginDuration"),
                f = l("getPluginDestination"),
                p = l("createPluginInstance"),
                g = l("renderPlugin"),
                E = l("clearPlugin")
        },
        4124: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                cleanupHTMLElement: function() {
                    return eH
                },
                clearAllStyles: function() {
                    return eX
                },
                clearObjectCache: function() {
                    return eu
                },
                getActionListProgress: function() {
                    return e$
                },
                getAffectedElements: function() {
                    return em
                },
                getComputedStyle: function() {
                    return eO
                },
                getDestinationValues: function() {
                    return eN
                },
                getElementId: function() {
                    return eE
                },
                getInstanceId: function() {
                    return ep
                },
                getInstanceOrigin: function() {
                    return eA
                },
                getItemConfigByKey: function() {
                    return eL
                },
                getMaxDurationItemIndex: function() {
                    return eW
                },
                getNamespacedParameterId: function() {
                    return eZ
                },
                getRenderType: function() {
                    return eC
                },
                getStyleProp: function() {
                    return eV
                },
                mediaQueriesEqual: function() {
                    return e0
                },
                observeStore: function() {
                    return ey
                },
                reduceListToGroup: function() {
                    return eK
                },
                reifyState: function() {
                    return eb
                },
                renderHTMLElement: function() {
                    return eG
                },
                shallowEqual: function() {
                    return s.default
                },
                shouldAllowMediaQuery: function() {
                    return eJ
                },
                shouldNamespaceEventParameter: function() {
                    return eq
                },
                stringifyTarget: function() {
                    return e1
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = E(a(4075)),
                d = E(a(1455)),
                r = E(a(5720)),
                l = a(1185),
                c = a(7087),
                s = E(a(7164)),
                u = a(3767),
                f = a(380),
                p = a(1799),
                g = a(2662);

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                BACKGROUND: b,
                TRANSFORM: I,
                TRANSLATE_3D: y,
                SCALE_3D: T,
                ROTATE_X: m,
                ROTATE_Y: O,
                ROTATE_Z: _,
                SKEW: R,
                PRESERVE_3D: v,
                FLEX: A,
                OPACITY: S,
                FILTER: h,
                FONT_VARIATION_SETTINGS: L,
                WIDTH: N,
                HEIGHT: C,
                BACKGROUND_COLOR: V,
                BORDER_COLOR: G,
                COLOR: x,
                CHILDREN: P,
                IMMEDIATE_CHILDREN: M,
                SIBLINGS: w,
                PARENT: U,
                DISPLAY: k,
                WILL_CHANGE: F,
                AUTO: D,
                COMMA_DELIMITER: B,
                COLON_DELIMITER: X,
                BAR_DELIMITER: Y,
                RENDER_TRANSFORM: Q,
                RENDER_GENERAL: H,
                RENDER_STYLE: j,
                RENDER_PLUGIN: z
            } = c.IX2EngineConstants, {
                TRANSFORM_MOVE: W,
                TRANSFORM_SCALE: $,
                TRANSFORM_ROTATE: K,
                TRANSFORM_SKEW: q,
                STYLE_OPACITY: Z,
                STYLE_FILTER: J,
                STYLE_FONT_VARIATION: ee,
                STYLE_SIZE: et,
                STYLE_BACKGROUND_COLOR: ea,
                STYLE_BORDER: en,
                STYLE_TEXT_COLOR: ei,
                GENERAL_DISPLAY: eo,
                OBJECT_VALUE: ed
            } = c.ActionTypeConsts, er = e => e.trim(), el = Object.freeze({
                [ea]: V,
                [en]: G,
                [ei]: x
            }), ec = Object.freeze({
                [g.TRANSFORM_PREFIXED]: I,
                [V]: b,
                [S]: S,
                [h]: h,
                [N]: N,
                [C]: C,
                [L]: L
            }), es = new Map;

            function eu() {
                es.clear()
            }
            let ef = 1;

            function ep() {
                return "i" + ef++
            }
            let eg = 1;

            function eE(e, t) {
                for (let a in e) {
                    let n = e[a];
                    if (n && n.ref === t) return n.id
                }
                return "e" + eg++
            }

            function eb({
                events: e,
                actionLists: t,
                site: a
            } = {}) {
                let n = (0, d.default)(e, (e, t) => {
                        let {
                            eventTypeId: a
                        } = t;
                        return e[a] || (e[a] = {}), e[a][t.id] = t, e
                    }, {}),
                    i = a && a.mediaQueries,
                    o = [];
                return i ? o = i.map(e => e.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
                    ixData: {
                        events: e,
                        actionLists: t,
                        eventTypeMap: n,
                        mediaQueries: i,
                        mediaQueryKeys: o
                    }
                }
            }
            let eI = (e, t) => e === t;

            function ey({
                store: e,
                select: t,
                onChange: a,
                comparator: n = eI
            }) {
                let {
                    getState: i,
                    subscribe: o
                } = e, d = o(function() {
                    let o = t(i());
                    if (null == o) return void d();
                    n(o, r) || a(r = o, e)
                }), r = t(i());
                return d
            }

            function eT(e) {
                let t = typeof e;
                if ("string" === t) return {
                    id: e
                };
                if (null != e && "object" === t) {
                    let {
                        id: t,
                        objectId: a,
                        selector: n,
                        selectorGuids: i,
                        appliesTo: o,
                        useEventTarget: d
                    } = e;
                    return {
                        id: t,
                        objectId: a,
                        selector: n,
                        selectorGuids: i,
                        appliesTo: o,
                        useEventTarget: d
                    }
                }
                return {}
            }

            function em({
                config: e,
                event: t,
                eventTarget: a,
                elementRoot: n,
                elementApi: i
            }) {
                let o, d, r;
                if (!i) throw Error("IX2 missing elementApi");
                let {
                    targets: l
                } = e;
                if (Array.isArray(l) && l.length > 0) return l.reduce((e, o) => e.concat(em({
                    config: {
                        target: o
                    },
                    event: t,
                    eventTarget: a,
                    elementRoot: n,
                    elementApi: i
                })), []);
                let {
                    getValidDocument: s,
                    getQuerySelector: u,
                    queryDocument: f,
                    getChildElements: p,
                    getSiblingElements: E,
                    matchSelector: b,
                    elementContains: I,
                    isSiblingNode: y
                } = i, {
                    target: T
                } = e;
                if (!T) return [];
                let {
                    id: m,
                    objectId: O,
                    selector: _,
                    selectorGuids: R,
                    appliesTo: v,
                    useEventTarget: A
                } = eT(T);
                if (O) return [es.has(O) ? es.get(O) : es.set(O, {}).get(O)];
                if (v === c.EventAppliesTo.PAGE) {
                    let e = s(m);
                    return e ? [e] : []
                }
                let S = (t?.action?.config?.affectedElements ?? {})[m || _] || {},
                    h = !!(S.id || S.selector),
                    L = t && u(eT(t.target));
                if (h ? (o = S.limitAffectedElements, d = L, r = u(S)) : d = r = u({
                        id: m,
                        selector: _,
                        selectorGuids: R
                    }), t && A) {
                    let e = a && (r || !0 === A) ? [a] : f(L);
                    if (r) {
                        if (A === U) return f(r).filter(t => e.some(e => I(t, e)));
                        if (A === P) return f(r).filter(t => e.some(e => I(e, t)));
                        if (A === w) return f(r).filter(t => e.some(e => y(e, t)))
                    }
                    return e
                }
                return null == d || null == r ? [] : g.IS_BROWSER_ENV && n ? f(r).filter(e => n.contains(e)) : o === P ? f(d, r) : o === M ? p(f(d)).filter(b(r)) : o === w ? E(f(d)).filter(b(r)) : f(r)
            }

            function eO({
                element: e,
                actionItem: t
            }) {
                if (!g.IS_BROWSER_ENV) return {};
                let {
                    actionTypeId: a
                } = t;
                switch (a) {
                    case et:
                    case ea:
                    case en:
                    case ei:
                    case eo:
                        return window.getComputedStyle(e);
                    default:
                        return {}
                }
            }
            let e_ = /px/,
                eR = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eP[t.type]), e), e || {}),
                ev = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eM[t.type] || t.defaultValue || 0), e), e || {});

            function eA(e, t = {}, a = {}, n, i) {
                let {
                    getStyle: d
                } = i, {
                    actionTypeId: r
                } = n;
                if ((0, p.isPluginType)(r)) return (0, p.getPluginOrigin)(r)(t[r], n);
                switch (n.actionTypeId) {
                    case W:
                    case $:
                    case K:
                    case q:
                        return t[n.actionTypeId] || ex[n.actionTypeId];
                    case J:
                        return eR(t[n.actionTypeId], n.config.filters);
                    case ee:
                        return ev(t[n.actionTypeId], n.config.fontVariations);
                    case Z:
                        return {
                            value: (0, o.default)(parseFloat(d(e, S)), 1)
                        };
                    case et: {
                        let t, i = d(e, N),
                            r = d(e, C);
                        return {
                            widthValue: n.config.widthUnit === D ? e_.test(i) ? parseFloat(i) : parseFloat(a.width) : (0, o.default)(parseFloat(i), parseFloat(a.width)),
                            heightValue: n.config.heightUnit === D ? e_.test(r) ? parseFloat(r) : parseFloat(a.height) : (0, o.default)(parseFloat(r), parseFloat(a.height))
                        }
                    }
                    case ea:
                    case en:
                    case ei:
                        return function({
                            element: e,
                            actionTypeId: t,
                            computedStyle: a,
                            getStyle: n
                        }) {
                            let i = el[t],
                                d = n(e, i),
                                r = (function(e, t) {
                                    let a = e.exec(t);
                                    return a ? a[1] : ""
                                })(eF, ek.test(d) ? d : a[i]).split(B);
                            return {
                                rValue: (0, o.default)(parseInt(r[0], 10), 255),
                                gValue: (0, o.default)(parseInt(r[1], 10), 255),
                                bValue: (0, o.default)(parseInt(r[2], 10), 255),
                                aValue: (0, o.default)(parseFloat(r[3]), 1)
                            }
                        }({
                            element: e,
                            actionTypeId: n.actionTypeId,
                            computedStyle: a,
                            getStyle: d
                        });
                    case eo:
                        return {
                            value: (0, o.default)(d(e, k), a.display)
                        };
                    case ed:
                        return t[n.actionTypeId] || {
                            value: 0
                        };
                    default:
                        return
                }
            }
            let eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eh = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eL = (e, t, a) => {
                    if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(a, t);
                    switch (e) {
                        case J: {
                            let e = (0, r.default)(a.filters, ({
                                type: e
                            }) => e === t);
                            return e ? e.value : 0
                        }
                        case ee: {
                            let e = (0, r.default)(a.fontVariations, ({
                                type: e
                            }) => e === t);
                            return e ? e.value : 0
                        }
                        default:
                            return a[t]
                    }
                };

            function eN({
                element: e,
                actionItem: t,
                elementApi: a
            }) {
                if ((0, p.isPluginType)(t.actionTypeId)) return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
                switch (t.actionTypeId) {
                    case W:
                    case $:
                    case K:
                    case q: {
                        let {
                            xValue: e,
                            yValue: a,
                            zValue: n
                        } = t.config;
                        return {
                            xValue: e,
                            yValue: a,
                            zValue: n
                        }
                    }
                    case et: {
                        let {
                            getStyle: n,
                            setStyle: i,
                            getProperty: o
                        } = a, {
                            widthUnit: d,
                            heightUnit: r
                        } = t.config, {
                            widthValue: l,
                            heightValue: c
                        } = t.config;
                        if (!g.IS_BROWSER_ENV) return {
                            widthValue: l,
                            heightValue: c
                        };
                        if (d === D) {
                            let t = n(e, N);
                            i(e, N, ""), l = o(e, "offsetWidth"), i(e, N, t)
                        }
                        if (r === D) {
                            let t = n(e, C);
                            i(e, C, ""), c = o(e, "offsetHeight"), i(e, C, t)
                        }
                        return {
                            widthValue: l,
                            heightValue: c
                        }
                    }
                    case ea:
                    case en:
                    case ei: {
                        let {
                            rValue: n,
                            gValue: i,
                            bValue: o,
                            aValue: d,
                            globalSwatchId: r
                        } = t.config;
                        if (r && r.startsWith("--")) {
                            let {
                                getStyle: t
                            } = a, n = t(e, r), i = (0, f.normalizeColor)(n);
                            return {
                                rValue: i.red,
                                gValue: i.green,
                                bValue: i.blue,
                                aValue: i.alpha
                            }
                        }
                        return {
                            rValue: n,
                            gValue: i,
                            bValue: o,
                            aValue: d
                        }
                    }
                    case J:
                        return t.config.filters.reduce(eS, {});
                    case ee:
                        return t.config.fontVariations.reduce(eh, {});
                    default: {
                        let {
                            value: e
                        } = t.config;
                        return {
                            value: e
                        }
                    }
                }
            }

            function eC(e) {
                return /^TRANSFORM_/.test(e) ? Q : /^STYLE_/.test(e) ? j : /^GENERAL_/.test(e) ? H : /^PLUGIN_/.test(e) ? z : void 0
            }

            function eV(e, t) {
                return e === j ? t.replace("STYLE_", "").toLowerCase() : null
            }

            function eG(e, t, a, n, i, o, r, l, c) {
                switch (l) {
                    case Q:
                        var s = e,
                            u = t,
                            f = a,
                            E = i,
                            b = r;
                        let I = eU.map(e => {
                                let t = ex[e],
                                    {
                                        xValue: a = t.xValue,
                                        yValue: n = t.yValue,
                                        zValue: i = t.zValue,
                                        xUnit: o = "",
                                        yUnit: d = "",
                                        zUnit: r = ""
                                    } = u[e] || {};
                                switch (e) {
                                    case W:
                                        return `${y}(${a}${o}, ${n}${d}, ${i}${r})`;
                                    case $:
                                        return `${T}(${a}${o}, ${n}${d}, ${i}${r})`;
                                    case K:
                                        return `${m}(${a}${o}) ${O}(${n}${d}) ${_}(${i}${r})`;
                                    case q:
                                        return `${R}(${a}${o}, ${n}${d})`;
                                    default:
                                        return ""
                                }
                            }).join(" "),
                            {
                                setStyle: S
                            } = b;
                        eD(s, g.TRANSFORM_PREFIXED, b), S(s, g.TRANSFORM_PREFIXED, I),
                            function({
                                actionTypeId: e
                            }, {
                                xValue: t,
                                yValue: a,
                                zValue: n
                            }) {
                                return e === W && void 0 !== n || e === $ && void 0 !== n || e === K && (void 0 !== t || void 0 !== a)
                            }(E, f) && S(s, g.TRANSFORM_STYLE_PREFIXED, v);
                        return;
                    case j:
                        return function(e, t, a, n, i, o) {
                            let {
                                setStyle: r
                            } = o;
                            switch (n.actionTypeId) {
                                case et: {
                                    let {
                                        widthUnit: t = "",
                                        heightUnit: i = ""
                                    } = n.config, {
                                        widthValue: d,
                                        heightValue: l
                                    } = a;
                                    void 0 !== d && (t === D && (t = "px"), eD(e, N, o), r(e, N, d + t)), void 0 !== l && (i === D && (i = "px"), eD(e, C, o), r(e, C, l + i));
                                    break
                                }
                                case J:
                                    var l = n.config;
                                    let c = (0, d.default)(a, (e, t, a) => `${e} ${a}(${t}${ew(a,l)})`, ""),
                                        {
                                            setStyle: s
                                        } = o;
                                    eD(e, h, o), s(e, h, c);
                                    break;
                                case ee:
                                    n.config;
                                    let u = (0, d.default)(a, (e, t, a) => (e.push(`"${a}" ${t}`), e), []).join(", "),
                                        {
                                            setStyle: f
                                        } = o;
                                    eD(e, L, o), f(e, L, u);
                                    break;
                                case ea:
                                case en:
                                case ei: {
                                    let t = el[n.actionTypeId],
                                        i = Math.round(a.rValue),
                                        d = Math.round(a.gValue),
                                        l = Math.round(a.bValue),
                                        c = a.aValue;
                                    eD(e, t, o), r(e, t, c >= 1 ? `rgb(${i},${d},${l})` : `rgba(${i},${d},${l},${c})`);
                                    break
                                }
                                default: {
                                    let {
                                        unit: t = ""
                                    } = n.config;
                                    eD(e, i, o), r(e, i, a.value + t)
                                }
                            }
                        }(e, 0, a, i, o, r);
                    case H:
                        var V = e,
                            G = i,
                            x = r;
                        let {
                            setStyle: P
                        } = x;
                        if (G.actionTypeId === eo) {
                            let {
                                value: e
                            } = G.config;
                            P(V, k, e === A && g.IS_BROWSER_ENV ? g.FLEX_PREFIXED : e);
                        }
                        return;
                    case z: {
                        let {
                            actionTypeId: e
                        } = i;
                        if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(c, t, i)
                    }
                }
            }
            let ex = {
                    [W]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [$]: Object.freeze({
                        xValue: 1,
                        yValue: 1,
                        zValue: 1
                    }),
                    [K]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [q]: Object.freeze({
                        xValue: 0,
                        yValue: 0
                    })
                },
                eP = Object.freeze({
                    blur: 0,
                    "hue-rotate": 0,
                    invert: 0,
                    grayscale: 0,
                    saturate: 100,
                    sepia: 0,
                    contrast: 100,
                    brightness: 100
                }),
                eM = Object.freeze({
                    wght: 0,
                    opsz: 0,
                    wdth: 0,
                    slnt: 0
                }),
                ew = (e, t) => {
                    let a = (0, r.default)(t.filters, ({
                        type: t
                    }) => t === e);
                    if (a && a.unit) return a.unit;
                    switch (e) {
                        case "blur":
                            return "px";
                        case "hue-rotate":
                            return "deg";
                        default:
                            return "%"
                    }
                },
                eU = Object.keys(ex),
                ek = /^rgb/,
                eF = RegExp("rgba?\\(([^)]+)\\)");

            function eD(e, t, a) {
                if (!g.IS_BROWSER_ENV) return;
                let n = ec[t];
                if (!n) return;
                let {
                    getStyle: i,
                    setStyle: o
                } = a, d = i(e, F);
                if (!d) return void o(e, F, n);
                let r = d.split(B).map(er); - 1 === r.indexOf(n) && o(e, F, r.concat(n).join(B))
            }

            function eB(e, t, a) {
                if (!g.IS_BROWSER_ENV) return;
                let n = ec[t];
                if (!n) return;
                let {
                    getStyle: i,
                    setStyle: o
                } = a, d = i(e, F);
                d && -1 !== d.indexOf(n) && o(e, F, d.split(B).map(er).filter(e => e !== n).join(B))
            }

            function eX({
                store: e,
                elementApi: t
            }) {
                let {
                    ixData: a
                } = e.getState(), {
                    events: n = {},
                    actionLists: i = {}
                } = a;
                Object.keys(n).forEach(e => {
                    let a = n[e],
                        {
                            config: o
                        } = a.action,
                        {
                            actionListId: d
                        } = o,
                        r = i[d];
                    r && eY({
                        actionList: r,
                        event: a,
                        elementApi: t
                    })
                }), Object.keys(i).forEach(e => {
                    eY({
                        actionList: i[e],
                        elementApi: t
                    })
                })
            }

            function eY({
                actionList: e = {},
                event: t,
                elementApi: a
            }) {
                let {
                    actionItemGroups: n,
                    continuousParameterGroups: i
                } = e;
                n && n.forEach(e => {
                    eQ({
                        actionGroup: e,
                        event: t,
                        elementApi: a
                    })
                }), i && i.forEach(e => {
                    let {
                        continuousActionGroups: n
                    } = e;
                    n.forEach(e => {
                        eQ({
                            actionGroup: e,
                            event: t,
                            elementApi: a
                        })
                    })
                })
            }

            function eQ({
                actionGroup: e,
                event: t,
                elementApi: a
            }) {
                let {
                    actionItems: n
                } = e;
                n.forEach(e => {
                    let n, {
                        actionTypeId: i,
                        config: o
                    } = e;
                    n = (0, p.isPluginType)(i) ? t => (0, p.clearPlugin)(i)(t, e) : ej({
                        effect: ez,
                        actionTypeId: i,
                        elementApi: a
                    }), em({
                        config: o,
                        event: t,
                        elementApi: a
                    }).forEach(n)
                })
            }

            function eH(e, t, a) {
                let {
                    setStyle: n,
                    getStyle: i
                } = a, {
                    actionTypeId: o
                } = t;
                if (o === et) {
                    let {
                        config: a
                    } = t;
                    a.widthUnit === D && n(e, N, ""), a.heightUnit === D && n(e, C, "")
                }
                i(e, F) && ej({
                    effect: eB,
                    actionTypeId: o,
                    elementApi: a
                })(e)
            }
            let ej = ({
                effect: e,
                actionTypeId: t,
                elementApi: a
            }) => n => {
                switch (t) {
                    case W:
                    case $:
                    case K:
                    case q:
                        e(n, g.TRANSFORM_PREFIXED, a);
                        break;
                    case J:
                        e(n, h, a);
                        break;
                    case ee:
                        e(n, L, a);
                        break;
                    case Z:
                        e(n, S, a);
                        break;
                    case et:
                        e(n, N, a), e(n, C, a);
                        break;
                    case ea:
                    case en:
                    case ei:
                        e(n, el[t], a);
                        break;
                    case eo:
                        e(n, k, a)
                }
            };

            function ez(e, t, a) {
                let {
                    setStyle: n
                } = a;
                eB(e, t, a), n(e, t, ""), t === g.TRANSFORM_PREFIXED && n(e, g.TRANSFORM_STYLE_PREFIXED, "")
            }

            function eW(e) {
                let t = 0,
                    a = 0;
                return e.forEach((e, n) => {
                    let {
                        config: i
                    } = e, o = i.delay + i.duration;
                    o >= t && (t = o, a = n)
                }), a
            }

            function e$(e, t) {
                let {
                    actionItemGroups: a,
                    useFirstGroupAsInitialState: n
                } = e, {
                    actionItem: i,
                    verboseTimeElapsed: o = 0
                } = t, d = 0, r = 0;
                return a.forEach((e, t) => {
                    if (n && 0 === t) return;
                    let {
                        actionItems: a
                    } = e, l = a[eW(a)], {
                        config: c,
                        actionTypeId: s
                    } = l;
                    i.id === l.id && (r = d + o);
                    let u = eC(s) === H ? 0 : c.duration;
                    d += c.delay + u
                }), d > 0 ? (0, u.optimizeFloat)(r / d) : 0
            }

            function eK({
                actionList: e,
                actionItemId: t,
                rawData: a
            }) {
                let {
                    actionItemGroups: n,
                    continuousParameterGroups: i
                } = e, o = [], d = e => (o.push((0, l.mergeIn)(e, ["config"], {
                    delay: 0,
                    duration: 0
                })), e.id === t);
                return n && n.some(({
                    actionItems: e
                }) => e.some(d)), i && i.some(e => {
                    let {
                        continuousActionGroups: t
                    } = e;
                    return t.some(({
                        actionItems: e
                    }) => e.some(d))
                }), (0, l.setIn)(a, ["actionLists"], {
                    [e.id]: {
                        id: e.id,
                        actionItemGroups: [{
                            actionItems: o
                        }]
                    }
                })
            }

            function eq(e, {
                basedOn: t
            }) {
                return e === c.EventTypeConsts.SCROLLING_IN_VIEW && (t === c.EventBasedOn.ELEMENT || null == t) || e === c.EventTypeConsts.MOUSE_MOVE && t === c.EventBasedOn.ELEMENT
            }

            function eZ(e, t) {
                return e + X + t
            }

            function eJ(e, t) {
                return null == t || -1 !== e.indexOf(t)
            }

            function e0(e, t) {
                return (0, s.default)(e && e.sort(), t && t.sort())
            }

            function e1(e) {
                if ("string" == typeof e) return e;
                if (e.pluginElement && e.objectId) return e.pluginElement + Y + e.objectId;
                if (e.objectId) return e.objectId;
                let {
                    id: t = "",
                    selector: a = "",
                    useEventTarget: n = ""
                } = e;
                return t + Y + a + Y + n
            }
        },
        7164: function(e, t) {
            "use strict";

            function a(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = function(e, t) {
                if (a(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                let n = Object.keys(e),
                    i = Object.keys(t);
                if (n.length !== i.length) return !1;
                for (let i = 0; i < n.length; i++)
                    if (!Object.hasOwn(t, n[i]) || !a(e[n[i]], t[n[i]])) return !1;
                return !0
            }
        },
        5861: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                createElementState: function() {
                    return R
                },
                ixElements: function() {
                    return _
                },
                mergeActionState: function() {
                    return v
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = a(1185),
                d = a(7087),
                {
                    HTML_ELEMENT: r,
                    PLAIN_OBJECT: l,
                    ABSTRACT_NODE: c,
                    CONFIG_X_VALUE: s,
                    CONFIG_Y_VALUE: u,
                    CONFIG_Z_VALUE: f,
                    CONFIG_VALUE: p,
                    CONFIG_X_UNIT: g,
                    CONFIG_Y_UNIT: E,
                    CONFIG_Z_UNIT: b,
                    CONFIG_UNIT: I
                } = d.IX2EngineConstants,
                {
                    IX2_SESSION_STOPPED: y,
                    IX2_INSTANCE_ADDED: T,
                    IX2_ELEMENT_STATE_CHANGED: m
                } = d.IX2EngineActionTypes,
                O = {},
                _ = (e = O, t = {}) => {
                    switch (t.type) {
                        case y:
                            return O;
                        case T: {
                            let {
                                elementId: a,
                                element: n,
                                origin: i,
                                actionItem: d,
                                refType: r
                            } = t.payload, {
                                actionTypeId: l
                            } = d, c = e;
                            return (0, o.getIn)(c, [a, n]) !== n && (c = R(c, n, r, a, d)), v(c, a, l, i, d)
                        }
                        case m: {
                            let {
                                elementId: a,
                                actionTypeId: n,
                                current: i,
                                actionItem: o
                            } = t.payload;
                            return v(e, a, n, i, o)
                        }
                        default:
                            return e
                    }
                };

            function R(e, t, a, n, i) {
                let d = a === l ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
                return (0, o.mergeIn)(e, [n], {
                    id: n,
                    ref: t,
                    refId: d,
                    refType: a
                })
            }

            function v(e, t, a, n, i) {
                let d = function(e) {
                    let {
                        config: t
                    } = e;
                    return A.reduce((e, a) => {
                        let n = a[0],
                            i = a[1],
                            o = t[n],
                            d = t[i];
                        return null != o && null != d && (e[i] = d), e
                    }, {})
                }(i);
                return (0, o.mergeIn)(e, [t, "refState", a], n, d)
            }
            let A = [
                [s, g],
                [u, E],
                [f, b],
                [p, I]
            ]
        },
        7101: function() {
            Webflow.require("ix2").init({
                events: {
                    "e-7": {
                        id: "e-7",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-8"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".nav-link",
                            originalId: "750a3cb7-d3a4-a19e-f215-351517ad4cbd",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".nav-link",
                            originalId: "750a3cb7-d3a4-a19e-f215-351517ad4cbd",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197318e29c1
                    },
                    "e-8": {
                        id: "e-8",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-8",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-7"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".nav-link",
                            originalId: "750a3cb7-d3a4-a19e-f215-351517ad4cbd",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".nav-link",
                            originalId: "750a3cb7-d3a4-a19e-f215-351517ad4cbd",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197318e29c2
                    },
                    "e-21": {
                        id: "e-21",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-22"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".navbar_linkblock",
                            originalId: "1217acf3-1141-c94c-a8bf-3ac3feb0069c",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".navbar_linkblock",
                            originalId: "1217acf3-1141-c94c-a8bf-3ac3feb0069c",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1973b2dcac5
                    },
                    "e-22": {
                        id: "e-22",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-103",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-21"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".navbar_linkblock",
                            originalId: "1217acf3-1141-c94c-a8bf-3ac3feb0069c",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".navbar_linkblock",
                            originalId: "1217acf3-1141-c94c-a8bf-3ac3feb0069c",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1973b2dcac6
                    },
                    "e-29": {
                        id: "e-29",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-15",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-30"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683da57aff9b80e027fa7941|92feee36-1c07-e323-37f8-a2e7c9dcc848",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683da57aff9b80e027fa7941|92feee36-1c07-e323-37f8-a2e7c9dcc848",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1973fca715c
                    },
                    "e-30": {
                        id: "e-30",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-16",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-29"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683da57aff9b80e027fa7941|92feee36-1c07-e323-37f8-a2e7c9dcc848",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683da57aff9b80e027fa7941|92feee36-1c07-e323-37f8-a2e7c9dcc848",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1973fca715c
                    },
                    "e-31": {
                        id: "e-31",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-17",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-32"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683f1a6ba5beb5f07ff8eaa9|b81f0bc9-e78d-cfd0-99b2-eca974fd89aa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683f1a6ba5beb5f07ff8eaa9|b81f0bc9-e78d-cfd0-99b2-eca974fd89aa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 50,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197405a4a91
                    },
                    "e-32": {
                        id: "e-32",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-31"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683f1a6ba5beb5f07ff8eaa9|b81f0bc9-e78d-cfd0-99b2-eca974fd89aa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683f1a6ba5beb5f07ff8eaa9|b81f0bc9-e78d-cfd0-99b2-eca974fd89aa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 50,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197405a4a92
                    },
                    "e-33": {
                        id: "e-33",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-19",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-34"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683f1a6ba5beb5f07ff8eaa9|6dac5184-4af9-a653-0c99-6405a5747186",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683f1a6ba5beb5f07ff8eaa9|6dac5184-4af9-a653-0c99-6405a5747186",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 50,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197405fbbc2
                    },
                    "e-34": {
                        id: "e-34",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-20",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-33"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683f1a6ba5beb5f07ff8eaa9|6dac5184-4af9-a653-0c99-6405a5747186",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683f1a6ba5beb5f07ff8eaa9|6dac5184-4af9-a653-0c99-6405a5747186",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 50,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197405fbbc2
                    },
                    "e-37": {
                        id: "e-37",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-23",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-38"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683f1a6ba5beb5f07ff8eaa9|c3f084d6-95bc-1495-0f44-deb6a35ba7d7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683f1a6ba5beb5f07ff8eaa9|c3f084d6-95bc-1495-0f44-deb6a35ba7d7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 50,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974066fde3
                    },
                    "e-38": {
                        id: "e-38",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-24",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-37"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683f1a6ba5beb5f07ff8eaa9|c3f084d6-95bc-1495-0f44-deb6a35ba7d7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683f1a6ba5beb5f07ff8eaa9|c3f084d6-95bc-1495-0f44-deb6a35ba7d7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 50,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1974066fde4
                    },
                    "e-41": {
                        id: "e-41",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-26",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-42"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683f1a6ba5beb5f07ff8eaa9|3f216c70-2f2a-82d8-f262-72aab426ccf5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683f1a6ba5beb5f07ff8eaa9|3f216c70-2f2a-82d8-f262-72aab426ccf5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19745920c28
                    },
                    "e-43": {
                        id: "e-43",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-33",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683da57aff9b80e027fa7941",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683da57aff9b80e027fa7941",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-33-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 95,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-33-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 95,
                            restingState: 50
                        }],
                        createdOn: 0x197554ddaa4
                    },
                    "e-44": {
                        id: "e-44",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-29",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-45"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "94c7c86a-e22c-9e6b-54ee-884a1aa16e82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "94c7c86a-e22c-9e6b-54ee-884a1aa16e82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1975961fa0a
                    },
                    "e-45": {
                        id: "e-45",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-30",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-44"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "94c7c86a-e22c-9e6b-54ee-884a1aa16e82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "94c7c86a-e22c-9e6b-54ee-884a1aa16e82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1975961fa0b
                    },
                    "e-46": {
                        id: "e-46",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-31",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-47"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "211e8214-3e0f-9e4d-8769-988e093917bd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "211e8214-3e0f-9e4d-8769-988e093917bd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197599d725e
                    },
                    "e-47": {
                        id: "e-47",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-32",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-46"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "211e8214-3e0f-9e4d-8769-988e093917bd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "211e8214-3e0f-9e4d-8769-988e093917bd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197599d725f
                    },
                    "e-48": {
                        id: "e-48",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-49"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683f1a6ba5beb5f07ff8eaa9|5da16190-899b-df71-e06a-b2b6ad6869fe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683f1a6ba5beb5f07ff8eaa9|5da16190-899b-df71-e06a-b2b6ad6869fe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1975f23a726
                    },
                    "e-50": {
                        id: "e-50",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-34",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-51"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683f1a6ba5beb5f07ff8eaa9|7995fd5c-ac43-8f28-fcf0-ca080a1140e5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683f1a6ba5beb5f07ff8eaa9|7995fd5c-ac43-8f28-fcf0-ca080a1140e5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 50,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1975f29e81f
                    },
                    "e-51": {
                        id: "e-51",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-50"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683f1a6ba5beb5f07ff8eaa9|7995fd5c-ac43-8f28-fcf0-ca080a1140e5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683f1a6ba5beb5f07ff8eaa9|7995fd5c-ac43-8f28-fcf0-ca080a1140e5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 50,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1975f29e81f
                    },
                    "e-52": {
                        id: "e-52",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-36",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-53"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "01977d20-ebf6-385a-197b-a215f68a5f5b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "01977d20-ebf6-385a-197b-a215f68a5f5b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19762edf9e5
                    },
                    "e-53": {
                        id: "e-53",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-37",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-52"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "01977d20-ebf6-385a-197b-a215f68a5f5b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "01977d20-ebf6-385a-197b-a215f68a5f5b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19762edf9e6
                    },
                    "e-54": {
                        id: "e-54",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-25",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-55"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "683f1a6ba5beb5f07ff8eaa9|0c52b466-9e02-151b-e836-517f60a6e391",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "683f1a6ba5beb5f07ff8eaa9|0c52b466-9e02-151b-e836-517f60a6e391",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 50,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197630fb18a
                    },
                    "e-69": {
                        id: "e-69",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-50",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-70"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "1b8d656a-0d92-6902-e5d8-a618ae95ea1d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "1b8d656a-0d92-6902-e5d8-a618ae95ea1d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197692a2947
                    },
                    "e-71": {
                        id: "e-71",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-51",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-72"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "1b8d656a-0d92-6902-e5d8-a618ae95ea20",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "1b8d656a-0d92-6902-e5d8-a618ae95ea20",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197692ffdaa
                    },
                    "e-73": {
                        id: "e-73",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-52",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-74"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "1b8d656a-0d92-6902-e5d8-a618ae95ea23",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "1b8d656a-0d92-6902-e5d8-a618ae95ea23",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1976931f704
                    },
                    "e-81": {
                        id: "e-81",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-45",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "684ffa970912d45c16c53530",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "684ffa970912d45c16c53530",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-45-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197786ae427
                    },
                    "e-82": {
                        id: "e-82",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-46",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "684ffa970912d45c16c53530",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "684ffa970912d45c16c53530",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-46-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197786ae427
                    },
                    "e-83": {
                        id: "e-83",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-47",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-84"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "684ffa970912d45c16c53530|cc8c5c29-9aa5-b3d9-7ecd-670476fe3c27",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "684ffa970912d45c16c53530|cc8c5c29-9aa5-b3d9-7ecd-670476fe3c27",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 50,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197786ae427
                    },
                    "e-84": {
                        id: "e-84",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-48",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-83"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "684ffa970912d45c16c53530|cc8c5c29-9aa5-b3d9-7ecd-670476fe3c27",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "684ffa970912d45c16c53530|cc8c5c29-9aa5-b3d9-7ecd-670476fe3c27",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 50,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197786ae427
                    },
                    "e-85": {
                        id: "e-85",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-44",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "684ffa970912d45c16c53530",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "684ffa970912d45c16c53530",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-44-p",
                            smoothing: 100,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197786ae427
                    },
                    "e-87": {
                        id: "e-87",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-49",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-86"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "684ffa970912d45c16c53530",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "684ffa970912d45c16c53530",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197786ae427
                    },
                    "e-88": {
                        id: "e-88",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-25",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-89"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "684ffa970912d45c16c53530|f0c48a83-9d95-3ce4-b4d1-77c36ff238d4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "684ffa970912d45c16c53530|f0c48a83-9d95-3ce4-b4d1-77c36ff238d4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 50,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197786ae427
                    },
                    "e-96": {
                        id: "e-96",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-56",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-97"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "684ffa970912d45c16c53530|2bef3c2d-b152-86ad-2f4a-c4160a732ce6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "684ffa970912d45c16c53530|2bef3c2d-b152-86ad-2f4a-c4160a732ce6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197790f528b
                    },
                    "e-98": {
                        id: "e-98",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-55",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-99"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "684ffa970912d45c16c53530|2bef3c2d-b152-86ad-2f4a-c4160a732ce9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "684ffa970912d45c16c53530|2bef3c2d-b152-86ad-2f4a-c4160a732ce9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197790f528b
                    },
                    "e-100": {
                        id: "e-100",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-45",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685026b2c40cd7fd6b4a2293",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685026b2c40cd7fd6b4a2293",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-45-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19779172b43
                    },
                    "e-101": {
                        id: "e-101",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-46",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685026b2c40cd7fd6b4a2293",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685026b2c40cd7fd6b4a2293",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-46-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19779172b43
                    },
                    "e-102": {
                        id: "e-102",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-47",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-103"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685026b2c40cd7fd6b4a2293|cc8c5c29-9aa5-b3d9-7ecd-670476fe3c27",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685026b2c40cd7fd6b4a2293|cc8c5c29-9aa5-b3d9-7ecd-670476fe3c27",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 50,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19779172b43
                    },
                    "e-103": {
                        id: "e-103",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-48",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-102"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685026b2c40cd7fd6b4a2293|cc8c5c29-9aa5-b3d9-7ecd-670476fe3c27",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685026b2c40cd7fd6b4a2293|cc8c5c29-9aa5-b3d9-7ecd-670476fe3c27",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 50,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19779172b43
                    },
                    "e-104": {
                        id: "e-104",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-44",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685026b2c40cd7fd6b4a2293",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685026b2c40cd7fd6b4a2293",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-44-p",
                            smoothing: 100,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19779172b43
                    },
                    "e-106": {
                        id: "e-106",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-49",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-105"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685026b2c40cd7fd6b4a2293",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685026b2c40cd7fd6b4a2293",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19779172b43
                    },
                    "e-107": {
                        id: "e-107",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-25",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-108"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685026b2c40cd7fd6b4a2293|f0c48a83-9d95-3ce4-b4d1-77c36ff238d4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685026b2c40cd7fd6b4a2293|f0c48a83-9d95-3ce4-b4d1-77c36ff238d4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 50,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19779172b43
                    },
                    "e-109": {
                        id: "e-109",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-60",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685026b2c40cd7fd6b4a2293|2891d8a8-e3fb-a8f0-e31e-f63ba2285537",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685026b2c40cd7fd6b4a2293|2891d8a8-e3fb-a8f0-e31e-f63ba2285537",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-60-p",
                            smoothing: 95,
                            startsEntering: !1,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1977d87ebd7
                    },
                    "e-110": {
                        id: "e-110",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-45",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6854192ba065fb68cd46fd5a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6854192ba065fb68cd46fd5a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-45-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19788825436
                    },
                    "e-111": {
                        id: "e-111",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-46",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6854192ba065fb68cd46fd5a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6854192ba065fb68cd46fd5a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-46-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19788825436
                    },
                    "e-114": {
                        id: "e-114",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-44",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6854192ba065fb68cd46fd5a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6854192ba065fb68cd46fd5a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-44-p",
                            smoothing: 100,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19788825436
                    },
                    "e-116": {
                        id: "e-116",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-49",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-115"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6854192ba065fb68cd46fd5a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6854192ba065fb68cd46fd5a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19788825436
                    },
                    "e-119": {
                        id: "e-119",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-60",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6854192ba065fb68cd46fd5a|2891d8a8-e3fb-a8f0-e31e-f63ba2285537",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6854192ba065fb68cd46fd5a|2891d8a8-e3fb-a8f0-e31e-f63ba2285537",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-60-p",
                            smoothing: 95,
                            startsEntering: !1,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19788825436
                    },
                    "e-122": {
                        id: "e-122",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-33",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6859230397e7b879102e030f",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6859230397e7b879102e030f",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-33-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 95,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-33-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 95,
                            restingState: 50
                        }],
                        createdOn: 0x1979c30c7b8
                    },
                    "e-123": {
                        id: "e-123",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-15",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-124"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68595578d4f2df76fc4e6eb8|92feee36-1c07-e323-37f8-a2e7c9dcc848",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68595578d4f2df76fc4e6eb8|92feee36-1c07-e323-37f8-a2e7c9dcc848",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1979cf5e172
                    },
                    "e-124": {
                        id: "e-124",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-16",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-123"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68595578d4f2df76fc4e6eb8|92feee36-1c07-e323-37f8-a2e7c9dcc848",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68595578d4f2df76fc4e6eb8|92feee36-1c07-e323-37f8-a2e7c9dcc848",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1979cf5e172
                    },
                    "e-125": {
                        id: "e-125",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-33",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68595578d4f2df76fc4e6eb8",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68595578d4f2df76fc4e6eb8",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-33-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 95,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-33-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 95,
                            restingState: 50
                        }],
                        createdOn: 0x1979cf5e172
                    },
                    "e-126": {
                        id: "e-126",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-15",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-127"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a74b3b6c161578653fd4e|92feee36-1c07-e323-37f8-a2e7c9dcc848",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685a74b3b6c161578653fd4e|92feee36-1c07-e323-37f8-a2e7c9dcc848",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197a157f2b7
                    },
                    "e-127": {
                        id: "e-127",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-16",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-126"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a74b3b6c161578653fd4e|92feee36-1c07-e323-37f8-a2e7c9dcc848",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685a74b3b6c161578653fd4e|92feee36-1c07-e323-37f8-a2e7c9dcc848",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197a157f2b7
                    },
                    "e-128": {
                        id: "e-128",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-33",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685a74b3b6c161578653fd4e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685a74b3b6c161578653fd4e",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-33-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 95,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-33-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 95,
                            restingState: 50
                        }],
                        createdOn: 0x197a157f2b7
                    },
                    "e-129": {
                        id: "e-129",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-63",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-130"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6854192ba065fb68cd46fd5a|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6854192ba065fb68cd46fd5a|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197a1ba60f8
                    },
                    "e-130": {
                        id: "e-130",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-64",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-129"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6854192ba065fb68cd46fd5a|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6854192ba065fb68cd46fd5a|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197a1ba60f9
                    },
                    "e-131": {
                        id: "e-131",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-65",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-132"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".d_s_image_holder",
                            originalId: "6854192ba065fb68cd46fd5a|f3bef3b9-d44b-3edd-4fe3-262ab3c0efca",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".d_s_image_holder",
                            originalId: "6854192ba065fb68cd46fd5a|f3bef3b9-d44b-3edd-4fe3-262ab3c0efca",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197a1cfe24f
                    },
                    "e-132": {
                        id: "e-132",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-131"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".d_s_image_holder",
                            originalId: "6854192ba065fb68cd46fd5a|f3bef3b9-d44b-3edd-4fe3-262ab3c0efca",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".d_s_image_holder",
                            originalId: "6854192ba065fb68cd46fd5a|f3bef3b9-d44b-3edd-4fe3-262ab3c0efca",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197a1cfe250
                    },
                    "e-133": {
                        id: "e-133",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-134"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".ds_image_holder_2",
                            originalId: "6854192ba065fb68cd46fd5a|442c461d-8469-e43c-0060-48c296d4cc51",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".ds_image_holder_2",
                            originalId: "6854192ba065fb68cd46fd5a|442c461d-8469-e43c-0060-48c296d4cc51",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197a1d2cc70
                    },
                    "e-134": {
                        id: "e-134",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-133"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".ds_image_holder_2",
                            originalId: "6854192ba065fb68cd46fd5a|442c461d-8469-e43c-0060-48c296d4cc51",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".ds_image_holder_2",
                            originalId: "6854192ba065fb68cd46fd5a|442c461d-8469-e43c-0060-48c296d4cc51",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197a1d2cc71
                    },
                    "e-135": {
                        id: "e-135",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-45",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685bfe55e0163fde9192c02b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685bfe55e0163fde9192c02b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-45-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197a7597f58
                    },
                    "e-136": {
                        id: "e-136",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-46",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685bfe55e0163fde9192c02b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685bfe55e0163fde9192c02b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-46-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197a7597f58
                    },
                    "e-137": {
                        id: "e-137",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-44",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685bfe55e0163fde9192c02b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685bfe55e0163fde9192c02b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-44-p",
                            smoothing: 100,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197a7597f58
                    },
                    "e-139": {
                        id: "e-139",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-49",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-138"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685bfe55e0163fde9192c02b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685bfe55e0163fde9192c02b",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197a7597f58
                    },
                    "e-141": {
                        id: "e-141",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-63",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-142"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685bfe55e0163fde9192c02b|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685bfe55e0163fde9192c02b|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197a7597f58
                    },
                    "e-142": {
                        id: "e-142",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-64",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-141"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "685bfe55e0163fde9192c02b|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "685bfe55e0163fde9192c02b|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197a7597f58
                    },
                    "e-143": {
                        id: "e-143",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-144"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6859230397e7b879102e030f|c5bf67a4-e031-973e-f233-2d826eb58a84",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6859230397e7b879102e030f|c5bf67a4-e031-973e-f233-2d826eb58a84",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197a83c9a91
                    },
                    "e-144": {
                        id: "e-144",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-143"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6859230397e7b879102e030f|c5bf67a4-e031-973e-f233-2d826eb58a84",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6859230397e7b879102e030f|c5bf67a4-e031-973e-f233-2d826eb58a84",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197a83c9a91
                    },
                    "e-145": {
                        id: "e-145",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-71",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-146"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".full_width_background_section",
                            originalId: "685bfe55e0163fde9192c02b|7262aee0-0296-4909-5d7b-5f6f3f211338",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".full_width_background_section",
                            originalId: "685bfe55e0163fde9192c02b|7262aee0-0296-4909-5d7b-5f6f3f211338",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197ac3ea143
                    },
                    "e-147": {
                        id: "e-147",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-72",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-148"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6854192ba065fb68cd46fd5a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6854192ba065fb68cd46fd5a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c65ab34f
                    },
                    "e-149": {
                        id: "e-149",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-73",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-150"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6859230397e7b879102e030f|d14cb78f-3fd1-1264-ef55-30dc97cd16ec",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6859230397e7b879102e030f|d14cb78f-3fd1-1264-ef55-30dc97cd16ec",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197caf67333
                    },
                    "e-151": {
                        id: "e-151",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-80",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-152"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6859230397e7b879102e030f|d14cb78f-3fd1-1264-ef55-30dc97cd16ef",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6859230397e7b879102e030f|d14cb78f-3fd1-1264-ef55-30dc97cd16ef",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197caf67333
                    },
                    "e-153": {
                        id: "e-153",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-75",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-154"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6859230397e7b879102e030f|d14cb78f-3fd1-1264-ef55-30dc97cd16f2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6859230397e7b879102e030f|d14cb78f-3fd1-1264-ef55-30dc97cd16f2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197caf67333
                    },
                    "e-155": {
                        id: "e-155",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-76",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-156"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".case_image",
                            originalId: "6859230397e7b879102e030f|f341bc91-95ed-f28d-ddfc-580c9f801a51",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".case_image",
                            originalId: "6859230397e7b879102e030f|f341bc91-95ed-f28d-ddfc-580c9f801a51",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197cb885b43
                    },
                    "e-156": {
                        id: "e-156",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-77",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-155"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".case_image",
                            originalId: "6859230397e7b879102e030f|f341bc91-95ed-f28d-ddfc-580c9f801a51",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".case_image",
                            originalId: "6859230397e7b879102e030f|f341bc91-95ed-f28d-ddfc-580c9f801a51",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197cb885b45
                    },
                    "e-157": {
                        id: "e-157",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-78",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-158"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6859230397e7b879102e030f|18bbabed-47ae-8cd3-7fce-e00a13f9793a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6859230397e7b879102e030f|18bbabed-47ae-8cd3-7fce-e00a13f9793a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197cbca786d
                    },
                    "e-158": {
                        id: "e-158",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-79",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-157"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6859230397e7b879102e030f|18bbabed-47ae-8cd3-7fce-e00a13f9793a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6859230397e7b879102e030f|18bbabed-47ae-8cd3-7fce-e00a13f9793a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197cbca786d
                    },
                    "e-159": {
                        id: "e-159",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-160"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "750a3cb7-d3a4-a19e-f215-351517ad4cb9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "750a3cb7-d3a4-a19e-f215-351517ad4cb9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197d0159b5a
                    },
                    "e-160": {
                        id: "e-160",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-10",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-159"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "750a3cb7-d3a4-a19e-f215-351517ad4cb9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "750a3cb7-d3a4-a19e-f215-351517ad4cb9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197d0159b5c
                    },
                    "e-161": {
                        id: "e-161",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-45",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68694a3edde967853f185e04",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68694a3edde967853f185e04",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-45-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197db4a0701
                    },
                    "e-162": {
                        id: "e-162",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-46",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68694a3edde967853f185e04",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68694a3edde967853f185e04",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-46-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197db4a0701
                    },
                    "e-163": {
                        id: "e-163",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-44",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68694a3edde967853f185e04",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68694a3edde967853f185e04",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-44-p",
                            smoothing: 100,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197db4a0701
                    },
                    "e-165": {
                        id: "e-165",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-49",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-164"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68694a3edde967853f185e04",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68694a3edde967853f185e04",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197db4a0701
                    },
                    "e-167": {
                        id: "e-167",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-63",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-168"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68694a3edde967853f185e04|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68694a3edde967853f185e04|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197db4a0701
                    },
                    "e-168": {
                        id: "e-168",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-64",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-167"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68694a3edde967853f185e04|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68694a3edde967853f185e04|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197db4a0701
                    },
                    "e-169": {
                        id: "e-169",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-81",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-170"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68694a3edde967853f185e04",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68694a3edde967853f185e04",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197db4a0701
                    },
                    "e-171": {
                        id: "e-171",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-33",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686bbf29da69272b662e4e35",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686bbf29da69272b662e4e35",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-33-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 95,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-33-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 95,
                            restingState: 50
                        }],
                        createdOn: 0x197e4e2baf6
                    },
                    "e-172": {
                        id: "e-172",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-173"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686bbf29da69272b662e4e35|c5bf67a4-e031-973e-f233-2d826eb58a84",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686bbf29da69272b662e4e35|c5bf67a4-e031-973e-f233-2d826eb58a84",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e4e2baf6
                    },
                    "e-173": {
                        id: "e-173",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-172"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686bbf29da69272b662e4e35|c5bf67a4-e031-973e-f233-2d826eb58a84",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686bbf29da69272b662e4e35|c5bf67a4-e031-973e-f233-2d826eb58a84",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e4e2baf6
                    },
                    "e-174": {
                        id: "e-174",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-73",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-175"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686bbf29da69272b662e4e35|d14cb78f-3fd1-1264-ef55-30dc97cd16ec",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686bbf29da69272b662e4e35|d14cb78f-3fd1-1264-ef55-30dc97cd16ec",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e4e2baf6
                    },
                    "e-176": {
                        id: "e-176",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-80",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-177"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686bbf29da69272b662e4e35|d14cb78f-3fd1-1264-ef55-30dc97cd16ef",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686bbf29da69272b662e4e35|d14cb78f-3fd1-1264-ef55-30dc97cd16ef",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e4e2baf6
                    },
                    "e-178": {
                        id: "e-178",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-75",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-179"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686bbf29da69272b662e4e35|d14cb78f-3fd1-1264-ef55-30dc97cd16f2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686bbf29da69272b662e4e35|d14cb78f-3fd1-1264-ef55-30dc97cd16f2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e4e2baf6
                    },
                    "e-180": {
                        id: "e-180",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-78",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-181"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686bbf29da69272b662e4e35|18bbabed-47ae-8cd3-7fce-e00a13f9793a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686bbf29da69272b662e4e35|18bbabed-47ae-8cd3-7fce-e00a13f9793a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e4e2baf6
                    },
                    "e-181": {
                        id: "e-181",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-79",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-180"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686bbf29da69272b662e4e35|18bbabed-47ae-8cd3-7fce-e00a13f9793a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686bbf29da69272b662e4e35|18bbabed-47ae-8cd3-7fce-e00a13f9793a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e4e2baf6
                    },
                    "e-182": {
                        id: "e-182",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-45",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686bc7c889791fd2ec99e35a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686bc7c889791fd2ec99e35a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-45-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197e50469b0
                    },
                    "e-183": {
                        id: "e-183",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-46",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686bc7c889791fd2ec99e35a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686bc7c889791fd2ec99e35a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-46-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197e50469b0
                    },
                    "e-184": {
                        id: "e-184",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-44",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686bc7c889791fd2ec99e35a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686bc7c889791fd2ec99e35a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-44-p",
                            smoothing: 100,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197e50469b0
                    },
                    "e-186": {
                        id: "e-186",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-49",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-185"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686bc7c889791fd2ec99e35a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686bc7c889791fd2ec99e35a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e50469b0
                    },
                    "e-187": {
                        id: "e-187",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-63",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-188"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686bc7c889791fd2ec99e35a|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686bc7c889791fd2ec99e35a|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e50469b0
                    },
                    "e-188": {
                        id: "e-188",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-64",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-187"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686bc7c889791fd2ec99e35a|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686bc7c889791fd2ec99e35a|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e50469b0
                    },
                    "e-189": {
                        id: "e-189",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-82",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-190"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".outside_wrapper",
                            originalId: "6859230397e7b879102e030f|1316feb8-5120-a58e-2db2-1d881032a752",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".outside_wrapper",
                            originalId: "6859230397e7b879102e030f|1316feb8-5120-a58e-2db2-1d881032a752",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197ef3ff300
                    },
                    "e-190": {
                        id: "e-190",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-83",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-189"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".outside_wrapper",
                            originalId: "6859230397e7b879102e030f|1316feb8-5120-a58e-2db2-1d881032a752",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".outside_wrapper",
                            originalId: "6859230397e7b879102e030f|1316feb8-5120-a58e-2db2-1d881032a752",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197ef3ff301
                    },
                    "e-191": {
                        id: "e-191",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-33",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686e827d7e30d8d857821993",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686e827d7e30d8d857821993",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-33-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 95,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-33-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 95,
                            restingState: 50
                        }],
                        createdOn: 0x197efadbd23
                    },
                    "e-194": {
                        id: "e-194",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-73",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-195"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686e827d7e30d8d857821993|d14cb78f-3fd1-1264-ef55-30dc97cd16ec",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686e827d7e30d8d857821993|d14cb78f-3fd1-1264-ef55-30dc97cd16ec",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197efadbd23
                    },
                    "e-196": {
                        id: "e-196",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-80",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-197"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686e827d7e30d8d857821993|d14cb78f-3fd1-1264-ef55-30dc97cd16ef",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686e827d7e30d8d857821993|d14cb78f-3fd1-1264-ef55-30dc97cd16ef",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197efadbd23
                    },
                    "e-198": {
                        id: "e-198",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-75",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-199"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686e827d7e30d8d857821993|d14cb78f-3fd1-1264-ef55-30dc97cd16f2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686e827d7e30d8d857821993|d14cb78f-3fd1-1264-ef55-30dc97cd16f2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197efadbd23
                    },
                    "e-202": {
                        id: "e-202",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-97",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-203"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".homepage_test_wrapper",
                            originalId: "686e827d7e30d8d857821993|415b9418-7483-b7c5-aca7-f6c1c73a792d",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".homepage_test_wrapper",
                            originalId: "686e827d7e30d8d857821993|415b9418-7483-b7c5-aca7-f6c1c73a792d",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197efbf8654
                    },
                    "e-203": {
                        id: "e-203",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-85",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-202"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".homepage_test_wrapper",
                            originalId: "686e827d7e30d8d857821993|415b9418-7483-b7c5-aca7-f6c1c73a792d",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".homepage_test_wrapper",
                            originalId: "686e827d7e30d8d857821993|415b9418-7483-b7c5-aca7-f6c1c73a792d",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197efbf8655
                    },
                    "e-204": {
                        id: "e-204",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-86",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-205"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".outside_wrapper",
                            originalId: "686e827d7e30d8d857821993|41b74e2d-4c89-69e1-50e1-9ccce602ac95",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".outside_wrapper",
                            originalId: "686e827d7e30d8d857821993|41b74e2d-4c89-69e1-50e1-9ccce602ac95",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197efe9ca82
                    },
                    "e-210": {
                        id: "e-210",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-45",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "687126629b0a7a2b37b2f823",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "687126629b0a7a2b37b2f823",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-45-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197f9fdf208
                    },
                    "e-211": {
                        id: "e-211",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-46",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "687126629b0a7a2b37b2f823",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "687126629b0a7a2b37b2f823",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-46-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197f9fdf208
                    },
                    "e-212": {
                        id: "e-212",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-44",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "687126629b0a7a2b37b2f823",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "687126629b0a7a2b37b2f823",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-44-p",
                            smoothing: 100,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197f9fdf208
                    },
                    "e-214": {
                        id: "e-214",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-49",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-213"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "687126629b0a7a2b37b2f823",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "687126629b0a7a2b37b2f823",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197f9fdf208
                    },
                    "e-215": {
                        id: "e-215",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-63",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-216"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "687126629b0a7a2b37b2f823|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "687126629b0a7a2b37b2f823|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197f9fdf208
                    },
                    "e-216": {
                        id: "e-216",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-64",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-215"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "687126629b0a7a2b37b2f823|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "687126629b0a7a2b37b2f823|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197f9fdf208
                    },
                    "e-217": {
                        id: "e-217",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-91",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-218"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "687126629b0a7a2b37b2f823",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "687126629b0a7a2b37b2f823",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197f9fdf208
                    },
                    "e-219": {
                        id: "e-219",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-92",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-220"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".line_divider.black",
                            originalId: "687126629b0a7a2b37b2f823|6fca8157-9ed2-55e7-7554-36164a590ec9",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".line_divider.black",
                            originalId: "687126629b0a7a2b37b2f823|6fca8157-9ed2-55e7-7554-36164a590ec9",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197fa0f7855
                    },
                    "e-221": {
                        id: "e-221",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-45",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68713ebaae329cf463c33436",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68713ebaae329cf463c33436",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-45-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197fa5d0a69
                    },
                    "e-222": {
                        id: "e-222",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-46",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68713ebaae329cf463c33436",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68713ebaae329cf463c33436",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-46-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197fa5d0a69
                    },
                    "e-223": {
                        id: "e-223",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-44",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68713ebaae329cf463c33436",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68713ebaae329cf463c33436",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-44-p",
                            smoothing: 100,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197fa5d0a69
                    },
                    "e-225": {
                        id: "e-225",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-49",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-224"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68713ebaae329cf463c33436",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68713ebaae329cf463c33436",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197fa5d0a69
                    },
                    "e-226": {
                        id: "e-226",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-63",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-227"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68713ebaae329cf463c33436|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68713ebaae329cf463c33436|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197fa5d0a69
                    },
                    "e-227": {
                        id: "e-227",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-64",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-226"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68713ebaae329cf463c33436|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68713ebaae329cf463c33436|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197fa5d0a69
                    },
                    "e-230": {
                        id: "e-230",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-94",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-231"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".outside_wrapper-mobile",
                            originalId: "686e827d7e30d8d857821993|9b144085-183c-612e-c2fb-38836fdafb2d",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".outside_wrapper-mobile",
                            originalId: "686e827d7e30d8d857821993|9b144085-183c-612e-c2fb-38836fdafb2d",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1980992d77a
                    },
                    "e-232": {
                        id: "e-232",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-73",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-233"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686e827d7e30d8d857821993|e93cbb16-5759-d9f4-fc20-1500fac3f267",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686e827d7e30d8d857821993|e93cbb16-5759-d9f4-fc20-1500fac3f267",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1981370e371
                    },
                    "e-234": {
                        id: "e-234",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-95",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-235"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686e827d7e30d8d857821993|7d724d4d-2739-7b0a-eeb8-306004fd62b1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686e827d7e30d8d857821993|7d724d4d-2739-7b0a-eeb8-306004fd62b1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1981380e5dd
                    },
                    "e-236": {
                        id: "e-236",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-45",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "687a53eecde4db15b9d1472c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "687a53eecde4db15b9d1472c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-45-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1981dd7e0cf
                    },
                    "e-237": {
                        id: "e-237",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-46",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "687a53eecde4db15b9d1472c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "687a53eecde4db15b9d1472c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-46-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1981dd7e0cf
                    },
                    "e-238": {
                        id: "e-238",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_SCROLL",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-44",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "687a53eecde4db15b9d1472c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "687a53eecde4db15b9d1472c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-44-p",
                            smoothing: 100,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1981dd7e0cf
                    },
                    "e-240": {
                        id: "e-240",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-49",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-239"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "687a53eecde4db15b9d1472c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "687a53eecde4db15b9d1472c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1981dd7e0cf
                    },
                    "e-241": {
                        id: "e-241",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-63",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-242"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "687a53eecde4db15b9d1472c|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "687a53eecde4db15b9d1472c|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1981dd7e0cf
                    },
                    "e-242": {
                        id: "e-242",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-64",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-241"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "687a53eecde4db15b9d1472c|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "687a53eecde4db15b9d1472c|8d799b08-5c51-a0b9-a9d8-856cafff222f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1981dd7e0cf
                    },
                    "e-243": {
                        id: "e-243",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-96",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-244"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "687a53eecde4db15b9d1472c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "687a53eecde4db15b9d1472c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1981dd7e0cf
                    },
                    "e-245": {
                        id: "e-245",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-98",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-246"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "65fb74c7-bbd9-ef55-77cc-6e6c3397a820",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "65fb74c7-bbd9-ef55-77cc-6e6c3397a820",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198235fdc4d
                    },
                    "e-246": {
                        id: "e-246",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-99",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-245"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "65fb74c7-bbd9-ef55-77cc-6e6c3397a820",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "65fb74c7-bbd9-ef55-77cc-6e6c3397a820",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x198235fdc4d
                    },
                    "e-247": {
                        id: "e-247",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-98",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-248"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".navbar_linkblock_top",
                            originalId: "65fb74c7-bbd9-ef55-77cc-6e6c3397a830",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".navbar_linkblock_top",
                            originalId: "65fb74c7-bbd9-ef55-77cc-6e6c3397a830",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19823930a9d
                    },
                    "e-248": {
                        id: "e-248",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-99",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-247"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".navbar_linkblock_top",
                            originalId: "65fb74c7-bbd9-ef55-77cc-6e6c3397a830",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".navbar_linkblock_top",
                            originalId: "65fb74c7-bbd9-ef55-77cc-6e6c3397a830",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19823930a9f
                    }
                },
                actionLists: {
                    "a-7": {
                        id: "a-7",
                        title: "Nav Menu Scale",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-7-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".nav-link",
                                        selectorGuids: ["1bb87ec0-60d5-e901-ad6b-6d84b5f92e35"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-7-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 100,
                                    easing: "easeIn",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".nav-link",
                                        selectorGuids: ["1bb87ec0-60d5-e901-ad6b-6d84b5f92e35"]
                                    },
                                    xValue: 1.02,
                                    yValue: 1.02,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197318e8532
                    },
                    "a-8": {
                        id: "a-8",
                        title: "Nav Menu Scaledown",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-8-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 100,
                                    easing: "easeOut",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "750a3cb7-d3a4-a19e-f215-351517ad4cbd"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197318f8b88
                    },
                    "a-9": {
                        id: "a-9",
                        title: "Underline in bottom",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-9-n-3",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_text",
                                        selectorGuids: ["4bedf1fe-a748-86c9-934c-9e5ba2b98a98"]
                                    },
                                    globalSwatchId: "--darker-grey",
                                    rValue: 69,
                                    bValue: 69,
                                    gValue: 69,
                                    aValue: 1
                                }
                            }, {
                                id: "a-9-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline_2_container",
                                        selectorGuids: ["9cbc9bde-7aa5-0a86-ac56-4370cedc53a9"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-9-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline",
                                        selectorGuids: ["3ec2f162-cbc7-924c-9b77-b02aa3132a52"]
                                    },
                                    xValue: 0,
                                    yValue: null,
                                    locked: !1
                                }
                            }, {
                                id: "a-9-n-9",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline",
                                        selectorGuids: ["3ec2f162-cbc7-924c-9b77-b02aa3132a52"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-9-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 10,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline",
                                        selectorGuids: ["3ec2f162-cbc7-924c-9b77-b02aa3132a52"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-9-n-4",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_text",
                                        selectorGuids: ["4bedf1fe-a748-86c9-934c-9e5ba2b98a98"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-9-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline",
                                        selectorGuids: ["3ec2f162-cbc7-924c-9b77-b02aa3132a52"]
                                    },
                                    xValue: 1,
                                    yValue: null,
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-9-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 10,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline",
                                        selectorGuids: ["3ec2f162-cbc7-924c-9b77-b02aa3132a52"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-9-n-11",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 10,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline_2.black",
                                        selectorGuids: ["ff7bd955-eb48-9ba1-3385-4a476fc51ede", "6ebb061a-5d92-e9c3-2ba3-6ee986bb0e26"]
                                    },
                                    xValue: 1,
                                    yValue: null,
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19734c79d65
                    },
                    "a-103": {
                        id: "a-103",
                        title: "Underline out TEST 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-103-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline_2.black",
                                        selectorGuids: ["ff7bd955-eb48-9ba1-3385-4a476fc51ede", "6ebb061a-5d92-e9c3-2ba3-6ee986bb0e26"]
                                    },
                                    xValue: 1,
                                    yValue: null,
                                    locked: !1
                                }
                            }, {
                                id: "a-103-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline_2_container",
                                        selectorGuids: ["9cbc9bde-7aa5-0a86-ac56-4370cedc53a9"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-103-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 10,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline_2_container",
                                        selectorGuids: ["9cbc9bde-7aa5-0a86-ac56-4370cedc53a9"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-103-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 10,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline",
                                        selectorGuids: ["3ec2f162-cbc7-924c-9b77-b02aa3132a52"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-103-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline_2.black",
                                        selectorGuids: ["ff7bd955-eb48-9ba1-3385-4a476fc51ede", "6ebb061a-5d92-e9c3-2ba3-6ee986bb0e26"]
                                    },
                                    xValue: 0,
                                    yValue: null,
                                    locked: !1
                                }
                            }, {
                                id: "a-103-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 10,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline",
                                        selectorGuids: ["3ec2f162-cbc7-924c-9b77-b02aa3132a52"]
                                    },
                                    xValue: 0,
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19734ca1096
                    },
                    "a-15": {
                        id: "a-15",
                        title: "Link jump up",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-15-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".featured_work_text",
                                        selectorGuids: ["88fc2852-cd21-32b5-4a7f-eae826862fca"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-15-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".featured_work_text",
                                        selectorGuids: ["88fc2852-cd21-32b5-4a7f-eae826862fca"]
                                    },
                                    yValue: -8,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1973fb8f0c6
                    },
                    "a-16": {
                        id: "a-16",
                        title: "Link jump down",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-16-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 600,
                                    target: {
                                        selector: ".featured_work_text",
                                        selectorGuids: ["88fc2852-cd21-32b5-4a7f-eae826862fca"]
                                    },
                                    xValue: null,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1973fc9a65b
                    },
                    "a-17": {
                        id: "a-17",
                        title: "H-Overview in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-17-n",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|5da16190-899b-df71-e06a-b2b6ad6869fe"
                                    },
                                    globalSwatchId: "",
                                    rValue: 100,
                                    bValue: 100,
                                    gValue: 100,
                                    aValue: 1
                                }
                            }, {
                                id: "a-17-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|5da16190-899b-df71-e06a-b2b6ad6869fe"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-17-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|26a6b764-a3a5-1a79-d32c-0ae79683f019"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-17-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|5da16190-899b-df71-e06a-b2b6ad6869fe"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-17-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 600,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|5da16190-899b-df71-e06a-b2b6ad6869fe"
                                    },
                                    xValue: 20,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-17-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|26a6b764-a3a5-1a79-d32c-0ae79683f019"
                                    },
                                    xValue: 20,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-17-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|5da16190-899b-df71-e06a-b2b6ad6869fe"
                                    },
                                    xValue: 1.3,
                                    yValue: 1.3,
                                    locked: !0
                                }
                            }, {
                                id: "a-17-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|5da16190-899b-df71-e06a-b2b6ad6869fe"
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197405a7c20
                    },
                    "a-18": {
                        id: "a-18",
                        title: "H-Overview out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-18-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 600,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|5da16190-899b-df71-e06a-b2b6ad6869fe"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-18-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|5da16190-899b-df71-e06a-b2b6ad6869fe"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-18-n",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|5da16190-899b-df71-e06a-b2b6ad6869fe"
                                    },
                                    globalSwatchId: "",
                                    rValue: 100,
                                    bValue: 100,
                                    gValue: 100,
                                    aValue: 1
                                }
                            }, {
                                id: "a-18-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|26a6b764-a3a5-1a79-d32c-0ae79683f019"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197405a7c20
                    },
                    "a-19": {
                        id: "a-19",
                        title: "H-Problem in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-19-n",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|56835e19-9eb0-615c-fbfd-55fe64ce5595"
                                    },
                                    globalSwatchId: "",
                                    rValue: 100,
                                    bValue: 100,
                                    gValue: 100,
                                    aValue: 1
                                }
                            }, {
                                id: "a-19-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|56835e19-9eb0-615c-fbfd-55fe64ce5595"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-19-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|56835e19-9eb0-615c-fbfd-55fe64ce5597"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-19-n-9",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|56835e19-9eb0-615c-fbfd-55fe64ce5595"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-19-n-3",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|56835e19-9eb0-615c-fbfd-55fe64ce5595"
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-19-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 600,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|56835e19-9eb0-615c-fbfd-55fe64ce5595"
                                    },
                                    xValue: 20,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-19-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|56835e19-9eb0-615c-fbfd-55fe64ce5597"
                                    },
                                    xValue: 20,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-19-n-10",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|56835e19-9eb0-615c-fbfd-55fe64ce5595"
                                    },
                                    xValue: 1.3,
                                    yValue: 1.3,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197405a7c20
                    },
                    "a-20": {
                        id: "a-20",
                        title: "H-Problem out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-20-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|56835e19-9eb0-615c-fbfd-55fe64ce5595"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".side-menu-textblock",
                                        selectorGuids: ["9880cbaf-f60c-a1e6-3496-a921acdcf37d"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-20-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|56835e19-9eb0-615c-fbfd-55fe64ce5595"
                                    },
                                    globalSwatchId: "",
                                    rValue: 100,
                                    bValue: 100,
                                    gValue: 100,
                                    aValue: 1
                                }
                            }, {
                                id: "a-20-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|56835e19-9eb0-615c-fbfd-55fe64ce5597"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197405a7c20
                    },
                    "a-23": {
                        id: "a-23",
                        title: "H-Outcomes in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-23-n",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b470752c-4031-4bf7-adf7-694a5ee77dfe"
                                    },
                                    globalSwatchId: "",
                                    rValue: 100,
                                    bValue: 100,
                                    gValue: 100,
                                    aValue: 1
                                }
                            }, {
                                id: "a-23-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b470752c-4031-4bf7-adf7-694a5ee77dfe"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-23-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b470752c-4031-4bf7-adf7-694a5ee77dfe"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b470752c-4031-4bf7-adf7-694a5ee77e00"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-23-n-4",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b470752c-4031-4bf7-adf7-694a5ee77dfe"
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-23-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 600,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b470752c-4031-4bf7-adf7-694a5ee77dfe"
                                    },
                                    xValue: 20,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b470752c-4031-4bf7-adf7-694a5ee77e00"
                                    },
                                    xValue: 20,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-23-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b470752c-4031-4bf7-adf7-694a5ee77dfe"
                                    },
                                    xValue: 1.3,
                                    yValue: 1.3,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197405a7c20
                    },
                    "a-24": {
                        id: "a-24",
                        title: "H-Outcomes out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-24-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b470752c-4031-4bf7-adf7-694a5ee77dfe"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-24-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".side-menu-textblock",
                                        selectorGuids: ["9880cbaf-f60c-a1e6-3496-a921acdcf37d"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-24-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b470752c-4031-4bf7-adf7-694a5ee77dfe"
                                    },
                                    globalSwatchId: "",
                                    rValue: 100,
                                    bValue: 100,
                                    gValue: 100,
                                    aValue: 1
                                }
                            }, {
                                id: "a-24-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b470752c-4031-4bf7-adf7-694a5ee77e00"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197405a7c20
                    },
                    "a-26": {
                        id: "a-26",
                        title: "arrow right animate",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-26-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".arrow-l-down",
                                        selectorGuids: ["16731298-e7c4-43ee-8337-732f99025d07"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-26-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".arrow-l-down",
                                        selectorGuids: ["16731298-e7c4-43ee-8337-732f99025d07"]
                                    },
                                    xValue: .8,
                                    yValue: .8,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-26-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outBack",
                                    duration: 700,
                                    target: {
                                        selector: ".arrow-l-down",
                                        selectorGuids: ["16731298-e7c4-43ee-8337-732f99025d07"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-26-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outBack",
                                    duration: 700,
                                    target: {
                                        selector: ".arrow-l-down",
                                        selectorGuids: ["16731298-e7c4-43ee-8337-732f99025d07"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19745211a75
                    },
                    "a-33": {
                        id: "a-33",
                        title: "Title reveal version2",
                        continuousParameterGroups: [{
                            id: "a-33-p",
                            type: "MOUSE_X",
                            parameterLabel: "Mouse X",
                            continuousActionGroups: []
                        }, {
                            id: "a-33-p-2",
                            type: "MOUSE_Y",
                            parameterLabel: "Mouse Y",
                            continuousActionGroups: [{
                                keyframe: 10,
                                actionItems: [{
                                    id: "a-33-n-2",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".camera-cutter",
                                            selectorGuids: ["76587bec-4a8c-f743-2934-72438efa6b26"]
                                        },
                                        heightValue: 100,
                                        widthUnit: "PX",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }]
                            }, {
                                keyframe: 28,
                                actionItems: [{
                                    id: "a-33-n-3",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".camera-cutter",
                                            selectorGuids: ["76587bec-4a8c-f743-2934-72438efa6b26"]
                                        },
                                        heightValue: 90,
                                        widthUnit: "PX",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }]
                            }, {
                                keyframe: 72,
                                actionItems: [{
                                    id: "a-33-n-4",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".camera-cutter",
                                            selectorGuids: ["76587bec-4a8c-f743-2934-72438efa6b26"]
                                        },
                                        heightValue: 10,
                                        widthUnit: "PX",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }]
                            }, {
                                keyframe: 90,
                                actionItems: [{
                                    id: "a-33-n-5",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".camera-cutter",
                                            selectorGuids: ["76587bec-4a8c-f743-2934-72438efa6b26"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x197554dee6b
                    },
                    "a-29": {
                        id: "a-29",
                        title: "Projectbutton hoverin",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-29-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-text-wrap.is2",
                                        selectorGuids: ["d972ddcc-5ad9-af8f-793c-bc59ddfbf2c7", "f15f8e43-f987-6960-f2b3-a2ae4c2bdc4b"]
                                    },
                                    yValue: -220,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-29-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-text-wrap.is2",
                                        selectorGuids: ["d972ddcc-5ad9-af8f-793c-bc59ddfbf2c7", "f15f8e43-f987-6960-f2b3-a2ae4c2bdc4b"]
                                    },
                                    xValue: .8,
                                    yValue: .8,
                                    locked: !0
                                }
                            }, {
                                id: "a-29-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".downrightarrow-button.is-2",
                                        selectorGuids: ["81ac5c9e-fa25-146d-e781-e4ced04a1458", "1a5d04ed-bfe3-d47e-a03b-52e473b75d32"]
                                    },
                                    xValue: 200,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-29-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-background",
                                        selectorGuids: ["ae0999ea-ffe7-d893-7377-159b9a70929f"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-29-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 100,
                                    easing: "outExpo",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-text-wrap.is2",
                                        selectorGuids: ["d972ddcc-5ad9-af8f-793c-bc59ddfbf2c7", "f15f8e43-f987-6960-f2b3-a2ae4c2bdc4b"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-29-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 100,
                                    easing: "outExpo",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-text-wrap.is2",
                                        selectorGuids: ["d972ddcc-5ad9-af8f-793c-bc59ddfbf2c7", "f15f8e43-f987-6960-f2b3-a2ae4c2bdc4b"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-29-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 100,
                                    easing: "outExpo",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-text-wrap.is2",
                                        selectorGuids: ["d972ddcc-5ad9-af8f-793c-bc59ddfbf2c7", "f15f8e43-f987-6960-f2b3-a2ae4c2bdc4b"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-29-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 100,
                                    easing: "outExpo",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".downrightarrow-button.is-2",
                                        selectorGuids: ["81ac5c9e-fa25-146d-e781-e4ced04a1458", "1a5d04ed-bfe3-d47e-a03b-52e473b75d32"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19759620c2a
                    },
                    "a-30": {
                        id: "a-30",
                        title: "Projectbutton hoverout",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-30-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-text-wrap.is-1",
                                        selectorGuids: ["d972ddcc-5ad9-af8f-793c-bc59ddfbf2c7", "d0b2c760-83c3-71ca-6597-42026969b87e"]
                                    },
                                    yValue: -200,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-30-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-text-wrap.is-1",
                                        selectorGuids: ["d972ddcc-5ad9-af8f-793c-bc59ddfbf2c7", "d0b2c760-83c3-71ca-6597-42026969b87e"]
                                    },
                                    xValue: .8,
                                    yValue: .8,
                                    locked: !0
                                }
                            }, {
                                id: "a-30-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".downrightarrow-button.is-1",
                                        selectorGuids: ["81ac5c9e-fa25-146d-e781-e4ced04a1458", "0cbcbdd4-22ee-245e-25e2-bfbed34c17bc"]
                                    },
                                    xValue: -200,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-30-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-text-wrap.is2",
                                        selectorGuids: ["d972ddcc-5ad9-af8f-793c-bc59ddfbf2c7", "f15f8e43-f987-6960-f2b3-a2ae4c2bdc4b"]
                                    },
                                    xValue: .8,
                                    yValue: .8,
                                    locked: !0
                                }
                            }, {
                                id: "a-30-n-11",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-text-wrap.is2",
                                        selectorGuids: ["d972ddcc-5ad9-af8f-793c-bc59ddfbf2c7", "f15f8e43-f987-6960-f2b3-a2ae4c2bdc4b"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-30-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-text-wrap.is2",
                                        selectorGuids: ["d972ddcc-5ad9-af8f-793c-bc59ddfbf2c7", "f15f8e43-f987-6960-f2b3-a2ae4c2bdc4b"]
                                    },
                                    yValue: 200,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-30-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".downrightarrow-button.is-2",
                                        selectorGuids: ["81ac5c9e-fa25-146d-e781-e4ced04a1458", "1a5d04ed-bfe3-d47e-a03b-52e473b75d32"]
                                    },
                                    xValue: 200,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-30-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-background",
                                        selectorGuids: ["ae0999ea-ffe7-d893-7377-159b9a70929f"]
                                    },
                                    yValue: 200,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-30-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-text-wrap.is-1",
                                        selectorGuids: ["d972ddcc-5ad9-af8f-793c-bc59ddfbf2c7", "d0b2c760-83c3-71ca-6597-42026969b87e"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-30-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".downrightarrow-button.is-1",
                                        selectorGuids: ["81ac5c9e-fa25-146d-e781-e4ced04a1458", "0cbcbdd4-22ee-245e-25e2-bfbed34c17bc"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-30-n-9",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-text-wrap.is-1",
                                        selectorGuids: ["d972ddcc-5ad9-af8f-793c-bc59ddfbf2c7", "d0b2c760-83c3-71ca-6597-42026969b87e"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1975969e243
                    },
                    "a-31": {
                        id: "a-31",
                        title: "Button 4 hoverin",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-31-n",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-4-text",
                                        selectorGuids: ["38f67538-db8d-3608-85ec-3b3183c0177f"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-31-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-4-background",
                                        selectorGuids: ["b3fd92c3-7336-758a-e279-7ed12b3b4300"]
                                    },
                                    widthValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-31-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-4-icon",
                                        selectorGuids: ["d54e7cf3-7689-0bc2-95e8-44430d4f8cdb"]
                                    },
                                    xValue: 0,
                                    xUnit: "em",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-31-n-4",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-4-text",
                                        selectorGuids: ["38f67538-db8d-3608-85ec-3b3183c0177f"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-31-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-4-icon",
                                        selectorGuids: ["d54e7cf3-7689-0bc2-95e8-44430d4f8cdb"]
                                    },
                                    xValue: .5,
                                    xUnit: "em",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-31-n-5",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-4-background",
                                        selectorGuids: ["b3fd92c3-7336-758a-e279-7ed12b3b4300"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197599d8aa5
                    },
                    "a-32": {
                        id: "a-32",
                        title: "Button 4 hoverout",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-32-n",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-4-text",
                                        selectorGuids: ["38f67538-db8d-3608-85ec-3b3183c0177f"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-32-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-4-background",
                                        selectorGuids: ["b3fd92c3-7336-758a-e279-7ed12b3b4300"]
                                    },
                                    widthValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-32-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-4-icon",
                                        selectorGuids: ["d54e7cf3-7689-0bc2-95e8-44430d4f8cdb"]
                                    },
                                    xValue: 0,
                                    xUnit: "em",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197599d8aa5
                    },
                    "a-35": {
                        id: "a-35",
                        title: "Underline in sidemenu",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-35-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".side-menu-underline",
                                        selectorGuids: ["d29b295a-af0a-595d-8380-1286eb65322e"]
                                    },
                                    widthValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-35-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".side-menu-textblock",
                                        selectorGuids: ["9880cbaf-f60c-a1e6-3496-a921acdcf37d"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 66,
                                    bValue: 96,
                                    gValue: 66,
                                    aValue: 1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-35-n-3",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "inCirc",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".side-menu-underline",
                                        selectorGuids: ["d29b295a-af0a-595d-8380-1286eb65322e"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-35-n-4",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".side-menu-textblock",
                                        selectorGuids: ["9880cbaf-f60c-a1e6-3496-a921acdcf37d"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19734c79d65
                    },
                    "a-34": {
                        id: "a-34",
                        title: "H-Process in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-34-n",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b1c28794-282b-754f-30df-90be8d532f4e"
                                    },
                                    globalSwatchId: "",
                                    rValue: 100,
                                    bValue: 100,
                                    gValue: 100,
                                    aValue: 1
                                }
                            }, {
                                id: "a-34-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b1c28794-282b-754f-30df-90be8d532f4e"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-34-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b1c28794-282b-754f-30df-90be8d532f50"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-34-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b1c28794-282b-754f-30df-90be8d532f4e"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-34-n-5",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b1c28794-282b-754f-30df-90be8d532f4e"
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-34-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 600,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b1c28794-282b-754f-30df-90be8d532f4e"
                                    },
                                    xValue: 20,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-34-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b1c28794-282b-754f-30df-90be8d532f50"
                                    },
                                    xValue: 20,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-34-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 400,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b1c28794-282b-754f-30df-90be8d532f4e"
                                    },
                                    xValue: 1.2,
                                    yValue: 1.2,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197405a7c20
                    },
                    "a-22": {
                        id: "a-22",
                        title: "H-Process out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-22-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b1c28794-282b-754f-30df-90be8d532f4e"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-22-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b1c28794-282b-754f-30df-90be8d532f4e"
                                    },
                                    globalSwatchId: "",
                                    rValue: 100,
                                    bValue: 100,
                                    gValue: 100,
                                    aValue: 1
                                }
                            }, {
                                id: "a-22-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutQuad",
                                    duration: 300,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b1c28794-282b-754f-30df-90be8d532f50"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-22-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "683f1a6ba5beb5f07ff8eaa9|b1c28794-282b-754f-30df-90be8d532f4e"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197405a7c20
                    },
                    "a-36": {
                        id: "a-36",
                        title: "Projectbutton simple hover",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-36-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".project-button.nonhoverable",
                                        selectorGuids: ["35b0f9c7-d1e3-b262-01ff-36c8af5f99ab", "55566aa3-8374-afd5-f612-595dd0b0caef"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 34,
                                    bValue: 104,
                                    gValue: 21,
                                    aValue: 1
                                }
                            }, {
                                id: "a-36-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-text-wrap.nonhoverable",
                                        selectorGuids: ["d972ddcc-5ad9-af8f-793c-bc59ddfbf2c7", "ab71da7f-e7eb-5c83-2277-f35da175b19f"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-36-n-8",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-4-background.nonhoverable",
                                        selectorGuids: ["b3fd92c3-7336-758a-e279-7ed12b3b4300", "dcbc9ea7-8d1b-c511-d579-718143828bdd"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 89,
                                    bValue: 193,
                                    gValue: 70,
                                    aValue: 1
                                }
                            }, {
                                id: "a-36-n-9",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-4-background.nonhoverable",
                                        selectorGuids: ["b3fd92c3-7336-758a-e279-7ed12b3b4300", "dcbc9ea7-8d1b-c511-d579-718143828bdd"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-36-n-2",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".project-button.nonhoverable",
                                        selectorGuids: ["35b0f9c7-d1e3-b262-01ff-36c8af5f99ab", "55566aa3-8374-afd5-f612-595dd0b0caef"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 89,
                                    bValue: 193,
                                    gValue: 70,
                                    aValue: 1
                                }
                            }, {
                                id: "a-36-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "bouncePast",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".downrightarrow-button.nonhoverable",
                                        selectorGuids: ["81ac5c9e-fa25-146d-e781-e4ced04a1458", "1e35c2ca-1c43-ffb8-3a40-ea6d1dcaa6af"]
                                    },
                                    xValue: 2,
                                    yValue: 2,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19762ee10a9
                    },
                    "a-37": {
                        id: "a-37",
                        title: "Projectbutton simple hover out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-37-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 300,
                                    target: {
                                        selector: ".project-button.nonhoverable",
                                        selectorGuids: ["35b0f9c7-d1e3-b262-01ff-36c8af5f99ab", "55566aa3-8374-afd5-f612-595dd0b0caef"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 34,
                                    bValue: 104,
                                    gValue: 21,
                                    aValue: 1
                                }
                            }, {
                                id: "a-37-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".downrightarrow-button.nonhoverable",
                                        selectorGuids: ["81ac5c9e-fa25-146d-e781-e4ced04a1458", "1e35c2ca-1c43-ffb8-3a40-ea6d1dcaa6af"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19762ee10a9
                    },
                    "a-25": {
                        id: "a-25",
                        title: "CEO Quote appear",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-25-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".ceo-quote-image",
                                        selectorGuids: ["824ba909-f512-2c1e-dbc6-92555159c132"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-25-n-5",
                                actionTypeId: "TRANSFORM_SKEW",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".ceo-quote-image",
                                        selectorGuids: ["824ba909-f512-2c1e-dbc6-92555159c132"]
                                    },
                                    xValue: -5,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-25-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".ceo-quote-image",
                                        selectorGuids: ["824ba909-f512-2c1e-dbc6-92555159c132"]
                                    },
                                    xValue: .8,
                                    yValue: .8,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-25-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outBack",
                                    duration: 700,
                                    target: {
                                        selector: ".ceo-quote-image",
                                        selectorGuids: ["824ba909-f512-2c1e-dbc6-92555159c132"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-25-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outBack",
                                    duration: 700,
                                    target: {
                                        selector: ".ceo-quote-image",
                                        selectorGuids: ["824ba909-f512-2c1e-dbc6-92555159c132"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-25-n-6",
                                actionTypeId: "TRANSFORM_SKEW",
                                config: {
                                    delay: 0,
                                    easing: "outBack",
                                    duration: 700,
                                    target: {
                                        selector: ".ceo-quote-image",
                                        selectorGuids: ["824ba909-f512-2c1e-dbc6-92555159c132"]
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-25-n-7",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".ceo-quote-image",
                                        selectorGuids: ["824ba909-f512-2c1e-dbc6-92555159c132"]
                                    },
                                    xValue: null,
                                    zValue: -6,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19745211a75
                    },
                    "a-50": {
                        id: "a-50",
                        title: "swirl_rotate",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-50-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".in_text_symbols.swirl",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "b6097f8e-ce7b-8ed5-0e33-fdecb549e132"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-50-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 500,
                                    target: {
                                        selector: ".in_text_symbols.swirl",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "b6097f8e-ce7b-8ed5-0e33-fdecb549e132"]
                                    },
                                    zValue: 720,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-50-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 500,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        selector: ".in_text_symbols.swirl",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "b6097f8e-ce7b-8ed5-0e33-fdecb549e132"]
                                    },
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "deg",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197692a48b1
                    },
                    "a-51": {
                        id: "a-51",
                        title: "bubbles_burst",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-51-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-51-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "bouncePast",
                                    duration: 400,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-51-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 200,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-51-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "bouncePast",
                                    duration: 400,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-51-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 200,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197693017fe
                    },
                    "a-52": {
                        id: "a-52",
                        title: "disc_twirl",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-52-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".in_text_symbols.knot",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "89049bd8-291e-2118-a5af-48d6c038750a"]
                                    },
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "deg",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-52-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".in_text_symbols.knot",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "89049bd8-291e-2118-a5af-48d6c038750a"]
                                    },
                                    yValue: 720,
                                    zValue: 720,
                                    xUnit: "DEG",
                                    yUnit: "deg",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-52-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 500,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".in_text_symbols.knot",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "89049bd8-291e-2118-a5af-48d6c038750a"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "deg",
                                    yUnit: "deg",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1976932194a
                    },
                    "a-45": {
                        id: "a-45",
                        title: "prog_bar_scroll",
                        continuousParameterGroups: [{
                            id: "a-45-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-45-n-2",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._1",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "6846ef8c-c5fe-d6eb-a4b8-101e0940b722"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-45-n-11",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._1",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "6846ef8c-c5fe-d6eb-a4b8-101e0940b722"]
                                        },
                                        globalSwatchId: "--prog_bar_dark",
                                        rValue: 111,
                                        bValue: 226,
                                        gValue: 100,
                                        aValue: .75
                                    }
                                }]
                            }, {
                                keyframe: 24,
                                actionItems: [{
                                    id: "a-45-n-10",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._1",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "6846ef8c-c5fe-d6eb-a4b8-101e0940b722"]
                                        },
                                        globalSwatchId: "--prog_bar_dark",
                                        rValue: 111,
                                        bValue: 226,
                                        gValue: 100,
                                        aValue: .75
                                    }
                                }, {
                                    id: "a-45-n-12",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._2",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "c4b88c8a-bfd7-7cdc-b120-c0d497ced27a"]
                                        },
                                        globalSwatchId: "--prog_bar_light",
                                        rValue: 111,
                                        bValue: 226,
                                        gValue: 100,
                                        aValue: .26
                                    }
                                }]
                            }, {
                                keyframe: 25,
                                actionItems: [{
                                    id: "a-45-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._1",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "6846ef8c-c5fe-d6eb-a4b8-101e0940b722"]
                                        },
                                        heightValue: 25,
                                        widthUnit: "PX",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-45-n-3",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._2",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "c4b88c8a-bfd7-7cdc-b120-c0d497ced27a"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }]
                            }, {
                                keyframe: 26,
                                actionItems: [{
                                    id: "a-45-n-9",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._1",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "6846ef8c-c5fe-d6eb-a4b8-101e0940b722"]
                                        },
                                        globalSwatchId: "--prog_bar_light",
                                        rValue: 111,
                                        bValue: 226,
                                        gValue: 100,
                                        aValue: .26
                                    }
                                }, {
                                    id: "a-45-n-13",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._2",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "c4b88c8a-bfd7-7cdc-b120-c0d497ced27a"]
                                        },
                                        globalSwatchId: "--prog_bar_dark",
                                        rValue: 111,
                                        bValue: 226,
                                        gValue: 100,
                                        aValue: .75
                                    }
                                }]
                            }, {
                                keyframe: 49,
                                actionItems: [{
                                    id: "a-45-n-15",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._2",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "c4b88c8a-bfd7-7cdc-b120-c0d497ced27a"]
                                        },
                                        globalSwatchId: "--prog_bar_dark",
                                        rValue: 111,
                                        bValue: 226,
                                        gValue: 100,
                                        aValue: .75
                                    }
                                }, {
                                    id: "a-45-n-17",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._3",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "2d6744f9-c040-334b-4c20-038ec5cb6a34"]
                                        },
                                        globalSwatchId: "--prog_bar_light",
                                        rValue: 111,
                                        bValue: 226,
                                        gValue: 100,
                                        aValue: .26
                                    }
                                }]
                            }, {
                                keyframe: 50,
                                actionItems: [{
                                    id: "a-45-n-4",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._2",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "c4b88c8a-bfd7-7cdc-b120-c0d497ced27a"]
                                        },
                                        heightValue: 25,
                                        widthUnit: "PX",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-45-n-5",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._3",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "2d6744f9-c040-334b-4c20-038ec5cb6a34"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }]
                            }, {
                                keyframe: 51,
                                actionItems: [{
                                    id: "a-45-n-14",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._2",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "c4b88c8a-bfd7-7cdc-b120-c0d497ced27a"]
                                        },
                                        globalSwatchId: "--prog_bar_light",
                                        rValue: 111,
                                        bValue: 226,
                                        gValue: 100,
                                        aValue: .26
                                    }
                                }, {
                                    id: "a-45-n-16",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._3",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "2d6744f9-c040-334b-4c20-038ec5cb6a34"]
                                        },
                                        globalSwatchId: "--prog_bar_dark",
                                        rValue: 111,
                                        bValue: 226,
                                        gValue: 100,
                                        aValue: .75
                                    }
                                }]
                            }, {
                                keyframe: 74,
                                actionItems: [{
                                    id: "a-45-n-19",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._3",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "2d6744f9-c040-334b-4c20-038ec5cb6a34"]
                                        },
                                        globalSwatchId: "--prog_bar_dark",
                                        rValue: 111,
                                        bValue: 226,
                                        gValue: 100,
                                        aValue: .75
                                    }
                                }, {
                                    id: "a-45-n-21",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "inQuart",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._4",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "e8fffa22-4a4a-0bd7-7ae2-7142bb4ecd15"]
                                        },
                                        globalSwatchId: "--prog_bar_light",
                                        rValue: 111,
                                        bValue: 226,
                                        gValue: 100,
                                        aValue: .26
                                    }
                                }]
                            }, {
                                keyframe: 75,
                                actionItems: [{
                                    id: "a-45-n-6",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._3",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "2d6744f9-c040-334b-4c20-038ec5cb6a34"]
                                        },
                                        heightValue: 25,
                                        widthUnit: "PX",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-45-n-7",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._4",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "e8fffa22-4a4a-0bd7-7ae2-7142bb4ecd15"]
                                        },
                                        heightValue: 0,
                                        widthUnit: "PX",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }]
                            }, {
                                keyframe: 76,
                                actionItems: [{
                                    id: "a-45-n-18",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._3",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "2d6744f9-c040-334b-4c20-038ec5cb6a34"]
                                        },
                                        globalSwatchId: "--prog_bar_light",
                                        rValue: 111,
                                        bValue: 226,
                                        gValue: 100,
                                        aValue: .26
                                    }
                                }, {
                                    id: "a-45-n-22",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "inQuart",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._4",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "e8fffa22-4a4a-0bd7-7ae2-7142bb4ecd15"]
                                        },
                                        globalSwatchId: "--prog_bar_dark",
                                        rValue: 111,
                                        bValue: 226,
                                        gValue: 100,
                                        aValue: .75
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-45-n-8",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._4",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "e8fffa22-4a4a-0bd7-7ae2-7142bb4ecd15"]
                                        },
                                        heightValue: 25,
                                        widthUnit: "PX",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-45-n-20",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "inQuart",
                                        duration: 500,
                                        target: {
                                            selector: ".prog_bar._4",
                                            selectorGuids: ["1841a392-e995-c3e7-b472-00d9bf79c64d", "e8fffa22-4a4a-0bd7-7ae2-7142bb4ecd15"]
                                        },
                                        globalSwatchId: "--prog_bar_dark",
                                        rValue: 111,
                                        bValue: 226,
                                        gValue: 100,
                                        aValue: .75
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x197633faa41
                    },
                    "a-46": {
                        id: "a-46",
                        title: "name_scroll",
                        continuousParameterGroups: [{
                            id: "a-46-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-46-n",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".section_name._1",
                                            selectorGuids: ["a59285e7-2d9f-29cd-4b3a-c11316a1f6e2", "60c0a1ef-8833-511a-be1a-29f7b0805ed8"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 22,
                                actionItems: [{
                                    id: "a-46-n-7",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".section_name._2",
                                            selectorGuids: ["a59285e7-2d9f-29cd-4b3a-c11316a1f6e2", "ce7f3a6c-c0ad-5c9d-4276-20bb88fde5d1"]
                                        },
                                        value: .2,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 24,
                                actionItems: [{
                                    id: "a-46-n-3",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".section_name._1",
                                            selectorGuids: ["a59285e7-2d9f-29cd-4b3a-c11316a1f6e2", "60c0a1ef-8833-511a-be1a-29f7b0805ed8"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 26,
                                actionItems: [{
                                    id: "a-46-n-5",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".section_name._2",
                                            selectorGuids: ["a59285e7-2d9f-29cd-4b3a-c11316a1f6e2", "ce7f3a6c-c0ad-5c9d-4276-20bb88fde5d1"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 28,
                                actionItems: [{
                                    id: "a-46-n-4",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".section_name._1",
                                            selectorGuids: ["a59285e7-2d9f-29cd-4b3a-c11316a1f6e2", "60c0a1ef-8833-511a-be1a-29f7b0805ed8"]
                                        },
                                        value: .2,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 47,
                                actionItems: [{
                                    id: "a-46-n-9",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".section_name._3",
                                            selectorGuids: ["a59285e7-2d9f-29cd-4b3a-c11316a1f6e2", "78176df2-8c10-0b10-b9d2-2a54f4908a5e"]
                                        },
                                        value: .2,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 49,
                                actionItems: [{
                                    id: "a-46-n-6",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".section_name._2",
                                            selectorGuids: ["a59285e7-2d9f-29cd-4b3a-c11316a1f6e2", "ce7f3a6c-c0ad-5c9d-4276-20bb88fde5d1"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 51,
                                actionItems: [{
                                    id: "a-46-n-10",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".section_name._3",
                                            selectorGuids: ["a59285e7-2d9f-29cd-4b3a-c11316a1f6e2", "78176df2-8c10-0b10-b9d2-2a54f4908a5e"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 53,
                                actionItems: [{
                                    id: "a-46-n-8",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".section_name._2",
                                            selectorGuids: ["a59285e7-2d9f-29cd-4b3a-c11316a1f6e2", "ce7f3a6c-c0ad-5c9d-4276-20bb88fde5d1"]
                                        },
                                        value: .2,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 72,
                                actionItems: [{
                                    id: "a-46-n-13",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".section_name._4",
                                            selectorGuids: ["a59285e7-2d9f-29cd-4b3a-c11316a1f6e2", "750310ff-d702-b7d7-53da-fe5cae60f64d"]
                                        },
                                        value: .2,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 74,
                                actionItems: [{
                                    id: "a-46-n-11",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".section_name._3",
                                            selectorGuids: ["a59285e7-2d9f-29cd-4b3a-c11316a1f6e2", "78176df2-8c10-0b10-b9d2-2a54f4908a5e"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 76,
                                actionItems: [{
                                    id: "a-46-n-14",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".section_name._4",
                                            selectorGuids: ["a59285e7-2d9f-29cd-4b3a-c11316a1f6e2", "750310ff-d702-b7d7-53da-fe5cae60f64d"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 78,
                                actionItems: [{
                                    id: "a-46-n-12",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".section_name._3",
                                            selectorGuids: ["a59285e7-2d9f-29cd-4b3a-c11316a1f6e2", "78176df2-8c10-0b10-b9d2-2a54f4908a5e"]
                                        },
                                        value: .2,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-46-n-15",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".section_name._4",
                                            selectorGuids: ["a59285e7-2d9f-29cd-4b3a-c11316a1f6e2", "750310ff-d702-b7d7-53da-fe5cae60f64d"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19763431f32
                    },
                    "a-47": {
                        id: "a-47",
                        title: "prog_bar_appear",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-47-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".prog_bar_wrapper",
                                        selectorGuids: ["144c73a5-9ab9-90e3-286f-e622a96383eb"]
                                    },
                                    xValue: .8,
                                    yValue: .8,
                                    locked: !0
                                }
                            }, {
                                id: "a-47-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".prog_bar_wrapper",
                                        selectorGuids: ["144c73a5-9ab9-90e3-286f-e622a96383eb"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-47-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".prog_bar_wrapper",
                                        selectorGuids: ["144c73a5-9ab9-90e3-286f-e622a96383eb"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-47-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".prog_bar_wrapper",
                                        selectorGuids: ["144c73a5-9ab9-90e3-286f-e622a96383eb"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1976368a9b3
                    },
                    "a-48": {
                        id: "a-48",
                        title: "prog_bar_disappear",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-48-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".prog_bar_wrapper",
                                        selectorGuids: ["144c73a5-9ab9-90e3-286f-e622a96383eb"]
                                    },
                                    xValue: .8,
                                    yValue: .8,
                                    locked: !0
                                }
                            }, {
                                id: "a-48-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".prog_bar_wrapper",
                                        selectorGuids: ["144c73a5-9ab9-90e3-286f-e622a96383eb"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1976368a9b3
                    },
                    "a-44": {
                        id: "a-44",
                        title: "halia_grid_scroll",
                        continuousParameterGroups: [{
                            id: "a-44-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-44-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".halia_grid_image._1",
                                            selectorGuids: ["b7f6e6d3-2922-0595-031b-c818ed9d3951", "23614a5c-5a37-0622-b5c4-e130159581ce"]
                                        },
                                        xValue: -60,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-44-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".halia_grid_image._2",
                                            selectorGuids: ["b7f6e6d3-2922-0595-031b-c818ed9d3951", "634b722f-6045-9059-3fa7-5b1b3b54b9a9"]
                                        },
                                        xValue: 60,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-44-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".halia_grid_image._1",
                                            selectorGuids: ["b7f6e6d3-2922-0595-031b-c818ed9d3951", "23614a5c-5a37-0622-b5c4-e130159581ce"]
                                        },
                                        xValue: 60,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-44-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".halia_grid_image._2",
                                            selectorGuids: ["b7f6e6d3-2922-0595-031b-c818ed9d3951", "634b722f-6045-9059-3fa7-5b1b3b54b9a9"]
                                        },
                                        xValue: -60,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x197633c8ea1
                    },
                    "a-49": {
                        id: "a-49",
                        title: "hali_arrive",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-49-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".halia_grid_image._1",
                                        selectorGuids: ["b7f6e6d3-2922-0595-031b-c818ed9d3951", "23614a5c-5a37-0622-b5c4-e130159581ce"]
                                    },
                                    xValue: -80,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-49-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".halia_grid_image._2",
                                        selectorGuids: ["b7f6e6d3-2922-0595-031b-c818ed9d3951", "634b722f-6045-9059-3fa7-5b1b3b54b9a9"]
                                    },
                                    xValue: 80,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-49-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inCirc",
                                    duration: 600,
                                    target: {
                                        selector: ".halia_grid_image._1",
                                        selectorGuids: ["b7f6e6d3-2922-0595-031b-c818ed9d3951", "23614a5c-5a37-0622-b5c4-e130159581ce"]
                                    },
                                    xValue: -60,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-49-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inCirc",
                                    duration: 600,
                                    target: {
                                        selector: ".halia_grid_image._2",
                                        selectorGuids: ["b7f6e6d3-2922-0595-031b-c818ed9d3951", "634b722f-6045-9059-3fa7-5b1b3b54b9a9"]
                                    },
                                    xValue: 60,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19764449f33
                    },
                    "a-56": {
                        id: "a-56",
                        title: "segmented_right_click",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-56-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        selector: ".segmented_bg.left",
                                        selectorGuids: ["c7cc9111-80d1-35ab-31ad-f90b851a8928", "6a1c304b-0364-3075-cbbb-1f0f9da2c5a8"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-56-n-6",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        selector: ".segmented_bg.left",
                                        selectorGuids: ["c7cc9111-80d1-35ab-31ad-f90b851a8928", "6a1c304b-0364-3075-cbbb-1f0f9da2c5a8"]
                                    },
                                    globalSwatchId: "--halia_blue",
                                    rValue: 59,
                                    bValue: 160,
                                    gValue: 61,
                                    aValue: 1
                                }
                            }, {
                                id: "a-56-n-7",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".segmented_button_text._1",
                                        selectorGuids: ["de70eb56-f9ee-478e-97f6-8bf491daca62", "156f1954-f114-73b4-3281-1a86f8d7f973"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-56-n-8",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 200,
                                    target: {
                                        selector: ".segmented_button_text._2",
                                        selectorGuids: ["de70eb56-f9ee-478e-97f6-8bf491daca62", "1e3f84b1-2939-1ab4-eb1e-a665dae86ca2"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-56-n-10",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 200,
                                    target: {
                                        selector: ".contribution_item.bullet-orange",
                                        selectorGuids: ["cf71e63a-58b9-cc7f-d43c-8d9681a40101", "608d8a9c-c4d0-de66-1ba9-65c9677b3d3d"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-56-n-9",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".contribution_item.bullet-blue",
                                        selectorGuids: ["cf71e63a-58b9-cc7f-d43c-8d9681a40101", "b738cd1d-f593-e47a-6e27-59f49a16dbaa"]
                                    },
                                    globalSwatchId: "--halia_blue_darker",
                                    rValue: 12,
                                    bValue: 100,
                                    gValue: 15,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19778a4e6f4
                    },
                    "a-55": {
                        id: "a-55",
                        title: "segmented_left_click",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-55-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".segmented_bg.left",
                                        selectorGuids: ["c7cc9111-80d1-35ab-31ad-f90b851a8928", "6a1c304b-0364-3075-cbbb-1f0f9da2c5a8"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-55-n-5",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".segmented_bg.left",
                                        selectorGuids: ["c7cc9111-80d1-35ab-31ad-f90b851a8928", "6a1c304b-0364-3075-cbbb-1f0f9da2c5a8"]
                                    },
                                    globalSwatchId: "--halia_blue",
                                    rValue: 59,
                                    bValue: 160,
                                    gValue: 61,
                                    aValue: 1
                                }
                            }, {
                                id: "a-55-n-6",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".segmented_button_text._1",
                                        selectorGuids: ["de70eb56-f9ee-478e-97f6-8bf491daca62", "156f1954-f114-73b4-3281-1a86f8d7f973"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-55-n-9",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 500,
                                    target: {
                                        selector: ".segmented_button_text._2",
                                        selectorGuids: ["de70eb56-f9ee-478e-97f6-8bf491daca62", "1e3f84b1-2939-1ab4-eb1e-a665dae86ca2"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-55-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        selector: ".segmented_bg.left",
                                        selectorGuids: ["c7cc9111-80d1-35ab-31ad-f90b851a8928", "6a1c304b-0364-3075-cbbb-1f0f9da2c5a8"]
                                    },
                                    xValue: 134,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-55-n-4",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        selector: ".segmented_bg.left",
                                        selectorGuids: ["c7cc9111-80d1-35ab-31ad-f90b851a8928", "6a1c304b-0364-3075-cbbb-1f0f9da2c5a8"]
                                    },
                                    globalSwatchId: "--halia_orange",
                                    rValue: 230,
                                    bValue: 67,
                                    gValue: 176,
                                    aValue: 1
                                }
                            }, {
                                id: "a-55-n-7",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 200,
                                    target: {
                                        selector: ".segmented_button_text._1",
                                        selectorGuids: ["de70eb56-f9ee-478e-97f6-8bf491daca62", "156f1954-f114-73b4-3281-1a86f8d7f973"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-55-n-8",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 200,
                                    target: {
                                        selector: ".segmented_button_text._2",
                                        selectorGuids: ["de70eb56-f9ee-478e-97f6-8bf491daca62", "1e3f84b1-2939-1ab4-eb1e-a665dae86ca2"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-55-n-11",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 200,
                                    target: {
                                        selector: ".contribution_item.bullet-blue",
                                        selectorGuids: ["cf71e63a-58b9-cc7f-d43c-8d9681a40101", "b738cd1d-f593-e47a-6e27-59f49a16dbaa"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-55-n-10",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 200,
                                    target: {
                                        selector: ".contribution_item.bullet-orange",
                                        selectorGuids: ["cf71e63a-58b9-cc7f-d43c-8d9681a40101", "608d8a9c-c4d0-de66-1ba9-65c9677b3d3d"]
                                    },
                                    globalSwatchId: "--halia_orange_darker",
                                    rValue: 200,
                                    bValue: 24,
                                    gValue: 140,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19778a4e6f4
                    },
                    "a-60": {
                        id: "a-60",
                        title: "arrow_head_tail",
                        continuousParameterGroups: [{
                            id: "a-60-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-60-n-7",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".down_arrow_head",
                                            selectorGuids: ["9edba20c-228e-fb23-64cd-d427bf894c42"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-60-n-8",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".down_arrow_tail",
                                            selectorGuids: ["c347eaec-8c43-9710-b658-2c1148ac6873"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 10,
                                actionItems: [{
                                    id: "a-60-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".down_arrow_head",
                                            selectorGuids: ["9edba20c-228e-fb23-64cd-d427bf894c42"]
                                        },
                                        xValue: null,
                                        yValue: 0,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-60-n-3",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".down_arrow_tail",
                                            selectorGuids: ["c347eaec-8c43-9710-b658-2c1148ac6873"]
                                        },
                                        heightValue: 90,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-60-n-5",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".down_arrow_head",
                                            selectorGuids: ["9edba20c-228e-fb23-64cd-d427bf894c42"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-60-n-6",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".down_arrow_tail",
                                            selectorGuids: ["c347eaec-8c43-9710-b658-2c1148ac6873"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 60,
                                actionItems: [{
                                    id: "a-60-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".down_arrow_head",
                                            selectorGuids: ["9edba20c-228e-fb23-64cd-d427bf894c42"]
                                        },
                                        yValue: 400,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-60-n-4",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".down_arrow_tail",
                                            selectorGuids: ["c347eaec-8c43-9710-b658-2c1148ac6873"]
                                        },
                                        heightValue: 490,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: !1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x1977d881193
                    },
                    "a-63": {
                        id: "a-63",
                        title: "nextsection_hover",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-63-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".next_section_background_img",
                                        selectorGuids: ["6ad2f52a-d760-f231-2c41-dd43255f37dc"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-63-n-4",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".next_section_background_img",
                                        selectorGuids: ["6ad2f52a-d760-f231-2c41-dd43255f37dc"]
                                    },
                                    filters: [{
                                        type: "brightness",
                                        filterId: "c4b0",
                                        value: 100,
                                        unit: "%"
                                    }]
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-63-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".next_section_background_img",
                                        selectorGuids: ["6ad2f52a-d760-f231-2c41-dd43255f37dc"]
                                    },
                                    xValue: 1.03,
                                    yValue: 1.03,
                                    locked: !0
                                }
                            }, {
                                id: "a-63-n-3",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".next_section_background_img",
                                        selectorGuids: ["6ad2f52a-d760-f231-2c41-dd43255f37dc"]
                                    },
                                    filters: [{
                                        type: "brightness",
                                        filterId: "c4b0",
                                        value: 110,
                                        unit: "%"
                                    }]
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197a1ba7fea
                    },
                    "a-64": {
                        id: "a-64",
                        title: "nextsection_hover out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-64-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".next_section_background_img",
                                        selectorGuids: ["6ad2f52a-d760-f231-2c41-dd43255f37dc"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-64-n-2",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".next_section_background_img",
                                        selectorGuids: ["6ad2f52a-d760-f231-2c41-dd43255f37dc"]
                                    },
                                    filters: [{
                                        type: "brightness",
                                        filterId: "c672",
                                        value: 100,
                                        unit: "%"
                                    }]
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197a1ba7fea
                    },
                    "a-65": {
                        id: "a-65",
                        title: "hover_project_image",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-65-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project_overview_images",
                                        selectorGuids: ["5e1fc826-970f-1657-576f-604462a1141f"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-65-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project_overview_images",
                                        selectorGuids: ["5e1fc826-970f-1657-576f-604462a1141f"]
                                    },
                                    xValue: 1.02,
                                    yValue: 1.02,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197a1ce2b9d
                    },
                    "a-66": {
                        id: "a-66",
                        title: "hover_project_image out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-66-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project_overview_images",
                                        selectorGuids: ["5e1fc826-970f-1657-576f-604462a1141f"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197a1ce2b9d
                    },
                    "a-67": {
                        id: "a-67",
                        title: "hover_project_image 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-67-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".ds_image",
                                        selectorGuids: ["4552ae60-e13f-95d2-8cf5-fce4f908a85b"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-67-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".ds_image",
                                        selectorGuids: ["4552ae60-e13f-95d2-8cf5-fce4f908a85b"]
                                    },
                                    xValue: 1.02,
                                    yValue: 1.02,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197a1ce2b9d
                    },
                    "a-68": {
                        id: "a-68",
                        title: "hover_project_image out 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-68-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".ds_image",
                                        selectorGuids: ["4552ae60-e13f-95d2-8cf5-fce4f908a85b"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197a1ce2b9d
                    },
                    "a-69": {
                        id: "a-69",
                        title: "Projectbutton simple hover 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-69-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".project-button.nonhoverable",
                                        selectorGuids: ["35b0f9c7-d1e3-b262-01ff-36c8af5f99ab", "55566aa3-8374-afd5-f612-595dd0b0caef"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 34,
                                    bValue: 104,
                                    gValue: 21,
                                    aValue: 1
                                }
                            }, {
                                id: "a-69-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-text-wrap.nonhoverable",
                                        selectorGuids: ["d972ddcc-5ad9-af8f-793c-bc59ddfbf2c7", "ab71da7f-e7eb-5c83-2277-f35da175b19f"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-69-n-3",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-4-background.nonhoverable",
                                        selectorGuids: ["b3fd92c3-7336-758a-e279-7ed12b3b4300", "dcbc9ea7-8d1b-c511-d579-718143828bdd"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 89,
                                    bValue: 193,
                                    gValue: 70,
                                    aValue: 1
                                }
                            }, {
                                id: "a-69-n-4",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-4-background.nonhoverable",
                                        selectorGuids: ["b3fd92c3-7336-758a-e279-7ed12b3b4300", "dcbc9ea7-8d1b-c511-d579-718143828bdd"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-69-n-5",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".project-button.nonhoverable",
                                        selectorGuids: ["35b0f9c7-d1e3-b262-01ff-36c8af5f99ab", "55566aa3-8374-afd5-f612-595dd0b0caef"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 89,
                                    bValue: 193,
                                    gValue: 70,
                                    aValue: 1
                                }
                            }, {
                                id: "a-69-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "bouncePast",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".downrightarrow-button.nonhoverable",
                                        selectorGuids: ["81ac5c9e-fa25-146d-e781-e4ced04a1458", "1e35c2ca-1c43-ffb8-3a40-ea6d1dcaa6af"]
                                    },
                                    xValue: 2,
                                    yValue: 2,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19762ee10a9
                    },
                    "a-70": {
                        id: "a-70",
                        title: "Projectbutton simple hover out 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-70-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 300,
                                    target: {
                                        selector: ".project-button.nonhoverable",
                                        selectorGuids: ["35b0f9c7-d1e3-b262-01ff-36c8af5f99ab", "55566aa3-8374-afd5-f612-595dd0b0caef"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 34,
                                    bValue: 104,
                                    gValue: 21,
                                    aValue: 1
                                }
                            }, {
                                id: "a-70-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".downrightarrow-button.nonhoverable",
                                        selectorGuids: ["81ac5c9e-fa25-146d-e781-e4ced04a1458", "1e35c2ca-1c43-ffb8-3a40-ea6d1dcaa6af"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19762ee10a9
                    },
                    "a-71": {
                        id: "a-71",
                        title: "Appear_from_left",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-71-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".white_overlay",
                                        selectorGuids: ["14096bca-a21f-5d81-2a6f-2de2d275519e"]
                                    },
                                    xValue: 1,
                                    yValue: null,
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-71-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".white_overlay",
                                        selectorGuids: ["14096bca-a21f-5d81-2a6f-2de2d275519e"]
                                    },
                                    xValue: 0,
                                    yValue: null,
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197ac3ebe94
                    },
                    "a-72": {
                        id: "a-72",
                        title: "load_white_overlay",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-72-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "6854192ba065fb68cd46fd5a|c95acdf6-924c-a488-a24c-ade63c46e867"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c65acdd1
                    },
                    "a-73": {
                        id: "a-73",
                        title: "swirl_rotate 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-73-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".in_text_symbols.swirl",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "b6097f8e-ce7b-8ed5-0e33-fdecb549e132"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-73-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 500,
                                    target: {
                                        selector: ".in_text_symbols.swirl",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "b6097f8e-ce7b-8ed5-0e33-fdecb549e132"]
                                    },
                                    zValue: 720,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-73-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 500,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        selector: ".in_text_symbols.swirl",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "b6097f8e-ce7b-8ed5-0e33-fdecb549e132"]
                                    },
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "deg",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197692a48b1
                    },
                    "a-80": {
                        id: "a-80",
                        title: "bubbles_burst 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-80-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-80-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-80-n-9",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-80-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 400,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    xValue: -1,
                                    yValue: -3,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-80-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 400,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    xValue: 4,
                                    yValue: -6,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-80-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 600,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    xValue: 0,
                                    yValue: -10,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-80-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 600,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    value: .3,
                                    unit: ""
                                }
                            }, {
                                id: "a-80-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 500,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-80-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 50,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-80-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inSine",
                                    duration: 50,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-80-n-13",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutSine",
                                    duration: 100,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-80-n-11",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 50,
                                    easing: "",
                                    duration: 50,
                                    target: {
                                        selector: ".in_text_symbols.bubble",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "f5d900b7-5693-a0b3-b638-1f72bb35ebfb"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197693017fe
                    },
                    "a-75": {
                        id: "a-75",
                        title: "knot_squeeze 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-75-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".in_text_symbols.knot",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "89049bd8-291e-2118-a5af-48d6c038750a"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-75-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".in_text_symbols.knot",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "89049bd8-291e-2118-a5af-48d6c038750a"]
                                    },
                                    xValue: 1.1,
                                    yValue: .8,
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-75-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".in_text_symbols.knot",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "89049bd8-291e-2118-a5af-48d6c038750a"]
                                    },
                                    xValue: .8,
                                    yValue: 1.1,
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-75-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 300,
                                    target: {
                                        selector: ".in_text_symbols.knot",
                                        selectorGuids: ["f938fc48-85c6-5d92-7bb5-61382426312e", "89049bd8-291e-2118-a5af-48d6c038750a"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1976932194a
                    },
                    "a-76": {
                        id: "a-76",
                        title: "image_change",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-76-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".case_image_absolute",
                                        selectorGuids: ["1398def2-6531-fb31-489e-410e00d322f9"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-76-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".case_image_absolute",
                                        selectorGuids: ["1398def2-6531-fb31-489e-410e00d322f9"]
                                    },
                                    value: .4,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197cb8c3de7
                    },
                    "a-77": {
                        id: "a-77",
                        title: "image_change 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-77-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".case_image_absolute",
                                        selectorGuids: ["1398def2-6531-fb31-489e-410e00d322f9"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197cb8c3de7
                    },
                    "a-78": {
                        id: "a-78",
                        title: "Projectbutton simple hover 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-78-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".project-button.nonhoverable",
                                        selectorGuids: ["35b0f9c7-d1e3-b262-01ff-36c8af5f99ab", "55566aa3-8374-afd5-f612-595dd0b0caef"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 34,
                                    bValue: 104,
                                    gValue: 21,
                                    aValue: 1
                                }
                            }, {
                                id: "a-78-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".projectbutton-text-wrap.nonhoverable",
                                        selectorGuids: ["d972ddcc-5ad9-af8f-793c-bc59ddfbf2c7", "ab71da7f-e7eb-5c83-2277-f35da175b19f"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-78-n-3",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-4-background.nonhoverable",
                                        selectorGuids: ["b3fd92c3-7336-758a-e279-7ed12b3b4300", "dcbc9ea7-8d1b-c511-d579-718143828bdd"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 89,
                                    bValue: 193,
                                    gValue: 70,
                                    aValue: 1
                                }
                            }, {
                                id: "a-78-n-4",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-4-background.nonhoverable",
                                        selectorGuids: ["b3fd92c3-7336-758a-e279-7ed12b3b4300", "dcbc9ea7-8d1b-c511-d579-718143828bdd"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-78-n-5",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".project-button.nonhoverable",
                                        selectorGuids: ["35b0f9c7-d1e3-b262-01ff-36c8af5f99ab", "55566aa3-8374-afd5-f612-595dd0b0caef"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 89,
                                    bValue: 193,
                                    gValue: 70,
                                    aValue: 1
                                }
                            }, {
                                id: "a-78-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "bouncePast",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".downrightarrow-button.nonhoverable",
                                        selectorGuids: ["81ac5c9e-fa25-146d-e781-e4ced04a1458", "1e35c2ca-1c43-ffb8-3a40-ea6d1dcaa6af"]
                                    },
                                    xValue: 2,
                                    yValue: 2,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19762ee10a9
                    },
                    "a-79": {
                        id: "a-79",
                        title: "Projectbutton simple hover out 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-79-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 300,
                                    target: {
                                        selector: ".project-button.nonhoverable",
                                        selectorGuids: ["35b0f9c7-d1e3-b262-01ff-36c8af5f99ab", "55566aa3-8374-afd5-f612-595dd0b0caef"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 34,
                                    bValue: 104,
                                    gValue: 21,
                                    aValue: 1
                                }
                            }, {
                                id: "a-79-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".downrightarrow-button.nonhoverable",
                                        selectorGuids: ["81ac5c9e-fa25-146d-e781-e4ced04a1458", "1e35c2ca-1c43-ffb8-3a40-ea6d1dcaa6af"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19762ee10a9
                    },
                    "a-10": {
                        id: "a-10",
                        title: "Underline out bottom",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-10-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline_2.black",
                                        selectorGuids: ["ff7bd955-eb48-9ba1-3385-4a476fc51ede", "6ebb061a-5d92-e9c3-2ba3-6ee986bb0e26"]
                                    },
                                    xValue: 1,
                                    yValue: null,
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-10-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 10,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline",
                                        selectorGuids: ["3ec2f162-cbc7-924c-9b77-b02aa3132a52"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-10-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 10,
                                    target: {
                                        selector: ".text_underline_2_container",
                                        selectorGuids: ["9cbc9bde-7aa5-0a86-ac56-4370cedc53a9"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-10-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline_2.black",
                                        selectorGuids: ["ff7bd955-eb48-9ba1-3385-4a476fc51ede", "6ebb061a-5d92-e9c3-2ba3-6ee986bb0e26"]
                                    },
                                    xValue: 0,
                                    yValue: null,
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-10-n-9",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 10,
                                    target: {
                                        selector: ".text_underline",
                                        selectorGuids: ["3ec2f162-cbc7-924c-9b77-b02aa3132a52"]
                                    },
                                    xValue: 0,
                                    yValue: null,
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19734ca1096
                    },
                    "a-81": {
                        id: "a-81",
                        title: "load_white_overlay 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-81-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "68694a3edde967853f185e04|c95acdf6-924c-a488-a24c-ade63c46e867"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c65acdd1
                    },
                    "a-82": {
                        id: "a-82",
                        title: "show_work",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-82-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".outside_wrapper",
                                        selectorGuids: ["fc298abc-d15f-1a7b-4e51-70bfc65720bd"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-82-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".outside_p_wrapper",
                                        selectorGuids: ["c3470298-6310-a3a0-9d7b-8266dc96c456"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-82-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".outside_p_wrapper",
                                        selectorGuids: ["c3470298-6310-a3a0-9d7b-8266dc96c456"]
                                    },
                                    xValue: -8,
                                    yValue: 8,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-82-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".outside_wrapper",
                                        selectorGuids: ["fc298abc-d15f-1a7b-4e51-70bfc65720bd"]
                                    },
                                    xValue: .97,
                                    yValue: .97,
                                    locked: !0
                                }
                            }, {
                                id: "a-82-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".outside_p_wrapper",
                                        selectorGuids: ["c3470298-6310-a3a0-9d7b-8266dc96c456"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-82-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".outside_p_wrapper",
                                        selectorGuids: ["c3470298-6310-a3a0-9d7b-8266dc96c456"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197ef4006ca
                    },
                    "a-83": {
                        id: "a-83",
                        title: "show_work 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-83-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".outside_wrapper",
                                        selectorGuids: ["fc298abc-d15f-1a7b-4e51-70bfc65720bd"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-83-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".outside_p_wrapper",
                                        selectorGuids: ["c3470298-6310-a3a0-9d7b-8266dc96c456"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197ef4006ca
                    },
                    "a-97": {
                        id: "a-97",
                        title: "homepage zoom out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-97-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".homepage_test_button_wrap",
                                        selectorGuids: ["caf8a788-25c5-388a-bd36-50d35ea002e4"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-97-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".homepage_test_dimmer",
                                        selectorGuids: ["b1dc63c5-ae5d-9527-1531-88854ad16743"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-97-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".homepage_test_image",
                                        selectorGuids: ["df7d4787-d03c-3177-6743-5ef62eabecd0"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-97-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".homepage_test_button_wrap",
                                        selectorGuids: ["caf8a788-25c5-388a-bd36-50d35ea002e4"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-97-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".homepage_test_dimmer",
                                        selectorGuids: ["b1dc63c5-ae5d-9527-1531-88854ad16743"]
                                    },
                                    value: .25,
                                    unit: ""
                                }
                            }, {
                                id: "a-97-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".homepage_test_image",
                                        selectorGuids: ["df7d4787-d03c-3177-6743-5ef62eabecd0"]
                                    },
                                    xValue: 1.05,
                                    yValue: 1.05,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197ef4006ca
                    },
                    "a-85": {
                        id: "a-85",
                        title: "homepage zoom out 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-85-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".homepage_test_image",
                                        selectorGuids: ["df7d4787-d03c-3177-6743-5ef62eabecd0"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-85-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".homepage_test_button_wrap",
                                        selectorGuids: ["caf8a788-25c5-388a-bd36-50d35ea002e4"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-85-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeOut",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".homepage_test_dimmer",
                                        selectorGuids: ["b1dc63c5-ae5d-9527-1531-88854ad16743"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197ef4006ca
                    },
                    "a-86": {
                        id: "a-86",
                        title: "outside_mouseclick",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-86-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 100,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".outside_wrapper",
                                        selectorGuids: ["fc298abc-d15f-1a7b-4e51-70bfc65720bd"]
                                    },
                                    xValue: .96,
                                    yValue: .96,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-86-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 100,
                                    easing: "easeOut",
                                    duration: 100,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".outside_wrapper",
                                        selectorGuids: ["fc298abc-d15f-1a7b-4e51-70bfc65720bd"]
                                    },
                                    xValue: .98,
                                    yValue: .98,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197efe9e930
                    },
                    "a-91": {
                        id: "a-91",
                        title: "load_white_overlay 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-91-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "687126629b0a7a2b37b2f823|c95acdf6-924c-a488-a24c-ade63c46e867"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c65acdd1
                    },
                    "a-92": {
                        id: "a-92",
                        title: "line_divider_scroll",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-92-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".line_divider.black",
                                        selectorGuids: ["385e2d4a-6663-6cc1-ea27-c025caafb1c6", "a719c8d7-a111-5ec4-8072-9004770588da"]
                                    },
                                    xValue: 0,
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-92-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 400,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".line_divider.black",
                                        selectorGuids: ["385e2d4a-6663-6cc1-ea27-c025caafb1c6", "a719c8d7-a111-5ec4-8072-9004770588da"]
                                    },
                                    xValue: 1,
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197fa0f99b6
                    },
                    "a-94": {
                        id: "a-94",
                        title: "outside_mouseclick mobile",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-94-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 100,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".outside_wrapper-mobile",
                                        selectorGuids: ["6aa65a9c-f80e-a0c9-f4f8-2acf7bb469b9"]
                                    },
                                    xValue: .96,
                                    yValue: .96,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-94-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 100,
                                    easing: "easeOut",
                                    duration: 100,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".outside_wrapper-mobile",
                                        selectorGuids: ["6aa65a9c-f80e-a0c9-f4f8-2acf7bb469b9"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197efe9e930
                    },
                    "a-95": {
                        id: "a-95",
                        title: "outside_mouseclick mobileextra",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-95-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "easeIn",
                                    duration: 100,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".outside_wrapper-mobileextra",
                                        selectorGuids: ["bc495bf1-a11b-bfdd-4f5e-3bfc87681545"]
                                    },
                                    xValue: .96,
                                    yValue: .96,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-95-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 100,
                                    easing: "easeOut",
                                    duration: 100,
                                    target: {
                                        useEventTarget: "PARENT",
                                        selector: ".outside_wrapper-mobileextra",
                                        selectorGuids: ["bc495bf1-a11b-bfdd-4f5e-3bfc87681545"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197efe9e930
                    },
                    "a-96": {
                        id: "a-96",
                        title: "load_white_overlay 4",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-96-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "687a53eecde4db15b9d1472c|c95acdf6-924c-a488-a24c-ade63c46e867"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c65acdd1
                    },
                    "a-98": {
                        id: "a-98",
                        title: "Underline in TEST",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-98-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline_2_container",
                                        selectorGuids: ["9cbc9bde-7aa5-0a86-ac56-4370cedc53a9"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-98-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline",
                                        selectorGuids: ["3ec2f162-cbc7-924c-9b77-b02aa3132a52"]
                                    },
                                    xValue: 0,
                                    yValue: null,
                                    locked: !1
                                }
                            }, {
                                id: "a-98-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline",
                                        selectorGuids: ["3ec2f162-cbc7-924c-9b77-b02aa3132a52"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-98-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 10,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline",
                                        selectorGuids: ["3ec2f162-cbc7-924c-9b77-b02aa3132a52"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-98-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline",
                                        selectorGuids: ["3ec2f162-cbc7-924c-9b77-b02aa3132a52"]
                                    },
                                    xValue: 1,
                                    yValue: null,
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-98-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 10,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline_2_container",
                                        selectorGuids: ["9cbc9bde-7aa5-0a86-ac56-4370cedc53a9"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-98-n-9",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 10,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline_2",
                                        selectorGuids: ["ff7bd955-eb48-9ba1-3385-4a476fc51ede"]
                                    },
                                    xValue: 1,
                                    yValue: null,
                                    locked: !1
                                }
                            }, {
                                id: "a-98-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 10,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline_2",
                                        selectorGuids: ["ff7bd955-eb48-9ba1-3385-4a476fc51ede"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19734c79d65
                    },
                    "a-99": {
                        id: "a-99",
                        title: "Underline out TEST",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-99-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline_2",
                                        selectorGuids: ["ff7bd955-eb48-9ba1-3385-4a476fc51ede"]
                                    },
                                    xValue: 1,
                                    yValue: null,
                                    locked: !1
                                }
                            }, {
                                id: "a-99-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline_2_container",
                                        selectorGuids: ["9cbc9bde-7aa5-0a86-ac56-4370cedc53a9"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-99-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 10,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline_2_container",
                                        selectorGuids: ["9cbc9bde-7aa5-0a86-ac56-4370cedc53a9"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-99-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 10,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline",
                                        selectorGuids: ["3ec2f162-cbc7-924c-9b77-b02aa3132a52"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-99-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuad",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline_2",
                                        selectorGuids: ["ff7bd955-eb48-9ba1-3385-4a476fc51ede"]
                                    },
                                    xValue: 0,
                                    yValue: null,
                                    locked: !1
                                }
                            }, {
                                id: "a-99-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 10,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".text_underline",
                                        selectorGuids: ["3ec2f162-cbc7-924c-9b77-b02aa3132a52"]
                                    },
                                    xValue: 0,
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19734ca1096
                    }
                },
                site: {
                    mediaQueries: [{
                        key: "main",
                        min: 992,
                        max: 1e4
                    }, {
                        key: "medium",
                        min: 768,
                        max: 991
                    }, {
                        key: "small",
                        min: 480,
                        max: 767
                    }, {
                        key: "tiny",
                        min: 0,
                        max: 479
                    }]
                }
            })
        }
    }
]);
