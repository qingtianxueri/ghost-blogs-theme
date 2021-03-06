/*! This file is created by chenpeiqing */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var default_style = __webpack_require__(1);
	var app = __webpack_require__(2);
	var mapacheparameters = __webpack_require__(3);
	var mapacheRelated = __webpack_require__(4);
	var mapacheGodoShare = __webpack_require__(5);

	mapacheparameters = new mapacheparameters();
	mapacheGodoShare = new mapacheGodoShare(mapacheparameters.custom_share);
	mapacheRelated = new mapacheRelated(mapacheparameters.related, mapacheparameters.page_url);

	mapacheRelated.display();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	(function ($, undefined) {

	  window.defaultApp = window.defaultApp || {};

	  window.defaultApp = {

	  callFunc : [
	    function(module, exports, __webpack_require__) {
	        "use strict";

	        function _interopRequireDefault(obj) {
	            return obj && obj.__esModule ? obj : {
	                "default": obj
	            }
	        }
	        var _prism = __webpack_require__(6),
	            _jqueryGhostHunter = (_interopRequireDefault(_prism), __webpack_require__(5)),
	            _app = (_interopRequireDefault(_jqueryGhostHunter), __webpack_require__(4)),
	            _app2 = _interopRequireDefault(_app),
	            _app3 = __webpack_require__(3),
	            _app4 = _interopRequireDefault(_app3),
	            _app5 = __webpack_require__(1),
	            _appRelated = (_interopRequireDefault(_app5), __webpack_require__(2)),
	            _appRelated2 = _interopRequireDefault(_appRelated);
	        ! function() {
	            function videoPostFormat() {
	                $(".post-image").css("display", "none");
	                var video = $('iframe[src*="youtube.com"]')[0];
	                if ($gd_video.find(".video-featured").prepend(video), "undefined" != typeof youtube) {
	                    $gd_video.find(".video-content").removeAttr("style"), $.each(youtube, function(channelName, channelId) {
	                        $gd_video.find(".channel-name").html("Subscribe to <strong>" + channelName + "</strong>"), $(".g-ytsubscribe").attr("data-channelid", channelId)
	                    });
	                    var s = document.createElement("script");
	                    s.src = "https://apis.google.com/js/platform.js", document.body.appendChild(s)
	                }
	            }

	            function videoResponsive() {
	                $(".post-body").each(function() {
	                    var selectors = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]'],
	                        $allVideos = $(this).find(selectors.join(","));
	                    $allVideos.each(function() {
	                        $(this).wrap('<aside class="video-responsive"></aside>')
	                    })
	                })
	            }

	            function shareConter() {
	                if ($gd_share_count.length > 0) {
	                    var share_count = new _app4["default"]($gd_share_count);
	                    share_count.godoCount()
	                }
	            }

	            function socialBox(links) {
	                $.each(links, function(type, url) {
	                    if ("string" == typeof url && url_regexp.test(url)) {
	                        var template = '<a title="' + type + '" href="' + url + '" target="_blank" class="i-' + type + '"></a>';
	                        $gd_social_box.append(template)
	                    }
	                })
	            }

	            function disqusComments() {
	                if ("undefined" != typeof disqus_shortname) {
	                    $gd_comments.removeAttr("style");
	                    var d = document,
	                        s = d.createElement("script");
	                    s.src = "//" + disqus_shortname + ".disqus.com/embed.js", s.setAttribute("data-timestamp", +new Date), (d.head || d.body).appendChild(s)
	                }
	            }

	            function sidebarFixed() {
	                var mela = $gd_sidebar_fixed.offset().top;
	                $window.on("scroll", function() {
	                    var scrollTop = $window.scrollTop();
	                    scrollTop > mela - 78 ? $gd_sidebar_fixed.addClass("active") : $gd_sidebar_fixed.removeClass("active")
	                })
	            }
	            var $gd_header = $("#header"),
	                $gd_cover = $("#cover"),
	                $gd_search_input = $(".search-field"),
	                $gd_comments = $("#post-comments"),
	                $gd_related = $("#post-related"),
	                $gd_share_count = $(".share-count"),
	                $gd_video = $("#video-format"),
	                $gd_social_box = $(".social_box"),
	                $gd_sidebar_fixed = $("#sidebar").find(".fixed"),
	                $gd_scroll_top = $(".scroll_top"),
	                $gd_page_url = $("body").attr("mapache-page-url"),
	                url_regexp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \+\.-]*)*\/?$/,
	                $document = $(document),
	                $window = $(window);

	            $(".share").bind("click", function(e) {
	                e.preventDefault();
	                var share = new _app2["default"]($(this));
	                console.log(share);
	                share.godoShare()
	            });

	            $("#nav-mob-toggle").on("click", function(e) {
	                e.preventDefault(), $("body").toggleClass("is-showNavMob")
	            });

	            $("#search-mob-toggle").on("click", function(e) {
	                e.preventDefault(), $gd_header.toggleClass("is-showSearchMob"), $gd_search_input.focus()
	            });

	            if ("undefined" != typeof(title_home)) {
	                $("#title-home").html(title_home);
	            };

	            $gd_search_input.focus(function() {
	                $gd_header.addClass("is-showSearch"), $(".search-popout").removeClass("closed")
	            });

	            $gd_search_input.blur(function() {
	                setTimeout(function() {
	                    $gd_header.removeClass("is-showSearch"), $(".search-popout").addClass("closed")
	                }, 200)
	            });

	            $gd_search_input.keyup(function() {
	                $(".search-suggest-results").css("display", "block")
	            });

	            $gd_search_input.ghostHunter({
	                results: "#search-results",
	                zeroResultsInfo: !1,
	                displaySearchInfo: !1,
	                result_template: '<a href="' + $gd_page_url + '{{link}}">{{title}}</a>',
	                onKeyUp: !0
	            });

	            if ($gd_cover.length > 0) {
	                $window.on("scroll", function(){
	                    var scrollTop = $window.scrollTop(),
	                    gd_cover_height = $gd_cover.height() - $gd_header.height(),
	                    gd_cover_wrap = (gd_cover_height - scrollTop) / gd_cover_height;
	                    scrollTop >= gd_cover_height ? $gd_header.addClass("toolbar-shadow").removeAttr("style") : $gd_header.removeClass("toolbar-shadow").css({
	                        background: "transparent"
	                    }), $(".cover-wrap").css("opacity", gd_cover_wrap)
	                });
	            };

	            $(".scrolltop").on("click", function(e) {
	                e.preventDefault(), $("html, body").animate({
	                    scrollTop: $($(this).attr("href")).offset().top - 50
	                }, 500, "linear")
	            });

	            $window.on("scroll", function() {
	                $(this).scrollTop() > 100 ? $gd_scroll_top.addClass("visible") : $gd_scroll_top.removeClass("visible")
	            });

	            $gd_scroll_top.on("click", function(e) {
	                e.preventDefault(), $("html, body").animate({
	                    scrollTop: 0
	                }, 500)
	            });

	            $document.on("ready", function() {
	                if (shareConter(), "undefined" != typeof social_link && socialBox(social_link), $gd_comments.length > 0 && disqusComments(), "undefined" != typeof disqus_shortname && "undefined" != typeof disqusPublicKey && commentsCount(), $gd_video.length > 0 && videoPostFormat(), videoResponsive(), $gd_sidebar_fixed.length > 0 && sidebarFixed(), $gd_related.length > 0) {
	                    var related = new _appRelated2["default"]($gd_related, $gd_page_url);
	                    related.mapacheGet()
	                }
	                Prism.plugins.autoloader.languages_path = "../assets/js/prism-components/"
	            });
	        }()
	    },
	    function(module, exports) {},
	    function(module, exports) {},
	    function(module, exports) {
	        "use strict";

	        function _classCallCheck(instance, Constructor) {
	            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
	        }
	        var _createClass = function() {
	                function defineProperties(target, props) {
	                    for (var i = 0; i < props.length; i++) {
	                        var descriptor = props[i];
	                        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
	                    }
	                }
	                return function(Constructor, protoProps, staticProps) {
	                    return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
	                }
	            }(),
	            GodoShareCount = function() {
	                function GodoShareCount(elem) {
	                    _classCallCheck(this, GodoShareCount), this.elem = elem, this.url = elem.attr("godo-url"), this.total = 0
	                }
	                return _createClass(GodoShareCount, [{
	                    key: "convertNumber",
	                    value: function(n) {
	                        return n >= 1e9 ? (n / 1e9).toFixed(1) + "G" : n >= 1e6 ? (n / 1e6).toFixed(1) + "M" : n >= 1e3 ? (n / 1e3).toFixed(1) + "K" : n
	                    }
	                }, {
	                    key: "addCounter",
	                    value: function(n) {
	                        this.total = this.total + n
	                    }
	                }, {
	                    key: "updateCounter",
	                    value: function() {
	                        this.elem.html("" + this.convertNumber(this.total))
	                    }
	                }, {
	                    key: "godoCount",
	                    value: function() {
	                        var _this = this;
	                        $.getJSON("https://graph.facebook.com/?id=" + encodeURIComponent(this.url) + "&callback=?", function(response) {
	                            void 0 !== response.share && (_this.addCounter(response.share.share_count), _this.updateCounter())
	                        })
	                    }
	                }]), GodoShareCount
	            }();
	        module.exports = GodoShareCount
	    },
	    function(module, exports) {},
	    function(module, exports) {
	        "use strict";
	        ! function($) {
	            var lunr = function lunr(t) {
	                var e = new lunr.Index;
	                return e.pipeline.add(lunr.stopWordFilter, lunr.stemmer), t && t.call(e, e), e
	            };
	            lunr.version = "0.4.3", "undefined" != typeof module && (module.exports = lunr), lunr.utils = {}, lunr.utils.warn = function(t) {
	                return function(e) {
	                    t.console && console.warn && console.warn(e)
	                }
	            }(this), lunr.utils.zeroFillArray = function() {
	                var t = [0];
	                return function(e) {
	                    for (; e > t.length;) t = t.concat(t);
	                    return t.slice(0, e)
	                }
	            }(), lunr.EventEmitter = function() {
	                this.events = {}
	            }, lunr.EventEmitter.prototype.addListener = function() {
	                var t = Array.prototype.slice.call(arguments),
	                    e = t.pop(),
	                    n = t;
	                if ("function" != typeof e) throw new TypeError("last argument must be a function");
	                n.forEach(function(t) {
	                    this.hasHandler(t) || (this.events[t] = []), this.events[t].push(e)
	                }, this)
	            }, lunr.EventEmitter.prototype.removeListener = function(t, e) {
	                if (this.hasHandler(t)) {
	                    var n = this.events[t].indexOf(e);
	                    this.events[t].splice(n, 1), this.events[t].length || delete this.events[t]
	                }
	            }, lunr.EventEmitter.prototype.emit = function(t) {
	                if (this.hasHandler(t)) {
	                    var e = Array.prototype.slice.call(arguments, 1);
	                    this.events[t].forEach(function(t) {
	                        t.apply(void 0, e)
	                    })
	                }
	            }, lunr.EventEmitter.prototype.hasHandler = function(t) {
	                return t in this.events
	            }, lunr.tokenizer = function(t) {
	                if (!arguments.length || null == t || void 0 == t) return [];
	                if (Array.isArray(t)) return t.map(function(t) {
	                    return t.toLowerCase()
	                });
	                for (var e = ("" + t).replace(/^\s+/, ""), n = e.length - 1; n >= 0; n--)
	                    if (/\S/.test(e.charAt(n))) {
	                        e = e.substring(0, n + 1);
	                        break
	                    }
	                return e.split(/\s+/).map(function(t) {
	                    return t.replace(/^\W+/, "").replace(/\W+$/, "").toLowerCase()
	                })
	            }, lunr.Pipeline = function() {
	                this._stack = []
	            }, lunr.Pipeline.registeredFunctions = {}, lunr.Pipeline.registerFunction = function(t, e) {
	                e in this.registeredFunctions && lunr.utils.warn("Overwriting existing registered function: " + e), t.label = e, lunr.Pipeline.registeredFunctions[t.label] = t
	            }, lunr.Pipeline.warnIfFunctionNotRegistered = function(t) {
	                var e = t.label && t.label in this.registeredFunctions;
	                e || lunr.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", t)
	            }, lunr.Pipeline.load = function(t) {
	                var e = new lunr.Pipeline;
	                return t.forEach(function(t) {
	                    var n = lunr.Pipeline.registeredFunctions[t];
	                    if (!n) throw Error("Cannot load un-registered function: " + t);
	                    e.add(n)
	                }), e
	            }, lunr.Pipeline.prototype.add = function() {
	                var t = Array.prototype.slice.call(arguments);
	                t.forEach(function(t) {
	                    lunr.Pipeline.warnIfFunctionNotRegistered(t), this._stack.push(t)
	                }, this)
	            }, lunr.Pipeline.prototype.after = function(t, e) {
	                lunr.Pipeline.warnIfFunctionNotRegistered(e);
	                var n = this._stack.indexOf(t) + 1;
	                this._stack.splice(n, 0, e)
	            }, lunr.Pipeline.prototype.before = function(t, e) {
	                lunr.Pipeline.warnIfFunctionNotRegistered(e);
	                var n = this._stack.indexOf(t);
	                this._stack.splice(n, 0, e)
	            }, lunr.Pipeline.prototype.remove = function(t) {
	                var e = this._stack.indexOf(t);
	                this._stack.splice(e, 1)
	            }, lunr.Pipeline.prototype.run = function(t) {
	                for (var e = [], n = t.length, r = this._stack.length, o = 0; n > o; o++) {
	                    for (var i = t[o], s = 0; r > s && (i = this._stack[s](i, o, t), void 0 !== i); s++);
	                    void 0 !== i && e.push(i)
	                }
	                return e
	            }, lunr.Pipeline.prototype.toJSON = function() {
	                return this._stack.map(function(t) {
	                    return lunr.Pipeline.warnIfFunctionNotRegistered(t), t.label
	                })
	            }, lunr.Vector = function(t) {
	                this.elements = t
	            }, lunr.Vector.prototype.magnitude = function() {
	                if (this._magnitude) return this._magnitude;
	                for (var t, e = 0, n = this.elements, r = n.length, o = 0; r > o; o++) t = n[o], e += t * t;
	                return this._magnitude = Math.sqrt(e)
	            }, lunr.Vector.prototype.dot = function(t) {
	                for (var e = this.elements, n = t.elements, r = e.length, o = 0, i = 0; r > i; i++) o += e[i] * n[i];
	                return o
	            }, lunr.Vector.prototype.similarity = function(t) {
	                return this.dot(t) / (this.magnitude() * t.magnitude())
	            }, lunr.Vector.prototype.toArray = function() {
	                return this.elements
	            }, lunr.SortedSet = function() {
	                this.length = 0, this.elements = []
	            }, lunr.SortedSet.load = function(t) {
	                var e = new this;
	                return e.elements = t, e.length = t.length, e
	            }, lunr.SortedSet.prototype.add = function() {
	                Array.prototype.slice.call(arguments).forEach(function(t) {
	                    ~this.indexOf(t) || this.elements.splice(this.locationFor(t), 0, t)
	                }, this), this.length = this.elements.length
	            }, lunr.SortedSet.prototype.toArray = function() {
	                return this.elements.slice()
	            }, lunr.SortedSet.prototype.map = function(t, e) {
	                return this.elements.map(t, e)
	            }, lunr.SortedSet.prototype.forEach = function(t, e) {
	                return this.elements.forEach(t, e)
	            }, lunr.SortedSet.prototype.indexOf = function(t, e, n) {
	                var e = e || 0,
	                    n = n || this.elements.length,
	                    r = n - e,
	                    o = e + Math.floor(r / 2),
	                    i = this.elements[o];
	                return 1 >= r ? i === t ? o : -1 : t > i ? this.indexOf(t, o, n) : i > t ? this.indexOf(t, e, o) : i === t ? o : void 0
	            }, lunr.SortedSet.prototype.locationFor = function(t, e, n) {
	                var e = e || 0,
	                    n = n || this.elements.length,
	                    r = n - e,
	                    o = e + Math.floor(r / 2),
	                    i = this.elements[o];
	                if (1 >= r) {
	                    if (i > t) return o;
	                    if (t > i) return o + 1
	                }
	                return t > i ? this.locationFor(t, o, n) : i > t ? this.locationFor(t, e, o) : void 0
	            }, lunr.SortedSet.prototype.intersect = function(t) {
	                for (var e = new lunr.SortedSet, n = 0, r = 0, o = this.length, i = t.length, s = this.elements, l = t.elements; !(n > o - 1 || r > i - 1);) s[n] !== l[r] ? s[n] < l[r] ? n++ : s[n] > l[r] && r++ : (e.add(s[n]), n++, r++);
	                return e
	            }, lunr.SortedSet.prototype.clone = function() {
	                var t = new lunr.SortedSet;
	                return t.elements = this.toArray(), t.length = t.elements.length, t
	            }, lunr.SortedSet.prototype.union = function(t) {
	                var e, n, r;
	                return this.length >= t.length ? (e = this, n = t) : (e = t, n = this), r = e.clone(), r.add.apply(r, n.toArray()), r
	            }, lunr.SortedSet.prototype.toJSON = function() {
	                return this.toArray()
	            }, lunr.Index = function() {
	                this._fields = [], this._ref = "id", this.pipeline = new lunr.Pipeline, this.documentStore = new lunr.Store, this.tokenStore = new lunr.TokenStore, this.corpusTokens = new lunr.SortedSet, this.eventEmitter = new lunr.EventEmitter, this._idfCache = {}, this.on("add", "remove", "update", function() {
	                    this._idfCache = {}
	                }.bind(this))
	            }, lunr.Index.prototype.on = function() {
	                var t = Array.prototype.slice.call(arguments);
	                return this.eventEmitter.addListener.apply(this.eventEmitter, t)
	            }, lunr.Index.prototype.off = function(t, e) {
	                return this.eventEmitter.removeListener(t, e)
	            }, lunr.Index.load = function(t) {
	                t.version !== lunr.version && lunr.utils.warn("version mismatch: current " + lunr.version + " importing " + t.version);
	                var e = new this;
	                return e._fields = t.fields, e._ref = t.ref, e.documentStore = lunr.Store.load(t.documentStore), e.tokenStore = lunr.TokenStore.load(t.tokenStore), e.corpusTokens = lunr.SortedSet.load(t.corpusTokens), e.pipeline = lunr.Pipeline.load(t.pipeline), e
	            }, lunr.Index.prototype.field = function(t, e) {
	                var e = e || {},
	                    n = {
	                        name: t,
	                        boost: e.boost || 1
	                    };
	                return this._fields.push(n), this
	            }, lunr.Index.prototype.ref = function(t) {
	                return this._ref = t, this
	            }, lunr.Index.prototype.add = function(t, e) {
	                var n = {},
	                    r = new lunr.SortedSet,
	                    o = t[this._ref],
	                    e = void 0 === e || e;
	                this._fields.forEach(function(e) {
	                    var o = this.pipeline.run(lunr.tokenizer(t[e.name]));
	                    n[e.name] = o, lunr.SortedSet.prototype.add.apply(r, o)
	                }, this), this.documentStore.set(o, r), lunr.SortedSet.prototype.add.apply(this.corpusTokens, r.toArray());
	                for (var i = 0; r.length > i; i++) {
	                    var s = r.elements[i],
	                        l = this._fields.reduce(function(t, e) {
	                            var r = n[e.name].length;
	                            if (!r) return t;
	                            var o = n[e.name].filter(function(t) {
	                                return t === s
	                            }).length;
	                            return t + o / r * e.boost
	                        }, 0);
	                    this.tokenStore.add(s, {
	                        ref: o,
	                        tf: l
	                    })
	                }
	                e && this.eventEmitter.emit("add", t, this)
	            }, lunr.Index.prototype.remove = function(t, e) {
	                var n = t[this._ref],
	                    e = void 0 === e || e;
	                if (this.documentStore.has(n)) {
	                    var r = this.documentStore.get(n);
	                    this.documentStore.remove(n), r.forEach(function(t) {
	                        this.tokenStore.remove(t, n)
	                    }, this), e && this.eventEmitter.emit("remove", t, this)
	                }
	            }, lunr.Index.prototype.update = function(t, e) {
	                var e = void 0 === e || e;
	                this.remove(t, !1), this.add(t, !1), e && this.eventEmitter.emit("update", t, this)
	            }, lunr.Index.prototype.idf = function(t) {
	                if (this._idfCache[t]) return this._idfCache[t];
	                var e = this.tokenStore.count(t),
	                    n = 1;
	                return e > 0 && (n = 1 + Math.log(this.tokenStore.length / e)), this._idfCache[t] = n
	            }, lunr.Index.prototype.search = function(t) {
	                var e = this.pipeline.run(lunr.tokenizer(t)),
	                    n = lunr.utils.zeroFillArray(this.corpusTokens.length),
	                    r = [],
	                    o = this._fields.reduce(function(t, e) {
	                        return t + e.boost
	                    }, 0),
	                    i = e.some(function(t) {
	                        return this.tokenStore.has(t)
	                    }, this);
	                if (!i) return [];
	                e.forEach(function(t, e, i) {
	                    var s = 1 / i.length * this._fields.length * o,
	                        l = this,
	                        u = this.tokenStore.expand(t).reduce(function(e, r) {
	                            var o = l.corpusTokens.indexOf(r),
	                                i = l.idf(r),
	                                u = 1,
	                                a = new lunr.SortedSet;
	                            if (r !== t) {
	                                var h = Math.max(3, r.length - t.length);
	                                u = 1 / Math.log(h)
	                            }
	                            return o > -1 && (n[o] = s * i * u), Object.keys(l.tokenStore.get(r)).forEach(function(t) {
	                                a.add(t)
	                            }), e.union(a)
	                        }, new lunr.SortedSet);
	                    r.push(u)
	                }, this);
	                var s = r.reduce(function(t, e) {
	                        return t.intersect(e)
	                    }),
	                    l = new lunr.Vector(n);
	                return s.map(function(t) {
	                    return {
	                        ref: t,
	                        score: l.similarity(this.documentVector(t))
	                    }
	                }, this).sort(function(t, e) {
	                    return e.score - t.score
	                })
	            }, lunr.Index.prototype.documentVector = function(t) {
	                for (var e = this.documentStore.get(t), n = e.length, r = lunr.utils.zeroFillArray(this.corpusTokens.length), o = 0; n > o; o++) {
	                    var i = e.elements[o],
	                        s = this.tokenStore.get(i)[t].tf,
	                        l = this.idf(i);
	                    r[this.corpusTokens.indexOf(i)] = s * l
	                }
	                return new lunr.Vector(r)
	            }, lunr.Index.prototype.toJSON = function() {
	                return {
	                    version: lunr.version,
	                    fields: this._fields,
	                    ref: this._ref,
	                    documentStore: this.documentStore.toJSON(),
	                    tokenStore: this.tokenStore.toJSON(),
	                    corpusTokens: this.corpusTokens.toJSON(),
	                    pipeline: this.pipeline.toJSON()
	                }
	            }, lunr.Store = function() {
	                this.store = {}, this.length = 0
	            }, lunr.Store.load = function(t) {
	                var e = new this;
	                return e.length = t.length, e.store = Object.keys(t.store).reduce(function(e, n) {
	                    return e[n] = lunr.SortedSet.load(t.store[n]), e
	                }, {}), e
	            }, lunr.Store.prototype.set = function(t, e) {
	                this.store[t] = e, this.length = Object.keys(this.store).length
	            }, lunr.Store.prototype.get = function(t) {
	                return this.store[t]
	            }, lunr.Store.prototype.has = function(t) {
	                return t in this.store
	            }, lunr.Store.prototype.remove = function(t) {
	                this.has(t) && (delete this.store[t], this.length--)
	            }, lunr.Store.prototype.toJSON = function() {
	                return {
	                    store: this.store,
	                    length: this.length
	                }
	            }, lunr.stemmer = function() {
	                var t = {
	                        ational: "ate",
	                        tional: "tion",
	                        enci: "ence",
	                        anci: "ance",
	                        izer: "ize",
	                        bli: "ble",
	                        alli: "al",
	                        entli: "ent",
	                        eli: "e",
	                        ousli: "ous",
	                        ization: "ize",
	                        ation: "ate",
	                        ator: "ate",
	                        alism: "al",
	                        iveness: "ive",
	                        fulness: "ful",
	                        ousness: "ous",
	                        aliti: "al",
	                        iviti: "ive",
	                        biliti: "ble",
	                        logi: "log"
	                    },
	                    e = {
	                        icate: "ic",
	                        ative: "",
	                        alize: "al",
	                        iciti: "ic",
	                        ical: "ic",
	                        ful: "",
	                        ness: ""
	                    },
	                    n = "[^aeiou]",
	                    r = "[aeiouy]",
	                    o = n + "[^aeiouy]*",
	                    i = r + "[aeiou]*",
	                    s = "^(" + o + ")?" + i + o,
	                    l = "^(" + o + ")?" + i + o + "(" + i + ")?$",
	                    u = "^(" + o + ")?" + i + o + i + o,
	                    a = "^(" + o + ")?" + r;
	                return function(n) {
	                    var i, h, c, p, f, d, v;
	                    if (3 > n.length) return n;
	                    if (c = n.substr(0, 1), "y" == c && (n = c.toUpperCase() + n.substr(1)), p = /^(.+?)(ss|i)es$/, f = /^(.+?)([^s])s$/, p.test(n) ? n = n.replace(p, "$1$2") : f.test(n) && (n = n.replace(f, "$1$2")), p = /^(.+?)eed$/, f = /^(.+?)(ed|ing)$/, p.test(n)) {
	                        var m = p.exec(n);
	                        p = RegExp(s), p.test(m[1]) && (p = /.$/, n = n.replace(p, ""))
	                    } else if (f.test(n)) {
	                        var m = f.exec(n);
	                        i = m[1], f = RegExp(a), f.test(i) && (n = i, f = /(at|bl|iz)$/, d = RegExp("([^aeiouylsz])\\1$"), v = RegExp("^" + o + r + "[^aeiouwxy]$"), f.test(n) ? n += "e" : d.test(n) ? (p = /.$/, n = n.replace(p, "")) : v.test(n) && (n += "e"))
	                    }
	                    if (p = /^(.+?)y$/, p.test(n)) {
	                        var m = p.exec(n);
	                        i = m[1], p = RegExp(a), p.test(i) && (n = i + "i")
	                    }
	                    if (p = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/, p.test(n)) {
	                        var m = p.exec(n);
	                        i = m[1], h = m[2], p = RegExp(s), p.test(i) && (n = i + t[h])
	                    }
	                    if (p = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/, p.test(n)) {
	                        var m = p.exec(n);
	                        i = m[1], h = m[2], p = RegExp(s), p.test(i) && (n = i + e[h])
	                    }
	                    if (p = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/, f = /^(.+?)(s|t)(ion)$/, p.test(n)) {
	                        var m = p.exec(n);
	                        i = m[1], p = RegExp(u), p.test(i) && (n = i)
	                    } else if (f.test(n)) {
	                        var m = f.exec(n);
	                        i = m[1] + m[2], f = RegExp(u), f.test(i) && (n = i)
	                    }
	                    if (p = /^(.+?)e$/, p.test(n)) {
	                        var m = p.exec(n);
	                        i = m[1], p = RegExp(u), f = RegExp(l), d = RegExp("^" + o + r + "[^aeiouwxy]$"), (p.test(i) || f.test(i) && !d.test(i)) && (n = i)
	                    }
	                    return p = /ll$/, f = RegExp(u), p.test(n) && f.test(n) && (p = /.$/, n = n.replace(p, "")), "y" == c && (n = c.toLowerCase() + n.substr(1)), n
	                }
	            }(), lunr.Pipeline.registerFunction(lunr.stemmer, "stemmer"), lunr.stopWordFilter = function(t) {
	                return -1 === lunr.stopWordFilter.stopWords.indexOf(t) ? t : void 0
	            }, lunr.stopWordFilter.stopWords = new lunr.SortedSet, lunr.stopWordFilter.stopWords.length = 119, lunr.stopWordFilter.stopWords.elements = ["", "a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"], lunr.Pipeline.registerFunction(lunr.stopWordFilter, "stopWordFilter"), lunr.TokenStore = function() {
	                this.root = {
	                    docs: {}
	                }, this.length = 0
	            }, lunr.TokenStore.load = function(t) {
	                var e = new this;
	                return e.root = t.root, e.length = t.length, e
	            }, lunr.TokenStore.prototype.add = function(t, e, n) {
	                var n = n || this.root,
	                    r = t[0],
	                    o = t.slice(1);
	                return r in n || (n[r] = {
	                    docs: {}
	                }), 0 === o.length ? (n[r].docs[e.ref] = e, void(this.length += 1)) : this.add(o, e, n[r])
	            }, lunr.TokenStore.prototype.has = function(t) {
	                if (!t) return !1;
	                for (var e = this.root, n = 0; t.length > n; n++) {
	                    if (!e[t[n]]) return !1;
	                    e = e[t[n]]
	                }
	                return !0
	            }, lunr.TokenStore.prototype.getNode = function(t) {
	                if (!t) return {};
	                for (var e = this.root, n = 0; t.length > n; n++) {
	                    if (!e[t[n]]) return {};
	                    e = e[t[n]]
	                }
	                return e
	            }, lunr.TokenStore.prototype.get = function(t, e) {
	                return this.getNode(t, e).docs || {}
	            }, lunr.TokenStore.prototype.count = function(t, e) {
	                return Object.keys(this.get(t, e)).length
	            }, lunr.TokenStore.prototype.remove = function(t, e) {
	                if (t) {
	                    for (var n = this.root, r = 0; t.length > r; r++) {
	                        if (!(t[r] in n)) return;
	                        n = n[t[r]]
	                    }
	                    delete n.docs[e]
	                }
	            }, lunr.TokenStore.prototype.expand = function(t, e) {
	                var n = this.getNode(t),
	                    r = n.docs || {},
	                    e = e || [];
	                return Object.keys(r).length && e.push(t), Object.keys(n).forEach(function(n) {
	                    "docs" !== n && e.concat(this.expand(t + n, e))
	                }, this), e
	            }, lunr.TokenStore.prototype.toJSON = function() {
	                return {
	                    root: this.root,
	                    length: this.length
	                }
	            }, $.fn.ghostHunter = function(options) {
	                var opts = $.extend({}, $.fn.ghostHunter.defaults, options);
	                if (opts.results) return pluginMethods.init(this, opts), pluginMethods
	            }, $.fn.ghostHunter.defaults = {
	                results: !1,
	                onKeyUp: !1,
	                result_template: "<a href='{{link}}'><p><h2>{{title}}</h2><h4>{{prettyPubDate}}</h4></p></a>",
	                info_template: "<p>Number of posts found: {{amount}}</p>",
	                displaySearchInfo: !0,
	                zeroResultsInfo: !0,
	                before: !1,
	                onComplete: !1
	            };
	            var prettyDate = function(date) {
	                    var d = new Date(date),
	                        monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	                    return d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear()
	                },
	                pluginMethods = {
	                    isInit: !1,
	                    init: function(target, opts) {
	                        var that = this;
	                        this.target = target, this.results = opts.results, this.blogData = {}, this.result_template = opts.result_template, this.info_template = opts.info_template, this.zeroResultsInfo = opts.zeroResultsInfo, this.displaySearchInfo = opts.displaySearchInfo, this.before = opts.before, this.onComplete = opts.onComplete, this.index = lunr(function() {
	                            this.field("title", {
	                                boost: 10
	                            }), this.field("description"), this.field("link"), this.field("markdown", {
	                                boost: 5
	                            }), this.field("pubDate"), this.field("tag"), this.ref("id")
	                        }), target.focus(function() {
	                            that.loadAPI()
	                        }), target.closest("form").submit(function(e) {
	                            e.preventDefault(), that.find(target.val())
	                        }), opts.onKeyUp && (that.loadAPI(), target.keyup(function() {
	                            that.find(target.val())
	                        }))
	                    },
	                    loadAPI: function() {
	                        var index = this.index,
	                            blogData = this.blogData;
	                        $.get(ghost.url.api("posts", {
	                            limit: "all",
	                            include: "tags"
	                        })).done(function(data) {
	                            var searchData = data.posts;
	                            searchData.forEach(function(arrayItem) {
	                                var tag_arr = arrayItem.tags.map(function(v) {
	                                        return v.name
	                                    }),
	                                    category = tag_arr.join(", ");
	                                category.length < 1 && (category = "undefined");
	                                var parsedData = {
	                                    id: String(arrayItem.id),
	                                    title: String(arrayItem.title),
	                                    description: String(arrayItem.meta_description),
	                                    markdown: String(arrayItem.markdown),
	                                    pubDate: String(arrayItem.created_at),
	                                    tag: category,
	                                    link: String(arrayItem.url)
	                                };
	                                parsedData.prettyPubDate = prettyDate(parsedData.pubDate);
	                                var tempdate = prettyDate(parsedData.pubDate);
	                                index.add(parsedData), blogData[arrayItem.id] = {
	                                    title: arrayItem.title,
	                                    description: arrayItem.meta_description,
	                                    pubDate: tempdate,
	                                    link: arrayItem.url
	                                }
	                            })
	                        }), this.isInit = !0
	                    },
	                    find: function(value) {
	                        var searchResult = this.index.search(value),
	                            results = $(this.results),
	                            resultsData = [];
	                        results.empty(), this.before && this.before(), (this.zeroResultsInfo || searchResult.length > 0) && this.displaySearchInfo && results.append(this.format(this.info_template, {
	                            amount: searchResult.length
	                        }));
	                        for (var i = 0; i < searchResult.length; i++) {
	                            var lunrref = searchResult[i].ref,
	                                postData = this.blogData[lunrref];
	                            results.append(this.format(this.result_template, postData)), resultsData.push(postData)
	                        }
	                        this.onComplete && this.onComplete(resultsData)
	                    },
	                    clear: function() {
	                        $(this.results).empty(), this.target.val("")
	                    },
	                    format: function(t, d) {
	                        return t.replace(/{{([^{}]*)}}/g, function(a, b) {
	                            var r = d[b];
	                            return "string" == typeof r || "number" == typeof r ? r : a
	                        })
	                    }
	                }
	        }(jQuery)
	    },
	    function(module, exports) {
	        (function(global) {
	            "use strict";
	            var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
	                Prism = function() {
	                    var e = /\blang(?:uage)?-(\w+)\b/i,
	                        t = 0,
	                        n = _self.Prism = {
	                            util: {
	                                encode: function(e) {
	                                    return e instanceof a ? new a(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
	                                },
	                                type: function(e) {
	                                    return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
	                                },
	                                objId: function(e) {
	                                    return e.__id || Object.defineProperty(e, "__id", {
	                                        value: ++t
	                                    }), e.__id
	                                },
	                                clone: function(e) {
	                                    var t = n.util.type(e);
	                                    switch (t) {
	                                        case "Object":
	                                            var a = {};
	                                            for (var r in e) e.hasOwnProperty(r) && (a[r] = n.util.clone(e[r]));
	                                            return a;
	                                        case "Array":
	                                            return e.map && e.map(function(e) {
	                                                return n.util.clone(e)
	                                            })
	                                    }
	                                    return e
	                                }
	                            },
	                            languages: {
	                                extend: function(e, t) {
	                                    var a = n.util.clone(n.languages[e]);
	                                    for (var r in t) a[r] = t[r];
	                                    return a
	                                },
	                                insertBefore: function(e, t, a, r) {
	                                    r = r || n.languages;
	                                    var i = r[e];
	                                    if (2 == arguments.length) {
	                                        a = arguments[1];
	                                        for (var l in a) a.hasOwnProperty(l) && (i[l] = a[l]);
	                                        return i
	                                    }
	                                    var o = {};
	                                    for (var s in i)
	                                        if (i.hasOwnProperty(s)) {
	                                            if (s == t)
	                                                for (var l in a) a.hasOwnProperty(l) && (o[l] = a[l]);
	                                            o[s] = i[s]
	                                        }
	                                    return n.languages.DFS(n.languages, function(t, n) {
	                                        n === r[e] && t != e && (this[t] = o)
	                                    }), r[e] = o
	                                },
	                                DFS: function(e, t, a, r) {
	                                    r = r || {};
	                                    for (var i in e) e.hasOwnProperty(i) && (t.call(e, i, e[i], a || i), "Object" !== n.util.type(e[i]) || r[n.util.objId(e[i])] ? "Array" !== n.util.type(e[i]) || r[n.util.objId(e[i])] || (r[n.util.objId(e[i])] = !0, n.languages.DFS(e[i], t, i, r)) : (r[n.util.objId(e[i])] = !0, n.languages.DFS(e[i], t, null, r)))
	                                }
	                            },
	                            plugins: {},
	                            highlightAll: function(e, t) {
	                                var a = {
	                                    callback: t,
	                                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
	                                };
	                                n.hooks.run("before-highlightall", a);
	                                for (var r, i = a.elements || document.querySelectorAll(a.selector), l = 0; r = i[l++];) n.highlightElement(r, e === !0, a.callback)
	                            },
	                            highlightElement: function(t, a, r) {
	                                for (var i, l, o = t; o && !e.test(o.className);) o = o.parentNode;
	                                o && (i = (o.className.match(e) || [, ""])[1].toLowerCase(), l = n.languages[i]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + i, o = t.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + i);
	                                var s = t.textContent,
	                                    u = {
	                                        element: t,
	                                        language: i,
	                                        grammar: l,
	                                        code: s
	                                    };
	                                if (n.hooks.run("before-sanity-check", u), !u.code || !u.grammar) return void n.hooks.run("complete", u);
	                                if (n.hooks.run("before-highlight", u), a && _self.Worker) {
	                                    var c = new Worker(n.filename);
	                                    c.onmessage = function(e) {
	                                        u.highlightedCode = e.data, n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r && r.call(u.element), n.hooks.run("after-highlight", u), n.hooks.run("complete", u)
	                                    }, c.postMessage(JSON.stringify({
	                                        language: u.language,
	                                        code: u.code,
	                                        immediateClose: !0
	                                    }))
	                                } else u.highlightedCode = n.highlight(u.code, u.grammar, u.language), n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r && r.call(t), n.hooks.run("after-highlight", u), n.hooks.run("complete", u)
	                            },
	                            highlight: function(e, t, r) {
	                                var i = n.tokenize(e, t);
	                                return a.stringify(n.util.encode(i), r)
	                            },
	                            tokenize: function(e, t) {
	                                var a = n.Token,
	                                    r = [e],
	                                    i = t.rest;
	                                if (i) {
	                                    for (var l in i) t[l] = i[l];
	                                    delete t.rest
	                                }
	                                e: for (var l in t)
	                                    if (t.hasOwnProperty(l) && t[l]) {
	                                        var o = t[l];
	                                        o = "Array" === n.util.type(o) ? o : [o];
	                                        for (var s = 0; s < o.length; ++s) {
	                                            var u = o[s],
	                                                c = u.inside,
	                                                g = !!u.lookbehind,
	                                                h = !!u.greedy,
	                                                f = 0,
	                                                d = u.alias;
	                                            if (h && !u.pattern.global) {
	                                                var p = u.pattern.toString().match(/[imuy]*$/)[0];
	                                                u.pattern = RegExp(u.pattern.source, p + "g")
	                                            }
	                                            u = u.pattern || u;
	                                            for (var m = 0, y = 0; m < r.length; y += (r[m].matchedStr || r[m]).length, ++m) {
	                                                var v = r[m];
	                                                if (r.length > e.length) break e;
	                                                if (!(v instanceof a)) {
	                                                    u.lastIndex = 0;
	                                                    var b = u.exec(v),
	                                                        k = 1;
	                                                    if (!b && h && m != r.length - 1) {
	                                                        if (u.lastIndex = y, b = u.exec(e), !b) break;
	                                                        for (var w = b.index + (g ? b[1].length : 0), _ = b.index + b[0].length, A = m, S = y, P = r.length; P > A && _ > S; ++A) S += (r[A].matchedStr || r[A]).length, w >= S && (++m, y = S);
	                                                        if (r[m] instanceof a || r[A - 1].greedy) continue;
	                                                        k = A - m, v = e.slice(y, S), b.index -= y
	                                                    }
	                                                    if (b) {
	                                                        g && (f = b[1].length);
	                                                        var w = b.index + f,
	                                                            b = b[0].slice(f),
	                                                            _ = w + b.length,
	                                                            x = v.slice(0, w),
	                                                            O = v.slice(_),
	                                                            j = [m, k];
	                                                        x && j.push(x);
	                                                        var N = new a(l, c ? n.tokenize(b, c) : b, d, b, h);
	                                                        j.push(N), O && j.push(O), Array.prototype.splice.apply(r, j)
	                                                    }
	                                                }
	                                            }
	                                        }
	                                    }
	                                return r
	                            },
	                            hooks: {
	                                all: {},
	                                add: function(e, t) {
	                                    var a = n.hooks.all;
	                                    a[e] = a[e] || [], a[e].push(t)
	                                },
	                                run: function(e, t) {
	                                    var a = n.hooks.all[e];
	                                    if (a && a.length)
	                                        for (var r, i = 0; r = a[i++];) r(t)
	                                }
	                            }
	                        },
	                        a = n.Token = function(e, t, n, a, r) {
	                            this.type = e, this.content = t, this.alias = n, this.matchedStr = a || null, this.greedy = !!r
	                        };
	                    if (a.stringify = function(e, t, r) {
	                            if ("string" == typeof e) return e;
	                            if ("Array" === n.util.type(e)) return e.map(function(n) {
	                                return a.stringify(n, t, e)
	                            }).join("");
	                            var i = {
	                                type: e.type,
	                                content: a.stringify(e.content, t, r),
	                                tag: "span",
	                                classes: ["token", e.type],
	                                attributes: {},
	                                language: t,
	                                parent: r
	                            };
	                            if ("comment" == i.type && (i.attributes.spellcheck = "true"), e.alias) {
	                                var l = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
	                                Array.prototype.push.apply(i.classes, l)
	                            }
	                            n.hooks.run("wrap", i);
	                            var o = "";
	                            for (var s in i.attributes) o += (o ? " " : "") + s + '="' + (i.attributes[s] || "") + '"';
	                            return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + i.content + "</" + i.tag + ">"
	                        }, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function(e) {
	                        var t = JSON.parse(e.data),
	                            a = t.language,
	                            r = t.code,
	                            i = t.immediateClose;
	                        _self.postMessage(n.highlight(r, n.languages[a], a)), i && _self.close()
	                    }, !1), _self.Prism) : _self.Prism;
	                    var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
	                    return r && (n.filename = r.src, document.addEventListener && !r.hasAttribute("data-manual") && ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism
	                }();
	            "undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
	                comment: /<!--[\w\W]*?-->/,
	                prolog: /<\?[\w\W]+?\?>/,
	                doctype: /<!DOCTYPE[\w\W]+?>/i,
	                cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
	                tag: {
	                    pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
	                    inside: {
	                        tag: {
	                            pattern: /^<\/?[^\s>\/]+/i,
	                            inside: {
	                                punctuation: /^<\/?/,
	                                namespace: /^[^\s>\/:]+:/
	                            }
	                        },
	                        "attr-value": {
	                            pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
	                            inside: {
	                                punctuation: /[=>"']/
	                            }
	                        },
	                        punctuation: /\/?>/,
	                        "attr-name": {
	                            pattern: /[^\s>\/]+/,
	                            inside: {
	                                namespace: /^[^\s>\/:]+:/
	                            }
	                        }
	                    }
	                },
	                entity: /&#?[\da-z]{1,8};/i
	            }, Prism.hooks.add("wrap", function(a) {
	                "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
	            }), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
	                comment: /\/\*[\w\W]*?\*\//,
	                atrule: {
	                    pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
	                    inside: {
	                        rule: /@[\w-]+/
	                    }
	                },
	                url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	                selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
	                string: {
	                    pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
	                    greedy: !0
	                },
	                property: /(\b|\B)[\w-]+(?=\s*:)/i,
	                important: /\B!important\b/i,
	                "function": /[-a-z0-9]+(?=\()/i,
	                punctuation: /[(){};:]/
	            }, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
	                style: {
	                    pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
	                    lookbehind: !0,
	                    inside: Prism.languages.css,
	                    alias: "language-css"
	                }
	            }), Prism.languages.insertBefore("inside", "attr-value", {
	                "style-attr": {
	                    pattern: /\s*style=("|').*?\1/i,
	                    inside: {
	                        "attr-name": {
	                            pattern: /^\s*style/i,
	                            inside: Prism.languages.markup.tag.inside
	                        },
	                        punctuation: /^\s*=\s*['"]|['"]\s*$/,
	                        "attr-value": {
	                            pattern: /.+/i,
	                            inside: Prism.languages.css
	                        }
	                    },
	                    alias: "language-css"
	                }
	            }, Prism.languages.markup.tag)), Prism.languages.clike = {
	                comment: [{
	                    pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
	                    lookbehind: !0
	                }, {
	                    pattern: /(^|[^\\:])\/\/.*/,
	                    lookbehind: !0
	                }],
	                string: {
	                    pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
	                    greedy: !0
	                },
	                "class-name": {
	                    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
	                    lookbehind: !0,
	                    inside: {
	                        punctuation: /(\.|\\)/
	                    }
	                },
	                keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	                "boolean": /\b(true|false)\b/,
	                "function": /[a-z0-9_]+(?=\()/i,
	                number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
	                operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	                punctuation: /[{}[\];(),.:]/
	            }, Prism.languages.javascript = Prism.languages.extend("clike", {
	                keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	                number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
	                "function": /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
	                operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
	            }), Prism.languages.insertBefore("javascript", "keyword", {
	                regex: {
	                    pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
	                    lookbehind: !0,
	                    greedy: !0
	                }
	            }), Prism.languages.insertBefore("javascript", "string", {
	                "template-string": {
	                    pattern: /`(?:\\\\|\\?[^\\])*?`/,
	                    greedy: !0,
	                    inside: {
	                        interpolation: {
	                            pattern: /\$\{[^}]+\}/,
	                            inside: {
	                                "interpolation-punctuation": {
	                                    pattern: /^\$\{|\}$/,
	                                    alias: "punctuation"
	                                },
	                                rest: Prism.languages.javascript
	                            }
	                        },
	                        string: /[\s\S]+/
	                    }
	                }
	            }), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
	                script: {
	                    pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
	                    lookbehind: !0,
	                    inside: Prism.languages.javascript,
	                    alias: "language-javascript"
	                }
	            }), Prism.languages.js = Prism.languages.javascript, ! function() {
	                "undefined" != typeof self && self.Prism && self.document && Prism.hooks.add("complete", function(e) {
	                    if (e.code) {
	                        var t = e.element.parentNode,
	                            s = /\s*\bline-numbers\b\s*/;
	                        if (t && /pre/i.test(t.nodeName) && (s.test(t.className) || s.test(e.element.className)) && !e.element.querySelector(".line-numbers-rows")) {
	                            s.test(e.element.className) && (e.element.className = e.element.className.replace(s, "")), s.test(t.className) || (t.className += " line-numbers");
	                            var n, a = e.code.match(/\n(?!$)/g),
	                                l = a ? a.length + 1 : 1,
	                                r = new Array(l + 1);
	                            r = r.join("<span></span>"), n = document.createElement("span"), n.setAttribute("aria-hidden", "true"), n.className = "line-numbers-rows", n.innerHTML = r, t.hasAttribute("data-start") && (t.style.counterReset = "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)), e.element.appendChild(n)
	                        }
	                    }
	                })
	            }(), ! function() {
	                if ("undefined" != typeof self && self.Prism && self.document && document.createElement) {
	                    var e = {
	                            javascript: "clike",
	                            actionscript: "javascript",
	                            aspnet: "markup",
	                            bison: "c",
	                            c: "clike",
	                            csharp: "clike",
	                            cpp: "c",
	                            coffeescript: "javascript",
	                            crystal: "ruby",
	                            "css-extras": "css",
	                            d: "clike",
	                            dart: "clike",
	                            fsharp: "clike",
	                            glsl: "clike",
	                            go: "clike",
	                            groovy: "clike",
	                            haml: "ruby",
	                            handlebars: "markup",
	                            haxe: "clike",
	                            jade: "javascript",
	                            java: "clike",
	                            kotlin: "clike",
	                            less: "css",
	                            markdown: "markup",
	                            nginx: "clike",
	                            objectivec: "c",
	                            parser: "markup",
	                            php: "clike",
	                            "php-extras": "php",
	                            processing: "clike",
	                            protobuf: "clike",
	                            qore: "clike",
	                            jsx: ["markup", "javascript"],
	                            ruby: "clike",
	                            sass: "css",
	                            scss: "css",
	                            scala: "java",
	                            smarty: "markup",
	                            swift: "clike",
	                            textile: "markup",
	                            twig: "markup",
	                            typescript: "javascript",
	                            wiki: "markup"
	                        },

	                        c = {},
	                        a = "none",
	                        s = Prism.plugins.autoloader = {
	                            languages_path: "../assets/js/prism-components/",
	                            use_minified: !0
	                        },
	                        n = function(e, c, a) {
	                            var s = document.createElement("script");
	                            s.src = e, s.async = !0, s.onload = function() {
	                                document.body.removeChild(s), c && c()
	                            }, s.onerror = function() {
	                                document.body.removeChild(s), a && a()
	                            }, document.body.appendChild(s)
	                        },
	                        r = function(e) {
	                            return s.languages_path + "prism-" + e + (s.use_minified ? ".min" : "") + ".js"
	                        },
	                        i = function(e, a) {
	                            var s = c[e];
	                            s || (s = c[e] = {});
	                            var n = a.getAttribute("data-dependencies");
	                            !n && a.parentNode && "pre" === a.parentNode.tagName.toLowerCase() && (n = a.parentNode.getAttribute("data-dependencies")), n = n ? n.split(/\s*,\s*/g) : [], t(n, function() {
	                                l(e, function() {
	                                    Prism.highlightElement(a)
	                                })
	                            })
	                        },
	                        t = function(e, c, a) {
	                            "string" == typeof e && (e = [e]);
	                            var s = 0,
	                                n = e.length,
	                                r = function r() {
	                                    n > s ? l(e[s], function() {
	                                        s++, r()
	                                    }, function() {
	                                        a && a(e[s])
	                                    }) : s === n && c && c(e)
	                                };
	                            r()
	                        },
	                        l = function l(a, s, i) {
	                            var l = function l() {
	                                    var e = !1;
	                                    a.indexOf("!") >= 0 && (e = !0, a = a.replace("!", ""));
	                                    var t = c[a];
	                                    if (t || (t = c[a] = {}), s && (t.success_callbacks || (t.success_callbacks = []), t.success_callbacks.push(s)), i && (t.error_callbacks || (t.error_callbacks = []), t.error_callbacks.push(i)), !e && Prism.languages[a]) o(a);
	                                    else if (!e && t.error) u(a);
	                                    else if (e || !t.loading) {
	                                        t.loading = !0;
	                                        var l = r(a);
	                                        n(l, function() {
	                                            t.loading = !1, o(a)
	                                        }, function() {
	                                            t.loading = !1, t.error = !0, u(a)
	                                        })
	                                    }
	                                },
	                                p = e[a];
	                            p && p.length ? t(p, l) : l()
	                        },
	                        o = function(e) {
	                            c[e] && c[e].success_callbacks && c[e].success_callbacks.length && c[e].success_callbacks.forEach(function(c) {
	                                c(e)
	                            })
	                        },
	                        u = function(e) {
	                            c[e] && c[e].error_callbacks && c[e].error_callbacks.length && c[e].error_callbacks.forEach(function(c) {
	                                c(e)
	                            })
	                        };
	                    Prism.hooks.add("complete", function(e) {
	                        e.element && e.language && !e.grammar && e.language !== a && i(e.language, e.element)
	                    })
	                }
	            }()
	        }).call(exports, function() {
	            return this
	        }())
	    },
	  ],
	  callLogicFunc: function(modules) {
	    function __webpack_require__(moduleId) {
	        if (installedModules[moduleId]) return installedModules[moduleId].exports;
	        var module = installedModules[moduleId] = {
	            exports: {},
	            id: moduleId,
	            loaded: !1
	        };
	        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.loaded = !0, module.exports
	    }
	    var installedModules = {};
	    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.p = "", __webpack_require__(0)
	  },

	  init: function() {
	    this.callLogicFunc(this.callFunc);
	  },
	};
	})(jQuery);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	(function ($, undefined) {

	    window.app = window.app || {};


	    window.app = {
	        page: 1,

	        instantClickInitApp: function () {
	            this.appCoverScroll();
	            this.articleLearnNext();
	            this.articleLearnPrev();
	            this.searchSuggest();
	            if ($('#SOHUCS').length > 0) {
	                this.loadChangYanCommentsLayer();
	            }
	        },

	        loadChangYanCommentsLayer: function () {
	            //from Chang Yan common code
	            var appid = 'cysX0NIPe';
	            var conf = 'prod_559135105c2bb397082218205f07db8d';
	            var width = window.innerWidth || document.documentElement.clientWidth;

	            if (width < 960) {
	                var mobileUrl = 'https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf;
	                var head = document.getElementsByTagName("head")[0] || document.head || document.documentElement;
	                var script = document.createElement("script");
	                script.setAttribute("type", "text/javascript");
	                script.setAttribute("charset", "UTF-8");
	                script.setAttribute("src", mobileUrl);
	                script.setAttribute("id", "changyan_mobile_js");
	                head.appendChild(script);
	            } else {
	                var loadJs = function (d, a) {
	                    var c = document.getElementsByTagName("head")[0] || document.head || document.documentElement;
	                    var b = document.createElement("script");
	                    b.setAttribute("type", "text/javascript");
	                    b.setAttribute("charset", "UTF-8");
	                    b.setAttribute("src", d);

	                    if (typeof a === "function") {
	                        if (window.attachEvent) {
	                            b.onreadystatechange = function () {
	                                var e = b.readyState;
	                                if (e === "loaded" || e === "complete") {
	                                    b.onreadystatechange = null;
	                                    a();
	                                }
	                            }
	                        } else {
	                            b.onload = a
	                        }
	                    }
	                    c.appendChild(b)
	                };
	                loadJs("https://changyan.sohu.com/upload/changyan.js",
	                    function () {
	                        window.changyan.api.config({appid: appid, conf: conf})
	                    });
	            }
	        },

	        searchSuggest: function () {
	            let that = this;
	            let header = $("#header");
	            let pageUrl = $("body").attr("mapache-page-url");
	            let searchInput = $(".search-field");

	            searchInput.on('focus, click', function () {
	                header.addClass("is-showSearch");
	                $(".search-popout").removeClass("closed");
	            });

	            searchInput.on('blur', function () {
	                setTimeout(function () {
	                    header.removeClass("is-showSearch");
	                    $(".search-popout").addClass("closed");
	                }, 200)
	            });

	            searchInput.on('keyup', function () {
	                $(".search-suggest-results").css("display", "block");
	            });

	            $(window).on('keydown', function (e) {
	                that.searchKeypress(e);
	            });

	            searchInput.ghostHunter({
	                results: "#search-results",
	                zeroResultsInfo: !1,
	                displaySearchInfo: !1,
	                result_template: '<a href="' + pageUrl + '{{link}}">{{title}}</a>',
	                onKeyUp: !0
	            });
	        },

	        appCoverScroll: function () {
	            $(window).scroll(function () {
	                var scrollTop = $(window).scrollTop(),
	                    gd_cover_height = $("#cover").height() - $("#header").height(),
	                    gd_cover_wrap = (gd_cover_height - scrollTop) / gd_cover_height;
	                scrollTop >= gd_cover_height ? $("#header").addClass("toolbar-shadow").removeAttr("style") : $("#header").removeClass("toolbar-shadow").css({
	                    background: "transparent"
	                });
	                $(".cover-wrap").css("opacity", gd_cover_wrap);
	            });
	        },

	        articleLearnNext: function () {
	            appSelf = this,
	                $pagination = $("#pagination"),
	                pageTotal = $pagination.attr("mapache-page"),
	                $win = $(window);

	            if (pageTotal > appSelf.page) {
	                $(".pagination").css("display", "block");
	            }

	            $pagination.on("click", function (e) {
	                $("#pagination").attr('disabled', 'disabled');
	                e.preventDefault(), $pagination.addClass("infinite-scroll");
	                if (appSelf.page <= pageTotal) {
	                    appSelf.page++;
	                    appSelf.getPostPrivate('next');
	                }
	            });
	        },

	        articleLearnPrev: function () {
	            appSelf = this,
	                $pagination = $("#prev-pagination"),
	                pageTotal = $pagination.attr("mapache-page"),
	                $win = $(window);
	            $pagination.on("click", function (e) {
	                $("#prev-pagination").attr('disabled', 'disabled');
	                e.preventDefault(), $pagination.addClass("infinite-scroll");
	                if (appSelf.page <= pageTotal) {
	                    appSelf.page--;
	                    appSelf.getPostPrivate('prev');
	                }
	            });
	        },

	        getPostPrivate: function (key) {
	            pageTotal = $pagination.attr("mapache-page"),
	                appSelf = this,
	                gd_cover_height = $("#cover").height() - $("#header").height(),
	                // urlProtocol = window.location.protocol,
	                urlPage = window.location.href;
	            if (key == "next") {
	                $("#pagination").addClass("loanding").html("下一页");
	            }

	            if (key == "prev") {
	                $("#prev-pagination").addClass("loanding").html("上一页");
	            }
	            // console.log(urlProtocol+ '//' + urlPage + "/page/" + appSelf.page);
	            fetch(urlPage + "/page/" + appSelf.page).then(function (res) {
	                return res.text()
	            }).then(function (body) {
	                setTimeout(function () {
	                    var entries = $(".entry-pagination", body);
	                    $(".feed-entry-wrapper").html(entries);

	                    if (appSelf.page < pageTotal) {
	                        $("#pagination").removeAttr('disabled');
	                    }

	                    if (appSelf.page > 1) {
	                        $('#prev-pagination').removeAttr('disabled');
	                    }

	                    if (key == "next") {
	                        $("#pagination").removeClass("loanding").html("下一页");
	                    }

	                    if (key == "prev") {
	                        $("#prev-pagination").removeClass("loanding").html("上一页");
	                    }
	                    $("html, body").animate({scrollTop: gd_cover_height}, 500)
	                }, 1e3)
	            }).catch(function (e) {
	                console.log("Oops, error");
	            });
	            console.log(appSelf.page);
	        },

	        searchKeypress: function (e) {
	            let that = this;
	            let $focused;
	            let $next;
	            let $prev;
	            let searchResultsWrapper = $('#search-results');

	            if (e.keyCode === 27) {
	                that.closeSearchLayer();
	            }

	            if(searchResultsWrapper.find('a').length > 0) {
	                // Down & Tab
	                if(e.keyCode === 40) {
	                    $focused = searchResultsWrapper.find('a.focus');

	                    if($focused.length <= 0) {
	                        searchResultsWrapper.find('a').first().addClass('focus');
	                    } else {
	                        $next = $focused.next('a');
	                        if($next.length) {
	                            $focused.removeClass('focus');
	                            $next.addClass('focus');
	                        }
	                    }
	                    e.preventDefault();
	                    return false;
	                }

	                // Up
	                if(e.keyCode === 38) {
	                    $focused = searchResultsWrapper.find('a.focus');

	                    if($focused.length) {
	                        $prev = $focused.prev('a');
	                        if($prev.length) {
	                            $focused.removeClass('focus');
	                            $prev.first().addClass('focus');
	                        }
	                    }

	                    e.preventDefault();
	                    return false;
	                }
	            }
	        },

	        closeSearchLayer: function () {
	            let that = this;
	            let header = $('#header');
	            // Remove event listeners
	            $(window).off('keydown', that.searchKeypressHandler);

	            header.removeClass('is-showSearch');
	            $('.search-popout').addClass('closed');
	        }
	    };
	})(jQuery);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	var Parameters = function() {
	        this.related = $("#post-related");
	        this.page_url = window.location.origin;
	        this.custom_share = $('.custom-share');
	        this.getAllParameters = function() {
	            return this;
	        };
	};
	module.exports = Parameters;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	module.exports = function(elem, pageUrl) {
	    this.elem = elem;
	    this.postID = elem.attr("mapache-post-id");
	    this.postTotal = elem.attr("mapache-post-total");
	    this.postTags = elem.attr("mapache-tag");
	    this.urlApi = ghost.url.api("posts", {include: "tags"});
	    this.count = 0;
	    let _this = this;
	    let html = "";

	    this.display = function() {
	        fetch(_this.urlApi).then(function(res) {
	            return res.json();

	        }).then(function(json) {
	            let results = json.posts;

	            results.forEach(function(post){
	                for (let i = 0; i < post.tags.length; i++) {
	                    if (post.tags[i].id === _this.postTags && post.id !== _this.postID) {
	                        if (_this.count < _this.postTotal) {
	                            html += _this.template(post);
	                            _this.count++;
	                        }
	                    }
	                }
	            });

	            if (_this.count === 0) {
	                _this.elem.css("display", "none");
	            }
	            $("#post-related-wrap").html(html);
	        });
	    };

	    this.template = function (post) {
	        let html = "";
	        let post_image = "";
	        let post_no_cover = "no-image";
	        let post_title = post.title;
	        let post_url = post.url;

	        if (null !== post.image) {
	            post_image = '<figure class="entry-image">';
	            post_image += '<a href="' + pageUrl + post_url + '" class="entry-image--link">';
	            post_image += '<span class="entry-image--bg" style="background-image:url(' + post.image + ')"></span>';
	            post_image += '</figure>';
	            post_no_cover = "";
	        }
	        html = '<div class="col s12 m6 l4 ' + post_no_cover + '">' +
	            '<div class="entry entry--small">' + post_image + '' +
	            '<h3 class="entry-title">' +
	            '<a href="' + pageUrl + post_url + '">' + post_title + '</a>' +
	            '</h3>' +
	            '</div>' +
	            '</div>';

	        return html;
	    };
	};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	module.exports = function(share_elems) {
	    var _this = this,
	        share_elems = share_elems;

	    share_elems.bind("click", function(e){
	        e.preventDefault();
	        _this.elem = $(this);
	        _this.godoShare(_this.elem);
	    });

	    this.godoShare = function(elem) {
	        var share_name = _this.godoValue("share").toLowerCase(),
	            share_social = {
	                'weibo': {
	                    'shareUrl': 'http://service.weibo.com/share/share.php',
	                    'params': {
	                        url: _this.godoValue("url"),
	                        title: _this.godoValue("title")
	                    }
	                },
	                'wechat': {
	                    'shareUrl': 'http://qr.liantu.com/api.php',
	                    'params': {
	                        text: _this.godoValue("url"),
	                    }
	                },
	                'tencent-weibo': {
	                    'shareUrl': 'http://share.v.t.qq.com/index.php',
	                    'params': {
	                        c: 'share',
	                        a: 'index',
	                        url: _this.godoValue("url"),
	                        title: _this.godoValue("title"),
	                        appkey: '801cf76d3cfc44ada52ec13114e84a96'
	                    }
	                },
	                'facebook': {
	                    shareUrl: "https://www.facebook.com/sharer/sharer.php",
	                    params: {
	                        u: _this.godoValue("url")
	                    }
	                },
	                'twitter': {
	                    shareUrl: "https://twitter.com/intent/tweet/",
	                    params: {
	                        text: _this.godoValue("title"),
	                        url: _this.godoValue("url")
	                    }
	                },
	                'reddit': {
	                    shareUrl: "https://www.reddit.com/submit",
	                    params: {
	                        url: _this.godoValue("url")
	                    }
	                },
	                'pinterest': {
	                    shareUrl: "https://www.pinterest.com/pin/create/button/",
	                    params: {
	                        url: _this.godoValue("url"),
	                        description: _this.godoValue("title")
	                    }
	                },
	                'linkedin': {
	                    shareUrl: "https://www.linkedin.com/shareArticle",
	                    params: {
	                        url: _this.godoValue("url"),
	                        mini: !0
	                    }
	                },
	                'pocket': {
	                    shareUrl: "https://getpocket.com/save",
	                    params: {
	                        url: _this.godoValue("url")
	                    }
	                }
	            },
	            share = share_social[share_name];

	        if (void 0 !== share) {
	            _this.godoPopup(share)
	        }
	    };

	    this.godoValue = function(a) {
	        var val = this.elem.attr("godo-" + a);

	        return void 0 !== val && null !== val && val;
	    };

	    this.godoPopup = function(share) {
	        var i,
	            params = share.params || {},
	            keys = Object.keys(params),
	            str = keys.length > 0 ? "?" : "";

	        for (i = 0; i < keys.length; i++) {
	            str += "&";
	            if(params[keys[i]]) {
	                str += keys[i] + "=" + encodeURIComponent(params[keys[i]]);
	            }
	        }
	        share.shareUrl += str;

	        if (share.isLink) {
	            window.location.href = share.shareUrl;
	        } else {
	            var popWidth = share.width || 600,
	                popHeight = share.height || 480,
	                left = window.innerWidth / 2 - popWidth / 2 + window.screenX,
	                top = window.innerHeight / 2 - popHeight / 2 + window.screenY,
	                popParams = "scrollbars=no, width=" + popWidth + ", height=" + popHeight + ", top=" + top + ", left=" + left,
	                newWindow = window.open(share.shareUrl, "", popParams);
	            window.focus && newWindow.focus()
	        }
	    };
	};


/***/ })
/******/ ]);