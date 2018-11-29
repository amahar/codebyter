/*!
 * GVP 4.1.26
 * 
 *  Updated Date 04-26-2017 
 * 
 *  GENERATED FILE! DO NOT MODIFY WITHOUT THE EXPRESSED CONSENT OF VIDEO SOLUTIONS DEVELOPMENT! CONTACT CH112H 
 * 
 *  Global Video Player 
 *  AT&T - Rich Media Dev Team 
 * 
 * 
 */
! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    (function(e) {
        var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(323);
        window.gvp || (window.gvp = function(e, t) {
            t && "function" == typeof t && new s.LinkedDataSchema(e, s.LinkedDataSchema.VIDEO, function(n) {
                t('<att-gvp video="' + e + '">' + n + "</att-gvp>")
            })
        }), window.gvp && (window.gvp.version ? window.gvp.version = window.gvp.version + ":" + i.version : window.gvp.version = i.version), n(3), n(47);
        var o = n(324),
            a = n(354),
            s = n(353),
            u = function(t) {
                function n() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r(n, t), n.prototype.attachedCallback = function() {
                    var t = this,
                        n = this.getAttribute("asset") || this.getAttribute("video") || this.getAttribute("audio");
                    !this.gvp && n && n.indexOf("{") === -1 && (this.gvp = new o.Gvp(this)), e(function() {
                        t.gvp && t.gvp.attached()
                    })
                }, n.prototype.attributeChangedCallback = function(e, t, n) {
                    this.gvp && ("tier" === e ? this.gvp.setTier(n) : "", "target" !== e && "fullscreen" !== e && "autoplay" !== e || this.gvp.setPorperties(e, n)), "asset" !== e && "video" !== e && "audio" !== e || (this.gvp ? this.gvp.setId(n) : this.gvp = new o.Gvp(this))
                }, n
            }(HTMLElement),
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r(t, e), t.prototype.attachedCallback = function() {
                    var e = this.getAttribute("asset") || this.getAttribute("video") || this.getAttribute("audio");
                    e && e.indexOf("{") === -1 && (this.gvpData = new a.MetadataReplace(this), this.gvpData.id = e)
                }, t.prototype.attributeChangedCallback = function(e, t, n) {
                    if ("asset" === e || "video" === e || "audio" === e) {
                        var r = this.getAttribute("asset") || this.getAttribute("video") || this.getAttribute("audio");
                        this.gvpData ? this.gvpData.id = r : (this.gvpData = new a.MetadataReplace(this), this.gvpData.id = r)
                    }
                }, t
            }(HTMLElement);
        try {
            document.registerElement("att-gvp", u), document.registerElement("gvp-data", c)
        } catch (e) {}
    }).call(t, n(42).setImmediate)
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {
            this.__callbacks = {}
        }
        return e.prototype.subscribe = function(e, t) {
            this.__callbacks[e] || (this.__callbacks[e] = new Array), this.__callbacks[e].push(t)
        }, e.prototype.emit = function(e, t) {
            if (this.__callbacks[e])
                for (var n = 0; n < this.__callbacks[e].length; n++) this.__callbacks[e][n](t)
        }, e
    }();
    t.Base = n
}, , function(e, t) {
    ! function(e, t, n, r) {
        "use strict";

        function i(e, t) {
            for (var n = 0, r = e.length; n < r; n++) v(e[n], t)
        }

        function o(e) {
            for (var t, n = 0, r = e.length; n < r; n++) t = e[n], C(t, q[s(t)])
        }

        function a(e) {
            return function(t) {
                re(t) && (v(t, e), i(t.querySelectorAll(V), e))
            }
        }

        function s(e) {
            var t = e.getAttribute("is"),
                n = e.nodeName.toUpperCase(),
                r = U.call(B, t ? L + t.toUpperCase() : N + n);
            return t && -1 < r && !u(n, t) ? -1 : r
        }

        function u(e, t) {
            return -1 < V.indexOf(e + '[is="' + t + '"]')
        }

        function c(e) {
            var t = e.currentTarget,
                n = e.attrChange,
                r = e.attrName,
                i = e.target;
            ge && (!i || i === t) && t.attributeChangedCallback && "style" !== r && e.prevValue !== e.newValue && t.attributeChangedCallback(r, n === e[D] ? null : e.prevValue, n === e[S] ? null : e.newValue)
        }

        function l(e) {
            var t = a(e);
            return function(e) {
                _.push(t, e.target)
            }
        }

        function p(e) {
            he && (he = !1, e.currentTarget.removeEventListener(P, p)), i((e.target || t).querySelectorAll(V), e.detail === A ? A : E), ne && h()
        }

        function f(e, t) {
            var n = this;
            ae.call(n, e, t), m.call(n, {
                target: n
            })
        }

        function d(e, t) {
            Z(e, t), x ? x.observe(e, ce) : (de && (e.setAttribute = f, e[T] = b(e), e.addEventListener(I, m)), e.addEventListener(j, c)), e.createdCallback && ge && (e.created = !0, e.createdCallback(), e.created = !1)
        }

        function h() {
            for (var e, t = 0, n = ie.length; t < n; t++) e = ie[t], F.contains(e) || (n--, ie.splice(t--, 1), v(e, A))
        }

        function g(e) {
            throw new Error("A " + e + " type is already registered")
        }

        function v(e, t) {
            var n, r = s(e); - 1 < r && (w(e, q[r]), r = 0, t !== E || e[E] ? t === A && !e[A] && (e[E] = !1, e[A] = !0, r = 1) : (e[A] = !1, e[E] = !0, r = 1, ne && U.call(ie, e) < 0 && ie.push(e)), r && (n = e[t + "Callback"]) && n.call(e))
        }
        if (!(r in t)) {
            var _, m, y, b, x, w, C, T = "__" + r + (1e5 * Math.random() >> 0),
                E = "attached",
                A = "detached",
                O = "extends",
                D = "ADDITION",
                k = "MODIFICATION",
                S = "REMOVAL",
                j = "DOMAttrModified",
                P = "DOMContentLoaded",
                I = "DOMSubtreeModified",
                N = "<",
                L = "=",
                R = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
                M = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
                B = [],
                q = [],
                V = "",
                F = t.documentElement,
                U = B.indexOf || function(e) {
                    for (var t = this.length; t-- && this[t] !== e;);
                    return t
                },
                z = n.prototype,
                H = z.hasOwnProperty,
                W = z.isPrototypeOf,
                G = n.defineProperty,
                K = n.getOwnPropertyDescriptor,
                $ = n.getOwnPropertyNames,
                Q = n.getPrototypeOf,
                Y = n.setPrototypeOf,
                J = !!n.__proto__,
                X = n.create || function e(t) {
                    return t ? (e.prototype = t, new e) : this
                },
                Z = Y || (J ? function(e, t) {
                    return e.__proto__ = t, e
                } : $ && K ? function() {
                    function e(e, t) {
                        for (var n, r = $(t), i = 0, o = r.length; i < o; i++) n = r[i], H.call(e, n) || G(e, n, K(t, n))
                    }
                    return function(t, n) {
                        do e(t, n); while ((n = Q(n)) && !W.call(n, t));
                        return t
                    }
                }() : function(e, t) {
                    for (var n in t) e[n] = t[n];
                    return e
                }),
                ee = e.MutationObserver || e.WebKitMutationObserver,
                te = (e.HTMLElement || e.Element || e.Node).prototype,
                ne = !W.call(te, F),
                re = ne ? function(e) {
                    return 1 === e.nodeType
                } : function(e) {
                    return W.call(te, e)
                },
                ie = ne && [],
                oe = te.cloneNode,
                ae = te.setAttribute,
                se = te.removeAttribute,
                ue = t.createElement,
                ce = ee && {
                    attributes: !0,
                    characterData: !0,
                    attributeOldValue: !0
                },
                le = ee || function(e) {
                    de = !1, F.removeEventListener(j, le)
                },
                pe = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || function(e) {
                    setTimeout(e, 10)
                },
                fe = !1,
                de = !0,
                he = !0,
                ge = !0;
            Y || J ? (w = function(e, t) {
                W.call(t, e) || d(e, t)
            }, C = d) : (w = function(e, t) {
                e[T] || (e[T] = n(!0), d(e, t))
            }, C = w), ne ? (de = !1, function() {
                var e = K(te, "addEventListener"),
                    t = e.value,
                    n = function(e) {
                        var t = new CustomEvent(j, {
                            bubbles: !0
                        });
                        t.attrName = e, t.prevValue = this.getAttribute(e), t.newValue = null, t[S] = t.attrChange = 2, se.call(this, e), this.dispatchEvent(t)
                    },
                    r = function(e, t) {
                        var n = this.hasAttribute(e),
                            r = n && this.getAttribute(e),
                            i = new CustomEvent(j, {
                                bubbles: !0
                            });
                        ae.call(this, e, t), i.attrName = e, i.prevValue = n ? r : null, i.newValue = t, n ? i[k] = i.attrChange = 1 : i[D] = i.attrChange = 0, this.dispatchEvent(i)
                    },
                    i = function(e) {
                        var t, n = e.currentTarget,
                            r = n[T],
                            i = e.propertyName;
                        r.hasOwnProperty(i) && (r = r[i], t = new CustomEvent(j, {
                            bubbles: !0
                        }), t.attrName = r.name, t.prevValue = r.value || null, t.newValue = r.value = n[i] || null, null == t.prevValue ? t[D] = t.attrChange = 0 : t[k] = t.attrChange = 1, n.dispatchEvent(t))
                    };
                e.value = function(e, o, a) {
                    e === j && this.attributeChangedCallback && this.setAttribute !== r && (this[T] = {
                        className: {
                            name: "class",
                            value: this.className
                        }
                    }, this.setAttribute = r, this.removeAttribute = n, t.call(this, "propertychange", i)), t.call(this, e, o, a)
                }, G(te, "addEventListener", e)
            }()) : ee || (F.addEventListener(j, le), F.setAttribute(T, 1), F.removeAttribute(T), de && (m = function(e) {
                var t, n, r, i = this;
                if (i === e.target) {
                    t = i[T], i[T] = n = b(i);
                    for (r in n) {
                        if (!(r in t)) return y(0, i, r, t[r], n[r], D);
                        if (n[r] !== t[r]) return y(1, i, r, t[r], n[r], k)
                    }
                    for (r in t)
                        if (!(r in n)) return y(2, i, r, t[r], n[r], S)
                }
            }, y = function(e, t, n, r, i, o) {
                var a = {
                    attrChange: e,
                    currentTarget: t,
                    attrName: n,
                    prevValue: r,
                    newValue: i
                };
                a[o] = e, c(a)
            }, b = function(e) {
                for (var t, n, r = {}, i = e.attributes, o = 0, a = i.length; o < a; o++) t = i[o], n = t.name, "setAttribute" !== n && (r[n] = t.value);
                return r
            })), t[r] = function(e, n) {
                if (r = e.toUpperCase(), fe || (fe = !0, ee ? (x = function(e, t) {
                        function n(e, t) {
                            for (var n = 0, r = e.length; n < r; t(e[n++]));
                        }
                        return new ee(function(r) {
                            for (var i, o, a, s = 0, u = r.length; s < u; s++) i = r[s], "childList" === i.type ? (n(i.addedNodes, e), n(i.removedNodes, t)) : (o = i.target, ge && o.attributeChangedCallback && "style" !== i.attributeName && (a = o.getAttribute(i.attributeName), a !== i.oldValue && o.attributeChangedCallback(i.attributeName, i.oldValue, a)))
                        })
                    }(a(E), a(A)), x.observe(t, {
                        childList: !0,
                        subtree: !0
                    })) : (_ = [], pe(function e() {
                        for (; _.length;) _.shift().call(null, _.shift());
                        pe(e)
                    }), t.addEventListener("DOMNodeInserted", l(E)), t.addEventListener("DOMNodeRemoved", l(A))), t.addEventListener(P, p), t.addEventListener("readystatechange", p), t.createElement = function(e, n) {
                        var r = ue.apply(t, arguments),
                            i = "" + e,
                            o = U.call(B, (n ? L : N) + (n || i).toUpperCase()),
                            a = -1 < o;
                        return n && (r.setAttribute("is", n = n.toLowerCase()), a && (a = u(i.toUpperCase(), n))), ge = !t.createElement.innerHTMLHelper, a && C(r, q[o]), r
                    }, te.cloneNode = function(e) {
                        var t = oe.call(this, !!e),
                            n = s(t);
                        return -1 < n && C(t, q[n]), e && o(t.querySelectorAll(V)), t
                    }), -2 < U.call(B, L + r) + U.call(B, N + r) && g(e), !R.test(r) || -1 < U.call(M, r)) throw new Error("The type " + e + " is invalid");
                var r, c, f = function() {
                        return h ? t.createElement(v, r) : t.createElement(v)
                    },
                    d = n || z,
                    h = H.call(d, O),
                    v = h ? n[O].toUpperCase() : r;
                return h && -1 < U.call(B, N + v) && g(v), c = B.push((h ? L : N) + r) - 1, V = V.concat(V.length ? "," : "", h ? v + '[is="' + e.toLowerCase() + '"]' : v), f.prototype = q[c] = H.call(d, "prototype") ? d.prototype : X(te), i(t.querySelectorAll(V), E), f
            }
        }
    }(window, document, Object, "registerElement")
}, , function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(6),
        o = n(41);
    n(47);
    var a = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n._target = null, n._container = null, t && (n.target = t), n
        }
        return r(t, e), Object.defineProperty(t.prototype, "target", {
            set: function(e) {
                this._target = e, this.initialize(), this.render()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "container", {
            set: function(e) {
                this.virtual = e, this._container = e, this.render()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "html", {
            get: function() {
                var e = this;
                return "function" == typeof this.view ? this.view() : e.parse("div", null)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.invalidate = function(e) {
            this.render(), e && (this.elementQueries ? (this.elementQueries.detach(!0), this.elementQueries.update(!0)) : (this.elementQueries = new window.ElementQueries, ElementQueries.instance = this.elementQueries, this.elementQueries.withTracking = !0, this.elementQueries.init(!0)))
        }, t.prototype.render = function() {
            if (this._target) {
                this.virtual || (this.virtual = this.html), this._container || (this._container = i.create(this.virtual), this._target.appendChild(this._container));
                var t = i.diff(this.virtual, e.prototype.render.call(this));
                this._container = i.patch(this._container, t)
            }
        }, t
    }(o.ComponentVDom);
    t.RendererVDom = a
}, function(e, t, n) {
    var r = n(7),
        i = n(20),
        o = n(29),
        a = n(40),
        s = n(31),
        u = n(32);
    e.exports = {
        diff: r,
        patch: i,
        h: o,
        create: a,
        VNode: s,
        VText: u
    }
}, function(e, t, n) {
    var r = n(8);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        var n = {
            a: e
        };
        return i(e, t, n, 0), n
    }

    function i(e, t, n, r) {
        if (e !== t) {
            var i = n[r],
                s = !1;
            if (x(e) || x(t)) u(e, t, n, r);
            else if (null == t) b(e) || (a(e, n, r), i = n[r]), i = g(i, new _(_.REMOVE, e, t));
            else if (m(t))
                if (m(e))
                    if (e.tagName === t.tagName && e.namespace === t.namespace && e.key === t.key) {
                        var c = C(e.properties, t.properties);
                        c && (i = g(i, new _(_.PROPS, e, c))), i = o(e, t, n, i, r)
                    } else i = g(i, new _(_.VNODE, e, t)), s = !0;
            else i = g(i, new _(_.VNODE, e, t)), s = !0;
            else y(t) ? y(e) ? e.text !== t.text && (i = g(i, new _(_.VTEXT, e, t))) : (i = g(i, new _(_.VTEXT, e, t)), s = !0) : b(t) && (b(e) || (s = !0), i = g(i, new _(_.WIDGET, e, t)));
            i && (n[r] = i), s && a(e, n, r)
        }
    }

    function o(e, t, n, r, o) {
        for (var a = e.children, s = f(a, t.children), u = s.children, c = a.length, l = u.length, p = c > l ? c : l, d = 0; d < p; d++) {
            var h = a[d],
                v = u[d];
            o += 1, h ? i(h, v, n, o) : v && (r = g(r, new _(_.INSERT, null, v))), m(h) && h.count && (o += h.count)
        }
        return s.moves && (r = g(r, new _(_.ORDER, e, s.moves))), r
    }

    function a(e, t, n) {
        l(e, t, n), s(e, t, n)
    }

    function s(e, t, n) {
        if (b(e)) "function" == typeof e.destroy && (t[n] = g(t[n], new _(_.REMOVE, e, null)));
        else if (m(e) && (e.hasWidgets || e.hasThunks))
            for (var r = e.children, i = r.length, o = 0; o < i; o++) {
                var a = r[o];
                n += 1, s(a, t, n), m(a) && a.count && (n += a.count)
            } else x(e) && u(e, null, t, n)
    }

    function u(e, t, n, i) {
        var o = w(e, t),
            a = r(o.a, o.b);
        c(a) && (n[i] = new _(_.THUNK, null, a))
    }

    function c(e) {
        for (var t in e)
            if ("a" !== t) return !0;
        return !1
    }

    function l(e, t, n) {
        if (m(e)) {
            if (e.hooks && (t[n] = g(t[n], new _(_.PROPS, e, p(e.hooks)))), e.descendantHooks || e.hasThunks)
                for (var r = e.children, i = r.length, o = 0; o < i; o++) {
                    var a = r[o];
                    n += 1, l(a, t, n), m(a) && a.count && (n += a.count)
                }
        } else x(e) && u(e, null, t, n)
    }

    function p(e) {
        var t = {};
        for (var n in e) t[n] = void 0;
        return t
    }

    function f(e, t) {
        var n = h(t),
            r = n.keys,
            i = n.free;
        if (i.length === t.length) return {
            children: t,
            moves: null
        };
        var o = h(e),
            a = o.keys,
            s = o.free;
        if (s.length === e.length) return {
            children: t,
            moves: null
        };
        for (var u = [], c = 0, l = i.length, p = 0, f = 0; f < e.length; f++) {
            var g, v = e[f];
            v.key ? r.hasOwnProperty(v.key) ? (g = r[v.key], u.push(t[g])) : (g = f - p++, u.push(null)) : c < l ? (g = i[c++], u.push(t[g])) : (g = f - p++, u.push(null))
        }
        for (var _ = c >= i.length ? t.length : i[c], m = 0; m < t.length; m++) {
            var y = t[m];
            y.key ? a.hasOwnProperty(y.key) || u.push(y) : m >= _ && u.push(y)
        }
        for (var b, x = u.slice(), w = 0, C = [], T = [], E = 0; E < t.length;) {
            var A = t[E];
            for (b = x[w]; null === b && x.length;) C.push(d(x, w, null)), b = x[w];
            b && b.key === A.key ? (w++, E++) : A.key ? (b && b.key && r[b.key] !== E + 1 ? (C.push(d(x, w, b.key)), b = x[w], b && b.key === A.key ? w++ : T.push({
                key: A.key,
                to: E
            })) : T.push({
                key: A.key,
                to: E
            }), E++) : b && b.key && C.push(d(x, w, b.key))
        }
        for (; w < x.length;) b = x[w], C.push(d(x, w, b && b.key));
        return C.length !== p || T.length ? {
            children: u,
            moves: {
                removes: C,
                inserts: T
            }
        } : {
            children: u,
            moves: null
        }
    }

    function d(e, t, n) {
        return e.splice(t, 1), {
            from: t,
            key: n
        }
    }

    function h(e) {
        for (var t = {}, n = [], r = e.length, i = 0; i < r; i++) {
            var o = e[i];
            o.key ? t[o.key] = i : n.push(i)
        }
        return {
            keys: t,
            free: n
        }
    }

    function g(e, t) {
        return e ? (v(e) ? e.push(t) : e = [e, t], e) : t
    }
    var v = n(9),
        _ = n(10),
        m = n(12),
        y = n(13),
        b = n(14),
        x = n(15),
        w = n(16),
        C = n(17);
    e.exports = r
}, function(e, t) {
    function n(e) {
        return "[object Array]" === i.call(e)
    }
    var r = Array.isArray,
        i = Object.prototype.toString;
    e.exports = r || n
}, function(e, t, n) {
    function r(e, t, n) {
        this.type = Number(e), this.vNode = t, this.patch = n
    }
    var i = n(11);
    r.NONE = 0, r.VTEXT = 1, r.VNODE = 2, r.WIDGET = 3, r.PROPS = 4, r.ORDER = 5, r.INSERT = 6, r.REMOVE = 7, r.THUNK = 8, e.exports = r, r.prototype.version = i, r.prototype.type = "VirtualPatch"
}, function(e, t) {
    e.exports = "2"
}, function(e, t, n) {
    function r(e) {
        return e && "VirtualNode" === e.type && e.version === i
    }
    var i = n(11);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        return e && "VirtualText" === e.type && e.version === i
    }
    var i = n(11);
    e.exports = r
}, function(e, t) {
    function n(e) {
        return e && "Widget" === e.type
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        return e && "Thunk" === e.type
    }
    e.exports = n
}, function(e, t, n) {
    function r(e, t) {
        var n = e,
            r = t;
        return u(t) && (r = i(t, e)), u(e) && (n = i(e, null)), {
            a: n,
            b: r
        }
    }

    function i(e, t) {
        var n = e.vnode;
        if (n || (n = e.vnode = e.render(t)), !(o(n) || a(n) || s(n))) throw new Error("thunk did not return a valid node");
        return n
    }
    var o = n(12),
        a = n(13),
        s = n(14),
        u = n(15);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        var n;
        for (var s in e) {
            s in t || (n = n || {}, n[s] = void 0);
            var u = e[s],
                c = t[s];
            if (u !== c)
                if (o(u) && o(c))
                    if (i(c) !== i(u)) n = n || {}, n[s] = c;
                    else if (a(c)) n = n || {}, n[s] = c;
            else {
                var l = r(u, c);
                l && (n = n || {}, n[s] = l)
            } else n = n || {}, n[s] = c
        }
        for (var p in t) p in e || (n = n || {}, n[p] = t[p]);
        return n
    }

    function i(e) {
        return Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__ ? e.__proto__ : e.constructor ? e.constructor.prototype : void 0
    }
    var o = n(18),
        a = n(19);
    e.exports = r
}, function(e, t) {
    "use strict";
    e.exports = function(e) {
        return "object" == typeof e && null !== e
    }
}, function(e, t) {
    function n(e) {
        return e && ("function" == typeof e.hook && !e.hasOwnProperty("hook") || "function" == typeof e.unhook && !e.hasOwnProperty("unhook"))
    }
    e.exports = n
}, function(e, t, n) {
    var r = n(21);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n) {
        return n = n || {}, n.patch = n.patch && n.patch !== r ? n.patch : i, n.render = n.render || c, n.patch(e, t, n)
    }

    function i(e, t, n) {
        var r = a(t);
        if (0 === r.length) return e;
        var i = l(e, t.a, r),
            u = e.ownerDocument;
        n.document || u === s || (n.document = u);
        for (var c = 0; c < r.length; c++) {
            var p = r[c];
            e = o(e, i[p], t[p], n)
        }
        return e
    }

    function o(e, t, n, r) {
        if (!t) return e;
        var i;
        if (u(n))
            for (var o = 0; o < n.length; o++) i = p(n[o], t, r), t === e && (e = i);
        else i = p(n, t, r), t === e && (e = i);
        return e
    }

    function a(e) {
        var t = [];
        for (var n in e) "a" !== n && t.push(Number(n));
        return t
    }
    var s = n(22),
        u = n(9),
        c = n(24),
        l = n(26),
        p = n(27);
    e.exports = r
}, function(e, t, n) {
    (function(t) {
        var r = "undefined" != typeof t ? t : "undefined" != typeof window ? window : {},
            i = n(23);
        if ("undefined" != typeof document) e.exports = document;
        else {
            var o = r["__GLOBAL_DOCUMENT_CACHE@4"];
            o || (o = r["__GLOBAL_DOCUMENT_CACHE@4"] = i), e.exports = o
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t) {}, function(e, t, n) {
    function r(e, t) {
        var n = t ? t.document || i : i,
            l = t ? t.warn : null;
        if (e = c(e).a, u(e)) return e.init();
        if (s(e)) return n.createTextNode(e.text);
        if (!a(e)) return l && l("Item is not a valid virtual dom node", e), null;
        var p = null === e.namespace ? n.createElement(e.tagName) : n.createElementNS(e.namespace, e.tagName),
            f = e.properties;
        o(p, f);
        for (var d = e.children, h = 0; h < d.length; h++) {
            var g = r(d[h], t);
            g && p.appendChild(g)
        }
        return p
    }
    var i = n(22),
        o = n(25),
        a = n(12),
        s = n(13),
        u = n(14),
        c = n(16);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n) {
        for (var r in t) {
            var a = t[r];
            void 0 === a ? i(e, r, a, n) : u(a) ? (i(e, r, a, n), a.hook && a.hook(e, r, n ? n[r] : void 0)) : s(a) ? o(e, t, n, r, a) : e[r] = a
        }
    }

    function i(e, t, n, r) {
        if (r) {
            var i = r[t];
            if (u(i)) i.unhook && i.unhook(e, t, n);
            else if ("attributes" === t)
                for (var o in i) e.removeAttribute(o);
            else if ("style" === t)
                for (var a in i) e.style[a] = "";
            else "string" == typeof i ? e[t] = "" : e[t] = null
        }
    }

    function o(e, t, n, r, i) {
        var o = n ? n[r] : void 0;
        if ("attributes" !== r) {
            if (o && s(o) && a(o) !== a(i)) return void(e[r] = i);
            s(e[r]) || (e[r] = {});
            var u = "style" === r ? "" : void 0;
            for (var c in i) {
                var l = i[c];
                e[r][c] = void 0 === l ? u : l
            }
        } else
            for (var p in i) {
                var f = i[p];
                void 0 === f ? e.removeAttribute(p) : e.setAttribute(p, f)
            }
    }

    function a(e) {
        return Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__ ? e.__proto__ : e.constructor ? e.constructor.prototype : void 0
    }
    var s = n(18),
        u = n(19);
    e.exports = r
}, function(e, t) {
    function n(e, t, n, i) {
        return n && 0 !== n.length ? (n.sort(o), r(e, t, n, i, 0)) : {}
    }

    function r(e, t, n, o, s) {
        if (o = o || {}, e) {
            i(n, s, s) && (o[s] = e);
            var u = t.children;
            if (u)
                for (var c = e.childNodes, l = 0; l < t.children.length; l++) {
                    s += 1;
                    var p = u[l] || a,
                        f = s + (p.count || 0);
                    i(n, s, f) && r(c[l], p, n, o, s), s = f
                }
        }
        return o
    }

    function i(e, t, n) {
        if (0 === e.length) return !1;
        for (var r, i, o = 0, a = e.length - 1; o <= a;) {
            if (r = (a + o) / 2 >> 0, i = e[r], o === a) return i >= t && i <= n;
            if (i < t) o = r + 1;
            else {
                if (!(i > n)) return !0;
                a = r - 1
            }
        }
        return !1
    }

    function o(e, t) {
        return e > t ? 1 : -1
    }
    var a = {};
    e.exports = n
}, function(e, t, n) {
    function r(e, t, n) {
        var r = e.type,
            c = e.vNode,
            d = e.patch;
        switch (r) {
            case h.REMOVE:
                return i(t, c);
            case h.INSERT:
                return o(t, d, n);
            case h.VTEXT:
                return a(t, c, d, n);
            case h.WIDGET:
                return s(t, c, d, n);
            case h.VNODE:
                return u(t, c, d, n);
            case h.ORDER:
                return l(t, d), t;
            case h.PROPS:
                return f(t, d, c.properties), t;
            case h.THUNK:
                return p(t, n.patch(t, d, n));
            default:
                return t
        }
    }

    function i(e, t) {
        var n = e.parentNode;
        return n && n.removeChild(e), c(e, t), null
    }

    function o(e, t, n) {
        var r = n.render(t, n);
        return e && e.appendChild(r), e
    }

    function a(e, t, n, r) {
        var i;
        if (3 === e.nodeType) e.replaceData(0, e.length, n.text), i = e;
        else {
            var o = e.parentNode;
            i = r.render(n, r), o && i !== e && o.replaceChild(i, e)
        }
        return i
    }

    function s(e, t, n, r) {
        var i, o = g(t, n);
        i = o ? n.update(t, e) || e : r.render(n, r);
        var a = e.parentNode;
        return a && i !== e && a.replaceChild(i, e), o || c(e, t), i
    }

    function u(e, t, n, r) {
        var i = e.parentNode,
            o = r.render(n, r);
        return i && o !== e && i.replaceChild(o, e), o
    }

    function c(e, t) {
        "function" == typeof t.destroy && d(t) && t.destroy(e)
    }

    function l(e, t) {
        for (var n, r, i, o = e.childNodes, a = {}, s = 0; s < t.removes.length; s++) r = t.removes[s], n = o[r.from], r.key && (a[r.key] = n), e.removeChild(n);
        for (var u = o.length, c = 0; c < t.inserts.length; c++) i = t.inserts[c], n = a[i.key], e.insertBefore(n, i.to >= u++ ? null : o[i.to])
    }

    function p(e, t) {
        return e && t && e !== t && e.parentNode && e.parentNode.replaceChild(t, e), t
    }
    var f = n(25),
        d = n(14),
        h = n(10),
        g = n(28);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        return !(!i(e) || !i(t)) && ("name" in e && "name" in t ? e.id === t.id : e.init === t.init)
    }
    var i = n(14);
    e.exports = r
}, function(e, t, n) {
    var r = n(30);
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r, a, u, c, l = [];
        return !n && s(t) && (n = t, a = {}), a = a || t || {}, r = m(e, a), a.hasOwnProperty("key") && (u = a.key, a.key = void 0), a.hasOwnProperty("namespace") && (c = a.namespace, a.namespace = void 0), "INPUT" !== r || c || !a.hasOwnProperty("value") || void 0 === a.value || v(a.value) || (a.value = y(a.value)), o(a), void 0 !== n && null !== n && i(n, l, r, a), new p(r, a, l, u, c)
    }

    function i(e, t, n, r) {
        if ("string" == typeof e) t.push(new f(e));
        else if ("number" == typeof e) t.push(new f(String(e)));
        else if (a(e)) t.push(e);
        else {
            if (!l(e)) {
                if (null === e || void 0 === e) return;
                throw u({
                    foreignObject: e,
                    parentVnode: {
                        tagName: n,
                        properties: r
                    }
                })
            }
            for (var o = 0; o < e.length; o++) i(e[o], t, n, r)
        }
    }

    function o(e) {
        for (var t in e)
            if (e.hasOwnProperty(t)) {
                var n = e[t];
                if (v(n)) continue;
                "ev-" === t.substr(0, 3) && (e[t] = b(n))
            }
    }

    function a(e) {
        return d(e) || h(e) || g(e) || _(e)
    }

    function s(e) {
        return "string" == typeof e || l(e) || a(e)
    }

    function u(e) {
        var t = new Error;
        return t.type = "virtual-hyperscript.unexpected.virtual-element", t.message = "Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n" + c(e.foreignObject) + ".\nThe parent vnode is:\n" + c(e.parentVnode), t.foreignObject = e.foreignObject, t.parentVnode = e.parentVnode, t
    }

    function c(e) {
        try {
            return JSON.stringify(e, null, "    ")
        } catch (t) {
            return String(e)
        }
    }
    var l = n(9),
        p = n(31),
        f = n(32),
        d = n(12),
        h = n(13),
        g = n(14),
        v = n(19),
        _ = n(15),
        m = n(33),
        y = n(35),
        b = n(36);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n, r, i) {
        this.tagName = e, this.properties = t || c, this.children = n || l, this.key = null != r ? String(r) : void 0, this.namespace = "string" == typeof i ? i : null;
        var p, f = n && n.length || 0,
            d = 0,
            h = !1,
            g = !1,
            v = !1;
        for (var _ in t)
            if (t.hasOwnProperty(_)) {
                var m = t[_];
                u(m) && m.unhook && (p || (p = {}), p[_] = m)
            }
        for (var y = 0; y < f; y++) {
            var b = n[y];
            o(b) ? (d += b.count || 0, !h && b.hasWidgets && (h = !0), !g && b.hasThunks && (g = !0), v || !b.hooks && !b.descendantHooks || (v = !0)) : !h && a(b) ? "function" == typeof b.destroy && (h = !0) : !g && s(b) && (g = !0)
        }
        this.count = f + d, this.hasWidgets = h, this.hasThunks = g, this.hooks = p, this.descendantHooks = v
    }
    var i = n(11),
        o = n(12),
        a = n(14),
        s = n(15),
        u = n(19);
    e.exports = r;
    var c = {},
        l = [];
    r.prototype.version = i, r.prototype.type = "VirtualNode"
}, function(e, t, n) {
    function r(e) {
        this.text = String(e)
    }
    var i = n(11);
    e.exports = r, r.prototype.version = i, r.prototype.type = "VirtualText"
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!e) return "DIV";
        var n = !t.hasOwnProperty("id"),
            r = i(e, o),
            s = null;
        a.test(r[1]) && (s = "DIV");
        var u, c, l, p;
        for (p = 0; p < r.length; p++) c = r[p], c && (l = c.charAt(0), s ? "." === l ? (u = u || [], u.push(c.substring(1, c.length))) : "#" === l && n && (t.id = c.substring(1, c.length)) : s = c);
        return u && (t.className && u.push(t.className), t.className = u.join(" ")), t.namespace ? s : s.toUpperCase()
    }
    var i = n(34),
        o = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,
        a = /^\.|#/;
    e.exports = r
}, function(e, t) {
    e.exports = function(e) {
        var t, n = String.prototype.split,
            r = /()??/.exec("")[1] === e;
        return t = function(t, i, o) {
            if ("[object RegExp]" !== Object.prototype.toString.call(i)) return n.call(t, i, o);
            var a, s, u, c, l = [],
                p = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.extended ? "x" : "") + (i.sticky ? "y" : ""),
                f = 0,
                i = new RegExp(i.source, p + "g");
            for (t += "", r || (a = new RegExp("^" + i.source + "$(?!\\s)", p)), o = o === e ? -1 >>> 0 : o >>> 0;
                (s = i.exec(t)) && (u = s.index + s[0].length, !(u > f && (l.push(t.slice(f, s.index)), !r && s.length > 1 && s[0].replace(a, function() {
                    for (var t = 1; t < arguments.length - 2; t++) arguments[t] === e && (s[t] = e)
                }), s.length > 1 && s.index < t.length && Array.prototype.push.apply(l, s.slice(1)), c = s[0].length, f = u, l.length >= o)));) i.lastIndex === s.index && i.lastIndex++;
            return f === t.length ? !c && i.test("") || l.push("") : l.push(t.slice(f)), l.length > o ? l.slice(0, o) : l
        }
    }()
}, function(e, t) {
    "use strict";

    function n(e) {
        return this instanceof n ? void(this.value = e) : new n(e)
    }
    e.exports = n, n.prototype.hook = function(e, t) {
        e[t] !== this.value && (e[t] = this.value)
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return this instanceof r ? void(this.value = e) : new r(e)
    }
    var i = n(37);
    e.exports = r, r.prototype.hook = function(e, t) {
        var n = i(e),
            r = t.substr(3);
        n[r] = this.value
    }, r.prototype.unhook = function(e, t) {
        var n = i(e),
            r = t.substr(3);
        n[r] = void 0
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e[a];
        return t || (t = e[a] = {}), t
    }
    var i = n(38),
        o = "7";
    i("ev-store", o);
    var a = "__EV_STORE_KEY@" + o;
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = "__INDIVIDUAL_ONE_VERSION_" + e,
            o = r + "_ENFORCE_SINGLETON",
            a = i(o, t);
        if (a !== t) throw new Error("Can only have one copy of " + e + ".\nYou already have version " + a + " installed.\nThis means you cannot install version " + t);
        return i(r, n)
    }
    var i = n(39);
    e.exports = r
}, function(e, t) {
    (function(t) {
        "use strict";

        function n(e, t) {
            return e in r ? r[e] : (r[e] = t, t)
        }
        var r = "undefined" != typeof window ? window : "undefined" != typeof t ? t : {};
        e.exports = n
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    var r = n(24);
    e.exports = r
}, function(e, t, n) {
    (function(e) {
        var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(6),
            o = n(45),
            a = n(1),
            s = function(t) {
                function n() {
                    var e = t.call(this) || this;
                    return e.attributes = {}, e.children = [], e.parent = null, e.components = [], e.virtual = null, e.EVENTS = n.EVENTS, e.invalidated = !1, e
                }
                return r(n, t), Object.defineProperty(n.prototype, "name", {
                    get: function() {
                        return null
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "html", {
                    get: function() {
                        return null
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "style", {
                    get: function() {
                        return null
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.initialize = function() {}, n.prototype.refreshed = function() {}, n.prototype.added = function() {}, n.prototype.getAttr = function(e) {
                    return this.attributes && this.attributes[e] ? this.attributes[e] : null
                }, n.prototype.setAttr = function(e, t) {
                    this.attributes || (this.attributes = {}), this.attributes[e] = t
                }, n.prototype.render = function() {
                    var t = this;
                    this.refreshed();
                    for (var r = 0, i = this.components; r < i.length; r++) {
                        var a = i[r];
                        a.invalidated = !0
                    }
                    return this.virtual = this.html, this.virtual.properties && o.merge(this.virtual.properties.attributes, this.attributes), this.virtual.properties && !this.virtual.properties["event-updated"] && (this.virtual.properties["event-updated"] = this.hook(function(r, i) {
                        var o = !1;
                        t.element !== r && (o = !0), t.element = r, o && e(function() {
                            t.added(), t.dispatch(n.EVENTS.ADDED)
                        })
                    }, function(e, t) {})), this.invalidated = !1, this.virtual
                }, n.prototype.parse = function(e, t) {
                    for (var r = [], o = 2; o < arguments.length; o++) r[o - 2] = arguments[o];
                    var a = {},
                        s = r.length ? [].concat(r) : [];
                    if ("function" == typeof e) {
                        for (var u = null, c = 0; c < this.components.length; c++)
                            if (this.components[c].invalidated && this.components[c] instanceof e) {
                                u = this.components[c];
                                break
                            }
                        var l = !1;
                        if (!u) {
                            l = !0;
                            for (var p = this.getFunctionArgumentNames(e), c = 0; c < p.length; c++) "undefined" != typeof t[p[c]] && (p[c] = t[p[c]]);
                            p.unshift(e), u = new(e.bind.apply(e, p)), this.components.push(u)
                        }
                        return u.attributes = t, u.children = s, u.parent = this, u.attributes && u.attributes.id && (this[u.attributes.id] = u), u.attributes && (u.attributes.instance = u), l && u.initialize(), u.render()
                    }
                    if (t) {
                        for (var f = Object.keys(t), c = 0; c < f.length; c++)
                            if ("viewBox" !== f[c] && "attributeName" != f[c] && "repeatCount" != f[c] && "preserveAspectRatio" != f[c]) {
                                var d = f[c].toString().match(/[A-Z]/);
                                if (d) {
                                    var h = f[c].slice(0, d.index) + ":" + f[c].slice(d.index).toLowerCase();
                                    t[h] = t[f[c]], delete t[f[c]]
                                }
                            }
                        if (t.style) {
                            var g = "";
                            t.style = [].concat(t.style);
                            for (var c = 0; c < t.style.length; c++) g += "string" == typeof t.style[c] ? t.style[c] : this.objectToCSS(t.style[c], !1);
                            t.style = g
                        }
                        for (var v = function(e) {
                                if (f[e].indexOf(n.HOOKS.EVENT) + 1) {
                                    var r = t[f[e]];
                                    a[f[e]] = _.hook(function(e, t) {
                                        e.addEventListener(t.replace(n.HOOKS.EVENT, ""), r)
                                    }, function(e, t) {
                                        e.removeEventListener(t.replace(n.HOOKS.EVENT, ""), r)
                                    }), delete t[f[e]]
                                }
                            }, _ = this, c = 0; c < f.length; c++) v(c)
                    }
                    return a.attributes = t, "svg" !== e && "circle" !== e && "g" !== e && "path" !== e && "rect" !== e && "animate" !== e || (a.namespace = "http://www.w3.org/2000/svg"), i.h(e, a, s)
                }, n.prototype.dispatch = function(e, t) {
                    if (this.element && this.element.parentElement) try {
                        var n = new CustomEvent(e, {
                            detail: {
                                target: this,
                                data: t
                            },
                            bubbles: !0,
                            cancelable: !1
                        });
                        this.element.dispatchEvent(n)
                    } catch (r) {
                        var n = document.createEvent("CustomEvent");
                        n.initCustomEvent(e, !0, !1, {
                            target: this,
                            data: t
                        }), this.element.dispatchEvent(n)
                    }
                }, n.prototype.hook = function(t, r) {
                    var i = function() {},
                        o = this;
                    return i.prototype.hook = function(r, i, a) {
                        return "function" == typeof t ? void t(r, i) : void e(function() {
                            var e = i.replace(n.HOOKS.EVENT, "");
                            if ("function" == typeof o[e]) return void o[e](r, i, a)
                        })
                    }, "function" == typeof r && (i.prototype.unhook = function(e, t, n) {
                        r(e, t)
                    }), new i
                }, n.prototype.objectToCSS = function(e, t) {
                    function n(e) {
                        return t ? e : ""
                    }

                    function r(e) {
                        var t = /[A-Z]/g,
                            n = /^ms-/;
                        return e.replace(t, "-$&").toLowerCase().replace(n, "-ms-")
                    }
                    var i = Object.keys(e);
                    if (!i.length) return "";
                    var o, a = i.length,
                        s = "";
                    for (o = 0; o < a; o++) {
                        var u = i[o],
                            c = e[u];
                        "string" == typeof c || "number" == typeof c ? s += n("\t") + r(u) + ":" + c + ";" + n("\n") : c && (s += n("\n") + "." + r(u) + "{" + n("\n") + this.objectToCSS(c, t) + "}" + n("\n"))
                    }
                    return s
                }, n.prototype.getFunctionArgumentNames = function(e) {
                    var t = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
                        n = /([^\s,]+)/g,
                        r = e.toString().replace(t, ""),
                        i = r.slice(r.indexOf("(") + 1, r.indexOf(")")).match(n);
                    return null === i && (i = []), i
                }, n.prototype.find = function(e) {
                    for (var t = 0; t < this.components.length; t++)
                        if (this.components[t].element === e) return this.components[t];
                    return null
                }, n.prototype.invalidate = function(e) {
                    this.parent && this.parent.invalidate(e)
                }, n
            }(a.Base);
        s.HOOKS = {
            EVENT: "event-"
        }, s.EVENTS = {
            INVALIDATED: "invalidated",
            ADDED: "added"
        }, t.ComponentVDom = s
    }).call(t, n(42).setImmediate)
}, function(e, t, n) {
    function r(e, t) {
        this._id = e, this._clearFn = t
    }
    var i = Function.prototype.apply;
    t.setTimeout = function() {
        return new r(i.call(setTimeout, window, arguments), clearTimeout)
    }, t.setInterval = function() {
        return new r(i.call(setInterval, window, arguments), clearInterval)
    }, t.clearTimeout = t.clearInterval = function(e) {
        e && e.close()
    }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
        this._clearFn.call(window, this._id)
    }, t.enroll = function(e, t) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = t
    }, t.unenroll = function(e) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
    }, t._unrefActive = t.active = function(e) {
        clearTimeout(e._idleTimeoutId);
        var t = e._idleTimeout;
        t >= 0 && (e._idleTimeoutId = setTimeout(function() {
            e._onTimeout && e._onTimeout()
        }, t))
    }, n(43), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
}, function(e, t, n) {
    (function(e, t) {
        ! function(e, n) {
            "use strict";

            function r(e) {
                "function" != typeof e && (e = new Function("" + e));
                for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                var r = {
                    callback: e,
                    args: t
                };
                return g[h] = r, d(h), h++
            }

            function i(e) {
                delete g[e]
            }

            function o(e) {
                var t = e.callback,
                    r = e.args;
                switch (r.length) {
                    case 0:
                        t();
                        break;
                    case 1:
                        t(r[0]);
                        break;
                    case 2:
                        t(r[0], r[1]);
                        break;
                    case 3:
                        t(r[0], r[1], r[2]);
                        break;
                    default:
                        t.apply(n, r)
                }
            }

            function a(e) {
                if (v) setTimeout(a, 0, e);
                else {
                    var t = g[e];
                    if (t) {
                        v = !0;
                        try {
                            o(t)
                        } finally {
                            i(e), v = !1
                        }
                    }
                }
            }

            function s() {
                d = function(e) {
                    t.nextTick(function() {
                        a(e)
                    })
                }
            }

            function u() {
                if (e.postMessage && !e.importScripts) {
                    var t = !0,
                        n = e.onmessage;
                    return e.onmessage = function() {
                        t = !1
                    }, e.postMessage("", "*"), e.onmessage = n, t
                }
            }

            function c() {
                var t = "setImmediate$" + Math.random() + "$",
                    n = function(n) {
                        n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && a(+n.data.slice(t.length))
                    };
                e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), d = function(n) {
                    e.postMessage(t + n, "*")
                }
            }

            function l() {
                var e = new MessageChannel;
                e.port1.onmessage = function(e) {
                    var t = e.data;
                    a(t)
                }, d = function(t) {
                    e.port2.postMessage(t)
                }
            }

            function p() {
                var e = _.documentElement;
                d = function(t) {
                    var n = _.createElement("script");
                    n.onreadystatechange = function() {
                        a(t), n.onreadystatechange = null, e.removeChild(n), n = null
                    }, e.appendChild(n)
                }
            }

            function f() {
                d = function(e) {
                    setTimeout(a, 0, e)
                }
            }
            if (!e.setImmediate) {
                var d, h = 1,
                    g = {},
                    v = !1,
                    _ = e.document,
                    m = Object.getPrototypeOf && Object.getPrototypeOf(e);
                m = m && m.setTimeout ? m : e, "[object process]" === {}.toString.call(e.process) ? s() : u() ? c() : e.MessageChannel ? l() : _ && "onreadystatechange" in _.createElement("script") ? p() : f(), m.setImmediate = r, m.clearImmediate = i
            }
        }("undefined" == typeof self ? "undefined" == typeof e ? this : e : self)
    }).call(t, function() {
        return this
    }(), n(44))
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (l === setTimeout) return setTimeout(e, 0);
        if ((l === n || !l) && setTimeout) return l = setTimeout,
            setTimeout(e, 0);
        try {
            return l(e, 0)
        } catch (t) {
            try {
                return l.call(null, e, 0)
            } catch (t) {
                return l.call(this, e, 0)
            }
        }
    }

    function o(e) {
        if (p === clearTimeout) return clearTimeout(e);
        if ((p === r || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e);
        try {
            return p(e)
        } catch (t) {
            try {
                return p.call(null, e)
            } catch (t) {
                return p.call(this, e)
            }
        }
    }

    function a() {
        g && d && (g = !1, d.length ? h = d.concat(h) : v = -1, h.length && s())
    }

    function s() {
        if (!g) {
            var e = i(a);
            g = !0;
            for (var t = h.length; t;) {
                for (d = h, h = []; ++v < t;) d && d[v].run();
                v = -1, t = h.length
            }
            d = null, g = !1, o(e)
        }
    }

    function u(e, t) {
        this.fun = e, this.array = t
    }

    function c() {}
    var l, p, f = e.exports = {};
    ! function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            l = n
        }
        try {
            p = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            p = r
        }
    }();
    var d, h = [],
        g = !1,
        v = -1;
    f.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        h.push(new u(e, t)), 1 !== h.length || g || i(s)
    }, u.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, f.removeAllListeners = c, f.emit = c, f.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function() {
        return "/"
    }, f.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function() {
        return 0
    }
}, function(e, t, n) {
    var r;
    (function(e, i) {
        (function() {
            function o(e, t) {
                return e.set(t[0], t[1]), e
            }

            function a(e, t) {
                return e.add(t), e
            }

            function s(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }

            function u(e, t, n, r) {
                for (var i = -1, o = null == e ? 0 : e.length; ++i < o;) {
                    var a = e[i];
                    t(r, a, n(a), e)
                }
                return r
            }

            function c(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
                return e
            }

            function l(e, t) {
                for (var n = null == e ? 0 : e.length; n-- && t(e[n], n, e) !== !1;);
                return e
            }

            function p(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                    if (!t(e[n], n, e)) return !1;
                return !0
            }

            function f(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
                    var a = e[n];
                    t(a, n, e) && (o[i++] = a)
                }
                return o
            }

            function d(e, t) {
                var n = null == e ? 0 : e.length;
                return !!n && T(e, t, 0) > -1
            }

            function h(e, t, n) {
                for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                    if (n(t, e[r])) return !0;
                return !1
            }

            function g(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
                return i
            }

            function v(e, t) {
                for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
                return e
            }

            function _(e, t, n, r) {
                var i = -1,
                    o = null == e ? 0 : e.length;
                for (r && o && (n = e[++i]); ++i < o;) n = t(n, e[i], i, e);
                return n
            }

            function m(e, t, n, r) {
                var i = null == e ? 0 : e.length;
                for (r && i && (n = e[--i]); i--;) n = t(n, e[i], i, e);
                return n
            }

            function y(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                    if (t(e[n], n, e)) return !0;
                return !1
            }

            function b(e) {
                return e.split("")
            }

            function x(e) {
                return e.match(zt) || []
            }

            function w(e, t, n) {
                var r;
                return n(e, function(e, n, i) {
                    if (t(e, n, i)) return r = n, !1
                }), r
            }

            function C(e, t, n, r) {
                for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                    if (t(e[o], o, e)) return o;
                return -1
            }

            function T(e, t, n) {
                return t === t ? J(e, t, n) : C(e, A, n)
            }

            function E(e, t, n, r) {
                for (var i = n - 1, o = e.length; ++i < o;)
                    if (r(e[i], t)) return i;
                return -1
            }

            function A(e) {
                return e !== e
            }

            function O(e, t) {
                var n = null == e ? 0 : e.length;
                return n ? P(e, t) / n : Me
            }

            function D(e) {
                return function(t) {
                    return null == t ? ie : t[e]
                }
            }

            function k(e) {
                return function(t) {
                    return null == e ? ie : e[t]
                }
            }

            function S(e, t, n, r, i) {
                return i(e, function(e, i, o) {
                    n = r ? (r = !1, e) : t(n, e, i, o)
                }), n
            }

            function j(e, t) {
                var n = e.length;
                for (e.sort(t); n--;) e[n] = e[n].value;
                return e
            }

            function P(e, t) {
                for (var n, r = -1, i = e.length; ++r < i;) {
                    var o = t(e[r]);
                    o !== ie && (n = n === ie ? o : n + o)
                }
                return n
            }

            function I(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }

            function N(e, t) {
                return g(t, function(t) {
                    return [t, e[t]]
                })
            }

            function L(e) {
                return function(t) {
                    return e(t)
                }
            }

            function R(e, t) {
                return g(t, function(t) {
                    return e[t]
                })
            }

            function M(e, t) {
                return e.has(t)
            }

            function B(e, t) {
                for (var n = -1, r = e.length; ++n < r && T(t, e[n], 0) > -1;);
                return n
            }

            function q(e, t) {
                for (var n = e.length; n-- && T(t, e[n], 0) > -1;);
                return n
            }

            function V(e, t) {
                for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
                return r
            }

            function F(e) {
                return "\\" + nr[e]
            }

            function U(e, t) {
                return null == e ? ie : e[t]
            }

            function z(e) {
                return Kn.test(e)
            }

            function H(e) {
                return $n.test(e)
            }

            function W(e) {
                for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                return n
            }

            function G(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach(function(e, r) {
                    n[++t] = [r, e]
                }), n
            }

            function K(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }

            function $(e, t) {
                for (var n = -1, r = e.length, i = 0, o = []; ++n < r;) {
                    var a = e[n];
                    a !== t && a !== pe || (e[n] = pe, o[i++] = n)
                }
                return o
            }

            function Q(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach(function(e) {
                    n[++t] = e
                }), n
            }

            function Y(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach(function(e) {
                    n[++t] = [e, e]
                }), n
            }

            function J(e, t, n) {
                for (var r = n - 1, i = e.length; ++r < i;)
                    if (e[r] === t) return r;
                return -1
            }

            function X(e, t, n) {
                for (var r = n + 1; r--;)
                    if (e[r] === t) return r;
                return r
            }

            function Z(e) {
                return z(e) ? te(e) : yr(e)
            }

            function ee(e) {
                return z(e) ? ne(e) : b(e)
            }

            function te(e) {
                for (var t = Wn.lastIndex = 0; Wn.test(e);) ++t;
                return t
            }

            function ne(e) {
                return e.match(Wn) || []
            }

            function re(e) {
                return e.match(Gn) || []
            }
            var ie, oe = "4.17.4",
                ae = 200,
                se = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                ue = "Expected a function",
                ce = "__lodash_hash_undefined__",
                le = 500,
                pe = "__lodash_placeholder__",
                fe = 1,
                de = 2,
                he = 4,
                ge = 1,
                ve = 2,
                _e = 1,
                me = 2,
                ye = 4,
                be = 8,
                xe = 16,
                we = 32,
                Ce = 64,
                Te = 128,
                Ee = 256,
                Ae = 512,
                Oe = 30,
                De = "...",
                ke = 800,
                Se = 16,
                je = 1,
                Pe = 2,
                Ie = 3,
                Ne = 1 / 0,
                Le = 9007199254740991,
                Re = 1.7976931348623157e308,
                Me = NaN,
                Be = 4294967295,
                qe = Be - 1,
                Ve = Be >>> 1,
                Fe = [
                    ["ary", Te],
                    ["bind", _e],
                    ["bindKey", me],
                    ["curry", be],
                    ["curryRight", xe],
                    ["flip", Ae],
                    ["partial", we],
                    ["partialRight", Ce],
                    ["rearg", Ee]
                ],
                Ue = "[object Arguments]",
                ze = "[object Array]",
                He = "[object AsyncFunction]",
                We = "[object Boolean]",
                Ge = "[object Date]",
                Ke = "[object DOMException]",
                $e = "[object Error]",
                Qe = "[object Function]",
                Ye = "[object GeneratorFunction]",
                Je = "[object Map]",
                Xe = "[object Number]",
                Ze = "[object Null]",
                et = "[object Object]",
                tt = "[object Promise]",
                nt = "[object Proxy]",
                rt = "[object RegExp]",
                it = "[object Set]",
                ot = "[object String]",
                at = "[object Symbol]",
                st = "[object Undefined]",
                ut = "[object WeakMap]",
                ct = "[object WeakSet]",
                lt = "[object ArrayBuffer]",
                pt = "[object DataView]",
                ft = "[object Float32Array]",
                dt = "[object Float64Array]",
                ht = "[object Int8Array]",
                gt = "[object Int16Array]",
                vt = "[object Int32Array]",
                _t = "[object Uint8Array]",
                mt = "[object Uint8ClampedArray]",
                yt = "[object Uint16Array]",
                bt = "[object Uint32Array]",
                xt = /\b__p \+= '';/g,
                wt = /\b(__p \+=) '' \+/g,
                Ct = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                Tt = /&(?:amp|lt|gt|quot|#39);/g,
                Et = /[&<>"']/g,
                At = RegExp(Tt.source),
                Ot = RegExp(Et.source),
                Dt = /<%-([\s\S]+?)%>/g,
                kt = /<%([\s\S]+?)%>/g,
                St = /<%=([\s\S]+?)%>/g,
                jt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                Pt = /^\w*$/,
                It = /^\./,
                Nt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Lt = /[\\^$.*+?()[\]{}|]/g,
                Rt = RegExp(Lt.source),
                Mt = /^\s+|\s+$/g,
                Bt = /^\s+/,
                qt = /\s+$/,
                Vt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                Ft = /\{\n\/\* \[wrapped with (.+)\] \*/,
                Ut = /,? & /,
                zt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                Ht = /\\(\\)?/g,
                Wt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                Gt = /\w*$/,
                Kt = /^[-+]0x[0-9a-f]+$/i,
                $t = /^0b[01]+$/i,
                Qt = /^\[object .+?Constructor\]$/,
                Yt = /^0o[0-7]+$/i,
                Jt = /^(?:0|[1-9]\d*)$/,
                Xt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                Zt = /($^)/,
                en = /['\n\r\u2028\u2029\\]/g,
                tn = "\\ud800-\\udfff",
                nn = "\\u0300-\\u036f",
                rn = "\\ufe20-\\ufe2f",
                on = "\\u20d0-\\u20ff",
                an = nn + rn + on,
                sn = "\\u2700-\\u27bf",
                un = "a-z\\xdf-\\xf6\\xf8-\\xff",
                cn = "\\xac\\xb1\\xd7\\xf7",
                ln = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                pn = "\\u2000-\\u206f",
                fn = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                dn = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                hn = "\\ufe0e\\ufe0f",
                gn = cn + ln + pn + fn,
                vn = "['’]",
                _n = "[" + tn + "]",
                mn = "[" + gn + "]",
                yn = "[" + an + "]",
                bn = "\\d+",
                xn = "[" + sn + "]",
                wn = "[" + un + "]",
                Cn = "[^" + tn + gn + bn + sn + un + dn + "]",
                Tn = "\\ud83c[\\udffb-\\udfff]",
                En = "(?:" + yn + "|" + Tn + ")",
                An = "[^" + tn + "]",
                On = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                Dn = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                kn = "[" + dn + "]",
                Sn = "\\u200d",
                jn = "(?:" + wn + "|" + Cn + ")",
                Pn = "(?:" + kn + "|" + Cn + ")",
                In = "(?:" + vn + "(?:d|ll|m|re|s|t|ve))?",
                Nn = "(?:" + vn + "(?:D|LL|M|RE|S|T|VE))?",
                Ln = En + "?",
                Rn = "[" + hn + "]?",
                Mn = "(?:" + Sn + "(?:" + [An, On, Dn].join("|") + ")" + Rn + Ln + ")*",
                Bn = "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",
                qn = "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)",
                Vn = Rn + Ln + Mn,
                Fn = "(?:" + [xn, On, Dn].join("|") + ")" + Vn,
                Un = "(?:" + [An + yn + "?", yn, On, Dn, _n].join("|") + ")",
                zn = RegExp(vn, "g"),
                Hn = RegExp(yn, "g"),
                Wn = RegExp(Tn + "(?=" + Tn + ")|" + Un + Vn, "g"),
                Gn = RegExp([kn + "?" + wn + "+" + In + "(?=" + [mn, kn, "$"].join("|") + ")", Pn + "+" + Nn + "(?=" + [mn, kn + jn, "$"].join("|") + ")", kn + "?" + jn + "+" + In, kn + "+" + Nn, qn, Bn, bn, Fn].join("|"), "g"),
                Kn = RegExp("[" + Sn + tn + an + hn + "]"),
                $n = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                Qn = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                Yn = -1,
                Jn = {};
            Jn[ft] = Jn[dt] = Jn[ht] = Jn[gt] = Jn[vt] = Jn[_t] = Jn[mt] = Jn[yt] = Jn[bt] = !0, Jn[Ue] = Jn[ze] = Jn[lt] = Jn[We] = Jn[pt] = Jn[Ge] = Jn[$e] = Jn[Qe] = Jn[Je] = Jn[Xe] = Jn[et] = Jn[rt] = Jn[it] = Jn[ot] = Jn[ut] = !1;
            var Xn = {};
            Xn[Ue] = Xn[ze] = Xn[lt] = Xn[pt] = Xn[We] = Xn[Ge] = Xn[ft] = Xn[dt] = Xn[ht] = Xn[gt] = Xn[vt] = Xn[Je] = Xn[Xe] = Xn[et] = Xn[rt] = Xn[it] = Xn[ot] = Xn[at] = Xn[_t] = Xn[mt] = Xn[yt] = Xn[bt] = !0, Xn[$e] = Xn[Qe] = Xn[ut] = !1;
            var Zn = {
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ã": "A",
                    "Ä": "A",
                    "Å": "A",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ã": "a",
                    "ä": "a",
                    "å": "a",
                    "Ç": "C",
                    "ç": "c",
                    "Ð": "D",
                    "ð": "d",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ë": "E",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ë": "e",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ï": "I",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ï": "i",
                    "Ñ": "N",
                    "ñ": "n",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Õ": "O",
                    "Ö": "O",
                    "Ø": "O",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "õ": "o",
                    "ö": "o",
                    "ø": "o",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ü": "U",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ü": "u",
                    "Ý": "Y",
                    "ý": "y",
                    "ÿ": "y",
                    "Æ": "Ae",
                    "æ": "ae",
                    "Þ": "Th",
                    "þ": "th",
                    "ß": "ss",
                    "Ā": "A",
                    "Ă": "A",
                    "Ą": "A",
                    "ā": "a",
                    "ă": "a",
                    "ą": "a",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "Ď": "D",
                    "Đ": "D",
                    "ď": "d",
                    "đ": "d",
                    "Ē": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ę": "E",
                    "Ě": "E",
                    "ē": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ę": "e",
                    "ě": "e",
                    "Ĝ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ģ": "G",
                    "ĝ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ģ": "g",
                    "Ĥ": "H",
                    "Ħ": "H",
                    "ĥ": "h",
                    "ħ": "h",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "Į": "I",
                    "İ": "I",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "į": "i",
                    "ı": "i",
                    "Ĵ": "J",
                    "ĵ": "j",
                    "Ķ": "K",
                    "ķ": "k",
                    "ĸ": "k",
                    "Ĺ": "L",
                    "Ļ": "L",
                    "Ľ": "L",
                    "Ŀ": "L",
                    "Ł": "L",
                    "ĺ": "l",
                    "ļ": "l",
                    "ľ": "l",
                    "ŀ": "l",
                    "ł": "l",
                    "Ń": "N",
                    "Ņ": "N",
                    "Ň": "N",
                    "Ŋ": "N",
                    "ń": "n",
                    "ņ": "n",
                    "ň": "n",
                    "ŋ": "n",
                    "Ō": "O",
                    "Ŏ": "O",
                    "Ő": "O",
                    "ō": "o",
                    "ŏ": "o",
                    "ő": "o",
                    "Ŕ": "R",
                    "Ŗ": "R",
                    "Ř": "R",
                    "ŕ": "r",
                    "ŗ": "r",
                    "ř": "r",
                    "Ś": "S",
                    "Ŝ": "S",
                    "Ş": "S",
                    "Š": "S",
                    "ś": "s",
                    "ŝ": "s",
                    "ş": "s",
                    "š": "s",
                    "Ţ": "T",
                    "Ť": "T",
                    "Ŧ": "T",
                    "ţ": "t",
                    "ť": "t",
                    "ŧ": "t",
                    "Ũ": "U",
                    "Ū": "U",
                    "Ŭ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ų": "U",
                    "ũ": "u",
                    "ū": "u",
                    "ŭ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ų": "u",
                    "Ŵ": "W",
                    "ŵ": "w",
                    "Ŷ": "Y",
                    "ŷ": "y",
                    "Ÿ": "Y",
                    "Ź": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "ź": "z",
                    "ż": "z",
                    "ž": "z",
                    "Ĳ": "IJ",
                    "ĳ": "ij",
                    "Œ": "Oe",
                    "œ": "oe",
                    "ŉ": "'n",
                    "ſ": "s"
                },
                er = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                tr = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                },
                nr = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                rr = parseFloat,
                ir = parseInt,
                or = "object" == typeof e && e && e.Object === Object && e,
                ar = "object" == typeof self && self && self.Object === Object && self,
                sr = or || ar || Function("return this")(),
                ur = "object" == typeof t && t && !t.nodeType && t,
                cr = ur && "object" == typeof i && i && !i.nodeType && i,
                lr = cr && cr.exports === ur,
                pr = lr && or.process,
                fr = function() {
                    try {
                        return pr && pr.binding && pr.binding("util")
                    } catch (e) {}
                }(),
                dr = fr && fr.isArrayBuffer,
                hr = fr && fr.isDate,
                gr = fr && fr.isMap,
                vr = fr && fr.isRegExp,
                _r = fr && fr.isSet,
                mr = fr && fr.isTypedArray,
                yr = D("length"),
                br = k(Zn),
                xr = k(er),
                wr = k(tr),
                Cr = function e(t) {
                    function n(e) {
                        if (cu(e) && !xf(e) && !(e instanceof b)) {
                            if (e instanceof i) return e;
                            if (bl.call(e, "__wrapped__")) return aa(e)
                        }
                        return new i(e)
                    }

                    function r() {}

                    function i(e, t) {
                        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = ie
                    }

                    function b(e) {
                        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Be, this.__views__ = []
                    }

                    function k() {
                        var e = new b(this.__wrapped__);
                        return e.__actions__ = Vi(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Vi(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Vi(this.__views__), e
                    }

                    function J() {
                        if (this.__filtered__) {
                            var e = new b(this);
                            e.__dir__ = -1, e.__filtered__ = !0
                        } else e = this.clone(), e.__dir__ *= -1;
                        return e
                    }

                    function te() {
                        var e = this.__wrapped__.value(),
                            t = this.__dir__,
                            n = xf(e),
                            r = t < 0,
                            i = n ? e.length : 0,
                            o = So(0, i, this.__views__),
                            a = o.start,
                            s = o.end,
                            u = s - a,
                            c = r ? s : a - 1,
                            l = this.__iteratees__,
                            p = l.length,
                            f = 0,
                            d = Yl(u, this.__takeCount__);
                        if (!n || !r && i == u && d == u) return xi(e, this.__actions__);
                        var h = [];
                        e: for (; u-- && f < d;) {
                            c += t;
                            for (var g = -1, v = e[c]; ++g < p;) {
                                var _ = l[g],
                                    m = _.iteratee,
                                    y = _.type,
                                    b = m(v);
                                if (y == Pe) v = b;
                                else if (!b) {
                                    if (y == je) continue e;
                                    break e
                                }
                            }
                            h[f++] = v
                        }
                        return h
                    }

                    function ne(e) {
                        var t = -1,
                            n = null == e ? 0 : e.length;
                        for (this.clear(); ++t < n;) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }

                    function zt() {
                        this.__data__ = ap ? ap(null) : {}, this.size = 0
                    }

                    function tn(e) {
                        var t = this.has(e) && delete this.__data__[e];
                        return this.size -= t ? 1 : 0, t
                    }

                    function nn(e) {
                        var t = this.__data__;
                        if (ap) {
                            var n = t[e];
                            return n === ce ? ie : n
                        }
                        return bl.call(t, e) ? t[e] : ie
                    }

                    function rn(e) {
                        var t = this.__data__;
                        return ap ? t[e] !== ie : bl.call(t, e)
                    }

                    function on(e, t) {
                        var n = this.__data__;
                        return this.size += this.has(e) ? 0 : 1, n[e] = ap && t === ie ? ce : t, this
                    }

                    function an(e) {
                        var t = -1,
                            n = null == e ? 0 : e.length;
                        for (this.clear(); ++t < n;) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }

                    function sn() {
                        this.__data__ = [], this.size = 0
                    }

                    function un(e) {
                        var t = this.__data__,
                            n = In(t, e);
                        if (n < 0) return !1;
                        var r = t.length - 1;
                        return n == r ? t.pop() : Nl.call(t, n, 1), --this.size, !0
                    }

                    function cn(e) {
                        var t = this.__data__,
                            n = In(t, e);
                        return n < 0 ? ie : t[n][1]
                    }

                    function ln(e) {
                        return In(this.__data__, e) > -1
                    }

                    function pn(e, t) {
                        var n = this.__data__,
                            r = In(n, e);
                        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
                    }

                    function fn(e) {
                        var t = -1,
                            n = null == e ? 0 : e.length;
                        for (this.clear(); ++t < n;) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }

                    function dn() {
                        this.size = 0, this.__data__ = {
                            hash: new ne,
                            map: new(np || an),
                            string: new ne
                        }
                    }

                    function hn(e) {
                        var t = Ao(this, e).delete(e);
                        return this.size -= t ? 1 : 0, t
                    }

                    function gn(e) {
                        return Ao(this, e).get(e)
                    }

                    function vn(e) {
                        return Ao(this, e).has(e)
                    }

                    function _n(e, t) {
                        var n = Ao(this, e),
                            r = n.size;
                        return n.set(e, t), this.size += n.size == r ? 0 : 1, this
                    }

                    function mn(e) {
                        var t = -1,
                            n = null == e ? 0 : e.length;
                        for (this.__data__ = new fn; ++t < n;) this.add(e[t])
                    }

                    function yn(e) {
                        return this.__data__.set(e, ce), this
                    }

                    function bn(e) {
                        return this.__data__.has(e)
                    }

                    function xn(e) {
                        var t = this.__data__ = new an(e);
                        this.size = t.size
                    }

                    function wn() {
                        this.__data__ = new an, this.size = 0
                    }

                    function Cn(e) {
                        var t = this.__data__,
                            n = t.delete(e);
                        return this.size = t.size, n
                    }

                    function Tn(e) {
                        return this.__data__.get(e)
                    }

                    function En(e) {
                        return this.__data__.has(e)
                    }

                    function An(e, t) {
                        var n = this.__data__;
                        if (n instanceof an) {
                            var r = n.__data__;
                            if (!np || r.length < ae - 1) return r.push([e, t]), this.size = ++n.size, this;
                            n = this.__data__ = new fn(r)
                        }
                        return n.set(e, t), this.size = n.size, this
                    }

                    function On(e, t) {
                        var n = xf(e),
                            r = !n && bf(e),
                            i = !n && !r && Cf(e),
                            o = !n && !r && !i && Df(e),
                            a = n || r || i || o,
                            s = a ? I(e.length, dl) : [],
                            u = s.length;
                        for (var c in e) !t && !bl.call(e, c) || a && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Bo(c, u)) || s.push(c);
                        return s
                    }

                    function Dn(e) {
                        var t = e.length;
                        return t ? e[ni(0, t - 1)] : ie
                    }

                    function kn(e, t) {
                        return na(Vi(e), qn(t, 0, e.length))
                    }

                    function Sn(e) {
                        return na(Vi(e))
                    }

                    function jn(e, t, n) {
                        (n === ie || Qs(e[t], n)) && (n !== ie || t in e) || Mn(e, t, n)
                    }

                    function Pn(e, t, n) {
                        var r = e[t];
                        bl.call(e, t) && Qs(r, n) && (n !== ie || t in e) || Mn(e, t, n)
                    }

                    function In(e, t) {
                        for (var n = e.length; n--;)
                            if (Qs(e[n][0], t)) return n;
                        return -1
                    }

                    function Nn(e, t, n, r) {
                        return mp(e, function(e, i, o) {
                            t(r, e, n(e), o)
                        }), r
                    }

                    function Ln(e, t) {
                        return e && Fi(t, Hu(t), e)
                    }

                    function Rn(e, t) {
                        return e && Fi(t, Wu(t), e)
                    }

                    function Mn(e, t, n) {
                        "__proto__" == t && Bl ? Bl(e, t, {
                            configurable: !0,
                            enumerable: !0,
                            value: n,
                            writable: !0
                        }) : e[t] = n
                    }

                    function Bn(e, t) {
                        for (var n = -1, r = t.length, i = al(r), o = null == e; ++n < r;) i[n] = o ? ie : Fu(e, t[n]);
                        return i
                    }

                    function qn(e, t, n) {
                        return e === e && (n !== ie && (e = e <= n ? e : n), t !== ie && (e = e >= t ? e : t)), e
                    }

                    function Vn(e, t, n, r, i, o) {
                        var a, s = t & fe,
                            u = t & de,
                            l = t & he;
                        if (n && (a = i ? n(e, r, i, o) : n(e)), a !== ie) return a;
                        if (!uu(e)) return e;
                        var p = xf(e);
                        if (p) {
                            if (a = Io(e), !s) return Vi(e, a)
                        } else {
                            var f = Sp(e),
                                d = f == Qe || f == Ye;
                            if (Cf(e)) return Di(e, s);
                            if (f == et || f == Ue || d && !i) {
                                if (a = u || d ? {} : No(e), !s) return u ? zi(e, Rn(a, e)) : Ui(e, Ln(a, e))
                            } else {
                                if (!Xn[f]) return i ? e : {};
                                a = Lo(e, f, Vn, s)
                            }
                        }
                        o || (o = new xn);
                        var h = o.get(e);
                        if (h) return h;
                        o.set(e, a);
                        var g = l ? u ? wo : xo : u ? Wu : Hu,
                            v = p ? ie : g(e);
                        return c(v || e, function(r, i) {
                            v && (i = r, r = e[i]), Pn(a, i, Vn(r, t, n, i, e, o))
                        }), a
                    }

                    function Fn(e) {
                        var t = Hu(e);
                        return function(n) {
                            return Un(n, e, t)
                        }
                    }

                    function Un(e, t, n) {
                        var r = n.length;
                        if (null == e) return !r;
                        for (e = pl(e); r--;) {
                            var i = n[r],
                                o = t[i],
                                a = e[i];
                            if (a === ie && !(i in e) || !o(a)) return !1
                        }
                        return !0
                    }

                    function Wn(e, t, n) {
                        if ("function" != typeof e) throw new hl(ue);
                        return Ip(function() {
                            e.apply(ie, n)
                        }, t)
                    }

                    function Gn(e, t, n, r) {
                        var i = -1,
                            o = d,
                            a = !0,
                            s = e.length,
                            u = [],
                            c = t.length;
                        if (!s) return u;
                        n && (t = g(t, L(n))), r ? (o = h, a = !1) : t.length >= ae && (o = M, a = !1, t = new mn(t));
                        e: for (; ++i < s;) {
                            var l = e[i],
                                p = null == n ? l : n(l);
                            if (l = r || 0 !== l ? l : 0, a && p === p) {
                                for (var f = c; f--;)
                                    if (t[f] === p) continue e;
                                u.push(l)
                            } else o(t, p, r) || u.push(l)
                        }
                        return u
                    }

                    function Kn(e, t) {
                        var n = !0;
                        return mp(e, function(e, r, i) {
                            return n = !!t(e, r, i)
                        }), n
                    }

                    function $n(e, t, n) {
                        for (var r = -1, i = e.length; ++r < i;) {
                            var o = e[r],
                                a = t(o);
                            if (null != a && (s === ie ? a === a && !bu(a) : n(a, s))) var s = a,
                                u = o
                        }
                        return u
                    }

                    function Zn(e, t, n, r) {
                        var i = e.length;
                        for (n = Au(n), n < 0 && (n = -n > i ? 0 : i + n), r = r === ie || r > i ? i : Au(r), r < 0 && (r += i), r = n > r ? 0 : Ou(r); n < r;) e[n++] = t;
                        return e
                    }

                    function er(e, t) {
                        var n = [];
                        return mp(e, function(e, r, i) {
                            t(e, r, i) && n.push(e)
                        }), n
                    }

                    function tr(e, t, n, r, i) {
                        var o = -1,
                            a = e.length;
                        for (n || (n = Mo), i || (i = []); ++o < a;) {
                            var s = e[o];
                            t > 0 && n(s) ? t > 1 ? tr(s, t - 1, n, r, i) : v(i, s) : r || (i[i.length] = s)
                        }
                        return i
                    }

                    function nr(e, t) {
                        return e && bp(e, t, Hu)
                    }

                    function or(e, t) {
                        return e && xp(e, t, Hu)
                    }

                    function ar(e, t) {
                        return f(t, function(t) {
                            return ou(e[t])
                        })
                    }

                    function ur(e, t) {
                        t = Ai(t, e);
                        for (var n = 0, r = t.length; null != e && n < r;) e = e[ra(t[n++])];
                        return n && n == r ? e : ie
                    }

                    function cr(e, t, n) {
                        var r = t(e);
                        return xf(e) ? r : v(r, n(e))
                    }

                    function pr(e) {
                        return null == e ? e === ie ? st : Ze : Ml && Ml in pl(e) ? ko(e) : Yo(e)
                    }

                    function fr(e, t) {
                        return e > t
                    }

                    function yr(e, t) {
                        return null != e && bl.call(e, t)
                    }

                    function Cr(e, t) {
                        return null != e && t in pl(e)
                    }

                    function Er(e, t, n) {
                        return e >= Yl(t, n) && e < Ql(t, n)
                    }

                    function Ar(e, t, n) {
                        for (var r = n ? h : d, i = e[0].length, o = e.length, a = o, s = al(o), u = 1 / 0, c = []; a--;) {
                            var l = e[a];
                            a && t && (l = g(l, L(t))), u = Yl(l.length, u), s[a] = !n && (t || i >= 120 && l.length >= 120) ? new mn(a && l) : ie
                        }
                        l = e[0];
                        var p = -1,
                            f = s[0];
                        e: for (; ++p < i && c.length < u;) {
                            var v = l[p],
                                _ = t ? t(v) : v;
                            if (v = n || 0 !== v ? v : 0, !(f ? M(f, _) : r(c, _, n))) {
                                for (a = o; --a;) {
                                    var m = s[a];
                                    if (!(m ? M(m, _) : r(e[a], _, n))) continue e
                                }
                                f && f.push(_), c.push(v)
                            }
                        }
                        return c
                    }

                    function Or(e, t, n, r) {
                        return nr(e, function(e, i, o) {
                            t(r, n(e), i, o)
                        }), r
                    }

                    function Dr(e, t, n) {
                        t = Ai(t, e), e = Xo(e, t);
                        var r = null == e ? e : e[ra(Ea(t))];
                        return null == r ? ie : s(r, e, n)
                    }

                    function kr(e) {
                        return cu(e) && pr(e) == Ue
                    }

                    function Sr(e) {
                        return cu(e) && pr(e) == lt
                    }

                    function jr(e) {
                        return cu(e) && pr(e) == Ge
                    }

                    function Pr(e, t, n, r, i) {
                        return e === t || (null == e || null == t || !cu(e) && !cu(t) ? e !== e && t !== t : Ir(e, t, n, r, Pr, i))
                    }

                    function Ir(e, t, n, r, i, o) {
                        var a = xf(e),
                            s = xf(t),
                            u = a ? ze : Sp(e),
                            c = s ? ze : Sp(t);
                        u = u == Ue ? et : u, c = c == Ue ? et : c;
                        var l = u == et,
                            p = c == et,
                            f = u == c;
                        if (f && Cf(e)) {
                            if (!Cf(t)) return !1;
                            a = !0, l = !1
                        }
                        if (f && !l) return o || (o = new xn), a || Df(e) ? _o(e, t, n, r, i, o) : mo(e, t, u, n, r, i, o);
                        if (!(n & ge)) {
                            var d = l && bl.call(e, "__wrapped__"),
                                h = p && bl.call(t, "__wrapped__");
                            if (d || h) {
                                var g = d ? e.value() : e,
                                    v = h ? t.value() : t;
                                return o || (o = new xn), i(g, v, n, r, o)
                            }
                        }
                        return !!f && (o || (o = new xn), yo(e, t, n, r, i, o))
                    }

                    function Nr(e) {
                        return cu(e) && Sp(e) == Je
                    }

                    function Lr(e, t, n, r) {
                        var i = n.length,
                            o = i,
                            a = !r;
                        if (null == e) return !o;
                        for (e = pl(e); i--;) {
                            var s = n[i];
                            if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
                        }
                        for (; ++i < o;) {
                            s = n[i];
                            var u = s[0],
                                c = e[u],
                                l = s[1];
                            if (a && s[2]) {
                                if (c === ie && !(u in e)) return !1
                            } else {
                                var p = new xn;
                                if (r) var f = r(c, l, u, e, t, p);
                                if (!(f === ie ? Pr(l, c, ge | ve, r, p) : f)) return !1
                            }
                        }
                        return !0
                    }

                    function Rr(e) {
                        if (!uu(e) || zo(e)) return !1;
                        var t = ou(e) ? Al : Qt;
                        return t.test(ia(e))
                    }

                    function Mr(e) {
                        return cu(e) && pr(e) == rt
                    }

                    function Br(e) {
                        return cu(e) && Sp(e) == it
                    }

                    function qr(e) {
                        return cu(e) && su(e.length) && !!Jn[pr(e)]
                    }

                    function Vr(e) {
                        return "function" == typeof e ? e : null == e ? Nc : "object" == typeof e ? xf(e) ? Gr(e[0], e[1]) : Wr(e) : Uc(e)
                    }

                    function Fr(e) {
                        if (!Ho(e)) return $l(e);
                        var t = [];
                        for (var n in pl(e)) bl.call(e, n) && "constructor" != n && t.push(n);
                        return t
                    }

                    function Ur(e) {
                        if (!uu(e)) return Qo(e);
                        var t = Ho(e),
                            n = [];
                        for (var r in e)("constructor" != r || !t && bl.call(e, r)) && n.push(r);
                        return n
                    }

                    function zr(e, t) {
                        return e < t
                    }

                    function Hr(e, t) {
                        var n = -1,
                            r = Ys(e) ? al(e.length) : [];
                        return mp(e, function(e, i, o) {
                            r[++n] = t(e, i, o)
                        }), r
                    }

                    function Wr(e) {
                        var t = Oo(e);
                        return 1 == t.length && t[0][2] ? Go(t[0][0], t[0][1]) : function(n) {
                            return n === e || Lr(n, e, t)
                        }
                    }

                    function Gr(e, t) {
                        return Vo(e) && Wo(t) ? Go(ra(e), t) : function(n) {
                            var r = Fu(n, e);
                            return r === ie && r === t ? zu(n, e) : Pr(t, r, ge | ve)
                        }
                    }

                    function Kr(e, t, n, r, i) {
                        e !== t && bp(t, function(o, a) {
                            if (uu(o)) i || (i = new xn), $r(e, t, a, n, Kr, r, i);
                            else {
                                var s = r ? r(e[a], o, a + "", e, t, i) : ie;
                                s === ie && (s = o), jn(e, a, s)
                            }
                        }, Wu)
                    }

                    function $r(e, t, n, r, i, o, a) {
                        var s = e[n],
                            u = t[n],
                            c = a.get(u);
                        if (c) return void jn(e, n, c);
                        var l = o ? o(s, u, n + "", e, t, a) : ie,
                            p = l === ie;
                        if (p) {
                            var f = xf(u),
                                d = !f && Cf(u),
                                h = !f && !d && Df(u);
                            l = u, f || d || h ? xf(s) ? l = s : Js(s) ? l = Vi(s) : d ? (p = !1, l = Di(u, !0)) : h ? (p = !1, l = Li(u, !0)) : l = [] : _u(u) || bf(u) ? (l = s, bf(s) ? l = ku(s) : (!uu(s) || r && ou(s)) && (l = No(u))) : p = !1
                        }
                        p && (a.set(u, l), i(l, u, r, o, a), a.delete(u)), jn(e, n, l)
                    }

                    function Qr(e, t) {
                        var n = e.length;
                        if (n) return t += t < 0 ? n : 0, Bo(t, n) ? e[t] : ie
                    }

                    function Yr(e, t, n) {
                        var r = -1;
                        t = g(t.length ? t : [Nc], L(Eo()));
                        var i = Hr(e, function(e, n, i) {
                            var o = g(t, function(t) {
                                return t(e)
                            });
                            return {
                                criteria: o,
                                index: ++r,
                                value: e
                            }
                        });
                        return j(i, function(e, t) {
                            return Mi(e, t, n)
                        })
                    }

                    function Jr(e, t) {
                        return Xr(e, t, function(t, n) {
                            return zu(e, n)
                        })
                    }

                    function Xr(e, t, n) {
                        for (var r = -1, i = t.length, o = {}; ++r < i;) {
                            var a = t[r],
                                s = ur(e, a);
                            n(s, a) && ui(o, Ai(a, e), s)
                        }
                        return o
                    }

                    function Zr(e) {
                        return function(t) {
                            return ur(t, e)
                        }
                    }

                    function ei(e, t, n, r) {
                        var i = r ? E : T,
                            o = -1,
                            a = t.length,
                            s = e;
                        for (e === t && (t = Vi(t)), n && (s = g(e, L(n))); ++o < a;)
                            for (var u = 0, c = t[o], l = n ? n(c) : c;
                                (u = i(s, l, u, r)) > -1;) s !== e && Nl.call(s, u, 1), Nl.call(e, u, 1);
                        return e
                    }

                    function ti(e, t) {
                        for (var n = e ? t.length : 0, r = n - 1; n--;) {
                            var i = t[n];
                            if (n == r || i !== o) {
                                var o = i;
                                Bo(i) ? Nl.call(e, i, 1) : mi(e, i)
                            }
                        }
                        return e
                    }

                    function ni(e, t) {
                        return e + zl(Zl() * (t - e + 1))
                    }

                    function ri(e, t, n, r) {
                        for (var i = -1, o = Ql(Ul((t - e) / (n || 1)), 0), a = al(o); o--;) a[r ? o : ++i] = e, e += n;
                        return a
                    }

                    function ii(e, t) {
                        var n = "";
                        if (!e || t < 1 || t > Le) return n;
                        do t % 2 && (n += e), t = zl(t / 2), t && (e += e); while (t);
                        return n
                    }

                    function oi(e, t) {
                        return Np(Jo(e, t, Nc), e + "")
                    }

                    function ai(e) {
                        return Dn(rc(e))
                    }

                    function si(e, t) {
                        var n = rc(e);
                        return na(n, qn(t, 0, n.length))
                    }

                    function ui(e, t, n, r) {
                        if (!uu(e)) return e;
                        t = Ai(t, e);
                        for (var i = -1, o = t.length, a = o - 1, s = e; null != s && ++i < o;) {
                            var u = ra(t[i]),
                                c = n;
                            if (i != a) {
                                var l = s[u];
                                c = r ? r(l, u, s) : ie, c === ie && (c = uu(l) ? l : Bo(t[i + 1]) ? [] : {})
                            }
                            Pn(s, u, c), s = s[u]
                        }
                        return e
                    }

                    function ci(e) {
                        return na(rc(e))
                    }

                    function li(e, t, n) {
                        var r = -1,
                            i = e.length;
                        t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
                        for (var o = al(i); ++r < i;) o[r] = e[r + t];
                        return o
                    }

                    function pi(e, t) {
                        var n;
                        return mp(e, function(e, r, i) {
                            return n = t(e, r, i), !n
                        }), !!n
                    }

                    function fi(e, t, n) {
                        var r = 0,
                            i = null == e ? r : e.length;
                        if ("number" == typeof t && t === t && i <= Ve) {
                            for (; r < i;) {
                                var o = r + i >>> 1,
                                    a = e[o];
                                null !== a && !bu(a) && (n ? a <= t : a < t) ? r = o + 1 : i = o
                            }
                            return i
                        }
                        return di(e, t, Nc, n)
                    }

                    function di(e, t, n, r) {
                        t = n(t);
                        for (var i = 0, o = null == e ? 0 : e.length, a = t !== t, s = null === t, u = bu(t), c = t === ie; i < o;) {
                            var l = zl((i + o) / 2),
                                p = n(e[l]),
                                f = p !== ie,
                                d = null === p,
                                h = p === p,
                                g = bu(p);
                            if (a) var v = r || h;
                            else v = c ? h && (r || f) : s ? h && f && (r || !d) : u ? h && f && !d && (r || !g) : !d && !g && (r ? p <= t : p < t);
                            v ? i = l + 1 : o = l
                        }
                        return Yl(o, qe)
                    }

                    function hi(e, t) {
                        for (var n = -1, r = e.length, i = 0, o = []; ++n < r;) {
                            var a = e[n],
                                s = t ? t(a) : a;
                            if (!n || !Qs(s, u)) {
                                var u = s;
                                o[i++] = 0 === a ? 0 : a
                            }
                        }
                        return o
                    }

                    function gi(e) {
                        return "number" == typeof e ? e : bu(e) ? Me : +e
                    }

                    function vi(e) {
                        if ("string" == typeof e) return e;
                        if (xf(e)) return g(e, vi) + "";
                        if (bu(e)) return vp ? vp.call(e) : "";
                        var t = e + "";
                        return "0" == t && 1 / e == -Ne ? "-0" : t
                    }

                    function _i(e, t, n) {
                        var r = -1,
                            i = d,
                            o = e.length,
                            a = !0,
                            s = [],
                            u = s;
                        if (n) a = !1, i = h;
                        else if (o >= ae) {
                            var c = t ? null : Ap(e);
                            if (c) return Q(c);
                            a = !1, i = M, u = new mn
                        } else u = t ? [] : s;
                        e: for (; ++r < o;) {
                            var l = e[r],
                                p = t ? t(l) : l;
                            if (l = n || 0 !== l ? l : 0, a && p === p) {
                                for (var f = u.length; f--;)
                                    if (u[f] === p) continue e;
                                t && u.push(p), s.push(l)
                            } else i(u, p, n) || (u !== s && u.push(p), s.push(l))
                        }
                        return s
                    }

                    function mi(e, t) {
                        return t = Ai(t, e), e = Xo(e, t), null == e || delete e[ra(Ea(t))]
                    }

                    function yi(e, t, n, r) {
                        return ui(e, t, n(ur(e, t)), r)
                    }

                    function bi(e, t, n, r) {
                        for (var i = e.length, o = r ? i : -1;
                            (r ? o-- : ++o < i) && t(e[o], o, e););
                        return n ? li(e, r ? 0 : o, r ? o + 1 : i) : li(e, r ? o + 1 : 0, r ? i : o)
                    }

                    function xi(e, t) {
                        var n = e;
                        return n instanceof b && (n = n.value()), _(t, function(e, t) {
                            return t.func.apply(t.thisArg, v([e], t.args))
                        }, n)
                    }

                    function wi(e, t, n) {
                        var r = e.length;
                        if (r < 2) return r ? _i(e[0]) : [];
                        for (var i = -1, o = al(r); ++i < r;)
                            for (var a = e[i], s = -1; ++s < r;) s != i && (o[i] = Gn(o[i] || a, e[s], t, n));
                        return _i(tr(o, 1), t, n)
                    }

                    function Ci(e, t, n) {
                        for (var r = -1, i = e.length, o = t.length, a = {}; ++r < i;) {
                            var s = r < o ? t[r] : ie;
                            n(a, e[r], s)
                        }
                        return a
                    }

                    function Ti(e) {
                        return Js(e) ? e : []
                    }

                    function Ei(e) {
                        return "function" == typeof e ? e : Nc
                    }

                    function Ai(e, t) {
                        return xf(e) ? e : Vo(e, t) ? [e] : Lp(ju(e))
                    }

                    function Oi(e, t, n) {
                        var r = e.length;
                        return n = n === ie ? r : n, !t && n >= r ? e : li(e, t, n)
                    }

                    function Di(e, t) {
                        if (t) return e.slice();
                        var n = e.length,
                            r = Sl ? Sl(n) : new e.constructor(n);
                        return e.copy(r), r
                    }

                    function ki(e) {
                        var t = new e.constructor(e.byteLength);
                        return new kl(t).set(new kl(e)), t
                    }

                    function Si(e, t) {
                        var n = t ? ki(e.buffer) : e.buffer;
                        return new e.constructor(n, e.byteOffset, e.byteLength)
                    }

                    function ji(e, t, n) {
                        var r = t ? n(G(e), fe) : G(e);
                        return _(r, o, new e.constructor)
                    }

                    function Pi(e) {
                        var t = new e.constructor(e.source, Gt.exec(e));
                        return t.lastIndex = e.lastIndex, t
                    }

                    function Ii(e, t, n) {
                        var r = t ? n(Q(e), fe) : Q(e);
                        return _(r, a, new e.constructor)
                    }

                    function Ni(e) {
                        return gp ? pl(gp.call(e)) : {}
                    }

                    function Li(e, t) {
                        var n = t ? ki(e.buffer) : e.buffer;
                        return new e.constructor(n, e.byteOffset, e.length)
                    }

                    function Ri(e, t) {
                        if (e !== t) {
                            var n = e !== ie,
                                r = null === e,
                                i = e === e,
                                o = bu(e),
                                a = t !== ie,
                                s = null === t,
                                u = t === t,
                                c = bu(t);
                            if (!s && !c && !o && e > t || o && a && u && !s && !c || r && a && u || !n && u || !i) return 1;
                            if (!r && !o && !c && e < t || c && n && i && !r && !o || s && n && i || !a && i || !u) return -1
                        }
                        return 0
                    }

                    function Mi(e, t, n) {
                        for (var r = -1, i = e.criteria, o = t.criteria, a = i.length, s = n.length; ++r < a;) {
                            var u = Ri(i[r], o[r]);
                            if (u) {
                                if (r >= s) return u;
                                var c = n[r];
                                return u * ("desc" == c ? -1 : 1)
                            }
                        }
                        return e.index - t.index
                    }

                    function Bi(e, t, n, r) {
                        for (var i = -1, o = e.length, a = n.length, s = -1, u = t.length, c = Ql(o - a, 0), l = al(u + c), p = !r; ++s < u;) l[s] = t[s];
                        for (; ++i < a;)(p || i < o) && (l[n[i]] = e[i]);
                        for (; c--;) l[s++] = e[i++];
                        return l
                    }

                    function qi(e, t, n, r) {
                        for (var i = -1, o = e.length, a = -1, s = n.length, u = -1, c = t.length, l = Ql(o - s, 0), p = al(l + c), f = !r; ++i < l;) p[i] = e[i];
                        for (var d = i; ++u < c;) p[d + u] = t[u];
                        for (; ++a < s;)(f || i < o) && (p[d + n[a]] = e[i++]);
                        return p
                    }

                    function Vi(e, t) {
                        var n = -1,
                            r = e.length;
                        for (t || (t = al(r)); ++n < r;) t[n] = e[n];
                        return t
                    }

                    function Fi(e, t, n, r) {
                        var i = !n;
                        n || (n = {});
                        for (var o = -1, a = t.length; ++o < a;) {
                            var s = t[o],
                                u = r ? r(n[s], e[s], s, n, e) : ie;
                            u === ie && (u = e[s]), i ? Mn(n, s, u) : Pn(n, s, u)
                        }
                        return n
                    }

                    function Ui(e, t) {
                        return Fi(e, Dp(e), t)
                    }

                    function zi(e, t) {
                        return Fi(e, kp(e), t)
                    }

                    function Hi(e, t) {
                        return function(n, r) {
                            var i = xf(n) ? u : Nn,
                                o = t ? t() : {};
                            return i(n, e, Eo(r, 2), o)
                        }
                    }

                    function Wi(e) {
                        return oi(function(t, n) {
                            var r = -1,
                                i = n.length,
                                o = i > 1 ? n[i - 1] : ie,
                                a = i > 2 ? n[2] : ie;
                            for (o = e.length > 3 && "function" == typeof o ? (i--, o) : ie, a && qo(n[0], n[1], a) && (o = i < 3 ? ie : o, i = 1), t = pl(t); ++r < i;) {
                                var s = n[r];
                                s && e(t, s, r, o)
                            }
                            return t
                        })
                    }

                    function Gi(e, t) {
                        return function(n, r) {
                            if (null == n) return n;
                            if (!Ys(n)) return e(n, r);
                            for (var i = n.length, o = t ? i : -1, a = pl(n);
                                (t ? o-- : ++o < i) && r(a[o], o, a) !== !1;);
                            return n
                        }
                    }

                    function Ki(e) {
                        return function(t, n, r) {
                            for (var i = -1, o = pl(t), a = r(t), s = a.length; s--;) {
                                var u = a[e ? s : ++i];
                                if (n(o[u], u, o) === !1) break
                            }
                            return t
                        }
                    }

                    function $i(e, t, n) {
                        function r() {
                            var t = this && this !== sr && this instanceof r ? o : e;
                            return t.apply(i ? n : this, arguments)
                        }
                        var i = t & _e,
                            o = Ji(e);
                        return r
                    }

                    function Qi(e) {
                        return function(t) {
                            t = ju(t);
                            var n = z(t) ? ee(t) : ie,
                                r = n ? n[0] : t.charAt(0),
                                i = n ? Oi(n, 1).join("") : t.slice(1);
                            return r[e]() + i
                        }
                    }

                    function Yi(e) {
                        return function(t) {
                            return _(kc(cc(t).replace(zn, "")), e, "")
                        }
                    }

                    function Ji(e) {
                        return function() {
                            var t = arguments;
                            switch (t.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t[0]);
                                case 2:
                                    return new e(t[0], t[1]);
                                case 3:
                                    return new e(t[0], t[1], t[2]);
                                case 4:
                                    return new e(t[0], t[1], t[2], t[3]);
                                case 5:
                                    return new e(t[0], t[1], t[2], t[3], t[4]);
                                case 6:
                                    return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                case 7:
                                    return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                            }
                            var n = _p(e.prototype),
                                r = e.apply(n, t);
                            return uu(r) ? r : n
                        }
                    }

                    function Xi(e, t, n) {
                        function r() {
                            for (var o = arguments.length, a = al(o), u = o, c = To(r); u--;) a[u] = arguments[u];
                            var l = o < 3 && a[0] !== c && a[o - 1] !== c ? [] : $(a, c);
                            if (o -= l.length, o < n) return co(e, t, to, r.placeholder, ie, a, l, ie, ie, n - o);
                            var p = this && this !== sr && this instanceof r ? i : e;
                            return s(p, this, a)
                        }
                        var i = Ji(e);
                        return r
                    }

                    function Zi(e) {
                        return function(t, n, r) {
                            var i = pl(t);
                            if (!Ys(t)) {
                                var o = Eo(n, 3);
                                t = Hu(t), n = function(e) {
                                    return o(i[e], e, i)
                                }
                            }
                            var a = e(t, n, r);
                            return a > -1 ? i[o ? t[a] : a] : ie
                        }
                    }

                    function eo(e) {
                        return bo(function(t) {
                            var n = t.length,
                                r = n,
                                o = i.prototype.thru;
                            for (e && t.reverse(); r--;) {
                                var a = t[r];
                                if ("function" != typeof a) throw new hl(ue);
                                if (o && !s && "wrapper" == Co(a)) var s = new i([], !0)
                            }
                            for (r = s ? r : n; ++r < n;) {
                                a = t[r];
                                var u = Co(a),
                                    c = "wrapper" == u ? Op(a) : ie;
                                s = c && Uo(c[0]) && c[1] == (Te | be | we | Ee) && !c[4].length && 1 == c[9] ? s[Co(c[0])].apply(s, c[3]) : 1 == a.length && Uo(a) ? s[u]() : s.thru(a)
                            }
                            return function() {
                                var e = arguments,
                                    r = e[0];
                                if (s && 1 == e.length && xf(r)) return s.plant(r).value();
                                for (var i = 0, o = n ? t[i].apply(this, e) : r; ++i < n;) o = t[i].call(this, o);
                                return o
                            }
                        })
                    }

                    function to(e, t, n, r, i, o, a, s, u, c) {
                        function l() {
                            for (var _ = arguments.length, m = al(_), y = _; y--;) m[y] = arguments[y];
                            if (h) var b = To(l),
                                x = V(m, b);
                            if (r && (m = Bi(m, r, i, h)), o && (m = qi(m, o, a, h)), _ -= x, h && _ < c) {
                                var w = $(m, b);
                                return co(e, t, to, l.placeholder, n, m, w, s, u, c - _)
                            }
                            var C = f ? n : this,
                                T = d ? C[e] : e;
                            return _ = m.length, s ? m = Zo(m, s) : g && _ > 1 && m.reverse(), p && u < _ && (m.length = u), this && this !== sr && this instanceof l && (T = v || Ji(T)), T.apply(C, m)
                        }
                        var p = t & Te,
                            f = t & _e,
                            d = t & me,
                            h = t & (be | xe),
                            g = t & Ae,
                            v = d ? ie : Ji(e);
                        return l
                    }

                    function no(e, t) {
                        return function(n, r) {
                            return Or(n, e, t(r), {})
                        }
                    }

                    function ro(e, t) {
                        return function(n, r) {
                            var i;
                            if (n === ie && r === ie) return t;
                            if (n !== ie && (i = n), r !== ie) {
                                if (i === ie) return r;
                                "string" == typeof n || "string" == typeof r ? (n = vi(n), r = vi(r)) : (n = gi(n), r = gi(r)), i = e(n, r)
                            }
                            return i
                        }
                    }

                    function io(e) {
                        return bo(function(t) {
                            return t = g(t, L(Eo())), oi(function(n) {
                                var r = this;
                                return e(t, function(e) {
                                    return s(e, r, n)
                                })
                            })
                        })
                    }

                    function oo(e, t) {
                        t = t === ie ? " " : vi(t);
                        var n = t.length;
                        if (n < 2) return n ? ii(t, e) : t;
                        var r = ii(t, Ul(e / Z(t)));
                        return z(t) ? Oi(ee(r), 0, e).join("") : r.slice(0, e)
                    }

                    function ao(e, t, n, r) {
                        function i() {
                            for (var t = -1, u = arguments.length, c = -1, l = r.length, p = al(l + u), f = this && this !== sr && this instanceof i ? a : e; ++c < l;) p[c] = r[c];
                            for (; u--;) p[c++] = arguments[++t];
                            return s(f, o ? n : this, p)
                        }
                        var o = t & _e,
                            a = Ji(e);
                        return i
                    }

                    function so(e) {
                        return function(t, n, r) {
                            return r && "number" != typeof r && qo(t, n, r) && (n = r = ie), t = Eu(t), n === ie ? (n = t, t = 0) : n = Eu(n), r = r === ie ? t < n ? 1 : -1 : Eu(r), ri(t, n, r, e)
                        }
                    }

                    function uo(e) {
                        return function(t, n) {
                            return "string" == typeof t && "string" == typeof n || (t = Du(t), n = Du(n)), e(t, n)
                        }
                    }

                    function co(e, t, n, r, i, o, a, s, u, c) {
                        var l = t & be,
                            p = l ? a : ie,
                            f = l ? ie : a,
                            d = l ? o : ie,
                            h = l ? ie : o;
                        t |= l ? we : Ce, t &= ~(l ? Ce : we), t & ye || (t &= ~(_e | me));
                        var g = [e, t, i, d, p, h, f, s, u, c],
                            v = n.apply(ie, g);
                        return Uo(e) && Pp(v, g), v.placeholder = r, ea(v, e, t)
                    }

                    function lo(e) {
                        var t = ll[e];
                        return function(e, n) {
                            if (e = Du(e), n = null == n ? 0 : Yl(Au(n), 292)) {
                                var r = (ju(e) + "e").split("e"),
                                    i = t(r[0] + "e" + (+r[1] + n));
                                return r = (ju(i) + "e").split("e"), +(r[0] + "e" + (+r[1] - n))
                            }
                            return t(e)
                        }
                    }

                    function po(e) {
                        return function(t) {
                            var n = Sp(t);
                            return n == Je ? G(t) : n == it ? Y(t) : N(t, e(t))
                        }
                    }

                    function fo(e, t, n, r, i, o, a, s) {
                        var u = t & me;
                        if (!u && "function" != typeof e) throw new hl(ue);
                        var c = r ? r.length : 0;
                        if (c || (t &= ~(we | Ce), r = i = ie), a = a === ie ? a : Ql(Au(a), 0), s = s === ie ? s : Au(s), c -= i ? i.length : 0, t & Ce) {
                            var l = r,
                                p = i;
                            r = i = ie
                        }
                        var f = u ? ie : Op(e),
                            d = [e, t, n, r, i, l, p, o, a, s];
                        if (f && $o(d, f), e = d[0], t = d[1], n = d[2], r = d[3], i = d[4], s = d[9] = d[9] === ie ? u ? 0 : e.length : Ql(d[9] - c, 0), !s && t & (be | xe) && (t &= ~(be | xe)), t && t != _e) h = t == be || t == xe ? Xi(e, t, s) : t != we && t != (_e | we) || i.length ? to.apply(ie, d) : ao(e, t, n, r);
                        else var h = $i(e, t, n);
                        var g = f ? wp : Pp;
                        return ea(g(h, d), e, t)
                    }

                    function ho(e, t, n, r) {
                        return e === ie || Qs(e, _l[n]) && !bl.call(r, n) ? t : e
                    }

                    function go(e, t, n, r, i, o) {
                        return uu(e) && uu(t) && (o.set(t, e), Kr(e, t, ie, go, o), o.delete(t)), e
                    }

                    function vo(e) {
                        return _u(e) ? ie : e
                    }

                    function _o(e, t, n, r, i, o) {
                        var a = n & ge,
                            s = e.length,
                            u = t.length;
                        if (s != u && !(a && u > s)) return !1;
                        var c = o.get(e);
                        if (c && o.get(t)) return c == t;
                        var l = -1,
                            p = !0,
                            f = n & ve ? new mn : ie;
                        for (o.set(e, t), o.set(t, e); ++l < s;) {
                            var d = e[l],
                                h = t[l];
                            if (r) var g = a ? r(h, d, l, t, e, o) : r(d, h, l, e, t, o);
                            if (g !== ie) {
                                if (g) continue;
                                p = !1;
                                break
                            }
                            if (f) {
                                if (!y(t, function(e, t) {
                                        if (!M(f, t) && (d === e || i(d, e, n, r, o))) return f.push(t)
                                    })) {
                                    p = !1;
                                    break
                                }
                            } else if (d !== h && !i(d, h, n, r, o)) {
                                p = !1;
                                break
                            }
                        }
                        return o.delete(e), o.delete(t), p
                    }

                    function mo(e, t, n, r, i, o, a) {
                        switch (n) {
                            case pt:
                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                e = e.buffer, t = t.buffer;
                            case lt:
                                return !(e.byteLength != t.byteLength || !o(new kl(e), new kl(t)));
                            case We:
                            case Ge:
                            case Xe:
                                return Qs(+e, +t);
                            case $e:
                                return e.name == t.name && e.message == t.message;
                            case rt:
                            case ot:
                                return e == t + "";
                            case Je:
                                var s = G;
                            case it:
                                var u = r & ge;
                                if (s || (s = Q), e.size != t.size && !u) return !1;
                                var c = a.get(e);
                                if (c) return c == t;
                                r |= ve, a.set(e, t);
                                var l = _o(s(e), s(t), r, i, o, a);
                                return a.delete(e), l;
                            case at:
                                if (gp) return gp.call(e) == gp.call(t)
                        }
                        return !1
                    }

                    function yo(e, t, n, r, i, o) {
                        var a = n & ge,
                            s = xo(e),
                            u = s.length,
                            c = xo(t),
                            l = c.length;
                        if (u != l && !a) return !1;
                        for (var p = u; p--;) {
                            var f = s[p];
                            if (!(a ? f in t : bl.call(t, f))) return !1
                        }
                        var d = o.get(e);
                        if (d && o.get(t)) return d == t;
                        var h = !0;
                        o.set(e, t), o.set(t, e);
                        for (var g = a; ++p < u;) {
                            f = s[p];
                            var v = e[f],
                                _ = t[f];
                            if (r) var m = a ? r(_, v, f, t, e, o) : r(v, _, f, e, t, o);
                            if (!(m === ie ? v === _ || i(v, _, n, r, o) : m)) {
                                h = !1;
                                break
                            }
                            g || (g = "constructor" == f)
                        }
                        if (h && !g) {
                            var y = e.constructor,
                                b = t.constructor;
                            y != b && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof b && b instanceof b) && (h = !1)
                        }
                        return o.delete(e), o.delete(t), h
                    }

                    function bo(e) {
                        return Np(Jo(e, ie, _a), e + "")
                    }

                    function xo(e) {
                        return cr(e, Hu, Dp)
                    }

                    function wo(e) {
                        return cr(e, Wu, kp)
                    }

                    function Co(e) {
                        for (var t = e.name + "", n = up[t], r = bl.call(up, t) ? n.length : 0; r--;) {
                            var i = n[r],
                                o = i.func;
                            if (null == o || o == e) return i.name
                        }
                        return t
                    }

                    function To(e) {
                        var t = bl.call(n, "placeholder") ? n : e;
                        return t.placeholder
                    }

                    function Eo() {
                        var e = n.iteratee || Lc;
                        return e = e === Lc ? Vr : e, arguments.length ? e(arguments[0], arguments[1]) : e
                    }

                    function Ao(e, t) {
                        var n = e.__data__;
                        return Fo(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
                    }

                    function Oo(e) {
                        for (var t = Hu(e), n = t.length; n--;) {
                            var r = t[n],
                                i = e[r];
                            t[n] = [r, i, Wo(i)]
                        }
                        return t
                    }

                    function Do(e, t) {
                        var n = U(e, t);
                        return Rr(n) ? n : ie
                    }

                    function ko(e) {
                        var t = bl.call(e, Ml),
                            n = e[Ml];
                        try {
                            e[Ml] = ie;
                            var r = !0
                        } catch (e) {}
                        var i = Cl.call(e);
                        return r && (t ? e[Ml] = n : delete e[Ml]), i
                    }

                    function So(e, t, n) {
                        for (var r = -1, i = n.length; ++r < i;) {
                            var o = n[r],
                                a = o.size;
                            switch (o.type) {
                                case "drop":
                                    e += a;
                                    break;
                                case "dropRight":
                                    t -= a;
                                    break;
                                case "take":
                                    t = Yl(t, e + a);
                                    break;
                                case "takeRight":
                                    e = Ql(e, t - a)
                            }
                        }
                        return {
                            start: e,
                            end: t
                        }
                    }

                    function jo(e) {
                        var t = e.match(Ft);
                        return t ? t[1].split(Ut) : []
                    }

                    function Po(e, t, n) {
                        t = Ai(t, e);
                        for (var r = -1, i = t.length, o = !1; ++r < i;) {
                            var a = ra(t[r]);
                            if (!(o = null != e && n(e, a))) break;
                            e = e[a]
                        }
                        return o || ++r != i ? o : (i = null == e ? 0 : e.length, !!i && su(i) && Bo(a, i) && (xf(e) || bf(e)))
                    }

                    function Io(e) {
                        var t = e.length,
                            n = e.constructor(t);
                        return t && "string" == typeof e[0] && bl.call(e, "index") && (n.index = e.index, n.input = e.input), n
                    }

                    function No(e) {
                        return "function" != typeof e.constructor || Ho(e) ? {} : _p(jl(e))
                    }

                    function Lo(e, t, n, r) {
                        var i = e.constructor;
                        switch (t) {
                            case lt:
                                return ki(e);
                            case We:
                            case Ge:
                                return new i(+e);
                            case pt:
                                return Si(e, r);
                            case ft:
                            case dt:
                            case ht:
                            case gt:
                            case vt:
                            case _t:
                            case mt:
                            case yt:
                            case bt:
                                return Li(e, r);
                            case Je:
                                return ji(e, r, n);
                            case Xe:
                            case ot:
                                return new i(e);
                            case rt:
                                return Pi(e);
                            case it:
                                return Ii(e, r, n);
                            case at:
                                return Ni(e)
                        }
                    }

                    function Ro(e, t) {
                        var n = t.length;
                        if (!n) return e;
                        var r = n - 1;
                        return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(Vt, "{\n/* [wrapped with " + t + "] */\n")
                    }

                    function Mo(e) {
                        return xf(e) || bf(e) || !!(Ll && e && e[Ll])
                    }

                    function Bo(e, t) {
                        return t = null == t ? Le : t, !!t && ("number" == typeof e || Jt.test(e)) && e > -1 && e % 1 == 0 && e < t
                    }

                    function qo(e, t, n) {
                        if (!uu(n)) return !1;
                        var r = typeof t;
                        return !!("number" == r ? Ys(n) && Bo(t, n.length) : "string" == r && t in n) && Qs(n[t], e)
                    }

                    function Vo(e, t) {
                        if (xf(e)) return !1;
                        var n = typeof e;
                        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !bu(e)) || (Pt.test(e) || !jt.test(e) || null != t && e in pl(t))
                    }

                    function Fo(e) {
                        var t = typeof e;
                        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                    }

                    function Uo(e) {
                        var t = Co(e),
                            r = n[t];
                        if ("function" != typeof r || !(t in b.prototype)) return !1;
                        if (e === r) return !0;
                        var i = Op(r);
                        return !!i && e === i[0]
                    }

                    function zo(e) {
                        return !!wl && wl in e
                    }

                    function Ho(e) {
                        var t = e && e.constructor,
                            n = "function" == typeof t && t.prototype || _l;
                        return e === n
                    }

                    function Wo(e) {
                        return e === e && !uu(e)
                    }

                    function Go(e, t) {
                        return function(n) {
                            return null != n && (n[e] === t && (t !== ie || e in pl(n)))
                        }
                    }

                    function Ko(e) {
                        var t = Ls(e, function(e) {
                                return n.size === le && n.clear(), e
                            }),
                            n = t.cache;
                        return t
                    }

                    function $o(e, t) {
                        var n = e[1],
                            r = t[1],
                            i = n | r,
                            o = i < (_e | me | Te),
                            a = r == Te && n == be || r == Te && n == Ee && e[7].length <= t[8] || r == (Te | Ee) && t[7].length <= t[8] && n == be;
                        if (!o && !a) return e;
                        r & _e && (e[2] = t[2], i |= n & _e ? 0 : ye);
                        var s = t[3];
                        if (s) {
                            var u = e[3];
                            e[3] = u ? Bi(u, s, t[4]) : s, e[4] = u ? $(e[3], pe) : t[4]
                        }
                        return s = t[5], s && (u = e[5], e[5] = u ? qi(u, s, t[6]) : s, e[6] = u ? $(e[5], pe) : t[6]), s = t[7], s && (e[7] = s), r & Te && (e[8] = null == e[8] ? t[8] : Yl(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = i, e
                    }

                    function Qo(e) {
                        var t = [];
                        if (null != e)
                            for (var n in pl(e)) t.push(n);
                        return t
                    }

                    function Yo(e) {
                        return Cl.call(e)
                    }

                    function Jo(e, t, n) {
                        return t = Ql(t === ie ? e.length - 1 : t, 0),
                            function() {
                                for (var r = arguments, i = -1, o = Ql(r.length - t, 0), a = al(o); ++i < o;) a[i] = r[t + i];
                                i = -1;
                                for (var u = al(t + 1); ++i < t;) u[i] = r[i];
                                return u[t] = n(a), s(e, this, u)
                            }
                    }

                    function Xo(e, t) {
                        return t.length < 2 ? e : ur(e, li(t, 0, -1))
                    }

                    function Zo(e, t) {
                        for (var n = e.length, r = Yl(t.length, n), i = Vi(e); r--;) {
                            var o = t[r];
                            e[r] = Bo(o, n) ? i[o] : ie
                        }
                        return e
                    }

                    function ea(e, t, n) {
                        var r = t + "";
                        return Np(e, Ro(r, oa(jo(r), n)))
                    }

                    function ta(e) {
                        var t = 0,
                            n = 0;
                        return function() {
                            var r = Jl(),
                                i = Se - (r - n);
                            if (n = r, i > 0) {
                                if (++t >= ke) return arguments[0]
                            } else t = 0;
                            return e.apply(ie, arguments)
                        }
                    }

                    function na(e, t) {
                        var n = -1,
                            r = e.length,
                            i = r - 1;
                        for (t = t === ie ? r : t; ++n < t;) {
                            var o = ni(n, i),
                                a = e[o];
                            e[o] = e[n], e[n] = a
                        }
                        return e.length = t, e
                    }

                    function ra(e) {
                        if ("string" == typeof e || bu(e)) return e;
                        var t = e + "";
                        return "0" == t && 1 / e == -Ne ? "-0" : t
                    }

                    function ia(e) {
                        if (null != e) {
                            try {
                                return yl.call(e)
                            } catch (e) {}
                            try {
                                return e + ""
                            } catch (e) {}
                        }
                        return ""
                    }

                    function oa(e, t) {
                        return c(Fe, function(n) {
                            var r = "_." + n[0];
                            t & n[1] && !d(e, r) && e.push(r)
                        }), e.sort()
                    }

                    function aa(e) {
                        if (e instanceof b) return e.clone();
                        var t = new i(e.__wrapped__, e.__chain__);
                        return t.__actions__ = Vi(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                    }

                    function sa(e, t, n) {
                        t = (n ? qo(e, t, n) : t === ie) ? 1 : Ql(Au(t), 0);
                        var r = null == e ? 0 : e.length;
                        if (!r || t < 1) return [];
                        for (var i = 0, o = 0, a = al(Ul(r / t)); i < r;) a[o++] = li(e, i, i += t);
                        return a
                    }

                    function ua(e) {
                        for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n;) {
                            var o = e[t];
                            o && (i[r++] = o)
                        }
                        return i
                    }

                    function ca() {
                        var e = arguments.length;
                        if (!e) return [];
                        for (var t = al(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
                        return v(xf(n) ? Vi(n) : [n], tr(t, 1))
                    }

                    function la(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        return r ? (t = n || t === ie ? 1 : Au(t), li(e, t < 0 ? 0 : t, r)) : []
                    }

                    function pa(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        return r ? (t = n || t === ie ? 1 : Au(t), t = r - t, li(e, 0, t < 0 ? 0 : t)) : []
                    }

                    function fa(e, t) {
                        return e && e.length ? bi(e, Eo(t, 3), !0, !0) : []
                    }

                    function da(e, t) {
                        return e && e.length ? bi(e, Eo(t, 3), !0) : []
                    }

                    function ha(e, t, n, r) {
                        var i = null == e ? 0 : e.length;
                        return i ? (n && "number" != typeof n && qo(e, t, n) && (n = 0, r = i), Zn(e, t, n, r)) : []
                    }

                    function ga(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        if (!r) return -1;
                        var i = null == n ? 0 : Au(n);
                        return i < 0 && (i = Ql(r + i, 0)), C(e, Eo(t, 3), i)
                    }

                    function va(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        if (!r) return -1;
                        var i = r - 1;
                        return n !== ie && (i = Au(n), i = n < 0 ? Ql(r + i, 0) : Yl(i, r - 1)), C(e, Eo(t, 3), i, !0)
                    }

                    function _a(e) {
                        var t = null == e ? 0 : e.length;
                        return t ? tr(e, 1) : []
                    }

                    function ma(e) {
                        var t = null == e ? 0 : e.length;
                        return t ? tr(e, Ne) : []
                    }

                    function ya(e, t) {
                        var n = null == e ? 0 : e.length;
                        return n ? (t = t === ie ? 1 : Au(t), tr(e, t)) : []
                    }

                    function ba(e) {
                        for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
                            var i = e[t];
                            r[i[0]] = i[1]
                        }
                        return r
                    }

                    function xa(e) {
                        return e && e.length ? e[0] : ie
                    }

                    function wa(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        if (!r) return -1;
                        var i = null == n ? 0 : Au(n);
                        return i < 0 && (i = Ql(r + i, 0)), T(e, t, i)
                    }

                    function Ca(e) {
                        var t = null == e ? 0 : e.length;
                        return t ? li(e, 0, -1) : []
                    }

                    function Ta(e, t) {
                        return null == e ? "" : Kl.call(e, t)
                    }

                    function Ea(e) {
                        var t = null == e ? 0 : e.length;
                        return t ? e[t - 1] : ie
                    }

                    function Aa(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        if (!r) return -1;
                        var i = r;
                        return n !== ie && (i = Au(n), i = i < 0 ? Ql(r + i, 0) : Yl(i, r - 1)), t === t ? X(e, t, i) : C(e, A, i, !0)
                    }

                    function Oa(e, t) {
                        return e && e.length ? Qr(e, Au(t)) : ie
                    }

                    function Da(e, t) {
                        return e && e.length && t && t.length ? ei(e, t) : e
                    }

                    function ka(e, t, n) {
                        return e && e.length && t && t.length ? ei(e, t, Eo(n, 2)) : e
                    }

                    function Sa(e, t, n) {
                        return e && e.length && t && t.length ? ei(e, t, ie, n) : e
                    }

                    function ja(e, t) {
                        var n = [];
                        if (!e || !e.length) return n;
                        var r = -1,
                            i = [],
                            o = e.length;
                        for (t = Eo(t, 3); ++r < o;) {
                            var a = e[r];
                            t(a, r, e) && (n.push(a), i.push(r))
                        }
                        return ti(e, i), n
                    }

                    function Pa(e) {
                        return null == e ? e : ep.call(e)
                    }

                    function Ia(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        return r ? (n && "number" != typeof n && qo(e, t, n) ? (t = 0, n = r) : (t = null == t ? 0 : Au(t), n = n === ie ? r : Au(n)), li(e, t, n)) : []
                    }

                    function Na(e, t) {
                        return fi(e, t)
                    }

                    function La(e, t, n) {
                        return di(e, t, Eo(n, 2))
                    }

                    function Ra(e, t) {
                        var n = null == e ? 0 : e.length;
                        if (n) {
                            var r = fi(e, t);
                            if (r < n && Qs(e[r], t)) return r
                        }
                        return -1
                    }

                    function Ma(e, t) {
                        return fi(e, t, !0)
                    }

                    function Ba(e, t, n) {
                        return di(e, t, Eo(n, 2), !0)
                    }

                    function qa(e, t) {
                        var n = null == e ? 0 : e.length;
                        if (n) {
                            var r = fi(e, t, !0) - 1;
                            if (Qs(e[r], t)) return r
                        }
                        return -1
                    }

                    function Va(e) {
                        return e && e.length ? hi(e) : []
                    }

                    function Fa(e, t) {
                        return e && e.length ? hi(e, Eo(t, 2)) : []
                    }

                    function Ua(e) {
                        var t = null == e ? 0 : e.length;
                        return t ? li(e, 1, t) : []
                    }

                    function za(e, t, n) {
                        return e && e.length ? (t = n || t === ie ? 1 : Au(t), li(e, 0, t < 0 ? 0 : t)) : []
                    }

                    function Ha(e, t, n) {
                        var r = null == e ? 0 : e.length;
                        return r ? (t = n || t === ie ? 1 : Au(t), t = r - t, li(e, t < 0 ? 0 : t, r)) : []
                    }

                    function Wa(e, t) {
                        return e && e.length ? bi(e, Eo(t, 3), !1, !0) : []
                    }

                    function Ga(e, t) {
                        return e && e.length ? bi(e, Eo(t, 3)) : []
                    }

                    function Ka(e) {
                        return e && e.length ? _i(e) : []
                    }

                    function $a(e, t) {
                        return e && e.length ? _i(e, Eo(t, 2)) : []
                    }

                    function Qa(e, t) {
                        return t = "function" == typeof t ? t : ie, e && e.length ? _i(e, ie, t) : []
                    }

                    function Ya(e) {
                        if (!e || !e.length) return [];
                        var t = 0;
                        return e = f(e, function(e) {
                            if (Js(e)) return t = Ql(e.length, t), !0
                        }), I(t, function(t) {
                            return g(e, D(t))
                        })
                    }

                    function Ja(e, t) {
                        if (!e || !e.length) return [];
                        var n = Ya(e);
                        return null == t ? n : g(n, function(e) {
                            return s(t, ie, e)
                        })
                    }

                    function Xa(e, t) {
                        return Ci(e || [], t || [], Pn)
                    }

                    function Za(e, t) {
                        return Ci(e || [], t || [], ui)
                    }

                    function es(e) {
                        var t = n(e);
                        return t.__chain__ = !0, t
                    }

                    function ts(e, t) {
                        return t(e), e
                    }

                    function ns(e, t) {
                        return t(e)
                    }

                    function rs() {
                        return es(this)
                    }

                    function is() {
                        return new i(this.value(), this.__chain__)
                    }

                    function os() {
                        this.__values__ === ie && (this.__values__ = Tu(this.value()));
                        var e = this.__index__ >= this.__values__.length,
                            t = e ? ie : this.__values__[this.__index__++];
                        return {
                            done: e,
                            value: t
                        }
                    }

                    function as() {
                        return this
                    }

                    function ss(e) {
                        for (var t, n = this; n instanceof r;) {
                            var i = aa(n);
                            i.__index__ = 0, i.__values__ = ie, t ? o.__wrapped__ = i : t = i;
                            var o = i;
                            n = n.__wrapped__
                        }
                        return o.__wrapped__ = e, t
                    }

                    function us() {
                        var e = this.__wrapped__;
                        if (e instanceof b) {
                            var t = e;
                            return this.__actions__.length && (t = new b(this)), t = t.reverse(), t.__actions__.push({
                                func: ns,
                                args: [Pa],
                                thisArg: ie
                            }), new i(t, this.__chain__)
                        }
                        return this.thru(Pa)
                    }

                    function cs() {
                        return xi(this.__wrapped__, this.__actions__)
                    }

                    function ls(e, t, n) {
                        var r = xf(e) ? p : Kn;
                        return n && qo(e, t, n) && (t = ie), r(e, Eo(t, 3))
                    }

                    function ps(e, t) {
                        var n = xf(e) ? f : er;
                        return n(e, Eo(t, 3))
                    }

                    function fs(e, t) {
                        return tr(ms(e, t), 1)
                    }

                    function ds(e, t) {
                        return tr(ms(e, t), Ne)
                    }

                    function hs(e, t, n) {
                        return n = n === ie ? 1 : Au(n), tr(ms(e, t), n)
                    }

                    function gs(e, t) {
                        var n = xf(e) ? c : mp;
                        return n(e, Eo(t, 3))
                    }

                    function vs(e, t) {
                        var n = xf(e) ? l : yp;
                        return n(e, Eo(t, 3))
                    }

                    function _s(e, t, n, r) {
                        e = Ys(e) ? e : rc(e), n = n && !r ? Au(n) : 0;
                        var i = e.length;
                        return n < 0 && (n = Ql(i + n, 0)), yu(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && T(e, t, n) > -1
                    }

                    function ms(e, t) {
                        var n = xf(e) ? g : Hr;
                        return n(e, Eo(t, 3))
                    }

                    function ys(e, t, n, r) {
                        return null == e ? [] : (xf(t) || (t = null == t ? [] : [t]), n = r ? ie : n, xf(n) || (n = null == n ? [] : [n]), Yr(e, t, n))
                    }

                    function bs(e, t, n) {
                        var r = xf(e) ? _ : S,
                            i = arguments.length < 3;
                        return r(e, Eo(t, 4), n, i, mp)
                    }

                    function xs(e, t, n) {
                        var r = xf(e) ? m : S,
                            i = arguments.length < 3;
                        return r(e, Eo(t, 4), n, i, yp)
                    }

                    function ws(e, t) {
                        var n = xf(e) ? f : er;
                        return n(e, Rs(Eo(t, 3)))
                    }

                    function Cs(e) {
                        var t = xf(e) ? Dn : ai;
                        return t(e)
                    }

                    function Ts(e, t, n) {
                        t = (n ? qo(e, t, n) : t === ie) ? 1 : Au(t);
                        var r = xf(e) ? kn : si;
                        return r(e, t)
                    }

                    function Es(e) {
                        var t = xf(e) ? Sn : ci;
                        return t(e)
                    }

                    function As(e) {
                        if (null == e) return 0;
                        if (Ys(e)) return yu(e) ? Z(e) : e.length;
                        var t = Sp(e);
                        return t == Je || t == it ? e.size : Fr(e).length
                    }

                    function Os(e, t, n) {
                        var r = xf(e) ? y : pi;
                        return n && qo(e, t, n) && (t = ie), r(e, Eo(t, 3))
                    }

                    function Ds(e, t) {
                        if ("function" != typeof t) throw new hl(ue);
                        return e = Au(e),
                            function() {
                                if (--e < 1) return t.apply(this, arguments)
                            }
                    }

                    function ks(e, t, n) {
                        return t = n ? ie : t, t = e && null == t ? e.length : t, fo(e, Te, ie, ie, ie, ie, t)
                    }

                    function Ss(e, t) {
                        var n;
                        if ("function" != typeof t) throw new hl(ue);
                        return e = Au(e),
                            function() {
                                return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = ie), n
                            }
                    }

                    function js(e, t, n) {
                        t = n ? ie : t;
                        var r = fo(e, be, ie, ie, ie, ie, ie, t);
                        return r.placeholder = js.placeholder, r
                    }

                    function Ps(e, t, n) {
                        t = n ? ie : t;
                        var r = fo(e, xe, ie, ie, ie, ie, ie, t);
                        return r.placeholder = Ps.placeholder, r
                    }

                    function Is(e, t, n) {
                        function r(t) {
                            var n = f,
                                r = d;
                            return f = d = ie, m = t, g = e.apply(r, n)
                        }

                        function i(e) {
                            return m = e, v = Ip(s, t), y ? r(e) : g
                        }

                        function o(e) {
                            var n = e - _,
                                r = e - m,
                                i = t - n;
                            return b ? Yl(i, h - r) : i
                        }

                        function a(e) {
                            var n = e - _,
                                r = e - m;
                            return _ === ie || n >= t || n < 0 || b && r >= h
                        }

                        function s() {
                            var e = cf();
                            return a(e) ? u(e) : void(v = Ip(s, o(e)))
                        }

                        function u(e) {
                            return v = ie, x && f ? r(e) : (f = d = ie, g)
                        }

                        function c() {
                            v !== ie && Ep(v), m = 0, f = _ = d = v = ie
                        }

                        function l() {
                            return v === ie ? g : u(cf())
                        }

                        function p() {
                            var e = cf(),
                                n = a(e);
                            if (f = arguments, d = this, _ = e, n) {
                                if (v === ie) return i(_);
                                if (b) return v = Ip(s, t), r(_)
                            }
                            return v === ie && (v = Ip(s, t)), g
                        }
                        var f, d, h, g, v, _, m = 0,
                            y = !1,
                            b = !1,
                            x = !0;
                        if ("function" != typeof e) throw new hl(ue);
                        return t = Du(t) || 0, uu(n) && (y = !!n.leading, b = "maxWait" in n, h = b ? Ql(Du(n.maxWait) || 0, t) : h, x = "trailing" in n ? !!n.trailing : x), p.cancel = c, p.flush = l, p
                    }

                    function Ns(e) {
                        return fo(e, Ae)
                    }

                    function Ls(e, t) {
                        if ("function" != typeof e || null != t && "function" != typeof t) throw new hl(ue);
                        var n = function() {
                            var r = arguments,
                                i = t ? t.apply(this, r) : r[0],
                                o = n.cache;
                            if (o.has(i)) return o.get(i);
                            var a = e.apply(this, r);
                            return n.cache = o.set(i, a) || o, a
                        };
                        return n.cache = new(Ls.Cache || fn), n
                    }

                    function Rs(e) {
                        if ("function" != typeof e) throw new hl(ue);
                        return function() {
                            var t = arguments;
                            switch (t.length) {
                                case 0:
                                    return !e.call(this);
                                case 1:
                                    return !e.call(this, t[0]);
                                case 2:
                                    return !e.call(this, t[0], t[1]);
                                case 3:
                                    return !e.call(this, t[0], t[1], t[2])
                            }
                            return !e.apply(this, t)
                        }
                    }

                    function Ms(e) {
                        return Ss(2, e)
                    }

                    function Bs(e, t) {
                        if ("function" != typeof e) throw new hl(ue);
                        return t = t === ie ? t : Au(t), oi(e, t)
                    }

                    function qs(e, t) {
                        if ("function" != typeof e) throw new hl(ue);
                        return t = null == t ? 0 : Ql(Au(t), 0), oi(function(n) {
                            var r = n[t],
                                i = Oi(n, 0, t);
                            return r && v(i, r), s(e, this, i)
                        })
                    }

                    function Vs(e, t, n) {
                        var r = !0,
                            i = !0;
                        if ("function" != typeof e) throw new hl(ue);
                        return uu(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Is(e, t, {
                            leading: r,
                            maxWait: t,
                            trailing: i
                        })
                    }

                    function Fs(e) {
                        return ks(e, 1)
                    }

                    function Us(e, t) {
                        return gf(Ei(t), e)
                    }

                    function zs() {
                        if (!arguments.length) return [];
                        var e = arguments[0];
                        return xf(e) ? e : [e]
                    }

                    function Hs(e) {
                        return Vn(e, he)
                    }

                    function Ws(e, t) {
                        return t = "function" == typeof t ? t : ie, Vn(e, he, t)
                    }

                    function Gs(e) {
                        return Vn(e, fe | he)
                    }

                    function Ks(e, t) {
                        return t = "function" == typeof t ? t : ie, Vn(e, fe | he, t)
                    }

                    function $s(e, t) {
                        return null == t || Un(e, t, Hu(t))
                    }

                    function Qs(e, t) {
                        return e === t || e !== e && t !== t
                    }

                    function Ys(e) {
                        return null != e && su(e.length) && !ou(e)
                    }

                    function Js(e) {
                        return cu(e) && Ys(e)
                    }

                    function Xs(e) {
                        return e === !0 || e === !1 || cu(e) && pr(e) == We
                    }

                    function Zs(e) {
                        return cu(e) && 1 === e.nodeType && !_u(e)
                    }

                    function eu(e) {
                        if (null == e) return !0;
                        if (Ys(e) && (xf(e) || "string" == typeof e || "function" == typeof e.splice || Cf(e) || Df(e) || bf(e))) return !e.length;
                        var t = Sp(e);
                        if (t == Je || t == it) return !e.size;
                        if (Ho(e)) return !Fr(e).length;
                        for (var n in e)
                            if (bl.call(e, n)) return !1;
                        return !0
                    }

                    function tu(e, t) {
                        return Pr(e, t)
                    }

                    function nu(e, t, n) {
                        n = "function" == typeof n ? n : ie;
                        var r = n ? n(e, t) : ie;
                        return r === ie ? Pr(e, t, ie, n) : !!r
                    }

                    function ru(e) {
                        if (!cu(e)) return !1;
                        var t = pr(e);
                        return t == $e || t == Ke || "string" == typeof e.message && "string" == typeof e.name && !_u(e)
                    }

                    function iu(e) {
                        return "number" == typeof e && Gl(e)
                    }

                    function ou(e) {
                        if (!uu(e)) return !1;
                        var t = pr(e);
                        return t == Qe || t == Ye || t == He || t == nt
                    }

                    function au(e) {
                        return "number" == typeof e && e == Au(e)
                    }

                    function su(e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Le
                    }

                    function uu(e) {
                        var t = typeof e;
                        return null != e && ("object" == t || "function" == t)
                    }

                    function cu(e) {
                        return null != e && "object" == typeof e
                    }

                    function lu(e, t) {
                        return e === t || Lr(e, t, Oo(t))
                    }

                    function pu(e, t, n) {
                        return n = "function" == typeof n ? n : ie, Lr(e, t, Oo(t), n)
                    }

                    function fu(e) {
                        return vu(e) && e != +e
                    }

                    function du(e) {
                        if (jp(e)) throw new ul(se);
                        return Rr(e)
                    }

                    function hu(e) {
                        return null === e
                    }

                    function gu(e) {
                        return null == e
                    }

                    function vu(e) {
                        return "number" == typeof e || cu(e) && pr(e) == Xe
                    }

                    function _u(e) {
                        if (!cu(e) || pr(e) != et) return !1;
                        var t = jl(e);
                        if (null === t) return !0;
                        var n = bl.call(t, "constructor") && t.constructor;
                        return "function" == typeof n && n instanceof n && yl.call(n) == Tl
                    }

                    function mu(e) {
                        return au(e) && e >= -Le && e <= Le
                    }

                    function yu(e) {
                        return "string" == typeof e || !xf(e) && cu(e) && pr(e) == ot
                    }

                    function bu(e) {
                        return "symbol" == typeof e || cu(e) && pr(e) == at
                    }

                    function xu(e) {
                        return e === ie
                    }

                    function wu(e) {
                        return cu(e) && Sp(e) == ut
                    }

                    function Cu(e) {
                        return cu(e) && pr(e) == ct
                    }

                    function Tu(e) {
                        if (!e) return [];
                        if (Ys(e)) return yu(e) ? ee(e) : Vi(e);
                        if (Rl && e[Rl]) return W(e[Rl]());
                        var t = Sp(e),
                            n = t == Je ? G : t == it ? Q : rc;
                        return n(e)
                    }

                    function Eu(e) {
                        if (!e) return 0 === e ? e : 0;
                        if (e = Du(e), e === Ne || e === -Ne) {
                            var t = e < 0 ? -1 : 1;
                            return t * Re
                        }
                        return e === e ? e : 0
                    }

                    function Au(e) {
                        var t = Eu(e),
                            n = t % 1;
                        return t === t ? n ? t - n : t : 0
                    }

                    function Ou(e) {
                        return e ? qn(Au(e), 0, Be) : 0
                    }

                    function Du(e) {
                        if ("number" == typeof e) return e;
                        if (bu(e)) return Me;
                        if (uu(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = uu(t) ? t + "" : t
                        }
                        if ("string" != typeof e) return 0 === e ? e : +e;
                        e = e.replace(Mt, "");
                        var n = $t.test(e);
                        return n || Yt.test(e) ? ir(e.slice(2), n ? 2 : 8) : Kt.test(e) ? Me : +e
                    }

                    function ku(e) {
                        return Fi(e, Wu(e))
                    }

                    function Su(e) {
                        return e ? qn(Au(e), -Le, Le) : 0 === e ? e : 0
                    }

                    function ju(e) {
                        return null == e ? "" : vi(e)
                    }

                    function Pu(e, t) {
                        var n = _p(e);
                        return null == t ? n : Ln(n, t)
                    }

                    function Iu(e, t) {
                        return w(e, Eo(t, 3), nr)
                    }

                    function Nu(e, t) {
                        return w(e, Eo(t, 3), or)
                    }

                    function Lu(e, t) {
                        return null == e ? e : bp(e, Eo(t, 3), Wu)
                    }

                    function Ru(e, t) {
                        return null == e ? e : xp(e, Eo(t, 3), Wu)
                    }

                    function Mu(e, t) {
                        return e && nr(e, Eo(t, 3))
                    }

                    function Bu(e, t) {
                        return e && or(e, Eo(t, 3))
                    }

                    function qu(e) {
                        return null == e ? [] : ar(e, Hu(e))
                    }

                    function Vu(e) {
                        return null == e ? [] : ar(e, Wu(e))
                    }

                    function Fu(e, t, n) {
                        var r = null == e ? ie : ur(e, t);
                        return r === ie ? n : r
                    }

                    function Uu(e, t) {
                        return null != e && Po(e, t, yr)
                    }

                    function zu(e, t) {
                        return null != e && Po(e, t, Cr)
                    }

                    function Hu(e) {
                        return Ys(e) ? On(e) : Fr(e)
                    }

                    function Wu(e) {
                        return Ys(e) ? On(e, !0) : Ur(e)
                    }

                    function Gu(e, t) {
                        var n = {};
                        return t = Eo(t, 3), nr(e, function(e, r, i) {
                            Mn(n, t(e, r, i), e)
                        }), n
                    }

                    function Ku(e, t) {
                        var n = {};
                        return t = Eo(t, 3), nr(e, function(e, r, i) {
                            Mn(n, r, t(e, r, i))
                        }), n
                    }

                    function $u(e, t) {
                        return Qu(e, Rs(Eo(t)))
                    }

                    function Qu(e, t) {
                        if (null == e) return {};
                        var n = g(wo(e), function(e) {
                            return [e]
                        });
                        return t = Eo(t), Xr(e, n, function(e, n) {
                            return t(e, n[0])
                        })
                    }

                    function Yu(e, t, n) {
                        t = Ai(t, e);
                        var r = -1,
                            i = t.length;
                        for (i || (i = 1, e = ie); ++r < i;) {
                            var o = null == e ? ie : e[ra(t[r])];
                            o === ie && (r = i, o = n), e = ou(o) ? o.call(e) : o
                        }
                        return e
                    }

                    function Ju(e, t, n) {
                        return null == e ? e : ui(e, t, n)
                    }

                    function Xu(e, t, n, r) {
                        return r = "function" == typeof r ? r : ie, null == e ? e : ui(e, t, n, r)
                    }

                    function Zu(e, t, n) {
                        var r = xf(e),
                            i = r || Cf(e) || Df(e);
                        if (t = Eo(t, 4), null == n) {
                            var o = e && e.constructor;
                            n = i ? r ? new o : [] : uu(e) && ou(o) ? _p(jl(e)) : {}
                        }
                        return (i ? c : nr)(e, function(e, r, i) {
                            return t(n, e, r, i)
                        }), n
                    }

                    function ec(e, t) {
                        return null == e || mi(e, t)
                    }

                    function tc(e, t, n) {
                        return null == e ? e : yi(e, t, Ei(n))
                    }

                    function nc(e, t, n, r) {
                        return r = "function" == typeof r ? r : ie, null == e ? e : yi(e, t, Ei(n), r)
                    }

                    function rc(e) {
                        return null == e ? [] : R(e, Hu(e))
                    }

                    function ic(e) {
                        return null == e ? [] : R(e, Wu(e))
                    }

                    function oc(e, t, n) {
                        return n === ie && (n = t, t = ie), n !== ie && (n = Du(n), n = n === n ? n : 0), t !== ie && (t = Du(t), t = t === t ? t : 0), qn(Du(e), t, n)
                    }

                    function ac(e, t, n) {
                        return t = Eu(t), n === ie ? (n = t, t = 0) : n = Eu(n), e = Du(e), Er(e, t, n)
                    }

                    function sc(e, t, n) {
                        if (n && "boolean" != typeof n && qo(e, t, n) && (t = n = ie), n === ie && ("boolean" == typeof t ? (n = t, t = ie) : "boolean" == typeof e && (n = e, e = ie)), e === ie && t === ie ? (e = 0, t = 1) : (e = Eu(e), t === ie ? (t = e, e = 0) : t = Eu(t)), e > t) {
                            var r = e;
                            e = t, t = r
                        }
                        if (n || e % 1 || t % 1) {
                            var i = Zl();
                            return Yl(e + i * (t - e + rr("1e-" + ((i + "").length - 1))), t)
                        }
                        return ni(e, t)
                    }

                    function uc(e) {
                        return ed(ju(e).toLowerCase())
                    }

                    function cc(e) {
                        return e = ju(e), e && e.replace(Xt, br).replace(Hn, "")
                    }

                    function lc(e, t, n) {
                        e = ju(e), t = vi(t);
                        var r = e.length;
                        n = n === ie ? r : qn(Au(n), 0, r);
                        var i = n;
                        return n -= t.length, n >= 0 && e.slice(n, i) == t
                    }

                    function pc(e) {
                        return e = ju(e), e && Ot.test(e) ? e.replace(Et, xr) : e
                    }

                    function fc(e) {
                        return e = ju(e), e && Rt.test(e) ? e.replace(Lt, "\\$&") : e
                    }

                    function dc(e, t, n) {
                        e = ju(e), t = Au(t);
                        var r = t ? Z(e) : 0;
                        if (!t || r >= t) return e;
                        var i = (t - r) / 2;
                        return oo(zl(i), n) + e + oo(Ul(i), n)
                    }

                    function hc(e, t, n) {
                        e = ju(e), t = Au(t);
                        var r = t ? Z(e) : 0;
                        return t && r < t ? e + oo(t - r, n) : e
                    }

                    function gc(e, t, n) {
                        e = ju(e), t = Au(t);
                        var r = t ? Z(e) : 0;
                        return t && r < t ? oo(t - r, n) + e : e
                    }

                    function vc(e, t, n) {
                        return n || null == t ? t = 0 : t && (t = +t), Xl(ju(e).replace(Bt, ""), t || 0)
                    }

                    function _c(e, t, n) {
                        return t = (n ? qo(e, t, n) : t === ie) ? 1 : Au(t), ii(ju(e), t)
                    }

                    function mc() {
                        var e = arguments,
                            t = ju(e[0]);
                        return e.length < 3 ? t : t.replace(e[1], e[2])
                    }

                    function yc(e, t, n) {
                        return n && "number" != typeof n && qo(e, t, n) && (t = n = ie), (n = n === ie ? Be : n >>> 0) ? (e = ju(e), e && ("string" == typeof t || null != t && !Af(t)) && (t = vi(t), !t && z(e)) ? Oi(ee(e), 0, n) : e.split(t, n)) : []
                    }

                    function bc(e, t, n) {
                        return e = ju(e), n = null == n ? 0 : qn(Au(n), 0, e.length), t = vi(t), e.slice(n, n + t.length) == t
                    }

                    function xc(e, t, r) {
                        var i = n.templateSettings;
                        r && qo(e, t, r) && (t = ie), e = ju(e), t = If({}, t, i, ho);
                        var o, a, s = If({}, t.imports, i.imports, ho),
                            u = Hu(s),
                            c = R(s, u),
                            l = 0,
                            p = t.interpolate || Zt,
                            f = "__p += '",
                            d = fl((t.escape || Zt).source + "|" + p.source + "|" + (p === St ? Wt : Zt).source + "|" + (t.evaluate || Zt).source + "|$", "g"),
                            h = "//# sourceURL=" + ("sourceURL" in t ? t.sourceURL : "lodash.templateSources[" + ++Yn + "]") + "\n";
                        e.replace(d, function(t, n, r, i, s, u) {
                            return r || (r = i), f += e.slice(l, u).replace(en, F), n && (o = !0, f += "' +\n__e(" + n + ") +\n'"), s && (a = !0, f += "';\n" + s + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), l = u + t.length, t
                        }), f += "';\n";
                        var g = t.variable;
                        g || (f = "with (obj) {\n" + f + "\n}\n"), f = (a ? f.replace(xt, "") : f).replace(wt, "$1").replace(Ct, "$1;"), f = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
                        var v = td(function() {
                            return cl(u, h + "return " + f).apply(ie, c)
                        });
                        if (v.source = f, ru(v)) throw v;
                        return v
                    }

                    function wc(e) {
                        return ju(e).toLowerCase()
                    }

                    function Cc(e) {
                        return ju(e).toUpperCase()
                    }

                    function Tc(e, t, n) {
                        if (e = ju(e), e && (n || t === ie)) return e.replace(Mt, "");
                        if (!e || !(t = vi(t))) return e;
                        var r = ee(e),
                            i = ee(t),
                            o = B(r, i),
                            a = q(r, i) + 1;
                        return Oi(r, o, a).join("")
                    }

                    function Ec(e, t, n) {
                        if (e = ju(e), e && (n || t === ie)) return e.replace(qt, "");
                        if (!e || !(t = vi(t))) return e;
                        var r = ee(e),
                            i = q(r, ee(t)) + 1;
                        return Oi(r, 0, i).join("")
                    }

                    function Ac(e, t, n) {
                        if (e = ju(e), e && (n || t === ie)) return e.replace(Bt, "");
                        if (!e || !(t = vi(t))) return e;
                        var r = ee(e),
                            i = B(r, ee(t));
                        return Oi(r, i).join("")
                    }

                    function Oc(e, t) {
                        var n = Oe,
                            r = De;
                        if (uu(t)) {
                            var i = "separator" in t ? t.separator : i;
                            n = "length" in t ? Au(t.length) : n, r = "omission" in t ? vi(t.omission) : r
                        }
                        e = ju(e);
                        var o = e.length;
                        if (z(e)) {
                            var a = ee(e);
                            o = a.length
                        }
                        if (n >= o) return e;
                        var s = n - Z(r);
                        if (s < 1) return r;
                        var u = a ? Oi(a, 0, s).join("") : e.slice(0, s);
                        if (i === ie) return u + r;
                        if (a && (s += u.length - s), Af(i)) {
                            if (e.slice(s).search(i)) {
                                var c, l = u;
                                for (i.global || (i = fl(i.source, ju(Gt.exec(i)) + "g")), i.lastIndex = 0; c = i.exec(l);) var p = c.index;
                                u = u.slice(0, p === ie ? s : p)
                            }
                        } else if (e.indexOf(vi(i), s) != s) {
                            var f = u.lastIndexOf(i);
                            f > -1 && (u = u.slice(0, f))
                        }
                        return u + r
                    }

                    function Dc(e) {
                        return e = ju(e), e && At.test(e) ? e.replace(Tt, wr) : e
                    }

                    function kc(e, t, n) {
                        return e = ju(e), t = n ? ie : t, t === ie ? H(e) ? re(e) : x(e) : e.match(t) || []
                    }

                    function Sc(e) {
                        var t = null == e ? 0 : e.length,
                            n = Eo();
                        return e = t ? g(e, function(e) {
                            if ("function" != typeof e[1]) throw new hl(ue);
                            return [n(e[0]), e[1]]
                        }) : [], oi(function(n) {
                            for (var r = -1; ++r < t;) {
                                var i = e[r];
                                if (s(i[0], this, n)) return s(i[1], this, n)
                            }
                        })
                    }

                    function jc(e) {
                        return Fn(Vn(e, fe))
                    }

                    function Pc(e) {
                        return function() {
                            return e
                        }
                    }

                    function Ic(e, t) {
                        return null == e || e !== e ? t : e
                    }

                    function Nc(e) {
                        return e
                    }

                    function Lc(e) {
                        return Vr("function" == typeof e ? e : Vn(e, fe))
                    }

                    function Rc(e) {
                        return Wr(Vn(e, fe))
                    }

                    function Mc(e, t) {
                        return Gr(e, Vn(t, fe))
                    }

                    function Bc(e, t, n) {
                        var r = Hu(t),
                            i = ar(t, r);
                        null != n || uu(t) && (i.length || !r.length) || (n = t, t = e, e = this, i = ar(t, Hu(t)));
                        var o = !(uu(n) && "chain" in n && !n.chain),
                            a = ou(e);
                        return c(i, function(n) {
                            var r = t[n];
                            e[n] = r, a && (e.prototype[n] = function() {
                                var t = this.__chain__;
                                if (o || t) {
                                    var n = e(this.__wrapped__),
                                        i = n.__actions__ = Vi(this.__actions__);
                                    return i.push({
                                        func: r,
                                        args: arguments,
                                        thisArg: e
                                    }), n.__chain__ = t, n
                                }
                                return r.apply(e, v([this.value()], arguments))
                            })
                        }), e
                    }

                    function qc() {
                        return sr._ === this && (sr._ = El), this
                    }

                    function Vc() {}

                    function Fc(e) {
                        return e = Au(e), oi(function(t) {
                            return Qr(t, e)
                        })
                    }

                    function Uc(e) {
                        return Vo(e) ? D(ra(e)) : Zr(e)
                    }

                    function zc(e) {
                        return function(t) {
                            return null == e ? ie : ur(e, t)
                        }
                    }

                    function Hc() {
                        return []
                    }

                    function Wc() {
                        return !1
                    }

                    function Gc() {
                        return {}
                    }

                    function Kc() {
                        return ""
                    }

                    function $c() {
                        return !0
                    }

                    function Qc(e, t) {
                        if (e = Au(e), e < 1 || e > Le) return [];
                        var n = Be,
                            r = Yl(e, Be);
                        t = Eo(t), e -= Be;
                        for (var i = I(r, t); ++n < e;) t(n);
                        return i
                    }

                    function Yc(e) {
                        return xf(e) ? g(e, ra) : bu(e) ? [e] : Vi(Lp(ju(e)))
                    }

                    function Jc(e) {
                        var t = ++xl;
                        return ju(e) + t
                    }

                    function Xc(e) {
                        return e && e.length ? $n(e, Nc, fr) : ie
                    }

                    function Zc(e, t) {
                        return e && e.length ? $n(e, Eo(t, 2), fr) : ie
                    }

                    function el(e) {
                        return O(e, Nc)
                    }

                    function tl(e, t) {
                        return O(e, Eo(t, 2))
                    }

                    function nl(e) {
                        return e && e.length ? $n(e, Nc, zr) : ie
                    }

                    function rl(e, t) {
                        return e && e.length ? $n(e, Eo(t, 2), zr) : ie
                    }

                    function il(e) {
                        return e && e.length ? P(e, Nc) : 0
                    }

                    function ol(e, t) {
                        return e && e.length ? P(e, Eo(t, 2)) : 0
                    }
                    t = null == t ? sr : Tr.defaults(sr.Object(), t, Tr.pick(sr, Qn));
                    var al = t.Array,
                        sl = t.Date,
                        ul = t.Error,
                        cl = t.Function,
                        ll = t.Math,
                        pl = t.Object,
                        fl = t.RegExp,
                        dl = t.String,
                        hl = t.TypeError,
                        gl = al.prototype,
                        vl = cl.prototype,
                        _l = pl.prototype,
                        ml = t["__core-js_shared__"],
                        yl = vl.toString,
                        bl = _l.hasOwnProperty,
                        xl = 0,
                        wl = function() {
                            var e = /[^.]+$/.exec(ml && ml.keys && ml.keys.IE_PROTO || "");
                            return e ? "Symbol(src)_1." + e : ""
                        }(),
                        Cl = _l.toString,
                        Tl = yl.call(pl),
                        El = sr._,
                        Al = fl("^" + yl.call(bl).replace(Lt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        Ol = lr ? t.Buffer : ie,
                        Dl = t.Symbol,
                        kl = t.Uint8Array,
                        Sl = Ol ? Ol.allocUnsafe : ie,
                        jl = K(pl.getPrototypeOf, pl),
                        Pl = pl.create,
                        Il = _l.propertyIsEnumerable,
                        Nl = gl.splice,
                        Ll = Dl ? Dl.isConcatSpreadable : ie,
                        Rl = Dl ? Dl.iterator : ie,
                        Ml = Dl ? Dl.toStringTag : ie,
                        Bl = function() {
                            try {
                                var e = Do(pl, "defineProperty");
                                return e({}, "", {}), e
                            } catch (e) {}
                        }(),
                        ql = t.clearTimeout !== sr.clearTimeout && t.clearTimeout,
                        Vl = sl && sl.now !== sr.Date.now && sl.now,
                        Fl = t.setTimeout !== sr.setTimeout && t.setTimeout,
                        Ul = ll.ceil,
                        zl = ll.floor,
                        Hl = pl.getOwnPropertySymbols,
                        Wl = Ol ? Ol.isBuffer : ie,
                        Gl = t.isFinite,
                        Kl = gl.join,
                        $l = K(pl.keys, pl),
                        Ql = ll.max,
                        Yl = ll.min,
                        Jl = sl.now,
                        Xl = t.parseInt,
                        Zl = ll.random,
                        ep = gl.reverse,
                        tp = Do(t, "DataView"),
                        np = Do(t, "Map"),
                        rp = Do(t, "Promise"),
                        ip = Do(t, "Set"),
                        op = Do(t, "WeakMap"),
                        ap = Do(pl, "create"),
                        sp = op && new op,
                        up = {},
                        cp = ia(tp),
                        lp = ia(np),
                        pp = ia(rp),
                        fp = ia(ip),
                        dp = ia(op),
                        hp = Dl ? Dl.prototype : ie,
                        gp = hp ? hp.valueOf : ie,
                        vp = hp ? hp.toString : ie,
                        _p = function() {
                            function e() {}
                            return function(t) {
                                if (!uu(t)) return {};
                                if (Pl) return Pl(t);
                                e.prototype = t;
                                var n = new e;
                                return e.prototype = ie, n
                            }
                        }();
                    n.templateSettings = {
                        escape: Dt,
                        evaluate: kt,
                        interpolate: St,
                        variable: "",
                        imports: {
                            _: n
                        }
                    }, n.prototype = r.prototype, n.prototype.constructor = n, i.prototype = _p(r.prototype), i.prototype.constructor = i, b.prototype = _p(r.prototype), b.prototype.constructor = b, ne.prototype.clear = zt, ne.prototype.delete = tn, ne.prototype.get = nn, ne.prototype.has = rn, ne.prototype.set = on, an.prototype.clear = sn, an.prototype.delete = un, an.prototype.get = cn, an.prototype.has = ln, an.prototype.set = pn, fn.prototype.clear = dn, fn.prototype.delete = hn, fn.prototype.get = gn, fn.prototype.has = vn, fn.prototype.set = _n, mn.prototype.add = mn.prototype.push = yn, mn.prototype.has = bn, xn.prototype.clear = wn, xn.prototype.delete = Cn, xn.prototype.get = Tn, xn.prototype.has = En, xn.prototype.set = An;
                    var mp = Gi(nr),
                        yp = Gi(or, !0),
                        bp = Ki(),
                        xp = Ki(!0),
                        wp = sp ? function(e, t) {
                            return sp.set(e, t), e
                        } : Nc,
                        Cp = Bl ? function(e, t) {
                            return Bl(e, "toString", {
                                configurable: !0,
                                enumerable: !1,
                                value: Pc(t),
                                writable: !0
                            })
                        } : Nc,
                        Tp = oi,
                        Ep = ql || function(e) {
                            return sr.clearTimeout(e)
                        },
                        Ap = ip && 1 / Q(new ip([, -0]))[1] == Ne ? function(e) {
                            return new ip(e)
                        } : Vc,
                        Op = sp ? function(e) {
                            return sp.get(e)
                        } : Vc,
                        Dp = Hl ? function(e) {
                            return null == e ? [] : (e = pl(e), f(Hl(e), function(t) {
                                return Il.call(e, t)
                            }))
                        } : Hc,
                        kp = Hl ? function(e) {
                            for (var t = []; e;) v(t, Dp(e)), e = jl(e);
                            return t
                        } : Hc,
                        Sp = pr;
                    (tp && Sp(new tp(new ArrayBuffer(1))) != pt || np && Sp(new np) != Je || rp && Sp(rp.resolve()) != tt || ip && Sp(new ip) != it || op && Sp(new op) != ut) && (Sp = function(e) {
                        var t = pr(e),
                            n = t == et ? e.constructor : ie,
                            r = n ? ia(n) : "";
                        if (r) switch (r) {
                            case cp:
                                return pt;
                            case lp:
                                return Je;
                            case pp:
                                return tt;
                            case fp:
                                return it;
                            case dp:
                                return ut
                        }
                        return t
                    });
                    var jp = ml ? ou : Wc,
                        Pp = ta(wp),
                        Ip = Fl || function(e, t) {
                            return sr.setTimeout(e, t)
                        },
                        Np = ta(Cp),
                        Lp = Ko(function(e) {
                            var t = [];
                            return It.test(e) && t.push(""), e.replace(Nt, function(e, n, r, i) {
                                t.push(r ? i.replace(Ht, "$1") : n || e)
                            }), t
                        }),
                        Rp = oi(function(e, t) {
                            return Js(e) ? Gn(e, tr(t, 1, Js, !0)) : []
                        }),
                        Mp = oi(function(e, t) {
                            var n = Ea(t);
                            return Js(n) && (n = ie), Js(e) ? Gn(e, tr(t, 1, Js, !0), Eo(n, 2)) : []
                        }),
                        Bp = oi(function(e, t) {
                            var n = Ea(t);
                            return Js(n) && (n = ie), Js(e) ? Gn(e, tr(t, 1, Js, !0), ie, n) : []
                        }),
                        qp = oi(function(e) {
                            var t = g(e, Ti);
                            return t.length && t[0] === e[0] ? Ar(t) : []
                        }),
                        Vp = oi(function(e) {
                            var t = Ea(e),
                                n = g(e, Ti);
                            return t === Ea(n) ? t = ie : n.pop(), n.length && n[0] === e[0] ? Ar(n, Eo(t, 2)) : []
                        }),
                        Fp = oi(function(e) {
                            var t = Ea(e),
                                n = g(e, Ti);
                            return t = "function" == typeof t ? t : ie, t && n.pop(), n.length && n[0] === e[0] ? Ar(n, ie, t) : []
                        }),
                        Up = oi(Da),
                        zp = bo(function(e, t) {
                            var n = null == e ? 0 : e.length,
                                r = Bn(e, t);
                            return ti(e, g(t, function(e) {
                                return Bo(e, n) ? +e : e
                            }).sort(Ri)), r
                        }),
                        Hp = oi(function(e) {
                            return _i(tr(e, 1, Js, !0))
                        }),
                        Wp = oi(function(e) {
                            var t = Ea(e);
                            return Js(t) && (t = ie), _i(tr(e, 1, Js, !0), Eo(t, 2))
                        }),
                        Gp = oi(function(e) {
                            var t = Ea(e);
                            return t = "function" == typeof t ? t : ie, _i(tr(e, 1, Js, !0), ie, t)
                        }),
                        Kp = oi(function(e, t) {
                            return Js(e) ? Gn(e, t) : []
                        }),
                        $p = oi(function(e) {
                            return wi(f(e, Js))
                        }),
                        Qp = oi(function(e) {
                            var t = Ea(e);
                            return Js(t) && (t = ie), wi(f(e, Js), Eo(t, 2))
                        }),
                        Yp = oi(function(e) {
                            var t = Ea(e);
                            return t = "function" == typeof t ? t : ie, wi(f(e, Js), ie, t)
                        }),
                        Jp = oi(Ya),
                        Xp = oi(function(e) {
                            var t = e.length,
                                n = t > 1 ? e[t - 1] : ie;
                            return n = "function" == typeof n ? (e.pop(), n) : ie, Ja(e, n)
                        }),
                        Zp = bo(function(e) {
                            var t = e.length,
                                n = t ? e[0] : 0,
                                r = this.__wrapped__,
                                o = function(t) {
                                    return Bn(t, e)
                                };
                            return !(t > 1 || this.__actions__.length) && r instanceof b && Bo(n) ? (r = r.slice(n, +n + (t ? 1 : 0)), r.__actions__.push({
                                func: ns,
                                args: [o],
                                thisArg: ie
                            }), new i(r, this.__chain__).thru(function(e) {
                                return t && !e.length && e.push(ie), e
                            })) : this.thru(o)
                        }),
                        ef = Hi(function(e, t, n) {
                            bl.call(e, n) ? ++e[n] : Mn(e, n, 1)
                        }),
                        tf = Zi(ga),
                        nf = Zi(va),
                        rf = Hi(function(e, t, n) {
                            bl.call(e, n) ? e[n].push(t) : Mn(e, n, [t])
                        }),
                        of = oi(function(e, t, n) {
                            var r = -1,
                                i = "function" == typeof t,
                                o = Ys(e) ? al(e.length) : [];
                            return mp(e, function(e) {
                                o[++r] = i ? s(t, e, n) : Dr(e, t, n)
                            }), o
                        }),
                        af = Hi(function(e, t, n) {
                            Mn(e, n, t)
                        }),
                        sf = Hi(function(e, t, n) {
                            e[n ? 0 : 1].push(t)
                        }, function() {
                            return [
                                [],
                                []
                            ]
                        }),
                        uf = oi(function(e, t) {
                            if (null == e) return [];
                            var n = t.length;
                            return n > 1 && qo(e, t[0], t[1]) ? t = [] : n > 2 && qo(t[0], t[1], t[2]) && (t = [t[0]]), Yr(e, tr(t, 1), [])
                        }),
                        cf = Vl || function() {
                            return sr.Date.now()
                        },
                        lf = oi(function(e, t, n) {
                            var r = _e;
                            if (n.length) {
                                var i = $(n, To(lf));
                                r |= we
                            }
                            return fo(e, r, t, n, i)
                        }),
                        pf = oi(function(e, t, n) {
                            var r = _e | me;
                            if (n.length) {
                                var i = $(n, To(pf));
                                r |= we
                            }
                            return fo(t, r, e, n, i)
                        }),
                        ff = oi(function(e, t) {
                            return Wn(e, 1, t)
                        }),
                        df = oi(function(e, t, n) {
                            return Wn(e, Du(t) || 0, n)
                        });
                    Ls.Cache = fn;
                    var hf = Tp(function(e, t) {
                            t = 1 == t.length && xf(t[0]) ? g(t[0], L(Eo())) : g(tr(t, 1), L(Eo()));
                            var n = t.length;
                            return oi(function(r) {
                                for (var i = -1, o = Yl(r.length, n); ++i < o;) r[i] = t[i].call(this, r[i]);
                                return s(e, this, r)
                            })
                        }),
                        gf = oi(function(e, t) {
                            var n = $(t, To(gf));
                            return fo(e, we, ie, t, n)
                        }),
                        vf = oi(function(e, t) {
                            var n = $(t, To(vf));
                            return fo(e, Ce, ie, t, n)
                        }),
                        _f = bo(function(e, t) {
                            return fo(e, Ee, ie, ie, ie, t)
                        }),
                        mf = uo(fr),
                        yf = uo(function(e, t) {
                            return e >= t
                        }),
                        bf = kr(function() {
                            return arguments
                        }()) ? kr : function(e) {
                            return cu(e) && bl.call(e, "callee") && !Il.call(e, "callee")
                        },
                        xf = al.isArray,
                        wf = dr ? L(dr) : Sr,
                        Cf = Wl || Wc,
                        Tf = hr ? L(hr) : jr,
                        Ef = gr ? L(gr) : Nr,
                        Af = vr ? L(vr) : Mr,
                        Of = _r ? L(_r) : Br,
                        Df = mr ? L(mr) : qr,
                        kf = uo(zr),
                        Sf = uo(function(e, t) {
                            return e <= t
                        }),
                        jf = Wi(function(e, t) {
                            if (Ho(t) || Ys(t)) return void Fi(t, Hu(t), e);
                            for (var n in t) bl.call(t, n) && Pn(e, n, t[n])
                        }),
                        Pf = Wi(function(e, t) {
                            Fi(t, Wu(t), e)
                        }),
                        If = Wi(function(e, t, n, r) {
                            Fi(t, Wu(t), e, r)
                        }),
                        Nf = Wi(function(e, t, n, r) {
                            Fi(t, Hu(t), e, r)
                        }),
                        Lf = bo(Bn),
                        Rf = oi(function(e) {
                            return e.push(ie, ho), s(If, ie, e)
                        }),
                        Mf = oi(function(e) {
                            return e.push(ie, go), s(Uf, ie, e)
                        }),
                        Bf = no(function(e, t, n) {
                            e[t] = n
                        }, Pc(Nc)),
                        qf = no(function(e, t, n) {
                            bl.call(e, t) ? e[t].push(n) : e[t] = [n]
                        }, Eo),
                        Vf = oi(Dr),
                        Ff = Wi(function(e, t, n) {
                            Kr(e, t, n)
                        }),
                        Uf = Wi(function(e, t, n, r) {
                            Kr(e, t, n, r)
                        }),
                        zf = bo(function(e, t) {
                            var n = {};
                            if (null == e) return n;
                            var r = !1;
                            t = g(t, function(t) {
                                return t = Ai(t, e), r || (r = t.length > 1), t
                            }), Fi(e, wo(e), n), r && (n = Vn(n, fe | de | he, vo));
                            for (var i = t.length; i--;) mi(n, t[i]);
                            return n
                        }),
                        Hf = bo(function(e, t) {
                            return null == e ? {} : Jr(e, t)
                        }),
                        Wf = po(Hu),
                        Gf = po(Wu),
                        Kf = Yi(function(e, t, n) {
                            return t = t.toLowerCase(), e + (n ? uc(t) : t)
                        }),
                        $f = Yi(function(e, t, n) {
                            return e + (n ? "-" : "") + t.toLowerCase()
                        }),
                        Qf = Yi(function(e, t, n) {
                            return e + (n ? " " : "") + t.toLowerCase()
                        }),
                        Yf = Qi("toLowerCase"),
                        Jf = Yi(function(e, t, n) {
                            return e + (n ? "_" : "") + t.toLowerCase()
                        }),
                        Xf = Yi(function(e, t, n) {
                            return e + (n ? " " : "") + ed(t)
                        }),
                        Zf = Yi(function(e, t, n) {
                            return e + (n ? " " : "") + t.toUpperCase()
                        }),
                        ed = Qi("toUpperCase"),
                        td = oi(function(e, t) {
                            try {
                                return s(e, ie, t)
                            } catch (e) {
                                return ru(e) ? e : new ul(e)
                            }
                        }),
                        nd = bo(function(e, t) {
                            return c(t, function(t) {
                                t = ra(t), Mn(e, t, lf(e[t], e))
                            }), e
                        }),
                        rd = eo(),
                        id = eo(!0),
                        od = oi(function(e, t) {
                            return function(n) {
                                return Dr(n, e, t)
                            }
                        }),
                        ad = oi(function(e, t) {
                            return function(n) {
                                return Dr(e, n, t)
                            }
                        }),
                        sd = io(g),
                        ud = io(p),
                        cd = io(y),
                        ld = so(),
                        pd = so(!0),
                        fd = ro(function(e, t) {
                            return e + t
                        }, 0),
                        dd = lo("ceil"),
                        hd = ro(function(e, t) {
                            return e / t
                        }, 1),
                        gd = lo("floor"),
                        vd = ro(function(e, t) {
                            return e * t
                        }, 1),
                        _d = lo("round"),
                        md = ro(function(e, t) {
                            return e - t
                        }, 0);
                    return n.after = Ds, n.ary = ks, n.assign = jf, n.assignIn = Pf, n.assignInWith = If, n.assignWith = Nf, n.at = Lf, n.before = Ss, n.bind = lf, n.bindAll = nd, n.bindKey = pf, n.castArray = zs, n.chain = es, n.chunk = sa, n.compact = ua, n.concat = ca, n.cond = Sc, n.conforms = jc, n.constant = Pc, n.countBy = ef, n.create = Pu, n.curry = js, n.curryRight = Ps, n.debounce = Is, n.defaults = Rf, n.defaultsDeep = Mf, n.defer = ff, n.delay = df, n.difference = Rp, n.differenceBy = Mp, n.differenceWith = Bp, n.drop = la, n.dropRight = pa, n.dropRightWhile = fa, n.dropWhile = da, n.fill = ha, n.filter = ps, n.flatMap = fs, n.flatMapDeep = ds, n.flatMapDepth = hs, n.flatten = _a, n.flattenDeep = ma, n.flattenDepth = ya, n.flip = Ns, n.flow = rd, n.flowRight = id, n.fromPairs = ba, n.functions = qu, n.functionsIn = Vu, n.groupBy = rf, n.initial = Ca, n.intersection = qp, n.intersectionBy = Vp, n.intersectionWith = Fp, n.invert = Bf, n.invertBy = qf, n.invokeMap = of, n.iteratee = Lc, n.keyBy = af, n.keys = Hu, n.keysIn = Wu, n.map = ms, n.mapKeys = Gu, n.mapValues = Ku, n.matches = Rc, n.matchesProperty = Mc, n.memoize = Ls, n.merge = Ff, n.mergeWith = Uf, n.method = od, n.methodOf = ad, n.mixin = Bc, n.negate = Rs, n.nthArg = Fc, n.omit = zf, n.omitBy = $u, n.once = Ms, n.orderBy = ys, n.over = sd, n.overArgs = hf, n.overEvery = ud, n.overSome = cd, n.partial = gf, n.partialRight = vf, n.partition = sf, n.pick = Hf, n.pickBy = Qu, n.property = Uc, n.propertyOf = zc, n.pull = Up, n.pullAll = Da, n.pullAllBy = ka, n.pullAllWith = Sa, n.pullAt = zp, n.range = ld, n.rangeRight = pd, n.rearg = _f, n.reject = ws, n.remove = ja, n.rest = Bs, n.reverse = Pa, n.sampleSize = Ts, n.set = Ju, n.setWith = Xu, n.shuffle = Es, n.slice = Ia, n.sortBy = uf, n.sortedUniq = Va, n.sortedUniqBy = Fa, n.split = yc, n.spread = qs, n.tail = Ua, n.take = za, n.takeRight = Ha, n.takeRightWhile = Wa, n.takeWhile = Ga, n.tap = ts, n.throttle = Vs, n.thru = ns, n.toArray = Tu, n.toPairs = Wf, n.toPairsIn = Gf, n.toPath = Yc, n.toPlainObject = ku, n.transform = Zu, n.unary = Fs, n.union = Hp, n.unionBy = Wp, n.unionWith = Gp, n.uniq = Ka, n.uniqBy = $a, n.uniqWith = Qa, n.unset = ec, n.unzip = Ya, n.unzipWith = Ja, n.update = tc, n.updateWith = nc, n.values = rc, n.valuesIn = ic, n.without = Kp, n.words = kc, n.wrap = Us, n.xor = $p, n.xorBy = Qp, n.xorWith = Yp, n.zip = Jp, n.zipObject = Xa, n.zipObjectDeep = Za, n.zipWith = Xp, n.entries = Wf, n.entriesIn = Gf, n.extend = Pf, n.extendWith = If, Bc(n, n), n.add = fd, n.attempt = td, n.camelCase = Kf, n.capitalize = uc, n.ceil = dd, n.clamp = oc, n.clone = Hs, n.cloneDeep = Gs, n.cloneDeepWith = Ks, n.cloneWith = Ws, n.conformsTo = $s, n.deburr = cc, n.defaultTo = Ic, n.divide = hd, n.endsWith = lc, n.eq = Qs, n.escape = pc, n.escapeRegExp = fc, n.every = ls, n.find = tf, n.findIndex = ga, n.findKey = Iu, n.findLast = nf, n.findLastIndex = va, n.findLastKey = Nu, n.floor = gd, n.forEach = gs, n.forEachRight = vs, n.forIn = Lu, n.forInRight = Ru, n.forOwn = Mu, n.forOwnRight = Bu, n.get = Fu, n.gt = mf, n.gte = yf, n.has = Uu, n.hasIn = zu, n.head = xa, n.identity = Nc, n.includes = _s, n.indexOf = wa, n.inRange = ac, n.invoke = Vf, n.isArguments = bf, n.isArray = xf, n.isArrayBuffer = wf, n.isArrayLike = Ys, n.isArrayLikeObject = Js, n.isBoolean = Xs, n.isBuffer = Cf, n.isDate = Tf, n.isElement = Zs, n.isEmpty = eu, n.isEqual = tu, n.isEqualWith = nu, n.isError = ru, n.isFinite = iu, n.isFunction = ou, n.isInteger = au, n.isLength = su, n.isMap = Ef, n.isMatch = lu, n.isMatchWith = pu, n.isNaN = fu, n.isNative = du, n.isNil = gu, n.isNull = hu, n.isNumber = vu, n.isObject = uu, n.isObjectLike = cu, n.isPlainObject = _u, n.isRegExp = Af, n.isSafeInteger = mu, n.isSet = Of, n.isString = yu, n.isSymbol = bu, n.isTypedArray = Df, n.isUndefined = xu, n.isWeakMap = wu, n.isWeakSet = Cu, n.join = Ta, n.kebabCase = $f, n.last = Ea, n.lastIndexOf = Aa, n.lowerCase = Qf, n.lowerFirst = Yf, n.lt = kf, n.lte = Sf, n.max = Xc, n.maxBy = Zc, n.mean = el, n.meanBy = tl, n.min = nl, n.minBy = rl, n.stubArray = Hc, n.stubFalse = Wc, n.stubObject = Gc, n.stubString = Kc, n.stubTrue = $c, n.multiply = vd, n.nth = Oa, n.noConflict = qc, n.noop = Vc, n.now = cf, n.pad = dc, n.padEnd = hc, n.padStart = gc, n.parseInt = vc, n.random = sc, n.reduce = bs, n.reduceRight = xs, n.repeat = _c, n.replace = mc, n.result = Yu, n.round = _d, n.runInContext = e, n.sample = Cs, n.size = As, n.snakeCase = Jf, n.some = Os, n.sortedIndex = Na, n.sortedIndexBy = La, n.sortedIndexOf = Ra, n.sortedLastIndex = Ma, n.sortedLastIndexBy = Ba, n.sortedLastIndexOf = qa, n.startCase = Xf, n.startsWith = bc, n.subtract = md, n.sum = il, n.sumBy = ol, n.template = xc, n.times = Qc, n.toFinite = Eu, n.toInteger = Au, n.toLength = Ou, n.toLower = wc, n.toNumber = Du, n.toSafeInteger = Su, n.toString = ju, n.toUpper = Cc, n.trim = Tc, n.trimEnd = Ec, n.trimStart = Ac, n.truncate = Oc, n.unescape = Dc, n.uniqueId = Jc, n.upperCase = Zf, n.upperFirst = ed, n.each = gs, n.eachRight = vs, n.first = xa, Bc(n, function() {
                        var e = {};
                        return nr(n, function(t, r) {
                            bl.call(n.prototype, r) || (e[r] = t)
                        }), e
                    }(), {
                        chain: !1
                    }), n.VERSION = oe, c(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                        n[e].placeholder = n
                    }), c(["drop", "take"], function(e, t) {
                        b.prototype[e] = function(n) {
                            n = n === ie ? 1 : Ql(Au(n), 0);
                            var r = this.__filtered__ && !t ? new b(this) : this.clone();
                            return r.__filtered__ ? r.__takeCount__ = Yl(n, r.__takeCount__) : r.__views__.push({
                                size: Yl(n, Be),
                                type: e + (r.__dir__ < 0 ? "Right" : "")
                            }), r
                        }, b.prototype[e + "Right"] = function(t) {
                            return this.reverse()[e](t).reverse()
                        }
                    }), c(["filter", "map", "takeWhile"], function(e, t) {
                        var n = t + 1,
                            r = n == je || n == Ie;
                        b.prototype[e] = function(e) {
                            var t = this.clone();
                            return t.__iteratees__.push({
                                iteratee: Eo(e, 3),
                                type: n
                            }), t.__filtered__ = t.__filtered__ || r, t
                        }
                    }), c(["head", "last"], function(e, t) {
                        var n = "take" + (t ? "Right" : "");
                        b.prototype[e] = function() {
                            return this[n](1).value()[0]
                        }
                    }), c(["initial", "tail"], function(e, t) {
                        var n = "drop" + (t ? "" : "Right");
                        b.prototype[e] = function() {
                            return this.__filtered__ ? new b(this) : this[n](1)
                        }
                    }), b.prototype.compact = function() {
                        return this.filter(Nc)
                    }, b.prototype.find = function(e) {
                        return this.filter(e).head()
                    }, b.prototype.findLast = function(e) {
                        return this.reverse().find(e)
                    }, b.prototype.invokeMap = oi(function(e, t) {
                        return "function" == typeof e ? new b(this) : this.map(function(n) {
                            return Dr(n, e, t)
                        })
                    }), b.prototype.reject = function(e) {
                        return this.filter(Rs(Eo(e)))
                    }, b.prototype.slice = function(e, t) {
                        e = Au(e);
                        var n = this;
                        return n.__filtered__ && (e > 0 || t < 0) ? new b(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== ie && (t = Au(t), n = t < 0 ? n.dropRight(-t) : n.take(t - e)), n)
                    }, b.prototype.takeRightWhile = function(e) {
                        return this.reverse().takeWhile(e).reverse()
                    }, b.prototype.toArray = function() {
                        return this.take(Be)
                    }, nr(b.prototype, function(e, t) {
                        var r = /^(?:filter|find|map|reject)|While$/.test(t),
                            o = /^(?:head|last)$/.test(t),
                            a = n[o ? "take" + ("last" == t ? "Right" : "") : t],
                            s = o || /^find/.test(t);
                        a && (n.prototype[t] = function() {
                            var t = this.__wrapped__,
                                u = o ? [1] : arguments,
                                c = t instanceof b,
                                l = u[0],
                                p = c || xf(t),
                                f = function(e) {
                                    var t = a.apply(n, v([e], u));
                                    return o && d ? t[0] : t
                                };
                            p && r && "function" == typeof l && 1 != l.length && (c = p = !1);
                            var d = this.__chain__,
                                h = !!this.__actions__.length,
                                g = s && !d,
                                _ = c && !h;
                            if (!s && p) {
                                t = _ ? t : new b(this);
                                var m = e.apply(t, u);
                                return m.__actions__.push({
                                    func: ns,
                                    args: [f],
                                    thisArg: ie
                                }), new i(m, d)
                            }
                            return g && _ ? e.apply(this, u) : (m = this.thru(f), g ? o ? m.value()[0] : m.value() : m)
                        })
                    }), c(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                        var t = gl[e],
                            r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                            i = /^(?:pop|shift)$/.test(e);
                        n.prototype[e] = function() {
                            var e = arguments;
                            if (i && !this.__chain__) {
                                var n = this.value();
                                return t.apply(xf(n) ? n : [], e)
                            }
                            return this[r](function(n) {
                                return t.apply(xf(n) ? n : [], e)
                            })
                        }
                    }), nr(b.prototype, function(e, t) {
                        var r = n[t];
                        if (r) {
                            var i = r.name + "",
                                o = up[i] || (up[i] = []);
                            o.push({
                                name: t,
                                func: r
                            })
                        }
                    }), up[to(ie, me).name] = [{
                        name: "wrapper",
                        func: ie
                    }], b.prototype.clone = k, b.prototype.reverse = J, b.prototype.value = te, n.prototype.at = Zp, n.prototype.chain = rs, n.prototype.commit = is, n.prototype.next = os, n.prototype.plant = ss, n.prototype.reverse = us, n.prototype.toJSON = n.prototype.valueOf = n.prototype.value = cs, n.prototype.first = n.prototype.head, Rl && (n.prototype[Rl] = as), n
                },
                Tr = Cr();
            sr._ = Tr, r = function() {
                return Tr
            }.call(t, n, t, i), !(r !== ie && (i.exports = r))
        }).call(this)
    }).call(t, function() {
        return this
    }(), n(46)(e))
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    n(48), n(49)
}, function(e, t) {
    ! function() {
        var t = function(e, n) {
            function r() {
                this.q = [], this.add = function(e) {
                    this.q.push(e)
                };
                var e, t;
                this.call = function() {
                    for (e = 0, t = this.q.length; e < t; e++) this.q[e].call()
                }
            }

            function i(e, t) {
                return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : e.style[t]
            }

            function o(e, t) {
                if (e.resizedAttached) {
                    if (e.resizedAttached) return void e.resizedAttached.add(t)
                } else e.resizedAttached = new r, e.resizedAttached.add(t);
                e.resizeSensor = document.createElement("div"), e.resizeSensor.className = "resize-sensor";
                var n = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                    o = "position: absolute; left: 0; top: 0; transition: 0s;";
                e.resizeSensor.style.cssText = n, e.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + n + '"><div style="' + o + '"></div></div><div class="resize-sensor-shrink" style="' + n + '"><div style="' + o + ' width: 200%; height: 200%"></div></div>', e.appendChild(e.resizeSensor), {
                    fixed: 1,
                    absolute: 1
                }[i(e, "position")] || (e.style.position = "relative");
                var a, s, u = e.resizeSensor.childNodes[0],
                    c = u.childNodes[0],
                    l = e.resizeSensor.childNodes[1],
                    p = (l.childNodes[0], function() {
                        c.style.width = u.offsetWidth + 10 + "px", c.style.height = u.offsetHeight + 10 + "px", u.scrollLeft = u.scrollWidth, u.scrollTop = u.scrollHeight, l.scrollLeft = l.scrollWidth, l.scrollTop = l.scrollHeight, a = e.offsetWidth, s = e.offsetHeight
                    });
                p();
                var f = function() {
                        e.resizedAttached && e.resizedAttached.call()
                    },
                    d = function(e, t, n) {
                        e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n)
                    },
                    h = function() {
                        e.offsetWidth == a && e.offsetHeight == s || f(), p()
                    };
                d(u, "scroll", h), d(l, "scroll", h)
            }
            var a = Object.prototype.toString.call(e),
                s = "[object Array]" === a || "[object NodeList]" === a || "[object HTMLCollection]" === a || "undefined" != typeof jQuery && e instanceof jQuery || "undefined" != typeof Elements && e instanceof Elements;
            if (s)
                for (var u = 0, c = e.length; u < c; u++) o(e[u], n);
            else o(e, n);
            this.detach = function() {
                if (s)
                    for (var n = 0, r = e.length; n < r; n++) t.detach(e[n]);
                else t.detach(e)
            }
        };
        t.detach = function(e) {
            if (e.resizeSensor) {
                try {
                    e.removeChild(e.resizeSensor)
                } catch (e) {}
                delete e.resizeSensor, delete e.resizedAttached
            }
        }, "undefined" != typeof e && "undefined" != typeof e.exports ? e.exports = t : window.ResizeSensor = t
    }()
}, function(e, t, n) {
    ! function() {
        var t = window.ResizeSensor;
        "undefined" != typeof e && "undefined" != typeof e.exports && (t = n(48));
        var r = this.ElementQueries = function() {
            function e(e) {
                e || (e = document.documentElement);
                var t = getComputedStyle(e, "fontSize");
                return parseFloat(t) || 16
            }

            function n(t, n) {
                var r = n.replace(/[0-9]*/, "");
                switch (n = parseFloat(n), r) {
                    case "px":
                        return n;
                    case "em":
                        return n * e(t);
                    case "rem":
                        return n * e();
                    case "vw":
                        return n * document.documentElement.clientWidth / 100;
                    case "vh":
                        return n * document.documentElement.clientHeight / 100;
                    case "vmin":
                    case "vmax":
                        var i = document.documentElement.clientWidth / 100,
                            o = document.documentElement.clientHeight / 100,
                            a = Math["vmin" === r ? "min" : "max"];
                        return n * a(i, o);
                    default:
                        return n
                }
            }

            function i(e) {
                this.element = e, this.options = {};
                var t, r, i, o, a, s, u, c = 0,
                    l = 0;
                this.addOption = function(e) {
                    var t = [e.mode, e.property, e.value].join(",");
                    this.options[t] = e
                };
                var p = ["min-width", "min-height", "max-width", "max-height"];
                this.call = function() {
                    c = this.element.offsetWidth, l = this.element.offsetHeight, a = {};
                    for (t in this.options) this.options.hasOwnProperty(t) && (r = this.options[t], i = n(this.element, r.value), o = "width" == r.property ? c : l, u = r.mode + "-" + r.property, s = "", "min" == r.mode && o >= i && (s += r.value), "max" == r.mode && o <= i && (s += r.value), a[u] || (a[u] = ""), s && -1 === (" " + a[u] + " ").indexOf(" " + s + " ") && (a[u] += " " + s));
                    for (var e in p) p.hasOwnProperty(e) && (a[p[e]] ? this.element.setAttribute(p[e], a[p[e]].substr(1)) : this.element.removeAttribute(p[e]))
                }
            }

            function o(e, n) {
                e.elementQueriesSetupInformation ? e.elementQueriesSetupInformation.addOption(n) : (e.elementQueriesSetupInformation = new i(e), e.elementQueriesSetupInformation.addOption(n), e.elementQueriesSensor = new t(e, function() {
                    e.elementQueriesSetupInformation.call()
                })), e.elementQueriesSetupInformation.call(), d && h.indexOf(e) < 0 && h.push(e)
            }

            function a(e, t, n, r) {
                "undefined" == typeof g[t] && (g[t] = {}), "undefined" == typeof g[t][n] && (g[t][n] = {}), "undefined" == typeof g[t][n][r] ? g[t][n][r] = e : g[t][n][r] += "," + e
            }

            function s() {
                var e;
                if (document.querySelectorAll && (e = document.querySelectorAll.bind(document)), e || "undefined" == typeof $$ || (e = $$), e || "undefined" == typeof jQuery || (e = jQuery), !e) throw "No document.querySelectorAll, jQuery or Mootools's $$ found.";
                return e
            }

            function u() {
                var e = s();
                for (var t in g)
                    if (g.hasOwnProperty(t))
                        for (var n in g[t])
                            if (g[t].hasOwnProperty(n))
                                for (var r in g[t][n])
                                    if (g[t][n].hasOwnProperty(r))
                                        for (var i = e(g[t][n][r]), a = 0, u = i.length; a < u; a++) o(i[a], {
                                            mode: t,
                                            property: n,
                                            value: r
                                        })
            }

            function c(e) {
                function n() {
                    var t, n = !1;
                    for (t in r) r.hasOwnProperty(t) && i[t].minWidth && e.offsetWidth > i[t].minWidth && (n = t);
                    if (n || (n = a), s != n)
                        if (u[n]) r[s].style.display = "none", r[n].style.display = "block", s = n;
                        else {
                            var c = new Image;
                            c.onload = function() {
                                r[n].src = o[n], r[s].style.display = "none", r[n].style.display = "block", u[n] = !0, s = n
                            }, c.src = o[n]
                        } else r[n].src = o[n]
                }
                var r = [],
                    i = [],
                    o = [],
                    a = 0,
                    s = -1,
                    u = [];
                for (var c in e.children)
                    if (e.children.hasOwnProperty(c) && e.children[c].tagName && "img" === e.children[c].tagName.toLowerCase()) {
                        r.push(e.children[c]);
                        var l = e.children[c].getAttribute("min-width") || e.children[c].getAttribute("data-min-width"),
                            p = e.children[c].getAttribute("data-src") || e.children[c].getAttribute("url");
                        o.push(p);
                        var f = {
                            minWidth: l
                        };
                        i.push(f), l ? e.children[c].style.display = "none" : (a = r.length - 1, e.children[c].style.display = "block")
                    }
                s = a, e.resizeSensor = new t(e, n), n(), d && h.push(e)
            }

            function l() {
                for (var e = s(), t = e("[data-responsive-image],[responsive-image]"), n = 0, r = t.length; n < r; n++) c(t[n])
            }

            function p(e) {
                var t, n;
                for (e = e.replace(/'/g, '"'); null !== (t = v.exec(e));)
                    for (n = t[1] + t[3], attrs = t[2]; null !== (attrMatch = _.exec(attrs));) a(n, attrMatch[1], attrMatch[2], attrMatch[3])
            }

            function f(e) {
                var t = "";
                if (e)
                    if ("string" == typeof e) e = e.toLowerCase(), -1 === e.indexOf("min-width") && -1 === e.indexOf("max-width") || p(e);
                    else
                        for (var n = 0, r = e.length; n < r; n++) 1 === e[n].type ? (t = e[n].selectorText || e[n].cssText, -1 !== t.indexOf("min-height") || -1 !== t.indexOf("max-height") ? p(t) : -1 === t.indexOf("min-width") && -1 === t.indexOf("max-width") || p(t)) : 4 === e[n].type && f(e[n].cssRules || e[n].rules)
            }
            var d = !1,
                h = [],
                g = {},
                v = /,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/gim,
                _ = /\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/gim,
                m = !1;
            this.init = function(e) {
                d = "undefined" != typeof e && e;
                for (var t = 0, n = document.styleSheets.length; t < n; t++) try {
                    f(document.styleSheets[t].cssRules || document.styleSheets[t].rules || document.styleSheets[t].cssText)
                } catch (e) {
                    "SecurityError" !== e.name
                }
                if (!m) {
                    var r = document.createElement("style");
                    r.type = "text/css", r.innerHTML = "[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img { width: 100%;}", document.getElementsByTagName("head")[0].appendChild(r), m = !0
                }
                u(), l()
            }, this.update = function(e) {
                this.init(e)
            }, this.detach = function() {
                if (!this.withTracking) throw "withTracking is not enabled. We can not detach elements since we don not store it.Use ElementQueries.withTracking = true; before domready or call ElementQueryes.update(true).";
                for (var e; e = h.pop();) r.detach(e);
                h = []
            }
        };
        r.update = function(e) {
            r.instance.update(e)
        }, r.detach = function(e) {
            e.elementQueriesSetupInformation ? (e.elementQueriesSensor.detach(), delete e.elementQueriesSetupInformation, delete e.elementQueriesSensor) : e.resizeSensor && (e.resizeSensor.detach(), delete e.resizeSensor)
        }, r.withTracking = !1, r.init = function() {
            r.instance || (r.instance = new r), r.instance.init(r.withTracking)
        };
        var i = function(e) {
            if (document.addEventListener) document.addEventListener("DOMContentLoaded", e, !1);
            else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) var t = setInterval(function() {
                /loaded|complete/i.test(document.readyState) && (e(), clearInterval(t))
            }, 10);
            else window.onload = e
        };
        r.listen = function() {
            i(r.init)
        }, "undefined" != typeof e && "undefined" != typeof e.exports ? e.exports = r : (window.ElementQueries = r, r.listen())
    }()
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    r(n(51)), r(n(52)), r(n(54)), r(n(1)), r(n(41)), r(n(55)), r(n(56)), r(n(57)), r(n(58)), r(n(59)), r(n(60)), r(n(5)), r(n(61)), r(n(62)), r(n(63)), r(n(64)), r(n(65)), r(n(66)), r(n(67)), r(n(68)), r(n(69)), r(n(70)), r(n(71)), r(n(72)), r(n(73)), r(n(74)), r(n(75)), r(n(76)), r(n(77)), r(n(78)), r(n(79)), r(n(80)), r(n(81))
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(53),
        i = function() {
            function e(e) {
                var t = this;
                this.debug = !1, this.container = null, this._active = !1, this.scope = null, this.index = 0, this.reverse = !1, this.tooltip = r('<div class="" role="tooltip" aria-hidden="true"></div>'), this.keydown = function(e) {
                    if (t.reverse = e.shiftKey, t.active && t.container && ("Tab" == e.key || 9 == e.keyCode)) {
                        var n = t.refresh(),
                            i = t.indexOfObject(t.focused, n);
                        if (e.shiftKey ? t.focused ? i-- : i = n.length - 1 : t.focused ? i++ : i = 0, i < 0 || i > n.length - 1) {
                            if (!r(t.container).find('[data-modal="true"]').length) return void(t.active = !1);
                            i = t.modulo(i, n.length)
                        }
                        e.preventDefault(), r(n[i]).focus()
                    }
                }, this.scope = this, this.container = e, this.container.setAttribute("tabindex", "0"), this.handlers(), this.refresh()
            }
            return e.prototype.destory = function() {
                document.removeEventListener("keydown", this.keydown)
            }, e.prototype.click = function(t) {
                var n = this;
                if (this.reverse = !1, this.active = !0, this.container === t.target) return void t.preventDefault();
                var i = r(t.target).closest(e.FOCUSABLE);
                i.length && this.indexOfObject(i.get(0)) > -1 && setTimeout(function() {
                    r(n.container).has(t.target).length ? t.target.focus() : n.container.focus()
                }, 1)
            }, e.prototype.handlers = function() {
                var e = this;
                r(this.container).on("mousedown", function(t) {
                    e.click(t)
                }), r(this.container).on("keydown", function(t) {
                    32 != t.keyCode && 13 != t.keyCode || e.click(t)
                }), r(this.container).on("focus", function(t) {
                    e.active = !0
                }), r(this.container).on("focusout", function(t) {
                    if (e.active) {
                        var n = r(e.container).has(t.relatedTarget).length;
                        setTimeout(function() {
                            var i = t.relatedTarget || e.focused;
                            return n && !r(e.container).has(i).length ? void e.container.focus() : !r(e.container).has(t.target).length && e.container !== t.target || n || i === e.container || i && r(e.container).has(i).length ? r(e.container).has(t.target).length || e.container === t.target ? void!r(t.target).is(":visible") : void e.container.focus() : void(e.active = !1)
                        }, 1)
                    }
                }), document.addEventListener("keydown", this.keydown)
            }, e.prototype.getObjects = function() {
                return this.sortByPosition(r(this.container).find(e.FOCUSABLE).toArray())
            }, e.prototype.indexOfObject = function(e, t) {
                for (var n = t || this.getObjects(), r = 0; r < n.length; r++)
                    if (n[r] === e) return r;
                return -1
            }, e.prototype.sortByPosition = function(e) {
                for (var t = this, n = [], i = 0; i < e.length; i++) {
                    var o = r(e[i]).closest("[role=group]");
                    o.length || (o = r(e[i])), o = o.get(0);
                    for (var a = !1, s = 0, u = 0; u < n.length; u++)
                        if (o === n[u].parent) {
                            a = !0, s = u;
                            break
                        }
                    a || (s = n.push({
                        parent: o,
                        objects: []
                    }) - 1), n[s].objects.push(e[i])
                }
                n.sort(function(e, n) {
                    var e = r(e.parent),
                        n = r(n.parent);
                    return t.findScreenPosition(e.offset().top - n.offset().top, e.offset().left - n.offset().left)
                });
                for (var i = 0; i < n.length; i++) n[i] = n[i].objects;
                return [].concat.apply([], n)
            }, e.prototype.findScreenPosition = function(e, t) {
                return Math.abs(t) < Math.abs(e) ? e > 0 ? 1 : -1 : t > 0 ? 1 : -1
            }, e.prototype.refresh = function() {
                if (!this.container) return [];
                var e = this.getObjects();
                return e.forEach(function(e) {
                    e.setAttribute("tabindex", "-1")
                }), e
            }, Object.defineProperty(e.prototype, "active", {
                get: function() {
                    return this._active
                },
                set: function(e) {
                    var t = this;
                    if (this._active !== e) {
                        if (this._active = e, e) {
                            if (e) {
                                var n = this.refresh(),
                                    i = this.reverse ? n[n.length - 1] : n[0];
                                r(i).focus()
                            }
                        } else;
                        setTimeout(function() {
                            t.container.setAttribute("tabindex", e ? "-1" : "0")
                        }, 1)
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.showToolTip = function(e, t) {
                this.tooltip.html(t), r("body").append(this.tooltip);
                var n = e.offset();
                n.top += 1.5 * -this.tooltip.outerHeight(), n.left += e.outerWidth() / 2 - this.tooltip.outerWidth() / 2, r(window).width() < n.left + this.tooltip.outerWidth() && (n.left -= (this.tooltip.outerWidth() - e.outerWidth()) / 2 + e.outerWidth() - (e.outerWidth() / 2 + 20)), this.tooltip.offset(n)
            }, e.prototype.hideToolTip = function() {
                this.tooltip.css({
                    left: "0px",
                    top: "0px"
                }), this.tooltip.remove()
            }, e.prototype.modulo = function(e, t) {
                return (e % t + t) % t
            }, Object.defineProperty(e.prototype, "focused", {
                get: function() {
                    if (this.container) {
                        var e = null;
                        if (window.event) {
                            var t = window.event;
                            t.targ && (e = t.targ), t.srcElement && (e = t.srcElement), e && 3 == e.nodeType && (e = e.parentNode)
                        } else document.activeElement && (e = document.activeElement);
                        return r(this.container).has(e) ? e : null
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    i.FOCUSABLE = "button:visible, [aria-label]:visible, a:visible, input:visible", t.A11Y = i
}, function(e, t, n) {
    var r, i;
    ! function(t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function(n, o) {
        "use strict";

        function a(e, t) {
            t = t || oe;
            var n = t.createElement("script");
            n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
        }

        function s(e) {
            var t = !!e && "length" in e && e.length,
                n = me.type(e);
            return "function" !== n && !me.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function u(e, t, n) {
            return me.isFunction(t) ? me.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            }) : t.nodeType ? me.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? me.grep(e, function(e) {
                return le.call(t, e) > -1 !== n
            }) : De.test(t) ? me.filter(t, e, n) : (t = me.filter(t, e), me.grep(e, function(e) {
                return le.call(t, e) > -1 !== n && 1 === e.nodeType
            }))
        }

        function c(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function l(e) {
            var t = {};
            return me.each(e.match(Ne) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function p(e) {
            return e
        }

        function f(e) {
            throw e
        }

        function d(e, t, n) {
            var r;
            try {
                e && me.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && me.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e)
            } catch (e) {
                n.call(void 0, e)
            }
        }

        function h() {
            oe.removeEventListener("DOMContentLoaded", h), n.removeEventListener("load", h), me.ready()
        }

        function g() {
            this.expando = me.expando + g.uid++
        }

        function v(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Fe.test(e) ? JSON.parse(e) : e)
        }

        function _(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(Ue, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                    try {
                        n = v(n)
                    } catch (e) {}
                    Ve.set(e, t, n)
                } else n = void 0;
            return n
        }

        function m(e, t, n, r) {
            var i, o = 1,
                a = 20,
                s = r ? function() {
                    return r.cur()
                } : function() {
                    return me.css(e, t, "")
                },
                u = s(),
                c = n && n[3] || (me.cssNumber[t] ? "" : "px"),
                l = (me.cssNumber[t] || "px" !== c && +u) && He.exec(me.css(e, t));
            if (l && l[3] !== c) {
                c = c || l[3], n = n || [], l = +u || 1;
                do o = o || ".5", l /= o, me.style(e, t, l + c); while (o !== (o = s() / u) && 1 !== o && --a)
            }
            return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i
        }

        function y(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                i = $e[r];
            return i ? i : (t = n.body.appendChild(n.createElement(r)), i = me.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), $e[r] = i, i)
        }

        function b(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++) r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = qe.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Ge(r) && (i[o] = y(r))) : "none" !== n && (i[o] = "none", qe.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e
        }

        function x(e, t) {
            var n;
            return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && me.nodeName(e, t) ? me.merge([e], n) : n
        }

        function w(e, t) {
            for (var n = 0, r = e.length; n < r; n++) qe.set(e[n], "globalEval", !t || qe.get(t[n], "globalEval"))
        }

        function C(e, t, n, r, i) {
            for (var o, a, s, u, c, l, p = t.createDocumentFragment(), f = [], d = 0, h = e.length; d < h; d++)
                if (o = e[d], o || 0 === o)
                    if ("object" === me.type(o)) me.merge(f, o.nodeType ? [o] : o);
                    else if (Ze.test(o)) {
                for (a = a || p.appendChild(t.createElement("div")), s = (Ye.exec(o) || ["", ""])[1].toLowerCase(), u = Xe[s] || Xe._default, a.innerHTML = u[1] + me.htmlPrefilter(o) + u[2], l = u[0]; l--;) a = a.lastChild;
                me.merge(f, a.childNodes), a = p.firstChild, a.textContent = ""
            } else f.push(t.createTextNode(o));
            for (p.textContent = "", d = 0; o = f[d++];)
                if (r && me.inArray(o, r) > -1) i && i.push(o);
                else if (c = me.contains(o.ownerDocument, o), a = x(p.appendChild(o), "script"), c && w(a), n)
                for (l = 0; o = a[l++];) Je.test(o.type || "") && n.push(o);
            return p
        }

        function T() {
            return !0
        }

        function E() {
            return !1
        }

        function A() {
            try {
                return oe.activeElement
            } catch (e) {}
        }

        function O(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (r = r || n, n = void 0);
                for (s in t) O(e, s, n, r, t[s], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = E;
            else if (!i) return e;
            return 1 === o && (a = i, i = function(e) {
                return me().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = me.guid++)), e.each(function() {
                me.event.add(this, t, i, r, n)
            })
        }

        function D(e, t) {
            return me.nodeName(e, "table") && me.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
        }

        function k(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function S(e) {
            var t = st.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function j(e, t) {
            var n, r, i, o, a, s, u, c;
            if (1 === t.nodeType) {
                if (qe.hasData(e) && (o = qe.access(e), a = qe.set(t, o), c = o.events)) {
                    delete a.handle, a.events = {};
                    for (i in c)
                        for (n = 0, r = c[i].length; n < r; n++) me.event.add(t, i, c[i][n])
                }
                Ve.hasData(e) && (s = Ve.access(e), u = me.extend({}, s), Ve.set(t, u))
            }
        }

        function P(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Qe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function I(e, t, n, r) {
            t = ue.apply([], t);
            var i, o, s, u, c, l, p = 0,
                f = e.length,
                d = f - 1,
                h = t[0],
                g = me.isFunction(h);
            if (g || f > 1 && "string" == typeof h && !ve.checkClone && at.test(h)) return e.each(function(i) {
                var o = e.eq(i);
                g && (t[0] = h.call(this, i, o.html())), I(o, t, n, r)
            });
            if (f && (i = C(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                for (s = me.map(x(i, "script"), k), u = s.length; p < f; p++) c = i, p !== d && (c = me.clone(c, !0, !0), u && me.merge(s, x(c, "script"))), n.call(e[p], c, p);
                if (u)
                    for (l = s[s.length - 1].ownerDocument, me.map(s, S), p = 0; p < u; p++) c = s[p], Je.test(c.type || "") && !qe.access(c, "globalEval") && me.contains(l, c) && (c.src ? me._evalUrl && me._evalUrl(c.src) : a(c.textContent.replace(ut, ""), l))
            }
            return e
        }

        function N(e, t, n) {
            for (var r, i = t ? me.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || me.cleanData(x(r)), r.parentNode && (n && me.contains(r.ownerDocument, r) && w(x(r, "script")), r.parentNode.removeChild(r));
            return e
        }

        function L(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || pt(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || me.contains(e.ownerDocument, e) || (a = me.style(e, t)), !ve.pixelMarginRight() && lt.test(a) && ct.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function R(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function M(e) {
            if (e in vt) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--;)
                if (e = gt[n] + t, e in vt) return e
        }

        function B(e, t, n) {
            var r = He.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function q(e, t, n, r, i) {
            var o, a = 0;
            for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += me.css(e, n + We[o], !0, i)), r ? ("content" === n && (a -= me.css(e, "padding" + We[o], !0, i)), "margin" !== n && (a -= me.css(e, "border" + We[o] + "Width", !0, i))) : (a += me.css(e, "padding" + We[o], !0, i), "padding" !== n && (a += me.css(e, "border" + We[o] + "Width", !0, i)));
            return a
        }

        function V(e, t, n) {
            var r, i = !0,
                o = pt(e),
                a = "border-box" === me.css(e, "boxSizing", !1, o);
            if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]), r <= 0 || null == r) {
                if (r = L(e, t, o), (r < 0 || null == r) && (r = e.style[t]), lt.test(r)) return r;
                i = a && (ve.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + q(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }

        function F(e, t, n, r, i) {
            return new F.prototype.init(e, t, n, r, i)
        }

        function U() {
            mt && (n.requestAnimationFrame(U), me.fx.tick())
        }

        function z() {
            return n.setTimeout(function() {
                _t = void 0
            }), _t = me.now()
        }

        function H(e, t) {
            var n, r = 0,
                i = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) n = We[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function W(e, t, n) {
            for (var r, i = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                if (r = i[o].call(n, t, e)) return r
        }

        function G(e, t, n) {
            var r, i, o, a, s, u, c, l, p = "width" in t || "height" in t,
                f = this,
                d = {},
                h = e.style,
                g = e.nodeType && Ge(e),
                v = qe.get(e, "fxshow");
            n.queue || (a = me._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                a.unqueued || s()
            }), a.unqueued++, f.always(function() {
                f.always(function() {
                    a.unqueued--, me.queue(e, "fx").length || a.empty.fire()
                })
            }));
            for (r in t)
                if (i = t[r], yt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || me.style(e, r)
                }
            if (u = !me.isEmptyObject(t), u || !me.isEmptyObject(d)) {
                p && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = v && v.display, null == c && (c = qe.get(e, "display")), l = me.css(e, "display"), "none" === l && (c ? l = c : (b([e], !0), c = e.style.display || c, l = me.css(e, "display"), b([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === me.css(e, "float") && (u || (f.done(function() {
                    h.display = c
                }), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), u = !1;
                for (r in d) u || (v ? "hidden" in v && (g = v.hidden) : v = qe.access(e, "fxshow", {
                    display: c
                }), o && (v.hidden = !g), g && b([e], !0), f.done(function() {
                    g || b([e]), qe.remove(e, "fxshow");
                    for (r in d) me.style(e, r, d[r])
                })), u = W(g ? v[r] : 0, r, f), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
            }
        }

        function K(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (r = me.camelCase(n), i = t[r], o = e[n], me.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = me.cssHooks[r], a && "expand" in a) {
                    o = a.expand(o), delete e[r];
                    for (n in o) n in e || (e[n] = o[n], t[n] = i)
                } else t[r] = i
        }

        function $(e, t, n) {
            var r, i, o = 0,
                a = $.prefilters.length,
                s = me.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (i) return !1;
                    for (var t = _t || z(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; a < u; a++) c.tweens[a].run(o);
                    return s.notifyWith(e, [c, o, n]), o < 1 && u ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: me.extend({}, t),
                    opts: me.extend(!0, {
                        specialEasing: {},
                        easing: me.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: _t || z(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = me.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? c.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) c.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                    }
                }),
                l = c.props;
            for (K(l, c.opts.specialEasing); o < a; o++)
                if (r = $.prefilters[o].call(c, e, l, c.opts)) return me.isFunction(r.stop) && (me._queueHooks(c.elem, c.opts.queue).stop = me.proxy(r.stop, r)), r;
            return me.map(l, W, c), me.isFunction(c.opts.start) && c.opts.start.call(e, c), me.fx.timer(me.extend(u, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function Q(e) {
            var t = e.match(Ne) || [];
            return t.join(" ");
        }

        function Y(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function J(e, t, n, r) {
            var i;
            if (me.isArray(t)) me.each(t, function(t, i) {
                n || St.test(e) ? r(e, i) : J(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
            else if (n || "object" !== me.type(t)) r(e, t);
            else
                for (i in t) J(e + "[" + i + "]", t[i], n, r)
        }

        function X(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    o = t.toLowerCase().match(Ne) || [];
                if (me.isFunction(n))
                    for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Z(e, t, n, r) {
            function i(s) {
                var u;
                return o[s] = !0, me.each(e[s] || [], function(e, s) {
                    var c = s(t, n, r);
                    return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
                }), u
            }
            var o = {},
                a = e === Ut;
            return i(t.dataTypes[0]) || !o["*"] && i("*")
        }

        function ee(e, t) {
            var n, r, i = me.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && me.extend(!0, e, r), e
        }

        function te(e, t, n) {
            for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (i in s)
                    if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break
                    }
            if (u[0] in n) o = u[0];
            else {
                for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                        o = i;
                        break
                    }
                    a || (a = i)
                }
                o = o || a
            }
            if (o) return o !== u[0] && u.unshift(o), n[o]
        }

        function ne(e, t, n, r) {
            var i, o, a, s, u, c = {},
                l = e.dataTypes.slice();
            if (l[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (o = l.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                if (a = c[u + " " + o] || c["* " + o], !a)
                    for (i in c)
                        if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                            a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], l.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e.throws) t = a(t);
                    else try {
                        t = a(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + u + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function re(e) {
            return me.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var ie = [],
            oe = n.document,
            ae = Object.getPrototypeOf,
            se = ie.slice,
            ue = ie.concat,
            ce = ie.push,
            le = ie.indexOf,
            pe = {},
            fe = pe.toString,
            de = pe.hasOwnProperty,
            he = de.toString,
            ge = he.call(Object),
            ve = {},
            _e = "3.1.1",
            me = function(e, t) {
                return new me.fn.init(e, t)
            },
            ye = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            be = /^-ms-/,
            xe = /-([a-z])/g,
            we = function(e, t) {
                return t.toUpperCase()
            };
        me.fn = me.prototype = {
            jquery: _e,
            constructor: me,
            length: 0,
            toArray: function() {
                return se.call(this)
            },
            get: function(e) {
                return null == e ? se.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = me.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return me.each(this, e)
            },
            map: function(e) {
                return this.pushStack(me.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(se.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ce,
            sort: ie.sort,
            splice: ie.splice
        }, me.extend = me.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || me.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = a[t], r = e[t], a !== r && (c && r && (me.isPlainObject(r) || (i = me.isArray(r))) ? (i ? (i = !1, o = n && me.isArray(n) ? n : []) : o = n && me.isPlainObject(n) ? n : {}, a[t] = me.extend(c, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }, me.extend({
            expando: "jQuery" + (_e + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === me.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = me.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== fe.call(e)) && (!(t = ae(e)) || (n = de.call(t, "constructor") && t.constructor, "function" == typeof n && he.call(n) === ge))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[fe.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                a(e)
            },
            camelCase: function(e) {
                return e.replace(be, "ms-").replace(xe, we)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, r = 0;
                if (s(e))
                    for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
                else
                    for (r in e)
                        if (t.call(e[r], r, e[r]) === !1) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ye, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (s(Object(e)) ? me.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : le.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var r, i, o = 0,
                    a = [];
                if (s(e))
                    for (r = e.length; o < r; o++) i = t(e[o], o, n), null != i && a.push(i);
                else
                    for (o in e) i = t(e[o], o, n), null != i && a.push(i);
                return ue.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), me.isFunction(e)) return r = se.call(arguments, 2), i = function() {
                    return e.apply(t || this, r.concat(se.call(arguments)))
                }, i.guid = e.guid = e.guid || me.guid++, i
            },
            now: Date.now,
            support: ve
        }), "function" == typeof Symbol && (me.fn[Symbol.iterator] = ie[Symbol.iterator]), me.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            pe["[object " + t + "]"] = t.toLowerCase()
        });
        var Ce = function(e) {
            function t(e, t, n, r) {
                var i, o, a, s, u, c, l, f = t && t.ownerDocument,
                    h = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                if (!r && ((t ? t.ownerDocument || t : F) !== I && P(t), t = t || I, L)) {
                    if (11 !== h && (u = _e.exec(e)))
                        if (i = u[1]) {
                            if (9 === h) {
                                if (!(a = t.getElementById(i))) return n;
                                if (a.id === i) return n.push(a), n
                            } else if (f && (a = f.getElementById(i)) && q(t, a) && a.id === i) return n.push(a), n
                        } else {
                            if (u[2]) return X.apply(n, t.getElementsByTagName(e)), n;
                            if ((i = u[3]) && w.getElementsByClassName && t.getElementsByClassName) return X.apply(n, t.getElementsByClassName(i)), n
                        }
                    if (w.qsa && !G[e + " "] && (!R || !R.test(e))) {
                        if (1 !== h) f = t, l = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(xe, we) : t.setAttribute("id", s = V), c = A(e), o = c.length; o--;) c[o] = "#" + s + " " + d(c[o]);
                            l = c.join(","), f = me.test(e) && p(t.parentNode) || t
                        }
                        if (l) try {
                            return X.apply(n, f.querySelectorAll(l)), n
                        } catch (e) {} finally {
                            s === V && t.removeAttribute("id")
                        }
                    }
                }
                return D(e.replace(se, "$1"), t, n, r)
            }

            function n() {
                function e(n, r) {
                    return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = r
                }
                var t = [];
                return e
            }

            function r(e) {
                return e[V] = !0, e
            }

            function i(e) {
                var t = I.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), r = n.length; r--;) C.attrHandle[n[r]] = t
            }

            function a(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function l(e) {
                return r(function(t) {
                    return t = +t, r(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function p(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function f() {}

            function d(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function h(e, t, n) {
                var r = t.dir,
                    i = t.next,
                    o = i || r,
                    a = n && "parentNode" === o,
                    s = z++;
                return t.first ? function(t, n, i) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || a) return e(t, n, i);
                    return !1
                } : function(t, n, u) {
                    var c, l, p, f = [U, s];
                    if (u) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || a)
                                if (p = t[V] || (t[V] = {}), l = p[t.uniqueID] || (p[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                else {
                                    if ((c = l[o]) && c[0] === U && c[1] === s) return f[2] = c[2];
                                    if (l[o] = f, f[2] = e(t, n, u)) return !0
                                } return !1
                }
            }

            function g(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function v(e, n, r) {
                for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
                return r
            }

            function _(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
                return a
            }

            function m(e, t, n, i, o, a) {
                return i && !i[V] && (i = m(i)), o && !o[V] && (o = m(o, a)), r(function(r, a, s, u) {
                    var c, l, p, f = [],
                        d = [],
                        h = a.length,
                        g = r || v(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !r && t ? g : _(g, f, e, s, u),
                        y = n ? o || (r ? e : h || i) ? [] : a : m;
                    if (n && n(m, y, s, u), i)
                        for (c = _(y, d), i(c, [], s, u), l = c.length; l--;)(p = c[l]) && (y[d[l]] = !(m[d[l]] = p));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (c = [], l = y.length; l--;)(p = y[l]) && c.push(m[l] = p);
                                o(null, y = [], c, u)
                            }
                            for (l = y.length; l--;)(p = y[l]) && (c = o ? ee(r, p) : f[l]) > -1 && (r[c] = !(a[c] = p))
                        }
                    } else y = _(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, u) : X.apply(a, y)
                })
            }

            function y(e) {
                for (var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = h(function(e) {
                        return e === t
                    }, a, !0), c = h(function(e) {
                        return ee(t, e) > -1
                    }, a, !0), l = [function(e, n, r) {
                        var i = !o && (r || n !== k) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                        return t = null, i
                    }]; s < i; s++)
                    if (n = C.relative[e[s].type]) l = [h(g(l), n)];
                    else {
                        if (n = C.filter[e[s].type].apply(null, e[s].matches), n[V]) {
                            for (r = ++s; r < i && !C.relative[e[r].type]; r++);
                            return m(s > 1 && g(l), s > 1 && d(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(se, "$1"), n, s < r && y(e.slice(s, r)), r < i && y(e = e.slice(r)), r < i && d(e))
                        }
                        l.push(n)
                    }
                return g(l)
            }

            function b(e, n) {
                var i = n.length > 0,
                    o = e.length > 0,
                    a = function(r, a, s, u, c) {
                        var l, p, f, d = 0,
                            h = "0",
                            g = r && [],
                            v = [],
                            m = k,
                            y = r || o && C.find.TAG("*", c),
                            b = U += null == m ? 1 : Math.random() || .1,
                            x = y.length;
                        for (c && (k = a === I || a || c); h !== x && null != (l = y[h]); h++) {
                            if (o && l) {
                                for (p = 0, a || l.ownerDocument === I || (P(l), s = !L); f = e[p++];)
                                    if (f(l, a || I, s)) {
                                        u.push(l);
                                        break
                                    }
                                c && (U = b)
                            }
                            i && ((l = !f && l) && d--, r && g.push(l))
                        }
                        if (d += h, i && h !== d) {
                            for (p = 0; f = n[p++];) f(g, v, a, s);
                            if (r) {
                                if (d > 0)
                                    for (; h--;) g[h] || v[h] || (v[h] = Y.call(u));
                                v = _(v)
                            }
                            X.apply(u, v), c && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                        }
                        return c && (U = b, k = m), g
                    };
                return i ? r(a) : a
            }
            var x, w, C, T, E, A, O, D, k, S, j, P, I, N, L, R, M, B, q, V = "sizzle" + 1 * new Date,
                F = e.document,
                U = 0,
                z = 0,
                H = n(),
                W = n(),
                G = n(),
                K = function(e, t) {
                    return e === t && (j = !0), 0
                },
                $ = {}.hasOwnProperty,
                Q = [],
                Y = Q.pop,
                J = Q.push,
                X = Q.push,
                Z = Q.slice,
                ee = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
                oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
                ae = new RegExp(ne + "+", "g"),
                se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                ue = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                pe = new RegExp(oe),
                fe = new RegExp("^" + re + "$"),
                de = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re + "|[*])"),
                    ATTR: new RegExp("^" + ie),
                    PSEUDO: new RegExp("^" + oe),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                he = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                _e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                me = /[+~]/,
                ye = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                be = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                we = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                Ce = function() {
                    P()
                },
                Te = h(function(e) {
                    return e.disabled === !0 && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                X.apply(Q = Z.call(F.childNodes), F.childNodes), Q[F.childNodes.length].nodeType
            } catch (e) {
                X = {
                    apply: Q.length ? function(e, t) {
                        J.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {}, E = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, P = t.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : F;
                return r !== I && 9 === r.nodeType && r.documentElement ? (I = r, N = I.documentElement, L = !E(I), F !== I && (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), w.attributes = i(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), w.getElementsByTagName = i(function(e) {
                    return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = ve.test(I.getElementsByClassName), w.getById = i(function(e) {
                    return N.appendChild(e).id = V, !I.getElementsByName || !I.getElementsByName(V).length
                }), w.getById ? (C.filter.ID = function(e) {
                    var t = e.replace(ye, be);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, C.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && L) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (C.filter.ID = function(e) {
                    var t = e.replace(ye, be);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, C.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && L) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if (n = o.getAttributeNode("id"), n && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                if (n = o.getAttributeNode("id"), n && n.value === e) return [o]
                        }
                        return []
                    }
                }), C.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, C.find.CLASS = w.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && L) return t.getElementsByClassName(e)
                }, M = [], R = [], (w.qsa = ve.test(I.querySelectorAll)) && (i(function(e) {
                    N.appendChild(e).innerHTML = "<a id='" + V + "'></a><select id='" + V + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || R.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + V + "-]").length || R.push("~="), e.querySelectorAll(":checked").length || R.push(":checked"), e.querySelectorAll("a#" + V + "+*").length || R.push(".#.+[+~]")
                }), i(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = I.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && R.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && R.push(":enabled", ":disabled"), N.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && R.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), R.push(",.*:")
                })), (w.matchesSelector = ve.test(B = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && i(function(e) {
                    w.disconnectedMatch = B.call(e, "*"), B.call(e, "[s!='']:x"), M.push("!=", oe)
                }), R = R.length && new RegExp(R.join("|")), M = M.length && new RegExp(M.join("|")), t = ve.test(N.compareDocumentPosition), q = t || ve.test(N.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, K = t ? function(e, t) {
                    if (e === t) return j = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === F && q(F, e) ? -1 : t === I || t.ownerDocument === F && q(F, t) ? 1 : S ? ee(S, e) - ee(S, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return j = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        u = [t];
                    if (!i || !o) return e === I ? -1 : t === I ? 1 : i ? -1 : o ? 1 : S ? ee(S, e) - ee(S, t) : 0;
                    if (i === o) return a(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) u.unshift(n);
                    for (; s[r] === u[r];) r++;
                    return r ? a(s[r], u[r]) : s[r] === F ? -1 : u[r] === F ? 1 : 0
                }, I) : I
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== I && P(e), n = n.replace(le, "='$1']"), w.matchesSelector && L && !G[n + " "] && (!M || !M.test(n)) && (!R || !R.test(n))) try {
                    var r = B.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {}
                return t(n, I, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== I && P(e), q(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== I && P(e);
                var n = C.attrHandle[t.toLowerCase()],
                    r = n && $.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
                return void 0 !== r ? r : w.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, t.escape = function(e) {
                return (e + "").replace(xe, we)
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (j = !w.detectDuplicates, S = !w.sortStable && e.slice(0), e.sort(K), j) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return S = null, e
            }, T = t.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r++];) n += T(t);
                return n
            }, C = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ye, be), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = A(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ye, be).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = H[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && H(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, r) {
                        return function(i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, u) {
                            var c, l, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                _ = s && t.nodeName.toLowerCase(),
                                m = !u && !s,
                                y = !1;
                            if (v) {
                                if (o) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (s ? f.nodeName.toLowerCase() === _ : 1 === f.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? v.firstChild : v.lastChild], a && m) {
                                    for (f = v, p = f[V] || (f[V] = {}), l = p[f.uniqueID] || (p[f.uniqueID] = {}), c = l[e] || [], d = c[0] === U && c[1], y = d && c[2], f = d && v.childNodes[d]; f = ++d && f && f[g] || (y = d = 0) || h.pop();)
                                        if (1 === f.nodeType && ++y && f === t) {
                                            l[e] = [U, d, y];
                                            break
                                        }
                                } else if (m && (f = t, p = f[V] || (f[V] = {}), l = p[f.uniqueID] || (p[f.uniqueID] = {}), c = l[e] || [], d = c[0] === U && c[1], y = d), y === !1)
                                    for (;
                                        (f = ++d && f && f[g] || (y = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== _ : 1 !== f.nodeType) || !++y || (m && (p = f[V] || (f[V] = {}), l = p[f.uniqueID] || (p[f.uniqueID] = {}), l[e] = [U, y]), f !== t)););
                                return y -= i, y === r || y % r === 0 && y / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[V] ? o(n) : o.length > 1 ? (i = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                            for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                        }) : function(e) {
                            return o(e, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = [],
                            n = [],
                            i = O(e.replace(se, "$1"));
                        return i[V] ? r(function(e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return e = e.replace(ye, be),
                            function(t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: r(function(e) {
                        return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, be).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === N
                    },
                    focus: function(e) {
                        return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: c(!1),
                    disabled: c(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) C.pseudos[x] = s(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) C.pseudos[x] = u(x);
            return f.prototype = C.filters = C.pseudos, C.setFilters = new f, A = t.tokenize = function(e, n) {
                var r, i, o, a, s, u, c, l = W[e + " "];
                if (l) return n ? 0 : l.slice(0);
                for (s = e, u = [], c = C.preFilter; s;) {
                    r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(se, " ")
                    }), s = s.slice(r.length));
                    for (a in C.filter) !(i = de[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                    if (!r) break
                }
                return n ? s.length : s ? t.error(e) : W(e, u).slice(0)
            }, O = t.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = G[e + " "];
                if (!o) {
                    for (t || (t = A(e)), n = t.length; n--;) o = y(t[n]), o[V] ? r.push(o) : i.push(o);
                    o = G(e, b(i, r)), o.selector = e
                }
                return o
            }, D = t.select = function(e, t, n, r) {
                var i, o, a, s, u, c = "function" == typeof e && e,
                    l = !r && A(e = c.selector || e);
                if (n = n || [], 1 === l.length) {
                    if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && L && C.relative[o[1].type]) {
                        if (t = (C.find.ID(a.matches[0].replace(ye, be), t) || [])[0], !t) return n;
                        c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !C.relative[s = a.type]);)
                        if ((u = C.find[s]) && (r = u(a.matches[0].replace(ye, be), me.test(o[0].type) && p(t.parentNode) || t))) {
                            if (o.splice(i, 1), e = r.length && d(o), !e) return X.apply(n, r), n;
                            break
                        }
                }
                return (c || O(e, l))(r, t, !L, n, !t || me.test(e) && p(t.parentNode) || t), n
            }, w.sortStable = V.split("").sort(K).join("") === V, w.detectDuplicates = !!j, P(), w.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(I.createElement("fieldset"))
            }), i(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), w.attributes && i(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), i(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function(e, t, n) {
                var r;
                if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), t
        }(n);
        me.find = Ce, me.expr = Ce.selectors, me.expr[":"] = me.expr.pseudos, me.uniqueSort = me.unique = Ce.uniqueSort, me.text = Ce.getText, me.isXMLDoc = Ce.isXML, me.contains = Ce.contains, me.escapeSelector = Ce.escape;
        var Te = function(e, t, n) {
                for (var r = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && me(e).is(n)) break;
                        r.push(e)
                    }
                return r
            },
            Ee = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            Ae = me.expr.match.needsContext,
            Oe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            De = /^.[^:#\[\.,]*$/;
        me.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? me.find.matchesSelector(r, e) ? [r] : [] : me.find.matches(e, me.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, me.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if ("string" != typeof e) return this.pushStack(me(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (me.contains(i[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) me.find(e, i[t], n);
                return r > 1 ? me.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(u(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(u(this, e || [], !0))
            },
            is: function(e) {
                return !!u(this, "string" == typeof e && Ae.test(e) ? me(e) : e || [], !1).length
            }
        });
        var ke, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            je = me.fn.init = function(e, t, n) {
                var r, i;
                if (!e) return this;
                if (n = n || ke, "string" == typeof e) {
                    if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Se.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof me ? t[0] : t, me.merge(this, me.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : oe, !0)), Oe.test(r[1]) && me.isPlainObject(t))
                            for (r in t) me.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return i = oe.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : me.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(me) : me.makeArray(e, this)
            };
        je.prototype = me.fn, ke = me(oe);
        var Pe = /^(?:parents|prev(?:Until|All))/,
            Ie = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        me.fn.extend({
            has: function(e) {
                var t = me(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (me.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    o = [],
                    a = "string" != typeof e && me(e);
                if (!Ae.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && me.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                return this.pushStack(o.length > 1 ? me.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? le.call(me(e), this[0]) : le.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(me.uniqueSort(me.merge(this.get(), me(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), me.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return Te(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Te(e, "parentNode", n)
            },
            next: function(e) {
                return c(e, "nextSibling")
            },
            prev: function(e) {
                return c(e, "previousSibling")
            },
            nextAll: function(e) {
                return Te(e, "nextSibling")
            },
            prevAll: function(e) {
                return Te(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Te(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Te(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Ee((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Ee(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || me.merge([], e.childNodes)
            }
        }, function(e, t) {
            me.fn[e] = function(n, r) {
                var i = me.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = me.filter(r, i)), this.length > 1 && (Ie[e] || me.uniqueSort(i), Pe.test(e) && i.reverse()), this.pushStack(i)
            }
        });
        var Ne = /[^\x20\t\r\n\f]+/g;
        me.Callbacks = function(e) {
            e = "string" == typeof e ? l(e) : me.extend({}, e);
            var t, n, r, i, o = [],
                a = [],
                s = -1,
                u = function() {
                    for (i = e.once, r = t = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < o.length;) o[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = o.length, n = !1);
                    e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                },
                c = {
                    add: function() {
                        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                            me.each(n, function(n, r) {
                                me.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== me.type(r) && t(r)
                            })
                        }(arguments), n && !t && u()), this
                    },
                    remove: function() {
                        return me.each(arguments, function(e, t) {
                            for (var n;
                                (n = me.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function(e) {
                        return e ? me.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return i = a = [], o = n = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return i = a = [], n || t || (o = n = ""), this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, n) {
                        return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return c
        }, me.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", me.Callbacks("memory"), me.Callbacks("memory"), 2],
                        ["resolve", "done", me.Callbacks("once memory"), me.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", me.Callbacks("once memory"), me.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    i = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return i.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return me.Deferred(function(n) {
                                me.each(t, function(t, r) {
                                    var i = me.isFunction(e[r[4]]) && e[r[4]];
                                    o[r[1]](function() {
                                        var e = i && i.apply(this, arguments);
                                        e && me.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(e, r, i) {
                            function o(e, t, r, i) {
                                return function() {
                                    var s = this,
                                        u = arguments,
                                        c = function() {
                                            var n, c;
                                            if (!(e < a)) {
                                                if (n = r.apply(s, u), n === t.promise()) throw new TypeError("Thenable self-resolution");
                                                c = n && ("object" == typeof n || "function" == typeof n) && n.then, me.isFunction(c) ? i ? c.call(n, o(a, t, p, i), o(a, t, f, i)) : (a++, c.call(n, o(a, t, p, i), o(a, t, f, i), o(a, t, p, t.notifyWith))) : (r !== p && (s = void 0, u = [n]), (i || t.resolveWith)(s, u))
                                            }
                                        },
                                        l = i ? c : function() {
                                            try {
                                                c()
                                            } catch (n) {
                                                me.Deferred.exceptionHook && me.Deferred.exceptionHook(n, l.stackTrace), e + 1 >= a && (r !== f && (s = void 0, u = [n]), t.rejectWith(s, u))
                                            }
                                        };
                                    e ? l() : (me.Deferred.getStackHook && (l.stackTrace = me.Deferred.getStackHook()), n.setTimeout(l))
                                }
                            }
                            var a = 0;
                            return me.Deferred(function(n) {
                                t[0][3].add(o(0, n, me.isFunction(i) ? i : p, n.notifyWith)), t[1][3].add(o(0, n, me.isFunction(e) ? e : p)), t[2][3].add(o(0, n, me.isFunction(r) ? r : f))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? me.extend(e, i) : i
                        }
                    },
                    o = {};
                return me.each(t, function(e, n) {
                    var a = n[2],
                        s = n[5];
                    i[n[1]] = a.add, s && a.add(function() {
                        r = s
                    }, t[3 - e][2].disable, t[0][2].lock), a.add(n[3].fire), o[n[0]] = function() {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[n[0] + "With"] = a.fireWith
                }), i.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    i = se.call(arguments),
                    o = me.Deferred(),
                    a = function(e) {
                        return function(n) {
                            r[e] = this, i[e] = arguments.length > 1 ? se.call(arguments) : n,
                                --t || o.resolveWith(r, i)
                        }
                    };
                if (t <= 1 && (d(e, o.done(a(n)).resolve, o.reject), "pending" === o.state() || me.isFunction(i[n] && i[n].then))) return o.then();
                for (; n--;) d(i[n], a(n), o.reject);
                return o.promise()
            }
        });
        var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        me.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && Le.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, me.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        };
        var Re = me.Deferred();
        me.fn.ready = function(e) {
            return Re.then(e).catch(function(e) {
                me.readyException(e)
            }), this
        }, me.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? me.readyWait++ : me.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --me.readyWait : me.isReady) || (me.isReady = !0, e !== !0 && --me.readyWait > 0 || Re.resolveWith(oe, [me]))
            }
        }), me.ready.then = Re.then, "complete" === oe.readyState || "loading" !== oe.readyState && !oe.documentElement.doScroll ? n.setTimeout(me.ready) : (oe.addEventListener("DOMContentLoaded", h), n.addEventListener("load", h));
        var Me = function(e, t, n, r, i, o, a) {
                var s = 0,
                    u = e.length,
                    c = null == n;
                if ("object" === me.type(n)) {
                    i = !0;
                    for (s in n) Me(e, t, s, n[s], !0, o, a)
                } else if (void 0 !== r && (i = !0, me.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(me(e), n)
                    })), t))
                    for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
            },
            Be = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        g.uid = 1, g.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, Be(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[me.camelCase(t)] = n;
                else
                    for (r in t) i[me.camelCase(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][me.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        me.isArray(t) ? t = t.map(me.camelCase) : (t = me.camelCase(t), t = t in r ? [t] : t.match(Ne) || []), n = t.length;
                        for (; n--;) delete r[t[n]]
                    }(void 0 === t || me.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !me.isEmptyObject(t)
            }
        };
        var qe = new g,
            Ve = new g,
            Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ue = /[A-Z]/g;
        me.extend({
            hasData: function(e) {
                return Ve.hasData(e) || qe.hasData(e)
            },
            data: function(e, t, n) {
                return Ve.access(e, t, n)
            },
            removeData: function(e, t) {
                Ve.remove(e, t)
            },
            _data: function(e, t, n) {
                return qe.access(e, t, n)
            },
            _removeData: function(e, t) {
                qe.remove(e, t)
            }
        }), me.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = Ve.get(o), 1 === o.nodeType && !qe.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = me.camelCase(r.slice(5)), _(o, r, i[r])));
                        qe.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    Ve.set(this, e)
                }) : Me(this, function(t) {
                    var n;
                    if (o && void 0 === t) {
                        if (n = Ve.get(o, e), void 0 !== n) return n;
                        if (n = _(o, e), void 0 !== n) return n
                    } else this.each(function() {
                        Ve.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Ve.remove(this, e)
                })
            }
        }), me.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = qe.get(e, t), n && (!r || me.isArray(n) ? r = qe.access(e, t, me.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = me.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = me._queueHooks(e, t),
                    a = function() {
                        me.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return qe.get(e, n) || qe.access(e, n, {
                    empty: me.Callbacks("once memory").add(function() {
                        qe.remove(e, [t + "queue", n])
                    })
                })
            }
        }), me.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? me.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = me.queue(this, e, t);
                    me._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && me.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    me.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = me.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = qe.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            He = new RegExp("^(?:([+-])=|)(" + ze + ")([a-z%]*)$", "i"),
            We = ["Top", "Right", "Bottom", "Left"],
            Ge = function(e, t) {
                return e = t || e, "none" === e.style.display || "" === e.style.display && me.contains(e.ownerDocument, e) && "none" === me.css(e, "display")
            },
            Ke = function(e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = a[o];
                return i
            },
            $e = {};
        me.fn.extend({
            show: function() {
                return b(this, !0)
            },
            hide: function() {
                return b(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Ge(this) ? me(this).show() : me(this).hide()
                })
            }
        });
        var Qe = /^(?:checkbox|radio)$/i,
            Ye = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Je = /^$|\/(?:java|ecma)script/i,
            Xe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
        var Ze = /<|&#?\w+;/;
        ! function() {
            var e = oe.createDocumentFragment(),
                t = e.appendChild(oe.createElement("div")),
                n = oe.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ve.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ve.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var et = oe.documentElement,
            tt = /^key/,
            nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            rt = /^([^.]*)(?:\.(.+)|)/;
        me.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var o, a, s, u, c, l, p, f, d, h, g, v = qe.get(e);
                if (v)
                    for (n.handler && (o = n, n = o.handler, i = o.selector), i && me.find.matchesSelector(et, i), n.guid || (n.guid = me.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                            return "undefined" != typeof me && me.event.triggered !== t.type ? me.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(Ne) || [""], c = t.length; c--;) s = rt.exec(t[c]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d && (p = me.event.special[d] || {}, d = (i ? p.delegateType : p.bindType) || d, p = me.event.special[d] || {}, l = me.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && me.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (f = u[d]) || (f = u[d] = [], f.delegateCount = 0, p.setup && p.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(d, a)), p.add && (p.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, l) : f.push(l), me.event.global[d] = !0)
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, c, l, p, f, d, h, g, v = qe.hasData(e) && qe.get(e);
                if (v && (u = v.events)) {
                    for (t = (t || "").match(Ne) || [""], c = t.length; c--;)
                        if (s = rt.exec(t[c]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                            for (p = me.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) l = f[o], !i && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (f.splice(o, 1), l.selector && f.delegateCount--, p.remove && p.remove.call(e, l));
                            a && !f.length && (p.teardown && p.teardown.call(e, h, v.handle) !== !1 || me.removeEvent(e, d, v.handle), delete u[d])
                        } else
                            for (d in u) me.event.remove(e, d + t[c], n, r, !0);
                    me.isEmptyObject(u) && qe.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, o, a, s = me.event.fix(e),
                    u = new Array(arguments.length),
                    c = (qe.get(this, "events") || {})[s.type] || [],
                    l = me.event.special[s.type] || {};
                for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                if (s.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, s) !== !1) {
                    for (a = me.event.handlers.call(this, s, c), t = 0;
                        (i = a[t++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = i.elem, n = 0;
                            (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, r = ((me.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u), void 0 !== r && (s.result = r) === !1 && (s.preventDefault(), s.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, a, s = [],
                    u = t.delegateCount,
                    c = e.target;
                if (u && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || c.disabled !== !0)) {
                            for (o = [], a = {}, n = 0; n < u; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? me(i, this).index(c) > -1 : me.find(i, this, null, [c]).length), a[i] && o.push(r);
                            o.length && s.push({
                                elem: c,
                                handlers: o
                            })
                        }
                return c = this, u < t.length && s.push({
                    elem: c,
                    handlers: t.slice(u)
                }), s
            },
            addProp: function(e, t) {
                Object.defineProperty(me.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: me.isFunction(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[me.expando] ? e : new me.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== A() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === A() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && me.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return me.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, me.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, me.Event = function(e, t) {
            return this instanceof me.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? T : E, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && me.extend(this, t), this.timeStamp = e && e.timeStamp || me.now(), void(this[me.expando] = !0)) : new me.Event(e, t)
        }, me.Event.prototype = {
            constructor: me.Event,
            isDefaultPrevented: E,
            isPropagationStopped: E,
            isImmediatePropagationStopped: E,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = T, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = T, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = T, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, me.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && tt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && nt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, me.event.addProp), me.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            me.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return i && (i === r || me.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), me.fn.extend({
            on: function(e, t, n, r) {
                return O(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return O(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, me(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = E), this.each(function() {
                    me.event.remove(this, e, n, t)
                })
            }
        });
        var it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            ot = /<script|<style|<link/i,
            at = /checked\s*(?:[^=]|=\s*.checked.)/i,
            st = /^true\/(.*)/,
            ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        me.extend({
            htmlPrefilter: function(e) {
                return e.replace(it, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, o, a, s = e.cloneNode(!0),
                    u = me.contains(e.ownerDocument, e);
                if (!(ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || me.isXMLDoc(e)))
                    for (a = x(s), o = x(e), r = 0, i = o.length; r < i; r++) P(o[r], a[r]);
                if (t)
                    if (n)
                        for (o = o || x(e), a = a || x(s), r = 0, i = o.length; r < i; r++) j(o[r], a[r]);
                    else j(e, s);
                return a = x(s, "script"), a.length > 0 && w(a, !u && x(e, "script")), s
            },
            cleanData: function(e) {
                for (var t, n, r, i = me.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (Be(n)) {
                        if (t = n[qe.expando]) {
                            if (t.events)
                                for (r in t.events) i[r] ? me.event.remove(n, r) : me.removeEvent(n, r, t.handle);
                            n[qe.expando] = void 0
                        }
                        n[Ve.expando] && (n[Ve.expando] = void 0)
                    }
            }
        }), me.fn.extend({
            detach: function(e) {
                return N(this, e, !0)
            },
            remove: function(e) {
                return N(this, e)
            },
            text: function(e) {
                return Me(this, function(e) {
                    return void 0 === e ? me.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return I(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = D(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return I(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = D(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return I(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return I(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (me.cleanData(x(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return me.clone(this, e, t)
                })
            },
            html: function(e) {
                return Me(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !ot.test(e) && !Xe[(Ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = me.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (me.cleanData(x(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return I(this, arguments, function(t) {
                    var n = this.parentNode;
                    me.inArray(this, e) < 0 && (me.cleanData(x(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), me.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            me.fn[e] = function(e) {
                for (var n, r = [], i = me(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), me(i[a])[t](n), ce.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var ct = /^margin/,
            lt = new RegExp("^(" + ze + ")(?!px)[a-z%]+$", "i"),
            pt = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            };
        ! function() {
            function e() {
                if (s) {
                    s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", et.appendChild(a);
                    var e = n.getComputedStyle(s);
                    t = "1%" !== e.top, o = "2px" === e.marginLeft, r = "4px" === e.width, s.style.marginRight = "50%", i = "4px" === e.marginRight, et.removeChild(a), s = null
                }
            }
            var t, r, i, o, a = oe.createElement("div"),
                s = oe.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ve.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), me.extend(ve, {
                pixelPosition: function() {
                    return e(), t
                },
                boxSizingReliable: function() {
                    return e(), r
                },
                pixelMarginRight: function() {
                    return e(), i
                },
                reliableMarginLeft: function() {
                    return e(), o
                }
            }))
        }();
        var ft = /^(none|table(?!-c[ea]).+)/,
            dt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ht = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            gt = ["Webkit", "Moz", "ms"],
            vt = oe.createElement("div").style;
        me.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = L(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = me.camelCase(t),
                        u = e.style;
                    return t = me.cssProps[s] || (me.cssProps[s] = M(s) || s), a = me.cssHooks[t] || me.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = He.exec(n)) && i[1] && (n = m(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (me.cssNumber[s] ? "" : "px")), ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)), void 0)
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, s = me.camelCase(t);
                return t = me.cssProps[s] || (me.cssProps[s] = M(s) || s), a = me.cssHooks[t] || me.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = L(e, t, r)), "normal" === i && t in ht && (i = ht[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
            }
        }), me.each(["height", "width"], function(e, t) {
            me.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return !ft.test(me.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? V(e, t, r) : Ke(e, dt, function() {
                        return V(e, t, r)
                    })
                },
                set: function(e, n, r) {
                    var i, o = r && pt(e),
                        a = r && q(e, t, r, "border-box" === me.css(e, "boxSizing", !1, o), o);
                    return a && (i = He.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = me.css(e, t)), B(e, n, a)
                }
            }
        }), me.cssHooks.marginLeft = R(ve.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - Ke(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), me.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            me.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + We[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, ct.test(e) || (me.cssHooks[e + t].set = B)
        }), me.fn.extend({
            css: function(e, t) {
                return Me(this, function(e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (me.isArray(t)) {
                        for (r = pt(e), i = t.length; a < i; a++) o[t[a]] = me.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? me.style(e, t, n) : me.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), me.Tween = F, F.prototype = {
            constructor: F,
            init: function(e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || me.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (me.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = F.propHooks[this.prop];
                return e && e.get ? e.get(this) : F.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = F.propHooks[this.prop];
                return this.options.duration ? this.pos = t = me.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
            }
        }, F.prototype.init.prototype = F.prototype, F.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = me.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    me.fx.step[e.prop] ? me.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[me.cssProps[e.prop]] && !me.cssHooks[e.prop] ? e.elem[e.prop] = e.now : me.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, me.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, me.fx = F.prototype.init, me.fx.step = {};
        var _t, mt, yt = /^(?:toggle|show|hide)$/,
            bt = /queueHooks$/;
        me.Animation = me.extend($, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return m(n.elem, e, He.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    me.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(t)
                },
                prefilters: [G],
                prefilter: function(e, t) {
                    t ? $.prefilters.unshift(e) : $.prefilters.push(e)
                }
            }), me.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? me.extend({}, e) : {
                    complete: n || !n && t || me.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !me.isFunction(t) && t
                };
                return me.fx.off || oe.hidden ? r.duration = 0 : "number" != typeof r.duration && (r.duration in me.fx.speeds ? r.duration = me.fx.speeds[r.duration] : r.duration = me.fx.speeds._default), null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    me.isFunction(r.old) && r.old.call(this), r.queue && me.dequeue(this, r.queue)
                }, r
            }, me.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(Ge).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = me.isEmptyObject(e),
                        o = me.speed(t, n, r),
                        a = function() {
                            var t = $(this, me.extend({}, e), o);
                            (i || qe.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = me.timers,
                            a = qe.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a) a[i] && a[i].stop && bt.test(i) && r(a[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                        !t && n || me.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = qe.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = me.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, me.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), me.each(["toggle", "show", "hide"], function(e, t) {
                var n = me.fn[t];
                me.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, r, i)
                }
            }), me.each({
                slideDown: H("show"),
                slideUp: H("hide"),
                slideToggle: H("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                me.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), me.timers = [], me.fx.tick = function() {
                var e, t = 0,
                    n = me.timers;
                for (_t = me.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || me.fx.stop(), _t = void 0
            }, me.fx.timer = function(e) {
                me.timers.push(e), e() ? me.fx.start() : me.timers.pop()
            }, me.fx.interval = 13, me.fx.start = function() {
                mt || (mt = n.requestAnimationFrame ? n.requestAnimationFrame(U) : n.setInterval(me.fx.tick, me.fx.interval))
            }, me.fx.stop = function() {
                n.cancelAnimationFrame ? n.cancelAnimationFrame(mt) : n.clearInterval(mt), mt = null
            }, me.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, me.fn.delay = function(e, t) {
                return e = me.fx ? me.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, r) {
                    var i = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(i)
                    }
                })
            },
            function() {
                var e = oe.createElement("input"),
                    t = oe.createElement("select"),
                    n = t.appendChild(oe.createElement("option"));
                e.type = "checkbox", ve.checkOn = "" !== e.value, ve.optSelected = n.selected, e = oe.createElement("input"), e.value = "t", e.type = "radio", ve.radioValue = "t" === e.value
            }();
        var xt, wt = me.expr.attrHandle;
        me.fn.extend({
            attr: function(e, t) {
                return Me(this, me.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    me.removeAttr(this, e)
                })
            }
        }), me.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? me.prop(e, t, n) : (1 === o && me.isXMLDoc(e) || (i = me.attrHooks[t.toLowerCase()] || (me.expr.match.bool.test(t) ? xt : void 0)), void 0 !== n ? null === n ? void me.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = me.find.attr(e, t), null == r ? void 0 : r))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ve.radioValue && "radio" === t && me.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    i = t && t.match(Ne);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++];) e.removeAttribute(n)
            }
        }), xt = {
            set: function(e, t, n) {
                return t === !1 ? me.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, me.each(me.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = wt[t] || me.find.attr;
            wt[t] = function(e, t, r) {
                var i, o, a = t.toLowerCase();
                return r || (o = wt[a], wt[a] = i, i = null != n(e, t, r) ? a : null, wt[a] = o), i
            }
        });
        var Ct = /^(?:input|select|textarea|button)$/i,
            Tt = /^(?:a|area)$/i;
        me.fn.extend({
            prop: function(e, t) {
                return Me(this, me.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[me.propFix[e] || e]
                })
            }
        }), me.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && me.isXMLDoc(e) || (t = me.propFix[t] || t, i = me.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = me.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Ct.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), ve.optSelected || (me.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), me.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            me.propFix[this.toLowerCase()] = this
        }), me.fn.extend({
            addClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (me.isFunction(e)) return this.each(function(t) {
                    me(this).addClass(e.call(this, t, Y(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(Ne) || []; n = this[u++];)
                        if (i = Y(n), r = 1 === n.nodeType && " " + Q(i) + " ") {
                            for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            s = Q(r), i !== s && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (me.isFunction(e)) return this.each(function(t) {
                    me(this).removeClass(e.call(this, t, Y(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(Ne) || []; n = this[u++];)
                        if (i = Y(n), r = 1 === n.nodeType && " " + Q(i) + " ") {
                            for (a = 0; o = t[a++];)
                                for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                            s = Q(r), i !== s && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : me.isFunction(e) ? this.each(function(n) {
                    me(this).toggleClass(e.call(this, n, Y(this), t), t)
                }) : this.each(function() {
                    var t, r, i, o;
                    if ("string" === n)
                        for (r = 0, i = me(this), o = e.match(Ne) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = Y(this), t && qe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : qe.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + Q(Y(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var Et = /\r/g;
        me.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0]; {
                    if (arguments.length) return r = me.isFunction(e), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, me(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : me.isArray(i) && (i = me.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })), t = me.valHooks[this.type] || me.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                    if (i) return t = me.valHooks[i.type] || me.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Et, "") : null == n ? "" : n)
                }
            }
        }), me.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = me.find.attr(e, "value");
                        return null != t ? t : Q(me.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (n = i[r], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !me.nodeName(n.parentNode, "optgroup"))) {
                                if (t = me(n).val(), a) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = me.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = me.inArray(me.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), me.each(["radio", "checkbox"], function() {
            me.valHooks[this] = {
                set: function(e, t) {
                    if (me.isArray(t)) return e.checked = me.inArray(me(e).val(), t) > -1
                }
            }, ve.checkOn || (me.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var At = /^(?:focusinfocus|focusoutblur)$/;
        me.extend(me.event, {
            trigger: function(e, t, r, i) {
                var o, a, s, u, c, l, p, f = [r || oe],
                    d = de.call(e, "type") ? e.type : e,
                    h = de.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = s = r = r || oe, 3 !== r.nodeType && 8 !== r.nodeType && !At.test(d + me.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), c = d.indexOf(":") < 0 && "on" + d, e = e[me.expando] ? e : new me.Event(d, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : me.makeArray(t, [e]), p = me.event.special[d] || {}, i || !p.trigger || p.trigger.apply(r, t) !== !1)) {
                    if (!i && !p.noBubble && !me.isWindow(r)) {
                        for (u = p.delegateType || d, At.test(u + d) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                        s === (r.ownerDocument || oe) && f.push(s.defaultView || s.parentWindow || n)
                    }
                    for (o = 0;
                        (a = f[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? u : p.bindType || d, l = (qe.get(a, "events") || {})[e.type] && qe.get(a, "handle"), l && l.apply(a, t), l = c && a[c], l && l.apply && Be(a) && (e.result = l.apply(a, t), e.result === !1 && e.preventDefault());
                    return e.type = d, i || e.isDefaultPrevented() || p._default && p._default.apply(f.pop(), t) !== !1 || !Be(r) || c && me.isFunction(r[d]) && !me.isWindow(r) && (s = r[c], s && (r[c] = null), me.event.triggered = d, r[d](), me.event.triggered = void 0, s && (r[c] = s)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = me.extend(new me.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                me.event.trigger(r, null, t)
            }
        }), me.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    me.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return me.event.trigger(e, t, n, !0)
            }
        }), me.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            me.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), me.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), ve.focusin = "onfocusin" in n, ve.focusin || me.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                me.event.simulate(t, e.target, me.event.fix(e))
            };
            me.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                        i = qe.access(r, t);
                    i || r.addEventListener(e, n, !0), qe.access(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                        i = qe.access(r, t) - 1;
                    i ? qe.access(r, t, i) : (r.removeEventListener(e, n, !0), qe.remove(r, t))
                }
            }
        });
        var Ot = n.location,
            Dt = me.now(),
            kt = /\?/;
        me.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || me.error("Invalid XML: " + e), t
        };
        var St = /\[\]$/,
            jt = /\r?\n/g,
            Pt = /^(?:submit|button|image|reset|file)$/i,
            It = /^(?:input|select|textarea|keygen)/i;
        me.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = me.isFunction(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (me.isArray(e) || e.jquery && !me.isPlainObject(e)) me.each(e, function() {
                i(this.name, this.value)
            });
            else
                for (n in e) J(n, e[n], t, i);
            return r.join("&")
        }, me.fn.extend({
            serialize: function() {
                return me.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = me.prop(this, "elements");
                    return e ? me.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !me(this).is(":disabled") && It.test(this.nodeName) && !Pt.test(e) && (this.checked || !Qe.test(e));
                }).map(function(e, t) {
                    var n = me(this).val();
                    return null == n ? null : me.isArray(n) ? me.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(jt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(jt, "\r\n")
                    }
                }).get()
            }
        });
        var Nt = /%20/g,
            Lt = /#.*$/,
            Rt = /([?&])_=[^&]*/,
            Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            qt = /^(?:GET|HEAD)$/,
            Vt = /^\/\//,
            Ft = {},
            Ut = {},
            zt = "*/".concat("*"),
            Ht = oe.createElement("a");
        Ht.href = Ot.href, me.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ot.href,
                type: "GET",
                isLocal: Bt.test(Ot.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": zt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": me.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? ee(ee(e, me.ajaxSettings), t) : ee(me.ajaxSettings, e)
            },
            ajaxPrefilter: X(Ft),
            ajaxTransport: X(Ut),
            ajax: function(e, t) {
                function r(e, t, r, s) {
                    var c, f, d, b, x, w = t;
                    l || (l = !0, u && n.clearTimeout(u), i = void 0, a = s || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, r && (b = te(h, C, r)), b = ne(h, b, C, c), c ? (h.ifModified && (x = C.getResponseHeader("Last-Modified"), x && (me.lastModified[o] = x), x = C.getResponseHeader("etag"), x && (me.etag[o] = x)), 204 === e || "HEAD" === h.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = b.state, f = b.data, d = b.error, c = !d)) : (d = w, !e && w || (w = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || w) + "", c ? _.resolveWith(g, [f, w, C]) : _.rejectWith(g, [C, w, d]), C.statusCode(y), y = void 0, p && v.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? f : d]), m.fireWith(g, [C, w]), p && (v.trigger("ajaxComplete", [C, h]), --me.active || me.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, o, a, s, u, c, l, p, f, d, h = me.ajaxSetup({}, t),
                    g = h.context || h,
                    v = h.context && (g.nodeType || g.jquery) ? me(g) : me.event,
                    _ = me.Deferred(),
                    m = me.Callbacks("once memory"),
                    y = h.statusCode || {},
                    b = {},
                    x = {},
                    w = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (l) {
                                if (!s)
                                    for (s = {}; t = Mt.exec(a);) s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return l ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == l && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, b[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == l && (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (l) C.always(e[C.status]);
                                else
                                    for (t in e) y[t] = [y[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return i && i.abort(t), r(0, t), this
                        }
                    };
                if (_.promise(C), h.url = ((e || h.url || Ot.href) + "").replace(Vt, Ot.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ne) || [""], null == h.crossDomain) {
                    c = oe.createElement("a");
                    try {
                        c.href = h.url, c.href = c.href, h.crossDomain = Ht.protocol + "//" + Ht.host != c.protocol + "//" + c.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = me.param(h.data, h.traditional)), Z(Ft, h, t, C), l) return C;
                p = me.event && h.global, p && 0 === me.active++ && me.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !qt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Nt, "+")) : (d = h.url.slice(o.length), h.data && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(Rt, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Dt++ + d), h.url = o + d), h.ifModified && (me.lastModified[o] && C.setRequestHeader("If-Modified-Since", me.lastModified[o]), me.etag[o] && C.setRequestHeader("If-None-Match", me.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || t.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : h.accepts["*"]);
                for (f in h.headers) C.setRequestHeader(f, h.headers[f]);
                if (h.beforeSend && (h.beforeSend.call(g, C, h) === !1 || l)) return C.abort();
                if (w = "abort", m.add(h.complete), C.done(h.success), C.fail(h.error), i = Z(Ut, h, t, C)) {
                    if (C.readyState = 1, p && v.trigger("ajaxSend", [C, h]), l) return C;
                    h.async && h.timeout > 0 && (u = n.setTimeout(function() {
                        C.abort("timeout")
                    }, h.timeout));
                    try {
                        l = !1, i.send(b, r)
                    } catch (e) {
                        if (l) throw e;
                        r(-1, e)
                    }
                } else r(-1, "No Transport");
                return C
            },
            getJSON: function(e, t, n) {
                return me.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return me.get(e, void 0, t, "script")
            }
        }), me.each(["get", "post"], function(e, t) {
            me[t] = function(e, n, r, i) {
                return me.isFunction(n) && (i = i || r, r = n, n = void 0), me.ajax(me.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, me.isPlainObject(e) && e))
            }
        }), me._evalUrl = function(e) {
            return me.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, me.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (me.isFunction(e) && (e = e.call(this[0])), t = me(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return me.isFunction(e) ? this.each(function(t) {
                    me(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = me(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = me.isFunction(e);
                return this.each(function(n) {
                    me(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    me(this).replaceWith(this.childNodes)
                }), this
            }
        }), me.expr.pseudos.hidden = function(e) {
            return !me.expr.pseudos.visible(e)
        }, me.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, me.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var Wt = {
                0: 200,
                1223: 204
            },
            Gt = me.ajaxSettings.xhr();
        ve.cors = !!Gt && "withCredentials" in Gt, ve.ajax = Gt = !!Gt, me.ajaxTransport(function(e) {
            var t, r;
            if (ve.cors || Gt && !e.crossDomain) return {
                send: function(i, o) {
                    var a, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i) s.setRequestHeader(a, i[a]);
                    t = function(e) {
                        return function() {
                            t && (t = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), r = s.onerror = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && n.setTimeout(function() {
                            t && r()
                        })
                    }, t = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }), me.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), me.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return me.globalEval(e), e
                }
            }
        }), me.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), me.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(r, i) {
                        t = me("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                        }), oe.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Kt = [],
            $t = /(=)\?(?=&|$)|\?\?/;
        me.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Kt.pop() || me.expando + "_" + Dt++;
                return this[e] = !0, e
            }
        }), me.ajaxPrefilter("json jsonp", function(e, t, r) {
            var i, o, a, s = e.jsonp !== !1 && ($t.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = me.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace($t, "$1" + i) : e.jsonp !== !1 && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return a || me.error(i + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
                a = arguments
            }, r.always(function() {
                void 0 === o ? me(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Kt.push(i)), a && me.isFunction(o) && o(a[0]), a = o = void 0
            }), "script"
        }), ve.createHTMLDocument = function() {
            var e = oe.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), me.parseHTML = function(e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && (n = t, t = !1);
            var r, i, o;
            return t || (ve.createHTMLDocument ? (t = oe.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = oe.location.href, t.head.appendChild(r)) : t = oe), i = Oe.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = C([e], t, o), o && o.length && me(o).remove(), me.merge([], i.childNodes))
        }, me.fn.load = function(e, t, n) {
            var r, i, o, a = this,
                s = e.indexOf(" ");
            return s > -1 && (r = Q(e.slice(s)), e = e.slice(0, s)), me.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && me.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(r ? me("<div>").append(me.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, me.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            me.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), me.expr.pseudos.animated = function(e) {
            return me.grep(me.timers, function(t) {
                return e === t.elem
            }).length
        }, me.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, c, l = me.css(e, "position"),
                    p = me(e),
                    f = {};
                "static" === l && (e.style.position = "relative"), s = p.offset(), o = me.css(e, "top"), u = me.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = p.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), me.isFunction(t) && (t = t.call(e, n, me.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : p.css(f)
            }
        }, me.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    me.offset.setOffset(this, e, t)
                });
                var t, n, r, i, o = this[0];
                if (o) return o.getClientRects().length ? (r = o.getBoundingClientRect(), r.width || r.height ? (i = o.ownerDocument, n = re(i), t = i.documentElement, {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft
                }) : r) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === me.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), me.nodeName(e[0], "html") || (r = e.offset()), r = {
                        top: r.top + me.css(e[0], "borderTopWidth", !0),
                        left: r.left + me.css(e[0], "borderLeftWidth", !0)
                    }), {
                        top: t.top - r.top - me.css(n, "marginTop", !0),
                        left: t.left - r.left - me.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === me.css(e, "position");) e = e.offsetParent;
                    return e || et
                })
            }
        }), me.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            me.fn[e] = function(r) {
                return Me(this, function(e, r, i) {
                    var o = re(e);
                    return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
                }, e, r, arguments.length)
            }
        }), me.each(["top", "left"], function(e, t) {
            me.cssHooks[t] = R(ve.pixelPosition, function(e, n) {
                if (n) return n = L(e, t), lt.test(n) ? me(e).position()[t] + "px" : n
            })
        }), me.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            me.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                me.fn[r] = function(i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return Me(this, function(t, n, i) {
                        var o;
                        return me.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? me.css(t, n, s) : me.style(t, n, i, s)
                    }, t, a ? i : void 0, a)
                }
            })
        }), me.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), me.parseJSON = JSON.parse, r = [], i = function() {
            return me
        }.apply(t, r), !(void 0 !== i && (e.exports = i));
        var Qt = n.jQuery,
            Yt = n.$;
        return me.noConflict = function(e) {
            return n.$ === me && (n.$ = Yt), e && n.jQuery === me && (n.jQuery = Qt), me
        }, o || (n.jQuery = n.$ = me), me
    })
}, function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(53),
        o = n(41),
        a = function(e) {
            function t() {
                return e.call(this) || this
            }
            return r(t, e), t.prototype.addClass = function(e) {
                i(this.element).addClass(e)
            }, t.prototype.hide = function() {
                i(this.element).hide()
            }, t.prototype.show = function() {
                i(this.element).show()
            }, t
        }(o.ComponentVDom);
    t.Component = a
}, function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(1),
        o = function(e) {
            function t() {
                var n = e.call(this) || this;
                return n.UPDATED = t.UPDATED, n._subjects = new Array, n
            }
            return r(t, e), t.prototype.add = function(e) {
                this._subjects.push(e)
            }, t.prototype.clearSubjects = function() {
                this._subjects = new Array
            }, t.prototype.setProp = function(e, t) {
                for (var n = 0; n < this._subjects.length; n++) {
                    var r = this._subjects[n];
                    r.isProp(e) && (r.setProp(e, t), r.render(e))
                }
                this.emit(this.UPDATED)
            }, t.prototype.loadProps = function(e) {
                for (var t = 0; t < this._subjects.length; t++) {
                    var n = this._subjects[t],
                        r = n.getProps();
                    for (var i in r) n.setProp(i, e[i]);
                    n.render()
                }
                this.emit(this.UPDATED)
            }, t
        }(i.Base);
    o.UPDATED = "Conductor.UPDATED", t.Conductor = o
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.log = function(e) {
            1 == this._gvpdebug && window.console.log(e, this._gvpdebug)
        }, e.error = function(e) {
            1 == this._gvpdebug && window.console.error(e)
        }, e.info = function(e) {
            1 == this._gvpdebug && window.console.info(e)
        }, e
    }();
    n._gvpdebug = !0, t.console = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t, n, r) {
            if (!(t instanceof Array)) throw "CoreEventListener";
            for (var i = function(e) {
                    n(e)
                }, o = 0; o < t.length; o += 1) e.addEventListener(t[o], i, r)
        }
        return e
    }();
    t.CoreEventListener = n
}, function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(41),
        o = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), t.prototype.loadView = function() {}, t.prototype.viewDidAppear = function() {
                this.initialize()
            }, t.prototype.viewWillAppear = function() {}, t.prototype.viewWillDisappear = function() {}, t.prototype.viewDidDisappear = function() {}, t.prototype.loadData = function() {}, t
        }(i.ComponentVDom);
    t.CoreView = o
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(5),
        i = function() {
            function e(e) {
                this._renderers = [], this._renderers.push(new r.RendererVDom(e))
            }
            return e.prototype.changeView = function(e, t) {
                var n = 0,
                    i = null;
                for (console.log("CORE VIEW CONTROLLER SETTING TARGET" + document.getElementById(t)), t && document.getElementById(t) && (i = document.getElementById(t)), n = 0; n < this._renderers.length && i && this._renderers[n].target !== i; n++);
                if (this._renderers[n] || (this._renderers[n] = new r.RendererVDom(i)), this._currentView) {
                    if (this._currentView.name == e.name) return void e.loadData();
                    this._currentView.viewWillDisappear(), this._currentView.viewDidDisappear()
                }
                e.loadView(), e.viewWillAppear(), e.parent = this._renderers[n], this._currentView = e, this._renderers[n].view = function() {
                    return e.render()
                }, this._renderers[n].invalidate(!0), e.viewDidAppear()
            }, Object.defineProperty(e.prototype, "view", {
                get: function() {
                    return this._currentView
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.CoreViewController = i
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.log = function(t) {
            e.on && "undefined" != typeof e && "undefined" != typeof e.log
        }, e
    }();
    n.on = !0, t.Debug = n
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(45),
        i = n(60),
        o = function() {
            function e() {
                this.EVENT_ACTION = "video", this.oldEvent = null, this.oldData = null
            }
            return e.prototype.sendReport = function(e, t, n) {
                return "undefined" == typeof ddo ? (i.Debug.log("ddo object is not present to report the media events."), !1) : !(this.oldEvent && this.oldData && e === this.oldEvent && r.isEqual(t, this.oldData)) && (n ? ddo.pushEvent(n, e, t) : ddo.pushEvent(this.EVENT_ACTION, e, t), this.oldData = t, this.oldEvent = e, !0)
            }, e.prototype.getVideoControlAction = function(e) {
                var t = "Enter";
                return e && (32 == e ? t = "Spacebar" : 37 == e ? t = "Left Arrow" : 39 == e ? t = "Right Arrow" : 27 == e ? t = "Escape" : 1 == e ? t = "Click" : 0 == e ? t = "Touch" : 13 == e && (t = "Enter")), t
            }, e
        }();
    t.Report = o
}, function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(1),
        o = n(60),
        a = function(e) {
            function t(n) {
                var r = e.call(this) || this;
                return r.UPDATED = t.UPDATED, r.timer = 0, r._props = n, r._callbacks = new Array, r
            }
            return r(t, e), t.prototype.getProps = function() {
                return this._props
            }, t.prototype.setProp = function(e, t) {
                this._props[e] = t
            }, t.prototype.getProp = function(e) {
                return this._props[e]
            }, t.prototype.isProp = function(e) {
                return "undefined" != typeof this._props[e]
            }, t.prototype.render = function(e) {
                var t = this;
                if ("string" == typeof e) this._doCallbacksFor(e);
                else
                    for (var n in this._props) this._doCallbacksFor(n);
                this.timer && clearTimeout(this.timer), this.timer = setTimeout(function() {
                    t.emit(t.UPDATED)
                }, 1)
            }, t.prototype._doCallbacksFor = function(e) {
                if (this.isProp(e) && this._callbacks[e])
                    for (var t = 0; t < this._callbacks[e].length; t++) this._callbacks[e][t](this._props[e])
            }, t.prototype.watch = function(e, t) {
                if (!this.isProp(e)) throw o.Debug.log(">>>>>>>>>>>>> Property (" + e + ") not available: Subject.watch() <<<<<<<<<<<<<"), new TypeError;
                this._callbacks[e] || (this._callbacks[e] = new Array), this._callbacks[e].push(t)
            }, t
        }(i.Base);
    a.UPDATED = "Subject.UPDATED", t.Subject = a
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.prettyTimecode = function(t) {
            return e.secondsToTimecode(e.timecodeToSeconds(t))
        }, e.secondsToSpeech = function(t) {
            var n = e.secondsToTimecode(t).split(":");
            switch (n.length) {
                case 1:
                    n[0] = 1 != parseInt(n[0]) ? parseInt(n[0]) + " Seconds" : parseInt(n[0]) + " Second";
                    break;
                case 2:
                    n[0] = 1 != parseInt(n[0]) ? parseInt(n[0]) + " Minutes" : parseInt(n[0]) + " Minute", n[1] = 1 != parseInt(n[1]) ? parseInt(n[1]) + " Seconds" : parseInt(n[1]) + " Second";
                    break;
                case 3:
                    n[0] = 1 != parseInt(n[0]) ? parseInt(n[0]) + " Hours" : parseInt(n[0]) + " Hour", n[1] = 1 != parseInt(n[1]) ? parseInt(n[1]) + " Minutes" : parseInt(n[1]) + " Minute", n[2] = 1 != parseInt(n[2]) ? parseInt(n[2]) + " Seconds" : parseInt(n[2]) + " Second"
            }
            return n.toString().replace(",", " ")
        }, e.timecodeToSeconds = function(e) {
            for (var t = e.split(":").reverse(), n = 0, r = t.length - 1; r >= 0; r--) n += Number(t[r] * Math.pow(60, r));
            return Math.round(n)
        }, e.secondsToTimecode = function(e, t) {
            if ("undefined" != typeof t && 3 == t.length || (t = ":: "), !e) return "0" + t.substring(0, 1) + "00" + t.substring(1, 2) + "00" + t.substring(2, 3);
            var n = Math.floor(e / 60 / 60).toString(),
                r = Math.floor(e / 60 % 60) <= 9 ? "0" + Math.floor(e / 60 % 60).toString() : Math.floor(e / 60 % 60).toString(),
                i = Math.floor(e % 60 % 60) <= 9 ? "0" + Math.floor(e % 60 % 60).toString() : Math.floor(e % 60 % 60).toString();
            return n > 0 ? (0 === n.indexOf("0") ? n.replace("0", "") : n) + t.substring(0, 1) + r + t.substring(1, 2) + i + t.substring(2, 3) : r > 0 ? (0 === r.indexOf("0") ? r.replace("0", "") : r) + t.substring(1, 2) + i + t.substring(2, 3) : i ? i + t.substring(2, 3) : void 0
        }, e
    }();
    t.Timecode = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.isImage = function(e) {
            return /\.(gif|jpg|jpeg|tiff|png)$/i.test(e)
        }, e.splitStringForDoubleCurlies = function(e) {
            for (var t, n = new Array, r = /\{{(.*?)\}}/g; null != (t = r.exec(e));) n.push(t[1]);
            return n
        }, e.splitStringForSingleCurlies = function(e) {
            for (var t, n = new Array, r = /\{(.*?)\}/g; null != (t = r.exec(e));) n.push(t[1]);
            return n
        }, e.prefixKey = function(e, t) {
            return t ? t + "_" + e : "_" + e
        }, e.timecodeToSeconds = function(e) {
            for (var t = 0, n = e.split(":").reverse(), r = n.length - 1; r >= 0; r--) t += Number(+n[r] * Math.pow(60, r));
            return t
        }, e.getScriptTagWithSrc = function(e) {
            for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; n++) {
                var r = t[n];
                if (r.src == e) return r
            }
            return null
        }, e.extractAssetIds = function(e) {
            var t = e.replace(new RegExp("id:", "g"), "").replace(new RegExp("OR", "g"), ",").replace(new RegExp(" ", "g"), "").replace(new RegExp("\\+", "g"), "");
            return t.split(",")
        }, e.getQueryVariableFromString = function(e, t) {
            var n = e.split("?");
            n = n[n.length - 1].split("&");
            for (var r = 0; r < n.length; r++) {
                var i = n[r].split("=");
                if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
            }
            return null
        }, e.getURLParams = function() {
            if (window && window.location && window.location.href && window.location.origin && window.location.pathname) {
                for (var e = window.location.href.replace(window.location.origin, "").replace(window.location.pathname, ""), t = e.split(/\&|\#|\?/), n = {}, r = 0; r < t.length; r++) {
                    var i = t[r].split("=");
                    i[0].length && (n[i[0].toLowerCase()] = i[1] || !0)
                }
                return n
            }
        }, e.isGvpTagEmpty = function(e) {
            return !(e.children().not("video, script, [gvp-component]").length > 0 || e.clone().children().remove().end().text().replace(/\s/g, "").length > 0)
        }, e.secondsToTimecode = function(e) {
            if (e) {
                var t = Math.floor(e / 3600),
                    n = Math.floor((e - 3600 * t) / 60),
                    r = e - 3600 * t - 60 * n,
                    i = t < 10 ? "0" + t.toString() : t.toString(),
                    o = n < 10 ? "0" + n : n.toString(),
                    a = r < 10 ? "0" + r : r.toString();
                return i + ":" + o + ":" + a
            }
            return "00:00:00"
        }, e.prependProtocol = function(e) {
            var t = "file:" === window.location.protocol ? "http:" : window.location.protocol,
                n = "";
            return 0 === e.indexOf("http:") && (e = e.replace("http:", "")), 0 === e.indexOf("https:") && (e = e.replace("https:", "")), n = t + e
        }, e
    }();
    t.Utils = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e) {
            return e("svg", {
                focusable: "false",
                style: "display:block;pointer-events:none;",
                version: "1.1",
                x: "0px",
                y: "0px",
                viewBox: "0 0 100 100"
            }, e("path", {
                d: "M86.8,35.5h-2.5v-1.9c0-3.5-2.8-6.3-6.3-6.3H36.3c-3.5,0-6.3,2.8-6.3,6.3v8.9l-14.5-9.3 c-2.8-1.8-5.1-0.5-5.1,2.8v28.2c0,3.3,2.3,4.6,5.1,2.8L30,57.7v8.9c0,3.5,2.8,6.3,6.3,6.3H78c3.5,0,6.3-2.8,6.3-6.3V51.9h2.5    c1.7,0,3-1.4,3-3V38.5C89.8,36.8,88.4,35.5,86.8,35.5z M76.3,42.2c0,1.1-0.9,2-2,2H58c-1.1,0-2-0.9-2-2v-4.8c0-1.1,0.9-2,2-2h16.3   c1.1,0,2,0.9,2,2V42.2z"
            }), e("g", null, e("rect", {
                x: "606.2",
                y: "450",
                class: "st1",
                width: "36",
                height: "36"
            }), e("path", {
                d: "M609.9,463.8v3.7c0,0.6,0.5,1.1,1.1,1.1h0.9v5.3c0,1.3,1,2.3,2.3,2.3h15c1.3,0,2.3-1,2.3-2.3v-3.2l5.2,3.3      c1,0.6,1.8,0.2,1.8-1v-10.1c0-1.2-0.8-1.7-1.8-1l-5.2,3.3v-3.2c0-1.3-1-2.3-2.3-2.3h-15c-1.3,0-2.3,1-2.3,2.3v0.7H611       C610.4,462.7,609.9,463.2,609.9,463.8z M614.8,463.5c0-0.4,0.3-0.7,0.7-0.7h5.8c0.4,0,0.7,0.3,0.7,0.7v1.7c0,0.4-0.3,0.7-0.7,0.7    h-5.8c-0.4,0-0.7-0.3-0.7-0.7V463.5z"
            })))
        }, e
    }();
    t.CameraButton = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e) {
            return e("svg", {
                focusable: "false",
                style: "display:block;pointer-events:none;",
                version: "1.1",
                x: "0px",
                y: "0px",
                viewBox: "0 0 60 60"
            }, e("g", null, e("path", {
                d: "M57.8,5.7H2.2c-1.2,0-2.1,0.9-2.1,2.1V47c0,1.2,0.9,2.1,2.1,2.1h13.2c-0.8,0.3-1.4,2.5-1.4,3.4        c0,1.1,0.9,2.1,2.1,2.1h27.8c1.1,0,2.1-0.9,2.1-2.1c0-0.9-0.6-3.1-1.4-3.4h13.2c1.2,0,2.1-0.9,2.1-2.1V7.9      C59.9,6.7,59,5.7,57.8,5.7z M55.3,43.3c0,0.6-0.5,1.1-1.1,1.1H5.8c-0.6,0-1.1-0.5-1.1-1.1V11.6c0-0.6,0.5-1.1,1.1-1.1h48.5      c0.6,0,1.1,0.5,1.1,1.1V43.3z"
            }), e("g", null, e("path", {
                d: "M9.1,27.7c0-6.4,4.4-11,10.9-11c5.6,0,8.1,3.1,8.1,4.8c0,2.1-2.7,2.6-2.8,2.4c-1-1.8-3-2.9-5.2-2.9            c-3.6,0-6.1,2.7-6.1,6.6c0,3.9,2.6,6.7,6.2,6.7c2.4,0,4.4-1.2,5.3-3.2c0.1-0.2,2.9,0.4,2.9,2.4c0,1.8-2.6,5.1-8.4,5.1           C13.6,38.7,9.1,34.2,9.1,27.7z"
            }), e("path", {
                d: "M30.3,27.7c0-6.4,4.4-11,10.9-11c5.6,0,8.1,3.1,8.1,4.8c0,2.1-2.7,2.6-2.8,2.4c-1-1.8-3-2.9-5.2-2.9 c-3.6,0-6.1,2.7-6.1,6.6c0,3.9,2.6,6.7,6.2,6.7c2.4,0,4.4-1.2,5.2-3.2c0.1-0.2,2.9,0.4,2.9,2.4c0,1.8-2.6,5.1-8.4,5.1 C34.7,38.7,30.3,34.2,30.3,27.7z"
            }))))
        }, e
    }();
    t.CaptionButton = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e) {
            return e("svg", {
                focusable: "false",
                style: "display:block;pointer-events:none;",
                version: "1.1",
                x: "0px",
                y: "0px",
                viewBox: "0 0 500 500"
            }, e("path", {
                class: "st0",
                d: "M250.1,0C112.1,0,0.2,111.9,0.2,249.9s111.9,249.9,249.9,249.9S500,387.9,500,249.9S388.1,0,250.1,0z M382.2,342.7c10.8,10.8,10.8,28.4,0,39.3c-5.4,5.4-12.5,8.1-19.6,8.1s-14.2-2.7-19.6-8.1l-92.8-92.8l-92.9,92.9 c-5.4,5.4-12.5,8.1-19.6,8.1s-14.2-2.7-19.6-8.1c-10.8-10.8-10.8-28.4,0-39.3l92.9-92.9l-93-92.8c-10.8-10.8-10.8-28.4,0-39.3 c10.8-10.8,28.4-10.8,39.3,0l92.8,92.8l92.8-92.8c10.8-10.8,28.4-10.8,39.3,0c10.8,10.8,10.8,28.4,0,39.3l-92.8,92.8L382.2,342.7z"
            }))
        }, e
    }();
    t.ClosePanelButton = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e) {
            return e("svg", {
                version: "1.1",
                style: "display:block;pointer-events:none;",
                x: "0px",
                y: "0px",
                viewBox: "0 0 100 100"
            }, e("path", {
                d: "M18.8,29h61.7c1.1,0,1.4,0.6,0.6,1.4L57.5,55.5c-0.7,0.8-1.4,2.3-1.4,3.4v24.2c0,1.3-0.7,1.9-1.6,2.4L45.1,89 c-0.9,0.3-2-0.6-2-1.4V58.9c0-1.1-0.6-2.6-1.4-3.4l-23.6-25C17.4,29.6,17.7,29,18.8,29z M83.9,18.6c0-1.1-0.9-2-2-2H17.4 c-1.1,0-2,0.9-2,2v4.2c0,1.1,0.9,2,2,2h64.5c1.1,0,2-0.9,2-2V18.6z"
            }))
        }, e
    }();
    t.FilterIcon = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e, t) {
            return function() {
                return t ? e("svg", {
                    focusable: "false",
                    style: "display:block;pointer-events:none;",
                    version: "1.1",
                    x: "0px",
                    y: "0px",
                    viewBox: "9 9 82 82"
                }, e("g", null, e("g", null, e("path", {
                    d: "M85,18.4H29.3c-1.7,0-3.1,1.4-3.1,3.1v32.5H12.8c-1.1,0-2,1-2,2.2v23.3c0,1.2,0.9,2.2,2,2.2 h35c1.1,0,2-1,2-2.2v-7.6H85c1.7,0,3.1-1.4,3.1-3.1V21.4C88.1,19.8,86.7,18.4,85,18.4z M82.5,66.3H49.8V56.1c0-1.2-0.9-2.2-2-2.2 h-16v-30h50.7V66.3z"
                }))), e("g", null, e("path", {
                    d: "M77.2,35.8l-6.6-6.6c-0.4-0.4-1-0.4-1.3,0l-8.5,8.5l-3.9-3.9c-1-1-1.9-0.7-1.9,0.8l0,2.1 l0,13.7c0,0.6,0.5,1.1,1.1,1.1l1.6,0h0l14.2,0c1.4,0,1.8-0.8,0.8-1.9l-3.9-3.9l8.5-8.5C77.6,36.8,77.6,36.2,77.2,35.8z"
                }))) : e("svg", {
                    focusable: "false",
                    style: "display:block;pointer-events:none;",
                    version: "1.1",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 500 500"
                }, e("path", {
                    class: "st0",
                    d: "M476.8,48.6H121.7c-10.7,0-19.5,8.8-19.5,19.5v207H16.5c-6.9,0-12.5,6.3-12.5,14v148.4c0,7.7,5.6,14,12.5,14           h223.2c6.9,0,12.5-6.3,12.5-14v-48.2h224.6c10.7,0,19.5-8.8,19.5-19.5V68.1C496.3,57.4,487.5,48.6,476.8,48.6z M460.9,353.9H252.2                       v-64.8c0-7.7-5.6-14-12.5-14H137.6V84h323.4V353.9z M397.5,248.4l-25.1-25.1l-54.2,54.2c-2.3,2.3-6.1,2.3-8.5,0l-41.9-41.9                      c-2.3-2.3-2.3-6.1,0-8.5l54.2-54.2l-25.1-25.1c-6.5-6.5-4.3-11.9,4.9-11.9l90.7,0.1h0l10.1,0c3.7,0,6.7,3,6.7,6.7l0.1,87.4l0,13.3                       C409.4,252.7,404.1,254.9,397.5,248.4z"
                }))
            }()
        }, e
    }();
    t.FullScreenButton = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e) {
            return e("svg", {
                version: "1.1",
                style: "display:block;pointer-events:none;",
                x: "0px",
                y: "0px",
                viewBox: "10 9 80 84"
            }, e("path", {
                d: "M64.3,39.1c0,10.5-11.8,8.6-12.3,16.3c-0.2,1.2-1.5,1.7-3.4,1.7c-2.1,0-3.7-0.9-3.6-3 c0.2-10.9,11.3-8.8,11.3-14.5c0-3.1-2.3-5-6.3-5c-5.6,0-8.1,3.9-8.4,7.5c-0.1,0.2-5.8,0.4-5.8-4.1c0-4.4,4.6-10.3,14.3-10.3 C59,27.8,64.3,32.4,64.3,39.1z M48.1,62.3c-2.7,0-4.1,1.4-4.1,4.1v0.8c0,2.6,1.5,4,4.1,4h0.9c2.7,0,4.3-1.4,4.3-4v-0.8 c0-2.8-1.4-4.1-4.3-4.1H48.1z M79.8,36.9c-0.3,0-0.6,0-0.9,0C77.8,21.8,65.2,9.8,49.7,9.8c-15.4,0-28.1,12-29.2,27.1 c-0.3,0-0.5,0-0.8,0c-2.4,0-4.3,2.3-4.3,5.2v15.5c0,2.8,1.9,5.2,4.3,5.2c0.3,0,0.6,0,0.8,0c0.8,11.7,8.6,21.4,19.2,25.2 c0.1,1.6,1.4,2.9,3,2.9h14c1.6,0,3-1.3,3-3v-4c0-1.6-1.3-3-3-3h-14c-1.1,0-2,0.6-2.5,1.4C31.9,78.7,26,70.4,26,60.7l0-0.3V39.1 c0-13.1,10.7-23.8,23.8-23.8c13,0,23.5,10.4,23.8,23.4v23.1c0,0.6,0.5,1,1,1c0,0,2.9,0,5.2,0c2.4,0,4.3-2.3,4.3-5.2V42.1 C84.1,39.2,82.1,36.9,79.8,36.9z"
            }))
        }, e
    }();
    t.HeadsetIcon = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e) {
            return e("svg", {
                focusable: "false",
                style: "display:block;pointer-events:none;",
                viewBox: "0 0 100 100",
                preserveAspectRatio: "xMidYMid",
                class: "uil-default"
            }, e("style", null, "@keyframes gvp-loader { 0% { opacity: 1; }  50% { opacity: 0; } 100% { opacity: 1; }  }  @-webkit-keyframes gvp-loader { 0% { opacity: 1; }   50% { opacity: 0; }  100% { opacity: 1; } }"), e("rect", {
                style: "animation: gvp-loader 1s 0s ease infinite;",
                fill: "#00b2ff",
                transform: "rotate(0) translate(0 -30)",
                x: "46.5",
                y: "40",
                width: "7",
                height: "20",
                rx: "5",
                ry: "5"
            }), e("rect", {
                style: "animation: gvp-loader 1s .08333333333333333s ease infinite;",
                fill: "#00b2ff",
                transform: "rotate(30 50 50) translate(0 -30)",
                x: "46.5",
                y: "40",
                width: "7",
                height: "20",
                rx: "5",
                ry: "5"
            }), e("rect", {
                style: "animation: gvp-loader 1s .16666666666666666s ease infinite;",
                fill: "#00b2ff",
                transform: "rotate(60 50 50) translate(0 -30)",
                x: "46.5",
                y: "40",
                width: "7",
                height: "20",
                rx: "5",
                ry: "5"
            }), e("rect", {
                style: "animation: gvp-loader 1s .25s ease infinite;",
                fill: "#00b2ff",
                transform: "rotate(90 50 50) translate(0 -30)",
                x: "46.5",
                y: "40",
                width: "7",
                height: "20",
                rx: "5",
                ry: "5"
            }), e("rect", {
                style: "animation: gvp-loader 1s .3333333333333333s ease infinite;",
                fill: "#00b2ff",
                transform: "rotate(120 50 50) translate(0 -30)",
                x: "46.5",
                y: "40",
                width: "7",
                height: "20",
                rx: "5",
                ry: "5"
            }), e("rect", {
                style: "animation: gvp-loader 1s .4166666666666667s ease infinite;",
                fill: "#00b2ff",
                transform: "rotate(150 50 50) translate(0 -30)",
                x: "46.5",
                y: "40",
                width: "7",
                height: "20",
                rx: "5",
                ry: "5"
            }), e("rect", {
                style: "animation: gvp-loader 1s .5s ease infinite;",
                fill: "#00b2ff",
                transform: "rotate(180 50 50) translate(0 -30)",
                x: "46.5",
                y: "40",
                width: "7",
                height: "20",
                rx: "5",
                ry: "5"
            }), e("rect", {
                style: "animation: gvp-loader 1s .5833333333333334s ease infinite;",
                fill: "#00b2ff",
                transform: "rotate(210 50 50) translate(0 -30)",
                x: "46.5",
                y: "40",
                width: "7",
                height: "20",
                rx: "5",
                ry: "5"
            }), e("rect", {
                style: "animation: gvp-loader 1s .6666666666666666s ease infinite;",
                fill: "#00b2ff",
                transform: "rotate(240 50 50) translate(0 -30)",
                x: "46.5",
                y: "40",
                width: "7",
                height: "20",
                rx: "5",
                ry: "5"
            }), e("rect", {
                style: "animation: gvp-loader 1s .75s ease infinite;",
                fill: "#00b2ff",
                transform: "rotate(270 50 50) translate(0 -30)",
                x: "46.5",
                y: "40",
                width: "7",
                height: "20",
                rx: "5",
                ry: "5"
            }), e("rect", {
                style: "animation: gvp-loader 1s .8333333333333334s ease infinite;",
                fill: "#00b2ff",
                transform: "rotate(300 50 50) translate(0 -30)",
                x: "46.5",
                y: "40",
                width: "7",
                height: "20",
                rx: "5",
                ry: "5"
            }), e("rect", {
                style: "animation: gvp-loader 1s .9166666666666666s ease infinite;",
                fill: "#00b2ff",
                transform: "rotate(330 50 50) translate(0 -30)",
                x: "46.5",
                y: "40",
                width: "7",
                height: "20",
                rx: "5",
                ry: "5"
            }))
        }, e
    }();
    t.LoaderButton = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e) {
            return e("svg", {
                version: "1.1",
                style: "display:block;pointer-events:none;",
                x: "0px",
                y: "0px",
                viewBox: "18 18 64 64"
            }, e("path", {
                class: "st1",
                style: "stroke:#00B0EB;stroke-width:2;stroke-miterlimit:10;",
                d: "M47.7,34.1h24.4c0.3,0,0.5,0.2,0.5,0.5c0,0.3-0.2,0.5-0.5,0.5H47.7c-0.3,0-0.5-0.2-0.5-0.5 C47.2,34.3,47.4,34.1,47.7,34.1z M47.2,29c0,0.3,0.2,0.5,0.5,0.5h24.4c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5H47.7 C47.4,28.5,47.2,28.6,47.2,29z M47.2,40.2c0,0.3,0.2,0.5,0.5,0.5h24.4c0.3,0,0.5-0.2,0.5-0.5s-0.2-0.5-0.5-0.5H47.7 C47.4,39.7,47.2,39.9,47.2,40.2z M44.7,19.3h30.4c1.4,0,2.7,1.2,2.7,2.7v25.3c0,1.4-1.2,2.7-2.7,2.7H62.8c-0.9,0.1-1.7,0.2-2.7,1.5 l-4.8,5.5c0,0.1-0.8,1-1.8,1c-1.2,0-2.2-1-2.2-2.2c0-0.2,0-3.3,0.1-4.7c0-1-1.1-1.1-1.2-1.1h-5.4c-1.4,0-2.7-1.2-2.7-2.7V21.9 C42.1,20.5,43.2,19.3,44.7,19.3z M44.7,48.9h5.4c1.1,0.1,2.2,0.8,2.2,2.1c0,1.8-0.1,4.4-0.1,4.7c0,0.7,0.5,1.2,1.2,1.2 c0.5,0,0.9-0.5,1.1-0.6l4.7-5.5c1.1-1.4,2.1-1.8,3.5-1.8h12.3c0.9,0,1.6-0.8,1.6-1.7V22c0-0.9-0.8-1.6-1.6-1.6H44.7 c-0.9,0-1.6,0.8-1.6,1.6v25.3C43.1,48.2,43.8,48.9,44.7,48.9z"
            }), e("g", null, e("g", null, e("path", {
                class: "st1",
                d: "M52.5,68.9c-0.6-3.5-1.8-8.9-3.1-11.6c-0.9-2.1-3.8-3.9-7.6-4.6h-0.1c0.1,0,0.1-0.1,0.2-0.1 c1.8-1.2,3.1-3,3.7-5c0.2-0.8,0.4-1.7,0.4-2.5c0-5-4.1-9-9-9c-5,0-9,4-9,9c0,0.9,0.2,1.7,0.4,2.5c0.6,2,1.9,3.8,3.6,5 c0.1,0.1,0.2,0.2,0.2,0.2c-0.1,0-0.1,0-0.2,0.1c-3.2,0.7-5.7,2.1-7,3.8c-0.2,0.2-0.4,0.6-0.5,0.9c-0.4,0.8-0.8,1.7-1.1,2.8 c-0.9,2.8-1.7,6.3-2,8.8c-0.2,0.9-0.3,1.7-0.4,2.3c-0.1,0.4-0.1,0.7-0.1,1.1c0,2.6,2.8,5,7.1,6.3c2.6,0.9,5.7,1.3,9.1,1.3 c9,0,16.1-3.4,16.1-7.6c0-0.4,0-0.5-0.1-1.1C52.7,70.6,52.6,69.8,52.5,68.9z"
            }))))
        }, e
    }();
    t.MessageIcon = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e) {
            return e("svg", {
                focusable: "false",
                style: "display:block;pointer-events:none;",
                version: "1.1",
                x: "0px",
                y: "0px",
                viewBox: "0 0 60 60"
            }, e("g", null, e("circle", {
                style: "opacity:0.1;",
                cx: "29.8",
                cy: "30",
                r: "25.5"
            }), e("path", {
                d: "M29.8,0.3C13.5,0.3,0.2,13.6,0.2,30s13.3,29.6,29.6,29.6S59.5,46.3,59.5,30S46.2,0.3,29.8,0.3z M29.8,55.2     C15.9,55.2,4.6,43.9,4.6,30S15.9,4.8,29.8,4.8S55,16,55,30S43.8,55.2,29.8,55.2z"
            }), e("path", {
                d: "M37.3,39.4c0,0.8-0.6,1.4-1.4,1.4h-1.9c-0.8,0-1.4-0.6-1.4-1.4V20.6c0-0.8,0.6-1.4,1.4-1.4h1.9    c0.8,0,1.4,0.6,1.4,1.4V39.4z M27.5,20.6c0-0.8-0.6-1.4-1.4-1.4h-1.9c-0.8,0-1.4,0.6-1.4,1.4v18.7c0,0.8,0.6,1.4,1.4,1.4h1.9    c0.8,0,1.4-0.6,1.4-1.4V20.6z"
            })))
        }, e
    }();
    t.PauseButton = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e) {
            return e("svg", {
                focusable: "false",
                style: "display:block;pointer-events:none;",
                version: "1.1",
                x: "0px",
                y: "0px",
                viewBox: "0 0 60 60"
            }, e("g", null, e("circle", {
                style: "opacity:0.4;",
                class: "st0",
                cx: "30",
                cy: "30",
                r: "25.8"
            }), e("path", {
                class: "st1",
                d: "M30,0C13.4,0,0,13.4,0,30s13.4,30,30,30s30-13.4,30-30S46.5,0,30,0z M30,55.5C15.9,55.5,4.5,44.1,4.5,30S15.9,4.5,30,4.5S55.5,15.9,55.5,30S44.1,55.5,30,55.5z"
            }), e("path", {
                class: "st1",
                d: "M19.1,16.3c0-1.5,1.1-2.2,2.4-1.4l24.4,13.7c1.3,0.7,1.3,2,0,2.7L21.5,45.1c-1.3,0.7-2.4,0.1-2.4-1.4V16.3z"
            })))
        }, e
    }();
    t.PlayButton = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e) {
            return e("svg", {
                focusable: "false",
                style: "display:block;pointer-events:none;",
                version: "1.1",
                x: "0px",
                y: "0px",
                viewBox: "0 0 60 60"
            }, e("g", {
                class: "play-pause-button-group-play"
            }, e("circle", {
                style: "opacity:0.1;",
                cx: "29.8",
                cy: "30",
                r: "25.5"
            }), e("path", {
                d: "M29.8,0.3C13.5,0.3,0.2,13.6,0.2,30s13.3,29.6,29.6,29.6S59.5,46.3,59.5,30S46.2,0.3,29.8,0.3z M29.8,55.2     C15.9,55.2,4.6,43.9,4.6,30S15.9,4.8,29.8,4.8S55,16,55,30S43.8,55.2,29.8,55.2z"
            }), e("path", {
                d: "M19,16.4c0-1.5,1.1-2.1,2.4-1.4l24.1,13.6c1.3,0.7,1.3,1.9,0,2.7L21.4,44.9C20.1,45.6,19,45,19,43.5V16.4z"
            })), e("g", {
                class: "play-pause-button-group-pause"
            }, e("circle", {
                style: "opacity:0.1;",
                cx: "29.8",
                cy: "30",
                r: "25.5"
            }), e("path", {
                d: "M29.8,0.3C13.5,0.3,0.2,13.6,0.2,30s13.3,29.6,29.6,29.6S59.5,46.3,59.5,30S46.2,0.3,29.8,0.3z M29.8,55.2     C15.9,55.2,4.6,43.9,4.6,30S15.9,4.8,29.8,4.8S55,16,55,30S43.8,55.2,29.8,55.2z"
            }), e("path", {
                d: "M37.3,39.4c0,0.8-0.6,1.4-1.4,1.4h-1.9c-0.8,0-1.4-0.6-1.4-1.4V20.6c0-0.8,0.6-1.4,1.4-1.4h1.9    c0.8,0,1.4,0.6,1.4,1.4V39.4z M27.5,20.6c0-0.8-0.6-1.4-1.4-1.4h-1.9c-0.8,0-1.4,0.6-1.4,1.4v18.7c0,0.8,0.6,1.4,1.4,1.4h1.9    c0.8,0,1.4-0.6,1.4-1.4V20.6z"
            })))
        }, e
    }();
    t.PlayPauseButton = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e) {
            return e("svg", {
                focusable: "false",
                style: "display:block;pointer-events:none;",
                version: "1.1",
                x: "0px",
                y: "0px",
                viewBox: "0 0 500 500"
            }, e("path", {
                class: "st0",
                d: "M268.1,184.7c0-5.6-4.2-11.1-11.1-11.1h-80.6c-5.6,0-11.1,4.2-11.1,11.1s4.2,11.1,11.1,11.1h80.6 C263.9,194.4,268.1,190.3,268.1,184.7z M333.3,226.4c0-5.6-4.2-11.1-11.1-11.1H177.8c-5.6,0-11.1,4.2-11.1,11.1 c0,5.6,4.2,11.1,11.1,11.1h144.4C329.2,236.1,333.3,231.9,333.3,226.4z M416.7,262.5h-29.2v-100c0-5.6-2.8-12.5-6.9-16.7l-51.4-51.4 c-4.2-4.2-11.1-6.9-16.7-6.9H133.3c-11.1,0-19.4,8.3-19.4,19.4v156.9H86.1c-15.3,0-27.8,12.5-27.8,27.8v94.4 c0,15.3,12.5,27.8,27.8,27.8h333.3c15.3,0,27.8-12.5,27.8-27.8v-94.4C444.4,275,431.9,262.5,416.7,262.5z M140.3,120.8 c0-4.2,2.8-6.9,6.9-6.9h155.6v52.8c0,2.8,2.8,5.6,5.6,5.6h52.8v91.7H141.7L140.3,120.8z M95.8,312.5c-5.6,0-11.1-4.2-11.1-11.1 c0-6.9,4.2-11.1,11.1-11.1h43.1c5.6,0,11.1,4.2,11.1,11.1c0,6.9-4.2,11.1-11.1,11.1H95.8z M359.7,373.6c0,4.2-2.8,6.9-6.9,6.9H148.6 c-4.2,0-6.9-2.8-6.9-6.9v-8.3c0-4.2,2.8-6.9,6.9-6.9h204.2c4.2,0,6.9,2.8,6.9,6.9V373.6z"
            }))
        }, e
    }();
    t.PrintButton = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e) {
            return e("svg", {
                focusable: "false",
                style: "display:block;pointer-events:none;",
                version: "1.1",
                x: "0px",
                y: "0px",
                viewBox: "0 0 60 60"
            }, e("g", null, e("path", {
                style: "fill-rule:evenodd;clip-rule:evenodd;",
                d: "M27.1,58.9c1.3,0.1,1.9-0.7,1.3-1.9l-8.2-18.2c-0.5-1.2-1.6-1.3-2.4-0.3c0,0-0.5,0.9-1.4,1.9         c-0.8,1-1.6,1.6-2.5,0.6c-4.6-5-6.8-20.4,6.9-27.1c0.5-0.3,1.6-0.8,1.1-2.8l-1.6-5c-0.4-1.2-1.7-1.9-2.8-1.2        c0,0-15.8,6.5-17.4,21.6C-1.4,41,7.7,49,7.7,49c0.8,1,0.8,2.7,0.1,3.7l-1.6,2.5c-0.7,1.1-0.2,2,1,2.1L27.1,58.9z"
            }), e("path", {
                style: "fill-rule:evenodd;clip-rule:evenodd;",
                d: "M32.9,1.1C31.6,1,31,1.8,31.5,2.9l8.2,18.2c0.5,1.2,1.6,1.3,2.4,0.3c0,0,0.5-0.9,1.4-1.8     c0.8-1,1.6-1.6,2.6-0.6c4.6,5,6.8,20.4-6.9,27.1c-0.5,0.3-1.6,0.8-1.1,2.8l1.6,5c0.4,1.2,1.7,1.9,2.8,1.2c0,0,15.8-6.5,17.4-21.6        C61.4,19,52.3,11,52.3,11c-0.8-1-0.8-2.7-0.1-3.7l1.6-2.5c0.7-1.1,0.2-2-1-2.1L32.9,1.1z"
            })))
        }, e
    }();
    t.ReplayButton = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e) {
            return e("svg", {
                version: "1.1",
                style: "display:block;pointer-events:none;",
                x: "0px",
                y: "0px",
                viewBox: "42 0 46 100"
            }, e("path", {
                class: "cls-1",
                d: "M38.637,25.172a0.486,0.486,0,0,0-.463-0.352l-3.359-.586L33.31,21.071a0.481,0.481,0,0,0-.927,0l-1.505,3.164-3.359.586a0.486,0.486,0,0,0-.463.352,0.762,0.762,0,0,0,.232.586l2.432,2.461-0.579,3.515a0.561,0.561,0,0,0,.231.586,0.512,0.512,0,0,0,.579,0l2.9-1.641,3.011,1.641c0.116,0,.116.117,0.232,0.117a0.422,0.422,0,0,0,.347-0.117,0.9,0.9,0,0,0,.231-0.586l-0.579-3.515,2.432-2.461a1.286,1.286,0,0,0,.116-0.586"
            }), e("path", {
                class: "cls-1",
                d: "M53.692,25.172a0.486,0.486,0,0,0-.463-0.352l-3.359-.586-1.506-3.164a0.481,0.481,0,0,0-.927,0l-1.505,3.164-3.358.586a0.486,0.486,0,0,0-.463.352,0.762,0.762,0,0,0,.231.586l2.432,2.461L44.2,31.734a0.56,0.56,0,0,0,.232.586,0.512,0.512,0,0,0,.579,0l2.9-1.641,3.011,1.641c0.116,0,.116.117,0.231,0.117a0.421,0.421,0,0,0,.347-0.117,0.9,0.9,0,0,0,.232-0.586l-0.579-3.515,2.432-2.461a1.286,1.286,0,0,0,.116-0.586"
            }), e("path", {
                class: "cls-1",
                d: "M23.581,25.172a0.486,0.486,0,0,0-.463-0.352l-3.358-.586-1.506-3.164a0.481,0.481,0,0,0-.926,0l-1.506,3.164-3.358.586a0.486,0.486,0,0,0-.463.352,0.762,0.762,0,0,0,.232.586l2.432,2.461-0.579,3.515a0.56,0.56,0,0,0,.232.586,0.512,0.512,0,0,0,.579,0l2.9-1.641L20.8,32.32c0.116,0,.116.117,0.232,0.117a0.422,0.422,0,0,0,.347-0.117,0.9,0.9,0,0,0,.232-0.586l-0.579-3.515,2.432-2.461a1.285,1.285,0,0,0,.116-0.586"
            }), e("path", {
                class: "cls-1",
                d: "M76.6,17.5a1.024,1.024,0,0,0-.973-0.75L68.572,15.5,65.407,8.75a1.007,1.007,0,0,0-1.947,0L60.3,15.5l-7.058,1.25a1.024,1.024,0,0,0-.974.75,1.64,1.64,0,0,0,.487,1.25L57.862,24l-1.218,7.5a1.2,1.2,0,0,0,.487,1.25,1.063,1.063,0,0,0,1.217,0l6.086-3.5,6.328,3.5c0.244,0,.244.25,0.486,0.25a0.879,0.879,0,0,0,.73-0.25,1.936,1.936,0,0,0,.487-1.25L71.248,24l5.112-5.25A2.779,2.779,0,0,0,76.6,17.5"
            }), e("path", {
                class: "cls-2",
                d: "M87,25.172a0.486,0.486,0,0,0-.463-0.352l-3.358-.586L81.673,21.07a0.481,0.481,0,0,0-.926,0l-1.506,3.164-3.359.586a0.486,0.486,0,0,0-.463.352,0.762,0.762,0,0,0,.232.586l2.432,2.461L77.5,31.734a0.56,0.56,0,0,0,.232.586,0.511,0.511,0,0,0,.579,0l2.9-1.64,3.011,1.64c0.116,0,.116.117,0.231,0.117A0.423,0.423,0,0,0,84.8,32.32a0.9,0.9,0,0,0,.232-0.586l-0.579-3.515,2.432-2.461A1.286,1.286,0,0,0,87,25.172"
            }))
        }, e
    }();
    t.StarsIcon = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e) {
            return e("svg", {
                version: "1.1",
                style: "display:block;pointer-events:none;",
                x: "0px",
                y: "0px",
                viewBox: "10 20 80 60"
            }, e("path", {
                class: "st0",
                d: "M45.3,54.4c0,2-1.6,3.7-3.7,3.7h-0.2c1.1,0.6,1.9,1.8,1.9,3.2c0,2-1.6,3.7-3.7,3.7h-1.8 c1.1,0.6,1.9,1.8,1.9,3.2c0,2-1.6,3.7-3.7,3.7c0,0-12.6,0-15.8,0c-6.2,0.1-9.5-6.8-9.5-13.5c0-7.2,4.6-11.3,6-12.6 c1-0.9,5.2-5.1,8.3-9.4c3.2-4.3,1.5-9.6,4.1-10.3c1-0.3,4.5,1.7,4.9,5.8c0.4,4.2-3.5,10.5-4.1,11.9L30,43.8l11.7,0 c2,0,3.7,1.6,3.7,3.7c0,1.6-1,2.9-2.4,3.4C44.3,51.5,45.3,52.8,45.3,54.4z M56.7,48.2c-1.4,0.5-2.4,1.9-2.4,3.4c0,2,1.6,3.7,3.7,3.7 l11.7,0l-0.1,0.2c-0.7,1.4-4.5,7.7-4.1,11.9c0.4,4.1,3.9,6,4.9,5.8c2.6-0.7,0.9-6,4.1-10.3c3.1-4.2,7.3-8.4,8.3-9.4 c1.4-1.3,6-5.4,6-12.6c0-6.7-3.3-13.6-9.5-13.5c-3.2,0-15.8,0-15.8,0c-2,0-3.7,1.6-3.7,3.7c0,1.4,0.8,2.6,1.9,3.2h-1.8 c-2,0-3.7,1.6-3.7,3.7c0,1.4,0.8,2.6,1.9,3.2h-0.2c-2,0-3.7,1.6-3.7,3.7C54.2,46.4,55.3,47.7,56.7,48.2z"
            }))
        }, e
    }();
    t.ThumbsIcon = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e, t) {
            return function() {
                return t ? e("svg", {
                    focusable: "false",
                    style: "display:block;pointer-events:none;",
                    version: "1.1",
                    x: "0px",
                    y: "0px",
                    viewBox: "-29 31 40 40"
                }, e("g", null, e("path", {
                    d: "M2.1,55.9c-4.2,0-7.5,3.4-7.5,7.5c0,4.2,3.4,7.5,7.5,7.5c4.2,0,7.6-3.4,7.6-7.5C9.6,59.3,6.3,55.9,2.1,55.9z M5.8,65.1h-2v2c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7v-2h-2c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7h2v-2 c0-0.9,0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7v2h2c0.9,0,1.7,0.8,1.7,1.7C7.5,64.4,6.8,65.1,5.8,65.1z"
                }), e("g", null, e("g", null, e("path", {
                    d: "M-19.3,45h15.5c0.7,0,1.2-0.5,1.2-1.2s-0.6-1.2-1.2-1.2h-15.5c-0.7,0-1.2,0.5-1.2,1.2S-20,45-19.3,45z"
                }), e("path", {
                    d: "M-3.8,47.5h-15.5c-0.7,0-1.2,0.6-1.2,1.2c0,0.7,0.6,1.2,1.2,1.2h15.5c0.7,0,1.2-0.6,1.2-1.2 C-2.6,48-3.2,47.5-3.8,47.5z"
                }), e("path", {
                    d: "M-3.8,52.4h-15.5c-0.7,0-1.2,0.5-1.2,1.2c0,0.7,0.6,1.2,1.2,1.2h15.5c0.7,0,1.2-0.5,1.2-1.2 C-2.6,52.9-3.2,52.4-3.8,52.4z"
                })), e("path", {
                    d: "M-8.1,64.6h-14.7c-1,0-1.4-0.5-1.4-1.3V35c0-0.7,0.4-1.3,1.4-1.3h14.9c4.5,1,7.6,3.9,8.9,8.3v11.5 c0.6-0.1,1.2-0.2,1.8-0.2c0.2,0,0.4,0,0.6,0V33.2C3.5,32,2.3,31,0.8,31h-24.7c-1.5,0-2.7,1-2.7,2.2v32c0,1.2,1.2,2.2,2.7,2.2 h16.2C-8,66.5-8.1,65.6-8.1,64.6z"
                })), e("rect", {
                    x: "-1.1",
                    y: "57.8",
                    width: "6.9",
                    height: "3.9"
                }), e("rect", {
                    x: "-0.9",
                    y: "65.1",
                    width: "6.3",
                    height: "4"
                }))) : e("svg", {
                    focusable: "false",
                    style: "display:block;pointer-events:none;",
                    version: "1.1",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 40 40"
                }, e("g", null, e("g", null, e("path", {
                    d: "M31.1,24.9c-4.2,0-7.5,3.4-7.5,7.5c0,4.2,3.4,7.5,7.5,7.5c4.2,0,7.6-3.4,7.6-7.5          C38.6,28.3,35.3,24.9,31.1,24.9z M34.8,34.1h-2v2c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7v-2h-2c-0.9,0-1.7-0.8-1.7-1.7           c0-0.9,0.8-1.7,1.7-1.7h2v-2c0-0.9,0.8-1.7,1.7-1.7c0.9,0,1.7,0.8,1.7,1.7v2h2c0.9,0,1.7,0.8,1.7,1.7           C36.5,33.4,35.8,34.1,34.8,34.1z"
                })), e("g", null, e("g", null, e("path", {
                    d: "M9.7,14h15.5c0.7,0,1.2-0.5,1.2-1.2c0-0.7-0.6-1.2-1.2-1.2H9.7c-0.7,0-1.2,0.5-1.2,1.2C8.5,13.5,9,14,9.7,14               z"
                }), e("path", {
                    d: "M25.2,16.5H9.7c-0.7,0-1.2,0.6-1.2,1.2c0,0.7,0.6,1.2,1.2,1.2h15.5c0.7,0,1.2-0.6,1.2-1.2             C26.4,17,25.8,16.5,25.2,16.5z"
                }), e("path", {
                    d: "M25.2,21.4H9.7c-0.7,0-1.2,0.5-1.2,1.2c0,0.7,0.6,1.2,1.2,1.2h15.5c0.7,0,1.2-0.5,1.2-1.2             C26.4,21.9,25.8,21.4,25.2,21.4z"
                })), e("path", {
                    d: "M20.9,33.6L6.2,33.6c-1,0-1.4-0.5-1.4-1.3V4c0-0.7,0.4-1.3,1.4-1.3h14.9c4.5,1,7.6,3.9,8.9,8.3l0,11.5         c0.6-0.1,1.2-0.2,1.8-0.2c0.2,0,0.4,0,0.6,0V2.2C32.5,1,31.3,0,29.8,0H5.1C3.6,0,2.4,1,2.4,2.2v32c0,1.2,1.2,2.2,2.7,2.2h16.2           C21,35.5,20.9,34.6,20.9,33.6z"
                }))))
            }()
        }, e
    }();
    t.TranscriptButton = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e.jsx = function(e, t) {
            return e("svg", {
                focusable: "false",
                style: "display:block;pointer-events:none;",
                version: "1.1",
                x: "0px",
                y: "0px",
                viewBox: "0 0 60 60"
            }, e("g", null, e("g", null, e("path", {
                d: "M31,8c-0.3-0.1-0.5-0.2-0.8-0.2c-0.4,0-0.7,0.1-1,0.3c0,0-15.4,13.8-15.5,14.2H2.5c-1.4,0-2.5,1.1-2.5,2.4         v12.3c0,1.4,1.1,2.5,2.5,2.5h11.3c0.5,0.8,15.5,13.8,15.5,13.8c0.3,0.2,0.7,0.3,1,0.3c0.3,0,0.6-0.1,0.8-0.2c0.6-0.3,1-0.9,1-1.6            V9.6C32,8.9,31.6,8.3,31,8z"
            })), function() {
                if (t > 0) return e("g", {
                    class: "unmute"
                }, function() {
                    if (t > .66) return e("path", {
                        d: "M59.5,35.6c-0.8,4.2-2.6,8.3-5.4,11.6c-0.7,0.9-2.1,1.1-3,0.3c-0.9-0.7-1.1-2.1-0.3-3         c2.3-2.8,3.8-6.2,4.5-9.7c1.2-6.4-0.5-12.9-4.6-17.9c-0.7-0.9-0.6-2.2,0.3-3c0.9-0.7,2.2-0.6,3,0.3C59,20.2,61,28,59.5,35.6"
                    })
                }(), function() {
                    if (t > .33) return e("path", {
                        d: "M51.4,34.6c1.1-5.7-0.3-11.6-3.8-16.2c-0.7-0.9-2-1.1-2.9-0.4c-0.9,0.7-1.1,2-0.4,2.9c2.8,3.7,3.9,8.4,3.1,13          c-0.5,2.6-1.5,4.9-3.1,7c-0.7,0.9-0.5,2.2,0.4,2.9c0.9,0.7,2.2,0.5,2.9-0.4C49.5,40.8,50.8,37.8,51.4,34.6"
                    })
                }(), function() {
                    if (t > .001) return e("path", {
                        d: "M44,33.1c0.7-3.6-0.2-7.3-2.4-10.2c-0.6-0.8-1.8-1-2.7-0.4c-0.8,0.6-1,1.8-0.4,2.7c1.6,2.1,2.2,4.7,1.7,7.2            c-0.3,1.4-0.8,2.8-1.7,3.9c-0.6,0.8-0.5,2,0.3,2.7c0.8,0.6,2,0.5,2.6-0.3C42.8,37,43.6,35.2,44,33.1"
                    })
                }())
            }(), function() {
                if (0 == t) return e("g", {
                    class: "mute"
                }, e("path", {
                    class: "st1",
                    d: "M51,30.7l8-8c0.9-0.9,0.9-2.5,0-3.4c-0.9-0.9-2.5-0.9-3.4,0l-8,8l-8-8c-0.9-0.9-2.5-0.9-3.4,0 c-0.9,0.9-0.9,2.5,0,3.4l8,8l-8,8c-0.9,0.9-0.9,2.5,0,3.4c0.5,0.5,1.1,0.7,1.7,0.7c0.6,0,1.2-0.2,1.7-0.7l8-8l8,8 c0.5,0.5,1.1,0.7,1.7,0.7c0.6,0,1.2-0.2,1.7-0.7c0.9-0.9,0.9-2.5,0-3.4L51,30.7z"
                }))
            }()))
        }, e
    }();
    t.VolumeButton = n
}, function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(54),
        o = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.zooming = !1, t.x = 0, t.y = 0, t.offsetX = 0, t.offsetY = 0, t.elementReady = !1, t
            }
            return r(t, e), Object.defineProperty(t.prototype, "styles", {
                get: function() {
                    return {
                        image: {
                            height: "100%",
                            position: "relative",
                            backgroundPositionX: this.element && this.zooming ? this.x / this.element.offsetWidth * 100 + this.offsetX + "% !important" : "50%",
                            backgroundPositionY: this.element && this.zooming ? this.y / this.element.offsetHeight * 100 + this.offsetY + "% !important" : "50%",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: this.zooming ? "150%" : "cover",
                            backgroundImage: this.attributes.src ? "url(" + this.attributes.src + ")" : "inherit",
                            border: this.zooming ? "1px solid #d2d2d2" : "1px solid #FFFFFF",
                            borderRadius: "7px"
                        }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "html", {
                get: function() {
                    var e = this;
                    return "undefined" == typeof this.attributes.zoom || this.attributes.zoom || (this.zooming = !1), e.parse("div", {
                        "data-comp": "ZoomableImage",
                        "event-mousedown": function(t) {
                            e.zoom(!0), e.position(t.layerX, t.layerY)
                        },
                        "event-touchstart": function(t) {
                            e.zoom(!0), e.position(t.layerX, t.layerY)
                        },
                        "event-mousemove": function(t) {
                            e.position(t.layerX, t.layerY)
                        },
                        "event-touchmove": function(t) {
                            e.position(t.layerX, t.layerY)
                        },
                        style: this.styles.image
                    }, this.zooming ? "" : this.children)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.zoom = function(e) {
                this.zooming != e && (this.zooming = e, this.invalidate())
            }, t.prototype.position = function(e, t) {
                this.zooming && (this.x = e, this.y = t, this.invalidate())
            }, t.prototype.added = function() {
                var e = this;
                document.addEventListener("mouseup", function(t) {
                    e.zoom(!1)
                }), document.addEventListener("touchend", function(t) {
                    e.zoom(!1)
                })
            }, t
        }(i.Component);
    t.ZoomableImageComponent = o
}, , , function(e, t) {
    e.exports = function() {
        var e = [];
        return e.toString = function() {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
            }
            return e.join("")
        }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                "number" == typeof o && (r[o] = !0)
            }
            for (i = 0; i < t.length; i++) {
                var a = t[i];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
            }
        }, e
    }
}, function(e, t, n) {
    function r(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = h[r.id];
            if (i) {
                i.refs++;
                for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
                for (; o < r.parts.length; o++) i.parts.push(l(r.parts[o], t))
            } else {
                for (var a = [], o = 0; o < r.parts.length; o++) a.push(l(r.parts[o], t));
                h[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }

    function i(e) {
        for (var t = [], n = {}, r = 0; r < e.length; r++) {
            var i = e[r],
                o = i[0],
                a = i[1],
                s = i[2],
                u = i[3],
                c = {
                    css: a,
                    media: s,
                    sourceMap: u
                };
            n[o] ? n[o].parts.push(c) : t.push(n[o] = {
                id: o,
                parts: [c]
            })
        }
        return t
    }

    function o(e, t) {
        var n = _(),
            r = b[b.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), b.push(t);
        else {
            if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(t)
        }
    }

    function a(e) {
        e.parentNode.removeChild(e);
        var t = b.indexOf(e);
        t >= 0 && b.splice(t, 1)
    }

    function s(e) {
        var t = document.createElement("style");
        return t.type = "text/css", u(t, e.attrs), o(e, t), t
    }

    function u(e, t) {
        return !!t && void e.setAttribute(t, "")
    }

    function c(e) {
        var t = document.createElement("link");
        return t.rel = "stylesheet", o(e, t), t
    }

    function l(e, t) {
        var n, r, i;
        if (t.singleton) {
            var o = y++;
            n = m || (m = s(t)), r = p.bind(null, n, o, !1), i = p.bind(null, n, o, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(t), r = d.bind(null, n), i = function() {
            a(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = s(t), r = f.bind(null, n), i = function() {
            a(n)
        });
        return r(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else i()
            }
    }

    function p(e, t, n, r) {
        var i = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = x(t, i);
        else {
            var o = document.createTextNode(i),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
        }
    }

    function f(e, t) {
        var n = t.css,
            r = t.media;
        if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }

    function d(e, t) {
        var n = t.css,
            r = t.sourceMap;
        r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
        var i = new Blob([n], {
                type: "text/css"
            }),
            o = e.href;
        e.href = URL.createObjectURL(i), o && URL.revokeObjectURL(o)
    }
    var h = {},
        g = function(e) {
            var t;
            return function() {
                return "undefined" == typeof t && (t = e.apply(this, arguments)), t
            }
        },
        v = g(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        }),
        _ = g(function() {
            return document.head || document.getElementsByTagName("head")[0]
        }),
        m = null,
        y = 0,
        b = [];
    e.exports = function(e, t) {
        t = t || {}, "undefined" == typeof t.singleton && (t.singleton = v()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
        var n = i(e);
        return r(n, t),
            function(e) {
                for (var o = [], a = 0; a < n.length; a++) {
                    var s = n[a],
                        u = h[s.id];
                    u.refs--, o.push(u)
                }
                if (e) {
                    var c = i(e);
                    r(c, t)
                }
                for (var a = 0; a < o.length; a++) {
                    var u = o[a];
                    if (0 === u.refs) {
                        for (var l = 0; l < u.parts.length; l++) u.parts[l]();
                        delete h[u.id]
                    }
                }
            }
    };
    var x = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n, e.filter(Boolean).join("\n")
        }
    }()
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(53),
        o = n(54),
        a = n(281),
        s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.dragging = !1, t.value = 0, t.update = null, t.buttonWidth = 0, t
            }
            return r(t, e), Object.defineProperty(t.prototype, "html", {
                get: function() {
                    var e = this,
                        t = this.style;
                    return e.parse("div", {
                        tabindex: "0",
                        role: "slider",
                        "aria-label": "",
                        "aria-valuemin": "0",
                        "aria-valuemax": "1",
                        "aria-orientation": "horizontal",
                        "aria-valuenow": "0",
                        "aria-valuetext": "0"
                    }, e.parse("div", {
                        class: a.scrubberContainer
                    }, e.parse("div", {
                        class: a.mask
                    }, e.parse("div", {
                        class: a.bottom
                    }), e.parse("div", {
                        class: a.buffer,
                        style: t.buffer
                    }), e.parse("div", {
                        class: a.top,
                        style: t.top
                    }), e.parse("div", {
                        class: a.button,
                        style: t.button
                    }))))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "style", {
                get: function() {
                    0 == this.buttonWidth && this.element && this.setButtonWidth(), this.dragging && this.setAttr("reflect", this.value);
                    var e = 0;
                    if (this.element) {
                        var t = this.element.getElementsByClassName(a.bottom);
                        if (t && t[0]) {
                            var n = t[0];
                            e = Math.floor(n.getBoundingClientRect().width * (this.getAttr("reflect") / 100)), e + this.buttonWidth / 2 > n.getBoundingClientRect().width ? e = n.getBoundingClientRect().width - this.buttonWidth : (e -= this.buttonWidth / 2, e < 0 && (e = 0))
                        }
                    }
                    return {
                        top: {
                            width: this.getAttr("reflect") + "%"
                        },
                        buffer: {
                            width: this.getAttr("buffer") + "%"
                        },
                        button: {
                            left: e + "px"
                        }
                    }
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.initialize = function() {
                this.update = this.getAttr("update")
            }, t.prototype.refreshed = function() {
                if (this.element && this.element.hasAttribute("value")) {
                    var e = Number(this.element.getAttribute("value"));
                    this.element.removeAttribute("value"), this.update && this.update(e)
                }
            }, t.prototype.setButtonWidth = function() {
                var e = this.element.getElementsByClassName(a.button);
                this.buttonWidth = e ? e[0].offsetWidth : 0
            }, t.prototype.added = function() {
                var e = this;
                this.setButtonWidth();
                var t = this.element.getElementsByClassName(a.button);
                this.buttonWidth = t ? t[0].offsetWidth : 0, i(this.element).on("touchmove touchstart touchend mousedown mouseup", function(t) {
                    "touchend" === t.type || "mouseup" === t.type ? (e.dragging = !1, e.update && e.update(e.process(t.originalEvent))) : "touchmove" == t.type ? (e.dragging = !0, e.update && e.update(e.process(t.originalEvent))) : e.dragging = !0, e.reflect(e.process(t.originalEvent)), t.preventDefault()
                }), i(document).on("mouseup", function(t) {
                    e.dragging && (e.dragging = !1, e.update && e.update(e.process(t.originalEvent)))
                }), i(document).on("mousemove", function(t) {
                    e.dragging && e.reflect(e.process(t.originalEvent))
                });
                var r = n(48);
                r(this.element, function() {
                    e.invalidate()
                })
            }, t.prototype.reflect = function(e) {
                this.value = e, this.invalidate()
            }, t.prototype.process = function(e) {
                if (!this.element) return 0;
                var t = i(this.element).find("div").first(),
                    n = "undefined" == typeof e.touches || 0 == e.touches.length ? e.pageX : e.touches[0].pageX,
                    r = (n - t.offset().left) / t.width();
                return r < 0 && (r = 0), r > 1 && (r = 1), Math.round(100 * r)
            }, t
        }(o.Component);
    t.RangeComponent = s
}, function(e, t, n) {
    var r = n(282);
    "string" == typeof r && (r = [
        [e.id, r, ""]
    ]);
    n(86)(r, {
        singleton: "1",
        attrs: "data-gvp"
    });
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    t = e.exports = n(85)(), t.push([e.id, ".gvp_rangeComponent__scrubberContainer___3eLrA{position:relative;height:100%;pointer-events:none}.gvp_rangeComponent__mask___3M2hS{position:absolute;height:10px;top:calc(50% - 5px);border-radius:10px;pointer-events:none;overflow:hidden;background-color:transparent;z-index:99998;width:100%}.gvp_rangeComponent__bottom___2m4tM{position:absolute;pointer-events:none;height:100%;width:100%;background-color:#676767;z-index:99995}.gvp_rangeComponent__buffer___vjKug{position:absolute;pointer-events:none;height:100%;width:100%;background-color:#7f7f7f;z-index:99996}.gvp_rangeComponent__top___1H4N2{position:absolute;pointer-events:none;height:100%;background-color:#00b1ed;z-index:99997}.gvp_rangeComponent__button___1deRo{position:absolute;height:10px;left:0;border-radius:10px;pointer-events:none;width:18px;background-color:#fff;z-index:99999}", ""]), t.locals = {
        scrubberContainer: "gvp_rangeComponent__scrubberContainer___3eLrA",
        mask: "gvp_rangeComponent__mask___3M2hS",
        bottom: "gvp_rangeComponent__bottom___2m4tM",
        buffer: "gvp_rangeComponent__buffer___vjKug",
        top: "gvp_rangeComponent__top___1H4N2",
        button: "gvp_rangeComponent__button___1deRo"
    }
}, , function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(53),
        o = n(64),
        a = n(54),
        s = n(285),
        u = n(74),
        c = n(77),
        l = n(71),
        p = n(45),
        f = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.lastCurrentTimeValue = 0, t.videoIdx = 0, t.canChangeVolume = !0, t.loadedMetaData = function(e) {
                    e.target.removeEventListener("loadedmetadata", t.loadedMetaData);
                    var n = e.target;
                    0 == t.videoData[n.id].duration && isFinite(n.duration) && (t.videoData[n.id] = {
                        duration: n.duration
                    }), n.gvpConfig && n.gvpConfig.currentTime && (t.video.currentTime = n.gvpConfig.currentTime), n.gvpConfig && n.gvpConfig.playing && t.video.play(), n.gvpConfig = {}
                }, t.canPlay = function(e) {
                    t.invalidate()
                }, t.handlerProgress = function(e) {
                    t.invalidate()
                }, t.handlerTimeUpdate = function(e) {
                    t.video && Math.round(t.video.currentTime) != t.lastCurrentTimeValue && (0 == t.videoData[t.videoIdx].duration && isFinite(t.video.duration) && (t.videoData[t.videoIdx].duration = t.video.duration), t.lastCurrentTimeValue = Math.round(t.video.currentTime), t.invalidate())
                }, t.handlerEnded = function(e) {
                    t.attributes.source.length == t.videoIdx + 1 || (t.videoIdx++, t.playVideoIdx({
                        currentTime: 0,
                        playing: !0
                    })), t.invalidate()
                }, t.videoData = [], t
            }
            return r(t, e), Object.defineProperty(t.prototype, "textTrack", {
                get: function() {
                    if (this.video && this.video.textTracks && this.video.textTracks.length > 0) return this.video.textTracks[0]
                },
                set: function(e) {
                    this.video && this.video.textTracks && (this.video.textTracks[0].mode = e)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.added = function() {
                for (var e = this, t = 0; t < this.attributes.source.length; t++) {
                    this.videoData[t] = {
                        duration: 0
                    };
                    var n = i(this.element).find("video").get(t);
                    n.addEventListener("loadedmetadata", this.loadedMetaData), n.ondurationchange = function(t) {
                        var n = t.target;
                        0 == e.videoData[n.id].duration && isFinite(n.duration) && (e.videoData[n.id] = {
                            duration: n.duration
                        })
                    }, n.load(), 0 == t && (n.addEventListener("canplay", this.canPlay), n.play())
                }
                var r = .75;
                if ("undefined" != typeof Storage && (localStorage.gvpVolume ? r = Number(localStorage.gvpVolume) : localStorage.gvpVolume = r), this.volume = r, this.setTextTracks(this.getAttr("textTracks")), this.element.removeAttribute("textTracks"), this.video) {
                    var o = this.video.volume,
                        a = o > 0 ? o / 2 : .1;
                    this.video.volume = a, this.video.volume == a ? (this.canChangeVolume = !0, this.video.volume = o) : this.canChangeVolume = !1
                }
            }, t.prototype.getM3U8Source = function(e) {
                return p.endsWith(e, "_480") ? e.substring(0, e.length - 4) : e
            }, Object.defineProperty(t.prototype, "html", {
                get: function() {
                    var e = this;
                    return e.parse("div", {
                        "event-click": function(t) {
                            e.playing = !e.playing
                        }
                    }, function() {
                        var t = [];
                        if (e.getAttr("source"))
                            for (var n = e.getAttr("source"), r = 0; r < n.length; r++) t.push(e.parse("video", {
                                playsinline: !0,
                                id: r,
                                tabindex: "-1",
                                class: s.videoElement,
                                style: {
                                    display: 0 == r ? "block" : "none",
                                    opacity: e.playing ? "1" : ".75"
                                },
                                "event-playing": function() {
                                    e.invalidate()
                                },
                                "event-pause": function() {
                                    e.invalidate()
                                },
                                "event-volumechange": function() {
                                    e.invalidate()
                                },
                                "event-timeupdate": e.handlerTimeUpdate,
                                "event-progress": e.handlerProgress,
                                "event-ended": e.handlerEnded
                            }, e.parse("source", {
                                type: "video/mp4",
                                src: n[r] + ".webm"
                            }), e.parse("source", {
                                type: "video/mp4",
                                src: n[r] + ".mp4"
                            }), e.parse("source", {
                                type: "video/mp4",
                                src: e.getM3U8Source(n[r]) + ".m3u8"
                            })));
                        return t
                    }(), e.parse("div", {
                        class: s.videoButtonOverlay,
                        style: {
                            display: this.playing ? "none" : "inline"
                        }
                    }, function() {
                        return e.isAtEnd ? e.parse("button", {
                            "event-click": function(t) {
                                t.stopPropagation(), e.replay()
                            },
                            class: s.replayContainer
                        }, e.parse("div", {
                            class: s.replayText
                        }, "Replay"), e.parse("div", {
                            class: s.replayButtonContainer
                        }, e.parse("div", {
                            class: s.replayButton
                        }, c.ReplayButton.jsx(e.parse)))) : e.isLoading ? e.parse("div", {
                            class: s.loaderButton
                        }, l.LoaderButton.jsx(e.parse)) : e.parse("div", {
                            class: s.playButton
                        }, u.PlayButton.jsx(e.parse))
                    }()), e.parse("div", {
                        class: s.fillElement
                    }))
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.playVideoIdx = function(e) {
                var t = i(this.element).find("video");
                t.find("source").remove(), t.append('<source type="video/mp4" src="' + this.attributes.source[this.videoIdx] + '.webm"></source>'), t.append('<source type="video/mp4" src="' + this.attributes.source[this.videoIdx] + '.mp4"></source>'), t.append('<source type="video/mp4" src="' + this.getM3U8Source(this.attributes.source[this.videoIdx]) + '.m3u8"></source>'), this.video.load(), "undefined" != typeof e && (this.video.gvpConfig = e, this.video.addEventListener("loadedmetadata", this.loadedMetaData)), this.invalidate()
            }, t.prototype.removeTextTracks = function() {
                !this.video
            }, t.prototype.setTextTracks = function(e) {
                if (this.video && this.video.addTextTrack) {
                    var t = this.video.addTextTrack("subtitles", "English", "en");
                    i(e).find("p").each(function(e, n) {
                        var r = o.Utils.timecodeToSeconds(i(n).attr("begin")),
                            a = o.Utils.timecodeToSeconds(i(n).attr("end")),
                            s = null;
                        "undefined" != typeof VTTCue ? s = new VTTCue(r, a, i(n).html().replace(/<br\s*[\/]?>/gi, "\n")) : "undefined" != typeof TextTrackCue && (s = new TextTrackCue(r, a, i(n).html().replace(/<br\s*[\/]?>/gi, "\n"))), s.snapToLines = !1, s && t.addCue(s)
                    }), this.video.textTracks[0].mode = "hidden"
                }
            }, t.prototype.pause = function() {
                this.playing = !1
            }, Object.defineProperty(t.prototype, "video", {
                get: function() {
                    if (this.element) return i(this.element).find("video").get(0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isLoading", {
                get: function() {
                    if (this.video) {
                        if (4 == this.video.readyState) return !1;
                        for (var e = this.video.seekable, t = 0; t < e.length; t++)
                            if (this.video.currentTime >= e.start(t) && this.video.currentTime <= e.end(t)) return !1;
                        return !0
                    }
                    return !0
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.replay = function() {
                this.videoIdx = 0, this.playVideoIdx({
                    currentTime: 0,
                    playing: !0
                })
            }, Object.defineProperty(t.prototype, "buffered", {
                get: function() {
                    return this.video && this.video.buffered.length ? this.video.buffered.end(this.video.buffered.length - 1) : 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isAtEnd", {
                get: function() {
                    return !!this.video && (this.attributes.source.length <= this.videoIdx + 1 && this.video.currentTime >= this.video.duration)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "playing", {
                get: function() {
                    return !!this.video && (!this.isAtEnd && !this.video.paused)
                },
                set: function(e) {
                    this.video && !this.video.paused != e && (e ? this.video.play() : this.video.pause())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "volume", {
                get: function() {
                    return this.video && !this.video.muted ? this.video.volume : 0
                },
                set: function(e) {
                    e > 1 && (e = 1), e < 0 && (e = 0), this.video && this.video.volume != e && (this.video.volume = e), "undefined" != typeof Storage && (localStorage.gvpVolume = e), e > 0 && (this.muted = !1)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "muted", {
                get: function() {
                    return !!this.video && this.video.muted
                },
                set: function(e) {
                    this.video && this.video.muted != e && (this.video.muted = e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "totalTime", {
                get: function() {
                    for (var e = 0, t = 0; t < this.attributes.source.length; t++) this.videoData[t] && this.videoData[t].duration && (e += this.videoData[t].duration);
                    return e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "currentTime", {
                get: function() {
                    var e = 0;
                    if (this.video) {
                        for (var t = 0; t < this.videoIdx; t++) this.videoData[t] && this.videoData[t].duration && (e += this.videoData[t].duration);
                        e += this.video.currentTime
                    }
                    return e
                },
                set: function(e) {
                    var t = 0;
                    if (this.video)
                        for (var n = 0; n < this.attributes.source.length; n++)
                            if (t += this.videoData[n].duration, t > e) {
                                var r = t - this.videoData[n].duration,
                                    i = e - r;
                                this.videoIdx != n ? (this.videoIdx = n, this.playVideoIdx({
                                    currentTime: i,
                                    playing: this.playing
                                })) : this.video.currentTime = i;
                                break
                            }
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(a.Component);
    t.VideoComponent = f
}, function(e, t, n) {
    var r = n(286);
    "string" == typeof r && (r = [
        [e.id, r, ""]
    ]);
    n(86)(r, {
        singleton: "1",
        attrs: "data-gvp"
    });
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    t = e.exports = n(85)(), t.i(n(287), void 0), t.i(n(288), void 0), t.push([e.id, ".gvp_videoComponent__fillElement___32zZO{padding-bottom:56.207%}.gvp_videoComponent__videoButtonOverlay___Pv1Q_{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}.gvp_videoComponent__playButton___1onKh{width:100px;height:100px;fill:#fff}.gvp_videoComponent__videoElement___2NPax{position:absolute;width:100%;height:100%;top:50%;left:50%;transform:translate(-50%,-50%)}.gvp_videoComponent__replayContainer___2onIC{background-color:#000;opacity:.8;padding:10px;border-radius:5px;display:table;border-style:none}.gvp_videoComponent__replayRow___1uhoC{display:table-row}.gvp_videoComponent__replayButtonContainer___1S7W-{display:table-cell;vertical-align:middle}.gvp_videoComponent__replayButton____Hbhs{width:80px;height:80px;background-color:transparent;fill:#f1f1f1}.gvp_videoComponent__replayText___1EE9W{color:#fff;display:table-cell;vertical-align:middle;padding:10px}.gvp_videoComponent__loaderButton___1W0Ux{width:100px;height:100px;fill:#fff;-webkit-animation:gvp_videoComponent__fadeinout___2DsKL 1s linear 1 forwards;animation:gvp_videoComponent__fadein___2vOTq 1s linear 1 forwards}@-webkit-keyframes gvp_videoComponent__fadein___2vOTq{0%{opacity:0}to{opacity:1}}@keyframes gvp_videoComponent__fadein___2vOTq{0%{opacity:0}to{opacity:1}}.gvp_videoComponent__videoElement___2NPax::-webkit-media-controls-panel,.gvp_videoComponent__videoElement___2NPax::\\--webkit-media-controls-play-button{display:none!important;-webkit-appearance:none}.gvp_videoComponent__videoElement___2NPax::-webkit-media-controls-start-playback-button{display:none!important;-webkit-appearance:none}", ""]), t.locals = {
        fillElement: "gvp_videoComponent__fillElement___32zZO",
        videoButtonOverlay: "gvp_videoComponent__videoButtonOverlay___Pv1Q_",
        playButton: "gvp_videoComponent__playButton___1onKh " + n(287).locals.gvpButton,
        videoElement: "gvp_videoComponent__videoElement___2NPax",
        replayContainer: "gvp_videoComponent__replayContainer___2onIC " + n(288).locals.focused,
        replayRow: "gvp_videoComponent__replayRow___1uhoC",
        replayButtonContainer: "gvp_videoComponent__replayButtonContainer___1S7W-",
        replayButton: "gvp_videoComponent__replayButton____Hbhs " + n(287).locals.gvpButton,
        replayText: "gvp_videoComponent__replayText___1EE9W",
        loaderButton: "gvp_videoComponent__loaderButton___1W0Ux " + n(287).locals.gvpButton,
        fadeinout: "gvp_videoComponent__fadeinout___2DsKL",
        fadein: "gvp_videoComponent__fadein___2vOTq"
    }
}, function(e, t, n) {
    t = e.exports = n(85)(), t.i(n(288), void 0), t.push([e.id, ".gvp_button__gvpButton___3tNWs{border:0;width:32px;height:32px;cursor:pointer;background-color:transparent;fill:#999;border-radius:7px}.gvp_button__gvpButton___3tNWs:hover path,.gvp_button__gvpButton___3tNWs:hover rect{fill:#fff}.gvp_button__gvpButton___3tNWs:active path,.gvp_button__gvpButton___3tNWs:active rect,.gvp_button__gvpButtonDown___3Jc3K:hover path,.gvp_button__gvpButtonDown___3Jc3K:hover rect,.gvp_button__gvpButtonDown___3Jc3K path,.gvp_button__gvpButtonDown___3Jc3K rect{fill:#00b1ed}@media (hover:none),(hover:on-demand){.gvp_button__gvpButton___3tNWs:hover path,.gvp_button__gvpButton___3tNWs:hover rect{fill:#999}.gvp_button__gvpButtonDown___3Jc3K:hover path,.gvp_button__gvpButtonDown___3Jc3K:hover rect{fill:#00b1ed}}", ""]), t.locals = {
        gvpButton: "gvp_button__gvpButton___3tNWs " + n(288).locals.focused,
        gvpButtonDown: "gvp_button__gvpButtonDown___3Jc3K"
    }
}, function(e, t, n) {
    t = e.exports = n(85)(), t.push([e.id, ".gvp_focused__focused___2OTB7:focus{outline:none;box-shadow:inset 0 0 0 3px #00b1ed}", ""]), t.locals = {
        focused: "gvp_focused__focused___2OTB7"
    }
}, , function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(53),
        o = n(291),
        a = n(50),
        s = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.caption = "", t._showing = null, t
            }
            return r(t, e), Object.defineProperty(t.prototype, "html", {
                get: function() {
                    var e = this;
                    this.textTrack = this.getAttr("textTrack");
                    var t = this.getAttr("value");
                    return this.caption = this.getAttr("caption"), this.updateCaptionWithTime(t), this.setAttr("caption", null), e.parse("div", {
                        class: o.captions,
                        style: {
                            display: this._showing ? "block" : "none"
                        }
                    })
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.getVersion = function() {
                var e = !1;
                if (navigator.userAgent.match(/(iPad|iPhone)/)) {
                    e = !0;
                    var t = navigator.userAgent.match(/OS\s+([\d\_]+)/i),
                        n = t[0];
                    n = n.replace(/_/g, "."), n = n.replace("OS ", ""), n && parseInt(n) >= 10 && (e = !1)
                }
                return e
            }, Object.defineProperty(t.prototype, "showing", {
                get: function() {
                    return this._showing
                },
                set: function(e) {
                    this.getVersion() ? "showing" === this.textTrack.mode ? this.textTrack.mode = "hidden" : this.textTrack.mode = "showing" : this._showing = e, this.invalidate()
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.updateCaptionWithTime = function(e) {
                var t = this._getCaptionForTime(e);
                t ? i(this.element).html(t.html()) : i(this.element).empty()
            }, t.prototype._getCaptionForTime = function(e) {
                for (var t = null, n = i(this.caption).find("p"), r = 0; r < n.length; r++) {
                    var o = i(n[r]),
                        s = a.Utils.timecodeToSeconds(o.attr("begin")),
                        u = a.Utils.timecodeToSeconds(o.attr("end"));
                    if (Math.floor(s) <= e && Math.floor(u) >= e) {
                        t = o;
                        break
                    }
                }
                return t
            }, t
        }(a.Component);
    t.CaptionComponent = s
}, function(e, t, n) {
    var r = n(292);
    "string" == typeof r && (r = [
        [e.id, r, ""]
    ]);
    n(86)(r, {
        singleton: "1",
        attrs: "data-gvp"
    });
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    t = e.exports = n(85)(), t.push([e.id, ".gvp_captionComponent__captions___2Ff34{display:flex;display:-ms-flexbox;justify-content:center;-ms-justify-content:center;-ms-flex-pack:center;font-size:1.2em;line-height:normal;padding:10px;min-height:3em;background-color:#000;color:#fff;text-align:center;box-sizing:content-box}", ""]), t.locals = {
        captions: "gvp_captionComponent__captions___2Ff34"
    }
}, , function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(295),
        o = n(54),
        a = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._showing = null, t._value = null, t
            }
            return r(t, e), t.prototype.refreshed = function() {
                !this._showing
            }, Object.defineProperty(t.prototype, "value", {
                get: function() {
                    return this._value
                },
                set: function(e) {
                    !this._value && e ? (this._showing = !0, this._value = e) : this._value && !e ? (this._showing = !1, this._value = null) : this._value == e ? (this._showing = !1, this._value = null) : this._value = e, this.invalidate(!0)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "html", {
                get: function() {
                    var e = this;
                    return e.parse("div", {
                        style: this._showing ? "" : "display:none",
                        role: "group",
                        class: i.panel
                    }, this._showing ? this.children : "")
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(o.Component);
    t.PanelComponent = a
}, function(e, t, n) {
    var r = n(296);
    "string" == typeof r && (r = [
        [e.id, r, ""]
    ]);
    n(86)(r, {
        singleton: "1",
        attrs: "data-gvp"
    });
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    t = e.exports = n(85)(), t.i(n(287), void 0), t.i(n(297), void 0), t.i(n(288), void 0), t.push([e.id, '.gvp_panelComponent__panel___2HqcH{display:flex;flex-direction:column;-ms-flex:1 1 auto;flex:1 1 auto;white-space:normal;min-height:0;max-height:100%;background:#fff;border-radius:7px;padding:10px;box-sizing:border-box;text-align:left}.gvp_panelComponent__button___17TI3{flex:0 0 auto;-ms-flex:0 0 auto;width:46px;height:46px;padding:4px}.gvp_panelComponent__button___17TI3:hover path{fill:#666}.gvp_panelComponent__utilities___3GxSI{flex:0 0 auto;-ms-flex:0 0 auto;margin-top:10px;font-size:1em;position:relative;display:flex;align-items:center;justify-content:center}.gvp_panelComponent__panel___2HqcH[min-width~="0px"][max-width~="214px"] .gvp_panelComponent__utilities___3GxSI{flex-wrap:wrap}.gvp_panelComponent__field___2wFky{flex:1 1 auto;-ms-flex:1 1 auto;font-size:1em;height:2.4em!important;position:relative}.gvp_panelComponent__icon___1XabC{position:absolute;height:28px;width:28px;fill:#999;top:50%;left:4px;transform:translateY(-50%);z-index:1}.gvp_panelComponent__input___1KQ1I{box-sizing:border-box;width:100%;height:100%;min-width:0;background-color:#fff;border-radius:6px;border:1px solid #d2d2d2;box-shadow:inset -1px 3px 2px -2px rgba(0,0,0,.08);transition:border .3s linear 0s;margin:0!important;padding-left:34px!important}.gvp_panelComponent__input___1KQ1I:focus{border:1px solid #d2d2d2;outline:0}.gvp_panelComponent__body___sDmY8{background-color:#f2f2f2;border-radius:7px;line-height:1.5em;overflow-y:scroll;overflow-x:hidden;flex:1 1 auto;position:relative;text-align:left}.gvp_panelComponent__input___1KQ1I::-webkit-input-placeholder{font-size:1em;font-family:Omnes-ATT-W02,Omnes_att_ii_regular,Helvetica Neue,Helvetica,Arial,sans-serif}.gvp_panelComponent__input___1KQ1I::-moz-placeholder{font-size:1em;font-family:Omnes-ATT-W02,Omnes_att_ii_regular,Helvetica Neue,Helvetica,Arial,sans-serif}.gvp_panelComponent__input___1KQ1I:-ms-input-placeholder{font-size:1em;font-family:Omnes-ATT-W02,Omnes_att_ii_regular,Helvetica Neue,Helvetica,Arial,sans-serif}.gvp_panelComponent__input___1KQ1I:-moz-placeholder{font-size:1em;font-family:Omnes-ATT-W02,Omnes_att_ii_regular,Helvetica Neue,Helvetica,Arial,sans-serif}', ""]), t.locals = {
        panel: "gvp_panelComponent__panel___2HqcH",
        button: "gvp_panelComponent__button___17TI3 " + n(287).locals.gvpButton,
        utilities: "gvp_panelComponent__utilities___3GxSI",
        field: "gvp_panelComponent__field___2wFky",
        icon: "gvp_panelComponent__icon___1XabC",
        input: "gvp_panelComponent__input___1KQ1I " + n(297).locals.font + " " + n(288).locals.focused,
        body: "gvp_panelComponent__body___sDmY8"
    }
}, function(e, t, n) {
    t = e.exports = n(85)(), t.push([e.id, ".gvp_base__base___sHM0b,.gvp_base__font___63oCq{font-family:Omnes-ATT-W02,Omnes_att_ii_regular,Helvetica Neue,Helvetica,Arial,sans-serif}.gvp_base__base___sHM0b{display:block;box-sizing:border-box;-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto;outline:none}", ""]), t.locals = {
        font: "gvp_base__font___63oCq",
        base: "gvp_base__base___sHM0b"
    }
}, , function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(53),
        o = n(300),
        a = n(301),
        s = n(295),
        u = n(303),
        c = n(54),
        l = n(64),
        p = n(76),
        f = n(68),
        d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.captionData = "", t.captions = [], t.thumbIcon = null, t.title = null, t.duration = null, t.date = null, t.update = null, t
            }
            return r(t, e), t.prototype.initialize = function() {
                this.update = this.attributes.update
            }, t.prototype.added = function() {
                var e = this;
                this.setupSearchText(), i(this.element).find(".gvp_transcript_body").on("focusin focusout", function(t) {
                    "focusin" === t.type ? e.isTextInFocus = !0 : "focusout" === t.type && (e.isTextInFocus = !1)
                });
                var t = this;
                i(this.element).find(".gvp_transcript_text").on("click", function(e) {
                    var n = i(this).attr("begin") || "0";
                    t.update && t.update(l.Utils.timecodeToSeconds(n))
                }), this.element.removeAttribute("captiondata")
            }, t.prototype.refreshed = function() {
                this.updateTranscriptWithTime(this.attributes.value)
            }, Object.defineProperty(t.prototype, "html", {
                get: function() {
                    var e = this;
                    return this.thumbIcon = this.getAttr("thumbIcon"), this.title = this.getAttr("printTitle"), this.duration = this.getAttr("duration"), this.date = this.getAttr("date"), e.parse("div", {
                        class: u.column
                    }, e.parse("div", {
                        class: s.body + " gvp_transcript_body",
                        tabindex: "-1"
                    }, e.parse("div", {
                        style: "position:absolute;width:100%;height:100%;box-sizing:border-box;"
                    }, this.loadTranscript(this.attributes.captiondata))), e.parse("div", {
                        class: s.utilities
                    }, e.parse("div", {
                        class: s.field
                    }, e.parse("div", {
                        class: s.icon
                    }, f.FilterIcon.jsx(this.parse)), e.parse("input", {
                        class: s.input + " gvp_transcript_filter",
                        type: "text",
                        tabindex: "-1",
                        placeholder: "Content filter",
                        title: "Content Filter",
                        "report-title": "Transcript Search Button",
                        "aria-label": "Video Transcript Content Filter"
                    })), e.parse("button", {
                        class: a.buttonPrint,
                        "event-click": function(t) {
                            e.printTranscript()
                        },
                        title: "Print Transcript",
                        "report-title": "Transcript Print Button",
                        "aria-label": "Print Transcript",
                        tabindex: "-1"
                    }, " ", p.PrintButton.jsx(this.parse))))
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.loadTranscript = function(e) {
                function t(e, t, r) {
                    e.length && s.push(n.parse("button", {
                        class: a.transcripts + " gvp_transcript_text",
                        title: "Seek Video To Text",
                        "report-title": "Transcript Slider",
                        begin: t,
                        end: r
                    }, e, n.parse("br", null)))
                }
                var n = this;
                if (this.captionData === e) return this.captions;
                this.captionData = e;
                var r = i(e).find("p"),
                    s = [],
                    u = "",
                    c = "",
                    l = "";
                return r.each(function() {
                    var e = i(this).html().replace(/<br>/gi, " ");
                    return e = o.decode(e), e.charAt(0) === e.charAt(0).toUpperCase() && (u.length && t(u, c, l), u = "", c = this.getAttribute("begin"), l = ""), "." !== e.charAt(e.length - 1) ? (u += " " + e, "" == c && (c = this.getAttribute("begin")), void(l = this.getAttribute("end"))) : (t(u.length ? u + " " + e : e, u.length ? c : this.getAttribute("begin"), this.getAttribute("end")), u = "", void(c = ""))
                }), this.captions = s, s
            }, t.prototype.updateTranscriptWithTime = function(e) {
                var t = this;
                i(this.element).find(".gvp_transcript_text").each(function() {
                    var n = i(this);
                    if ("none" !== n.css("display")) {
                        var r = l.Utils.timecodeToSeconds(n.attr("begin")),
                            o = l.Utils.timecodeToSeconds(n.attr("end"));
                        if (e && Math.floor(o) >= e && e >= Math.floor(r)) {
                            if (t.currentActiveText && t.currentActiveText.get(0) == n.get(0)) return;
                            t.currentActiveText && t.currentActiveText.removeClass(a.transcriptsActive), t.currentActiveText = n;
                            n.html();
                            n.addClass(a.transcriptsActive), t.isTextInFocus || t.scrollToElement(this)
                        }
                    }
                })
            }, t.prototype.scrollToElement = function(e) {
                i(this.element).find(".gvp_transcript_body").animate({
                    scrollTop: i(e).position().top - (i(this.element).find(".gvp_transcript_body").height() / 2 - i(e).height() / 2)
                }, 250)
            }, t.prototype.setupSearchText = function() {
                var e = i(this.element).find(".gvp_transcript_text"),
                    t = i(this.element).find(".gvp_transcript_filter"),
                    n = "";
                t.keyup(function() {
                    var t = i(this),
                        r = t.val().toLowerCase().replace(/^\s+|\s+$/g, "");
                    n !== r && (n = r, e.find("strong").contents().unwrap(), e.show(), r.length > 2 && e.each(function() {
                        for (var e = i(this), t = [], n = e.html(), o = new RegExp(r, "gi"); o.exec(n.toLowerCase());) t.push(o.lastIndex);
                        if (t.length) {
                            for (var a = t.length - 1; a >= 0; a--) n = n.slice(0, Number(t[a]) - r.length) + "<strong>" + n.slice(Number(t[a]) - r.length, Number(t[a])) + "</strong>" + n.slice(Number(t[a]));
                            e.html(n), e.show()
                        } else e.hide()
                    }))
                })
            }, t.prototype.printTranscript = function() {
                var e = "https://www.att.com/media/gvp/",
                    t = i("<div/>"),
                    n = i('<div><image src="' + e + 'view/images/logo.png"/></div>'),
                    r = i("<hr class=" + a.printLine1 + "> </hr>"),
                    o = i("<div class=" + a.printdescription + "></div>");
                this.thumbIcon && o.append("<div class=" + a.printdescription1 + '><img src="' + e + 'view/images/thumbnail_background.png" class=' + a.printbackgrimg + '></img><img src="' + this.thumbIcon + '" class=' + a.printthumbIcon + "></img></div>"), o.append("<div class=" + a.printvidouterdiv + "><div class=" + a.printviddis + ">VIDEO TRANSCRIPT</div><div class=" + a.printvidtitle + ">" + this.title + '</div><div style="font-size:12pt;color:#666666;">Total time: ' + this.duration + " &#183; " + this.date + "</div></div>");
                var s = i("<hr class=" + a.printLine2 + "></hr>"),
                    u = i("<div class=" + a.printbody + "></div>");
                u.append("<div class=" + a.printbodymarginbottom + ">To find this video online, enter the title in the site search box at att.com and select Videos & Tutorials from the results filters on the left.</br></br><b>Transcript Start</b></br></br></div>");
                for (var c = 0; c < this.captions.length; c++)
                    if (this.captions[c].tagName && "BUTTON" === this.captions[c].tagName) {
                        var l = this.captions[c].properties.attributes.begin.slice(3),
                            p = l.split(":");
                        l = p[0] + ":" + (1 == Math.round(p[1]).toString().length ? "0" + Math.round(p[1]) : Math.round(p[1]));
                        var f = this.captions[c].children[0].text;
                        u.append('<div style="display:inline;color:#666666;">' + l + ":</div><span>" + f + "</span><br>")
                    }
                u.append("<div class=" + a.printbodymargintop + "><b>Transcript End</b></br></br>* Transcript is provided as a convenience to viewers and does not contain entire content of video. To see entire content, which may include important legal disclosures, please refer to original video. &#169;2012 AT&T Intellectual Property. All rights reserved. AT&#38;T, the AT&#38;T logo, and all other AT&#38;T marks contained herein are trademarks of AT&#38;T Intellectual Property and/or AT&#38;T affiliated companies. All other marks contained herein are the property of their respective owners.</br></br></div>"), t.append(n), t.append(r), t.append(o), t.append(s), t.append(u), this.print(t)
            }, t.prototype.print = function(e) {
                var t = "printer-" + (new Date).getTime(),
                    n = i("<iframe name='" + t + "'>");
                n.css("width", "1px").css("height", "1px").css("position", "absolute").css("left", "-9999px").appendTo(i("body"));
                var r = window.frames[t],
                    o = r.document,
                    a = i("<div>").append(i("style").clone());
                o.open(), o.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'), o.write("<html>"), o.write("<body>"), o.write("<head>"), o.write("<title>"), o.write(document.title), o.write("</title>"), o.write(a.html()), o.write("</head>"), o.write(e.html()), o.write("</body>"), o.write("</html>"), o.close(), r.focus(), r.print(), setTimeout(function() {
                    n.remove()
                }, 6e4)
            }, t
        }(c.Component);
    t.TranscriptComponent = d
}, function(e, t, n) {
    var r;
    (function(e, i) {
        ! function(o) {
            var a = "object" == typeof t && t,
                s = ("object" == typeof e && e && e.exports == a && e, "object" == typeof i && i);
            s.global !== s && s.window !== s || (o = s);
            var u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                c = /[\x01-\x7F]/g,
                l = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
                p = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,
                f = {
                    "­": "shy",
                    "‌": "zwnj",
                    "‍": "zwj",
                    "‎": "lrm",
                    "⁣": "ic",
                    "⁢": "it",
                    "⁡": "af",
                    "‏": "rlm",
                    "​": "ZeroWidthSpace",
                    "⁠": "NoBreak",
                    "̑": "DownBreve",
                    "⃛": "tdot",
                    "⃜": "DotDot",
                    "\t": "Tab",
                    "\n": "NewLine",
                    " ": "puncsp",
                    " ": "MediumSpace",
                    " ": "thinsp",
                    " ": "hairsp",
                    " ": "emsp13",
                    " ": "ensp",
                    " ": "emsp14",
                    " ": "emsp",
                    " ": "numsp",
                    " ": "nbsp",
                    "  ": "ThickSpace",
                    "‾": "oline",
                    _: "lowbar",
                    "‐": "dash",
                    "–": "ndash",
                    "—": "mdash",
                    "―": "horbar",
                    ",": "comma",
                    ";": "semi",
                    "⁏": "bsemi",
                    ":": "colon",
                    "⩴": "Colone",
                    "!": "excl",
                    "¡": "iexcl",
                    "?": "quest",
                    "¿": "iquest",
                    ".": "period",
                    "‥": "nldr",
                    "…": "mldr",
                    "·": "middot",
                    "'": "apos",
                    "‘": "lsquo",
                    "’": "rsquo",
                    "‚": "sbquo",
                    "‹": "lsaquo",
                    "›": "rsaquo",
                    '"': "quot",
                    "“": "ldquo",
                    "”": "rdquo",
                    "„": "bdquo",
                    "«": "laquo",
                    "»": "raquo",
                    "(": "lpar",
                    ")": "rpar",
                    "[": "lsqb",
                    "]": "rsqb",
                    "{": "lcub",
                    "}": "rcub",
                    "⌈": "lceil",
                    "⌉": "rceil",
                    "⌊": "lfloor",
                    "⌋": "rfloor",
                    "⦅": "lopar",
                    "⦆": "ropar",
                    "⦋": "lbrke",
                    "⦌": "rbrke",
                    "⦍": "lbrkslu",
                    "⦎": "rbrksld",
                    "⦏": "lbrksld",
                    "⦐": "rbrkslu",
                    "⦑": "langd",
                    "⦒": "rangd",
                    "⦓": "lparlt",
                    "⦔": "rpargt",
                    "⦕": "gtlPar",
                    "⦖": "ltrPar",
                    "⟦": "lobrk",
                    "⟧": "robrk",
                    "⟨": "lang",
                    "⟩": "rang",
                    "⟪": "Lang",
                    "⟫": "Rang",
                    "⟬": "loang",
                    "⟭": "roang",
                    "❲": "lbbrk",
                    "❳": "rbbrk",
                    "‖": "Vert",
                    "§": "sect",
                    "¶": "para",
                    "@": "commat",
                    "*": "ast",
                    "/": "sol",
                    undefined: null,
                    "&": "amp",
                    "#": "num",
                    "%": "percnt",
                    "‰": "permil",
                    "‱": "pertenk",
                    "†": "dagger",
                    "‡": "Dagger",
                    "•": "bull",
                    "⁃": "hybull",
                    "′": "prime",
                    "″": "Prime",
                    "‴": "tprime",
                    "⁗": "qprime",
                    "‵": "bprime",
                    "⁁": "caret",
                    "`": "grave",
                    "´": "acute",
                    "˜": "tilde",
                    "^": "Hat",
                    "¯": "macr",
                    "˘": "breve",
                    "˙": "dot",
                    "¨": "die",
                    "˚": "ring",
                    "˝": "dblac",
                    "¸": "cedil",
                    "˛": "ogon",
                    "ˆ": "circ",
                    "ˇ": "caron",
                    "°": "deg",
                    "©": "copy",
                    "®": "reg",
                    "℗": "copysr",
                    "℘": "wp",
                    "℞": "rx",
                    "℧": "mho",
                    "℩": "iiota",
                    "←": "larr",
                    "↚": "nlarr",
                    "→": "rarr",
                    "↛": "nrarr",
                    "↑": "uarr",
                    "↓": "darr",
                    "↔": "harr",
                    "↮": "nharr",
                    "↕": "varr",
                    "↖": "nwarr",
                    "↗": "nearr",
                    "↘": "searr",
                    "↙": "swarr",
                    "↝": "rarrw",
                    "↝̸": "nrarrw",
                    "↞": "Larr",
                    "↟": "Uarr",
                    "↠": "Rarr",
                    "↡": "Darr",
                    "↢": "larrtl",
                    "↣": "rarrtl",
                    "↤": "mapstoleft",
                    "↥": "mapstoup",
                    "↦": "map",
                    "↧": "mapstodown",
                    "↩": "larrhk",
                    "↪": "rarrhk",
                    "↫": "larrlp",
                    "↬": "rarrlp",
                    "↭": "harrw",
                    "↰": "lsh",
                    "↱": "rsh",
                    "↲": "ldsh",
                    "↳": "rdsh",
                    "↵": "crarr",
                    "↶": "cularr",
                    "↷": "curarr",
                    "↺": "olarr",
                    "↻": "orarr",
                    "↼": "lharu",
                    "↽": "lhard",
                    "↾": "uharr",
                    "↿": "uharl",
                    "⇀": "rharu",
                    "⇁": "rhard",
                    "⇂": "dharr",
                    "⇃": "dharl",
                    "⇄": "rlarr",
                    "⇅": "udarr",
                    "⇆": "lrarr",
                    "⇇": "llarr",
                    "⇈": "uuarr",
                    "⇉": "rrarr",
                    "⇊": "ddarr",
                    "⇋": "lrhar",
                    "⇌": "rlhar",
                    "⇐": "lArr",
                    "⇍": "nlArr",
                    "⇑": "uArr",
                    "⇒": "rArr",
                    "⇏": "nrArr",
                    "⇓": "dArr",
                    "⇔": "iff",
                    "⇎": "nhArr",
                    "⇕": "vArr",
                    "⇖": "nwArr",
                    "⇗": "neArr",
                    "⇘": "seArr",
                    "⇙": "swArr",
                    "⇚": "lAarr",
                    "⇛": "rAarr",
                    "⇝": "zigrarr",
                    "⇤": "larrb",
                    "⇥": "rarrb",
                    "⇵": "duarr",
                    "⇽": "loarr",
                    "⇾": "roarr",
                    "⇿": "hoarr",
                    "∀": "forall",
                    "∁": "comp",
                    "∂": "part",
                    "∂̸": "npart",
                    "∃": "exist",
                    "∄": "nexist",
                    "∅": "empty",
                    "∇": "Del",
                    "∈": "in",
                    "∉": "notin",
                    "∋": "ni",
                    "∌": "notni",
                    "϶": "bepsi",
                    "∏": "prod",
                    "∐": "coprod",
                    "∑": "sum",
                    "+": "plus",
                    "±": "pm",
                    "÷": "div",
                    "×": "times",
                    "<": "lt",
                    "≮": "nlt",
                    "<⃒": "nvlt",
                    "=": "equals",
                    "≠": "ne",
                    "=⃥": "bne",
                    "⩵": "Equal",
                    ">": "gt",
                    "≯": "ngt",
                    ">⃒": "nvgt",
                    "¬": "not",
                    "|": "vert",
                    "¦": "brvbar",
                    "−": "minus",
                    "∓": "mp",
                    "∔": "plusdo",
                    "⁄": "frasl",
                    "∖": "setmn",
                    "∗": "lowast",
                    "∘": "compfn",
                    "√": "Sqrt",
                    "∝": "prop",
                    "∞": "infin",
                    "∟": "angrt",
                    "∠": "ang",
                    "∠⃒": "nang",
                    "∡": "angmsd",
                    "∢": "angsph",
                    "∣": "mid",
                    "∤": "nmid",
                    "∥": "par",
                    "∦": "npar",
                    "∧": "and",
                    "∨": "or",
                    "∩": "cap",
                    "∩︀": "caps",
                    "∪": "cup",
                    "∪︀": "cups",
                    "∫": "int",
                    "∬": "Int",
                    "∭": "tint",
                    "⨌": "qint",
                    "∮": "oint",
                    "∯": "Conint",
                    "∰": "Cconint",
                    "∱": "cwint",
                    "∲": "cwconint",
                    "∳": "awconint",
                    "∴": "there4",
                    "∵": "becaus",
                    "∶": "ratio",
                    "∷": "Colon",
                    "∸": "minusd",
                    "∺": "mDDot",
                    "∻": "homtht",
                    "∼": "sim",
                    "≁": "nsim",
                    "∼⃒": "nvsim",
                    "∽": "bsim",
                    "∽̱": "race",
                    "∾": "ac",
                    "∾̳": "acE",
                    "∿": "acd",
                    "≀": "wr",
                    "≂": "esim",
                    "≂̸": "nesim",
                    "≃": "sime",
                    "≄": "nsime",
                    "≅": "cong",
                    "≇": "ncong",
                    "≆": "simne",
                    "≈": "ap",
                    "≉": "nap",
                    "≊": "ape",
                    "≋": "apid",
                    "≋̸": "napid",
                    "≌": "bcong",
                    "≍": "CupCap",
                    "≭": "NotCupCap",
                    "≍⃒": "nvap",
                    "≎": "bump",
                    "≎̸": "nbump",
                    "≏": "bumpe",
                    "≏̸": "nbumpe",
                    "≐": "doteq",
                    "≐̸": "nedot",
                    "≑": "eDot",
                    "≒": "efDot",
                    "≓": "erDot",
                    "≔": "colone",
                    "≕": "ecolon",
                    "≖": "ecir",
                    "≗": "cire",
                    "≙": "wedgeq",
                    "≚": "veeeq",
                    "≜": "trie",
                    "≟": "equest",
                    "≡": "equiv",
                    "≢": "nequiv",
                    "≡⃥": "bnequiv",
                    "≤": "le",
                    "≰": "nle",
                    "≤⃒": "nvle",
                    "≥": "ge",
                    "≱": "nge",
                    "≥⃒": "nvge",
                    "≦": "lE",
                    "≦̸": "nlE",
                    "≧": "gE",
                    "≧̸": "ngE",
                    "≨︀": "lvnE",
                    "≨": "lnE",
                    "≩": "gnE",
                    "≩︀": "gvnE",
                    "≪": "ll",
                    "≪̸": "nLtv",
                    "≪⃒": "nLt",
                    "≫": "gg",
                    "≫̸": "nGtv",
                    "≫⃒": "nGt",
                    "≬": "twixt",
                    "≲": "lsim",
                    "≴": "nlsim",
                    "≳": "gsim",
                    "≵": "ngsim",
                    "≶": "lg",
                    "≸": "ntlg",
                    "≷": "gl",
                    "≹": "ntgl",
                    "≺": "pr",
                    "⊀": "npr",
                    "≻": "sc",
                    "⊁": "nsc",
                    "≼": "prcue",
                    "⋠": "nprcue",
                    "≽": "sccue",
                    "⋡": "nsccue",
                    "≾": "prsim",
                    "≿": "scsim",
                    "≿̸": "NotSucceedsTilde",
                    "⊂": "sub",
                    "⊄": "nsub",
                    "⊂⃒": "vnsub",
                    "⊃": "sup",
                    "⊅": "nsup",
                    "⊃⃒": "vnsup",
                    "⊆": "sube",
                    "⊈": "nsube",
                    "⊇": "supe",
                    "⊉": "nsupe",
                    "⊊︀": "vsubne",
                    "⊊": "subne",
                    "⊋︀": "vsupne",
                    "⊋": "supne",
                    "⊍": "cupdot",
                    "⊎": "uplus",
                    "⊏": "sqsub",
                    "⊏̸": "NotSquareSubset",
                    "⊐": "sqsup",
                    "⊐̸": "NotSquareSuperset",
                    "⊑": "sqsube",
                    "⋢": "nsqsube",
                    "⊒": "sqsupe",
                    "⋣": "nsqsupe",
                    "⊓": "sqcap",
                    "⊓︀": "sqcaps",
                    "⊔": "sqcup",
                    "⊔︀": "sqcups",
                    "⊕": "oplus",
                    "⊖": "ominus",
                    "⊗": "otimes",
                    "⊘": "osol",
                    "⊙": "odot",
                    "⊚": "ocir",
                    "⊛": "oast",
                    "⊝": "odash",
                    "⊞": "plusb",
                    "⊟": "minusb",
                    "⊠": "timesb",
                    "⊡": "sdotb",
                    "⊢": "vdash",
                    "⊬": "nvdash",
                    "⊣": "dashv",
                    "⊤": "top",
                    "⊥": "bot",
                    "⊧": "models",
                    "⊨": "vDash",
                    "⊭": "nvDash",
                    "⊩": "Vdash",
                    "⊮": "nVdash",
                    "⊪": "Vvdash",
                    "⊫": "VDash",
                    "⊯": "nVDash",
                    "⊰": "prurel",
                    "⊲": "vltri",
                    "⋪": "nltri",
                    "⊳": "vrtri",
                    "⋫": "nrtri",
                    "⊴": "ltrie",
                    "⋬": "nltrie",
                    "⊴⃒": "nvltrie",
                    "⊵": "rtrie",
                    "⋭": "nrtrie",
                    "⊵⃒": "nvrtrie",
                    "⊶": "origof",
                    "⊷": "imof",
                    "⊸": "mumap",
                    "⊹": "hercon",
                    "⊺": "intcal",
                    "⊻": "veebar",
                    "⊽": "barvee",
                    "⊾": "angrtvb",
                    "⊿": "lrtri",
                    "⋀": "Wedge",
                    "⋁": "Vee",
                    "⋂": "xcap",
                    "⋃": "xcup",
                    "⋄": "diam",
                    "⋅": "sdot",
                    "⋆": "Star",
                    "⋇": "divonx",
                    "⋈": "bowtie",
                    "⋉": "ltimes",
                    "⋊": "rtimes",
                    "⋋": "lthree",
                    "⋌": "rthree",
                    "⋍": "bsime",
                    "⋎": "cuvee",
                    "⋏": "cuwed",
                    "⋐": "Sub",
                    "⋑": "Sup",
                    "⋒": "Cap",
                    "⋓": "Cup",
                    "⋔": "fork",
                    "⋕": "epar",
                    "⋖": "ltdot",
                    "⋗": "gtdot",
                    "⋘": "Ll",
                    "⋘̸": "nLl",
                    "⋙": "Gg",
                    "⋙̸": "nGg",
                    "⋚︀": "lesg",
                    "⋚": "leg",
                    "⋛": "gel",
                    "⋛︀": "gesl",
                    "⋞": "cuepr",
                    "⋟": "cuesc",
                    "⋦": "lnsim",
                    "⋧": "gnsim",
                    "⋨": "prnsim",
                    "⋩": "scnsim",
                    "⋮": "vellip",
                    "⋯": "ctdot",
                    "⋰": "utdot",
                    "⋱": "dtdot",
                    "⋲": "disin",
                    "⋳": "isinsv",
                    "⋴": "isins",
                    "⋵": "isindot",
                    "⋵̸": "notindot",
                    "⋶": "notinvc",
                    "⋷": "notinvb",
                    "⋹": "isinE",
                    "⋹̸": "notinE",
                    "⋺": "nisd",
                    "⋻": "xnis",
                    "⋼": "nis",
                    "⋽": "notnivc",
                    "⋾": "notnivb",
                    "⌅": "barwed",
                    "⌆": "Barwed",
                    "⌌": "drcrop",
                    "⌍": "dlcrop",
                    "⌎": "urcrop",
                    "⌏": "ulcrop",
                    "⌐": "bnot",
                    "⌒": "profline",
                    "⌓": "profsurf",
                    "⌕": "telrec",
                    "⌖": "target",
                    "⌜": "ulcorn",
                    "⌝": "urcorn",
                    "⌞": "dlcorn",
                    "⌟": "drcorn",
                    "⌢": "frown",
                    "⌣": "smile",
                    "⌭": "cylcty",
                    "⌮": "profalar",
                    "⌶": "topbot",
                    "⌽": "ovbar",
                    "⌿": "solbar",
                    "⍼": "angzarr",
                    "⎰": "lmoust",
                    "⎱": "rmoust",
                    "⎴": "tbrk",
                    "⎵": "bbrk",
                    "⎶": "bbrktbrk",
                    "⏜": "OverParenthesis",
                    "⏝": "UnderParenthesis",
                    "⏞": "OverBrace",
                    "⏟": "UnderBrace",
                    "⏢": "trpezium",
                    "⏧": "elinters",
                    "␣": "blank",
                    "─": "boxh",
                    "│": "boxv",
                    "┌": "boxdr",
                    "┐": "boxdl",
                    "└": "boxur",
                    "┘": "boxul",
                    "├": "boxvr",
                    "┤": "boxvl",
                    "┬": "boxhd",
                    "┴": "boxhu",
                    "┼": "boxvh",
                    "═": "boxH",
                    "║": "boxV",
                    "╒": "boxdR",
                    "╓": "boxDr",
                    "╔": "boxDR",
                    "╕": "boxdL",
                    "╖": "boxDl",
                    "╗": "boxDL",
                    "╘": "boxuR",
                    "╙": "boxUr",
                    "╚": "boxUR",
                    "╛": "boxuL",
                    "╜": "boxUl",
                    "╝": "boxUL",
                    "╞": "boxvR",
                    "╟": "boxVr",
                    "╠": "boxVR",
                    "╡": "boxvL",
                    "╢": "boxVl",
                    "╣": "boxVL",
                    "╤": "boxHd",
                    "╥": "boxhD",
                    "╦": "boxHD",
                    "╧": "boxHu",
                    "╨": "boxhU",
                    "╩": "boxHU",
                    "╪": "boxvH",
                    "╫": "boxVh",
                    "╬": "boxVH",
                    "▀": "uhblk",
                    "▄": "lhblk",
                    "█": "block",
                    "░": "blk14",
                    "▒": "blk12",
                    "▓": "blk34",
                    "□": "squ",
                    "▪": "squf",
                    "▫": "EmptyVerySmallSquare",
                    "▭": "rect",
                    "▮": "marker",
                    "▱": "fltns",
                    "△": "xutri",
                    "▴": "utrif",
                    "▵": "utri",
                    "▸": "rtrif",
                    "▹": "rtri",
                    "▽": "xdtri",
                    "▾": "dtrif",
                    "▿": "dtri",
                    "◂": "ltrif",
                    "◃": "ltri",
                    "◊": "loz",
                    "○": "cir",
                    "◬": "tridot",
                    "◯": "xcirc",
                    "◸": "ultri",
                    "◹": "urtri",
                    "◺": "lltri",
                    "◻": "EmptySmallSquare",
                    "◼": "FilledSmallSquare",
                    "★": "starf",
                    "☆": "star",
                    "☎": "phone",
                    "♀": "female",
                    "♂": "male",
                    "♠": "spades",
                    "♣": "clubs",
                    "♥": "hearts",
                    "♦": "diams",
                    "♪": "sung",
                    "✓": "check",
                    "✗": "cross",
                    "✠": "malt",
                    "✶": "sext",
                    "❘": "VerticalSeparator",
                    "⟈": "bsolhsub",
                    "⟉": "suphsol",
                    "⟵": "xlarr",
                    "⟶": "xrarr",
                    "⟷": "xharr",
                    "⟸": "xlArr",
                    "⟹": "xrArr",
                    "⟺": "xhArr",
                    "⟼": "xmap",
                    "⟿": "dzigrarr",
                    "⤂": "nvlArr",
                    "⤃": "nvrArr",
                    "⤄": "nvHarr",
                    "⤅": "Map",
                    "⤌": "lbarr",
                    "⤍": "rbarr",
                    "⤎": "lBarr",
                    "⤏": "rBarr",
                    "⤐": "RBarr",
                    "⤑": "DDotrahd",
                    "⤒": "UpArrowBar",
                    "⤓": "DownArrowBar",
                    "⤖": "Rarrtl",
                    "⤙": "latail",
                    "⤚": "ratail",
                    "⤛": "lAtail",
                    "⤜": "rAtail",
                    "⤝": "larrfs",
                    "⤞": "rarrfs",
                    "⤟": "larrbfs",
                    "⤠": "rarrbfs",
                    "⤣": "nwarhk",
                    "⤤": "nearhk",
                    "⤥": "searhk",
                    "⤦": "swarhk",
                    "⤧": "nwnear",
                    "⤨": "toea",
                    "⤩": "tosa",
                    "⤪": "swnwar",
                    "⤳": "rarrc",
                    "⤳̸": "nrarrc",
                    "⤵": "cudarrr",
                    "⤶": "ldca",
                    "⤷": "rdca",
                    "⤸": "cudarrl",
                    "⤹": "larrpl",
                    "⤼": "curarrm",
                    "⤽": "cularrp",
                    "⥅": "rarrpl",
                    "⥈": "harrcir",
                    "⥉": "Uarrocir",
                    "⥊": "lurdshar",
                    "⥋": "ldrushar",
                    "⥎": "LeftRightVector",
                    "⥏": "RightUpDownVector",
                    "⥐": "DownLeftRightVector",
                    "⥑": "LeftUpDownVector",
                    "⥒": "LeftVectorBar",
                    "⥓": "RightVectorBar",
                    "⥔": "RightUpVectorBar",
                    "⥕": "RightDownVectorBar",
                    "⥖": "DownLeftVectorBar",
                    "⥗": "DownRightVectorBar",
                    "⥘": "LeftUpVectorBar",
                    "⥙": "LeftDownVectorBar",
                    "⥚": "LeftTeeVector",
                    "⥛": "RightTeeVector",
                    "⥜": "RightUpTeeVector",
                    "⥝": "RightDownTeeVector",
                    "⥞": "DownLeftTeeVector",
                    "⥟": "DownRightTeeVector",
                    "⥠": "LeftUpTeeVector",
                    "⥡": "LeftDownTeeVector",
                    "⥢": "lHar",
                    "⥣": "uHar",
                    "⥤": "rHar",
                    "⥥": "dHar",
                    "⥦": "luruhar",
                    "⥧": "ldrdhar",
                    "⥨": "ruluhar",
                    "⥩": "rdldhar",
                    "⥪": "lharul",
                    "⥫": "llhard",
                    "⥬": "rharul",
                    "⥭": "lrhard",
                    "⥮": "udhar",
                    "⥯": "duhar",
                    "⥰": "RoundImplies",
                    "⥱": "erarr",
                    "⥲": "simrarr",
                    "⥳": "larrsim",
                    "⥴": "rarrsim",
                    "⥵": "rarrap",
                    "⥶": "ltlarr",
                    "⥸": "gtrarr",
                    "⥹": "subrarr",
                    "⥻": "suplarr",
                    "⥼": "lfisht",
                    "⥽": "rfisht",
                    "⥾": "ufisht",
                    "⥿": "dfisht",
                    "⦚": "vzigzag",
                    "⦜": "vangrt",
                    "⦝": "angrtvbd",
                    "⦤": "ange",
                    "⦥": "range",
                    "⦦": "dwangle",
                    "⦧": "uwangle",
                    "⦨": "angmsdaa",
                    "⦩": "angmsdab",
                    "⦪": "angmsdac",
                    "⦫": "angmsdad",
                    "⦬": "angmsdae",
                    "⦭": "angmsdaf",
                    "⦮": "angmsdag",
                    "⦯": "angmsdah",
                    "⦰": "bemptyv",
                    "⦱": "demptyv",
                    "⦲": "cemptyv",
                    "⦳": "raemptyv",
                    "⦴": "laemptyv",
                    "⦵": "ohbar",
                    "⦶": "omid",
                    "⦷": "opar",
                    "⦹": "operp",
                    "⦻": "olcross",
                    "⦼": "odsold",
                    "⦾": "olcir",
                    "⦿": "ofcir",
                    "⧀": "olt",
                    "⧁": "ogt",
                    "⧂": "cirscir",
                    "⧃": "cirE",
                    "⧄": "solb",
                    "⧅": "bsolb",
                    "⧉": "boxbox",
                    "⧍": "trisb",
                    "⧎": "rtriltri",
                    "⧏": "LeftTriangleBar",
                    "⧏̸": "NotLeftTriangleBar",
                    "⧐": "RightTriangleBar",
                    "⧐̸": "NotRightTriangleBar",
                    "⧜": "iinfin",
                    "⧝": "infintie",
                    "⧞": "nvinfin",
                    "⧣": "eparsl",
                    "⧤": "smeparsl",
                    "⧥": "eqvparsl",
                    "⧫": "lozf",
                    "⧴": "RuleDelayed",
                    "⧶": "dsol",
                    "⨀": "xodot",
                    "⨁": "xoplus",
                    "⨂": "xotime",
                    "⨄": "xuplus",
                    "⨆": "xsqcup",
                    "⨍": "fpartint",
                    "⨐": "cirfnint",
                    "⨑": "awint",
                    "⨒": "rppolint",
                    "⨓": "scpolint",
                    "⨔": "npolint",
                    "⨕": "pointint",
                    "⨖": "quatint",
                    "⨗": "intlarhk",
                    "⨢": "pluscir",
                    "⨣": "plusacir",
                    "⨤": "simplus",
                    "⨥": "plusdu",
                    "⨦": "plussim",
                    "⨧": "plustwo",
                    "⨩": "mcomma",
                    "⨪": "minusdu",
                    "⨭": "loplus",
                    "⨮": "roplus",
                    "⨯": "Cross",
                    "⨰": "timesd",
                    "⨱": "timesbar",
                    "⨳": "smashp",
                    "⨴": "lotimes",
                    "⨵": "rotimes",
                    "⨶": "otimesas",
                    "⨷": "Otimes",
                    "⨸": "odiv",
                    "⨹": "triplus",
                    "⨺": "triminus",
                    "⨻": "tritime",
                    "⨼": "iprod",
                    "⨿": "amalg",
                    "⩀": "capdot",
                    "⩂": "ncup",
                    "⩃": "ncap",
                    "⩄": "capand",
                    "⩅": "cupor",
                    "⩆": "cupcap",
                    "⩇": "capcup",
                    "⩈": "cupbrcap",
                    "⩉": "capbrcup",
                    "⩊": "cupcup",
                    "⩋": "capcap",
                    "⩌": "ccups",
                    "⩍": "ccaps",
                    "⩐": "ccupssm",
                    "⩓": "And",
                    "⩔": "Or",
                    "⩕": "andand",
                    "⩖": "oror",
                    "⩗": "orslope",
                    "⩘": "andslope",
                    "⩚": "andv",
                    "⩛": "orv",
                    "⩜": "andd",
                    "⩝": "ord",
                    "⩟": "wedbar",
                    "⩦": "sdote",
                    "⩪": "simdot",
                    "⩭": "congdot",
                    "⩭̸": "ncongdot",
                    "⩮": "easter",
                    "⩯": "apacir",
                    "⩰": "apE",
                    "⩰̸": "napE",
                    "⩱": "eplus",
                    "⩲": "pluse",
                    "⩳": "Esim",
                    "⩷": "eDDot",
                    "⩸": "equivDD",
                    "⩹": "ltcir",
                    "⩺": "gtcir",
                    "⩻": "ltquest",
                    "⩼": "gtquest",
                    "⩽": "les",
                    "⩽̸": "nles",
                    "⩾": "ges",
                    "⩾̸": "nges",
                    "⩿": "lesdot",
                    "⪀": "gesdot",
                    "⪁": "lesdoto",
                    "⪂": "gesdoto",
                    "⪃": "lesdotor",
                    "⪄": "gesdotol",
                    "⪅": "lap",
                    "⪆": "gap",
                    "⪇": "lne",
                    "⪈": "gne",
                    "⪉": "lnap",
                    "⪊": "gnap",
                    "⪋": "lEg",
                    "⪌": "gEl",
                    "⪍": "lsime",
                    "⪎": "gsime",
                    "⪏": "lsimg",
                    "⪐": "gsiml",
                    "⪑": "lgE",
                    "⪒": "glE",
                    "⪓": "lesges",
                    "⪔": "gesles",
                    "⪕": "els",
                    "⪖": "egs",
                    "⪗": "elsdot",
                    "⪘": "egsdot",
                    "⪙": "el",
                    "⪚": "eg",
                    "⪝": "siml",
                    "⪞": "simg",
                    "⪟": "simlE",
                    "⪠": "simgE",
                    "⪡": "LessLess",
                    "⪡̸": "NotNestedLessLess",
                    "⪢": "GreaterGreater",
                    "⪢̸": "NotNestedGreaterGreater",
                    "⪤": "glj",
                    "⪥": "gla",
                    "⪦": "ltcc",
                    "⪧": "gtcc",
                    "⪨": "lescc",
                    "⪩": "gescc",
                    "⪪": "smt",
                    "⪫": "lat",
                    "⪬": "smte",
                    "⪬︀": "smtes",
                    "⪭": "late",
                    "⪭︀": "lates",
                    "⪮": "bumpE",
                    "⪯": "pre",
                    "⪯̸": "npre",
                    "⪰": "sce",
                    "⪰̸": "nsce",
                    "⪳": "prE",
                    "⪴": "scE",
                    "⪵": "prnE",
                    "⪶": "scnE",
                    "⪷": "prap",
                    "⪸": "scap",
                    "⪹": "prnap",
                    "⪺": "scnap",
                    "⪻": "Pr",
                    "⪼": "Sc",
                    "⪽": "subdot",
                    "⪾": "supdot",
                    "⪿": "subplus",
                    "⫀": "supplus",
                    "⫁": "submult",
                    "⫂": "supmult",
                    "⫃": "subedot",
                    "⫄": "supedot",
                    "⫅": "subE",
                    "⫅̸": "nsubE",
                    "⫆": "supE",
                    "⫆̸": "nsupE",
                    "⫇": "subsim",
                    "⫈": "supsim",
                    "⫋︀": "vsubnE",
                    "⫋": "subnE",
                    "⫌︀": "vsupnE",
                    "⫌": "supnE",
                    "⫏": "csub",
                    "⫐": "csup",
                    "⫑": "csube",
                    "⫒": "csupe",
                    "⫓": "subsup",
                    "⫔": "supsub",
                    "⫕": "subsub",
                    "⫖": "supsup",
                    "⫗": "suphsub",
                    "⫘": "supdsub",
                    "⫙": "forkv",
                    "⫚": "topfork",
                    "⫛": "mlcp",
                    "⫤": "Dashv",
                    "⫦": "Vdashl",
                    "⫧": "Barv",
                    "⫨": "vBar",
                    "⫩": "vBarv",
                    "⫫": "Vbar",
                    "⫬": "Not",
                    "⫭": "bNot",
                    "⫮": "rnmid",
                    "⫯": "cirmid",
                    "⫰": "midcir",
                    "⫱": "topcir",
                    "⫲": "nhpar",
                    "⫳": "parsim",
                    "⫽": "parsl",
                    "⫽⃥": "nparsl",
                    "♭": "flat",
                    "♮": "natur",
                    "♯": "sharp",
                    "¤": "curren",
                    "¢": "cent",
                    $: "dollar",
                    "£": "pound",
                    "¥": "yen",
                    "€": "euro",
                    "¹": "sup1",
                    "½": "half",
                    "⅓": "frac13",
                    "¼": "frac14",
                    "⅕": "frac15",
                    "⅙": "frac16",
                    "⅛": "frac18",
                    "²": "sup2",
                    "⅔": "frac23",
                    "⅖": "frac25",
                    "³": "sup3",
                    "¾": "frac34",
                    "⅗": "frac35",
                    "⅜": "frac38",
                    "⅘": "frac45",
                    "⅚": "frac56",
                    "⅝": "frac58",
                    "⅞": "frac78",
                    "𝒶": "ascr",
                    "𝕒": "aopf",
                    "𝔞": "afr",
                    "𝔸": "Aopf",
                    "𝔄": "Afr",
                    "𝒜": "Ascr",
                    "ª": "ordf",
                    "á": "aacute",
                    "Á": "Aacute",
                    "à": "agrave",
                    "À": "Agrave",
                    "ă": "abreve",
                    "Ă": "Abreve",
                    "â": "acirc",
                    "Â": "Acirc",
                    "å": "aring",
                    "Å": "angst",
                    "ä": "auml",
                    "Ä": "Auml",
                    "ã": "atilde",
                    "Ã": "Atilde",
                    "ą": "aogon",
                    "Ą": "Aogon",
                    "ā": "amacr",
                    "Ā": "Amacr",
                    "æ": "aelig",
                    "Æ": "AElig",
                    "𝒷": "bscr",
                    "𝕓": "bopf",
                    "𝔟": "bfr",
                    "𝔹": "Bopf",
                    "ℬ": "Bscr",
                    "𝔅": "Bfr",
                    "𝔠": "cfr",
                    "𝒸": "cscr",
                    "𝕔": "copf",
                    "ℭ": "Cfr",
                    "𝒞": "Cscr",
                    "ℂ": "Copf",
                    "ć": "cacute",
                    "Ć": "Cacute",
                    "ĉ": "ccirc",
                    "Ĉ": "Ccirc",
                    "č": "ccaron",
                    "Č": "Ccaron",
                    "ċ": "cdot",
                    "Ċ": "Cdot",
                    "ç": "ccedil",
                    "Ç": "Ccedil",
                    "℅": "incare",
                    "𝔡": "dfr",
                    "ⅆ": "dd",
                    "𝕕": "dopf",
                    "𝒹": "dscr",
                    "𝒟": "Dscr",
                    "𝔇": "Dfr",
                    "ⅅ": "DD",
                    "𝔻": "Dopf",
                    "ď": "dcaron",
                    "Ď": "Dcaron",
                    "đ": "dstrok",
                    "Đ": "Dstrok",
                    "ð": "eth",
                    "Ð": "ETH",
                    "ⅇ": "ee",
                    "ℯ": "escr",
                    "𝔢": "efr",
                    "𝕖": "eopf",
                    "ℰ": "Escr",
                    "𝔈": "Efr",
                    "𝔼": "Eopf",
                    "é": "eacute",
                    "É": "Eacute",
                    "è": "egrave",
                    "È": "Egrave",
                    "ê": "ecirc",
                    "Ê": "Ecirc",
                    "ě": "ecaron",
                    "Ě": "Ecaron",
                    "ë": "euml",
                    "Ë": "Euml",
                    "ė": "edot",
                    "Ė": "Edot",
                    "ę": "eogon",
                    "Ę": "Eogon",
                    "ē": "emacr",
                    "Ē": "Emacr",
                    "𝔣": "ffr",
                    "𝕗": "fopf",
                    "𝒻": "fscr",
                    "𝔉": "Ffr",
                    "𝔽": "Fopf",
                    "ℱ": "Fscr",
                    "ﬀ": "fflig",
                    "ﬃ": "ffilig",
                    "ﬄ": "ffllig",
                    "ﬁ": "filig",
                    fj: "fjlig",
                    "ﬂ": "fllig",
                    "ƒ": "fnof",
                    "ℊ": "gscr",
                    "𝕘": "gopf",
                    "𝔤": "gfr",
                    "𝒢": "Gscr",
                    "𝔾": "Gopf",
                    "𝔊": "Gfr",
                    "ǵ": "gacute",
                    "ğ": "gbreve",
                    "Ğ": "Gbreve",
                    "ĝ": "gcirc",
                    "Ĝ": "Gcirc",
                    "ġ": "gdot",
                    "Ġ": "Gdot",
                    "Ģ": "Gcedil",
                    "𝔥": "hfr",
                    "ℎ": "planckh",
                    "𝒽": "hscr",
                    "𝕙": "hopf",
                    "ℋ": "Hscr",
                    "ℌ": "Hfr",
                    "ℍ": "Hopf",
                    "ĥ": "hcirc",
                    "Ĥ": "Hcirc",
                    "ℏ": "hbar",
                    "ħ": "hstrok",
                    "Ħ": "Hstrok",
                    "𝕚": "iopf",
                    "𝔦": "ifr",
                    "𝒾": "iscr",
                    "ⅈ": "ii",
                    "𝕀": "Iopf",
                    "ℐ": "Iscr",
                    "ℑ": "Im",
                    "í": "iacute",
                    "Í": "Iacute",
                    "ì": "igrave",
                    "Ì": "Igrave",
                    "î": "icirc",
                    "Î": "Icirc",
                    "ï": "iuml",
                    "Ï": "Iuml",
                    "ĩ": "itilde",
                    "Ĩ": "Itilde",
                    "İ": "Idot",
                    "į": "iogon",
                    "Į": "Iogon",
                    "ī": "imacr",
                    "Ī": "Imacr",
                    "ĳ": "ijlig",
                    "Ĳ": "IJlig",
                    "ı": "imath",
                    "𝒿": "jscr",
                    "𝕛": "jopf",
                    "𝔧": "jfr",
                    "𝒥": "Jscr",
                    "𝔍": "Jfr",
                    "𝕁": "Jopf",
                    "ĵ": "jcirc",
                    "Ĵ": "Jcirc",
                    "ȷ": "jmath",
                    "𝕜": "kopf",
                    "𝓀": "kscr",
                    "𝔨": "kfr",
                    "𝒦": "Kscr",
                    "𝕂": "Kopf",
                    "𝔎": "Kfr",
                    "ķ": "kcedil",
                    "Ķ": "Kcedil",
                    "𝔩": "lfr",
                    "𝓁": "lscr",
                    "ℓ": "ell",
                    "𝕝": "lopf",
                    "ℒ": "Lscr",
                    "𝔏": "Lfr",
                    "𝕃": "Lopf",
                    "ĺ": "lacute",
                    "Ĺ": "Lacute",
                    "ľ": "lcaron",
                    "Ľ": "Lcaron",
                    "ļ": "lcedil",
                    "Ļ": "Lcedil",
                    "ł": "lstrok",
                    "Ł": "Lstrok",
                    "ŀ": "lmidot",
                    "Ŀ": "Lmidot",
                    "𝔪": "mfr",
                    "𝕞": "mopf",
                    "𝓂": "mscr",
                    "𝔐": "Mfr",
                    "𝕄": "Mopf",
                    "ℳ": "Mscr",
                    "𝔫": "nfr",
                    "𝕟": "nopf",
                    "𝓃": "nscr",
                    "ℕ": "Nopf",
                    "𝒩": "Nscr",
                    "𝔑": "Nfr",
                    "ń": "nacute",
                    "Ń": "Nacute",
                    "ň": "ncaron",
                    "Ň": "Ncaron",
                    "ñ": "ntilde",
                    "Ñ": "Ntilde",
                    "ņ": "ncedil",
                    "Ņ": "Ncedil",
                    "№": "numero",
                    "ŋ": "eng",
                    "Ŋ": "ENG",
                    "𝕠": "oopf",
                    "𝔬": "ofr",
                    "ℴ": "oscr",
                    "𝒪": "Oscr",
                    "𝔒": "Ofr",
                    "𝕆": "Oopf",
                    "º": "ordm",
                    "ó": "oacute",
                    "Ó": "Oacute",
                    "ò": "ograve",
                    "Ò": "Ograve",
                    "ô": "ocirc",
                    "Ô": "Ocirc",
                    "ö": "ouml",
                    "Ö": "Ouml",
                    "ő": "odblac",
                    "Ő": "Odblac",
                    "õ": "otilde",
                    "Õ": "Otilde",
                    "ø": "oslash",
                    "Ø": "Oslash",
                    "ō": "omacr",
                    "Ō": "Omacr",
                    "œ": "oelig",
                    "Œ": "OElig",
                    "𝔭": "pfr",
                    "𝓅": "pscr",
                    "𝕡": "popf",
                    "ℙ": "Popf",
                    "𝔓": "Pfr",
                    "𝒫": "Pscr",
                    "𝕢": "qopf",
                    "𝔮": "qfr",
                    "𝓆": "qscr",
                    "𝒬": "Qscr",
                    "𝔔": "Qfr",
                    "ℚ": "Qopf",
                    "ĸ": "kgreen",
                    "𝔯": "rfr",
                    "𝕣": "ropf",
                    "𝓇": "rscr",
                    "ℛ": "Rscr",
                    "ℜ": "Re",
                    "ℝ": "Ropf",
                    "ŕ": "racute",
                    "Ŕ": "Racute",
                    "ř": "rcaron",
                    "Ř": "Rcaron",
                    "ŗ": "rcedil",
                    "Ŗ": "Rcedil",
                    "𝕤": "sopf",
                    "𝓈": "sscr",
                    "𝔰": "sfr",
                    "𝕊": "Sopf",
                    "𝔖": "Sfr",
                    "𝒮": "Sscr",
                    "Ⓢ": "oS",
                    "ś": "sacute",
                    "Ś": "Sacute",
                    "ŝ": "scirc",
                    "Ŝ": "Scirc",
                    "š": "scaron",
                    "Š": "Scaron",
                    "ş": "scedil",
                    "Ş": "Scedil",
                    "ß": "szlig",
                    "𝔱": "tfr",
                    "𝓉": "tscr",
                    "𝕥": "topf",
                    "𝒯": "Tscr",
                    "𝔗": "Tfr",
                    "𝕋": "Topf",
                    "ť": "tcaron",
                    "Ť": "Tcaron",
                    "ţ": "tcedil",
                    "Ţ": "Tcedil",
                    "™": "trade",
                    "ŧ": "tstrok",
                    "Ŧ": "Tstrok",
                    "𝓊": "uscr",
                    "𝕦": "uopf",
                    "𝔲": "ufr",
                    "𝕌": "Uopf",
                    "𝔘": "Ufr",
                    "𝒰": "Uscr",
                    "ú": "uacute",
                    "Ú": "Uacute",
                    "ù": "ugrave",
                    "Ù": "Ugrave",
                    "ŭ": "ubreve",
                    "Ŭ": "Ubreve",
                    "û": "ucirc",
                    "Û": "Ucirc",
                    "ů": "uring",
                    "Ů": "Uring",
                    "ü": "uuml",
                    "Ü": "Uuml",
                    "ű": "udblac",
                    "Ű": "Udblac",
                    "ũ": "utilde",
                    "Ũ": "Utilde",
                    "ų": "uogon",
                    "Ų": "Uogon",
                    "ū": "umacr",
                    "Ū": "Umacr",
                    "𝔳": "vfr",
                    "𝕧": "vopf",
                    "𝓋": "vscr",
                    "𝔙": "Vfr",
                    "𝕍": "Vopf",
                    "𝒱": "Vscr",
                    "𝕨": "wopf",
                    "𝓌": "wscr",
                    "𝔴": "wfr",
                    "𝒲": "Wscr",
                    "𝕎": "Wopf",
                    "𝔚": "Wfr",
                    "ŵ": "wcirc",
                    "Ŵ": "Wcirc",
                    "𝔵": "xfr",
                    "𝓍": "xscr",
                    "𝕩": "xopf",
                    "𝕏": "Xopf",
                    "𝔛": "Xfr",
                    "𝒳": "Xscr",
                    "𝔶": "yfr",
                    "𝓎": "yscr",
                    "𝕪": "yopf",
                    "𝒴": "Yscr",
                    "𝔜": "Yfr",
                    "𝕐": "Yopf",
                    "ý": "yacute",
                    "Ý": "Yacute",
                    "ŷ": "ycirc",
                    "Ŷ": "Ycirc",
                    "ÿ": "yuml",
                    "Ÿ": "Yuml",
                    "𝓏": "zscr",
                    "𝔷": "zfr",
                    "𝕫": "zopf",
                    "ℨ": "Zfr",
                    "ℤ": "Zopf",
                    "𝒵": "Zscr",
                    "ź": "zacute",
                    "Ź": "Zacute",
                    "ž": "zcaron",
                    "Ž": "Zcaron",
                    "ż": "zdot",
                    "Ż": "Zdot",
                    "Ƶ": "imped",
                    "þ": "thorn",
                    "Þ": "THORN",
                    "ŉ": "napos",
                    "α": "alpha",
                    "Α": "Alpha",
                    "β": "beta",
                    "Β": "Beta",
                    "γ": "gamma",
                    "Γ": "Gamma",
                    "δ": "delta",
                    "Δ": "Delta",
                    "ε": "epsi",
                    "ϵ": "epsiv",
                    "Ε": "Epsilon",
                    "ϝ": "gammad",
                    "Ϝ": "Gammad",
                    "ζ": "zeta",
                    "Ζ": "Zeta",
                    "η": "eta",
                    "Η": "Eta",
                    "θ": "theta",
                    "ϑ": "thetav",
                    "Θ": "Theta",
                    "ι": "iota",
                    "Ι": "Iota",
                    "κ": "kappa",
                    "ϰ": "kappav",
                    "Κ": "Kappa",
                    "λ": "lambda",
                    "Λ": "Lambda",
                    "μ": "mu",
                    "µ": "micro",
                    "Μ": "Mu",
                    "ν": "nu",
                    "Ν": "Nu",
                    "ξ": "xi",
                    "Ξ": "Xi",
                    "ο": "omicron",
                    "Ο": "Omicron",
                    "π": "pi",
                    "ϖ": "piv",
                    "Π": "Pi",
                    "ρ": "rho",
                    "ϱ": "rhov",
                    "Ρ": "Rho",
                    "σ": "sigma",
                    "Σ": "Sigma",
                    "ς": "sigmaf",
                    "τ": "tau",
                    "Τ": "Tau",
                    "υ": "upsi",
                    "Υ": "Upsilon",
                    "ϒ": "Upsi",
                    "φ": "phi",
                    "ϕ": "phiv",
                    "Φ": "Phi",
                    "χ": "chi",
                    "Χ": "Chi",
                    "ψ": "psi",
                    "Ψ": "Psi",
                    "ω": "omega",
                    "Ω": "ohm",
                    "а": "acy",
                    "А": "Acy",
                    "б": "bcy",
                    "Б": "Bcy",
                    "в": "vcy",
                    "В": "Vcy",
                    "г": "gcy",
                    "Г": "Gcy",
                    "ѓ": "gjcy",
                    "Ѓ": "GJcy",
                    "д": "dcy",
                    "Д": "Dcy",
                    "ђ": "djcy",
                    "Ђ": "DJcy",
                    "е": "iecy",
                    "Е": "IEcy",
                    "ё": "iocy",
                    "Ё": "IOcy",
                    "є": "jukcy",
                    "Є": "Jukcy",
                    "ж": "zhcy",
                    "Ж": "ZHcy",
                    "з": "zcy",
                    "З": "Zcy",
                    "ѕ": "dscy",
                    "Ѕ": "DScy",
                    "и": "icy",
                    "И": "Icy",
                    "і": "iukcy",
                    "І": "Iukcy",
                    "ї": "yicy",
                    "Ї": "YIcy",
                    "й": "jcy",
                    "Й": "Jcy",
                    "ј": "jsercy",
                    "Ј": "Jsercy",
                    "к": "kcy",
                    "К": "Kcy",
                    "ќ": "kjcy",
                    "Ќ": "KJcy",
                    "л": "lcy",
                    "Л": "Lcy",
                    "љ": "ljcy",
                    "Љ": "LJcy",
                    "м": "mcy",
                    "М": "Mcy",
                    "н": "ncy",
                    "Н": "Ncy",
                    "њ": "njcy",
                    "Њ": "NJcy",
                    "о": "ocy",
                    "О": "Ocy",
                    "п": "pcy",
                    "П": "Pcy",
                    "р": "rcy",
                    "Р": "Rcy",
                    "с": "scy",
                    "С": "Scy",
                    "т": "tcy",
                    "Т": "Tcy",
                    "ћ": "tshcy",
                    "Ћ": "TSHcy",
                    "у": "ucy",
                    "У": "Ucy",
                    "ў": "ubrcy",
                    "Ў": "Ubrcy",
                    "ф": "fcy",
                    "Ф": "Fcy",
                    "х": "khcy",
                    "Х": "KHcy",
                    "ц": "tscy",
                    "Ц": "TScy",
                    "ч": "chcy",
                    "Ч": "CHcy",
                    "џ": "dzcy",
                    "Џ": "DZcy",
                    "ш": "shcy",
                    "Ш": "SHcy",
                    "щ": "shchcy",
                    "Щ": "SHCHcy",
                    "ъ": "hardcy",
                    "Ъ": "HARDcy",
                    "ы": "ycy",
                    "Ы": "Ycy",
                    "ь": "softcy",
                    "Ь": "SOFTcy",
                    "э": "ecy",
                    "Э": "Ecy",
                    "ю": "yucy",
                    "Ю": "YUcy",
                    "я": "yacy",
                    "Я": "YAcy",
                    "ℵ": "aleph",
                    "ℶ": "beth",
                    "ℷ": "gimel",
                    "ℸ": "daleth"
                },
                d = /["&'<>`]/g,
                h = {
                    '"': "&quot;",
                    "&": "&amp;",
                    "'": "&#x27;",
                    "<": "&lt;",
                    ">": "&gt;",
                    "`": "&#x60;"
                },
                g = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,
                v = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
                _ = /&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)([=a-zA-Z0-9])?/g,
                m = {
                    aacute: "á",
                    Aacute: "Á",
                    abreve: "ă",
                    Abreve: "Ă",
                    ac: "∾",
                    acd: "∿",
                    acE: "∾̳",
                    acirc: "â",
                    Acirc: "Â",
                    acute: "´",
                    acy: "а",
                    Acy: "А",
                    aelig: "æ",
                    AElig: "Æ",
                    af: "⁡",
                    afr: "𝔞",
                    Afr: "𝔄",
                    agrave: "à",
                    Agrave: "À",
                    alefsym: "ℵ",
                    aleph: "ℵ",
                    alpha: "α",
                    Alpha: "Α",
                    amacr: "ā",
                    Amacr: "Ā",
                    amalg: "⨿",
                    amp: "&",
                    AMP: "&",
                    and: "∧",
                    And: "⩓",
                    andand: "⩕",
                    andd: "⩜",
                    andslope: "⩘",
                    andv: "⩚",
                    ang: "∠",
                    ange: "⦤",
                    angle: "∠",
                    angmsd: "∡",
                    angmsdaa: "⦨",
                    angmsdab: "⦩",
                    angmsdac: "⦪",
                    angmsdad: "⦫",
                    angmsdae: "⦬",
                    angmsdaf: "⦭",
                    angmsdag: "⦮",
                    angmsdah: "⦯",
                    angrt: "∟",
                    angrtvb: "⊾",
                    angrtvbd: "⦝",
                    angsph: "∢",
                    angst: "Å",
                    angzarr: "⍼",
                    aogon: "ą",
                    Aogon: "Ą",
                    aopf: "𝕒",
                    Aopf: "𝔸",
                    ap: "≈",
                    apacir: "⩯",
                    ape: "≊",
                    apE: "⩰",
                    apid: "≋",
                    apos: "'",
                    ApplyFunction: "⁡",
                    approx: "≈",
                    approxeq: "≊",
                    aring: "å",
                    Aring: "Å",
                    ascr: "𝒶",
                    Ascr: "𝒜",
                    Assign: "≔",
                    ast: "*",
                    asymp: "≈",
                    asympeq: "≍",
                    atilde: "ã",
                    Atilde: "Ã",
                    auml: "ä",
                    Auml: "Ä",
                    awconint: "∳",
                    awint: "⨑",
                    backcong: "≌",
                    backepsilon: "϶",
                    backprime: "‵",
                    backsim: "∽",
                    backsimeq: "⋍",
                    Backslash: "∖",
                    Barv: "⫧",
                    barvee: "⊽",
                    barwed: "⌅",
                    Barwed: "⌆",
                    barwedge: "⌅",
                    bbrk: "⎵",
                    bbrktbrk: "⎶",
                    bcong: "≌",
                    bcy: "б",
                    Bcy: "Б",
                    bdquo: "„",
                    becaus: "∵",
                    because: "∵",
                    Because: "∵",
                    bemptyv: "⦰",
                    bepsi: "϶",
                    bernou: "ℬ",
                    Bernoullis: "ℬ",
                    beta: "β",
                    Beta: "Β",
                    beth: "ℶ",
                    between: "≬",
                    bfr: "𝔟",
                    Bfr: "𝔅",
                    bigcap: "⋂",
                    bigcirc: "◯",
                    bigcup: "⋃",
                    bigodot: "⨀",
                    bigoplus: "⨁",
                    bigotimes: "⨂",
                    bigsqcup: "⨆",
                    bigstar: "★",
                    bigtriangledown: "▽",
                    bigtriangleup: "△",
                    biguplus: "⨄",
                    bigvee: "⋁",
                    bigwedge: "⋀",
                    bkarow: "⤍",
                    blacklozenge: "⧫",
                    blacksquare: "▪",
                    blacktriangle: "▴",
                    blacktriangledown: "▾",
                    blacktriangleleft: "◂",
                    blacktriangleright: "▸",
                    blank: "␣",
                    blk12: "▒",
                    blk14: "░",
                    blk34: "▓",
                    block: "█",
                    bne: "=⃥",
                    bnequiv: "≡⃥",
                    bnot: "⌐",
                    bNot: "⫭",
                    bopf: "𝕓",
                    Bopf: "𝔹",
                    bot: "⊥",
                    bottom: "⊥",
                    bowtie: "⋈",
                    boxbox: "⧉",
                    boxdl: "┐",
                    boxdL: "╕",
                    boxDl: "╖",
                    boxDL: "╗",
                    boxdr: "┌",
                    boxdR: "╒",
                    boxDr: "╓",
                    boxDR: "╔",
                    boxh: "─",
                    boxH: "═",
                    boxhd: "┬",
                    boxhD: "╥",
                    boxHd: "╤",
                    boxHD: "╦",
                    boxhu: "┴",
                    boxhU: "╨",
                    boxHu: "╧",
                    boxHU: "╩",
                    boxminus: "⊟",
                    boxplus: "⊞",
                    boxtimes: "⊠",
                    boxul: "┘",
                    boxuL: "╛",
                    boxUl: "╜",
                    boxUL: "╝",
                    boxur: "└",
                    boxuR: "╘",
                    boxUr: "╙",
                    boxUR: "╚",
                    boxv: "│",
                    boxV: "║",
                    boxvh: "┼",
                    boxvH: "╪",
                    boxVh: "╫",
                    boxVH: "╬",
                    boxvl: "┤",
                    boxvL: "╡",
                    boxVl: "╢",
                    boxVL: "╣",
                    boxvr: "├",
                    boxvR: "╞",
                    boxVr: "╟",
                    boxVR: "╠",
                    bprime: "‵",
                    breve: "˘",
                    Breve: "˘",
                    brvbar: "¦",
                    bscr: "𝒷",
                    Bscr: "ℬ",
                    bsemi: "⁏",
                    bsim: "∽",
                    bsime: "⋍",
                    bsol: "\\",
                    bsolb: "⧅",
                    bsolhsub: "⟈",
                    bull: "•",
                    bullet: "•",
                    bump: "≎",
                    bumpe: "≏",
                    bumpE: "⪮",
                    bumpeq: "≏",
                    Bumpeq: "≎",
                    cacute: "ć",
                    Cacute: "Ć",
                    cap: "∩",
                    Cap: "⋒",
                    capand: "⩄",
                    capbrcup: "⩉",
                    capcap: "⩋",
                    capcup: "⩇",
                    capdot: "⩀",
                    CapitalDifferentialD: "ⅅ",
                    caps: "∩︀",
                    caret: "⁁",
                    caron: "ˇ",
                    Cayleys: "ℭ",
                    ccaps: "⩍",
                    ccaron: "č",
                    Ccaron: "Č",
                    ccedil: "ç",
                    Ccedil: "Ç",
                    ccirc: "ĉ",
                    Ccirc: "Ĉ",
                    Cconint: "∰",
                    ccups: "⩌",
                    ccupssm: "⩐",
                    cdot: "ċ",
                    Cdot: "Ċ",
                    cedil: "¸",
                    Cedilla: "¸",
                    cemptyv: "⦲",
                    cent: "¢",
                    centerdot: "·",
                    CenterDot: "·",
                    cfr: "𝔠",
                    Cfr: "ℭ",
                    chcy: "ч",
                    CHcy: "Ч",
                    check: "✓",
                    checkmark: "✓",
                    chi: "χ",
                    Chi: "Χ",
                    cir: "○",
                    circ: "ˆ",
                    circeq: "≗",
                    circlearrowleft: "↺",
                    circlearrowright: "↻",
                    circledast: "⊛",
                    circledcirc: "⊚",
                    circleddash: "⊝",
                    CircleDot: "⊙",
                    circledR: "®",
                    circledS: "Ⓢ",
                    CircleMinus: "⊖",
                    CirclePlus: "⊕",
                    CircleTimes: "⊗",
                    cire: "≗",
                    cirE: "⧃",
                    cirfnint: "⨐",
                    cirmid: "⫯",
                    cirscir: "⧂",
                    ClockwiseContourIntegral: "∲",
                    CloseCurlyDoubleQuote: "”",
                    CloseCurlyQuote: "’",
                    clubs: "♣",
                    clubsuit: "♣",
                    colon: ":",
                    Colon: "∷",
                    colone: "≔",
                    Colone: "⩴",
                    coloneq: "≔",
                    comma: ",",
                    commat: "@",
                    comp: "∁",
                    compfn: "∘",
                    complement: "∁",
                    complexes: "ℂ",
                    cong: "≅",
                    congdot: "⩭",
                    Congruent: "≡",
                    conint: "∮",
                    Conint: "∯",
                    ContourIntegral: "∮",
                    copf: "𝕔",
                    Copf: "ℂ",
                    coprod: "∐",
                    Coproduct: "∐",
                    copy: "©",
                    COPY: "©",
                    copysr: "℗",
                    CounterClockwiseContourIntegral: "∳",
                    crarr: "↵",
                    cross: "✗",
                    Cross: "⨯",
                    cscr: "𝒸",
                    Cscr: "𝒞",
                    csub: "⫏",
                    csube: "⫑",
                    csup: "⫐",
                    csupe: "⫒",
                    ctdot: "⋯",
                    cudarrl: "⤸",
                    cudarrr: "⤵",
                    cuepr: "⋞",
                    cuesc: "⋟",
                    cularr: "↶",
                    cularrp: "⤽",
                    cup: "∪",
                    Cup: "⋓",
                    cupbrcap: "⩈",
                    cupcap: "⩆",
                    CupCap: "≍",
                    cupcup: "⩊",
                    cupdot: "⊍",
                    cupor: "⩅",
                    cups: "∪︀",
                    curarr: "↷",
                    curarrm: "⤼",
                    curlyeqprec: "⋞",
                    curlyeqsucc: "⋟",
                    curlyvee: "⋎",
                    curlywedge: "⋏",
                    curren: "¤",
                    curvearrowleft: "↶",
                    curvearrowright: "↷",
                    cuvee: "⋎",
                    cuwed: "⋏",
                    cwconint: "∲",
                    cwint: "∱",
                    cylcty: "⌭",
                    dagger: "†",
                    Dagger: "‡",
                    daleth: "ℸ",
                    darr: "↓",
                    dArr: "⇓",
                    Darr: "↡",
                    dash: "‐",
                    dashv: "⊣",
                    Dashv: "⫤",
                    dbkarow: "⤏",
                    dblac: "˝",
                    dcaron: "ď",
                    Dcaron: "Ď",
                    dcy: "д",
                    Dcy: "Д",
                    dd: "ⅆ",
                    DD: "ⅅ",
                    ddagger: "‡",
                    ddarr: "⇊",
                    DDotrahd: "⤑",
                    ddotseq: "⩷",
                    deg: "°",
                    Del: "∇",
                    delta: "δ",
                    Delta: "Δ",
                    demptyv: "⦱",
                    dfisht: "⥿",
                    dfr: "𝔡",
                    Dfr: "𝔇",
                    dHar: "⥥",
                    dharl: "⇃",
                    dharr: "⇂",
                    DiacriticalAcute: "´",
                    DiacriticalDot: "˙",
                    DiacriticalDoubleAcute: "˝",
                    DiacriticalGrave: "`",
                    DiacriticalTilde: "˜",
                    diam: "⋄",
                    diamond: "⋄",
                    Diamond: "⋄",
                    diamondsuit: "♦",
                    diams: "♦",
                    die: "¨",
                    DifferentialD: "ⅆ",
                    digamma: "ϝ",
                    disin: "⋲",
                    div: "÷",
                    divide: "÷",
                    divideontimes: "⋇",
                    divonx: "⋇",
                    djcy: "ђ",
                    DJcy: "Ђ",
                    dlcorn: "⌞",
                    dlcrop: "⌍",
                    dollar: "$",
                    dopf: "𝕕",
                    Dopf: "𝔻",
                    dot: "˙",
                    Dot: "¨",
                    DotDot: "⃜",
                    doteq: "≐",
                    doteqdot: "≑",
                    DotEqual: "≐",
                    dotminus: "∸",
                    dotplus: "∔",
                    dotsquare: "⊡",
                    doublebarwedge: "⌆",
                    DoubleContourIntegral: "∯",
                    DoubleDot: "¨",
                    DoubleDownArrow: "⇓",
                    DoubleLeftArrow: "⇐",
                    DoubleLeftRightArrow: "⇔",
                    DoubleLeftTee: "⫤",
                    DoubleLongLeftArrow: "⟸",
                    DoubleLongLeftRightArrow: "⟺",
                    DoubleLongRightArrow: "⟹",
                    DoubleRightArrow: "⇒",
                    DoubleRightTee: "⊨",
                    DoubleUpArrow: "⇑",
                    DoubleUpDownArrow: "⇕",
                    DoubleVerticalBar: "∥",
                    downarrow: "↓",
                    Downarrow: "⇓",
                    DownArrow: "↓",
                    DownArrowBar: "⤓",
                    DownArrowUpArrow: "⇵",
                    DownBreve: "̑",
                    downdownarrows: "⇊",
                    downharpoonleft: "⇃",
                    downharpoonright: "⇂",
                    DownLeftRightVector: "⥐",
                    DownLeftTeeVector: "⥞",
                    DownLeftVector: "↽",
                    DownLeftVectorBar: "⥖",
                    DownRightTeeVector: "⥟",
                    DownRightVector: "⇁",
                    DownRightVectorBar: "⥗",
                    DownTee: "⊤",
                    DownTeeArrow: "↧",
                    drbkarow: "⤐",
                    drcorn: "⌟",
                    drcrop: "⌌",
                    dscr: "𝒹",
                    Dscr: "𝒟",
                    dscy: "ѕ",
                    DScy: "Ѕ",
                    dsol: "⧶",
                    dstrok: "đ",
                    Dstrok: "Đ",
                    dtdot: "⋱",
                    dtri: "▿",
                    dtrif: "▾",
                    duarr: "⇵",
                    duhar: "⥯",
                    dwangle: "⦦",
                    dzcy: "џ",
                    DZcy: "Џ",
                    dzigrarr: "⟿",
                    eacute: "é",
                    Eacute: "É",
                    easter: "⩮",
                    ecaron: "ě",
                    Ecaron: "Ě",
                    ecir: "≖",
                    ecirc: "ê",
                    Ecirc: "Ê",
                    ecolon: "≕",
                    ecy: "э",
                    Ecy: "Э",
                    eDDot: "⩷",
                    edot: "ė",
                    eDot: "≑",
                    Edot: "Ė",
                    ee: "ⅇ",
                    efDot: "≒",
                    efr: "𝔢",
                    Efr: "𝔈",
                    eg: "⪚",
                    egrave: "è",
                    Egrave: "È",
                    egs: "⪖",
                    egsdot: "⪘",
                    el: "⪙",
                    Element: "∈",
                    elinters: "⏧",
                    ell: "ℓ",
                    els: "⪕",
                    elsdot: "⪗",
                    emacr: "ē",
                    Emacr: "Ē",
                    empty: "∅",
                    emptyset: "∅",
                    EmptySmallSquare: "◻",
                    emptyv: "∅",
                    EmptyVerySmallSquare: "▫",
                    emsp: " ",
                    emsp13: " ",
                    emsp14: " ",
                    eng: "ŋ",
                    ENG: "Ŋ",
                    ensp: " ",
                    eogon: "ę",
                    Eogon: "Ę",
                    eopf: "𝕖",
                    Eopf: "𝔼",
                    epar: "⋕",
                    eparsl: "⧣",
                    eplus: "⩱",
                    epsi: "ε",
                    epsilon: "ε",
                    Epsilon: "Ε",
                    epsiv: "ϵ",
                    eqcirc: "≖",
                    eqcolon: "≕",
                    eqsim: "≂",
                    eqslantgtr: "⪖",
                    eqslantless: "⪕",
                    Equal: "⩵",
                    equals: "=",
                    EqualTilde: "≂",
                    equest: "≟",
                    Equilibrium: "⇌",
                    equiv: "≡",
                    equivDD: "⩸",
                    eqvparsl: "⧥",
                    erarr: "⥱",
                    erDot: "≓",
                    escr: "ℯ",
                    Escr: "ℰ",
                    esdot: "≐",
                    esim: "≂",
                    Esim: "⩳",
                    eta: "η",
                    Eta: "Η",
                    eth: "ð",
                    ETH: "Ð",
                    euml: "ë",
                    Euml: "Ë",
                    euro: "€",
                    excl: "!",
                    exist: "∃",
                    Exists: "∃",
                    expectation: "ℰ",
                    exponentiale: "ⅇ",
                    ExponentialE: "ⅇ",
                    fallingdotseq: "≒",
                    fcy: "ф",
                    Fcy: "Ф",
                    female: "♀",
                    ffilig: "ﬃ",
                    fflig: "ﬀ",
                    ffllig: "ﬄ",
                    ffr: "𝔣",
                    Ffr: "𝔉",
                    filig: "ﬁ",
                    FilledSmallSquare: "◼",
                    FilledVerySmallSquare: "▪",
                    fjlig: "fj",
                    flat: "♭",
                    fllig: "ﬂ",
                    fltns: "▱",
                    fnof: "ƒ",
                    fopf: "𝕗",
                    Fopf: "𝔽",
                    forall: "∀",
                    ForAll: "∀",
                    fork: "⋔",
                    forkv: "⫙",
                    Fouriertrf: "ℱ",
                    fpartint: "⨍",
                    frac12: "½",
                    frac13: "⅓",
                    frac14: "¼",
                    frac15: "⅕",
                    frac16: "⅙",
                    frac18: "⅛",
                    frac23: "⅔",
                    frac25: "⅖",
                    frac34: "¾",
                    frac35: "⅗",
                    frac38: "⅜",
                    frac45: "⅘",
                    frac56: "⅚",
                    frac58: "⅝",
                    frac78: "⅞",
                    frasl: "⁄",
                    frown: "⌢",
                    fscr: "𝒻",
                    Fscr: "ℱ",
                    gacute: "ǵ",
                    gamma: "γ",
                    Gamma: "Γ",
                    gammad: "ϝ",
                    Gammad: "Ϝ",
                    gap: "⪆",
                    gbreve: "ğ",
                    Gbreve: "Ğ",
                    Gcedil: "Ģ",
                    gcirc: "ĝ",
                    Gcirc: "Ĝ",
                    gcy: "г",
                    Gcy: "Г",
                    gdot: "ġ",
                    Gdot: "Ġ",
                    ge: "≥",
                    gE: "≧",
                    gel: "⋛",
                    gEl: "⪌",
                    geq: "≥",
                    geqq: "≧",
                    geqslant: "⩾",
                    ges: "⩾",
                    gescc: "⪩",
                    gesdot: "⪀",
                    gesdoto: "⪂",
                    gesdotol: "⪄",
                    gesl: "⋛︀",
                    gesles: "⪔",
                    gfr: "𝔤",
                    Gfr: "𝔊",
                    gg: "≫",
                    Gg: "⋙",
                    ggg: "⋙",
                    gimel: "ℷ",
                    gjcy: "ѓ",
                    GJcy: "Ѓ",
                    gl: "≷",
                    gla: "⪥",
                    glE: "⪒",
                    glj: "⪤",
                    gnap: "⪊",
                    gnapprox: "⪊",
                    gne: "⪈",
                    gnE: "≩",
                    gneq: "⪈",
                    gneqq: "≩",
                    gnsim: "⋧",
                    gopf: "𝕘",
                    Gopf: "𝔾",
                    grave: "`",
                    GreaterEqual: "≥",
                    GreaterEqualLess: "⋛",
                    GreaterFullEqual: "≧",
                    GreaterGreater: "⪢",
                    GreaterLess: "≷",
                    GreaterSlantEqual: "⩾",
                    GreaterTilde: "≳",
                    gscr: "ℊ",
                    Gscr: "𝒢",
                    gsim: "≳",
                    gsime: "⪎",
                    gsiml: "⪐",
                    gt: ">",
                    Gt: "≫",
                    GT: ">",
                    gtcc: "⪧",
                    gtcir: "⩺",
                    gtdot: "⋗",
                    gtlPar: "⦕",
                    gtquest: "⩼",
                    gtrapprox: "⪆",
                    gtrarr: "⥸",
                    gtrdot: "⋗",
                    gtreqless: "⋛",
                    gtreqqless: "⪌",
                    gtrless: "≷",
                    gtrsim: "≳",
                    gvertneqq: "≩︀",
                    gvnE: "≩︀",
                    Hacek: "ˇ",
                    hairsp: " ",
                    half: "½",
                    hamilt: "ℋ",
                    hardcy: "ъ",
                    HARDcy: "Ъ",
                    harr: "↔",
                    hArr: "⇔",
                    harrcir: "⥈",
                    harrw: "↭",
                    Hat: "^",
                    hbar: "ℏ",
                    hcirc: "ĥ",
                    Hcirc: "Ĥ",
                    hearts: "♥",
                    heartsuit: "♥",
                    hellip: "…",
                    hercon: "⊹",
                    hfr: "𝔥",
                    Hfr: "ℌ",
                    HilbertSpace: "ℋ",
                    hksearow: "⤥",
                    hkswarow: "⤦",
                    hoarr: "⇿",
                    homtht: "∻",
                    hookleftarrow: "↩",
                    hookrightarrow: "↪",
                    hopf: "𝕙",
                    Hopf: "ℍ",
                    horbar: "―",
                    HorizontalLine: "─",
                    hscr: "𝒽",
                    Hscr: "ℋ",
                    hslash: "ℏ",
                    hstrok: "ħ",
                    Hstrok: "Ħ",
                    HumpDownHump: "≎",
                    HumpEqual: "≏",
                    hybull: "⁃",
                    hyphen: "‐",
                    iacute: "í",
                    Iacute: "Í",
                    ic: "⁣",
                    icirc: "î",
                    Icirc: "Î",
                    icy: "и",
                    Icy: "И",
                    Idot: "İ",
                    iecy: "е",
                    IEcy: "Е",
                    iexcl: "¡",
                    iff: "⇔",
                    ifr: "𝔦",
                    Ifr: "ℑ",
                    igrave: "ì",
                    Igrave: "Ì",
                    ii: "ⅈ",
                    iiiint: "⨌",
                    iiint: "∭",
                    iinfin: "⧜",
                    iiota: "℩",
                    ijlig: "ĳ",
                    IJlig: "Ĳ",
                    Im: "ℑ",
                    imacr: "ī",
                    Imacr: "Ī",
                    image: "ℑ",
                    ImaginaryI: "ⅈ",
                    imagline: "ℐ",
                    imagpart: "ℑ",
                    imath: "ı",
                    imof: "⊷",
                    imped: "Ƶ",
                    Implies: "⇒",
                    in : "∈",
                    incare: "℅",
                    infin: "∞",
                    infintie: "⧝",
                    inodot: "ı",
                    int: "∫",
                    Int: "∬",
                    intcal: "⊺",
                    integers: "ℤ",
                    Integral: "∫",
                    intercal: "⊺",
                    Intersection: "⋂",
                    intlarhk: "⨗",
                    intprod: "⨼",
                    InvisibleComma: "⁣",
                    InvisibleTimes: "⁢",
                    iocy: "ё",
                    IOcy: "Ё",
                    iogon: "į",
                    Iogon: "Į",
                    iopf: "𝕚",
                    Iopf: "𝕀",
                    iota: "ι",
                    Iota: "Ι",
                    iprod: "⨼",
                    iquest: "¿",
                    iscr: "𝒾",
                    Iscr: "ℐ",
                    isin: "∈",
                    isindot: "⋵",
                    isinE: "⋹",
                    isins: "⋴",
                    isinsv: "⋳",
                    isinv: "∈",
                    it: "⁢",
                    itilde: "ĩ",
                    Itilde: "Ĩ",
                    iukcy: "і",
                    Iukcy: "І",
                    iuml: "ï",
                    Iuml: "Ï",
                    jcirc: "ĵ",
                    Jcirc: "Ĵ",
                    jcy: "й",
                    Jcy: "Й",
                    jfr: "𝔧",
                    Jfr: "𝔍",
                    jmath: "ȷ",
                    jopf: "𝕛",
                    Jopf: "𝕁",
                    jscr: "𝒿",
                    Jscr: "𝒥",
                    jsercy: "ј",
                    Jsercy: "Ј",
                    jukcy: "є",
                    Jukcy: "Є",
                    kappa: "κ",
                    Kappa: "Κ",
                    kappav: "ϰ",
                    kcedil: "ķ",
                    Kcedil: "Ķ",
                    kcy: "к",
                    Kcy: "К",
                    kfr: "𝔨",
                    Kfr: "𝔎",
                    kgreen: "ĸ",
                    khcy: "х",
                    KHcy: "Х",
                    kjcy: "ќ",
                    KJcy: "Ќ",
                    kopf: "𝕜",
                    Kopf: "𝕂",
                    kscr: "𝓀",
                    Kscr: "𝒦",
                    lAarr: "⇚",
                    lacute: "ĺ",
                    Lacute: "Ĺ",
                    laemptyv: "⦴",
                    lagran: "ℒ",
                    lambda: "λ",
                    Lambda: "Λ",
                    lang: "⟨",
                    Lang: "⟪",
                    langd: "⦑",
                    langle: "⟨",
                    lap: "⪅",
                    Laplacetrf: "ℒ",
                    laquo: "«",
                    larr: "←",
                    lArr: "⇐",
                    Larr: "↞",
                    larrb: "⇤",
                    larrbfs: "⤟",
                    larrfs: "⤝",
                    larrhk: "↩",
                    larrlp: "↫",
                    larrpl: "⤹",
                    larrsim: "⥳",
                    larrtl: "↢",
                    lat: "⪫",
                    latail: "⤙",
                    lAtail: "⤛",
                    late: "⪭",
                    lates: "⪭︀",
                    lbarr: "⤌",
                    lBarr: "⤎",
                    lbbrk: "❲",
                    lbrace: "{",
                    lbrack: "[",
                    lbrke: "⦋",
                    lbrksld: "⦏",
                    lbrkslu: "⦍",
                    lcaron: "ľ",
                    Lcaron: "Ľ",
                    lcedil: "ļ",
                    Lcedil: "Ļ",
                    lceil: "⌈",
                    lcub: "{",
                    lcy: "л",
                    Lcy: "Л",
                    ldca: "⤶",
                    ldquo: "“",
                    ldquor: "„",
                    ldrdhar: "⥧",
                    ldrushar: "⥋",
                    ldsh: "↲",
                    le: "≤",
                    lE: "≦",
                    LeftAngleBracket: "⟨",
                    leftarrow: "←",
                    Leftarrow: "⇐",
                    LeftArrow: "←",
                    LeftArrowBar: "⇤",
                    LeftArrowRightArrow: "⇆",
                    leftarrowtail: "↢",
                    LeftCeiling: "⌈",
                    LeftDoubleBracket: "⟦",
                    LeftDownTeeVector: "⥡",
                    LeftDownVector: "⇃",
                    LeftDownVectorBar: "⥙",
                    LeftFloor: "⌊",
                    leftharpoondown: "↽",
                    leftharpoonup: "↼",
                    leftleftarrows: "⇇",
                    leftrightarrow: "↔",
                    Leftrightarrow: "⇔",
                    LeftRightArrow: "↔",
                    leftrightarrows: "⇆",
                    leftrightharpoons: "⇋",
                    leftrightsquigarrow: "↭",
                    LeftRightVector: "⥎",
                    LeftTee: "⊣",
                    LeftTeeArrow: "↤",
                    LeftTeeVector: "⥚",
                    leftthreetimes: "⋋",
                    LeftTriangle: "⊲",
                    LeftTriangleBar: "⧏",
                    LeftTriangleEqual: "⊴",
                    LeftUpDownVector: "⥑",
                    LeftUpTeeVector: "⥠",
                    LeftUpVector: "↿",
                    LeftUpVectorBar: "⥘",
                    LeftVector: "↼",
                    LeftVectorBar: "⥒",
                    leg: "⋚",
                    lEg: "⪋",
                    leq: "≤",
                    leqq: "≦",
                    leqslant: "⩽",
                    les: "⩽",
                    lescc: "⪨",
                    lesdot: "⩿",
                    lesdoto: "⪁",
                    lesdotor: "⪃",
                    lesg: "⋚︀",
                    lesges: "⪓",
                    lessapprox: "⪅",
                    lessdot: "⋖",
                    lesseqgtr: "⋚",
                    lesseqqgtr: "⪋",
                    LessEqualGreater: "⋚",
                    LessFullEqual: "≦",
                    LessGreater: "≶",
                    lessgtr: "≶",
                    LessLess: "⪡",
                    lesssim: "≲",
                    LessSlantEqual: "⩽",
                    LessTilde: "≲",
                    lfisht: "⥼",
                    lfloor: "⌊",
                    lfr: "𝔩",
                    Lfr: "𝔏",
                    lg: "≶",
                    lgE: "⪑",
                    lHar: "⥢",
                    lhard: "↽",
                    lharu: "↼",
                    lharul: "⥪",
                    lhblk: "▄",
                    ljcy: "љ",
                    LJcy: "Љ",
                    ll: "≪",
                    Ll: "⋘",
                    llarr: "⇇",
                    llcorner: "⌞",
                    Lleftarrow: "⇚",
                    llhard: "⥫",
                    lltri: "◺",
                    lmidot: "ŀ",
                    Lmidot: "Ŀ",
                    lmoust: "⎰",
                    lmoustache: "⎰",
                    lnap: "⪉",
                    lnapprox: "⪉",
                    lne: "⪇",
                    lnE: "≨",
                    lneq: "⪇",
                    lneqq: "≨",
                    lnsim: "⋦",
                    loang: "⟬",
                    loarr: "⇽",
                    lobrk: "⟦",
                    longleftarrow: "⟵",
                    Longleftarrow: "⟸",
                    LongLeftArrow: "⟵",
                    longleftrightarrow: "⟷",
                    Longleftrightarrow: "⟺",
                    LongLeftRightArrow: "⟷",
                    longmapsto: "⟼",
                    longrightarrow: "⟶",
                    Longrightarrow: "⟹",
                    LongRightArrow: "⟶",
                    looparrowleft: "↫",
                    looparrowright: "↬",
                    lopar: "⦅",
                    lopf: "𝕝",
                    Lopf: "𝕃",
                    loplus: "⨭",
                    lotimes: "⨴",
                    lowast: "∗",
                    lowbar: "_",
                    LowerLeftArrow: "↙",
                    LowerRightArrow: "↘",
                    loz: "◊",
                    lozenge: "◊",
                    lozf: "⧫",
                    lpar: "(",
                    lparlt: "⦓",
                    lrarr: "⇆",
                    lrcorner: "⌟",
                    lrhar: "⇋",
                    lrhard: "⥭",
                    lrm: "‎",
                    lrtri: "⊿",
                    lsaquo: "‹",
                    lscr: "𝓁",
                    Lscr: "ℒ",
                    lsh: "↰",
                    Lsh: "↰",
                    lsim: "≲",
                    lsime: "⪍",
                    lsimg: "⪏",
                    lsqb: "[",
                    lsquo: "‘",
                    lsquor: "‚",
                    lstrok: "ł",
                    Lstrok: "Ł",
                    lt: "<",
                    Lt: "≪",
                    LT: "<",
                    ltcc: "⪦",
                    ltcir: "⩹",
                    ltdot: "⋖",
                    lthree: "⋋",
                    ltimes: "⋉",
                    ltlarr: "⥶",
                    ltquest: "⩻",
                    ltri: "◃",
                    ltrie: "⊴",
                    ltrif: "◂",
                    ltrPar: "⦖",
                    lurdshar: "⥊",
                    luruhar: "⥦",
                    lvertneqq: "≨︀",
                    lvnE: "≨︀",
                    macr: "¯",
                    male: "♂",
                    malt: "✠",
                    maltese: "✠",
                    map: "↦",
                    Map: "⤅",
                    mapsto: "↦",
                    mapstodown: "↧",
                    mapstoleft: "↤",
                    mapstoup: "↥",
                    marker: "▮",
                    mcomma: "⨩",
                    mcy: "м",
                    Mcy: "М",
                    mdash: "—",
                    mDDot: "∺",
                    measuredangle: "∡",
                    MediumSpace: " ",
                    Mellintrf: "ℳ",
                    mfr: "𝔪",
                    Mfr: "𝔐",
                    mho: "℧",
                    micro: "µ",
                    mid: "∣",
                    midast: "*",
                    midcir: "⫰",
                    middot: "·",
                    minus: "−",
                    minusb: "⊟",
                    minusd: "∸",
                    minusdu: "⨪",
                    MinusPlus: "∓",
                    mlcp: "⫛",
                    mldr: "…",
                    mnplus: "∓",
                    models: "⊧",
                    mopf: "𝕞",
                    Mopf: "𝕄",
                    mp: "∓",
                    mscr: "𝓂",
                    Mscr: "ℳ",
                    mstpos: "∾",
                    mu: "μ",
                    Mu: "Μ",
                    multimap: "⊸",
                    mumap: "⊸",
                    nabla: "∇",
                    nacute: "ń",
                    Nacute: "Ń",
                    nang: "∠⃒",
                    nap: "≉",
                    napE: "⩰̸",
                    napid: "≋̸",
                    napos: "ŉ",
                    napprox: "≉",
                    natur: "♮",
                    natural: "♮",
                    naturals: "ℕ",
                    nbsp: " ",
                    nbump: "≎̸",
                    nbumpe: "≏̸",
                    ncap: "⩃",
                    ncaron: "ň",
                    Ncaron: "Ň",
                    ncedil: "ņ",
                    Ncedil: "Ņ",
                    ncong: "≇",
                    ncongdot: "⩭̸",
                    ncup: "⩂",
                    ncy: "н",
                    Ncy: "Н",
                    ndash: "–",
                    ne: "≠",
                    nearhk: "⤤",
                    nearr: "↗",
                    neArr: "⇗",
                    nearrow: "↗",
                    nedot: "≐̸",
                    NegativeMediumSpace: "​",
                    NegativeThickSpace: "​",
                    NegativeThinSpace: "​",
                    NegativeVeryThinSpace: "​",
                    nequiv: "≢",
                    nesear: "⤨",
                    nesim: "≂̸",
                    NestedGreaterGreater: "≫",
                    NestedLessLess: "≪",
                    NewLine: "\n",
                    nexist: "∄",
                    nexists: "∄",
                    nfr: "𝔫",
                    Nfr: "𝔑",
                    nge: "≱",
                    ngE: "≧̸",
                    ngeq: "≱",
                    ngeqq: "≧̸",
                    ngeqslant: "⩾̸",
                    nges: "⩾̸",
                    nGg: "⋙̸",
                    ngsim: "≵",
                    ngt: "≯",
                    nGt: "≫⃒",
                    ngtr: "≯",
                    nGtv: "≫̸",
                    nharr: "↮",
                    nhArr: "⇎",
                    nhpar: "⫲",
                    ni: "∋",
                    nis: "⋼",
                    nisd: "⋺",
                    niv: "∋",
                    njcy: "њ",
                    NJcy: "Њ",
                    nlarr: "↚",
                    nlArr: "⇍",
                    nldr: "‥",
                    nle: "≰",
                    nlE: "≦̸",
                    nleftarrow: "↚",
                    nLeftarrow: "⇍",
                    nleftrightarrow: "↮",
                    nLeftrightarrow: "⇎",
                    nleq: "≰",
                    nleqq: "≦̸",
                    nleqslant: "⩽̸",
                    nles: "⩽̸",
                    nless: "≮",
                    nLl: "⋘̸",
                    nlsim: "≴",
                    nlt: "≮",
                    nLt: "≪⃒",
                    nltri: "⋪",
                    nltrie: "⋬",
                    nLtv: "≪̸",
                    nmid: "∤",
                    NoBreak: "⁠",
                    NonBreakingSpace: " ",
                    nopf: "𝕟",
                    Nopf: "ℕ",
                    not: "¬",
                    Not: "⫬",
                    NotCongruent: "≢",
                    NotCupCap: "≭",
                    NotDoubleVerticalBar: "∦",
                    NotElement: "∉",
                    NotEqual: "≠",
                    NotEqualTilde: "≂̸",
                    NotExists: "∄",
                    NotGreater: "≯",
                    NotGreaterEqual: "≱",
                    NotGreaterFullEqual: "≧̸",
                    NotGreaterGreater: "≫̸",
                    NotGreaterLess: "≹",
                    NotGreaterSlantEqual: "⩾̸",
                    NotGreaterTilde: "≵",
                    NotHumpDownHump: "≎̸",
                    NotHumpEqual: "≏̸",
                    notin: "∉",
                    notindot: "⋵̸",
                    notinE: "⋹̸",
                    notinva: "∉",
                    notinvb: "⋷",
                    notinvc: "⋶",
                    NotLeftTriangle: "⋪",
                    NotLeftTriangleBar: "⧏̸",
                    NotLeftTriangleEqual: "⋬",
                    NotLess: "≮",
                    NotLessEqual: "≰",
                    NotLessGreater: "≸",
                    NotLessLess: "≪̸",
                    NotLessSlantEqual: "⩽̸",
                    NotLessTilde: "≴",
                    NotNestedGreaterGreater: "⪢̸",
                    NotNestedLessLess: "⪡̸",
                    notni: "∌",
                    notniva: "∌",
                    notnivb: "⋾",
                    notnivc: "⋽",
                    NotPrecedes: "⊀",
                    NotPrecedesEqual: "⪯̸",
                    NotPrecedesSlantEqual: "⋠",
                    NotReverseElement: "∌",
                    NotRightTriangle: "⋫",
                    NotRightTriangleBar: "⧐̸",
                    NotRightTriangleEqual: "⋭",
                    NotSquareSubset: "⊏̸",
                    NotSquareSubsetEqual: "⋢",
                    NotSquareSuperset: "⊐̸",
                    NotSquareSupersetEqual: "⋣",
                    NotSubset: "⊂⃒",
                    NotSubsetEqual: "⊈",
                    NotSucceeds: "⊁",
                    NotSucceedsEqual: "⪰̸",
                    NotSucceedsSlantEqual: "⋡",
                    NotSucceedsTilde: "≿̸",
                    NotSuperset: "⊃⃒",
                    NotSupersetEqual: "⊉",
                    NotTilde: "≁",
                    NotTildeEqual: "≄",
                    NotTildeFullEqual: "≇",
                    NotTildeTilde: "≉",
                    NotVerticalBar: "∤",
                    npar: "∦",
                    nparallel: "∦",
                    nparsl: "⫽⃥",
                    npart: "∂̸",
                    npolint: "⨔",
                    npr: "⊀",
                    nprcue: "⋠",
                    npre: "⪯̸",
                    nprec: "⊀",
                    npreceq: "⪯̸",
                    nrarr: "↛",
                    nrArr: "⇏",
                    nrarrc: "⤳̸",
                    nrarrw: "↝̸",
                    nrightarrow: "↛",
                    nRightarrow: "⇏",
                    nrtri: "⋫",
                    nrtrie: "⋭",
                    nsc: "⊁",
                    nsccue: "⋡",
                    nsce: "⪰̸",
                    nscr: "𝓃",
                    Nscr: "𝒩",
                    nshortmid: "∤",
                    nshortparallel: "∦",
                    nsim: "≁",
                    nsime: "≄",
                    nsimeq: "≄",
                    nsmid: "∤",
                    nspar: "∦",
                    nsqsube: "⋢",
                    nsqsupe: "⋣",
                    nsub: "⊄",
                    nsube: "⊈",
                    nsubE: "⫅̸",
                    nsubset: "⊂⃒",
                    nsubseteq: "⊈",
                    nsubseteqq: "⫅̸",
                    nsucc: "⊁",
                    nsucceq: "⪰̸",
                    nsup: "⊅",
                    nsupe: "⊉",
                    nsupE: "⫆̸",
                    nsupset: "⊃⃒",
                    nsupseteq: "⊉",
                    nsupseteqq: "⫆̸",
                    ntgl: "≹",
                    ntilde: "ñ",
                    Ntilde: "Ñ",
                    ntlg: "≸",
                    ntriangleleft: "⋪",
                    ntrianglelefteq: "⋬",
                    ntriangleright: "⋫",
                    ntrianglerighteq: "⋭",
                    nu: "ν",
                    Nu: "Ν",
                    num: "#",
                    numero: "№",
                    numsp: " ",
                    nvap: "≍⃒",
                    nvdash: "⊬",
                    nvDash: "⊭",
                    nVdash: "⊮",
                    nVDash: "⊯",
                    nvge: "≥⃒",
                    nvgt: ">⃒",
                    nvHarr: "⤄",
                    nvinfin: "⧞",
                    nvlArr: "⤂",
                    nvle: "≤⃒",
                    nvlt: "<⃒",
                    nvltrie: "⊴⃒",
                    nvrArr: "⤃",
                    nvrtrie: "⊵⃒",
                    nvsim: "∼⃒",
                    nwarhk: "⤣",
                    nwarr: "↖",
                    nwArr: "⇖",
                    nwarrow: "↖",
                    nwnear: "⤧",
                    oacute: "ó",
                    Oacute: "Ó",
                    oast: "⊛",
                    ocir: "⊚",
                    ocirc: "ô",
                    Ocirc: "Ô",
                    ocy: "о",
                    Ocy: "О",
                    odash: "⊝",
                    odblac: "ő",
                    Odblac: "Ő",
                    odiv: "⨸",
                    odot: "⊙",
                    odsold: "⦼",
                    oelig: "œ",
                    OElig: "Œ",
                    ofcir: "⦿",
                    ofr: "𝔬",
                    Ofr: "𝔒",
                    ogon: "˛",
                    ograve: "ò",
                    Ograve: "Ò",
                    ogt: "⧁",
                    ohbar: "⦵",
                    ohm: "Ω",
                    oint: "∮",
                    olarr: "↺",
                    olcir: "⦾",
                    olcross: "⦻",
                    oline: "‾",
                    olt: "⧀",
                    omacr: "ō",
                    Omacr: "Ō",
                    omega: "ω",
                    Omega: "Ω",
                    omicron: "ο",
                    Omicron: "Ο",
                    omid: "⦶",
                    ominus: "⊖",
                    oopf: "𝕠",
                    Oopf: "𝕆",
                    opar: "⦷",
                    OpenCurlyDoubleQuote: "“",
                    OpenCurlyQuote: "‘",
                    operp: "⦹",
                    oplus: "⊕",
                    or: "∨",
                    Or: "⩔",
                    orarr: "↻",
                    ord: "⩝",
                    order: "ℴ",
                    orderof: "ℴ",
                    ordf: "ª",
                    ordm: "º",
                    origof: "⊶",
                    oror: "⩖",
                    orslope: "⩗",
                    orv: "⩛",
                    oS: "Ⓢ",
                    oscr: "ℴ",
                    Oscr: "𝒪",
                    oslash: "ø",
                    Oslash: "Ø",
                    osol: "⊘",
                    otilde: "õ",
                    Otilde: "Õ",
                    otimes: "⊗",
                    Otimes: "⨷",
                    otimesas: "⨶",
                    ouml: "ö",
                    Ouml: "Ö",
                    ovbar: "⌽",
                    OverBar: "‾",
                    OverBrace: "⏞",
                    OverBracket: "⎴",
                    OverParenthesis: "⏜",
                    par: "∥",
                    para: "¶",
                    parallel: "∥",
                    parsim: "⫳",
                    parsl: "⫽",
                    part: "∂",
                    PartialD: "∂",
                    pcy: "п",
                    Pcy: "П",
                    percnt: "%",
                    period: ".",
                    permil: "‰",
                    perp: "⊥",
                    pertenk: "‱",
                    pfr: "𝔭",
                    Pfr: "𝔓",
                    phi: "φ",
                    Phi: "Φ",
                    phiv: "ϕ",
                    phmmat: "ℳ",
                    phone: "☎",
                    pi: "π",
                    Pi: "Π",
                    pitchfork: "⋔",
                    piv: "ϖ",
                    planck: "ℏ",
                    planckh: "ℎ",
                    plankv: "ℏ",
                    plus: "+",
                    plusacir: "⨣",
                    plusb: "⊞",
                    pluscir: "⨢",
                    plusdo: "∔",
                    plusdu: "⨥",
                    pluse: "⩲",
                    PlusMinus: "±",
                    plusmn: "±",
                    plussim: "⨦",
                    plustwo: "⨧",
                    pm: "±",
                    Poincareplane: "ℌ",
                    pointint: "⨕",
                    popf: "𝕡",
                    Popf: "ℙ",
                    pound: "£",
                    pr: "≺",
                    Pr: "⪻",
                    prap: "⪷",
                    prcue: "≼",
                    pre: "⪯",
                    prE: "⪳",
                    prec: "≺",
                    precapprox: "⪷",
                    preccurlyeq: "≼",
                    Precedes: "≺",
                    PrecedesEqual: "⪯",
                    PrecedesSlantEqual: "≼",
                    PrecedesTilde: "≾",
                    preceq: "⪯",
                    precnapprox: "⪹",
                    precneqq: "⪵",
                    precnsim: "⋨",
                    precsim: "≾",
                    prime: "′",
                    Prime: "″",
                    primes: "ℙ",
                    prnap: "⪹",
                    prnE: "⪵",
                    prnsim: "⋨",
                    prod: "∏",
                    Product: "∏",
                    profalar: "⌮",
                    profline: "⌒",
                    profsurf: "⌓",
                    prop: "∝",
                    Proportion: "∷",
                    Proportional: "∝",
                    propto: "∝",
                    prsim: "≾",
                    prurel: "⊰",
                    pscr: "𝓅",
                    Pscr: "𝒫",
                    psi: "ψ",
                    Psi: "Ψ",
                    puncsp: " ",
                    qfr: "𝔮",
                    Qfr: "𝔔",
                    qint: "⨌",
                    qopf: "𝕢",
                    Qopf: "ℚ",
                    qprime: "⁗",
                    qscr: "𝓆",
                    Qscr: "𝒬",
                    quaternions: "ℍ",
                    quatint: "⨖",
                    quest: "?",
                    questeq: "≟",
                    quot: '"',
                    QUOT: '"',
                    rAarr: "⇛",
                    race: "∽̱",
                    racute: "ŕ",
                    Racute: "Ŕ",
                    radic: "√",
                    raemptyv: "⦳",
                    rang: "⟩",
                    Rang: "⟫",
                    rangd: "⦒",
                    range: "⦥",
                    rangle: "⟩",
                    raquo: "»",
                    rarr: "→",
                    rArr: "⇒",
                    Rarr: "↠",
                    rarrap: "⥵",
                    rarrb: "⇥",
                    rarrbfs: "⤠",
                    rarrc: "⤳",
                    rarrfs: "⤞",
                    rarrhk: "↪",
                    rarrlp: "↬",
                    rarrpl: "⥅",
                    rarrsim: "⥴",
                    rarrtl: "↣",
                    Rarrtl: "⤖",
                    rarrw: "↝",
                    ratail: "⤚",
                    rAtail: "⤜",
                    ratio: "∶",
                    rationals: "ℚ",
                    rbarr: "⤍",
                    rBarr: "⤏",
                    RBarr: "⤐",
                    rbbrk: "❳",
                    rbrace: "}",
                    rbrack: "]",
                    rbrke: "⦌",
                    rbrksld: "⦎",
                    rbrkslu: "⦐",
                    rcaron: "ř",
                    Rcaron: "Ř",
                    rcedil: "ŗ",
                    Rcedil: "Ŗ",
                    rceil: "⌉",
                    rcub: "}",
                    rcy: "р",
                    Rcy: "Р",
                    rdca: "⤷",
                    rdldhar: "⥩",
                    rdquo: "”",
                    rdquor: "”",
                    rdsh: "↳",
                    Re: "ℜ",
                    real: "ℜ",
                    realine: "ℛ",
                    realpart: "ℜ",
                    reals: "ℝ",
                    rect: "▭",
                    reg: "®",
                    REG: "®",
                    ReverseElement: "∋",
                    ReverseEquilibrium: "⇋",
                    ReverseUpEquilibrium: "⥯",
                    rfisht: "⥽",
                    rfloor: "⌋",
                    rfr: "𝔯",
                    Rfr: "ℜ",
                    rHar: "⥤",
                    rhard: "⇁",
                    rharu: "⇀",
                    rharul: "⥬",
                    rho: "ρ",
                    Rho: "Ρ",
                    rhov: "ϱ",
                    RightAngleBracket: "⟩",
                    rightarrow: "→",
                    Rightarrow: "⇒",
                    RightArrow: "→",
                    RightArrowBar: "⇥",
                    RightArrowLeftArrow: "⇄",
                    rightarrowtail: "↣",
                    RightCeiling: "⌉",
                    RightDoubleBracket: "⟧",
                    RightDownTeeVector: "⥝",
                    RightDownVector: "⇂",
                    RightDownVectorBar: "⥕",
                    RightFloor: "⌋",
                    rightharpoondown: "⇁",
                    rightharpoonup: "⇀",
                    rightleftarrows: "⇄",
                    rightleftharpoons: "⇌",
                    rightrightarrows: "⇉",
                    rightsquigarrow: "↝",
                    RightTee: "⊢",
                    RightTeeArrow: "↦",
                    RightTeeVector: "⥛",
                    rightthreetimes: "⋌",
                    RightTriangle: "⊳",
                    RightTriangleBar: "⧐",
                    RightTriangleEqual: "⊵",
                    RightUpDownVector: "⥏",
                    RightUpTeeVector: "⥜",
                    RightUpVector: "↾",
                    RightUpVectorBar: "⥔",
                    RightVector: "⇀",
                    RightVectorBar: "⥓",
                    ring: "˚",
                    risingdotseq: "≓",
                    rlarr: "⇄",
                    rlhar: "⇌",
                    rlm: "‏",
                    rmoust: "⎱",
                    rmoustache: "⎱",
                    rnmid: "⫮",
                    roang: "⟭",
                    roarr: "⇾",
                    robrk: "⟧",
                    ropar: "⦆",
                    ropf: "𝕣",
                    Ropf: "ℝ",
                    roplus: "⨮",
                    rotimes: "⨵",
                    RoundImplies: "⥰",
                    rpar: ")",
                    rpargt: "⦔",
                    rppolint: "⨒",
                    rrarr: "⇉",
                    Rrightarrow: "⇛",
                    rsaquo: "›",
                    rscr: "𝓇",
                    Rscr: "ℛ",
                    rsh: "↱",
                    Rsh: "↱",
                    rsqb: "]",
                    rsquo: "’",
                    rsquor: "’",
                    rthree: "⋌",
                    rtimes: "⋊",
                    rtri: "▹",
                    rtrie: "⊵",
                    rtrif: "▸",
                    rtriltri: "⧎",
                    RuleDelayed: "⧴",
                    ruluhar: "⥨",
                    rx: "℞",
                    sacute: "ś",
                    Sacute: "Ś",
                    sbquo: "‚",
                    sc: "≻",
                    Sc: "⪼",
                    scap: "⪸",
                    scaron: "š",
                    Scaron: "Š",
                    sccue: "≽",
                    sce: "⪰",
                    scE: "⪴",
                    scedil: "ş",
                    Scedil: "Ş",
                    scirc: "ŝ",
                    Scirc: "Ŝ",
                    scnap: "⪺",
                    scnE: "⪶",
                    scnsim: "⋩",
                    scpolint: "⨓",
                    scsim: "≿",
                    scy: "с",
                    Scy: "С",
                    sdot: "⋅",
                    sdotb: "⊡",
                    sdote: "⩦",
                    searhk: "⤥",
                    searr: "↘",
                    seArr: "⇘",
                    searrow: "↘",
                    sect: "§",
                    semi: ";",
                    seswar: "⤩",
                    setminus: "∖",
                    setmn: "∖",
                    sext: "✶",
                    sfr: "𝔰",
                    Sfr: "𝔖",
                    sfrown: "⌢",
                    sharp: "♯",
                    shchcy: "щ",
                    SHCHcy: "Щ",
                    shcy: "ш",
                    SHcy: "Ш",
                    ShortDownArrow: "↓",
                    ShortLeftArrow: "←",
                    shortmid: "∣",
                    shortparallel: "∥",
                    ShortRightArrow: "→",
                    ShortUpArrow: "↑",
                    shy: "­",
                    sigma: "σ",
                    Sigma: "Σ",
                    sigmaf: "ς",
                    sigmav: "ς",
                    sim: "∼",
                    simdot: "⩪",
                    sime: "≃",
                    simeq: "≃",
                    simg: "⪞",
                    simgE: "⪠",
                    siml: "⪝",
                    simlE: "⪟",
                    simne: "≆",
                    simplus: "⨤",
                    simrarr: "⥲",
                    slarr: "←",
                    SmallCircle: "∘",
                    smallsetminus: "∖",
                    smashp: "⨳",
                    smeparsl: "⧤",
                    smid: "∣",
                    smile: "⌣",
                    smt: "⪪",
                    smte: "⪬",
                    smtes: "⪬︀",
                    softcy: "ь",
                    SOFTcy: "Ь",
                    sol: "/",
                    solb: "⧄",
                    solbar: "⌿",
                    sopf: "𝕤",
                    Sopf: "𝕊",
                    spades: "♠",
                    spadesuit: "♠",
                    spar: "∥",
                    sqcap: "⊓",
                    sqcaps: "⊓︀",
                    sqcup: "⊔",
                    sqcups: "⊔︀",
                    Sqrt: "√",
                    sqsub: "⊏",
                    sqsube: "⊑",
                    sqsubset: "⊏",
                    sqsubseteq: "⊑",
                    sqsup: "⊐",
                    sqsupe: "⊒",
                    sqsupset: "⊐",
                    sqsupseteq: "⊒",
                    squ: "□",
                    square: "□",
                    Square: "□",
                    SquareIntersection: "⊓",
                    SquareSubset: "⊏",
                    SquareSubsetEqual: "⊑",
                    SquareSuperset: "⊐",
                    SquareSupersetEqual: "⊒",
                    SquareUnion: "⊔",
                    squarf: "▪",
                    squf: "▪",
                    srarr: "→",
                    sscr: "𝓈",
                    Sscr: "𝒮",
                    ssetmn: "∖",
                    ssmile: "⌣",
                    sstarf: "⋆",
                    star: "☆",
                    Star: "⋆",
                    starf: "★",
                    straightepsilon: "ϵ",
                    straightphi: "ϕ",
                    strns: "¯",
                    sub: "⊂",
                    Sub: "⋐",
                    subdot: "⪽",
                    sube: "⊆",
                    subE: "⫅",
                    subedot: "⫃",
                    submult: "⫁",
                    subne: "⊊",
                    subnE: "⫋",
                    subplus: "⪿",
                    subrarr: "⥹",
                    subset: "⊂",
                    Subset: "⋐",
                    subseteq: "⊆",
                    subseteqq: "⫅",
                    SubsetEqual: "⊆",
                    subsetneq: "⊊",
                    subsetneqq: "⫋",
                    subsim: "⫇",
                    subsub: "⫕",
                    subsup: "⫓",
                    succ: "≻",
                    succapprox: "⪸",
                    succcurlyeq: "≽",
                    Succeeds: "≻",
                    SucceedsEqual: "⪰",
                    SucceedsSlantEqual: "≽",
                    SucceedsTilde: "≿",
                    succeq: "⪰",
                    succnapprox: "⪺",
                    succneqq: "⪶",
                    succnsim: "⋩",
                    succsim: "≿",
                    SuchThat: "∋",
                    sum: "∑",
                    Sum: "∑",
                    sung: "♪",
                    sup: "⊃",
                    Sup: "⋑",
                    sup1: "¹",
                    sup2: "²",
                    sup3: "³",
                    supdot: "⪾",
                    supdsub: "⫘",
                    supe: "⊇",
                    supE: "⫆",
                    supedot: "⫄",
                    Superset: "⊃",
                    SupersetEqual: "⊇",
                    suphsol: "⟉",
                    suphsub: "⫗",
                    suplarr: "⥻",
                    supmult: "⫂",
                    supne: "⊋",
                    supnE: "⫌",
                    supplus: "⫀",
                    supset: "⊃",
                    Supset: "⋑",
                    supseteq: "⊇",
                    supseteqq: "⫆",
                    supsetneq: "⊋",
                    supsetneqq: "⫌",
                    supsim: "⫈",
                    supsub: "⫔",
                    supsup: "⫖",
                    swarhk: "⤦",
                    swarr: "↙",
                    swArr: "⇙",
                    swarrow: "↙",
                    swnwar: "⤪",
                    szlig: "ß",
                    Tab: "\t",
                    target: "⌖",
                    tau: "τ",
                    Tau: "Τ",
                    tbrk: "⎴",
                    tcaron: "ť",
                    Tcaron: "Ť",
                    tcedil: "ţ",
                    Tcedil: "Ţ",
                    tcy: "т",
                    Tcy: "Т",
                    tdot: "⃛",
                    telrec: "⌕",
                    tfr: "𝔱",
                    Tfr: "𝔗",
                    there4: "∴",
                    therefore: "∴",
                    Therefore: "∴",
                    theta: "θ",
                    Theta: "Θ",
                    thetasym: "ϑ",
                    thetav: "ϑ",
                    thickapprox: "≈",
                    thicksim: "∼",
                    ThickSpace: "  ",
                    thinsp: " ",
                    ThinSpace: " ",
                    thkap: "≈",
                    thksim: "∼",
                    thorn: "þ",
                    THORN: "Þ",
                    tilde: "˜",
                    Tilde: "∼",
                    TildeEqual: "≃",
                    TildeFullEqual: "≅",
                    TildeTilde: "≈",
                    times: "×",
                    timesb: "⊠",
                    timesbar: "⨱",
                    timesd: "⨰",
                    tint: "∭",
                    toea: "⤨",
                    top: "⊤",
                    topbot: "⌶",
                    topcir: "⫱",
                    topf: "𝕥",
                    Topf: "𝕋",
                    topfork: "⫚",
                    tosa: "⤩",
                    tprime: "‴",
                    trade: "™",
                    TRADE: "™",
                    triangle: "▵",
                    triangledown: "▿",
                    triangleleft: "◃",
                    trianglelefteq: "⊴",
                    triangleq: "≜",
                    triangleright: "▹",
                    trianglerighteq: "⊵",
                    tridot: "◬",
                    trie: "≜",
                    triminus: "⨺",
                    TripleDot: "⃛",
                    triplus: "⨹",
                    trisb: "⧍",
                    tritime: "⨻",
                    trpezium: "⏢",
                    tscr: "𝓉",
                    Tscr: "𝒯",
                    tscy: "ц",
                    TScy: "Ц",
                    tshcy: "ћ",
                    TSHcy: "Ћ",
                    tstrok: "ŧ",
                    Tstrok: "Ŧ",
                    twixt: "≬",
                    twoheadleftarrow: "↞",
                    twoheadrightarrow: "↠",
                    uacute: "ú",
                    Uacute: "Ú",
                    uarr: "↑",
                    uArr: "⇑",
                    Uarr: "↟",
                    Uarrocir: "⥉",
                    ubrcy: "ў",
                    Ubrcy: "Ў",
                    ubreve: "ŭ",
                    Ubreve: "Ŭ",
                    ucirc: "û",
                    Ucirc: "Û",
                    ucy: "у",
                    Ucy: "У",
                    udarr: "⇅",
                    udblac: "ű",
                    Udblac: "Ű",
                    udhar: "⥮",
                    ufisht: "⥾",
                    ufr: "𝔲",
                    Ufr: "𝔘",
                    ugrave: "ù",
                    Ugrave: "Ù",
                    uHar: "⥣",
                    uharl: "↿",
                    uharr: "↾",
                    uhblk: "▀",
                    ulcorn: "⌜",
                    ulcorner: "⌜",
                    ulcrop: "⌏",
                    ultri: "◸",
                    umacr: "ū",
                    Umacr: "Ū",
                    uml: "¨",
                    UnderBar: "_",
                    UnderBrace: "⏟",
                    UnderBracket: "⎵",
                    UnderParenthesis: "⏝",
                    Union: "⋃",
                    UnionPlus: "⊎",
                    uogon: "ų",
                    Uogon: "Ų",
                    uopf: "𝕦",
                    Uopf: "𝕌",
                    uparrow: "↑",
                    Uparrow: "⇑",
                    UpArrow: "↑",
                    UpArrowBar: "⤒",
                    UpArrowDownArrow: "⇅",
                    updownarrow: "↕",
                    Updownarrow: "⇕",
                    UpDownArrow: "↕",
                    UpEquilibrium: "⥮",
                    upharpoonleft: "↿",
                    upharpoonright: "↾",
                    uplus: "⊎",
                    UpperLeftArrow: "↖",
                    UpperRightArrow: "↗",
                    upsi: "υ",
                    Upsi: "ϒ",
                    upsih: "ϒ",
                    upsilon: "υ",
                    Upsilon: "Υ",
                    UpTee: "⊥",
                    UpTeeArrow: "↥",
                    upuparrows: "⇈",
                    urcorn: "⌝",
                    urcorner: "⌝",
                    urcrop: "⌎",
                    uring: "ů",
                    Uring: "Ů",
                    urtri: "◹",
                    uscr: "𝓊",
                    Uscr: "𝒰",
                    utdot: "⋰",
                    utilde: "ũ",
                    Utilde: "Ũ",
                    utri: "▵",
                    utrif: "▴",
                    uuarr: "⇈",
                    uuml: "ü",
                    Uuml: "Ü",
                    uwangle: "⦧",
                    vangrt: "⦜",
                    varepsilon: "ϵ",
                    varkappa: "ϰ",
                    varnothing: "∅",
                    varphi: "ϕ",
                    varpi: "ϖ",
                    varpropto: "∝",
                    varr: "↕",
                    vArr: "⇕",
                    varrho: "ϱ",
                    varsigma: "ς",
                    varsubsetneq: "⊊︀",
                    varsubsetneqq: "⫋︀",
                    varsupsetneq: "⊋︀",
                    varsupsetneqq: "⫌︀",
                    vartheta: "ϑ",
                    vartriangleleft: "⊲",
                    vartriangleright: "⊳",
                    vBar: "⫨",
                    Vbar: "⫫",
                    vBarv: "⫩",
                    vcy: "в",
                    Vcy: "В",
                    vdash: "⊢",
                    vDash: "⊨",
                    Vdash: "⊩",
                    VDash: "⊫",
                    Vdashl: "⫦",
                    vee: "∨",
                    Vee: "⋁",
                    veebar: "⊻",
                    veeeq: "≚",
                    vellip: "⋮",
                    verbar: "|",
                    Verbar: "‖",
                    vert: "|",
                    Vert: "‖",
                    VerticalBar: "∣",
                    VerticalLine: "|",
                    VerticalSeparator: "❘",
                    VerticalTilde: "≀",
                    VeryThinSpace: " ",
                    vfr: "𝔳",
                    Vfr: "𝔙",
                    vltri: "⊲",
                    vnsub: "⊂⃒",
                    vnsup: "⊃⃒",
                    vopf: "𝕧",
                    Vopf: "𝕍",
                    vprop: "∝",
                    vrtri: "⊳",
                    vscr: "𝓋",
                    Vscr: "𝒱",
                    vsubne: "⊊︀",
                    vsubnE: "⫋︀",
                    vsupne: "⊋︀",
                    vsupnE: "⫌︀",
                    Vvdash: "⊪",
                    vzigzag: "⦚",
                    wcirc: "ŵ",
                    Wcirc: "Ŵ",
                    wedbar: "⩟",
                    wedge: "∧",
                    Wedge: "⋀",
                    wedgeq: "≙",
                    weierp: "℘",
                    wfr: "𝔴",
                    Wfr: "𝔚",
                    wopf: "𝕨",
                    Wopf: "𝕎",
                    wp: "℘",
                    wr: "≀",
                    wreath: "≀",
                    wscr: "𝓌",
                    Wscr: "𝒲",
                    xcap: "⋂",
                    xcirc: "◯",
                    xcup: "⋃",
                    xdtri: "▽",
                    xfr: "𝔵",
                    Xfr: "𝔛",
                    xharr: "⟷",
                    xhArr: "⟺",
                    xi: "ξ",
                    Xi: "Ξ",
                    xlarr: "⟵",
                    xlArr: "⟸",
                    xmap: "⟼",
                    xnis: "⋻",
                    xodot: "⨀",
                    xopf: "𝕩",
                    Xopf: "𝕏",
                    xoplus: "⨁",
                    xotime: "⨂",
                    xrarr: "⟶",
                    xrArr: "⟹",
                    xscr: "𝓍",
                    Xscr: "𝒳",
                    xsqcup: "⨆",
                    xuplus: "⨄",
                    xutri: "△",
                    xvee: "⋁",
                    xwedge: "⋀",
                    yacute: "ý",
                    Yacute: "Ý",
                    yacy: "я",
                    YAcy: "Я",
                    ycirc: "ŷ",
                    Ycirc: "Ŷ",
                    ycy: "ы",
                    Ycy: "Ы",
                    yen: "¥",
                    yfr: "𝔶",
                    Yfr: "𝔜",
                    yicy: "ї",
                    YIcy: "Ї",
                    yopf: "𝕪",
                    Yopf: "𝕐",
                    yscr: "𝓎",
                    Yscr: "𝒴",
                    yucy: "ю",
                    YUcy: "Ю",
                    yuml: "ÿ",
                    Yuml: "Ÿ",
                    zacute: "ź",
                    Zacute: "Ź",
                    zcaron: "ž",
                    Zcaron: "Ž",
                    zcy: "з",
                    Zcy: "З",
                    zdot: "ż",
                    Zdot: "Ż",
                    zeetrf: "ℨ",
                    ZeroWidthSpace: "​",
                    zeta: "ζ",
                    Zeta: "Ζ",
                    zfr: "𝔷",
                    Zfr: "ℨ",
                    zhcy: "ж",
                    ZHcy: "Ж",
                    zigrarr: "⇝",
                    zopf: "𝕫",
                    Zopf: "ℤ",
                    zscr: "𝓏",
                    Zscr: "𝒵",
                    zwj: "‍",
                    zwnj: "‌"
                },
                y = {
                    aacute: "á",
                    Aacute: "Á",
                    acirc: "â",
                    Acirc: "Â",
                    acute: "´",
                    aelig: "æ",
                    AElig: "Æ",
                    agrave: "à",
                    Agrave: "À",
                    amp: "&",
                    AMP: "&",
                    aring: "å",
                    Aring: "Å",
                    atilde: "ã",
                    Atilde: "Ã",
                    auml: "ä",
                    Auml: "Ä",
                    brvbar: "¦",
                    ccedil: "ç",
                    Ccedil: "Ç",
                    cedil: "¸",
                    cent: "¢",
                    copy: "©",
                    COPY: "©",
                    curren: "¤",
                    deg: "°",
                    divide: "÷",
                    eacute: "é",
                    Eacute: "É",
                    ecirc: "ê",
                    Ecirc: "Ê",
                    egrave: "è",
                    Egrave: "È",
                    eth: "ð",
                    ETH: "Ð",
                    euml: "ë",
                    Euml: "Ë",
                    frac12: "½",
                    frac14: "¼",
                    frac34: "¾",
                    gt: ">",
                    GT: ">",
                    iacute: "í",
                    Iacute: "Í",
                    icirc: "î",
                    Icirc: "Î",
                    iexcl: "¡",
                    igrave: "ì",
                    Igrave: "Ì",
                    iquest: "¿",
                    iuml: "ï",
                    Iuml: "Ï",
                    laquo: "«",
                    lt: "<",
                    LT: "<",
                    macr: "¯",
                    micro: "µ",
                    middot: "·",
                    nbsp: " ",
                    not: "¬",
                    ntilde: "ñ",
                    Ntilde: "Ñ",
                    oacute: "ó",
                    Oacute: "Ó",
                    ocirc: "ô",
                    Ocirc: "Ô",
                    ograve: "ò",
                    Ograve: "Ò",
                    ordf: "ª",
                    ordm: "º",
                    oslash: "ø",
                    Oslash: "Ø",
                    otilde: "õ",
                    Otilde: "Õ",
                    ouml: "ö",
                    Ouml: "Ö",
                    para: "¶",
                    plusmn: "±",
                    pound: "£",
                    quot: '"',
                    QUOT: '"',
                    raquo: "»",
                    reg: "®",
                    REG: "®",
                    sect: "§",
                    shy: "­",
                    sup1: "¹",
                    sup2: "²",
                    sup3: "³",
                    szlig: "ß",
                    thorn: "þ",
                    THORN: "Þ",
                    times: "×",
                    uacute: "ú",
                    Uacute: "Ú",
                    ucirc: "û",
                    Ucirc: "Û",
                    ugrave: "ù",
                    Ugrave: "Ù",
                    uml: "¨",
                    uuml: "ü",
                    Uuml: "Ü",
                    yacute: "ý",
                    Yacute: "Ý",
                    yen: "¥",
                    yuml: "ÿ"
                },
                b = {
                    0: "�",
                    128: "€",
                    130: "‚",
                    131: "ƒ",
                    132: "„",
                    133: "…",
                    134: "†",
                    135: "‡",
                    136: "ˆ",
                    137: "‰",
                    138: "Š",
                    139: "‹",
                    140: "Œ",
                    142: "Ž",
                    145: "‘",
                    146: "’",
                    147: "“",
                    148: "”",
                    149: "•",
                    150: "–",
                    151: "—",
                    152: "˜",
                    153: "™",
                    154: "š",
                    155: "›",
                    156: "œ",
                    158: "ž",
                    159: "Ÿ"
                },
                x = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111],
                w = String.fromCharCode,
                C = {},
                T = C.hasOwnProperty,
                E = function(e, t) {
                    return T.call(e, t)
                },
                A = function(e, t) {
                    for (var n = -1, r = e.length; ++n < r;)
                        if (e[n] == t) return !0;
                    return !1
                },
                O = function(e, t) {
                    if (!e) return t;
                    var n, r = {};
                    for (n in t) r[n] = E(e, n) ? e[n] : t[n];
                    return r
                },
                D = function(e, t) {
                    var n = "";
                    return e >= 55296 && e <= 57343 || e > 1114111 ? (t && j("character reference outside the permissible Unicode range"), "�") : E(b, e) ? (t && j("disallowed character reference"), b[e]) : (t && A(x, e) && j("disallowed character reference"), e > 65535 && (e -= 65536, n += w(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), n += w(e))
                },
                k = function(e) {
                    return "&#x" + e.toString(16).toUpperCase() + ";"
                },
                S = function(e) {
                    return "&#" + e + ";"
                },
                j = function(e) {
                    throw Error("Parse error: " + e)
                },
                P = function(e, t) {
                    t = O(t, P.options);
                    var n = t.strict;
                    n && v.test(e) && j("forbidden code point");
                    var r = t.encodeEverything,
                        i = t.useNamedReferences,
                        o = t.allowUnsafeSymbols,
                        a = t.decimal ? S : k,
                        s = function(e) {
                            return a(e.charCodeAt(0))
                        };
                    return r ? (e = e.replace(c, function(e) {
                        return i && E(f, e) ? "&" + f[e] + ";" : s(e)
                    }), i && (e = e.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;")), i && (e = e.replace(p, function(e) {
                        return "&" + f[e] + ";"
                    }))) : i ? (o || (e = e.replace(d, function(e) {
                        return "&" + f[e] + ";"
                    })), e = e.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;"), e = e.replace(p, function(e) {
                        return "&" + f[e] + ";"
                    })) : o || (e = e.replace(d, s)), e.replace(u, function(e) {
                        var t = e.charCodeAt(0),
                            n = e.charCodeAt(1),
                            r = 1024 * (t - 55296) + n - 56320 + 65536;
                        return a(r)
                    }).replace(l, s)
                };
            P.options = {
                allowUnsafeSymbols: !1,
                encodeEverything: !1,
                strict: !1,
                useNamedReferences: !1,
                decimal: !1
            };
            var I = function(e, t) {
                t = O(t, I.options);
                var n = t.strict;
                return n && g.test(e) && j("malformed character reference"), e.replace(_, function(e, r, i, o, a, s, u, c) {
                    var l, p, f, d, h, g;
                    return r ? (f = r, p = i, n && !p && j("character reference was not terminated by a semicolon"), l = parseInt(f, 10), D(l, n)) : o ? (d = o, p = a, n && !p && j("character reference was not terminated by a semicolon"), l = parseInt(d, 16), D(l, n)) : s ? (h = s, E(m, h) ? m[h] : (n && j("named character reference was not terminated by a semicolon"), e)) : (h = u, g = c, g && t.isAttributeValue ? (n && "=" == g && j("`&` did not start a character reference"), e) : (n && j("named character reference was not terminated by a semicolon"), y[h] + (g || "")))
                })
            };
            I.options = {
                isAttributeValue: !1,
                strict: !1
            };
            var N = function(e) {
                    return e.replace(d, function(e) {
                        return h[e]
                    })
                },
                L = {
                    version: "1.1.1",
                    encode: P,
                    decode: I,
                    escape: N,
                    unescape: I
                };
            r = function() {
                return L
            }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))
        }(this)
    }).call(t, n(46)(e), function() {
        return this
    }())
}, function(e, t, n) {
    var r = n(302);
    "string" == typeof r && (r = [
        [e.id, r, ""]
    ]);
    n(86)(r, {
        singleton: "1",
        attrs: "data-gvp"
    });
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    t = e.exports = n(85)(), t.i(n(287), void 0), t.i(n(297), void 0), t.i(n(288), void 0), t.i(n(296), void 0), t.push([e.id, '.gvp_transcriptComponent__panel___1a7py{display:flex;flex-direction:column;-ms-flex:1 1 auto;flex:1 1 auto;white-space:normal;min-height:0;max-height:100%;background:#fff;border-radius:7px;padding:10px;box-sizing:border-box}.gvp_transcriptComponent__button___2m4m0{flex:0 0 auto;-ms-flex:0 0 auto;width:46px;height:46px;padding:4px}.gvp_transcriptComponent__button___2m4m0:hover path{fill:#666}.gvp_transcriptComponent__utilities___ff8xq{flex:0 0 auto;-ms-flex:0 0 auto;margin-top:10px;font-size:1em;position:relative;display:flex;align-items:center;justify-content:center}.gvp_transcriptComponent__panel___1a7py[min-width~="0px"][max-width~="214px"] .gvp_transcriptComponent__utilities___ff8xq{flex-wrap:wrap}.gvp_transcriptComponent__field___2x5x7{flex:1 1 auto;-ms-flex:1 1 auto;font-size:1em;height:2.4em!important;position:relative}.gvp_transcriptComponent__icon___2biki{position:absolute;height:28px;width:28px;fill:#999;top:50%;left:4px;transform:translateY(-50%);z-index:1}.gvp_transcriptComponent__input___Hux1T{box-sizing:border-box;width:100%;height:100%;min-width:0;background-color:#fff;border-radius:6px;border:1px solid #d2d2d2;box-shadow:inset -1px 3px 2px -2px rgba(0,0,0,.08);transition:border .3s linear 0s;margin:0!important;padding-left:34px!important;font-size:100%}.gvp_transcriptComponent__input___Hux1T:focus{border:1px solid #d2d2d2;outline:0}.gvp_transcriptComponent__input___Hux1T::-ms-clear{display:none}.gvp_transcriptComponent__body___1OhK1{background-color:#f2f2f2;border-radius:7px;line-height:1.5em;overflow-y:scroll;overflow-x:hidden;flex:1 1 auto;position:relative;text-align:left}.gvp_transcriptComponent__transcripts___2xxsJ{margin:10px;padding:6px;display:block;cursor:pointer;border-radius:7px;background:none;border-style:none;text-align:left;color:#191919;font-size:100%}.gvp_transcriptComponent__panel___1a7py[min-width~="0px"][max-width~="220px"] .gvp_transcriptComponent__transcripts___2xxsJ{margin:0;margin-top:10px;margin-bottom:10px}.gvp_transcriptComponent__transcripts___2xxsJ strong{font-family:Omnes-ATT-W02,Omnes_att_ii_regular,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:900;color:#fff;border-radius:3px;background-color:#00b1ed}.gvp_transcriptComponent__transcriptsActive___1v9FX{color:#fff;background-color:#191919}.gvp_transcriptComponent__printLine1___eHy-T{color:#d7d7d7;width:100%;height:1px;float:left;margin-top:20px}.gvp_transcriptComponent__printLine2___2wWt6{color:#e5e5e5;width:100%;height:1px;float:left;margin-top:10px}.gvp_transcriptComponent__printdescription___ILhem{margin-top:10px;font-family:arial;float:left}.gvp_transcriptComponent__printdescription1___q5atl{position:relative;float:left;width:140px;height:76px}.gvp_transcriptComponent__printbackgrimg___25uxR{position:absolute;left:0;top:0}.gvp_transcriptComponent__printthumbIcon___3NUVZ{position:absolute;left:15px;top:7px}.gvp_transcriptComponent__printvidouterdiv___2TruH{float:left;margin-left:20px}.gvp_transcriptComponent__printviddis___1PUl9{font-size:14pt;color:#333}.gvp_transcriptComponent__printvidtitle___8rIVT{font-size:20pt;color:#333}.gvp_transcriptComponent__printvidtimecode___1hfzs{font-size:12pt;color:#666}.gvp_transcriptComponent__printbody___2NVbV{margin-top:10px;font-size:12pt;font-family:arial;color:#333;clear:left;float:left}.gvp_transcriptComponent__printbodyspan___1tM3H{display:inline;color:#666}.gvp_transcriptComponent__printbodymargintop___3yfpQ{margin-top:10px}.gvp_transcriptComponent__printbodymarginbottom___1OeYP{margin-bottom:10px}.gvp_transcriptComponent__buttonPrint___o1KbV{margin-left:4px}', ""]), t.locals = {
        panel: "gvp_transcriptComponent__panel___1a7py",
        button: "gvp_transcriptComponent__button___2m4m0 " + n(287).locals.gvpButton,
        buttonPrint: "gvp_transcriptComponent__buttonPrint___o1KbV gvp_transcriptComponent__button___2m4m0 " + n(287).locals.gvpButton + " " + n(296).locals.button,
        utilities: "gvp_transcriptComponent__utilities___ff8xq",
        field: "gvp_transcriptComponent__field___2x5x7",
        icon: "gvp_transcriptComponent__icon___2biki",
        input: "gvp_transcriptComponent__input___Hux1T " + n(297).locals.font + " " + n(288).locals.focused,
        body: "gvp_transcriptComponent__body___1OhK1",
        transcripts: "gvp_transcriptComponent__transcripts___2xxsJ " + n(288).locals.focused + " " + n(297).locals.font,
        transcriptsActive: "gvp_transcriptComponent__transcriptsActive___1v9FX",
        printLine1: "gvp_transcriptComponent__printLine1___eHy-T",
        printLine2: "gvp_transcriptComponent__printLine2___2wWt6",
        printdescription: "gvp_transcriptComponent__printdescription___ILhem",
        printdescription1: "gvp_transcriptComponent__printdescription1___q5atl",
        printbackgrimg: "gvp_transcriptComponent__printbackgrimg___25uxR",
        printthumbIcon: "gvp_transcriptComponent__printthumbIcon___3NUVZ",
        printvidouterdiv: "gvp_transcriptComponent__printvidouterdiv___2TruH",
        printviddis: "gvp_transcriptComponent__printviddis___1PUl9",
        printvidtitle: "gvp_transcriptComponent__printvidtitle___8rIVT",
        printvidtimecode: "gvp_transcriptComponent__printvidtimecode___1hfzs",
        printbody: "gvp_transcriptComponent__printbody___2NVbV",
        printbodyspan: "gvp_transcriptComponent__printbodyspan___1tM3H",
        printbodymargintop: "gvp_transcriptComponent__printbodymargintop___3yfpQ",
        printbodymarginbottom: "gvp_transcriptComponent__printbodymarginbottom___1OeYP"
    }
}, function(e, t, n) {
    var r = n(304);
    "string" == typeof r && (r = [
        [e.id, r, ""]
    ]);
    n(86)(r, {
        singleton: "1",
        attrs: "data-gvp"
    });
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    t = e.exports = n(85)(), t.i(n(297), void 0), t.push([e.id, ".gvp_container__fill___3ELzD{width:100%;height:100%;position:relative;margin:auto;display:block}.gvp_container__column___OAwSP{display:flex;flex-direction:column}.gvp_container__row___D0kd7{display:flex;flex-direction:row;align-items:center}.gvp_container__center___1FWld{position:relative;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}", ""]), t.locals = {
        fill: "gvp_container__fill___3ELzD " + n(297).locals.base,
        column: "gvp_container__column___OAwSP gvp_container__fill___3ELzD " + n(297).locals.base,
        row: "gvp_container__row___D0kd7 gvp_container__fill___3ELzD " + n(297).locals.base,
        center: "gvp_container__center___1FWld"
    }
}, , function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(54),
        o = n(307),
        a = n(303),
        s = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.page = 0, t._radios = [{
                    label: "Answered all my questions"
                }, {
                    label: "Satisfied"
                }, {
                    label: "Neither satisfied nor disatisfied"
                }, {
                    label: "Unsatisfied"
                }, {
                    label: "Very unsatisfied"
                }], t
            }
            return r(t, e), t.prototype.reset = function() {
                this.page = 0
            }, Object.defineProperty(t.prototype, "html", {
                get: function() {
                    var e = this;
                    return 0 == this.page ? e.parse("div", {
                        class: o.form
                    }, e.parse("div", {
                        class: o.section
                    }, e.parse("div", {
                        class: o.heading
                    }, "What do you think of the video?"), function() {
                        for (var t = [], n = 0; n < e._radios.length; n++) {
                            var r = e._radios[n];
                            t.push(e.parse("label", {
                                class: o.checkbox,
                                for: "gvp_feedback_radio_" + n
                            }, e.parse("input", {
                                "aria-label": r.label,
                                id: "gvp_feedback_radio_" + n,
                                name: "gvp_feedback",
                                type: "radio",
                                value: "",
                                tabindex: "-1"
                            }), e.parse("div", {
                                class: o.label
                            }, r.label)))
                        }
                        return t
                    }()), e.parse("div", {
                        class: o.section
                    }, e.parse("div", {
                        class: o.heading
                    }, "Do you have any comments?"), e.parse("textarea", {
                        class: o.input,
                        "aria-label": "Comments"
                    })), e.parse("div", {
                        class: o.section
                    }, e.parse("button", {
                        class: o.cancel,
                        "event-click": function() {
                            "function" == typeof e.attributes.close && e.attributes.close()
                        }
                    }, "Cancel"), e.parse("button", {
                        class: o.submit,
                        "event-click": function() {
                            e.page = 1, e.invalidate()
                        }
                    }, "Submit"))) : e.parse("div", {
                        class: a.center
                    }, "Thank you for your feedback!")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.initialize = function() {}, t.prototype.refreshed = function() {}, t.prototype.added = function() {}, t
        }(i.Component);
    t.FeedbackComponent = s
}, function(e, t, n) {
    var r = n(308);
    "string" == typeof r && (r = [
        [e.id, r, ""]
    ]);
    n(86)(r, {
        singleton: "1",
        attrs: "data-gvp"
    });
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    t = e.exports = n(85)(), t.i(n(297), void 0), t.i(n(288), void 0), t.push([e.id, ".gvp_form__form___3JoQz{display:flex;flex-direction:column;align-items:stretch;justify-content:space-between;width:100%;height:100%}.gvp_form__heading___1Xd9D{font-size:1em;font-weight:bolder;padding-bottom:10px;color:#191919}.gvp_form__section___Ehs5a{flex:0 1 auto;padding-top:30px}.gvp_form__label___OKvgE{font-size:1em;color:#191919;font-weight:400}.gvp_form__button___28Bab{background-color:transparent;background-clip:padding-box;border:1px solid transparent;border-radius:8px;box-shadow:0 1px 2px 0 rgba(0,0,0,.15);cursor:pointer;display:inline-block;font-size:1.9rem;font-weight:400;max-width:470px;min-width:70px;padding:14px;position:relative;text-align:center;vertical-align:middle;white-space:nowrap;overflow:hidden;box-sizing:border-box}.gvp_form__button___28Bab:focus{border:3px solid #00b1ed;padding:12px}.gvp_form__cancel___37SD_{border:1px solid #d2d2d2;background-color:#f2f2f2;background:linear-gradient(180deg,#fcfcfc 0,#f2f2f2);color:#0568ae;box-shadow:0 5px 5px -5px rgba(0,0,0,.15);float:left}.gvp_form__cancel___37SD_:hover{color:#0568ae;outline-color:#000!important;background:linear-gradient(180deg,#f2f2f2 0,#fcfcfc)}.gvp_form__submit___3UPQA{border-color:#087ac2 transparent #0568ae;background-color:#0568ae;background:linear-gradient(180deg,#087ac2 0,#0568ae);color:#fff;float:right}.gvp_form__submit___3UPQA:hover{color:#fff;outline-color:#fff!important;background:linear-gradient(180deg,#0568ae 0,#087ac2)}.gvp_form__input___27KW2{box-sizing:border-box;width:100%;min-width:0;background-color:#fff;border-radius:6px;border:1px solid #d2d2d2;box-shadow:inset -1px 3px 2px -2px rgba(0,0,0,.08);transition:border .3s linear 0s;margin:0!important;padding:10px!important;font-size:1em}.gvp_form__input___27KW2:focus{border:1px solid #d2d2d2;outline:0}textarea{min-height:100px}.gvp_form__checkbox___bJJgq{background-color:transparent;border:3px;border-radius:7px;padding-left:7px;padding-right:7px}.gvp_form__checkbox___bJJgq *{display:inline-block;padding:5px;padding-left:8px}.gvp_form__checkbox___bJJgq input{width:20px;height:20px;vertical-align:text-top;cursor:pointer;border-radius:50%;background:none;pointer-events:none;border:1px solid #d2d2d2;box-shadow:inset -1px 3px 2px -2px rgba(0,0,0,.08);transition:border .3s linear 0s}.gvp_form__checkbox___bJJgq input:checked{background-color:#00b1ed}.gvp_form__checkbox___bJJgq input:focus{outline:none;border:3px solid #00b1ed;box-shadow:0}", ""]), t.locals = {
        form: "gvp_form__form___3JoQz",
        heading: "gvp_form__heading___1Xd9D " + n(297).locals.font,
        section: "gvp_form__section___Ehs5a",
        label: "gvp_form__label___OKvgE " + n(297).locals.font,
        button: "gvp_form__button___28Bab",
        cancel: "gvp_form__cancel___37SD_ gvp_form__button___28Bab",
        submit: "gvp_form__submit___3UPQA gvp_form__button___28Bab",
        input: "gvp_form__input___27KW2 " + n(297).locals.font + " " + n(288).locals.focused,
        checkbox: "gvp_form__checkbox___bJJgq " + n(297).locals.font
    }
}, , , , , , , function(e, t, n) {
    var r = n(316);
    "string" == typeof r && (r = [
        [e.id, r, ""]
    ]);
    n(86)(r, {
        singleton: "1",
        attrs: "data-gvp"
    });
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    t = e.exports = n(85)(), t.i(n(297), void 0), t.i(n(288), void 0), t.i(n(287), void 0), t.push([e.id, '.gvp_cta__ctaContainer___2gjI-{box-sizing:border-box;position:relative;color:#fff;display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1 1 auto;-ms-flex:1 1 auto;white-space:normal;cursor:pointer;text-align:center;height:100%;width:100%;overflow:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);background:#000}.gvp_cta__ctaContainer___2gjI-[min-width~="800px"]{height:500px}.gvp_cta__ctaContainer___2gjI-[min-width~="500px"][max-width~="800px"]{height:400px}.gvp_cta__ctaContainer___2gjI-[min-width~="251px"][max-width~="500px"]{height:220px;justify-content:flex-end;border-radius:7px}.gvp_cta__ctaContainer___2gjI-[min-width~="0px"][max-width~="250px"]{height:140px;justify-content:flex-end;border-radius:7px}.gvp_cta__actionable___3XcBq{position:absolute;width:100%;height:100%;z-index:2;left:0;top:0;background:none;border:none}.gvp_cta__ctaContainer___2gjI-[min-width~="251px"][max-width~="500px"] .gvp_cta__actionable___3XcBq,.gvp_cta__ctaContainer___2gjI-[min-width~="0px"][max-width~="250px"] .gvp_cta__actionable___3XcBq{border-radius:7px}.gvp_cta__ctaBackground___3AkhR{position:absolute;left:0;bottom:0;right:0;top:0;background-size:cover;background-position:50%;background-repeat:no-repeat}.gvp_cta__ctaPlayButton___32W_s{flex:1 1 auto;-ms-flex:1 1 auto;background-color:transparent;min-width:30px;fill:#fff;z-index:2;cursor:pointer;position:relative;width:100%;height:100%}.gvp_cta__ctaContainer___2gjI-[min-width~="800px"] .gvp_cta__ctaPlayButton___32W_s{max-width:120px;max-height:120px;margin:20px}.gvp_cta__ctaContainer___2gjI-[min-width~="500px"][max-width~="800px"] .gvp_cta__ctaPlayButton___32W_s{max-width:100px;max-height:100px;margin:10px}.gvp_cta__ctaContainer___2gjI-[min-width~="251px"][max-width~="500px"] .gvp_cta__ctaPlayButton___32W_s{max-width:70px;height:auto}.gvp_cta__ctaContainer___2gjI-[min-width~="0px"][max-width~="250px"] .gvp_cta__ctaPlayButton___32W_s{max-width:40px;height:auto}.gvp_cta__ctaTitle___1pD7e{flex:0 0 auto;-ms-flex:0 0 auto;z-index:2;position:relative;line-height:normal}.gvp_cta__ctaContainer___2gjI-[min-width~="800px"] .gvp_cta__ctaTitle___1pD7e{font-size:2em}.gvp_cta__ctaContainer___2gjI-[min-width~="500px"][max-width~="800px"] .gvp_cta__ctaTitle___1pD7e{font-size:1.4em}.gvp_cta__ctaContainer___2gjI-[min-width~="251px"][max-width~="500px"] .gvp_cta__ctaTitle___1pD7e{background:rgba(0,0,0,.5);font-size:1.2em;padding:6px;width:100%}.gvp_cta__ctaContainer___2gjI-[min-width~="0px"][max-width~="250px"] .gvp_cta__ctaTitle___1pD7e{display:none}.gvp_cta__ctaDuration___2H-pG{flex:0 0 auto;-ms-flex:0 0 auto;position:relative;line-height:normal;z-index:2}.gvp_cta__ctaContainer___2gjI-[min-width~="800px"] .gvp_cta__ctaDuration___2H-pG{font-size:2em;font-size:1.4em}.gvp_cta__ctaContainer___2gjI-[min-width~="251px"][max-width~="500px"] .gvp_cta__ctaDuration___2H-pG{background:rgba(0,0,0,.5);font-size:1.2em;padding:2px;padding-right:6px;width:100%}.gvp_cta__ctaContainer___2gjI-[min-width~="0px"][max-width~="250px"] .gvp_cta__ctaDuration___2H-pG{background:rgba(0,0,0,.5);font-size:1em;padding:2px;padding-right:6px;width:100%;text-align:right}.gvp_cta__ctaDescription___3bOz_{flex:1 1 auto;-ms-flex:1 1 auto;font-size:1.92rem;max-width:80rem;margin:auto;padding:10px;z-index:2;display:none}.gvp_cta__ctaThemeDark___3nCSH .gvp_cta__ctaBackground___3AkhR{opacity:.7}.gvp_cta__ctaThemeDark___3nCSH .gvp_cta__ctaDescription___3bOz_,.gvp_cta__ctaThemeDark___3nCSH .gvp_cta__ctaDuration___2H-pG,.gvp_cta__ctaThemeDark___3nCSH .gvp_cta__ctaTitle___1pD7e{text-shadow:1px 1px 8px rgba(0,0,0,.75)}.gvp_cta__ctaBackground___3AkhR .gvp_cta__ctaThemeLight___1jKlC{opacity:1}.gvp_cta__ctaPauseButton___3Et86{cursor:pointer;width:25px;padding:4px;left:10px}.gvp_cta__ctaAnimatedDurationBox___OXwiJ,.gvp_cta__ctaPauseButton___3Et86{z-index:3;fill:#fff;background:rgba(0,0,0,.25);height:25px;bottom:10px;position:absolute;opacity:.7}.gvp_cta__ctaAnimatedDurationBox___OXwiJ{width:70px;padding:2px;right:10px;border-radius:7px;justify-content:center}.gvp_cta__ctaCameraButton___1hNgO{width:25px;height:25px;bottom:0;right:42px;position:absolute;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.gvp_cta__ctaPlayRunTimeButton___3aKnk{width:18px;height:18px;bottom:4px;right:42px;position:absolute}.gvp_cta__ctaAnimatedDuration___2XD09{right:6px;position:absolute;height:25px;font-size:.9em}.gvp_cta__ctaVideo___zCQ-M{width:100%;height:100%;object-fit:cover!important;z-index:1;position:absolute;-webkit-filter:brightness(80%);-moz-filter:brightness(80%);-o-filter:brightness(80%);-ms-filter:brightness(80%);filter:brightness(80%)}', ""]), t.locals = {
        ctaContainer: "gvp_cta__ctaContainer___2gjI- " + n(297).locals.font,
        actionable: "gvp_cta__actionable___3XcBq " + n(288).locals.focused,
        ctaBackground: "gvp_cta__ctaBackground___3AkhR",
        ctaPlayButton: "gvp_cta__ctaPlayButton___32W_s " + n(287).locals.gvpButton,
        ctaTitle: "gvp_cta__ctaTitle___1pD7e",
        ctaDuration: "gvp_cta__ctaDuration___2H-pG",
        ctaDescription: "gvp_cta__ctaDescription___3bOz_",
        ctaThemeDark: "gvp_cta__ctaThemeDark___3nCSH",
        ctaThemeLight: "gvp_cta__ctaThemeLight___1jKlC",
        ctaPauseButton: "gvp_cta__ctaPauseButton___3Et86 " + n(287).locals.gvpButton,
        ctaAnimatedDurationBox: "gvp_cta__ctaAnimatedDurationBox___OXwiJ",
        ctaCameraButton: "gvp_cta__ctaCameraButton___1hNgO",
        ctaPlayRunTimeButton: "gvp_cta__ctaPlayRunTimeButton___3aKnk",
        ctaAnimatedDuration: "gvp_cta__ctaAnimatedDuration___2XD09",
        ctaVideo: "gvp_cta__ctaVideo___zCQ-M gvp_cta__ctaBackground___3AkhR"
    }
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(318),
        i = function() {
            function e(e) {
                var t = this;
                this.isLoaded = !1, this.imageLoaded = function() {
                    t.height = t.image.naturalHeight || t.image.offsetHeight || t.image.height, t.width = t.image.naturalWidth || t.image.offsetWidth || t.image.width, t.canvas.height = t.height, t.canvas.width = t.width, t.context.drawImage(t.image, 0, 0), t.isLoaded = !0, t.loadedFunction && t.loadedFunction()
                }, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext && this.canvas.getContext("2d"), this.image = new Image, this.image.setAttribute("crossorigin", "anonymous"), this.image.src = e, this.image.onload = this.imageLoaded
            }
            return e.prototype.loaded = function(e) {
                this.loadedFunction = e, this.isLoaded && this.loadedFunction()
            }, e.prototype.hasColorsSimilarTo = function(e, t) {
                var n = this.getImageData(t);
                if (!n) return 0;
                for (var i = n.data.length, o = 1, a = 0, s = -4, u = e.getDarkness(), c = 0;
                    (s += 4 * o) < i;)
                    if (0 != n.data[s + 3]) {
                        ++a;
                        var l = new r.Pixel(n.data[s], n.data[s + 1], n.data[s + 2], n.data[s + 3]),
                            p = l.getDarkness();
                        (p < u || Math.abs((p - u) / p) < .4) && c++
                    }
                var f = c / a;
                return f
            }, e.prototype.isDark = function() {
                var e = this.getImageData();
                if (!e) return !1;
                for (var t = e.data.length, n = 5, i = 0, o = -4, a = 0, s = 0, u = 0, c = 0;
                    (o += 4 * n) < t;)
                    if (++i, 0 != e.data[o + 3]) {
                        var l = new r.Pixel(e.data[o], e.data[o + 1], e.data[o + 2], e.data[o + 3]),
                            p = l.getDarkness();
                        p > .5 ? (u += p, a++) : (c += p, s++)
                    }
                var f = !1;
                if (0 != a && 0 != s) {
                    var d = u / a,
                        h = c / s;
                    console.log("Contrast: " + (d - h)), f = d - h > .5
                }
                return a > s
            }, e.prototype.getImageData = function(e) {
                "undefined" == typeof e && (e = {
                    x: 0,
                    y: 0,
                    w: 1,
                    h: 1
                });
                var t = null;
                try {
                    t = this.context.getImageData(this.width * e.x, this.height * e.y, this.width * e.w, this.height * e.h)
                } catch (e) {}
                return t
            }, e
        }();
    t.CanvasImage = i
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t, n, r) {
            this.r = e, this.g = t, this.b = t, this.a = "undefined" == typeof r ? 255 : r
        }
        return e.prototype.getDarkness = function() {
            return 0 == this.a ? 0 : 1 - (.299 * this.r + .587 * this.g + .114 * this.b) / 255
        }, e.prototype.toString = function() {
            return this.r + "," + this.g + "," + this.b + "," + this.a
        }, e
    }();
    t.Pixel = n
}, , , , , function(e, t) {
    e.exports = {
        name: "richmediacore",
        version: "4.1.26",
        updateDate: "04-26-2017",
        description: "Main core framework",
        main: "webpack.config.js",
        scripts: {
            local: "webpack --watch",
            build: "webpack --config webpack.config.min.js",
            demo: "webpack --config webpack.config.demo.js --watch",
            css: "tcm apps",
            init: "node webpack.init.js"
        },
        repository: {
            type: "git",
            url: "https://ch112h@codecloud.web.att.com/scm/~ch112h/richmediacore.git"
        },
        author: "",
        license: "ISC",
        dependencies: {
            "@types/he": "^0.5.29",
            "@types/jasmine-fixture": "^1.0.27",
            "@types/jasmine-jquery": "^1.5.27",
            "@types/virtual-dom": "^2.0.26",
            "@types/xml2js": "0.0.32",
            "babel-core": "^6.11.4",
            "babel-loader": "^6.2.4",
            "babel-plugin-transform-remove-strict-mode": "0.0.2",
            "babel-preset-react": "^6.11.1",
            "browser-sync": "^2.18.2",
            "browser-sync-webpack-plugin": "^1.1.3",
            "css-element-queries": "^0.3.2",
            "css-loader": "^0.23.1",
            "document-register-element": "^0.5.4",
            "exports-loader": "^0.6.3",
            "fs-extra": "^1.0.0",
            he: "^1.1.0",
            htmlparser: "^1.7.7",
            "imports-loader": "^0.6.5",
            jasmine: "^2.5.1",
            "jasmine-core": "^2.5.1",
            "jasmine-fixture": "^2.0.0",
            "jasmine-jquery": "^2.1.1",
            jquery: "^3.1.0",
            "jsx-loader": "^0.13.2",
            karma: "^1.2.0",
            "karma-chrome-launcher": "^2.0.0",
            "karma-coverage": "^1.1.1",
            "karma-firefox-launcher": "^1.0.0",
            "karma-jasmine": "^1.0.2",
            "karma-junit-reporter": "^1.1.0",
            "karma-phantomjs-launcher": "^1.0.2",
            "karma-read-json": "^1.1.0",
            "karma-webpack": "^1.8.0",
            lodash: "^4.15.0",
            "style-loader": "^0.13.1",
            three: "^0.79.0",
            "ts-loader": "^0.8.2",
            "tsunit.external": "^2.0.5",
            "typed-css-modules": "^0.1.11",
            typescript: "^2.0.0",
            typings: "^1.3.3",
            "virtual-dom": "^2.1.1",
            webpack: "^1.13.1",
            "webpack-clear-console": "^1.0.3",
            "webpack-strip": "^0.1.0",
            xml2js: "^0.4.17"
        }
    }
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(53),
        i = n(325),
        o = n(329),
        a = n(331),
        s = n(343),
        u = n(344),
        c = n(346),
        l = n(347),
        p = n(353),
        f = n(303),
        d = n(345),
        h = n(348),
        g = n(334),
        v = n(327),
        _ = n(50),
        m = n(315),
        y = function() {
            function e(e) {
                var t = this;
                this.api = {
                    asset: "",
                    target: "",
                    custom: "",
                    autoplay: "",
                    fullscreen: ""
                }, this.element = e, this.api.target = e.getAttribute("target");
                for (var n in this.api) this.setPorperties(n, e.getAttribute(n));
                this.api.custom = _.Utils.isGvpTagEmpty(r(this.customHTML(e.innerHTML))) ? null : e.innerHTML, this.element.innerHTML = "", this.a11y = new _.A11Y(e), e.setAttribute("aria-label", "Video Player"), g.InstanceManager.setTier(e.getAttribute("tier")), e.innerHTML = "", e.addEventListener("close", function(n) {
                    var r = n.target;
                    e.id == r.id && t.viewController.trigger(d.GvpEvent.CLOSE)
                }), e.addEventListener("play", function(n) {
                    var r = n.target;
                    e.id == r.id && t.viewController.trigger(d.GvpEvent.PLAY)
                }), e.addEventListener("pause", function(n) {
                    var r = n.target;
                    e.id == r.id && t.viewController.trigger(d.GvpEvent.PAUSE)
                }), this.conductor = new _.Conductor, this.track = new c.Track, this.viewController = new u.ViewController(e), this.track.subscribe(l.Constant.ERROR, function() {
                    _.Debug.log("~~~~~~~~~~~ ERROR VIEW REQUESTED FROM TRACK"), t.viewController.changeView(new o.ErrorView(t.conductor, t.track, {
                        html: t.api.custom
                    })), e.style.display = "none"
                }), this.track.subscribe(l.Constant.CTA, function() {
                    _.Debug.log("~~~~~~~~~~~ CTA VIEW REQUESTED FROM TRACK"), e.style.display = "", e.setAttribute("class", f.column), t.viewController.changeView(new i.CtaView(t.conductor, t.track, {
                        html: t.api.custom,
                        autoplay: t.api.autoplay
                    }))
                }), this.track.subscribe(l.Constant.LOADER, function() {
                    _.Debug.log("~~~~~~~~~~~ LOADING VIEW REQUESTED FROM TRACK"), e.style.display = "", t.viewController.changeView(new s.LoadingView(t.conductor, t.track, {
                        html: t.api.custom
                    }))
                }), this.track.subscribe(l.Constant.VIDEO, function() {
                    _.Debug.log("~~~~~~~~~~~ VIDEO VIEW REQUESTED FROM TRACK"), e.style.display = "", e.setAttribute("class", f.row), t.viewController.changeView(new a.PlayerView(t.conductor, t.track, {
                        autoPlay: !1
                    }), t.api.target)
                }), this.setId(e.getAttribute("asset") || e.getAttribute("video") || e.getAttribute("audio"))
            }
            return e.prototype.attached = function() {
                this.viewController && this.viewController.view && this.viewController.view.invalidate(!0)
            }, e.prototype.setPorperties = function(e, t) {
                this.api[e] = t, this.viewController && this.viewController.view && (this.viewController.view.updateConfig(e, t), this.viewController.view.invalidate())
            }, e.prototype.setTier = function(e) {
                h.MetaDataSingleton.new(), g.InstanceManager.setTier(e), this.setId(this.element.getAttribute("asset") || this.element.getAttribute("video") || this.element.getAttribute("audio"))
            }, e.prototype.setId = function(e) {
                var t = this;
                if (this.track.clearAssets(), this.api.asset = e, this.track.addId(this.api.asset), this.api.custom) {
                    var n = new v.CtaSubjectProperties;
                    n.id = this.api.asset, n.type = l.Constant.CTA, this.track.addAsset(n)
                }
                _.Utils.getURLParams();
                r(this.element).find("video").remove(), new p.LinkedDataSchema(e, p.LinkedDataSchema.VIDEO, function(e) {
                    r(t.element).prepend(e)
                })
            }, e.prototype.customHTML = function(e) {
                if (!(e && e.indexOf(m.ctaContainer) > -1)) {
                    var t = document.createElement("div");
                    t.innerHTML = e;
                    for (var n = t.getElementsByTagName("script"), r = n.length; r--;) n[r].parentNode.removeChild(n[r]);
                    return t.innerHTML
                }
            }, e
        }();
    t.Gvp = y
}, function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(53),
        o = n(326),
        a = n(327),
        s = n(317),
        u = n(318),
        c = n(328),
        l = n(315),
        p = n(50),
        f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.ctapaused = !1, t.handledEnded = !1, t.theme = l.ctaThemeDark, t.togglePlayPause = function(e) {
                    e && e.stopPropagation(), t.ctapaused ? (t.ctapaused = !1, t.video.play()) : (t.ctapaused = !0, t.video.pause())
                }, t.pauseVideo = function(e) {
                    e && e.stopPropagation(), t.ctapaused = !0, t.video.pause()
                }, t.playVideo = function(e) {
                    e && e.stopPropagation(), t.ctapaused = !1, t.video.play()
                }, t
            }
            return r(t, e), Object.defineProperty(t.prototype, "name", {
                get: function() {
                    return "CtaView"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "html", {
                get: function() {
                    var e = this;
                    return this._config.html ? e.parse("div", null) : this.isAutoplay() ? e.parse("div", {
                        class: l.ctaContainer
                    }, e.parse("div", {
                        class: l.ctaBackground,
                        style: {
                            "background-image": "url(" + this.ctaSubject.getProp("poster") + ")"
                        }
                    }), e.parse("video", {
                        class: l.ctaVideo,
                        autoplay: !0,
                        muted: !0,
                        volume: "0",
                        onloadedmetadata: "this.muted = true",
                        "event-playing": function() {
                            e.invalidate()
                        },
                        "event-pause": function() {
                            e.invalidate()
                        },
                        loop: !0
                    }, e.parse("source", {
                        type: "video/mp4",
                        src: this.ctaSubject.getProp("source") + ".m3u8"
                    }), e.parse("source", {
                        type: "video/mp4",
                        src: this.ctaSubject.getProp("source") + ".webm"
                    }), e.parse("source", {
                        type: "video/mp4",
                        src: this.ctaSubject.getProp("source") + ".mp4"
                    })), e.parse("div", {
                        class: l.ctaAnimatedDurationBox
                    }, e.parse("div", {
                        class: l.ctaPlayRunTimeButton,
                        "aria-label": "Play",
                        title: "Play"
                    }, " ", p.CameraButton.jsx(this.parse)), e.parse("div", {
                        class: l.ctaAnimatedDuration
                    }, this.ctaSubject.getProp("duration")))) : e.parse("div", {
                        class: l.ctaContainer + " " + this.theme + " " + c.ExternalStyleNames.cta
                    }, e.parse("div", {
                        class: l.ctaBackground + " " + c.ExternalStyleNames.ctaBackground,
                        style: {
                            "background-image": "url(" + this.ctaSubject.getProp("poster") + ")"
                        }
                    }), e.parse("div", {
                        class: l.ctaPlayButton + " " + c.ExternalStyleNames.ctaButton
                    }, e.parse("div", {
                        style: "position:absolute;top:50%;left:50%;width:100%;transform:translate(-50%,-50%);"
                    }, p.PlayButton.jsx(this.parse))), e.parse("div", {
                        class: l.ctaTitle + " " + c.ExternalStyleNames.ctaText
                    }, " ", this.ctaSubject.getProp("title"), " "), e.parse("div", {
                        class: l.ctaDuration + " " + c.ExternalStyleNames.ctaText
                    }, " ", this.ctaSubject.getProp("duration"), " "), e.parse("div", {
                        class: l.ctaDescription + " " + c.ExternalStyleNames.ctaText
                    }), e.parse("button", {
                        class: l.actionable,
                        tabindex: "-1",
                        "aria-label": "Play Video " + this.ctaSubject.getProp("title")
                    }))
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.play = function() {
                this.handleEnded()
            }, t.prototype.handleEnded = function() {
                this.handledEnded = !0, this.track.ended()
            }, t.prototype.refreshed = function() {
                if (this._config.html) {
                    var e = p.Utils.splitStringForDoubleCurlies(this._config.html),
                        t = this._config.html;
                    for (var n in e) t = t.replace("{{" + e[n] + "}}", this.ctaSubject.getProp(e[n]));
                    "undefined" != typeof this.element && (this.element.setAttribute("class", ""), this.element.setAttribute("data-component", "gvp-custom-cta"), this.element.innerHTML = t)
                }
            }, t.prototype.added = function() {
                var e = this;
                this._config.html ? this.addListener(this.element, "click", function(t) {
                    "gvp-custom-cta" == e.element.getAttribute("data-component") && (e.element.setAttribute("data-component", ""), e.element.innerHTML = "", e.track.ended())
                }) : (this.addListener(this.element.parentElement, "click", function(t) {
                    e.handleEnded()
                }), this.isAutoplay() ? i(document).on("scroll", function() {
                    e.inViewport()
                }) : "", this.isAutoplay() ? i(this.element).on("closed", function(t) {
                    e.ctapaused = !0, e.handledEnded = !1
                }) : "")
            }, t.prototype.loadView = function() {
                var t = this;
                this.conductor.clearSubjects(), e.prototype.loadView.call(this), this.ctaSubject = new p.Subject(new a.CtaSubjectProperties), this.ctaSubject.subscribe(p.Subject.UPDATED, function() {
                    t.invalidate()
                }), this.ctaSubject.watch("poster", function() {
                    var e = new s.CanvasImage(t.ctaSubject.getProp("poster"));
                    e.loaded(function() {
                        var n = e.hasColorsSimilarTo(new u.Pixel(200, 200, 200), {
                            x: .33,
                            y: .33,
                            w: .66,
                            h: .66
                        });
                        n > .1 ? t.theme = l.ctaThemeDark : t.theme = l.ctaThemeLight, t.invalidate()
                    })
                }), this.conductor.add(this.ctaSubject), this.loadData()
            }, t.prototype.inViewport = function() {
                if (!this.ctapaused && !this.handledEnded) {
                    var e, t, n = this.element;
                    return !(!n || 1 !== n.nodeType) && (t = document.documentElement, e = n.getBoundingClientRect(), !!this.video && void(e && e.top >= 0 && e.bottom >= 0 && e.right >= 0 && e.top <= t.clientHeight && e.bottom <= t.clientHeight && e.left <= t.clientWidth ? this.video.play() : e && e.top >= t.clientHeight || e.bottom <= 0 ? (1 != this.video.currentTime && (this.video.currentTime = 1), this.video.pause()) : e && e.top < 0 && e.bottom <= t.clientHeight || e.top >= 0 && e.bottom > t.clientHeight ? this.video.pause() : (this.video.currentTime = 0, this.video.pause())))
                }
            }, Object.defineProperty(t.prototype, "video", {
                get: function() {
                    if (this.element) return i(this.element).find("video").get(0)
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.isAutoplay = function() {
                return "" == this._config.autoplay || "true" == this._config.autoplay
            }, t
        }(o.View);
    t.CtaView = f
}, function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(50),
        o = function(e) {
            function t(t, n, r) {
                var i = e.call(this) || this;
                return i.close = function(e) {}, i._listeners = [], i._conductor = t, i._track = n, "undefined" != typeof r ? i._config = r : i._config = {}, i
            }
            return r(t, e), Object.defineProperty(t.prototype, "track", {
                get: function() {
                    return this._track
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "conductor", {
                get: function() {
                    return this._conductor
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.play = function() {}, t.prototype.pause = function() {}, t.prototype.click = function() {}, t.prototype.addListener = function(e, t, n) {
                this._listeners.push({
                    eventName: t,
                    element: e,
                    callback: n
                }), e.addEventListener(t, n)
            }, t.prototype.loadView = function() {}, t.prototype.loadData = function() {
                this._conductor.loadProps(this._track.getProps())
            }, t.prototype.viewDidAppear = function() {
                this.initialize()
            }, t.prototype.viewWillAppear = function() {}, t.prototype.viewWillDisappear = function() {
                for (var e in this._listeners) {
                    var t = this._listeners[e];
                    try {
                        t.element.removeEventListener(t.eventName, t.callback)
                    } catch (e) {}
                }
                this._listeners = []
            }, t.prototype.viewDidDisappear = function() {}, t.prototype.updateConfig = function(e, t) {
                this._config[e] = t
            }, t
        }(i.CoreView);
    t.View = o
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {
            this.id = null, this.title = null, this.poster = null, this.duration = null, this.type = null, this.description = null, this.state = null, this.source = null
        }
        return e
    }();
    t.CtaSubjectProperties = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return e
    }();
    n.cta = "gvp-cta", n.ctaBackground = "gvp-cta-background", n.ctaText = "gvp-cta-text", n.ctaButton = "gvp-cta-button", t.ExternalStyleNames = n
}, function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(326),
        o = n(327),
        a = n(330),
        s = n(50),
        u = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), Object.defineProperty(t.prototype, "name", {
                get: function() {
                    return "ErrorView"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "html", {
                get: function() {
                    var e = this;
                    return e.parse("div", {
                        style: "visibility: hidden",
                        name: "ErrorView",
                        state: this.errorSubject.getProp("state")
                    }, this.errorSubject.getProp("state"), ":[", this.errorSubject.getProp("id"), "]")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.handleEnded = function() {
                this.track.ended()
            }, t.prototype.refreshed = function() {}, t.prototype.added = function() {
                new a.ReportHelper(this.element, this.errorSubject)
            }, t.prototype.loadView = function() {
                var e = this;
                this.conductor.clearSubjects(), this.errorSubject = new s.Subject(new o.CtaSubjectProperties), this.errorSubject.subscribe(s.Subject.UPDATED, function() {
                    e.invalidate()
                }), this.conductor.add(this.errorSubject), this.loadData()
            }, t
        }(i.View);
    t.ErrorView = u
}, function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(53),
        o = n(50),
        a = function(e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.videoStart = !0, r.timeInit = Date.now(), r.loadEvent = "waiting", r.seekTimer = null, r.videoprogress = 0, r.contollerActions = ["Pause Button", "Play Button", "Mute Toggle", "Captions Toggle", "Full screen Toggle", "Transcript Toggle", "Seek Slider", "Volume Slider"], r.transcriptActions = ["Transcript Print Button", "Text", "Transcript Slider"], r.videoActions = ["Close Transcript", "Print Transcript", "Content Filter"], r.sliderActions = ["Seek Slider", "Volume Slider", "Transcript Slider"], r.videoSubject = n, r.target = t, r
            }
            return r(t, e), Object.defineProperty(t.prototype, "target", {
                set: function(e) {
                    var n = this;
                    if (e) {
                        if (e.attributes.name && "ErrorView" === e.attributes.name.value) {
                            var r = {};
                            return r.videoId = this.getVideoSubject("id"), r.videoPlayerName = "AT&T Global Video Player 4", r.successFlag = "0", r.errorType = this.videoSubject.getProp("state"), "Failure_ID_Expired" === this.videoSubject.getProp("state") ? r.statusMessage = "Video ID is expired (EOL)" : "Failure_ID_Invalid" === this.videoSubject.getProp("state") && (r.statusMessage = "Video ID is invalid"), void this.sendReport(t.EVENT_VIDEO_ERROR, r)
                        }
                        window.onbeforeunload = function() {
                            i(e).trigger("closed")
                        };
                        var a = i(e).find("video").get(0),
                            s = i(e).find("[report-title]");
                        s.each(function(e) {
                            i(s[e]).on("keydown mousedown touchstart keyup mouseup touchend", function(e) {
                                if (9 !== (e.keyCode || e.which)) {
                                    var r = n.contollerActions.concat(n.transcriptActions).concat(n.videoActions);
                                    if (e.currentTarget && e.currentTarget.attributes && e.currentTarget.attributes["report-title"] && r.indexOf(e.currentTarget.attributes["report-title"].value) > -1) {
                                        var i = n.getCommonValues();
                                        i.videoControlAction = n.getVideoControlAction(e.keyCode || e.which), i.videoControlName = e.currentTarget.attributes["report-title"].value, i.videoControlLocation = n.getVideoControlLocation(e.currentTarget.attributes["report-title"].value), e.currentTarget.attributes["aria-pressed"] && e.currentTarget.attributes["aria-pressed"].value ? (i.videoControlActionValue = n.getCotrllerToggleValues(e.currentTarget.attributes["report-title"].value, e.currentTarget.attributes["aria-pressed"].value), n.sendReport(t.EVENT_VIDEO_INTERACTION, i)) : n.sliderActions.indexOf(e.currentTarget.attributes["report-title"].value) > -1 ? (n.seekTimer && clearTimeout(n.seekTimer), n.seekTimer = setTimeout(function() {
                                            i.videoControlAction = "Drag", i.videoControlActionValue = Math.floor(100 * (a.currentTime / o.Timecode.timecodeToSeconds(n.getVideoSubject("duration")))) + "%", n.sendReport(t.EVENT_VIDEO_INTERACTION, i)
                                        }, 3e3)) : n.sendReport(t.EVENT_VIDEO_INTERACTION, i)
                                    }
                                }
                            })
                        }), i(e).on("closed", function(e) {
                            var r = n.getCommonValues();
                            r.videoProgressType = "Milestone", r.videoProgressPercent = n.videoprogress, r.videoBufferTime = Math.floor(n.getWaitTime(n.waitTime)), r.videoLengthViewed = Math.floor(a.currentTime), r.statusCode = "0", n.sendReport(t.EVENT_VIDEO_PROGRESS, r)
                        }), i(a).bind("timeupdate", function() {
                            if (n.videoStart) {
                                var e = n.getCommonValues();
                                e.videoLaunchDate = n.launchDate(n.getVideoSubject("date")), e.videoAutoPlayFlag = "0", e.statusCode = "0", n.sendReport(t.EVENT_VIDEO_START, e), n.videoStart = !1
                            }
                            n.videoprogress = Math.floor(100 * (a.currentTime / o.Timecode.timecodeToSeconds(n.getVideoSubject("duration")))) + "%"
                        }), i(a).bind("waiting canplaythrough loadstart ended seeking click", function(e) {
                            setTimeout(function() {
                                n.handleVideoEvent(e, a)
                            }, 1)
                        })
                    }
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.handleVideoEvent = function(e, n) {
                switch (e.type) {
                    case "click":
                        if (n.paused) {
                            var r = this.getCommonValues();
                            r.videoControlAction = this.getVideoControlAction(e.keyCode || e.which), r.videoControlName = "Pause Button", r.videoControlLocation = "video", this.sendReport(t.EVENT_VIDEO_INTERACTION, r)
                        } else {
                            var r = this.getCommonValues();
                            r.videoControlAction = this.getVideoControlAction(e.keyCode || e.which), r.videoControlName = "Play Button", r.videoControlLocation = "video", this.sendReport(t.EVENT_VIDEO_INTERACTION, r)
                        }
                        break;
                    case "ended":
                        var i = this.getCommonValues();
                        i.videoProgressType = "Milestone", this.videoprogress = "100%", i.videoProgressPercent = this.videoprogress, i.videoBufferTime = Math.floor(this.getWaitTime(this.waitTime)), i.videoLengthViewed = Math.floor(n.currentTime), i.statusCode = "0", this.sendReport(t.EVENT_VIDEO_PROGRESS, i), this.videoStart = !0;
                        break;
                    case "loadstart":
                        this.loadEvent = "loadstart", this.timeLoad = Date.now();
                        break;
                    case "waiting":
                        this.loadEvent = "waiting", this.timeWaiting = Date.now();
                        break;
                    case "canplaythrough":
                        this.timeCanPlayThrough = Date.now(), "waiting" === this.loadEvent ? this.waitTime = this.timeCanPlayThrough - this.timeWaiting : this.waitTime = this.timeCanPlayThrough - this.timeLoad;
                        break;
                    case "error":
                        var o = this.getCommonValues();
                        o.videoId = this.getVideoSubject("id"), o.videoPlayerName = "AT&T Global Video Player 4", o.successFlag = "0", o.errorType = "Failure_Playback", o.statusMessage = "Catch all for any other playback related issues", this.sendReport(t.EVENT_VIDEO_ERROR, o)
                }
            }, t.prototype.getCommonValues = function() {
                var e = {};
                return e.videoId = this.getVideoSubject("id"), e.videoFriendlyName = this.getVideoSubject("title"), e.videoDescription = this.getVideoSubject("description"), e.videoLengthTotal = this.hmsToSecondsOnly(this.getVideoSubject("duration")), e.videoCategory = this.getCategory(this.getVideoSubject("category")), e.videoPlayerName = "AT&T Global Video Player 4", e.successFlag = "1", e.errorType = "Success_Admit", e
            }, t.prototype.getVideoSubject = function(e) {
                return this.videoSubject.getProp(e)
            }, t.prototype.getCategory = function(e) {
                if (e && e.length > 1) {
                    for (var t = e[0], n = 0; n < e.length; n++) t += "~" + e[n];
                    return t
                }
                return e
            }, t.prototype.hmsToSecondsOnly = function(e) {
                for (var t = e.split(":"), n = 0, r = 1; t.length > 0;) n += r * parseInt(t.pop(), 10), r *= 60;
                return n
            }, t.prototype.getWaitTime = function(e) {
                return "undefined" == typeof e || e < 100 ? "00" : e / 1e3
            }, t.prototype.launchDate = function(e) {
                if (e) {
                    var t = new Date(e),
                        n = "" + (t.getMonth() + 1),
                        r = "" + t.getDate(),
                        i = t.getFullYear();
                    return n.length < 2 && (n = "0" + n), r.length < 2 && (r = "0" + r), [i, n, r].join("")
                }
            }, t.prototype.getVideoContollerName = function(e) {
                var t = {
                    "Close Video": "",
                    "Pause Video": "Pause Button",
                    "Play Video": "Play Button",
                    "Mute Video": "Mute Toggle",
                    "Unmute Video": "Mute Toggle",
                    "Closed Captions": "Captions Toggle",
                    "Fullscreen Video": "Full screen Toggle",
                    "Video Transcript": "Transcript Toggle",
                    "Close Transcript": "Transcript Toggle",
                    "Print Transcript": "Transcript Print Button",
                    "Content Filter": "Transcript Search Button",
                    "Seek Video": "Seek Slider",
                    "Video Volume": "Volume Slider"
                };
                return t[e]
            }, t.prototype.getCotrllerToggleValues = function(e, t) {
                return e && "Captions Toggle" === e ? "true" === t ? "Off" : "On" : e && "Full screen Toggle" === e ? "true" === t ? "Disabled" : "Enabled" : e && "Transcript Toggle" === e ? "false" === t ? "Open" : "Close" : e && "Mute Toggle" === e ? "true" === t ? "On" : "Off" : void 0
            }, t.prototype.getVideoControlLocation = function(e) {
                return this.contollerActions.indexOf(e) > -1 ? "Controller" : this.transcriptActions.indexOf(e) > -1 ? "Transcript" : "Video"
            }, t
        }(o.Report);
    a.EVENT_VIDEO_START = "Video_Commence", a.EVENT_VIDEO_COMPLETE = "Video_Complete", a.EVENT_VIDEO_PROGRESS = "Video_Update", a.EVENT_VIDEO_ERROR = "Video_Error_Display", a.EVENT_VIDEO_INTERACTION = "Video_Interact", a.EVENT_VIDEO_FEEDBACK = "Video_Feedback", a.EVENT_VIDEO_IMPRESSION = "Video_Impression", t.ReportHelper = a
}, function(e, t, n) {
    (function(e) {
        var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return function(t, n) {
                function r() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(53),
            o = n(326),
            a = n(332),
            s = n(333),
            u = n(334),
            c = n(330),
            l = n(336),
            p = n(340),
            f = n(341);
        n(47);
        var d = n(48),
            h = n(342),
            g = n(50),
            v = function(t) {
                function n() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ariaLiveText = "", e._fullScreenManualTest = !1, e.close = function(t) {
                        t && t.stopPropagation(), e.fullscreen = !1, e.dispatch("closed"), u.InstanceManager.remove(e), e.player.playing = !1, e.track.playFirst()
                    }, e
                }
                return r(n, t), Object.defineProperty(n.prototype, "name", {
                    get: function() {
                        return "PlayerView"
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.invalidate = function(e) {
                    var n = this;
                    if (t.prototype.invalidate.call(this, e), e) {
                        var r = this.small;
                        new d(this.element, function() {
                            var e = !1;
                            !r && n.small ? e = !0 : r && !n.small && (e = !0), r = n.small, e && n.invalidate(!0)
                        })
                    }
                }, n.prototype.initialize = function() {
                    "" != this.element.parentElement.getAttribute("fullscreen") && "true" != this.element.parentElement.getAttribute("fullscreen") || (this.fullscreen = !0)
                }, n.prototype.play = function() {
                    this.player.playing = !0
                }, n.prototype.pause = function() {
                    this.player.playing = !1
                }, n.prototype.click = function() {
                    this.player.playing = !this.player.playing
                }, n.prototype.added = function() {
                    if (new c.ReportHelper(this.element, this.videoSubject), this.setupKeyboardControl(), u.InstanceManager.register(this), u.InstanceManager.doToAllExceptThis(this, "close"), document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
                        var e = "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange",
                            t = this;
                        i(document).on(e, function(e) {
                            var n = document.fullscreenElement || document.msFullscreenElement || document.mozFullScreen || document.webkitIsFullScreen ? "FullscreenOn" : "FullscreenOff";
                            "FullscreenOn" === n ? (t.fullscreen = !0, t._fullScreenManualTest = !0) : (t.fullscreen = !1, t._fullScreenManualTest = !1)
                        })
                    } else i(document).on("keyup", function(e) {
                        27 == e.keyCode && (t.fullscreen = !1)
                    })
                }, n.prototype.setupKeyboardControl = function() {
                    var e = this;
                    this.element && this.element.parentElement && this.addListener(this.element.parentElement, "keydown", function(t) {
                        if ("input" !== t.target.nodeName.toLowerCase() && "textarea" !== t.target.nodeName.toLowerCase() || 27 == t.keyCode) {
                            if (32 == t.keyCode) return void("button" !== t.target.nodeName.toLowerCase() && (e.player.playing = !e.player.playing, t.preventDefault()));
                            if (37 == t.keyCode || 39 == t.keyCode) {
                                if ("slider" !== t.target.getAttribute("role")) return e.player.currentTime = 37 == t.keyCode ? e.player.currentTime - 2 : e.player.currentTime + 2, void t.preventDefault();
                                var n = Number(t.target.getAttribute("reflect")),
                                    r = Math.ceil(100 / t.target.offsetWidth * 10);
                                "undefined" != typeof n && (t.target.setAttribute("value", 37 == t.keyCode ? n - r : n + r), e.invalidate()), t.preventDefault()
                            }
                            return 38 == t.keyCode || 40 == t.keyCode ? (e.player.volume = 38 == t.keyCode ? e.player.volume + .1 : e.player.volume - .1, void t.preventDefault()) : void(27 == t.keyCode && (e.panel && e.panel.element && i(e.panel.element).has(t.target).length ? (e.panel.value = null, i(e.element).find('[aria-label="Video Transcript"]').focus()) : e._fullScreenManualTest || e.close()))
                        }
                    })
                }, Object.defineProperty(n.prototype, "small", {
                    get: function() {
                        return !!this.element && (this.element.offsetWidth < 500 || void 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(n.prototype, "modal", {
                    get: function() {
                        return !(!this.element || !this.element.parentElement) && (this._forceModal ? this._forceModal : !this.fullscreen && (this.element.parentElement.offsetWidth < 450 && "false" !== this.element.parentElement.getAttribute("modal")))
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.refreshed = function() {
                    var t = this;
                    if (this._config.target && this.element) {
                        var n = document.getElementById(this._config.target);
                        n && this.element.parentElement !== n && (n.appendChild(this.element), e(function() {
                            t.player.playing = !0
                        }))
                    }
                }, n.prototype.loadView = function() {
                    var e = this;
                    this.conductor.clearSubjects(), this.playerSubject = new g.Subject(new s.PlayerSubjectProperties), this.videoSubject = new g.Subject(new a.VideoSubjectProperties), this.conductor.add(this.playerSubject), this.conductor.add(this.videoSubject), this.videoSubject.subscribe(g.Subject.UPDATED, function() {
                        e.invalidate(!0)
                    }), this.loadData()
                }, Object.defineProperty(n.prototype, "html", {
                    get: function() {
                        var e = this;
                        return e.parse("div", {
                            class: l.view + (this.modal ? " " + l.modal : "") + (this.fullscreen ? " " + l.fullscreen : ""),
                            "data-modal": this.modal || this.fullscreen,
                            "event-click": function(t) {
                                e.modal && t.target === e.element && e.close()
                            }
                        }, e.parse("div", {
                            "aria-live": "polite",
                            style: "position:absolute;visible:hidden;"
                        }, this.ariaLiveText), e.parse("div", {
                            class: l.player + (this.modal ? " " + l.modal : "") + (this.fullscreen ? " " + l.fullscreen : "")
                        }, e.parse("button", {
                            id: "closeVideo",
                            "event-click": this.close,
                            class: l.closeButton + (this.modal ? " " + l.modal : ""),
                            style: this.fullscreen ? "display:none;" : "",
                            title: "Close Video",
                            "arial-label": "Close Video"
                        }, g.ClosePanelButton.jsx(this.parse)), e.parse("div", {
                            class: l.viewport + (this.fullscreen ? " " + l.fullscreen : "") + (this.modal ? " " + l.modal : "")
                        }, e.parse("div", {
                            style: this.fullscreen ? "display:none; " : "",
                            class: l.title
                        }, this.videoSubject.getProp("title")), e.parse(h.VideoComponent, {
                            id: "player",
                            class: l.video + (this.fullscreen ? " " + l.fullscreen : "") + (this.modal ? " " + l.modal : ""),
                            source: this.getSource(),
                            volume: ".75",
                            track: this.track,
                            cards: this.videoSubject.getProp("cards"),
                            textTracks: this.videoSubject.getProp("captions")
                        }), e.parse(h.CaptionComponent, {
                            id: "captionComponent",
                            caption: this.videoSubject.getProp("captions"),
                            value: this.player ? this.player.currentTime : 0,
                            textTrack: this.player ? this.player.textTrack : null
                        }), this.small ? this.createPanel() : "", e.parse("div", {
                            class: l.controller + (this.fullscreen ? " " + l.fullscreen : ""),
                            role: "group"
                        }, e.parse("button", {
                            class: p.controllerButton,
                            "event-click": function(t) {
                                e.player.isAtEnd ? e.player.replay() : e.player.playing = !e.player.playing
                            },
                            "aria-label": "Play Pause",
                            "report-title": this.player && this.player.playing ? "Pause Button" : "Play Button",
                            title: this.player && this.player.playing ? "Video is Playing" : "Video is Paused",
                            "aria-pressed": this.player && this.player.playing ? "true" : "false"
                        }, function() {
                            return e.player && e.player.playing ? g.PauseButton.jsx(e.parse) : g.PlayButton.jsx(e.parse)
                        }()), e.parse(h.RangeComponent, {
                            class: p.controllerRangeSeek,
                            reflect: this.player ? Math.round(this.player.currentTime / this.player.totalTime * 100) : 0,
                            update: function(t) {
                                e.player && (e.player.currentTime = t / 100 * e.player.totalTime)
                            },
                            title: "Seek Video",
                            "report-title": "Seek Slider",
                            "aria-label": "Seek Video",
                            role: "slider",
                            "aria-valuenow": this.player ? Math.round(this.player.currentTime) : 0,
                            "aria-valuetext": this.player ? g.Timecode.secondsToSpeech(this.player.currentTime) : "0 Seconds",
                            "aria-valuemin": "0",
                            "aria-valuemax": this.player ? this.player.totalTime : 0
                        }), e.parse("button", {
                            class: p.controllerButton,
                            "event-click": function(t) {
                                e.player.muted = !e.player.muted
                            },
                            "aria-label": "Mute Video",
                            "report-title": "Mute Toggle",
                            title: (this.player && this.player.volume) > 0 ? "Video Unmuted" : "Video Muted",
                            "aria-pressed": (this.player && this.player.volume) > 0 ? "false" : "true"
                        }, function() {
                            return g.VolumeButton.jsx(e.parse, e.player ? e.player.volume > 0 ? e.player.volume : e.player.muted ? 0 : .001 : 0)
                        }()), this.player.canChangeVolume ? e.parse(h.RangeComponent, {
                            class: p.controllerRangeVolume,
                            reflect: this.player ? Math.round(100 * this.player.volume) : 0,
                            update: function(t) {
                                e.player && (e.player.volume = t / 100)
                            },
                            title: "Video Volume",
                            "report-title": "Volume Slider",
                            "aria-label": "Video Volume",
                            role: "slider",
                            "aria-valuenow": this.player ? 100 * this.player.volume : 0,
                            "aria-valuetext": this.player ? 100 * this.player.volume + "%" : "0%",
                            "aria-valuemin": "0",
                            "aria-valuemax": "100"
                        }) : "", e.parse("button", {
                            class: p.controllerButton + (this.captionComponent && this.captionComponent.showing ? " " + f.gvpButtonDown : ""),
                            "event-click": function(t) {
                                e.captionComponent && (e.captionComponent.showing = !e.captionComponent.showing)
                            },
                            "aria-label": "Closed Captions",
                            "report-title": "Captions Toggle",
                            title: this.captionComponent && this.captionComponent.showing ? "Closed Captions On" : "Closed Captions Off",
                            "aria-pressed": this.captionComponent && this.captionComponent.showing ? "true" : "false"
                        }, function() {
                            return g.CaptionButton.jsx(e.parse)
                        }()), e.parse("button", {
                            class: p.controllerButton + (this.fullscreen ? " " + f.gvpButtonDown : ""),
                            "event-click": function(t) {
                                e.fullscreen = !e.fullscreen
                            },
                            "aria-label": "Fullscreen Video",
                            title: "Fullscreen Video",
                            "report-title": "Full screen Toggle",
                            "aria-pressed": this.fullscreen ? "true" : "false"
                        }, function() {
                            return g.FullScreenButton.jsx(e.parse, e.fullscreen)
                        }()), e.parse("button", {
                            class: p.controllerButton + (this.panel && this.panel.value === h.TranscriptComponent ? " " + f.gvpButtonDown : ""),
                            "event-click": function(t) {
                                e.panel && (e.panel.value = h.TranscriptComponent)
                            },
                            "aria-label": "Video Transcript",
                            "report-title": "Transcript Toggle",
                            "aria-expanded": this.panel && this.panel.value === h.TranscriptComponent ? "true" : "false",
                            "aria-controls": "gvpTranscriptPanel",
                            title: this.panel && this.panel.value === h.TranscriptComponent ? "Transcript Open" : "Transcript Closed"
                        }, function() {
                            return g.TranscriptButton.jsx(e.parse, !!e.panel && e.panel.value === h.TranscriptComponent)
                        }()))), this.small ? "" : this.createPanel()))
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.getSource = function() {
                    var e = this.videoSubject.getProp("source");
                    return e = e.filter(function(e, t, n) {
                        return n.indexOf(e) == t
                    })
                }, n.prototype.createPanel = function() {
                    var e = this;
                    return e.parse(h.PanelComponent, {
                        id: "panel",
                        class: l.panel + (this.fullscreen ? " " + l.fullscreen : "") + (this.modal ? " " + l.modal : "")
                    }, this.panel && this.panel.value === h.TranscriptComponent ? e.parse(h.TranscriptComponent, {
                        id: "transcript",
                        captiondata: this.videoSubject.getProp("captions"),
                        value: this.player ? this.player.currentTime : 0,
                        printTitle: this.videoSubject.getProp("title"),
                        duration: this.videoSubject.getProp("duration"),
                        date: this.videoSubject.getProp("date"),
                        thumbIcon: this.videoSubject.getProp("thumbIcon"),
                        update: function(t) {
                            e.player && (e.player.currentTime = t)
                        }
                    }) : "", this.panel && this.panel.value === h.FeedbackComponent ? e.parse(h.FeedbackComponent, {
                        id: "feedback",
                        close: function() {
                            e.panel.value = null
                        }
                    }) : "")
                }, Object.defineProperty(n.prototype, "fullscreen", {
                    get: function() {
                        return !!this._forceModal || ("undefined" != typeof document.fullscreenEnabled ? document.fullscreenEnabled && document.fullscreenElement === this.element : "undefined" != typeof document.webkitFullscreenEnabled ? document.webkitFullscreenEnabled && document.webkitFullscreenElement === this.element : "undefined" != typeof document.mozFullScreenEnabled ? document.mozFullScreenEnabled && document.mozFullScreenElement === this.element : "undefined" != typeof document.msFullscreenEnabled && (document.msFullscreenEnabled && document.msFullscreenElement === this.element))
                    },
                    set: function(e) {
                        this.element && (e ? this.element.requestFullscreen ? this.element.requestFullscreen() : this.element.msRequestFullscreen ? this.element.msRequestFullscreen() : this.element.mozRequestFullScreen ? this.element.mozRequestFullScreen() : this.element.webkitRequestFullscreen ? this.element.webkitRequestFullscreen() : this._forceModal = !0 : this._forceModal ? this._forceModal = !1 : document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen(), this.invalidate())
                    },
                    enumerable: !0,
                    configurable: !0
                }), n
            }(o.View);
        t.PlayerView = v
    }).call(t, n(42).setImmediate)
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {
            this.id = null, this.title = null, this.poster = null, this.type = null, this.source = null, this.captions = null, this.duration = null, this.description = null, this.date = null, this.thumbIcon = null, this.category = null, this.cards = null, this.captions = new Array
        }
        return e
    }();
    t.VideoSubjectProperties = n
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {
            this.id = null, this.type = null, this.title = null
        }
        return e
    }();
    t.PlayerSubjectProperties = n
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(335),
        i = function() {
            function e() {}
            return e.register = function(t) {
                if (t && t.constructor) {
                    var n = e,
                        r = t.constructor,
                        i = 0;
                    for (i; i < n.types.length && n.types[i] !== r; i++);
                    n.types[i] = r;
                    for (var o = 0; o < n.instances.length; o++)
                        if (n.instances[o] === t) return !0;
                    return n.instances.push(t), !1
                }
            }, e.remove = function(t) {
                if (t && t.constructor)
                    for (var n = e, r = n.instances.length - 1; r >= 0; r--) n.instances[r] === t && n.instances.splice(r, 1)
            }, e.getAllOfSameType = function(t) {
                for (var n = e, r = [], i = 0; i < n.instances.length; i++) n.instances[i].constructor === t.constructor && r.push(n.instances[i]);
                return r
            }, e.doToAllExceptThis = function(t, n, r) {
                for (var i = e, o = i.getAllOfSameType(t), a = 0; a < o.length; a++) t !== o[a] && "function" == typeof o[a][n] && o[a][n].apply(o[a], r)
            }, e.setTier = function(t) {
                e.tier = t
            }, e.getTier = function() {
                return e.tier
            }, e
        }();
    i.types = [], i.instances = [], i.tier = r.CoreConstant.TIER_PROD, t.InstanceManager = i
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return Object.defineProperty(e, "TIER_LOCAL", {
            get: function() {
                return "LOCAL"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "TIER_PRESTAGE", {
            get: function() {
                return "PRESTAGE"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "TIER_FINALSTAGE", {
            get: function() {
                return "FINALSTAGE"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "TIER_TST05", {
            get: function() {
                return "TST05"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "TIER_PROD", {
            get: function() {
                return "PROD"
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.CoreConstant = n
}, function(e, t, n) {
    var r = n(337);
    "string" == typeof r && (r = [
        [e.id, r, ""]
    ]);
    n(86)(r, {
        singleton: "1",
        attrs: "data-gvp"
    });
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    t = e.exports = n(85)(), t.i(n(297), void 0), t.i(n(338), void 0), t.i(n(339), void 0), t.push([e.id, '.gvp_player__view___ngDOB{background:#191919;display:-ms-flexbox;display:flex;-ms-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:10px;width:100%;height:100%;flex:1 1 auto;-ms-flex:1 1 auto;box-sizing:border-box}.gvp_player__view___ngDOB.gvp_player__modal___3MC2a{background:rgba(0,0,0,.8);position:fixed!important;left:0;top:0;height:100%;z-index:99999999;align-items:center;width:100%}.gvp_player__player___3HRuS{display:flex;-ms-justify-content:center;-ms-flex-pack:center;justify-content:center;max-width:100%;min-height:0;max-height:100%;height:100%;-ms-flex:0 1 auto;flex:0 1 auto;position:relative;box-sizing:border-box}.gvp_player__player___3HRuS.gvp_player__fullscreen___35_E5{padding:0;width:100%}.gvp_player__player___3HRuS.gvp_player__modal___3MC2a{max-height:600px;background-color:#191919;padding:10px;border-radius:7px}.gvp_player__view___ngDOB[min-width~="500px"][max-width~="800px"] .gvp_player__player___3HRuS.gvp_player__modal___3MC2a,.gvp_player__view___ngDOB[min-width~="251px"][max-width~="500px"] .gvp_player__player___3HRuS.gvp_player__modal___3MC2a{max-height:500px}.gvp_player__top___1p1UW{flex:1 1 auto;width:100%;position:relative}.gvp_player__viewport___1kBsw{display:flex;-ms-flex-direction:column;flex-direction:column;justify-content:center;-ms-flex:1 1 auto;flex:1 1 auto;min-height:0;max-height:100%;min-width:0;max-width:854px;position:relative;width:854px;height:100%}.gvp_player__viewport___1kBsw.gvp_player__fullscreen___35_E5{width:100%;max-width:100%}.gvp_player__title___24fCD{color:#00b1ed;font-size:1.6em;line-height:1em;flex:0 0 auto;-ms-flex:0 0 auto;text-align:left;padding:10px;padding-bottom:20px;padding-left:0;padding-right:0;width:calc(100% - 54px)}.gvp_player__view___ngDOB[min-width~="500px"][max-width~="800px"] .gvp_player__title___24fCD{font-size:1.2em}.gvp_player__view___ngDOB[min-width~="251px"][max-width~="500px"] .gvp_player__title___24fCD{font-size:1em}.gvp_player__view___ngDOB[min-width~="0px"][max-width~="250px"] .gvp_player__title___24fCD{display:none}.gvp_player__closeButton___3csrY{position:absolute;top:-10px;right:0;z-index:1}.gvp_player__view___ngDOB[min-width~="500px"][max-width~="800px"] .gvp_player__closeButton___3csrY,.gvp_player__view___ngDOB[min-width~="251px"][max-width~="500px"] .gvp_player__closeButton___3csrY{margin:0}.gvp_player__closeButton___3csrY.gvp_player__modal___3MC2a{top:0}.gvp_player__video___QxH3C{-ms-flex:1 1 auto;flex:1 1 auto;position:relative;max-width:854px;min-height:0;max-height:100%;width:100%;background-color:#000}.gvp_player__video___QxH3C.gvp_player__modal___3MC2a{-ms-flex:0 1 auto;flex:0 1 auto}.gvp_player__video___QxH3C.gvp_player__fullscreen___35_E5{width:100%;max-width:100%}.gvp_player__view___ngDOB[min-width~="0px"][max-width~="250px"] .gvp_player__controller___Ytm4a{display:none}.gvp_player__panel___l3-qF{width:100%;flex:1 1 auto;-ms-flex:1 1 auto}.gvp_player__view___ngDOB[min-width~="0px"][max-width~="250px"] .gvp_player__panel___l3-qF{display:none}.gvp_player__view___ngDOB[min-width~="251px"][max-width~="500px"] .gvp_player__panel___l3-qF{flex:1 1 auto;min-width:100%;max-width:100%;min-height:0;max-height:240px;height:240px;margin-left:0;margin-right:0;margin-top:10px}.gvp_player__view___ngDOB[min-width~="500px"][max-width~="800px"] .gvp_player__panel___l3-qF{max-width:276px;min-width:180px;margin-left:10px;margin-top:3em}.gvp_player__view___ngDOB[min-width~="800px"] .gvp_player__panel___l3-qF{min-width:276px;max-width:276px;margin-top:3.5em;margin-left:10px}.gvp_player__view___ngDOB[min-width~="800px"] .gvp_player__panel___l3-qF.gvp_player__fullscreen___35_E5,.gvp_player__view___ngDOB[min-width~="500px"][max-width~="800px"] .gvp_player__panel___l3-qF.gvp_player__fullscreen___35_E5{margin-top:0!important}.gvp_player__view___ngDOB[min-width~="500px"][max-width~="800px"] .gvp_player__panel___l3-qF.gvp_player__modal___3MC2a{max-height:446px}', ""]),
        t.locals = {
            view: "gvp_player__view___ngDOB",
            modal: "gvp_player__modal___3MC2a",
            player: "gvp_player__player___3HRuS",
            fullscreen: "gvp_player__fullscreen___35_E5",
            top: "gvp_player__top___1p1UW",
            viewport: "gvp_player__viewport___1kBsw",
            title: "gvp_player__title___24fCD " + n(297).locals.font,
            closeButton: "gvp_player__closeButton___3csrY " + n(338).locals.controllerButton,
            video: "gvp_player__video___QxH3C",
            controller: "gvp_player__controller___Ytm4a " + n(338).locals.controller,
            panel: "gvp_player__panel___l3-qF " + n(339).locals.panel
        }
}, function(e, t, n) {
    t = e.exports = n(85)(), t.i(n(287), void 0), t.push([e.id, '.gvp_controller__controller___2I1jJ{flex:0 0 auto;-ms-flex:0 0 auto;display:flex;align-items:stretch;min-height:60px;clear:both;position:relative;width:100%;flex-shrink:0;flex-wrap:wrap;justify-content:space-between}.gvp_controller__controllerButton___1CqFd{width:58px;height:58px;margin:4px;padding:12px;flex:1 1 auto;max-width:58px;max-height:58px;order:1}.gvp_controller__controller___2I1jJ[min-width~="0px"][max-width~="250px"] .gvp_controller__controllerButton___1CqFd{margin:0;padding:0;max-width:28px;max-height:28px;min-width:0;min-height:0;width:28px;height:28px}.gvp_controller__controller___2I1jJ[min-width~="251px"][max-width~="500px"] .gvp_controller__controllerButton___1CqFd{padding:6px;margin:0;max-width:48px;max-height:48px;min-width:0;min-height:0;width:48px;height:48px}.gvp_controller__controllerRange___1PQb_{margin:4px;flex:1 1 auto;-ms-flex:1 1 auto;-webkit-flex:1 1 auto;position:relative;order:1;min-height:58px;padding:12px;box-sizing:border-box}.gvp_controller__controller___2I1jJ[min-width~="251px"][max-width~="500px"] .gvp_controller__controllerRangeSeek___IU8dg,.gvp_controller__controller___2I1jJ[min-width~="0px"][max-width~="250px"] .gvp_controller__controllerRangeSeek___IU8dg{order:0;flex:1 1 auto;-ms-flex:1 1 auto;width:100%;padding:6px;margin:0}.gvp_controller__controllerRangeVolume___2XJoT{max-width:80px}.gvp_controller__controller___2I1jJ[max-width~="700px"] .gvp_controller__controllerRangeVolume___2XJoT{display:none}', ""]), t.locals = {
        controller: "gvp_controller__controller___2I1jJ",
        controllerButton: "gvp_controller__controllerButton___1CqFd " + n(287).locals.gvpButton,
        controllerRange: "gvp_controller__controllerRange___1PQb_ " + n(287).locals.gvpButton,
        controllerRangeSeek: "gvp_controller__controllerRangeSeek___IU8dg gvp_controller__controllerRange___1PQb_ " + n(287).locals.gvpButton,
        controllerRangeVolume: "gvp_controller__controllerRangeVolume___2XJoT gvp_controller__controllerRange___1PQb_ " + n(287).locals.gvpButton
    }
}, function(e, t, n) {
    t = e.exports = n(85)(), t.i(n(287), void 0), t.i(n(297), void 0), t.i(n(288), void 0), t.push([e.id, '.gvp_panel__panel___3npm1{display:flex;flex-direction:column;-ms-flex:1 1 auto;flex:1 1 auto;white-space:normal;min-height:0;max-height:100%;background:#fff;border-radius:7px;padding:10px;box-sizing:border-box;text-align:left}.gvp_panel__button___1LFOH{flex:0 0 auto;-ms-flex:0 0 auto;width:46px;height:46px;padding:4px}.gvp_panel__button___1LFOH:hover path{fill:#666}.gvp_panel__utilities___6KZfb{flex:0 0 auto;-ms-flex:0 0 auto;margin-top:10px;font-size:1em;position:relative;display:flex;align-items:center;justify-content:center}.gvp_panel__panel___3npm1[min-width~="0px"][max-width~="214px"] .gvp_panel__utilities___6KZfb{flex-wrap:wrap}.gvp_panel__field___3tVoi{flex:1 1 auto;-ms-flex:1 1 auto;font-size:1em;height:2.4em!important;position:relative}.gvp_panel__icon___1gNZT{position:absolute;height:28px;width:28px;fill:#999;top:50%;left:4px;transform:translateY(-50%);z-index:1}.gvp_panel__input___1wZRV{box-sizing:border-box;width:100%;height:100%;min-width:0;background-color:#fff;border-radius:6px;border:1px solid #d2d2d2;box-shadow:inset -1px 3px 2px -2px rgba(0,0,0,.08);transition:border .3s linear 0s;margin:0!important;padding-left:34px!important}.gvp_panel__input___1wZRV:focus{border:1px solid #d2d2d2;outline:0}.gvp_panel__body___284Pp{background-color:#f2f2f2;border-radius:7px;line-height:1.5em;overflow-y:scroll;overflow-x:hidden;flex:1 1 auto;position:relative;text-align:left}.gvp_panel__input___1wZRV::-webkit-input-placeholder{font-size:1em;font-family:Omnes-ATT-W02,Omnes_att_ii_regular,Helvetica Neue,Helvetica,Arial,sans-serif}.gvp_panel__input___1wZRV::-moz-placeholder{font-size:1em;font-family:Omnes-ATT-W02,Omnes_att_ii_regular,Helvetica Neue,Helvetica,Arial,sans-serif}.gvp_panel__input___1wZRV:-ms-input-placeholder{font-size:1em;font-family:Omnes-ATT-W02,Omnes_att_ii_regular,Helvetica Neue,Helvetica,Arial,sans-serif}.gvp_panel__input___1wZRV:-moz-placeholder{font-size:1em;font-family:Omnes-ATT-W02,Omnes_att_ii_regular,Helvetica Neue,Helvetica,Arial,sans-serif}', ""]), t.locals = {
        panel: "gvp_panel__panel___3npm1",
        button: "gvp_panel__button___1LFOH " + n(287).locals.gvpButton,
        utilities: "gvp_panel__utilities___6KZfb",
        field: "gvp_panel__field___3tVoi",
        icon: "gvp_panel__icon___1gNZT",
        input: "gvp_panel__input___1wZRV " + n(297).locals.font + " " + n(288).locals.focused,
        body: "gvp_panel__body___284Pp"
    }
}, function(e, t, n) {
    var r = n(338);
    "string" == typeof r && (r = [
        [e.id, r, ""]
    ]);
    n(86)(r, {
        singleton: "1",
        attrs: "data-gvp"
    });
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    var r = n(287);
    "string" == typeof r && (r = [
        [e.id, r, ""]
    ]);
    n(86)(r, {
        singleton: "1",
        attrs: "data-gvp"
    });
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    r(n(290)), r(n(280)), r(n(294)), r(n(284)), r(n(299)), r(n(306)), r(n(82))
}, function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(326),
        o = n(315),
        a = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), Object.defineProperty(t.prototype, "name", {
                get: function() {
                    return "LoadingView"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "html", {
                get: function() {
                    var e = this;
                    return e.parse("div", {
                        class: o.ctaContainer
                    })
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.refreshed = function() {}, t.prototype.added = function() {}, t.prototype.loadView = function() {
                this.conductor.clearSubjects(), this.loadData()
            }, t
        }(i.View);
    t.LoadingView = a
}, function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(345),
        o = n(50),
        a = function(e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return r(t, e), t.prototype.trigger = function(e) {
                if (this.view) switch (this._localView = this.view, e) {
                    case i.GvpEvent.PLAY:
                        this._localView.play();
                        break;
                    case i.GvpEvent.PAUSE:
                        this._localView.pause();
                        break;
                    case i.GvpEvent.CLICK:
                        this._localView.click();
                        break;
                    case i.GvpEvent.CLOSE:
                        this._localView.close()
                }
            }, t
        }(o.CoreViewController);
    t.ViewController = a
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {}
        return Object.defineProperty(e, "ON", {
            get: function() {
                return "ON"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "OFF", {
            get: function() {
                return "OFF"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "PLAY", {
            get: function() {
                return "PLAY"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "PAUSE", {
            get: function() {
                return "PAUSE"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "CLOSE", {
            get: function() {
                return "CLOSE"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "CLICK", {
            get: function() {
                return "CLICK"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "TIMEUPDATE", {
            get: function() {
                return "TIMEUPDATE"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "VOLUME", {
            get: function() {
                return "VOLUME"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "MUTE", {
            get: function() {
                return "MUTE"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "UNMUTE", {
            get: function() {
                return "UNMUTE"
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.GvpEvent = n
}, function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(347),
        o = n(348),
        a = n(352),
        s = n(50),
        u = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t._playingIdx = -1, t._playAttempts = 0, t._assets = new Array, t._assetOrder = new Array, t
            }
            return r(t, e), t.prototype.clearAssets = function() {
                this._assets = new Array, this._assetOrder = new Array, this._playingIdx = -1
            }, t.prototype.addId = function(e) {
                var t = this;
                this._assetOrder.push(s.Utils.prefixKey(e)), o.MetaDataSingleton.add(e, function() {
                    var n = new a.MetaDataSolr(o.MetaDataSingleton.getMetaDataWithId(e).data);
                    t._assets[s.Utils.prefixKey(e)] = {
                        id: e,
                        type: n.type,
                        data: n
                    }, n.type == i.Constant.VIDEO && t._assetOrder[0] == s.Utils.prefixKey(e) ? (t._assets[s.Utils.prefixKey(e, "cta")] = {
                        id: e,
                        type: i.Constant.CTA,
                        data: n
                    }, t._assetOrder.unshift(s.Utils.prefixKey(e, "cta")), t._playingIdx >= 0 && t._playingIdx++) : "undefined" !== t._assetOrder[s.Utils.prefixKey(e, "cta")] && (t._assets[s.Utils.prefixKey(e, "cta")] = {
                        id: e,
                        type: i.Constant.CTA,
                        data: n
                    }), n.type == i.Constant.ERROR && t._assetOrder[0] == s.Utils.prefixKey(e) && (t._assets[s.Utils.prefixKey(e, "cta")] = {
                        id: e,
                        type: i.Constant.ERROR,
                        data: n
                    }, t._assetOrder.unshift(s.Utils.prefixKey(e, "cta")), t._playingIdx >= 0 && t._playingIdx++), "" != n.postRoll && o.MetaDataSingleton.add(n.postRoll, function() {
                        var e = new a.MetaDataSolr(o.MetaDataSingleton.getMetaDataWithId(n.postRoll).data);
                        for (var r in t._assets) t._assets[r].type == i.Constant.VIDEO && t._assets[r].data.postRoll == e.id && (t._assets[r].data.appendCaptions(e.captions), t._assets[r].data.addSource(e.source[0]))
                    }), t._playingIdx == -1 && t.playFirst()
                })
            }, t.prototype._playCurrent = function() {
                var e = this;
                if (this._playingIdx >= 0 && this._assetOrder.length > this._playingIdx) {
                    var t = this._assets[this._assetOrder[this._playingIdx]];
                    "undefined" == typeof t ? (this.emit(i.Constant.LOADER), this._playAttempts++, this._playAttempts < 5 ? (s.Debug.log("Asset undefined, lets try again..."), setTimeout(function() {
                        e._playCurrent()
                    }, 2e3)) : this._playAttempts = 0) : (this._playAttempts = 0, this.emit(t.type))
                }
            }, t.prototype.play = function(e) {
                this._playingIdx = this._assetOrder.indexOf(s.Utils.prefixKey(e)), this._playCurrent()
            }, t.prototype.addAsset = function(e) {
                e.type == i.Constant.CTA ? (this._assetOrder.unshift(s.Utils.prefixKey(e.id, "cta")), this._assets[s.Utils.prefixKey(e.id, "cta")] = e) : (this._assetOrder.push(e.id), this._assets[s.Utils.prefixKey(e.id)] = e)
            }, t.prototype.playFirst = function() {
                this._playingIdx = 0, this._playCurrent()
            }, t.prototype.playNext = function() {
                this._playingIdx + 1 < this._assetOrder.length && (this._playingIdx++, this._playCurrent())
            }, t.prototype.getProps = function(e) {
                if ("undefined" == typeof e) {
                    var t = this._assetOrder[this._playingIdx];
                    if ("undefined" != typeof this._assets[t] && "undefined" != typeof this._assets[t].data) return this._assets[t].data
                }
                return null
            }, t.prototype.ended = function() {
                this.playNext()
            }, t
        }(s.Base);
    t.Track = u
}, function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(335),
        o = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), Object.defineProperty(t, "CTA", {
                get: function() {
                    return "CTA"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "VIDEO", {
                get: function() {
                    return "VIDEO"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "AUDIO", {
                get: function() {
                    return "AUDIO"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "IMAGE", {
                get: function() {
                    return "IMAGE"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "THREESIXTY", {
                get: function() {
                    return "THREESIXTY"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "CUSTOMCTA", {
                get: function() {
                    return "CUSTOMCTA"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "LOADER", {
                get: function() {
                    return "LOADER"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "PLAYER", {
                get: function() {
                    return "PLAYER"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "ERROR", {
                get: function() {
                    return "ERROR"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "FUSION_PROD_DOMAIN", {
                get: function() {
                    return "//services.att.com"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "FUSION_FINALSTAGE_DOMAIN", {
                get: function() {
                    return "//services-finalstage.att.com"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "FUSION_PRESTAGE_DOMAIN", {
                get: function() {
                    return "//servicesps.stage.att.com"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "FUSION_LOCAL_DOMAIN", {
                get: function() {
                    return "//services.att.com"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "FUSION_TST05_DOMAIN", {
                get: function() {
                    return "//services-rel02.stage.att.com"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "FUSION_QUERY_URL", {
                get: function() {
                    return "/search/v1/videoservice?app-id=gvp&"
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(i.CoreConstant);
    t.Constant = o
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(349),
        i = n(347),
        o = n(350),
        a = n(50),
        s = n(334),
        u = function() {
            function e() {
                var t = this;
                if (this._timer = !1, e._instance) throw new Error("Error: Instantiation failed: Use MetaDataSingleton.getInstance() instead of new.");
                if (this._models = new Array, this._callbacks = new Array, e._instance = this, !window.gvp) throw new Error("Error: window.gvp undefined");
                if (!window.gvp.getMetaData_success) {
                    window.gvp.getMetaData_success = e.getMetaData_success;
                    var n = window.onerror;
                    window.onerror = function(i, o, s, u, c) {
                        if (o.toLowerCase().indexOf("genericlayer") != -1) {
                            a.Debug.log("GENERIC LAYER ERROR");
                            var l = a.Utils.getScriptTagWithSrc(o);
                            if (l) {
                                l.remove();
                                for (var p = a.Utils.extractAssetIds(a.Utils.getQueryVariableFromString(l.src, "q")), f = 0; f < p.length; f++) {
                                    var d = t._models[a.Utils.prefixKey(p[f])];
                                    d.attempts < 5 ? (d.state = r.MetaDataModel.STATE_WAITING, e.add(p[f]), a.Debug.log("RELOADING ID FROM ERROR: " + p[f])) : d.state = r.MetaDataModel.STATE_ERROR
                                }
                            }
                        }
                        n && n()
                    }
                }
            }
            return e.new = function() {
                this._instance._models = [], this._instance._callbacks = [], this._instance._timer = !1
            }, e.getMetaDataWithId = function(e) {
                return "undefined" != typeof this._instance._models[a.Utils.prefixKey(e)] ? this._instance._models[a.Utils.prefixKey(e)] : null
            }, e.process = function() {
                this._instance._timer = !1;
                var t = o.MediaDAO.getAccessObject(s.InstanceManager.getTier());
                for (var n in this._instance._models) this._instance._models[n].state == r.MetaDataModel.STATE_WAITING && (t.addModel(this._instance._models[n]), this._instance._models[n].state = r.MetaDataModel.STATE_SUBMITTED, this._instance._models[n].incrAttempt());
                for (var i = t.getElement(), n = 0; n < i.length; n++) document.getElementsByTagName("head").item(0).appendChild(i[n]), i[n].onload = e.scriptLoaded
            }, e.add = function(t, n) {
                var i = new r.MetaDataModel(t);
                if (this._instance._models[a.Utils.prefixKey(t)]) {
                    if ("undefined" != typeof n && this._instance._models[a.Utils.prefixKey(t)].state == r.MetaDataModel.STATE_COMPLETED) return void n()
                } else this._instance._models[a.Utils.prefixKey(t)] = i, i.state = r.MetaDataModel.STATE_WAITING;
                "undefined" != typeof n && ("undefined" == typeof this._instance._callbacks[a.Utils.prefixKey(t)] && (this._instance._callbacks[a.Utils.prefixKey(t)] = new Array), this._instance._callbacks[a.Utils.prefixKey(t)].push(n)), this._instance._timer || (this._instance._timer = !0, setTimeout(function() {
                    e.process()
                }, 100))
            }, e.getMetaData_success = function(t) {
                if (t && t.response && t.responseHeader) {
                    for (var n = a.Utils.extractAssetIds(t.responseHeader.params.q), o = {}, s = 0; s < t.response.docs.length; s++) {
                        var u = t.response.docs[s].id;
                        if ("active" === t.response.docs[s].state) {
                            if (n.indexOf(u) !== -1 && n.splice(n.indexOf(u), 1), "undefined" != typeof e._instance._models[a.Utils.prefixKey(u)] && (e._instance._models[a.Utils.prefixKey(u)].state = r.MetaDataModel.STATE_COMPLETED, e._instance._models[a.Utils.prefixKey(u)].data = t.response.docs[s]), "undefined" != typeof e._instance._callbacks[a.Utils.prefixKey(u)])
                                for (var c in e._instance._callbacks[a.Utils.prefixKey(u)]) e._instance._callbacks[a.Utils.prefixKey(u)][c](u)
                        } else o[u] = t.response.docs[s].state
                    }
                    for (var s = 0; s < n.length; s++) {
                        var u = n[s];
                        if ("undefined" != typeof e._instance._models[a.Utils.prefixKey(u)] && (e._instance._models[a.Utils.prefixKey(u)].state = r.MetaDataModel.STATE_COMPLETED, o.hasOwnProperty(u) ? e._instance._models[a.Utils.prefixKey(u)].data = {
                                id: u,
                                type: i.Constant.ERROR,
                                state: "Failure_ID_Expired"
                            } : e._instance._models[a.Utils.prefixKey(u)].data = {
                                id: u,
                                type: i.Constant.ERROR,
                                state: "Failure_ID_Invalid"
                            }, e._instance._models[a.Utils.prefixKey(u)].timeRequest = (new Date).getTime()), "undefined" != typeof e._instance._callbacks[a.Utils.prefixKey(u)])
                            for (var c in e._instance._callbacks[a.Utils.prefixKey(u)]) e._instance._callbacks[a.Utils.prefixKey(u)][c](u)
                    }
                }
            }, e.getInstance = function() {
                return e._instance
            }, e
        }();
    u._instance = new u, u.scriptLoaded = function(e) {
        for (var t = e.target, n = a.Utils.extractAssetIds(a.Utils.getQueryVariableFromString(t.src, "q")), i = 0; i < n.length; i++) {
            var o = u._instance._models[a.Utils.prefixKey(n[i])];
            o.state == r.MetaDataModel.STATE_SUBMITTED && (o.attempts < 5 ? (a.Debug.log("RELOADING ID FROM ERROR: " + n[i]), o.state = r.MetaDataModel.STATE_WAITING, u.add(n[i])) : o.state = r.MetaDataModel.STATE_ERROR)
        }
    }, t.MetaDataSingleton = u
}, function(e, t, n) {
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(50),
        o = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n._id = t, n._attempts = 0, n
            }
            return r(t, e), Object.defineProperty(t, "STATE_WAITING", {
                get: function() {
                    return "WAITING"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "STATE_COMPLETED", {
                get: function() {
                    return "COMPLETED"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "STATE_SUBMITTED", {
                get: function() {
                    return "SUBMITTED"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "STATE_ERROR", {
                get: function() {
                    return "ERROR"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "action", {
                get: function() {
                    return "" + this.field + ":" + this.id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "field", {
                get: function() {
                    return "xml" !== this.id.slice(this.id.length - 3, this.id.length) ? "id" : "url_configFile_en"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "data", {
                get: function() {
                    return this._data
                },
                set: function(e) {
                    this._data = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "id", {
                get: function() {
                    return this._id
                },
                set: function(e) {
                    this._id = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "state", {
                get: function() {
                    return this._state
                },
                set: function(e) {
                    this._state = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "attempts", {
                get: function() {
                    return this._attempts
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.incrAttempt = function() {
                this._attempts++
            }, Object.defineProperty(t.prototype, "timeRequest", {
                get: function() {
                    return this._timeRequest
                },
                set: function(e) {
                    this._timeRequest = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "timeResponse", {
                get: function() {
                    return this._timeResponse
                },
                set: function(e) {
                    this._timeResponse = e
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(i.Base);
    t.MetaDataModel = o
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(351),
        i = n(347),
        o = function() {
            function e() {}
            return e.getAccessObject = function(e) {
                if ("undefined" == typeof e || null === e) {
                    var t = i.Constant.FUSION_PROD_DOMAIN;
                    t = window.location.host.indexOf("prestage") > -1 ? i.Constant.FUSION_PRESTAGE_DOMAIN : window.location.host.indexOf("finalstage") > -1 ? i.Constant.FUSION_FINALSTAGE_DOMAIN : window.location.host.indexOf("tst05") > -1 ? i.Constant.FUSION_TST05_DOMAIN : i.Constant.FUSION_PROD_DOMAIN;
                    var n = window.location.protocol + t;
                    return new r.Solr(n, i.Constant.FUSION_QUERY_URL)
                }
                switch (e) {
                    case i.Constant.TIER_LOCAL:
                        return new r.Solr(i.Constant.FUSION_LOCAL_DOMAIN, i.Constant.FUSION_QUERY_URL);
                    case i.Constant.TIER_PRESTAGE:
                        return new r.Solr(i.Constant.FUSION_PRESTAGE_DOMAIN, i.Constant.FUSION_QUERY_URL);
                    case i.Constant.TIER_FINALSTAGE:
                        return new r.Solr(i.Constant.FUSION_FINALSTAGE_DOMAIN, i.Constant.FUSION_QUERY_URL);
                    case i.Constant.TIER_TST05:
                        return new r.Solr(i.Constant.FUSION_TST05_DOMAIN, i.Constant.FUSION_QUERY_URL);
                    default:
                        return new r.Solr(i.Constant.FUSION_PROD_DOMAIN, i.Constant.FUSION_QUERY_URL)
                }
            }, e
        }();
    t.MediaDAO = o
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            this._models = new Array, this._protocalAndDomain = "undefined" == typeof e ? "//services.att.com" : e, this._uri = "undefined" == typeof e ? "/search/v1/videoservice?app-id=gvp&" : t
        }
        return Object.defineProperty(e.prototype, "MAX_IDS_PER_CALL", {
            get: function() {
                return 10
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "uri", {
            set: function(e) {
                this._uri = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "protocalAndDomain", {
            set: function(e) {
                this._protocalAndDomain = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "query", {
            get: function() {
                if (0 != this._models.length) {
                    var e = Math.ceil(this._models.length / this.MAX_IDS_PER_CALL),
                        t = new Array(e),
                        n = 0;
                    t[n] = "";
                    for (var r = 0; r < this._models.length; r++) 0 != r && r / this.MAX_IDS_PER_CALL === Math.round(r / this.MAX_IDS_PER_CALL) && (n += 1, t[n] = ""), t[n].length ? t[n] += "+OR+" + this._models[r].action : t[n] += "q=" + this._models[r].action;
                    return t
                }
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.addModel = function(e) {
            this._models.length > 20, this._models.push(e)
        }, e.prototype.getEndPoint = function(e) {
            return this._protocalAndDomain + this._uri + this.query[e]
        }, e.prototype.getElement = function() {
            for (var e = new Array(this.query.length), t = 0; t < this.query.length; t++) e[t] = document.createElement("script"), e[t].src = this.getEndPoint(t), e[t].type = "text/javascript";
            return e
        }, e
    }();
    t.Solr = n
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(53),
        i = n(347),
        o = n(50),
        a = function() {
            function e(e) {
                this._raw = e, this._sources = []
            }
            return Object.defineProperty(e.prototype, "id", {
                get: function() {
                    return this._raw.id
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "type", {
                get: function() {
                    switch (this._raw.type) {
                        case "video":
                            return i.Constant.VIDEO;
                        default:
                            return this._raw.type
                    }
                },
                set: function(e) {
                    this._raw.type = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "cards", {
                get: function() {
                    return "4300248" == this.id && "dev.richmediacore.com" == location.host || "prestage.att.com" == location.host || "localhost:9090" == location.host ? [{
                        begin: 144,
                        end: 148.5,
                        type: "highlight",
                        data: {
                            height: "25%",
                            href: "https://att.com/transferservice"
                        }
                    }, {
                        begin: 196.5,
                        end: 205,
                        type: "link",
                        data: {
                            href: "https://m.att.com/my/#/welcome?origination_point=login&generate_token=false&from_page=webreg",
                            text: "Register your account now."
                        }
                    }, {
                        begin: 241,
                        end: 250,
                        type: "link",
                        data: {
                            href: "https://www.att.com/esupport/article.html#!/wireless/KM1051632",
                            text: "Learn more about prorated charges and credits."
                        }
                    }, {
                        begin: 260,
                        end: 266.5,
                        type: "highlight",
                        data: {
                            height: "25%",
                            href: "https://att.com/transferservice"
                        }
                    }] : []
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "postRoll", {
                get: function() {
                    return this._raw.postRollId ? this._raw.postRollId[0] || "" : ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "markup", {
                get: function() {
                    return this._raw.videoMeta_en
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "title", {
                get: function() {
                    return this._raw.emd_windowTitle || this._raw.windowTitle_en || ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "thumbTitle", {
                get: function() {
                    return this._raw.thumbTitle_en || ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "category", {
                get: function() {
                    return this._raw.grouping || ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "state", {
                get: function() {
                    return this._raw.state || ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "thumbIcon", {
                get: function() {
                    return this._raw.url_thumbIcon_en ? this._raw.url_thumbIcon_en : ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "seconds", {
                get: function() {
                    return this._raw.lengthInSeconds ? o.Utils.timecodeToSeconds(this._raw.lengthInSeconds) : 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "duration", {
                get: function() {
                    return this._raw.lengthInSeconds ? this._raw.lengthInSeconds : ""
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.appendCaptions = function(e) {
                var t = this.seconds,
                    n = r("<div></div>");
                r(e).find("p").each(function(e, i) {
                    var a = r(i),
                        s = o.Utils.timecodeToSeconds(a.attr("begin")) + t,
                        u = o.Utils.timecodeToSeconds(a.attr("end")) + t;
                    n.append('<p begin="' + o.Utils.secondsToTimecode(s) + '" end="' + o.Utils.secondsToTimecode(u) + '">' + a.html() + "</p>")
                }), this._raw.captionData_en = this._raw.captionData_en.replace("</div>", n.html() + "</div>")
            }, Object.defineProperty(e.prototype, "captions", {
                get: function() {
                    return this._raw.captionData_en || ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "description", {
                get: function() {
                    return this._raw.description_en || this._raw["emd_description-long"] || ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "availability", {
                get: function() {
                    return this._raw.emd_availability || ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "date", {
                get: function() {
                    var e = this._raw.launchDate.toString().split("T")[0].split("-");
                    return e[1] + "-" + e[2] + "-" + e[0]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "campaign", {
                get: function() {
                    return this._raw.campaignCode || ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "legal", {
                get: function() {
                    return this._raw.emd_legal || this._raw.legal || ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "videoMain", {
                get: function() {
                    return this._raw.url_videoMain_en || ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "name", {
                get: function() {
                    return this.videoMain.slice(this.videoMain.lastIndexOf("/"), this.videoMain.length)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "folder", {
                get: function() {
                    var e = this.videoMain;
                    return e.indexOf("//wpc.5BD7.att-acdn.net/005BD7") > -1 && (e = e.replace("//wpc.5BD7.att-acdn.net/005BD7", "")), e.indexOf("//") === -1 && (e = 0 === e.indexOf("/") ? "//gvpcertvideos.att.com" + e : "//gvpcertvideos.att.com/" + e), e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "thumbnail", {
                get: function() {
                    return o.Utils.prependProtocol(this.folder + this.name + "_360.jpg")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "poster", {
                get: function() {
                    return this.isB2B ? o.Utils.prependProtocol(this.folder + this.name + "_640x360.jpg") : o.Utils.prependProtocol(this.folder + this.name + "_480.jpg")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "closedCaptionFile", {
                get: function() {
                    return this.folder + this.name + ".vtt"
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.addSource = function(e) {
                this._sources.push(e)
            }, Object.defineProperty(e.prototype, "seoSource", {
                get: function() {
                    return new Array(o.Utils.prependProtocol(this.folder + this.name + "_360")).concat(this._sources)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "source", {
                get: function() {
                    return this.isB2B ? new Array(o.Utils.prependProtocol(this.folder + this.name)).concat(this._sources) : new Array(o.Utils.prependProtocol(this.folder + this.name + "_480")).concat(this._sources)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "isB2B", {
                get: function() {
                    return this.category.indexOf("B2B") > 0
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.MetaDataSolr = a
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(348),
        i = n(352),
        o = n(347),
        a = n(50),
        s = function() {
            function e(e, t, n) {
                r.MetaDataSingleton.add(e, function() {
                    var s = new i.MetaDataSolr(r.MetaDataSingleton.getMetaDataWithId(e).data);
                    if (s && s.type === o.Constant.ERROR) a.Debug.log("GVP DATA found [" + e + "] invalid.");
                    else {
                        var u = a.Utils.splitStringForDoubleCurlies(t);
                        for (var c in u) t = t.replace("{{" + u[c] + "}}", s[u[c]]);
                        n(t)
                    }
                })
            }
            return e
        }();
    s.VIDEO = '<script type="application/ld+json">{\t                                \t"@context" \t\t: \t"http://schema.org",\t                                    "@type" \t\t: \t"VideoObject",\t                                    "name" \t\t\t: \t"{{title}}",\t                                    "description" \t: \t"{{description}}",\t                                    "thumbnailUrl"\t:   "{{thumbnail}}",\t                                    "uploadDate" \t: \t"{{date}}",\t                                    "duration" \t\t: \t"{{duration}}",\t                                    "contentUrl" \t: \t"{{seoSource}}.mp4"\t                            }</script>', t.LinkedDataSchema = s
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(348),
        i = n(352),
        o = n(347),
        a = n(50),
        s = function() {
            function e(e) {
                this._targetHtml = "", this.target = e
            }
            return Object.defineProperty(e.prototype, "target", {
                set: function(e) {
                    e && (this._target = e, this._targetHtml = e.innerHTML, this._target.innerHTML = "")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "id", {
                set: function(e) {
                    var t = this;
                    this._target && r.MetaDataSingleton.add(e, function() {
                        var n = new i.MetaDataSolr(r.MetaDataSingleton.getMetaDataWithId(e).data);
                        if (n && n.type === o.Constant.ERROR) a.Debug.log("GVP DATA found [" + e + "] invalid."), t._target.remove();
                        else {
                            var s = a.Utils.splitStringForDoubleCurlies(t._targetHtml),
                                u = t._targetHtml;
                            for (var c in s) u = u.replace("{{" + s[c] + "}}", n[s[c]]);
                            t._target.innerHTML = u
                        }
                    })
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
    t.MetadataReplace = s
}]);