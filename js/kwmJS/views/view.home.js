"use strict";
import KWM_View from "../core/kwm-view.js";

export let view = new KWM_View("/", async function ()
{
    await this.rendering();
})

view.rendering = async function ()
{
    await KWM_View.renderTemplate("home", document.getElementById("kwm-body"));

    let cities = await window.Core.model.getCities();

    for (let city of cities)
    {
        city.renderListMarkup(document.getElementById("cities"));
    }

    document.getElementById("logout-submit").addEventListener("click", function (e)
    {
        e.preventDefault();
        window.location.hash = window.Core.router.routes[1].slug;
    });
}