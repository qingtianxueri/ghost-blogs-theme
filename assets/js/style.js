(function ($, undefined) {

  window.app = window.app || {};

  window.app = {

    initApp: function() {
      this.duoshuoCommentLayer('#post-comments');
      this.duoshuoCommentCount();
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

    duoshuoCommentCount: function(){
        var ds = document.createElement('script');
        ds.type = 'text/javascript';
        var short_name = 'qingtianxueri';
        var thread_key = $('.duoshuo-comment-count').attr('data');
        ds.src = "http://api.duoshuo.com/threads/counts.jsonp?short_name=" + short_name + "&threads=" + thread_key + "&callback=duoshuoCountCallBack";
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('head')[0]
         || document.getElementsByTagName('body')[0]).appendChild(ds);
    },
  };
})(jQuery);
