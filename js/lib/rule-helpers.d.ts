declare const mainStylesheetPath: string;
declare const mainScriptPath: string;
declare var $: any;
declare let injectStylesheet: (stylesheetPath?: string, appendSelector?: string) => void;
declare let injectScript: (scriptPath?: string, appendSelector?: string) => void;
declare let baseInjects: () => void;
