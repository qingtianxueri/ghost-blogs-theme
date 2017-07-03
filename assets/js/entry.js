var inithelp = require('./help');
var initapp = require('./initApp');
var app = require('./style');
var prism = require('./prism');
var mapacheparameters = require('./parameters');
var mapacheRelated = require('./relatedItems');
var mapacheGodoShare = require('./godoShare');

mapacheparameters = new mapacheparameters();
mapacheGodoShare = new mapacheGodoShare(mapacheparameters.custom_share);
mapacheRelated = new mapacheRelated(mapacheparameters.related, mapacheparameters.page_url);

mapacheRelated.display();
