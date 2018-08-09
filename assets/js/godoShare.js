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
