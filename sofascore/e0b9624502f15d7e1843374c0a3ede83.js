! function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(i, r, function(e) {
                return t[e]
            }.bind(null, r));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function(t, e, n) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    n.r(e);
    var r = {
        domUniqueId: 0,
        eventPrefix: "",
        eventsFallbackAlias: {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        cssStyle: {},
        cssStyleArray: [],
        rawCssStyle: "",
        cssPropsAlias: {
            fontFamily: "font-family",
            fontWeight: "font-weight",
            fontStyle: "font-style",
            fontSize: "font-size",
            lineHeight: "line-height"
        }
    };
    Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
        if (null == this) throw new TypeError;
        var e = Object(this),
            n = e.length >>> 0;
        if (0 === n) return -1;
        var i = 0;
        if (arguments.length > 0 && ((i = Number(arguments[1])) != i ? i = 0 : 0 !== i && i !== 1 / 0 && i !== -1 / 0 && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))), i >= n) return -1;
        for (var r = i >= 0 ? i : Math.max(n - Math.abs(i), 0); r < n; r++)
            if (r in e && e[r] === t) return r;
        return -1
    });
    ! function() {
        var t, e, n = "transformOrigin,textShadow,textStroke,boxShadow,borderRadius,borderImage,opacity".split(","),
            i = "Webkit,Moz,O,ms,Khtml".split(","),
            r = window.document.createElement("detect"),
            o = [];

        function a(t) {
            if ("string" != typeof t) return !1;
            for (var e = t.substr(0, 1).toUpperCase() + t.substr(1), n = "".concat(t, " ").concat(i.join("".concat(e, " "))).concat(e).split(" "), o = 0, a = n.length; o < a; o++)
                if ("" === r.style[n[o]]) return !0;
            return !1
        }
        for (t in n) o[e = n[t]] = a(e)
    }();

    function o(t) {
        var e = t.replace(/[^\d,.]/g, "").split(",");
        return {
            r: e[0],
            g: e[1],
            b: e[2],
            a: e[3]
        }
    }

    function a(t, e) {
        return "#".concat(0 != e ? (256 + parseInt(256 * Number(t.a))).toString(16).substr(1) : "").concat((256 + parseInt(t.r)).toString(16).substr(1)).concat((256 + parseInt(t.g)).toString(16).substr(1)).concat((256 + parseInt(t.b)).toString(16).substr(1))
    }

    function s() {
        if (null != r.IEVersion) return r.IEVersion;
        var t = -1;
        if ("Microsoft Internet Explorer" === navigator.appName) {
            var e = navigator.userAgent;
            null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(e) && (t = parseFloat(RegExp.$1))
        }
        return r.IEVersion = t, t
    }

    function l(t) {
        return t.length < 2 ? "0".concat(t) : t
    }

    function c(t, e) {
        if (!t) return null;
        void 0 === e && (e = 26);
        var n = function(t) {
            if (!t) return null;
            t = t.toLowerCase();
            var e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
                n = {
                    r: "",
                    g: "",
                    b: ""
                };
            return n.r = parseInt((16 * e.indexOf(t[1]) + e.indexOf(t[2])).toString()), n.g = parseInt((16 * e.indexOf(t[3]) + e.indexOf(t[4])).toString()), n.b = parseInt((16 * e.indexOf(t[5]) + e.indexOf(t[6])).toString()), n
        }(t);
        return n.r = Math.min(255, parseInt(n.r) + e), n.g = Math.min(255, parseInt(n.g) + e), n.b = Math.min(255, parseInt(n.b) + e), "#".concat(l(n.r.toString(16))).concat(l(n.g.toString(16))).concat(l(n.b.toString(16)))
    }

    function u(t, e) {
        return t.className.match(new RegExp("(\\s|^)".concat(e, "(\\s|$)")))
    }

    function d(t, e) {
        u(t, e) || (t.className += " ".concat(e))
    }

    function p(t, e) {
        if (u(t, e)) {
            var n = new RegExp("(\\s|^)".concat(e, "(\\s|$)"));
            t.className = t.className.replace(n, " ")
        }
    }

    function h(t) {
        if (!t) return null;
        var e = {
            "text-shadow": ""
        };
        return !0 !== t.useShadow && "true" !== t.useShadow || (e.textShadow = "".concat(t.hShadow, "px ").concat(t.vShadow, "px ").concat(t.blur, "px ").concat(t.color), e["text-shadow"] = "".concat(t.hShadow, "px ").concat(t.vShadow, "px ").concat(t.blur, "px ").concat(t.color), e["-moz-text-shadow"] = "".concat(t.hShadow, "px ").concat(t.vShadow, "px ").concat(t.blur, "px ").concat(t.color), e["-o-text-shadow"] = "".concat(t.hShadow, "px ").concat(t.vShadow, "px ").concat(t.blur, "px ").concat(t.color), e["-ms-text-shadow"] = "".concat(t.hShadow, "px ").concat(t.vShadow, "px ").concat(t.blur, "px ").concat(t.color)), e
    }

    function f(t) {
        if (!t) return null;
        var e = {
            "-webkit-box-shadow": "",
            "box-shadow": ""
        };
        return !0 !== t.useShadow && "true" !== t.useShadow || (e.boxShadow = "".concat(t.hShadow, "px ").concat(t.vShadow, "px ").concat(t.blur, "px ").concat(t.spread, "px ").concat(t.color), e["-webkit-box-shadow"] = e.boxShadow), e
    }

    function y(t) {
        var e = {};
        if (!t) return e;
        var n = t,
            i = n.type,
            r = n.scolor;
        switch ("lgrad" !== i && "rgrad" !== i || (t.gradColors && t.gradColors.length ? t.gradColors.length < 2 && t.gradColors.length > 0 && (r = t.gradColors[0].c, i = "solid") : (i = "solid", r = "#fff")), "true" === String(t.useBorder) && (e.border = "1px solid ".concat(t.borderColor)), e["background-image"] = "", i) {
            case "none":
                break;
            case "image":
                e = function(t, e) {
                    var n, i, r = b(e);
                    for (var o in t["background-image"] = "url(".concat(r, ")"), t["--retina-src"] = r, e) switch (o) {
                        case "scaleMode":
                        case "verticalAlign":
                        case "horizontalAlign":
                            switch (e.verticalAlign) {
                                case "top":
                                    n = "0";
                                    break;
                                case "middle":
                                    n = "50%";
                                    break;
                                case "bottom":
                                    n = "100%"
                            }
                            switch (e.horizontalAlign) {
                                case "left":
                                    i = "0";
                                    break;
                                case "center":
                                    i = "50%";
                                    break;
                                case "right":
                                    i = "100%"
                            }
                            t["background-position"] = "".concat(i, " ").concat(n);
                            break;
                        case "contentOffsetX":
                            "tile" === e.scaleMode && (t["background-position-x"] = "".concat(e[o], "%"));
                            break;
                        case "contentOffsetY":
                            "tile" === e.scaleMode && (t["background-position-y"] = "".concat(e[o], "%"))
                    }
                    return t
                }(e, t = function(t) {
                    return t && t.type && "image" === t.type && t.tile && (t.scaleMode = "tile", t.contentScale = 100, t.contentOffsetX = 50, t.contentOffsetY = 50, delete t.tile), t
                }(t));
                break;
            case "solid":
                if (r && r.includes("rgba")) {
                    var l = s();
                    l > -1 && l < 9 && (r = a(o(r), !1))
                }
                e["background-color"] = r;
                break;
            case "rgrad":
            case "lgrad":
                for (var c = t.gradColors, u = [], d = 0; d < c.length; d++) u.push("".concat(c[d].c, " ").concat(c[d].p, "%"));
                var p = u.join(),
                    h = "linear",
                    f = "".concat(t.rotation || "0", "deg");
                if ("rgrad" === t.type) {
                    h = "radial";
                    var y = t.rgradPos || "center";
                    if ("custom" === y) {
                        var g = "";
                        t.gradPosX && t.gradPosX.includes("%") || (g = "px");
                        var m = "";
                        t.gradPosY && t.gradPosY.includes("%") || (m = "px"), y = "".concat((t.gradPosX || "0") + g, " ").concat(t.gradPosY || "0").concat(m)
                    }
                    f = "".concat(y, ", circle cover")
                } else t.backgroundRotation && (f = "".concat(t.backgroundRotation, "deg"));
                if (c && c.length > 0)(t = e["background-image"] = []).push("-webkit-".concat(h, "-gradient(").concat(f, ",  ").concat(p, ")")), t.push("-moz-".concat(h, "-gradient(").concat(f, ",  ").concat(p, ")")), t.push("-o-".concat(h, "-gradient(").concat(f, ",  ").concat(p, ")")), t.push("-ms-".concat(h, "-gradient(").concat(f, ",  ").concat(p, ")"));
                e.filter = "progid:DXImageTransform.Microsoft.gradient( startColorstr='".concat(c[0].c, "', endColorstr='").concat(c[c.length - 1].c, "',GradientType=0 )")
        }
        return e
    }

    function b(t) {
        if (window.bannerConfig.hqImages && t.hqUrl) return t.hqUrl;
        if (t.localUrl) {
            var e = void 0 !== window.bannerConfig.imgLocalPath ? window.bannerConfig.imgLocalPath : "media/";
            return "".concat(e).concat(t.localUrl)
        }
        return t.url && t.url.includes("//") ? t.url : t.url ? window.bannerConfig.photosUrl + t.url : null
    }

    function g(t, e) {
        for (var n in e) t.style[n] = e[n]
    }

    function m(t) {
        return JSON.parse(JSON.stringify(t))
    }

    function v(t) {
        return t && 0 !== String(t).length ? t.includes("://") ? t : "http://".concat(t) : ""
    }

    function w(t, e) {
        var n = window.innerWidth / t,
            i = window.innerHeight / e;
        return {
            proportion: Math.min(n, i)
        }
    }

    function S(t, e, n) {
        return t.substring(e, e + n)
    }

    function k(t) {
        return t.replace(/([A-Z])/g, (function(t) {
            return "-".concat(t.toLowerCase())
        }))
    }
    var C = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), window.assetsCache = {}, this.fontTypes = {
                    CUSTOM: "custom",
                    BANNERSNACK: "bannersnack",
                    GOOGLE: "google"
                }, this.loadedSlides = {}, this.imagesToLoad = [], this.fontsToLoad = [], this.gFontsToLoad = [], this.videosToLoad = [], this.audiosToLoad = [], this.getFontUrl = function(t) {
                    if (t.localUrl) {
                        var e = void 0 !== window.bannerConfig.fontLocalPath ? window.bannerConfig.fontLocalPath : "fonts/";
                        return window.bannerConfig.embedUrl && (e = window.bannerConfig.embedUrl + e), "".concat(e).concat(t.localUrl)
                    }
                    switch (t.fontFamily = this.unquoted(t.fontFamily), t.fontType) {
                        case this.fontTypes.BANNERSNACK:
                            return "//".concat(t.fontUrl);
                        case this.fontTypes.CUSTOM:
                            return t.fontUrl ? "//".concat(t.fontFaceUrl ? t.fontUrl : "".concat(t.fontUrl, ".ttf")) : "";
                        case this.fontTypes.GOOGLE:
                            var n = "".concat(t.fontFamily.split(" ").join("+"), ":").concat(parseInt(t.fontWeight));
                            return "italic" === t.fontStyle && (n += "i"), n;
                        default:
                            return ""
                    }
                }, this.loadGFonts = function() {
                    var t = this,
                        e = this,
                        n = this.gFontsToLoad.concat();
                    if (n.length) {
                        var i = function() {
                                for (var i = 0; i < n.length; i++) {
                                    var r = t.gFontsToLoad.indexOf(n[i]);
                                    r > -1 && t.gFontsToLoad.splice(r, 1)
                                }
                                e.resolveIfAssetsLoaded()
                            },
                            r = "https://fonts.googleapis.com/css?family=".concat(n.join("|"));
                        this.bannerConfig.preview && (r += "&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese");
                        var o = window.document.createElement("link");
                        o.setAttribute("rel", "stylesheet"), o.setAttribute("type", "text/css"), o.setAttribute("href", r), o.addEventListener("load", i), o.addEventListener("error", i), window.document.head.appendChild(o)
                    }
                }, this.addFontToDOM = function(t) {
                    var e, n, i, r = this,
                        o = "ttf";
                    t.fontType || (t.fontType = this.fontTypes.GOOGLE);
                    var a = this.getFontUrl(t);
                    if (a && !window.assetsCache[a]) {
                        switch (t.fontType !== this.fontTypes.GOOGLE && this.fontsToLoad.push(a), e = function() {
                            r.fontsToLoad.pop(), r.resolveIfAssetsLoaded()
                        }, t.fontType) {
                            case this.fontTypes.GOOGLE:
                                this.gFontsToLoad.push(a);
                                break;
                            case this.fontTypes.BANNERSNACK:
                            case this.fontTypes.CUSTOM:
                                if (this.relPreloadSupported() && (o = a.substr(a.lastIndexOf(".") + 1), (i = window.document.createElement("link")).setAttribute("rel", "preload"), i.setAttribute("type", "font/".concat(o)), i.setAttribute("as", "font"), i.setAttribute("href", a), "file:" !== window.location.protocol && i.setAttribute("crossorigin", "anonymous"), i.addEventListener("load", e), i.addEventListener("error", e), window.document.head.appendChild(i)), t.fontFamily) {
                                    var s = "".concat("@font-face {\nfont-family: '").concat(t.fontPrefix || "").concat(t.fontFamily.replace(/'/g, "\\'"), "';\n") + "font-style: ".concat(t.fontStyle, ";\n") + "font-weight: ".concat(t.fontWeight, ";\n") + "src: url(".concat(a, ");\n") + "}\n";
                                    (n = window.document.createElement("style")).appendChild(window.document.createTextNode(s)), this.relPreloadSupported() || (n.addEventListener("load", e), n.addEventListener("error", e)), window.document.head.appendChild(n)
                                }
                        }
                        window.assetsCache[a] = !0
                    }
                }, this.unquoted = function(t) {
                    return "string" == typeof t ? t.replace(/(^")|("$)/g, "") : t
                }, this.relPreloadSupported = function() {
                    return function(t, e) {
                        if (!t || !t.supports) return !1;
                        try {
                            return t.supports(e)
                        } catch (t) {
                            return !1
                        }
                    }(window.document.createElement("link").relList, "preload")
                }, this.getSlideId = function(t) {
                    return t.displayData ? t.displayData.properties.id : t.properties.id
                }, this.getSlideLoaded = function(t) {
                    var e = this.getSlideId(t);
                    return !!this.loadedSlides[e] && this.loadedSlides[e]
                }, this.setSlideLoaded = function(t) {
                    var e = this.getSlideId(t);
                    this.loadedSlides[e] = !0
                }, this.resolveIfAssetsLoaded = function(t) {
                    var e = 0 === this.imagesToLoad.length && 0 === this.videosToLoad.length && 0 === this.audiosToLoad.length;
                    (e && 0 === this.fontsToLoad.length && 0 === this.gFontsToLoad.length || e && !0 === t) && (window.loadAssetsTimer && clearTimeout(window.loadAssetsTimer), this.currentSlide ? this.setSlideLoaded(this.currentSlide) : this.setAllSlidesLoaded(), "function" == typeof this.callback && this.callback())
                }, this.preloadMedia = function(t, e, n, i) {
                    var r = this,
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image";
                    if (!t) throw new Error("No media url");
                    var a = this,
                        s = t;
                    n && (s += n);
                    var l = window.bannerConfig.pdf;
                    if (!window.assetsCache[s] || l) {
                        var c = new Image;
                        "video" === o ? (c = window.document.createElement("video"), this.videosToLoad.push(c)) : "audio" === o ? (c = new Audio, this.audiosToLoad.push(c)) : this.imagesToLoad.push(c);
                        var u = function() {
                                "video" === o ? a.videosToLoad.pop() : "audio" === o ? a.audiosToLoad.pop() : a.imagesToLoad.pop(), a.resolveIfAssetsLoaded()
                            },
                            d = function() {
                                l && !["audio", "video"].includes(o) ? a.preloadResizedImageForPdf(t, c, e, window.bannerConfig.hqImages, u) : u()
                            },
                            p = ["audio", "video"].includes(o) ? "loadedmetadata" : "load";
                        c.addEventListener(p, d), c.addEventListener("error", (function() {
                            u(), c.removeEventListener(p, d), r.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        })), this.bannerConfig.preview && i && !e.resourceKey ? this.setColorGroups(t, c, i) : c.src = t, window.assetsCache[s] = c
                    }
                }, this.preloadElementAssets = function(t) {
                    var e;
                    if ("layer" === t.type) switch (t.layerType) {
                        case "shape":
                            t.properties.backgroundColor && "image" === t.properties.backgroundColor.type && (e = b(t.properties.backgroundColor)) && this.preloadMedia(e, t.properties);
                            break;
                        case "image":
                            if (this.bannerConfig.hqImages && t.properties.hqUrl) e = t.properties.hqUrl;
                            else if (t.properties.localUrl) {
                                var n = void 0 !== window.bannerConfig.imgLocalPath ? window.bannerConfig.imgLocalPath : "media/";
                                e = "".concat(n).concat(t.properties.localUrl), window.bannerConfig.embedUrl && (e = this.bannerConfig.embedUrl + e)
                            } else e = t.properties.url && t.properties.url.includes("//") ? t.properties.url : this.bannerConfig.photosUrl + t.properties.url;
                            e && this.preloadMedia(e, t.properties);
                            break;
                        case "svg":
                            if (t.properties.localUrl) {
                                var i = void 0 !== window.bannerConfig.imgLocalPath ? window.bannerConfig.imgLocalPath : "media/";
                                e = "".concat(i).concat(t.properties.localUrl)
                            } else e = t.properties.url ? "".concat(window.bannerConfig.photosUrl).concat(t.properties.url) : null;
                            e && this.preloadMedia(e, t.properties, t.properties.id, t.properties.colorGroups);
                            break;
                        case "text":
                            var r = t.properties.config;
                            if (r) {
                                var o = this;
                                r.forEach((function(t) {
                                    var e = t.children,
                                        n = t.style;
                                    n && n.fontFamily && (n.fontFamily || (n.fontFamily = "Open Sans"), o.addFontToDOM(n)), e && e.forEach((function(t) {
                                        var e = t.style;
                                        e && (e.fontFamily ? (!e.fontType || e.fontType === o.fontTypes.GOOGLE || e.fontUrl || e.localUrl) && o.addFontToDOM(e) : e.fontWeight && (e.fontFamily = n.fontFamily, e.fontType = n.fontType, e.fontPrefix = n.fontPrefix || null, o.addFontToDOM(e)))
                                    }))
                                }))
                            } else this.addFontToDOM(t.properties);
                            break;
                        case "button":
                            t.properties.localUrl || this.addFontToDOM(t.properties.labelStyle);
                            break;
                        case "video":
                        case "audio":
                            if (t.properties.localUrl) {
                                var a = void 0 !== window.bannerConfig.imgLocalPath ? window.bannerConfig.imgLocalPath : "media/";
                                e = "".concat(a).concat(t.properties.localUrl), window.bannerConfig.embedUrl && (e = window.bannerConfig.embedUrl + e)
                            } else e = t.properties.url && t.properties.url.includes("//") ? t.properties.url : this.bannerConfig.photosUrl + t.properties.url;
                            e && this.preloadMedia(e, t.properties, t.properties.id, null, t.layerType)
                    } else if ("slide" === t.type)
                        for (var s = 0; s < t.elements.length; s++) this.preloadElementAssets(t.elements[s])
                }
            }
            var e, n, r;
            return e = t, (n = [{
                key: "assets",
                value: function(t, e, n, i) {
                    if (this.bannerConfig = n, this.callback = i, this.currentSlide = e.displayData ? e.displayData : e, this.getSlideLoaded(this.currentSlide)) this.resolveIfAssetsLoaded();
                    else {
                        var r = [this.currentSlide];
                        if (null !== t) {
                            if (t.properties.backgroundColor && "image" === t.properties.backgroundColor.type) {
                                var o = b(t.properties.backgroundColor);
                                o && this.preloadMedia(o, t.properties)
                            }
                            var a = t.elements.filter((function(t) {
                                return "layer" === t.type
                            }));
                            r = r.concat(a)
                        }
                        for (var s = 0; s < r.length; s++) this.preloadElementAssets(r[s]);
                        this.loadGFonts(), this.resolveIfAssetsLoaded()
                    }
                }
            }]) && i(e.prototype, n), r && i(e, r), t
        }(),
        O = function(t) {
            var e, n = parseFloat(t, 10),
                i = t.match(/m?s/);
            switch (i && (i = i[0]), i) {
                case "s":
                    e = 1e3 * n;
                    break;
                case "ms":
                    e = n;
                    break;
                default:
                    e = 0
            }
            return e
        };
    var x = function(t) {
            t.id || (t.id = "e_".concat(r.domUniqueId++))
        },
        E = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            easeInCubic: "cubic-bezier(.55,.055,.675,.19)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInStrong: "cubic-bezier(.97,.09,.79,.21)",
            easeOutStrong: "cubic-bezier(.21,.79,.09,.97)",
            easeInOutStrong: "cubic-bezier(.78,.03,.24,.99)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
        },
        A = {},
        T = function(t) {
            return !!A[t]
        },
        _ = function(t, e) {
            if (!A[t]) {
                for (var n, i, r = "@keyframes ".concat(t, " {"), o = "@-webkit-keyframes ".concat(t, " {"), a = 0; n = e[a]; a++) r += i = P(n.percent, n.props), o += i;
                var s = (r += "}") + (o += "}"),
                    l = document.createElement("style");
                l.type = "text/css", l.styleSheet ? l.styleSheet.cssText = s : l.innerHTML = s, document.getElementsByTagName("head")[0].appendChild(l), A[t] = !0
            }
        },
        P = function(t, e) {
            for (var n, i, r, o = "".concat(t, "% {"), a = Object.keys(e), s = 0; n = a[s]; s++) o += (i = n, r = e[n], "".concat(i, ":").concat(r, ";-webkit-").concat(i, ":").concat(r, ";"));
            return o += "}"
        };

    function I(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var B = function() {
        function t(e, n) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.delay = n, this.remaining = n, this.callback = e, this.id = 0, this.isPlaying = !1, this.resume()
        }
        var e, n, i;
        return e = t, (n = [{
            key: "pause",
            value: function() {
                this.isPlaying && (window.clearTimeout(this.id), this.remaining -= Date.now() - this.start, this.isPlaying = !1)
            }
        }, {
            key: "resume",
            value: function() {
                this.isPlaying || this.remaining < 0 || (this.start = Date.now(), window.clearTimeout(this.id), this.id = window.setTimeout(this.callback, this.remaining), this.isPlaying = !0)
            }
        }, {
            key: "destroy",
            value: function() {
                window.clearTimeout(this.id), this.callback = null, this.remaining = null, this.start = null, this.isPlaying = !1
            }
        }]) && I(e.prototype, n), i && I(e, i), t
    }();

    function L(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function D(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var j = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t)
        }
        var e, n, i;
        return e = t, i = [{
            key: "pause",
            value: function() {
                for (var e in t.timers) t.timers.hasOwnProperty(e) && t.timers[e].pause();
                t.setAnimationState("paused")
            }
        }, {
            key: "resume",
            value: function() {
                for (var e in t.timers) t.timers.hasOwnProperty(e) && t.timers[e].resume();
                t.setAnimationState("running")
            }
        }, {
            key: "init",
            value: function() {
                if (window.enablePauseAnimOnVisibilityChange) {
                    var e = null;
                    document.addEventListener("visibilitychange", (function() {
                        document.hidden ? (clearTimeout(e), e = setTimeout((function() {
                            t.pause()
                        }), 50)) : (clearTimeout(e), e = setTimeout((function() {
                            t.resume()
                        }), 50))
                    }), !1)
                }
            }
        }, {
            key: "setAnimationState",
            value: function(e) {
                for (var n in t.animations)
                    if (t.animations.hasOwnProperty(n)) {
                        var i = t.animations[n],
                            r = i.element,
                            o = i.delay,
                            a = i.animation,
                            s = i.startTime;
                        if (r.style.animationPlayState = e, r.style.webkitAnimationPlayState = e, "paused" === e) {
                            var l = O(o),
                                c = new Date - s;
                            if (l > 0 && c < l) {
                                var u = "".concat(l - c, "ms");
                                r.style.animationDelay = u, r.style.webkitAnimationDelay = u
                            }
                            a.indexOf("buildIn") >= 0 && l > 0 && c < l && (r.style.display = "none")
                        } else r.style.display = ""
                    }
            }
        }], (n = null) && L(e.prototype, n), i && L(e, i), t
    }();
    D(j, "timers", {}), D(j, "animations", {}), D(j, "timerIndex", 0);
    var U = function(t, e) {
            var n = j.timerIndex++;
            return j.timers[n] = new B(t, e), n
        },
        M = function(t) {
            var e = j.timers[t];
            e && (delete j.timers[t], e.destroy())
        },
        F = function(t, e) {
            ! function(t, e) {
                t.offsetWidth, t.style.animation = e, t.style.webkitAnimation = e, t.style.animationPlayState = window.BS_PLAYING_STATE || "running", t.style.webkitAnimationPlayState = window.BS_PLAYING_STATE || "running"
            }(t, e), x(t);
            var n = t.style.animationDelay,
                i = new Date;
            e ? j.animations[t.id] = {
                element: t,
                delay: n,
                animation: e,
                startTime: i
            } : delete j.animations[t.id]
        },
        z = "instant",
        R = "alpha-words",
        N = "blur-words",
        H = "fadeAudio",
        W = "blink",
        G = "jello",
        Y = "bounce",
        X = "vibrate",
        q = "flicker",
        Q = "pulsate",
        J = "shake",
        V = "video",
        $ = "audio";

    function Z(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var K = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t)
        }
        var e, n, i;
        return e = t, i = [{
            key: "clearAll",
            value: function(t) {
                t && t.firstChild && F(t.firstChild, "")
            }
        }, {
            key: "clearWordsTimeout",
            value: function(t, e) {
                for (var n = 0; n < e.length; n++) F(e[n], "")
            }
        }, {
            key: "getAnimationDuration",
            value: function(t, e) {
                return Number("buildMid" === e ? t.motionTime : t.duration) || 1e-4
            }
        }, {
            key: "getAnimationIterationCount",
            value: function(t, e) {
                return "buildMid" === e ? Math.ceil(t.duration / t.motionTime) : 1
            }
        }, {
            key: "animate",
            value: function(t, e, n, i) {
                var r = t,
                    o = e;
                if ("none" !== o.type) {
                    var a = i || 0;
                    o.zoom = o.zoom || 1;
                    var s = o.variation,
                        l = void 0 === s ? null : s,
                        c = "both",
                        u = o.type,
                        d = !0;
                    switch (o.type) {
                        case z:
                        case V:
                        case $:
                        case H:
                            d = !1;
                            break;
                        case R:
                        case N:
                            u = "words";
                            break;
                        case W:
                        case G:
                        case Y:
                        case X:
                        case q:
                            c = "none";
                            break;
                        case Q:
                            switch (c = "none", l) {
                                case "heartbeat":
                                    u = "pulsateHeartbeat";
                                    break;
                                case "backward":
                                case "forward":
                                    u = "pulsate";
                                    break;
                                case "ping":
                                    u = "pulsatePing"
                            }
                            break;
                        case J:
                            switch (c = "none", l) {
                                case "leftRight":
                                case "top":
                                case "left":
                                case "right":
                                    u = "shakeRotate";
                                    break;
                                case "horizontal":
                                case "vertical":
                                    u = "shakeTranslate"
                            }
                    }
                    var p = window["BS_".concat(u)];
                    if (!d || p || null === u) {
                        if ("rotate" === o.type || "flip" === o.type) {
                            var h = "".concat(Math.round(.7 * r.offsetWidth + .7 * r.offsetHeight), "px");
                            r.style.perspective = h, r.style.webkitPerspective = h
                        }
                        if (r && p) {
                            u = p(o, n, r, a);
                            var f = this.getAnimationDuration(o, n),
                                y = this.getAnimationIterationCount(o, n),
                                b = "".concat(u, " ").concat(f, "s ").concat(function(t) {
                                    if ("Linear" === t.tween || "linear" === t.ease) return "linear";
                                    var e = "ease";
                                    switch (t.ease) {
                                        default:
                                            e += "Out";
                                            break;
                                        case "easeIn":
                                            e += "In";
                                            break;
                                        case "easeInOut":
                                            e += "InOut"
                                    }
                                    return e += t.tween, E[e] || "linear"
                                }(o), " ").concat((g = o.delay + a, m = 3, parseFloat(g.toFixed(m))), "s ").concat(y, " ").concat(c);
                            F(r.firstChild && 1 === r.firstChild.nodeType && !r.classList.contains("word") ? r.firstChild : r, b)
                        }
                        var g, m, v = Number(o.duration) + Number(o.delay) + a;
                        U((function() {
                            o.onAnimationEnd && o.onAnimationEnd()
                        }), Math.max(1e3 * v, 0))
                    } else console.error("Error ".concat(u, " for build type ").concat(o.type, " not found"))
                } else o.onAnimationEnd && o.onAnimationEnd()
            }
        }], (n = null) && Z(e.prototype, n), i && Z(e, i), t
    }();

    function tt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var et = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            var e, n, i;
            return e = t, (n = [{
                key: "apply",
                value: function(e) {
                    e.on = t.prototype.on, e.off = t.prototype.off, e.trigger = t.prototype.trigger
                }
            }, {
                key: "on",
                value: function(t, e) {
                    void 0 === this._listeners && (this._listeners = {});
                    var n, i, r = this._listeners;
                    for (t = t.split(" "), i = 0; n = t[i]; i++) r[n] = r[n] || [], r[n].includes(e) || r[n].push(e)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    if (void 0 !== this._listeners) {
                        var n = this._listeners[t];
                        if (void 0 !== n) {
                            var i = n.indexOf(e); - 1 !== i && n.splice(i, 1)
                        }
                    }
                }
            }, {
                key: "trigger",
                value: function(t, e) {
                    if (void 0 !== this._listeners) {
                        var n = this._listeners[t];
                        if (void 0 !== n) {
                            var i = {};
                            i.target = this, i.type = t, i.data = e;
                            for (var r = n.length, o = 0; o < r; o++) n[o].call(this, i)
                        }
                    }
                }
            }]) && tt(e.prototype, n), i && tt(e, i), t
        }(),
        nt = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "clickTag",
                e = window.location.search.substring(1),
                n = e.split("".concat(t, "="));
            if (!n[1]) return "";
            var i = n[1].replace(/&.+$/, "");
            try {
                i = decodeURIComponent(i)
            } catch (t) {
                return ""
            }
            var r = i.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,8}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
            return null == r ? "" : i
        },
        it = function(t) {
            var e = "2x",
                n = t.lastIndexOf(".");
            return t.lastIndexOf("/") > n ? t + e : (-1 === n && (n = t.length), [t.slice(0, n), e, t.slice(n)].join(""))
        };

    function rt(t) {
        return (rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function ot(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function at(t, e) {
        return !e || "object" !== rt(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function st(t) {
        return (st = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function lt(t, e) {
        return (lt = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var ct = function(t) {
        function e() {
            var t;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), (t = at(this, st(e).call(this))).container = null, t.displayContainer = null, t.properties = null, t.displayData = null, t.buildTimeouts = [], t
        }
        var n, i, r;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && lt(t, e)
        }(e, t), n = e, r = [{
            key: "parseProps",
            value: function(t) {
                for (var e, n = ["buildIn", "buildOut", "transition"], i = 0; e = n[i]; i++)
                    if (t[e]) switch (t[e].tween) {
                        case "Bounce":
                        case "Elastic":
                            "scale" !== t[e].type && "slide" !== t[e].type || (t[e].type += t[e].tween, "Elastic" === t[e].tween && (t[e].ease = "easeOut")), t[e].tween = ""
                    }
                return t
            }
        }], (i = [{
            key: "init",
            value: function(t) {
                return this.displayData = t, this.displayData.properties = e.parseProps(this.displayData.properties), this.trigger("init"), this
            }
        }, {
            key: "render",
            value: function() {}
        }, {
            key: "reset",
            value: function() {
                var t, e;
                for (K.clearAll(this.container), t = 0; e = this.buildTimeouts[t]; t++) M(e);
                for (this.buildTimeouts = [], this.transform("none"), this.webkitTransform("translate3d(0,0,0)"), this.setStyle(this.container, "x,y,width,height", "px"), this.container.style.opacity = "1", this.container.style.display = "", this.container.style.filter = "", this.container.style["-webkit-filter"] = "", this.container.style.animation = "", this.container.style["-webkit-animation"] = "", t = 0; e = this.buildTimeouts[t]; t++) M(e);
                if (this.buildTimeouts = [], this.displayContainer) {
                    var n = void 0 !== this.properties.opacity ? this.properties.opacity : 100;
                    this.displayContainer.style.opacity = n / 100
                }
            }
        }, {
            key: "createMainContainers",
            value: function(t, e, n, i) {
                var r;
                if (this.properties && this.properties.actions && this.slide && this.slide.banner.config.pdf && (r = this.properties.actions.find((function(t) {
                        return "click" === t.event && "gotoURL" === t.type && t.url
                    }))), this.container = this.createElement("div", t), this.properties && (this.properties.text || this.properties.buttonLabel)) {
                    var o = "none" !== this.properties.buildIn.type,
                        a = this.properties.buildMid && "none" !== this.properties.buildMid.type,
                        s = "none" !== this.properties.buildOut.type;
                    (o || a || s) && (this.container.style.perspective = "1px")
                }
                this.effHelper = this.createElement("div", "eff-helper"), r && (this.actionContainer = this.createElement("a", "action-container"), this.actionContainer.href = r.url, this.actionContainer.target = r.target || "_blank", this.actionContainer.style.cursor = r.useHandCursor ? "" : "auto"), this.displayContainer = this.createElement(n || "div", e, void 0, void 0, i), this.container.appendChild(this.effHelper), r ? (this.effHelper.appendChild(this.actionContainer), this.actionContainer.appendChild(this.displayContainer)) : this.effHelper.appendChild(this.displayContainer)
            }
        }, {
            key: "applyActions",
            value: function(t, e) {
                var n = this;
                if (!t || !e) return !1;
                if ("none" === t.type) return !1;
                var i = "pointer";
                void 0 !== t.useHandCursor && !1 === t.useHandCursor && (i = ""), e.style.cursor = i, e.addEventListener(t.event, (function(e) {
                    if (e.clickFlag) return e.clickFlag = !1, !1;
                    if (t.disabled) return !1;
                    if (e.clickFlag = this, "gotoSlide" === t.type) {
                        var i = n.slide.getBuildOutTime();
                        i && (t.disabled = !0, U((function() {
                            t.disabled = !1
                        }), i)), null === t.slideOrUrl && (t.slideOrUrl = "next");
                        var r = n.slide.banner.currentSlide;
                        switch (t.slideOrUrl) {
                            case "first":
                                n.slide.banner.preload.assets(null, n.slide.getFirstSlide(), n.slide.banner.config), r.buildOut(n.slide.getFirstSlide());
                                break;
                            case "last":
                                n.slide.banner.preload.assets(null, n.slide.getLastSlide(), n.slide.banner.config), r.buildOut(n.slide.getLastSlide());
                                break;
                            case "next":
                                n.slide.banner.preload.assets(null, n.slide.getNextSlide(), n.slide.banner.config), r.buildOut(n.slide.getNextSlide());
                                break;
                            case "prev":
                                n.slide.banner.preload.assets(null, n.slide.getPrevSlide(), n.slide.banner.config), r.buildOut(n.slide.getPrevSlide());
                                break;
                            default:
                                n.slide.banner.preload.assets(null, r.getSlideByHashOrId(t.slideOrUrl), n.slide.banner.config), r.buildOut(r.getSlideByHashOrId(t.slideOrUrl))
                        }
                    } else {
                        var o = t.slideOrUrl || window.bannerURL,
                            a = String(o).indexOf("bsClickTAG");
                        if (-1 !== a || 0 === String(o).indexOf("clickTag")) {
                            if (window.bsClickFunc) {
                                var s = window[o];
                                return s.indexOf("bsClickTAG") >= 0 && (s = null), window.bsClickFunc(s, t.target, o), !1
                            }
                            var l = -1 !== a ? o.substr(a) : o;
                            (o = "function" == typeof window[l] ? window[l]() : window[l]) || -1 === a || (o = nt())
                        } else if (n.hash || !window.bannerConfig.pdf) {
                            if (!o && !1 === window.goToURLWithoutBSURL) return !1;
                            var c = nt() || window.clickTag;
                            c && (o = void 0 === window.clickTag && c !== o && -1 === c.indexOf(o) && c.indexOf(-1 === encodeURIComponent(o) && o && -1 === o.indexOf(c)) ? c + encodeURIComponent(o) : c)
                        }
                        o = v(o), window.bsOpenURL(o, t.target)
                    }
                }))
            }
        }, {
            key: "createElement",
            value: function(t, e, n, i, r) {
                var o = r || window.document.createElement(t);
                return o.setAttribute("class", e), !1 !== n && (i || this.container) && (i || this.container).appendChild(o), x(o), o
            }
        }, {
            key: "setStyle",
            value: function(t, e, n) {
                n || (n = "");
                var i = {
                    x: "left",
                    y: "top",
                    labelOffsetX: "margin-left",
                    labelOffsetY: "margin-top",
                    lineHeight: "line-height"
                };
                for (var r in e = e.split(","))
                    if (e.hasOwnProperty(r)) {
                        var o = i[e[r]] || e[r],
                            a = this.properties[e[r]];
                        if ("width" === o || "height" === o) {
                            var s = this.properties.scale || 1;
                            t.style[o] = a * s + n
                        } else t.style[o] = "left" === o || "right" === o ? Math.round(a) + n : a + n
                    } return this
            }
        }, {
            key: "getContainer",
            value: function() {
                return this.container
            }
        }, {
            key: "show",
            value: function() {
                return this.container.style.display = "", this
            }
        }, {
            key: "hide",
            value: function() {
                return this.container.style.display = "none", this
            }
        }, {
            key: "hasClass",
            value: function(t, e) {
                return !!t && new RegExp("(\\s|^)".concat(e, "(\\s|$)")).test(t.className)
            }
        }, {
            key: "removeClass",
            value: function(t, e) {
                return this.hasClass(t, e) && (t.className = t.className.replace(new RegExp("(\\s|^)".concat(e, "(\\s|$)")), " ").replace(/^\s+|\s+$/g, "")), this
            }
        }, {
            key: "addClass",
            value: function(t, e) {
                return t ? (this.hasClass(t, e) || (t.className += (t.className ? " " : "") + e), this) : this
            }
        }, {
            key: "toggleClass",
            value: function(t, e) {
                return t ? (this.hasClass(t, e) ? this.removeClass(t, e) : this.addClass(t, e), this) : this
            }
        }, {
            key: "applyBackground",
            value: function(t, e, n) {
                var i = y(e);
                for (var r in i) switch (r) {
                    default:
                        t.style[r] = i[r];
                        break;
                    case "background-image":
                        if ("lgrad" === e.type || "rgrad" === e.type)
                            for (var o = 0; o < i[r].length; o++) t.style.backgroundImage = i[r][o];
                        else t.style[r] = i[r];
                        break;
                    case "background":
                        for (o = 0; o < i[r].length; o++) t.style.background = i[r][o];
                        break;
                    case "--retina-src":
                        n && this.properties.retinaReady && (t.classList.add("retina"), t.style.setProperty(r, 'url("'.concat(it(i[r]), '")')))
                }
                e && e.type && "image" === e.type && ("userCrop" !== e.scaleMode && function(t, e) {
                    if (!t || !e) return d(t, "background"), !1;
                    var n = ["background", "background-crop", "background-stretch", "background-mask", "background-aspect", "background-tile"],
                        i = "".concat(n[0], "-").concat(e.toLowerCase());
                    for (var r in n) p(t, n[r]);
                    d(t, n[0]), d(t, i)
                }(t, e.scaleMode), function(t, e) {
                    var n = !1,
                        i = b(e);
                    for (var r in e) switch (r) {
                        case "scaleMode":
                        case "verticalAlign":
                        case "horizontalAlign":
                        case "contentScale":
                            n = !0
                    }
                    if (n) {
                        t.style.backgroundSize = "";
                        var o = e.originalWidth;
                        if (o) "tile" === e.scaleMode && (t.style.backgroundSize = o ? "".concat(e.contentScale * o / 100, "px") : "".concat(e.contentScale, "%"), t.style.visibility = "visible");
                        else {
                            var a = new Image;
                            a.onload = function() {
                                o !== a.width && (o = a.width), t.style.backgroundSize = "", "tile" === e.scaleMode && (t.style.backgroundSize = o ? "".concat(e.contentScale * o / 100, "px") : "".concat(e.contentScale, "%"), t.style.visibility = "visible")
                            }, a.src = i
                        }
                    }
                }(t, e))
            }
        }, {
            key: "applyBoxShadow",
            value: function(t, e) {
                g(t, f(e))
            }
        }, {
            key: "applyFilters",
            value: function(t, e, n, i) {
                g(t, function(t, e, n) {
                    var i = {
                        "-webkit-filter": "",
                        filter: ""
                    };
                    return !t || !0 !== t.useAdjustColor && "true" !== t.useAdjustColor || (i.filter += "brightness(".concat((parseInt(t.brightness) + 100) / 100, ") "), i.filter += "contrast(".concat((parseInt(t.contrast) + 100) / 100, ") "), i.filter += "saturate(".concat((parseInt(t.saturate) + 100) / 100, ") "), i.filter += "hue-rotate(".concat(t.hue, "deg)")), !e || !0 !== e.useBlur && "true" !== e.useBlur || (i.filter += "blur(".concat(e.pixels, "px)")), !n || !0 !== n.useShadow && "true" !== n.useShadow || (i.filter += "drop-shadow(".concat(n.hShadow, "px ").concat(n.vShadow, "px ").concat(n.blur, "px ").concat(n.color, ")")), i["-webkit-filter"] = i.filter, i
                }(e, n, i))
            }
        }, {
            key: "getFlipString",
            value: function(t) {
                if (!t) return "";
                var e = "both" === t || "vertical" === t ? "-1" : "1";
                return "scale(".concat("both" === t || "horizontal" === t ? "-1" : "1", ", ").concat(e, ")")
            }
        }, {
            key: "getBRadius",
            value: function() {
                var t = this.properties,
                    e = t.border || {},
                    n = 0;
                return "rectangle" === t.type && (void 0 !== e.radius ? n = e.radius : void 0 !== t.bradius && (n = t.bradius)), n
            }
        }, {
            key: "getBorderString",
            value: function(t) {
                var e = t || this.properties.border || {};
                return void 0 === e.weight || void 0 === e.color ? "" : "".concat(e.weight, "px solid ").concat(e.color)
            }
        }, {
            key: "getAnimationEl",
            value: function() {
                return this.container
            }
        }, {
            key: "setBuildMidAnimation",
            value: function() {
                var t = this;

                function e() {
                    t.isHover = !0, K.animate(a, l, "buildMid")
                }

                function n() {
                    t.isHover = !1
                }

                function i() {
                    t.isHover || t.reset()
                }
                var r = 1 !== t.slide.banner.properties.loopCount,
                    o = this.displayData.properties,
                    a = this.getAnimationEl(),
                    s = o.buildIn,
                    l = o.buildMid,
                    c = o.buildOut,
                    u = "none" === c.type,
                    d = l.delay,
                    p = l.duration;

                function h() {
                    c && !u && (l.onAnimationEnd = function() {
                        t.setBuildOutAnimation()
                    })
                }
                if (!t.properties.showOnAllSlides) {
                    var f = t.slide.displayData.properties.duration,
                        y = t.slide.displayData.properties.stopSlide,
                        b = "none" !== s.type ? s.delay + s.duration : 0,
                        g = l && "none" !== l.type ? l.delay + l.duration : 0,
                        m = b + g + c.delay + c.duration;
                    ("instant" === c.type && m > f || c && !y && b > f) && (c = null), r && l && "none" !== l.type && b + g > f && (l.duration = parseFloat((f - b - l.delay).toFixed(1)))
                }
                "hover" !== l.startEnd ? (K.animate(a, l, "buildMid"), t.buildTimeouts.push(U((function() {
                    (r && p === l.duration || !r) && (l.delay = 0, l.duration = 0, h(), K.animate(a, l, "buildMid")), l.delay = d, l.duration = p
                }), 1e3 * (l.delay + l.duration)))) : (t.isHover = !1, c && !u && (l.onAnimationEnd = null), U((function() {
                    l.delay = 0, a.addEventListener("mouseenter", e), a.addEventListener("animationiteration", i), a.addEventListener("mouseleave", n), U((function() {
                        a.removeEventListener("mouseenter", e), a.removeEventListener("animationiteration", i), a.removeEventListener("mouseleave", n), (r && p === l.duration || !r && c && !u) && (l.delay = 0, l.duration = 0, h(), K.animate(a, l, "buildMid")), l.delay = d, l.duration = p
                    }), 1e3 * l.duration)
                }), 1e3 * l.delay))
            }
        }, {
            key: "setBuildOutAnimation",
            value: function() {
                var t = this.getAnimationEl(),
                    e = this.displayData.properties.buildOut,
                    n = this;
                n.buildTimeouts.push(U((function() {
                    n.trigger("buildOutStart")
                }), 1e3 * e.delay)), K.animate(t, e, "buildOut"), n.buildTimeouts.push(U((function() {
                    n.trigger("buildOutEnd"), t.style.display = "none"
                }), 1e3 * (e.duration + e.delay)))
            }
        }, {
            key: "playAnimation",
            value: function(t, skipAnimation) {
				
				// Create Animation Handles
				window.animationObjects = window.animationObjects || new Set()
				if(!window.animationObjects.has(this)) {
					window.animationObjects.add(this)
				}
				
				if(!skipAnimation){
					return;
				}
				// End Modifications
				
                var e = this,
                    n = this.getAnimationEl(),
                    i = this.displayData.properties,
                    r = i.buildIn,
                    o = i.buildMid,
                    a = i.buildOut;
                if (t = t || 0, !this.properties.showOnAllSlides) {
                    var s = this.slide.displayData.properties.duration,
                        l = this.slide.displayData.properties.stopSlide,
                        c = "none" !== r.type ? r.delay + r.duration : 0,
                        u = c + (o && "none" !== o.type ? o.delay + o.duration : 0) + a.delay + a.duration;
                    ("instant" === a.type && u > s || a && !l && c > s) && (a = null)
                }
                r && "none" !== r.type ? (this.buildTimeouts.push(U((function() {
                    e.trigger("buildInStart")
                }), 1e3 * r.delay)), "instant" === r.type && r.delay > 0 && (n.style.display = "none", this.buildTimeouts.push(U((function() {
                    n.style.display = ""
                }), 1e3 * (r.delay + t)))), r.onAnimationEnd = function() {
                    o && "none" !== o.type ? e.setBuildMidAnimation() : a && "none" !== a.type && e.setBuildOutAnimation()
                }, K.animate(n, r, "buildIn", t), this.buildTimeouts.push(U((function() {
                    e.trigger("buildInEnd")
                }), 1e3 * (r.duration + r.delay + t)))) : o && "none" !== o.type ? e.setBuildMidAnimation() : a && "none" !== a.type && e.setBuildOutAnimation()
            }
        }, {
            key: "transform",
            value: function(t, e) {
                e || (e = this.container), e.style["-webkit-transform"] = t, e.style["-o-transform"] = t, e.style["-ms-transform"] = t, e.style["-moz-transform"] = t, e.style.transform = t
            }
        }, {
            key: "webkitTransform",
            value: function(t, e) {
                e || (e = this.container), e.style["-webkit-transform"] = t
            }
        }, {
            key: "createActionProperties",
            value: function(t) {
                var e = t || this.properties && this.properties.actions && this.properties.actions[0];
                if (!e) return !1;
                var n = "";
                return "gotoURL" === e.type && (n = e.url), {
                    event: e.event,
                    slideOrUrl: "gotoSlide" === e.type ? e.slide : n,
                    type: e.type,
                    target: e.target,
                    useHandCursor: e.useHandCursor
                }
            }
        }, {
            key: "applyExtraPropertiesForGradients",
            value: function(t) {
                if (this.properties.backgroundColor && "string" != typeof this.properties.backgroundColor) {
                    var e = this.properties.backgroundColor.type,
                        n = this.properties.border ? this.properties.border.weight : 0;
                    if ("lgrad" === e || "rgrad" === e) {
                        var i = "-".concat(n, "px"),
                            r = "calc(100% + ".concat(2 * n, "px)");
                        g(t, {
                            backgroundPosition: "".concat(i, " ").concat(i),
                            backgroundSize: "".concat(r, " ").concat(r)
                        })
                    }
                }
            }
        }, {
            key: "getCropBackgroundPosition",
            value: function(t) {
                var e = t.cropData.x,
                    n = t.cropData.y,
                    i = t.width,
                    r = t.height,
                    o = t.border ? t.border.weight : 0,
                    a = e - o,
                    s = n - o;
                return "horizontal" !== t.flip && "both" !== t.flip || (a = i - (e + t.cropData.width) - o), "vertical" !== t.flip && "both" !== t.flip || (s = r - (n + t.cropData.height) - o), {
                    x: a,
                    y: s
                }
            }
        }]) && ot(n.prototype, i), r && ot(n, r), e
    }(et);

    function ut(t) {
        return (ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function dt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function pt(t, e) {
        return !e || "object" !== ut(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function ht(t, e, n) {
        return (ht = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var i = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = ft(t)););
                return t
            }(t, e);
            if (i) {
                var r = Object.getOwnPropertyDescriptor(i, e);
                return r.get ? r.get.call(n) : r.value
            }
        })(t, e, n || t)
    }

    function ft(t) {
        return (ft = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function yt(t, e) {
        return (yt = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var bt = function(t) {
        function e() {
            var t;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), (t = pt(this, ft(e).call(this))).banner = null, t.rendered = !1, t._buildOutTimeout = null, t.container = null, t.elements = [], t.LOOP_COUNT_FOREVER = 0, t
        }
        var n, i, r;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && yt(t, e)
        }(e, t), n = e, (i = [{
            key: "init",
            value: function(t, n) {
                if (this.isOverflowSlide) this.container = n, this.displayContainer = n, this.resetElements();
                else {
                    this.createMainContainers("slide", "slide-inner"), n.appendChild(this.container);
                    var i = t.properties;
                    this.ah = t.ah, !this.ah && i && (this.ah = i.id), i.duration = parseFloat(i.duration), i.duration < .1 && (i.duration = .1), i.transition = i.transition || {
                        type: "none",
                        delay: 0,
                        duration: .1
                    };
                    var r = i.transition;
                    this.parseTransition(r), this.applyBackground(this.displayContainer, i.backgroundColor), this.reset()
                }
                return this.banner.statsPresent && this.banner.stats.trackEvent(this.container, this), ht(ft(e.prototype), "init", this).call(this, t)
            }
        }, {
            key: "parseTransition",
            value: function(t) {
                switch (t.duration = parseFloat(t.duration) || 0, t.delay = parseFloat(t.delay) || 0, t.type) {
                    case "slide":
                    case "slideBounce":
                    case "slideElastic":
                        if (!parseInt(t.slideOffset)) switch (t.direction) {
                            case "r2l":
                            case "l2r":
                                t.slideOffset = this.banner.getWidth();
                                break;
                            case "t2b":
                            case "b2t":
                                t.slideOffset = this.banner.getHeight()
                        }
                        break;
                    case "flip":
                        "cross" === t.crosstype && (t.deg = 180)
                }
            }
        }, {
            key: "isFirstSlide",
            value: function() {
                return 0 === this.banner.slides.indexOf(this)
            }
        }, {
            key: "isLastSlide",
            value: function() {
                return this.banner.slides.indexOf(this) === this.banner.slides.length - 1
            }
        }, {
            key: "reset",
            value: function() {
                K.clearAll(this.container);
                var t = this.displayContainer.style;
                t.zIndex = 0, t.width = "100%", t.height = "100%", t.top = "0", t.left = "0", t.filter = "", t["-webkit-filter"] = "", t.animation = "", t["-webkit-animation"] = "", this.transform("none"), this.resetElements()
            }
        }, {
            key: "resetElements",
            value: function() {
                for (var t = 0; t < this.elements.length; t++) this.elements[t].reset()
            }
        }, {
            key: "play",
            value: function(t, e) {
                this.banner.lastSlide = this.banner.currentSlide, this.banner.currentSlide = this, e || this.banner.trigger("changeSlide"), this.rendered ? this.reset() : (this.banner.preload.assets(null, this.getNextSlide(), this.banner.config), this.render()), this.container.style.opacity = 1, this.playSlideAnimation(t)
            }
        }, {
            key: "render",
            value: function() {
                var t, e, n = this.displayData.elements;
                for (e = 0; e < n.length; e++)(t = this.renderElement(n[e])) && this.elements.push(t);
                if (this.on("buildInStart buildInEnd buildOutStart buildOutEnd", (function(t) {
                        for (var e = 0; e < this.elements.length; e++) {
                            var n = "slide".concat(t.type.charAt(0).toUpperCase()).concat(t.type.substr(1));
                            this.elements[e].trigger(n, this)
                        }
                    })), this.isOverflowSlide) {
                    if (!this.banner.noAnimation)
                        for (e = 0; e < this.elements.length; e++) this.elements[e].playAnimation(0);
                    this.trigger("buildInStart"), this.trigger("buildInEnd")
                } else this.createElement("div", "slide-hover", !0, this.container);
                this.rendered = !0
            }
        }, {
            key: "getDurationToStartSlide",
            value: function() {
                var t = this;
                return this.banner.slides.reduce((function(e, n, i) {
                    var r;
                    return i < t.banner.startSlide ? (r = "none" !== n.displayData.properties.transition.type ? n.displayData.properties.transition.duration : 0, e + n.displayData.properties.duration + r) : e
                }), 0)
            }
        }, {
            key: "renderElement",
            value: function(t) {
                var e, n = t.properties;
                n.buildIn = n.buildIn || {
                    type: "none",
                    delay: 0,
                    duration: 0
                }, n.buildOut = n.buildOut || {
                    type: "none",
                    delay: 0,
                    duration: 0
                };
                var i = n.buildIn,
                    r = n.buildOut;

                function o(t) {
                    t.duration = parseFloat(t.duration) || 0, t.delay = parseFloat(t.delay) || 0
                }
                if (o(i), o(r), this.isOverflowSlide) {
                    var a = this.getDurationToStartSlide(),
                        s = i.delay - a;
                    s < 0 && ["audio", "video"].includes(t.layerType) && (n.secondsBeforeSlide = s), i.duration + s < 0 ? (i.type = "none", r.delay -= a - i.duration - i.delay) : i.delay = s
                }
                var l = "".concat(t.layerType.charAt(0).toUpperCase() + t.layerType.substr(1), "Display"),
                    c = window["BS_".concat(l)];
                if (!c) return console.error("Error ".concat(l, " not found")), null;
                var u = window.bannerConfig,
                    d = u.printScreen,
                    p = u.video;
                if (e = ["ImageDisplay", "ShapeDisplay", "EmbedDisplay"].includes(l) ? new c(this.banner.properties.retina) : "audio" === t.layerType && (d || p) ? null : new c) {
                    e.slide = this;
                    var h = e.init(t).getContainer();
                    this.displayContainer.appendChild(h), e.render(), this.isOverflowSlide && (e.container.style.zIndex = 10, e.container.style.webkitTransform = "translate3d(0, 0, 0)")
                }
                return e
            }
        }, {
            key: "getNextSlide",
            value: function(t) {
                t || (t = this.banner.currentSlide);
                var e = this.banner.slides,
                    n = e.indexOf(t);
                return n + 1 >= e.length ? this.banner.slides[0] : this.banner.slides[n + 1]
            }
        }, {
            key: "getPrevSlide",
            value: function(t) {
                t || (t = this.banner.currentSlide);
                var e = this.banner.slides.indexOf(t);
                return e - 1 < 0 ? this.banner.slides[this.banner.slides.length - 1] : this.banner.slides[e - 1]
            }
        }, {
            key: "getFirstSlide",
            value: function() {
                return this.banner.slides[0]
            }
        }, {
            key: "getLastSlide",
            value: function() {
                return this.banner.slides[this.banner.slides.length - 1]
            }
        }, {
            key: "playSlideAnimation",
            value: function(t) {
                M(this._buildOutTimeout);
                var e, n, i = this.getAnimationEl(),
                    r = this,
                    o = this.displayData.properties,
                    a = this.banner.lastSlide ? this.banner.lastSlide.container : null,
                    s = this.banner.slides.length,
                    l = 0;
                for (e = 0; e < this.banner.slides.length; e++)(n = this.banner.slides[e].container).style.zIndex = 0, n.style.display = "none";
                this.container.style.display = "", this.container.style.zIndex = "1", this.trigger("buildInStart"), t && "none" !== t.type && !this.banner.noAnimation && s > 1 ? (this.addClass(this.container, "buildin"), l = parseFloat(t.duration) || 0, a && (a.style.display = ""), "hide" !== t.crosstype ? K.animate(i, t, "buildIn") : a && (a.style.zIndex = "2"), U((function() {
                    r.removeClass(r.container, "buildin"), r.trigger("buildInEnd")
                }), 1e3 * t.duration)) : this.trigger("buildInEnd");
                var c = !this.banner.properties.loopCount || this.banner.properties.loopCount === this.LOOP_COUNT_FOREVER,
                    u = this.banner.loopsPlayed >= this.banner.properties.loopCount;
                if (!this.isLastSlide() || u || c || this.banner.loopsPlayed++, o.stopSlide || this.banner.showOnlyOneSlide || !c && u && this.isLastSlide() || (this._buildOutTimeout = U((function() {
                        r.buildOut()
                    }), 1e3 * (l + o.duration))), !this.banner.noAnimation)
                    for (e = 0; e < this.elements.length; e++) this.elements[e].playAnimation(l)
            }
        }, {
            key: "buildOut",
            value: function(t) {
                this._buildOutTimeout && M(this._buildOutTimeout);
                var e = this.banner.slides.length,
                    n = this.displayData.properties.transition,
                    i = this;
                i.trigger("buildOutStart");
                var r = null;
                if (n && "none" !== n.type && e > 1) {
                    if (i.addClass(i.container, "buildout"), "show" !== n.crosstype) {
                        var o = m(n);
                        K.animate(this.getAnimationEl(), o, "buildOut")
                    }
                    r = U((function() {
                        i.banner.currentSlide !== i && (i.container.style.display = "none"), i.removeClass(i.container, "buildout"), i.trigger("buildOutEnd")
                    }), 1e3 * n.duration)
                } else i.trigger("buildOutEnd");
                t || (t = this.getNextSlide()), t === this && r && (M(r), i.removeClass(i.container, "buildout"), i.trigger("buildOutEnd")), t.play(m(n))
            }
        }, {
            key: "getBuildOutTime",
            value: function() {
                var t = this.displayData.properties.transition;
                return t && "none" !== t.type ? 1e3 * t.duration : 0
            }
        }, {
            key: "getSlideByHashOrId",
            value: function(t) {
                if (!t) return !1;
                for (var e = this.banner.slides, n = 0; n < e.length; n++) {
                    var i = e[n].displayData.properties;
                    if (t === e[n].ah || i && t === i.id) return e[n]
                }
                return !1
            }
        }]) && dt(n.prototype, i), r && dt(n, r), e
    }(ct);

    function gt(t) {
        return (gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function mt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function vt(t, e) {
        return !e || "object" !== gt(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function wt(t) {
        return (wt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function St(t, e) {
        return (St = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var kt = function(t) {
        function e() {
            var t;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), (t = vt(this, wt(e).call(this))).startSlide = 0, t.overflowSlide = null, t.currentSlide = null, t.lastSlide = null, t
        }
        var n, i, r;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && St(t, e)
        }(e, t), n = e, (i = [{
            key: "init",
            value: function(t, e, n, i) {
                var r = this;
                this.container = e, this.displayContainer = this.createElement("div", "bs-helper"), this.displayContainer.setAttribute("style", "z-index: -1;"), this.container.appendChild(this.displayContainer), this.properties = t.properties, this.resources = t.resources, this.config = n, this.startSlide = parseInt(n.startSlide) || 0, this.noAnimation = Boolean(n.noAnimation) || !1, this.showOnlyOneSlide = Boolean(n.showOnlyOneSlide) || !1, this.preload = i, this.setStyle(this.container, "width,height", "px"), this.setStyle(this.displayContainer, "width,height", "px");
                var o = this.properties.backgroundColor || {};
                if ((this.properties.width < 2 || this.properties.height < 2) && (o.useBorder = !1), o.useBorder && (this.displayContainer.style.left = "-1px", this.displayContainer.style.top = "-1px", this.displayContainer.style.position = "relative"), this.applyBackground(this.container, o, this.properties.retina), this.applyActions(this.createActionProperties(), this.container), ct.prototype.init.call(this, t), this.initSlides(t.elements), this.container.addEventListener("click", (function() {
                        r.statsPresent && r.stats.launch()
                    })), !1 !== n.resize) {
                    var a = w(this.properties.width, this.properties.height);
                    this.properties.transform = "scale(".concat(a.proportion, ")"), this.properties.transformOrigin = "0 0 0", this.setStyle(this.container, "transform,transformOrigin"), window.addEventListener("resize", (function() {
                        a = w(r.properties.width, r.properties.height), r.container.style.transform = "scale(".concat(a.proportion, ")")
                    }))
                }
            }
        }, {
            key: "initSlides",
            value: function(t) {
                var e, n;
                this.slides = [];
                var i, r, o = [],
                    a = {
                        properties: {},
                        elements: []
                    };
                for (e = 0; n = t[e]; e++) "slide" === n.type ? o.push(n) : (n.properties && (n.properties.showOnAllSlides = !0), a.elements.push(n));
                for (this.overflowSlide = new bt, this.overflowSlide.isOverflowSlide = !0, this.overflowSlide.banner = this, this.overflowSlide.init(a, this.displayContainer), e = 0; r = o[e]; e++)(i = new bt).banner = this, i.init(r, this.displayContainer), this.slides.push(i)
            }
        }, {
            key: "getWidth",
            value: function() {
                return this.properties.width
            }
        }, {
            key: "getHeight",
            value: function() {
                return this.properties.height
            }
        }, {
            key: "play",
            value: function() {
                this.overflowSlide.render(), this.loopsPlayed = 1, this.slides[this.startSlide] && this.slides[this.startSlide].play(null, !0)
            }
        }, {
            key: "createActionProperties",
            value: function() {
                var t = {
                    event: "click",
                    slideOrUrl: "",
                    type: "gotoURL",
                    target: "_blank",
                    useHandCursor: !0
                };
                if (!this.config.isCustomEmbed) {
                    var e = nt();
                    if (!e && this.properties.useAsClickTag && ((e = window.clickTag || window.clickTAG || this.config && this.config.clickTag) || "clickTag" === this.properties.bannerUrl || (e = this.properties.bannerUrl, window.clickTag = e)), e) return t.slideOrUrl = v(e), t
                }
                var n = this.properties;
                return n && (t.target = n.urlTarget, t.useHandCursor = n.useHandCursor), !!n && !!n.bannerUrl && (t.slideOrUrl = n.bannerUrl, t)
            }
        }]) && mt(n.prototype, i), r && mt(n, r), e
    }(ct);

    function Ct(t) {
        return (Ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Ot(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function xt(t) {
        return (xt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Et(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function At(t, e) {
        return (At = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var Tt = function(t) {
        function e() {
            var t;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), t = function(t, e) {
                return !e || "object" !== Ct(e) && "function" != typeof e ? Et(t) : e
            }(this, xt(e).call(this)), j.init();
            var n = Et(t);
            return t.banner = new kt, t.initBanner = function() {
                n.inited || (n.banner.init(n.json.banner, n.bannerContainer, n.config, n.preload), (!n.config.video && !n.config.pdf || n.config.autoPlay || void 0 === n.config.autoPlay) && n.banner.play(), ["mouseover", "mouseout"].forEach((function(t) {
                    n.bannerContainer.addEventListener(t, (function() {
                        document.querySelectorAll("video, audio").forEach((function(e) {
                            ! function(t, e) {
                                var n = "mouseover" === t && function(t) {
                                    for (var e = t.parentNode; !e.classList.contains("element");) e = e.parentNode;
                                    return "none" !== e.style.display
                                }(e);
                                if (e.dataset.soundOnHover === (!0).toString()) try {
                                    e.volume = n ? parseFloat(e.dataset.volume) : 0
                                } catch (t) {
                                    console.error(t)
                                }
                            }(t, e)
                        }))
                    }))
                })), n.inited = !0)
            }, t
        }
        var n, i, r;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && At(t, e)
        }(e, t), n = e, (i = [{
            key: "init",
            value: function(t, e, n) {
                var i = this,
                    r = Math.round(e.banner.properties.width),
                    o = Math.round(e.banner.properties.height);
                if (e.banner.properties.width = r, e.banner.properties.height = o, this.json = e, this.config = n, this.bannerContainer = t, this.config.video || this.config.pdf) this.initBanner();
                else {
                    this.preload = new C;
                    var a = parseInt(n.startSlide) || 0,
                        s = e.banner.elements.filter((function(t) {
                            return "slide" === t.type
                        }));
                    this.preload.assets(e.banner, s[a], n, this.initBanner), window.loadAssetsTimer = setTimeout((function() {
                        i.preload.resolveIfAssetsLoaded(!0)
                    }), 3e3)
                }
            }
        }, {
            key: "showWatermark",
            value: function() {
                window.BS_ShowWatermark && window.BS_ShowWatermark()
            }
        }]) && Ot(n.prototype, i), r && Ot(n, r), e
    }(et);

    function _t(t) {
        return (_t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Pt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function It(t, e) {
        return !e || "object" !== _t(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Bt(t) {
        return (Bt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Lt(t, e) {
        return (Lt = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var Dt = function(t) {
        function e(t) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), (n = It(this, Bt(e).call(this))).retina = t, n
        }
        var n, i, r;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Lt(t, e)
        }(e, t), n = e, (i = [{
            key: "init",
            value: function(t) {
                var e = t.properties;
                if (this.properties = e, this.createMainContainers("element", "shape ".concat(e.type)), -1 != s()) {
                    var n = this.createElement("img", "fakeImage");
                    n.src = "data:image/gif;base64,R0lGODlhAQABAIAAANvf7wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", this.displayContainer.appendChild(n)
                }
                "line" === e.type && (e.type = "rectangle", e.width = e.len, e.height = e.thick, delete e.len, delete e.thick, this.properties = e), this.container.style.width = "".concat(e.width, "px"), this.container.style.height = "".concat(e.height, "px");
                var i = this.getBRadius();
                if (i && (this.displayContainer.style.borderRadius = "".concat(i, "px")), this.displayContainer.style.border = this.getBorderString(), this.applyBackground(this.displayContainer, e.backgroundColor, this.retina), this.applyExtraPropertiesForGradients(this.displayContainer), e.backgroundColor && e.backgroundColor.type && "image" === e.backgroundColor.type && "userCrop" === e.backgroundColor.scaleMode && e.cropData) {
                    var r = e.cropData.width,
                        o = e.cropData.height,
                        a = this.getCropBackgroundPosition(e);
                    this.displayContainer.style.backgroundSize = "".concat(r, "px ").concat(o, "px"), this.displayContainer.style.backgroundPositionX = "".concat(a.x, "px"), this.displayContainer.style.backgroundPositionY = "".concat(a.y, "px"), this.displayContainer.style.backgroundRepeat = "no-repeat"
                }
                this.displayData = t;
                var l = this.getFlipString(e.flip);
                return this.transform("rotate(".concat(this.properties.rotation, "deg) ").concat(l), this.displayContainer), this.applyFilters(this.displayContainer, !1, this.properties.blur, this.properties.dropShadow), this.reset(), this.slide.banner.statsPresent && this.slide.banner.stats.trackEvent(this.displayContainer, this), this.applyActions(this.createActionProperties(), this.displayContainer), ct.prototype.init.call(this, t)
            }
        }]) && Pt(n.prototype, i), r && Pt(n, r), e
    }(ct);

    function jt(t) {
        return (jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Ut(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function Mt(t, e) {
        return !e || "object" !== jt(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Ft(t) {
        return (Ft = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function zt(t, e) {
        return (zt = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var Rt = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Mt(this, Ft(e).apply(this, arguments))
        }
        var n, i, s;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && zt(t, e)
        }(e, t), n = e, (i = [{
            key: "getHoverBackgroundColor",
            value: function() {
                if (!this.properties.backgroundColor) return null;
                var t = JSON.parse(JSON.stringify(this.properties.backgroundColor));
                switch (t.type) {
                    case "solid":
                        t.scolor = c(t.scolor, 10);
                        break;
                    case "rgrad":
                    case "lgrad":
                        for (var e = t.gradColors, n = 0; n < e.length; n++) e[n].c = c(e[n].c, 10)
                }
                return t
            }
        }, {
            key: "getBackgroundHoverCss",
            value: function(t) {
                var e = y(t),
                    n = "";
                for (var i in e) switch (i) {
                    default:
                        e[i] && (n += "".concat(i, ": ").concat(e[i], " !important;"));
                        break;
                    case "background-image":
                        for (var r = 0; r < e[i].length; r++) n += "background-image:".concat(e[i][r], " !important;")
                }
                return n
            }
        }, {
            key: "getBorderColorHoverCss",
            value: function(t) {
                if (!t) return "";
                var e, n, i, r, s = o(t),
                    l = a(s, !1),
                    u = (e = c(l, 10), n = s.a, i = "#" === e[0] ? e.substr(1) : e, r = function(t) {
                        return [t >> 16, t >> 8 & 255, 255 & t]
                    }(parseInt(i, 16)), "rgba(".concat(r[0], ", ").concat(r[1], ", ").concat(r[2], ", ").concat(n, ")"));
                return "border-color: ".concat(u, " !important;")
            }
        }, {
            key: "init",
            value: function(t) {
                var e = t.properties;
                "string" == typeof e.backgroundColor && (e.backgroundColor = {
                    type: "solid",
                    scolor: e.backgroundColor
                });
                var n = e.border || {};
                if (e["border-radius"] = e.border && e.border.radius ? e.border.radius : e.borderRadius, this.properties = e, this.createMainContainers("element", "bs-btn btn".concat(e.id)), e.localUrl && e.localUrl.includes(".svg")) {
                    this.textContainer = this.createElement("div", "bs-btn-label image-crop", !0, this.displayContainer);
                    var i = void 0 !== bannerConfig.imgLocalPath ? bannerConfig.imgLocalPath : "media/";
                    this.textContainer.style.backgroundImage = "url(".concat(i).concat(e.localUrl, ")"), this.textContainer.style.height = "100%", this.applyFilters(this.textContainer, null, null, e.labelShadow), n.weight && this.applyExtraPropertiesForGradients(this.displayContainer)
                } else {
                    if (this.textContainer = this.createElement("label", "bs-btn-label", !0, this.displayContainer), e.html ? this.textContainer.innerHTML = e.html : this.textContainer.textContent = e.buttonLabel, this.textContainer.dir = e.labelStyle.textDirection || "ltr", e.buttonLabel.split("\n").length > 1 && (e.labelStyle["white-space"] = "pre-wrap", e.labelStyle["overflow-wrap"] = "break-word"), this.setStyle(this.textContainer, "line-height,labelOffsetX,labelOffsetY", "px"), ("string" != typeof e.labelStyle.fontSize || "string" == typeof e.labelStyle.fontSize && !e.labelStyle.fontSize.includes("px")) && (e.labelStyle.fontSize = "".concat(e.labelStyle.fontSize, "px")), ("string" != typeof e.labelStyle.letterSpacing || "string" == typeof e.labelStyle.letterSpacing && !e.labelStyle.letterSpacing.includes("px")) && (e.labelStyle.letterSpacing = "".concat(e.labelStyle.letterSpacing, "px")), "string" == typeof e.labelStyle.fontFamily && !e.labelStyle.fontFamily.includes('"')) {
                        var o = '"'.concat(e.labelStyle.fontPrefix || "").concat(e.labelStyle.fontFamily, '"');
                        e.labelStyle.fontFamily = o
                    }
                    g(this.textContainer, e.labelStyle), g(this.textContainer, h(e.labelShadow)), n.weight && this.applyExtraPropertiesForGradients(this.displayContainer)
                }
                g(this.displayContainer, f(e.dropShadow)), this.displayContainer.style.border = this.getBorderString(), this.applyBackground(this.displayContainer, e.backgroundColor);
                var a = ".bs-btn.btn".concat(e.id),
                    s = "bs-btn".concat(e.id),
                    l = this.getBackgroundHoverCss(this.getHoverBackgroundColor()),
                    c = this.getBorderColorHoverCss(n.color);
                ! function(t, e) {
                    var n, i = window.document.getElementsByTagName("head")[0],
                        o = window.document.getElementById("eautils-css");
                    if (null == o && ((o = window.document.createElement("style")).type = "text/css", o.id = "eautils-css", i.appendChild(o)), void 0 !== r.cssStyle[e]) {
                        r.rawCssStyle = "", r.cssStyle[e].css = t;
                        for (var a = 0; a < r.cssStyleArray.length; a++) n = r.cssStyleArray[a], r.rawCssStyle += n.css
                    } else r.rawCssStyle += t, (n = {}).css = t, r.cssStyle[e] = n, r.cssStyleArray.push(n);
                    o.styleSheet ? o.styleSheet.cssText = r.rawCssStyle : o.innerHTML = r.rawCssStyle
                }("".concat(a, ":hover{").concat(l).concat(c, "}"), s), this.reset();
                var u = this.createActionProperties();
                return u && "click" === u.event && !u.useHandCursor && this.addClass(this.displayContainer, "no-hand-cursor"), this.slide.banner.statsPresent && this.slide.banner.stats.trackEvent(this.container, this), this.applyActions(u, this.container), ct.prototype.init.call(this, t)
            }
        }, {
            key: "reset",
            value: function() {
                ct.prototype.reset.call(this), this.setStyle(this.displayContainer, "width,height,border-radius", "px")
            }
        }]) && Ut(n.prototype, i), s && Ut(n, s), e
    }(ct);

    function Nt(t) {
        return (Nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Ht(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function Wt(t, e) {
        return !e || "object" !== Nt(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Gt(t, e, n) {
        return (Gt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var i = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Yt(t)););
                return t
            }(t, e);
            if (i) {
                var r = Object.getOwnPropertyDescriptor(i, e);
                return r.get ? r.get.call(n) : r.value
            }
        })(t, e, n || t)
    }

    function Yt(t) {
        return (Yt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Xt(t, e) {
        return (Xt = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var qt = function(t) {
        function e() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Wt(this, Yt(e).apply(this, arguments))
        }
        var n, i, r;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Xt(t, e)
        }(e, t), n = e, (i = [{
            key: "init",
            value: function(t) {
                var n = t.properties;
                return this.properties = n, this.createMainContainers("element", "text"), this.innerDisplayContainer = this.createElement("div", "innerDisplayContainer", !0, this.displayContainer, null), this.innerDisplayContainer.dir = n.textDirection || "ltr", this.initCommonProperties(), n.config ? this.initRichText() : this.initSimpleText(), this.reset(), Gt(Yt(e.prototype), "init", this).call(this, t)
            }
        }, {
            key: "initCommonProperties",
            value: function() {
                var t = this.properties;
                this.transform("rotate(".concat(this.properties.rotation, "deg)"), this.displayContainer), this.setStyle(this.displayContainer, "opacity"), this.setStyle(this.displayContainer, "fontSize", "px");
                var e = this.displayContainer.style;
                if (e.textAlign = t.alignment, e.lineHeight = t.lineHeight, e.letterSpacing = "".concat(t.letterSpacing, "px"), e.width = "100%", e.height = "100%", g(this.displayContainer, h(this.properties.textShadow)), this.applyFilters(this.displayContainer, !1, this.properties.blur), this.properties.scale) {
                    var n = this.innerDisplayContainer.style;
                    n.width = "".concat(t.width, "px"), n.height = "".concat(t.height, "px"), this.transform("scale(".concat(this.properties.scale, ")"), this.innerDisplayContainer), n["transform-origin"] = "0 0"
                }
            }
        }, {
            key: "initSimpleText",
            value: function() {
                this.text = this.createElement("span", "text-content"), this.innerDisplayContainer.appendChild(this.text);
                var t = this.properties;
                this.setStyle(this.innerDisplayContainer, "fontWeight,fontStyle,color");
                var e = this.innerDisplayContainer.style;
                e.fontFamily = '"'.concat(t.fontPrefix || "").concat(t.fontFamily, '"'), t.textTransform && (e.textTransform = t.textTransform), t.textDecoration && (e.textDecoration = t.textDecoration);
                try {
                    this.text.textContent = this.properties.text
                } catch (t) {}
                this.slide.banner.statsPresent && this.slide.banner.stats.trackEvent(this.text, this), this.applyActions(this.createActionProperties(), this.text)
            }
        }, {
            key: "initRichText",
            value: function() {
                this.applyConfigElements()
            }
        }, {
            key: "applyConfigElements",
            value: function() {
                var t = this.properties.text,
                    e = this.properties.config,
                    n = t.replace(/\n/g, ""),
                    i = this;
                e.forEach((function(e) {
                    var r = e.offset,
                        o = e.length,
                        a = e.nodeType,
                        s = e.style,
                        l = e.children;
                    0 === r && o === t.length ? i.innerDisplayContainer.appendChild(i.getNode(a, n, s, n, l)) : i.innerDisplayContainer.appendChild(i.getNode(a, S(n, r, o), s, n, l))
                }))
            }
        }, {
            key: "attachEventsAndActions",
            value: function(t) {
                this.slide.banner.statsPresent && this.slide.banner.stats.trackEvent(t, this), this.applyActions(this.createActionProperties(), t)
            }
        }, {
            key: "getNode",
            value: function(t, e, n, i, r) {
                n || (n = null), i || (i = null), r || (r = null);
                var o = document.createElement(t),
                    a = function(t) {
                        if (!t) return "";
                        var e = "";
                        for (var n in t)
                            if ({}.hasOwnProperty.call(t, n) && t[n]) switch (n) {
                                case "fontFamily":
                                    var i = 0 === t[n].indexOf('"') ? t[n] : '"'.concat(t.fontPrefix || "").concat(t[n], '"');
                                    e += "font-family:".concat(i, ";");
                                    break;
                                case "fontWeight":
                                case "fontStyle":
                                case "color":
                                case "textTransform":
                                case "textDecoration":
                                    var r = k(n);
                                    e += "".concat(r, ":").concat(t[n], ";")
                            }
                        return e
                    }(n);
                if (a && (o.style.cssText = a), "div" === t ? o.className = "row" : "span" === t && this.attachEventsAndActions(o), !r || !r.length) {
                    if (e || "div" !== t)
                        if ("div" === t) {
                            var s = document.createElement("span");
                            s.textContent = e, o.appendChild(s), this.attachEventsAndActions(s)
                        } else o.textContent = e;
                    else o.appendChild(document.createElement("BR"));
                    return o
                }
                var l = this;
                return r.forEach((function(t) {
                    var e = t.offset,
                        n = t.length,
                        r = t.nodeType,
                        a = t.style,
                        s = i ? S(i, e, n) : "";
                    o.appendChild(l.getNode(r, s, a))
                })), o
            }
        }, {
            key: "reset",
            value: function() {
                var t;
                Gt(Yt(e.prototype), "reset", this).call(this, this), t = this.properties.config ? this.container.getElementsByClassName("word") : this.container.getElementsByClassName("text-content")[0].getElementsByTagName("span"), K.clearWordsTimeout(this.container, t);
                for (var n = 0; n < t.length; n++) {
                    var i = t[n].style;
                    i.opacity = 1, i.animation = "", i["-webkit-animation"] = ""
                }
            }
        }]) && Ht(n.prototype, i), r && Ht(n, r), e
    }(ct);

    function Qt(t) {
        return (Qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Jt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function Vt(t, e) {
        return !e || "object" !== Qt(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function $t(t) {
        return ($t = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Zt(t, e) {
        return (Zt = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var Kt = function(t) {
            function e(t) {
                var n;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (n = Vt(this, $t(e).call(this))).retina = t, n
            }
            var n, i, r;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Zt(t, e)
            }(e, t), n = e, (i = [{
                key: "init",
                value: function(t) {
                    this.triggerReadyOnRender = !1, this.properties = t.properties;
                    var e, n = this.properties;
                    this.createMainContainers("element", "bs-image image-".concat(n.scaleMode)), this.transformContainer = this.createElement("div", "transform-container"), this.displayContainer.parentNode.appendChild(this.transformContainer), n.maskImage ? (this.maskContainer = this.createElement("div"), this.maskContainer.appendChild(this.displayContainer), this.transformContainer.appendChild(this.maskContainer)) : this.transformContainer.appendChild(this.displayContainer);
                    var i, r, o = window.bannerConfig;
                    if (o.hqImages && this.properties.hqUrl) e = this.properties.hqUrl;
                    else if (this.properties.localUrl) {
                        var a = void 0 !== o.imgLocalPath ? o.imgLocalPath : "media/";
                        e = "".concat(a).concat(this.properties.localUrl), o.embedUrl && (e = o.embedUrl + e)
                    } else e = n.url && n.url.includes("//") ? n.url : o.photosUrl + n.url;
                    switch (!0 === this.retina && this.properties.retinaReady && (this.displayContainer.classList.add("retina"), this.displayContainer.style.setProperty("--retina-src", 'url("'.concat(it(e), '")'))), e && (this.displayContainer.style.backgroundImage = "url(".concat(e, ")")), this.applyFilters(n.maskImage ? this.transformContainer : this.displayContainer, n.adjustColor, n.blur, n.dropShadow), n.verticalAlign) {
                        case "top":
                            i = "0";
                            break;
                        case "middle":
                            i = "50%";
                            break;
                        case "bottom":
                            i = "100%"
                    }
                    switch (n.horizontalAlign) {
                        case "left":
                            r = "0";
                            break;
                        case "center":
                            r = "50%";
                            break;
                        case "right":
                            r = "100%"
                    }
                    if (this.displayContainer.style.backgroundPosition = "".concat(r, " ").concat(i), "tile" === n.scaleMode) {
                        var s = n.contentScale,
                            l = n.originalWidth ? n.originalWidth : n.oWidth;
                        this.displayContainer.style.backgroundSize = "".concat(s / 100 * l, "px"), this.displayContainer.style.backgroundPositionX = "".concat(n.contentOffsetX, "%"), this.displayContainer.style.backgroundPositionY = "".concat(n.contentOffsetY, "%")
                    } else if ("userCrop" === n.scaleMode && n.cropData) {
                        var c = n.cropData.width,
                            u = n.cropData.height,
                            d = this.getCropBackgroundPosition(n);
                        this.displayContainer.style.backgroundSize = "".concat(c, "px ").concat(u, "px"), this.displayContainer.style.backgroundPositionX = "".concat(d.x, "px"), this.displayContainer.style.backgroundPositionY = "".concat(d.y, "px"), this.displayContainer.style.backgroundRepeat = "no-repeat"
                    }
                    this.transformContainer.style.height = "100%", this.transformContainer.style.width = "100%";
                    var p = this.getFlipString(n.flip);
                    return this.transform("translateZ(0) rotate(".concat(n.rotation, "deg) ").concat(p), this.transformContainer), this.reset(), n.maskImage && (this.transformContainer.style.opacity = this.displayContainer.style.opacity, this.displayContainer.style.removeProperty("opacity"), window.bannerConfig.pdf && (this.maskContainer.style.border = "1px solid transparent"), this.maskContainer.style.width = "100%", this.maskContainer.style.height = "100%", g(this.maskContainer, function(t) {
                        if (!t) return {};
                        var e = 'url("data:image/svg+xml;charset=UTF-8,'.concat(encodeURIComponent(t), '")');
                        return {
                            maskImage: e,
                            WebkitMaskImage: e,
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                            maskPosition: "center",
                            WebkitMaskPosition: "center",
                            maskSize: "100% 100%",
                            WebkitMaskSize: "100% 100%",
                            maskOrigin: "content-box",
                            WebkitMaskOrigin: "content-box"
                        }
                    }(n.maskImage))), this.slide.banner.statsPresent && this.slide.banner.stats.trackEvent(this.displayContainer, this), this.applyActions(this.createActionProperties(), this.displayContainer), ct.prototype.init.call(this, t)
                }
            }]) && Jt(n.prototype, i), r && Jt(n, r), e
        }(ct),
        te = function(t, e) {
            var n = 0,
                i = 0,
                r = parseInt(t.slideOffset);
            switch (t.direction) {
                case "custom":
                    n = parseInt(t.slidePosX), i = parseInt(t.slidePosY);
                    break;
                case "l2r":
                    n = e ? -r : r;
                    break;
                case "r2l":
                    n = e ? r : -r;
                    break;
                case "t2b":
                    i = e ? -r : r;
                    break;
                case "b2t":
                    i = e ? r : -r
            }
            return {
                translateX: n,
                translateY: i,
                alpha: parseInt(t.alphaOffset)
            }
        },
        ee = function(t, e) {
            var n = "buildIn" === e,
                i = te(t, n),
                r = i.translateX,
                o = i.translateY,
                a = i.alpha,
                s = "".concat(t.type, "_").concat(e, "_").concat(r, "_").concat(o, "_").concat(a);
            if (T(s)) return s;
            var l = {
                transform: "translateX(".concat(r, "px) translateY(").concat(o, "px)"),
                opacity: a / 100
            };
            return _(s, [{
                percent: n ? 0 : 100,
                props: l
            }, {
                percent: n ? 100 : 0,
                props: {
                    transform: "translateX(0) translateY(0)",
                    opacity: "1"
                }
            }]), s
        },
        ne = function(t, e) {
            var n = "buildIn" === e,
                i = te(t, n),
                r = i.translateX,
                o = i.translateY,
                a = i.alpha,
                s = "slideElastic_".concat(e, "_").concat(r, "_").concat(o, "_").concat(a);
            if (T(s)) return s;
            for (var l, c = [
                    [0, r, o, a / 100],
                    [16, -.25 * r, -.25 * o, 1],
                    [28, .11 * r, .11 * o, 1],
                    [44, -.05 * r, -.05 * o, 1],
                    [60, .02 * r, .02 * o, 1],
                    [72, -.01 * r, -.01 * o, 1],
                    [88, .01 * r, .01 * o, 1],
                    [100, 0, 0, 1]
                ], u = [], d = 0; l = c[d]; d++) {
                var p = {
                    transform: "translateX(".concat(l[1], "px) translateY(").concat(l[2], "px)"),
                    opacity: l[3]
                };
                u.push({
                    percent: n ? l[0] : 100 - l[0],
                    props: p
                })
            }
            return _(s, u), s
        },
        ie = function(t, e, n) {
            var i = "buildIn" === e,
                r = parseInt(t.alphaOffset),
                o = Math.round(.3 * n.offsetWidth + .3 * n.offsetHeight),
                a = 45;
            ("forward" === t.direction && i || "backward" === t.direction && !i) && (a *= -1, o *= -1);
            var s = "".concat(t.type, "_").concat(e, "_").concat(t.direction, "_").concat(r, "_").concat(o, "_").concat(a);
            if (T(s)) return s;
            var l = {
                transform: "translateZ(".concat(o, "px) rotate(").concat(a, "deg)"),
                opacity: r / 100
            };
            return _(s, [{
                percent: i ? 0 : 100,
                props: l
            }, {
                percent: i ? 100 : 0,
                props: {
                    transform: "translateZ(0) rotate(0)",
                    opacity: "1"
                }
            }]), s
        },
        re = function(t, e) {
            var n = "buildIn" === e,
                i = te(t, n),
                r = i.translateX,
                o = i.translateY,
                a = i.alpha,
                s = 1;
            (r < 0 && o >= 0 || o < 0 && r <= 0) && (s = -1);
            var l = 540 * s,
                c = "".concat(t.type, "_").concat(e, "_").concat(r, "_").concat(o, "_").concat(a, "_").concat(l, "_").concat(t.blurAmount);
            if (T(c)) return c;
            var u = {
                transform: "translateX(".concat(r, "px) translateY(").concat(o, "px) rotate(").concat(l, "deg)"),
                filter: "blur(".concat(t.blurAmount, "px)"),
                opacity: a / 100
            };
            return _(c, [{
                percent: n ? 0 : 100,
                props: u
            }, {
                percent: n ? 100 : 0,
                props: {
                    transform: "translateX(0) translateY(0) rotate(0deg)",
                    filter: "blur(0)",
                    opacity: "1"
                }
            }]), c
        };
    String.prototype.includes || (String.prototype.includes = function(t, e) {
        return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e)
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(t, e) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var n = Object(this),
                i = n.length >>> 0;
            if (0 === i) return !1;
            for (var r, o, a = 0 | e, s = Math.max(a >= 0 ? a : i - Math.abs(a), 0); s < i;) {
                if ((r = n[s]) === (o = t) || "number" == typeof r && "number" == typeof o && isNaN(r) && isNaN(o)) return !0;
                s++
            }
            return !1
        }
    }), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), window.getClickTagValue = nt;
    var oe = function() {
        var t = new Tt;
        return window.document.addEventListener("DOMContentLoaded", (function() {
            window.bannerJson && (t.init(window.document.getElementById("bs"), window.bannerJson, window.bannerConfig), window.addEventListener && window.addEventListener("message", (function(e) {
                var n = window.bannerJson.hash;
                e.data === "BS_BANNER_IS_VISIBLE_".concat(n) && (t.banner.stats.trackViewed(), e.source.postMessage("BS_BANNER_IS_VISIBLE_RECEIVED_".concat(n), e.origin))
            }), !1))
        })), t
    };
    window.BS_eaUtils = r, window.BS_eaUtils, window.BS_eff = K, window.BS_eff, window.BS_EventDispatcher = et, window.BS_EventDispatcher, window.BS_BaseDisplay = ct, window.BS_BaseDisplay, window.BS_BannerDisplay = kt, window.BS_BannerDisplay, window.BS_SlideDisplay = bt, window.BS_SlideDisplay, window.BS_EmbedCanvas = Tt, window.BS_EmbedCanvas, window.BS_ShapeDisplay = Dt, window.BS_ShapeDisplay, window.BS_ButtonDisplay = Rt, window.BS_ButtonDisplay, window.BS_TextDisplay = qt, window.BS_TextDisplay, window.BS_ImageDisplay = Kt, window.BS_ImageDisplay, window.BS_slide = ee, window.BS_slide, window.BS_slideElastic = ne, window.BS_slideElastic, window.BS_rotate = ie, window.BS_rotate, window.BS_roll = re, window.BS_roll, window.BS_init = oe, window.BS_init, window.BS_ShowWatermark = function() {
        if (!window.bannerConfig.watermarkUrl) return !1;
        var t = "11px",
            e = "normal",
            n = "Arial, sans-serif",
            i = "400",
            r = "pointer",
            o = "#fff",
            a = "rgba(100, 100, 100, .8)",
            s = "0",
            l = "-68px",
            c = "absolute",
            u = "999",
            d = document.createElement("div");
        d.setAttribute("style", "".concat('position: absolute;right: 5px;bottom: 5px;z-index: 99999999999999;background: url("').concat(window.bannerConfig.watermarkUrl, '"); ') + "width: 178px; height: 32px;background-repeat: no-repeat;");
        var p = document.createElement("div");
        return p.appendChild(d), document.getElementById("bs").appendChild(p), p.setAttribute("style", "background-color: ".concat(a, ";") + "bottom: ".concat(s, ";") + "color: ".concat(o, ";") + "cursor: ".concat(r, ";") + "fill: ".concat(o, ";") + "font-family: ".concat(n, ";") + "font-size: ".concat(t, ";") + "font-style: ".concat(e, ";") + "font-weight: ".concat(i, ";") + "position: ".concat(c, ";") + "right: ".concat(l, ";") + "z-index: ".concat(u, ";")),
            function(t) {
                if (!window.bannerJson) return !1;
                t.addEventListener("click", (function(t) {
                    var e = "//www.bannersnack.com/?utm_source=freebanner&utm_medium=watermark1&utm_content=".concat(window.bannerJson.banner.properties.width, "x").concat(window.bannerJson.banner.properties.height, "&utm_campaign=BannerSnackEmbed&utm_hash=").concat(window.bannerJson.hash);
                    window.open(e, "_blank"), t.stopPropagation()
                }))
            }(p), p
    }, window.BS_ShowWatermark;
    oe()
}]);

function replayAnimation(value) {

	window.animationObjects.forEach(x => {
		x.reset(); 
		if(value){
			x.playAnimation(0, true)
		}
	})
}

function setSelected(isSelected) {

	if(isSelected) {
		
		document.getElementsByTagName('body')[0].classList.add('selected')
		document.getElementsByTagName('body')[0].classList.remove('unselected')
		replayAnimation(true);
	}
	else {
		
		document.getElementsByTagName('body')[0].classList.remove('selected')
		document.getElementsByTagName('body')[0].classList.add('unselected')
		replayAnimation(false);
	}
}

function onAdWindowClicked() {

	document.getElementById('e_3').classList.add('clicked')
	
	if(!!window.Android) {
		
		setTimeout(()=> {
			Android.onAdWindowClickAnimationEnded()
		},500)
	}
	
}