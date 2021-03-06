"use strict";

/*************************
 * Translation Engine for KWM App
 * Just add your Key:Value Pairs and enjoy
 *************************/
export default class KWM_Translator
{
    constructor(languages)
    {
        for (const lng of languages)
        {
            this[lng] = KWM_Language[lng];
        }
        this.currentLanguage = window.Core.utils.getCookie("language") ? window.Core.utils.getCookie("language") : languages[0];
    }

    t(key, language = this.currentLanguage)
    {
        return (typeof KWM_Language[language][key] == "undefined") ? "-- Missing translation: " + key + " --" : KWM_Language[language][key];
    }
}

let KWM_Language = {};
KWM_Language.en = {
    welcomeMessage: "Welcome to C-Holiday",
    logout: "logout",
    login: "login",
    password: "Password",
    username: "Username",
    name: "Name",
    city: "City",
    country: "Country",
    nickname: "Nickname",
    city_description: "City Description",
    hotels_of_city: "Hotels in this City",
    hotel_description: "Hotel description",
    price: "Price",
    stars: "Stars",
    header_tagline: "Dream. Explore. Discover.",
    header_subline: "From A to B with C-Holiday",
    footer_text: "The most beautiful things in life are not just things. They're people, and places, memories and pictures. They're feelings and moments and smiles and laughter.",
    footer_travel: "Travel",
    footer_europe: "Europe",
    footer_asia: "Asia",
    footer_australia: "Australia",
    footer_america: "America",
    footer_africa: "Africa",
    footer_aboutUs: "About us",
    footer_contact: "Contact",
    footer_termsAndConditions: "Terms and Conditions",
    footer_privacyPolicy: "Privacy Policy",
    footer_newsletter: "Newsletter",
    footer_newsletterDescription: "Subscribe to out newsletter and get inspired by our travelers ...",
    footer_newsletterPlaceholder: "email address",
    footer_rightsReserved: "All rights reserved.",
    favourites: "Favourites",
    cities: "Cities",
    hotels: "Hotels",
    website: "Website",
    email: "E-Mail",
    telephone: "Telephone",
    address: "Address",
    description: "Description",
    amenities: "Amenities",
    email_subject: "Request from C-Holidays",

};
KWM_Language.de = {
    welcomeMessage: "Willkommen bei C-Holiday",
    logout: "abmelden",
    login: "anmelden",
    password: "Passwort",
    username: "Benutzername",
    name: "Name",
    city: "Stadt",
    country: "Land",
    nickname: "Beiname",
    city_description: "Profil der Stadt",
    hotels_of_city: "Hotels in dieser Stadt",
    hotel_description: "Beschreibung des Hotels",
    price: "Preis",
    stars: "Sterne",
    header_tagline: "Dream. Explore. Discover.",
    header_subline: "Von A nach B mit C-Holiday",
    footer_text: "Die sch??nsten Dinge im Leben sind nicht irgendwelche Dinge. Es sind Menschen, und orte, Erinnerungen und Bilder. Es sind Gef??hle und Momente und l??cheln und lachen.",
    footer_travel: "Reisen",
    footer_europe: "Europa",
    footer_asia: "Asien",
    footer_australia: "Australien",
    footer_america: "Amerika",
    footer_africa: "Afrika",
    footer_aboutUs: "&Uuml;ber uns",
    footer_contact: "Kontakt",
    footer_termsAndConditions: "AGB",
    footer_privacyPolicy: "Datenschutzerkl??rung",
    footer_newsletter: "Newsletter",
    footer_newsletterDescription: "Abonnieren Sie unseren Newsletter und lassen Sie sich von unseren Reisenden inspirieren ...",
    footer_newsletterPlaceholder: "E-Mail Adresse",
    footer_rightsReserved: "Alle Rechte vorbehalten.",
    favourites: "Favoriten",
    cities: "St??dte",
    hotels: "Hotels",
    website: "Webseite",
    email: "E-Mail",
    telephone: "Telefon",
    address: "Adresse",
    description: "Beschreibung",
    amenities: "Ausstattung",
    email_subject: "Anfrage von C-Holidays",
};
KWM_Language.es = {
    welcomeMessage: "Bienvenidos a C-Holiday",
    logout: "desconexi??n",
    login: "acceso",
    password: "Contrase??a",
    username: "Usario",
    name: "Nombr??",
    city: "Ciudad",
    country: "Pa??s",
    nickname: "Apodo",
    city_description: "Descripci??n de la ciudad",
    hotels_of_city: "Hoteles en esta ciudad",
    hotel_description: "descripci??n del hotel",
    price: "Preci??",
    stars: "Stars",
    header_tagline: "Dream. Explore. Discover.",
    header_subline: "De A a B con C-Holiday",
    footer_text: "Las cosas m??s bellas de la vida no son s??lo cosas. Son personas, y lugares, recuerdos e im??genes. Son sentimientos, momentos, sonrisas y risas.",
    footer_travel: "Viaje",
    footer_europe: "Europa",
    footer_asia: "Asia",
    footer_australia: "Australia",
    footer_america: "Am??rica",
    footer_africa: "??frica",
    footer_aboutUs: "sobre nosotros",
    footer_contact: "Contacto",
    footer_termsAndConditions: "Condiciones de Contraci??n",
    footer_privacyPolicy: "Declaraci??n de Privacidad",
    footer_newsletter: "bolet??n electr??nico",
    footer_newsletterDescription: "Suscr??base a nuestro bolet??n y d??jese inspirar por nuestros viajeros ...",
    footer_newsletterPlaceholder: "direcci??n de mail",
    footer_rightsReserved: "Todos los derechos reservados.",
    favourites: "Favoritos",
    cities: "Ciudades",
    hotels: "Hotels",
    website: "Sitio web",
    email: "Correo Electr??nico",
    telephone: "tel??fono",
    address: "direcci??n",
    description: "descripci??n",
    amenities: "Servicios",
    email_subject: "Solicitud de C-Holidays",
};