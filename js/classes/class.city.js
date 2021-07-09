"use strict";
import KWM_View from "../kwmJS/core/kwm-view.js";

export default class City
{
    constructor(id, city)
    {
        Object.assign(this, city);
        this.id = id;
    }

    renderListMarkup(container)
    {
        let self = this;
        let div = document.createElement("div");
        div.classList.add("overflow-hidden", "w-full", "md:my-4", "md:px-4", "md:w-1/4", "lg:my-4", "lg:px-4", "lg:w-1/4", "xl:my-4", "xl:px-4", "xl:w-1/4");
        container.append(div);

        KWM_View.renderTemplate("city.list", div, {
            id: this.id,
            name: this.name,
            country: this.country,
            nickname: this.nickname,
            image: this.image,
        }).then(function ()
        {
            return new Promise((resolve, reject) =>
            {
                self.addFavHandler(self.id);
                resolve();
            });
        });
    }

    renderSingleMarkup(container)
    {
        let self = this;
        KWM_View.renderTemplate("city.single", container, {
            id: this.id,
            name: this.name,
            country: this.country,
            nickname: this.nickname,
            image: this.image,
        }).then(async function ()
        {
            let hotelsOfCity = await window.Core.model.getHotelOfCity(self.id);
            let hotels_container = document.getElementById("hotels_of_city");
            for (let hotel of hotelsOfCity)
            {
                let div = document.createElement("div");
                div.classList.add("overflow-hidden", "w-full", "md:my-4", "md:px-4", "md:w-1/4", "lg:my-4", "lg:px-4", "lg:w-1/4", "xl:my-4", "xl:px-4", "xl:w-1/4", "mb-4");
                hotels_container.append(div);
                hotel.renderListMarkup(div);
            }
            return new Promise((resolve, reject) =>
            {
                self.addFavHandler(self.id);
                resolve();
            });
        })
    }

    addFavHandler(id)
    {
        let favButton = document.querySelectorAll(".favourite.city[data-id='" + id + "']")[0];
        if (window.Core.model.isFavourite("cities", id))
        {
            favButton.classList.add("is_favourite");
        }
        favButton.addEventListener("click", function (e)
        {
            e.preventDefault();
            window.Core.model.toggleFavourite("cities", id);
            favButton.classList.toggle("is_favourite");
        })
    }
}