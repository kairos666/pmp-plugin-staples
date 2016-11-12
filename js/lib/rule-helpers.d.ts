declare const mainStylesheetPath: string;
declare const mainScriptPath: string;
declare const noInitError: string;
declare let $: any;
declare let init: (jQuery: any) => void;
declare let injectStylesheet: (stylesheetPath?: string, appendSelector?: string) => void;
declare let injectScript: (scriptPath?: string, appendSelector?: string) => void;
declare let baseInjects: () => void;
