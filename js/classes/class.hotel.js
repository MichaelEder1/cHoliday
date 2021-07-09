"use strict";
import KWM_View from "../kwmJS/core/kwm-view.js";

export default class Hotel
{
    constructor(id, hotel)
    {
        this.id = id;
        Object.assign(this, hotel);
        this.formatedCurrency = Intl.NumberFormat("de-AT", {style: "currency", currency: "EUR"}).format(this.price);
    }

    renderListMarkup(container)
    {
        let self = this;
        let stars = "";
        for (let i = 0; i < this.stars; i++)
        {
            stars += "⭐";
        }


        let div = document.createElement("div");
        container.append(div);

        KWM_View.renderTemplate("hotel.list", div, {
            id: this.id,
            name: this.name,
            price: this.formatedCurrency,
            stars: stars,
            latitude: this.latitude,
            longitude: this.longitude,
            address: this.address,
            image: this.images[0].src,
        }).then(function ()
        {
            return new Promise((resolve) =>
            {
                self.addFavHandler(self.id);
                resolve();
            })
        })
    }

    renderSingleMarkup(container)
    {
        let self = this;
        let stars = "";
        for (let i = 0; i < this.stars; i++)
        {
            stars += "⭐";
        }

        let div = document.createElement("div");
        div.classList.add("overflow-hidden", "w-full", "md:my-4", "md:px-4", "md:w-1/4", "lg:my-4", "lg:px-4", "lg:w-1/4", "xl:my-4", "xl:px-4", "xl:w-1/4", "mb-4");
        container.append(div);

        KWM_View.renderTemplate("hotel.single", container, {
            id: this.id,
            name: this.name,
            price: this.formatedCurrency,
            stars: stars,
            image: this.images[0].src,
            latitude: this.latitude,
            longitude: this.longitude,
            address: this.address,
            description: this.description,
            phone: this.phone,
            email: this.email,
            website: this.website,
            amenities: this.amenities[0],
        }).then(function ()
        {
            self.addFavHandler(self.id);
            //pictures
            for (let i = 1; i < self.images.length; i++)
            {
                let img = document.createElement('img');
                img.classList.add("md:flex", "md:w-1/3", "mb-3", "mx-auto");
                img.alt = self.name;
                img.src = self.images[i].src;
                document.getElementById('hotel_gallery').appendChild(img);
            }
            //amenities
            let ul = document.createElement('ul');
            ul.classList.add("mx-auto", "list-square", "px-8");
            for (let i = 0; i < self.amenities.length; i++)
            {
                let li = document.createElement("li");
                li.classList.add("capitalize");
                let text = document.createTextNode(self.amenities[i]);
                li.appendChild(text);
                ul.appendChild(li);
            }
            document.getElementById("amenities").appendChild(ul);
        })
    }

    addFavHandler(id)
    {
        let favButton = document.querySelectorAll(".favourite.hotel[data-id='" + id + "']")[0];
        if (window.Core.model.isFavourite("hotels", id))
        {
            favButton.classList.add("is_favourite");
        }
        favButton.addEventListener("click", function (e)
        {
            e.preventDefault();
            window.Core.model.toggleFavourite("hotels", id);
            favButton.classList.toggle("is_favourite");
        })
    }
}