var mainStylesheetPath = './css/main.min.css';
var mainScriptPath = './scripts/main.min.js';
var injectStylesheet = function (stylesheetPath, appendSelector) {
    var cssFilePath = (stylesheetPath) ? stylesheetPath : mainStylesheetPath;
    var selector = (appendSelector) ? appendSelector : 'head';
    $(selector).append("<link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssFilePath + "\">");
};
var injectScript = function (scriptPath, appendSelector) {
    var jsFilePath = (scriptPath) ? scriptPath : mainStylesheetPath;
    var selector = (appendSelector) ? appendSelector : 'body';
    $(selector).append("<script type=\"text/javascript\" src=\"" + jsFilePath + "\"></script>");
};
var baseInjects = function () {
    injectStylesheet();
    injectScript();
};
module.exports = {
    injectStylesheet: injectStylesheet,
    injectScript: injectScript,
    baseInjects: baseInjects
};
