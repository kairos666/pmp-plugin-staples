var mainStylesheetPath = '/css/main.min.css';
var mainScriptPath = '/js/main.min.js';
var noInitError = 'Need to init the plugin before usage';
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
module.exports = {
    init: init,
    injectStylesheet: injectStylesheet,
    injectScript: injectScript,
    baseInjects: baseInjects
};
