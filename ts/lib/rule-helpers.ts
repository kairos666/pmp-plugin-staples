const mainStylesheetPath        = '/css/main.min.css';
const mainScriptPath            = '/js/main.min.js';
const noInitError               = 'Need to init the plugin before usage';

// declare cheerio's Jquery light version
let $;

/**
 * init function to set up jQuery light reference
 * 
 * @param jQuery reference
 */
let init = jQuery => {
    $ = jQuery;
};

/**
 * inject CSS stylesheet to the page
 *
 * @param stylesheetPath path to the CSS file string
 * @param appendSelector jQuery like selector string
 */
let injectStylesheet = (stylesheetPath?:string, appendSelector?:string) => {
    if(!$) throw new Error(noInitError);

    let cssFilePath = (stylesheetPath) ? stylesheetPath : mainStylesheetPath;
    let selector = (appendSelector) ? appendSelector : 'head';
    
    $(selector).append(`<link rel="stylesheet" type="text/css" href="${cssFilePath}">`);
};

/**
 * inject JS script to the page
 *
 * @param scriptPath path to the JS file string
 * @param appendSelector jQuery like selector string
 */
let injectScript = (scriptPath?:string, appendSelector?:string) => {
    if(!$) throw new Error(noInitError);

    let jsFilePath = (scriptPath) ? scriptPath : mainScriptPath;
    let selector = (appendSelector) ? appendSelector : 'body';

    $(selector).append(`<script type="text/javascript" src="${jsFilePath}"></script>`);
};

/**
 * inject main CSS/JS to the page
 */
let baseInjects = () => {
    injectStylesheet();
    injectScript();
};

module.exports = {
    init: init,
    injectStylesheet: injectStylesheet,
    injectScript: injectScript,
    baseInjects: baseInjects
}
