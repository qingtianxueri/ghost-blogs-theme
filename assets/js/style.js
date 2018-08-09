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
