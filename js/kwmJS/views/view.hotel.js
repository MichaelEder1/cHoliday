"use strict";

import KWM_View from "../core/kwm-view.js";

export let view = new KWM_View("/hotels", async function ()
{
    if (window.Core.utils.isEmpty(KWM_View.getGetParameters()).id)
    {
        window.location.hash = "/";
    }
    else
    {
        this.hotels_of_city = await window.Core.model.getHotel(KWM_View.getGetParameters().id);
        if (this.hotels_of_city == false)
        {
            window.location.hash = "/";
        }
        else
        {
            await this.rendering();
        }
    }
});
view.rendering = async function(){
    await this.hotels_of_city.renderSingleMarkup(document.getElementById("kwm-body"));
}