"use strict";
import KWM_Router from './kwm-router.js';
import KWM_Translator from "./kwm_translator.js";
import KWM_Utils from "./kwm_utils.js";
import KWM_View from "./kwm-view.js";
import KWM_Model from "./kwm-model.js";

/**************************************************
 * Class-Bundle for Web-Apps.
 *
 * @param * config: contains webroot, appContainer
 ************************************************/
export default class KWM_App
{
    constructor(config)
    {
        window.Core = this; //Attach Core to window-Object.
        this.system = {
            appContainer: config.appContainer, //HTML-Element, where App will be rendered into
            webRoot: config.webRoot, // Root-URL of the App
            debugMode: config.debugMode //If activated, show debug log messages etc.
        }
        this.utils = new KWM_Utils();
        this.translator = new KWM_Translator(config.languages);
        this.model = new KWM_Model();
        this.router = new KWM_Router(config.views);
        this.initHeaderAndFooter();

    }

    t(key)
    {
        return this.translator.t(key);
    }

    async initHeaderAndFooter()
    {
        await KWM_View.renderTemplate("header", document.getElementById("kwm-header"));
        await KWM_View.renderTemplate("footer", document.getElementById("kwm-footer"));
        this.initLanguageMenu();
    }

    initLanguageMenu()
    {
        let self = this;
        let listElements = document.querySelectorAll("#language span");
        for (let i = 0; i < listElements.length; i++)
        {
            listElements[i].addEventListener("click", function ()
            {
                self.translator.currentLanguage = this.dataset.language;
                self.utils.setCookie("language", this.dataset.language, 360);
                self.initHeaderAndFooter();
                window.dispatchEvent(new HashChangeEvent("hashchange"));
            })
        }
    }
}
