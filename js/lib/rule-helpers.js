var mainStylesheetPath = '/css/main.min.css';
var mainScriptPath = '/js/main.min.js';
var noInitError = 'Need to init the plugin before usage';
var fs = require('fs');
var path = require('path');
var $;
var init = function (jQuery) {
    $ = jQuery;
};
var injectStylesheet = function (stylesheetPath, appendSelector) {
    if (!$)
        throw new Error(noInitError);
    var cssFilePath = (stylesheetPath) ? stylesheetPath : mainStylesheetPath;
    var selector = (appendSelector) ? appendSelector : 'head';
    $(selector).append("<link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssFilePath + "\">");
};
var injectScript = function (scriptPath, appendSelector) {
    if (!$)
        throw new Error(noInitError);
    var jsFilePath = (scriptPath) ? scriptPath : mainScriptPath;
    var selector = (appendSelector) ? appendSelector : 'body';
    $(selector).append("<script type=\"text/javascript\" src=\"" + jsFilePath + "\"></script>");
};
var baseInjects = function () {
    injectStylesheet();
    injectScript();
};
var htmlPartial = function (url) {
    try {
        return fs.readFileSync(path.join('./dist/html', url), 'utf8');
    }
    catch (err) {
        if (err.code !== 'ENOENT')
            throw err;
        return '<p class="alert alert-warning">HTML partial inject file not found: ' + url + '</p>';
    }
};
module.exports = {
    init: init,
    injectStylesheet: injectStylesheet,
    injectScript: injectScript,
    baseInjects: baseInjects,
    htmlPartial: htmlPartial
};
