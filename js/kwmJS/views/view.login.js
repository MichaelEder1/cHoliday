"use strict";
import KWM_View from "../core/kwm-view.js";

export let view = new KWM_View("/login", async function ()
{
    await this.rendering();
})

view.rendering = async function ()
{
    await KWM_View.renderTemplate("login", document.getElementById("kwm-body"));
    document.getElementById("login-submit").addEventListener("click", function (e)
    {
        e.preventDefault();
        window.location.hash = window.Core.router.homeRoute.slug;
    });
}
