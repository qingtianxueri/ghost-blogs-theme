(function ($, undefined) {

  window.app = window.app || {};


  window.app = {
    page: 1,

    instantClickInitApp: function() {
      this.appCoverScroll();
      this.articleLearnNext();
      this.articleLearnPrev();
      this.duoshuoCommentLayer('#post-comments');
      this.duoshuoCommentCountForArticle();
      this.duoshuocommentCountForArticles();
      this.seachSuggest();
      this.socialShare();
    },

    documentReadyInitApp: function() {
      this.articleLearnNext();
      this.articleLearnPrev();
      this.duoshuoCommentLayer('#post-comments');
      this.duoshuoCommentCountForArticle();
      this.duoshuocommentCountForArticles();
      this.socialShare();
    },

    duoshuoAddJs: function() {
      var ds = document.createElement('script');
      ds.type = 'text/javascript';ds.async = true;
      ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
      ds.charset = 'UTF-8';
      (document.getElementsByTagName('head')[0]
       || document.getElementsByTagName('body')[0]).appendChild(ds);
    },

    duoshuoCommentLayer: function(container) {
      var thread_key = $('.ds-thread-hidden').attr('data');
      var url = $('.ds-thread-hidden').attr('url');
      var el = document.createElement('div');
      el.setAttribute('data-thread-key', thread_key);
      el.setAttribute('data-url', url);
      DUOSHUO.EmbedThread(el);
      jQuery(container).append(el);
    },

    duoshuoCommentCountForArticle: function(){
      var thread_key = $('.duoshuo-comment-count').attr('data');
      if (thread_key === undefined) {
        return;
      }
      countUrl = "https://api.duoshuo.com/threads/counts.jsonp?short_name=qingtianxueri&threads=" + thread_key;
      $.ajax({
          type : "get",
          async: true,
          url : countUrl,
          dataType : "jsonp",
          success : function(data){
            if (data.code == 0) {
              commentCount = data.response[thread_key].comments;
              $('.duoshuo-comment-count').text(commentCount + '条评论');
            }
          }
        });
    },

    duoshuocommentCountForArticles: function() {
      $('.entry-pagination').each(function(){
        var thread_key = $(this).find('.duoshuo-entry-comment-count').attr('data');
        var $this = $(this);
        countUrl = "https://api.duoshuo.com/threads/counts.jsonp?short_name=qingtianxueri&threads=" + thread_key;

        $.ajax({
          type : "get",
          async: true,
          url : countUrl,
          dataType : "jsonp",
          success : function(data){
            if (data.code == 0) {
              commentCount = data.response[thread_key].comments;
              $this.find('.duoshuo-entry-comment-count').text(commentCount + '条评论');
            }
          }
        });
      });
    },

    seachSuggest: function() {
      var $gd_header = $("#header"),
          $gd_page_url = $("body").attr("mapache-page-url"),
          $gd_search_input = $(".search-field");
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
      })
    },

    appCoverScroll: function() {
      $(window).scroll(function() {
        var scrollTop = $(window).scrollTop(),
          gd_cover_height = $("#cover").height() - $("#header").height(),
          gd_cover_wrap = (gd_cover_height - scrollTop) / gd_cover_height;
        scrollTop >= gd_cover_height ? $("#header").addClass("toolbar-shadow").removeAttr("style") : $("#header").removeClass("toolbar-shadow").css({
            background: "transparent"
        });
        $(".cover-wrap").css("opacity", gd_cover_wrap);
      });
    },

    articleLearnNext: function() {
      appSelf = this,
      $pagination = $("#pagination"),
      pageTotal = $pagination.attr("mapache-page"),
      $win = $(window);

      if (pageTotal > appSelf.page) {
        $(".pagination").css("display", "block");
      }

      $pagination.on("click", function(e) {
          e.preventDefault(), $pagination.addClass("infinite-scroll");
          if (appSelf.page <= pageTotal) {
            appSelf.page++;
            appSelf.getPostPrivate('next');
          }
      });
    },

    articleLearnPrev: function() {
      appSelf = this,
      $pagination = $("#prev-pagination"),
      pageTotal = $pagination.attr("mapache-page"),
      $win = $(window);
      $pagination.on("click", function(e) {
          e.preventDefault(), $pagination.addClass("infinite-scroll");
          if (appSelf.page <= pageTotal) {
            appSelf.page--;
            appSelf.getPostPrivate('prev');
          }
      });
    },

    getPostPrivate: function(key) {
      pageTotal = $pagination.attr("mapache-page"),
      appSelf = this,
      gd_cover_height = $("#cover").height() - $("#header").height(),
      urlProtocol = window.location.protocol,
      urlPage =  window.location.host;
      if (key == "next") {
        $("#pagination").addClass("loanding").html("下一页");
      }

      if (key == "prev") {
        $("#prev-pagination").addClass("loanding").html("上一页");
      }
      // console.log(urlProtocol+ '//' + urlPage + "/page/" + appSelf.page);
      fetch(urlProtocol+ '//' + urlPage + "/page/" + appSelf.page).then(function(res) {
            return res.text()
        }).then(function(body) {
            setTimeout(function() {
              var entries = $(".entry-pagination", body);
              $(".feed-wrapper").html(entries);

              if (appSelf.page >= pageTotal) {
                $("#pagination").attr('disabled', 'disabled');
              } else {
                $("#pagination").removeAttr('disabled');
              }

              if (appSelf.page <= 1) {
                $("#prev-pagination").attr('disabled', 'disabled');
              } else {
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
        }).catch(function(e) {
            console.log("Oops, error");
          });
        console.log(appSelf.page);
    },

    socialShare: function() {
      $("#socialShare").socialShare({
        content: 'test content',
        url: window.location.href,
        titile: document.title,
      });
    },
  };
})(jQuery);
