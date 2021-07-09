"use strict"

import KWM_View from "../core/kwm-view.js";

export let view = new KWM_View("/favourites", async function ()
{
    await this.rendering();
})

view.rendering = async function ()
{
    await KWM_View.renderTemplate("favourites", document.getElementById("kwm-body"));
    let cities = await window.Core.model.getFavouriteCities();

    for (let city of cities)
    {
        city.renderListMarkup(document.getElementById("cities"));
    }

    let hotels = await window.Core.model.getFavouriteHotels();

    for (let hotel of hotels)
    {
        hotel.renderListMarkup(document.getElementById("hotels"));
    }
}