var default_style = require('./default_style');
var app = require('./style');
var mapacheRelated = require('./relatedItems');
var mapacheGodoShare = require('./godoShare');

$gd_related = $("#post-related");
$gd_page_url = window.location.origin;
mapacheRelated = new mapacheRelated($gd_related, $gd_page_url);
mapacheRelated.display();
