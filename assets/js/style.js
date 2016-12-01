(function ($, undefined) {
    
    window.app = window.app || {};
    
     window.app.theme = {
        init: function(){
            
        },
        
        commentLayer: function(container, postID, authorID) {
            console.log(container, postID, authorID);
            var el = document.createElement('div');//该div不需要设置class="ds-thread"
            el.setAttribute('data-thread-key', postID);//必选参数
            el.setAttribute('data-url', 'http://localhost:2368/');//必选参数
            el.setAttribute('data-author-key', authorID);//可选参数
            DUOSHUO.EmbedThread(el);
            jQuery(container).append(el);
        },
     };
})(jQuery);
