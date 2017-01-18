var mapacheRelated = require('./module');
var app = require('./style');
var share = require('./share');
var default_style = require('./default_style');

$gd_related = $("#post-related");
$gd_page_url = window.location.origin;
mapacheRelated = new mapacheRelated($gd_related, $gd_page_url);
