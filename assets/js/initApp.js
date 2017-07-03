/**
 * Created by chenlei on 2017/7/3.
 */
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
        Prism.plugins.autoloader.languages_path = "../assets/js/prism-components/"
    });
}();
