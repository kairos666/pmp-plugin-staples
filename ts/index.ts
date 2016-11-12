'use strict'

const ruleHelpers = require('./lib/rule-helpers');
const htmlHelpers = require('./lib/html-helpers');

let plugin = {
    name: 'Staple helpers plugin',
    description: `Basic helpers for getting started with Pimp My Page projects
        - inject main stylesheet
        - inject main JS script
        - inject HTML partials
        - lorem ipsum custom HTML tag
        - random image generator custom HTML tag`,
    documentation: 'TODO link some markdown doc',
    ruleHelpers: ruleHelpers,
    htmlHelpers: htmlHelpers
};

module.exports = plugin;