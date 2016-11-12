'use strict';
var ruleHelpers = require('./lib/rule-helpers');
var htmlHelpers = require('./lib/html-helpers');
var plugin = {
    name: 'staple helpers plugin',
    description: "Basic helpers for getting started with Pimp My Page projects\n        - inject main stylesheet\n        - inject main JS script\n        - inject HTML partials\n        - lorem ipsum custom HTML tag\n        - random image generator custom HTML tag",
    ruleHelperObjectName: 'pmpHelpers',
    ruleHelpers: ruleHelpers,
    htmlHelpers: htmlHelpers
};
module.exports = plugin;
