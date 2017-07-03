'use strict';
var Parameters = function() {
        this.related = $('#post-related');
        this.page_url = window.location.origin;
        this.custom_share = $('.custom-share');
        this.getAllParameters = function() {
            return this;
        };
};
module.exports = Parameters;
