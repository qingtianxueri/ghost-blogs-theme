(function ($, undefined) {

  window.app = window.app || {};

  window.app = {

    instantClickInitApp: function() {
      this.duoshuoCommentLayer('#post-comments');
      this.duoshuoCommentCountForArticle();
      this.duoshuocommentCountForArticles();
      this.seachSuggest();
    },
    
    documentReadyInitApp: function() {
      this.duoshuoCommentLayer('#post-comments');
      this.duoshuoCommentCountForArticle();
      this.duoshuocommentCountForArticles();
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
      if ($('.get-comment-count-script').length) {
        $('.get-comment-count-script').remove();
      }
      var ds = document.createElement('script');
      ds.type = 'text/javascript';
      ds.setAttribute('class', 'get-comment-count-script');
      var short_name = 'qingtianxueri';
      var thread_key = $('.duoshuo-comment-count').attr('data');
      if (thread_key === undefined) {
        return;
      }
      ds.src = "http://api.duoshuo.com/threads/counts.jsonp?short_name=" + short_name + "&threads=" + thread_key + "&callback=duoshuoCountCallBack";
      ds.charset = 'UTF-8';
      (document.getElementsByTagName('head')[0]
       || document.getElementsByTagName('body')[0]).appendChild(ds);
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
  };
})(jQuery);
