'use strict';
module.exports = function(elem, pageUrl) {
    this.elem = elem;
    this.postID = elem.attr("mapache-post-id");
    this.postTotal = elem.attr("mapache-post-total");
    this.postTags = elem.attr("mapache-tag");
    this.urlApi = ghost.url.api("posts", {include: "tags"});
    this.count = 0;
    var _this = this;
    var html = "";
    fetch(this.urlApi).then(function(res) {
        return res.json();
    }).then(function(json) {
        var results = json.posts;
        results.forEach(function(post){
            for (var i = 0; i < post.tags.length; i++) {
                if (post.tags[i].id == _this.postTags && post.id != _this.postID) {
                    if (_this.count < _this.postTotal) {
                        html += mapacheTemplate(post);
                        _this.count++;
                    }
                }
            }
        });

        if (_this.count == 0) {
            _this.elem.css("display", "none");
        }
        $("#post-related-wrap").html(html);
    });

    function mapacheTemplate(post) {
        var html = "",
            post_image = "",
            post_no_cover = "no-image",
            post_title = post.title,
            post_url = post.url;

            if (null !== post.image) {
                post_image = '<figure class="entry-image">';
                post_image += '<a href="' + pageUrl + post_url + '" class="entry-image--link">';
                post_image += '<span class="entry-image--bg" style="background-image:url(' + post.image + ')"></span>';
                post_image += '</figure>';
                post_no_cover = "";
            }
            html = '<div class="col s12 m6 l4 ' + post_no_cover + '"><div class="entry entry--small">' + post_image + '<h3 class="entry-title"><a href="' + pageUrl + post_url + '">' + post_title + '</a></h3></div></div>';
        return html;
    }
};
