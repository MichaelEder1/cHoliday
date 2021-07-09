"use strict";

import KWM_App from "./kwm-core.js";

//Import and rename your views here:
import {view as home} from '../views/view.home.js';
import {view as login} from '../views/view.login.js';
import {view as city} from '../views/view.cities.js';
import {view as hotel} from '../views/view.hotel.js';
import {view as favourites} from "../views/view.favourites.js";

let config = {
    appContainer: "kwmJS",
    debugMode: false,
    languages: ["de", "en", "es"],
    webRoot: "http://localhost/cHoliday/",
    views: [home, login, city, hotel, favourites]
}

new KWM_App(config); // Actually initialize the Application
