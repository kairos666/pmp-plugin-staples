const mainStylesheetPath        = './css/main.min.css';
const mainScriptPath            = './scripts/main.min.js';

// declare cheerio's Jquery light version
declare var $;

/**
 * inject CSS stylesheet to the page
 *
 * @param stylesheetPath path to the CSS file string
 * @param appendSelector jQuery like selector string
 */
let injectStylesheet = (stylesheetPath?:string, appendSelector?:string) => {
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
    let jsFilePath = (scriptPath) ? scriptPath : mainStylesheetPath;
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
    injectStylesheet: injectStylesheet,
    injectScript: injectScript,
    baseInjects: baseInjects
}
