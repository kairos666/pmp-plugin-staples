'use strict'

const ruleHelpers = require('./lib/rule-helpers');
const htmlHelpers = require('./lib/html-helpers');

interface IPmpPlugin {
    name:                   string;
    description:            string;
    ruleHelperObjectName:   string;
    ruleHelpers:            any;
    htmlHelpers:            any;
}

let plugin:IPmpPlugin = {
    name: 'Staple helpers plugin',
    description: `Basic helpers for getting started with Pimp My Page projects
        - inject main stylesheet
        - inject main JS script
        - inject HTML partials
        - lorem ipsum custom HTML tag
        - random image generator custom HTML tag`,
    ruleHelperObjectName: 'pmpHelpers',
    ruleHelpers: ruleHelpers,
    htmlHelpers: htmlHelpers
};

module.exports = plugin;