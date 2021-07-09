<div id="city_container">
    <div class="flex w-2/3 justify-end mx-auto">
        <button data-id="<&>id<&>"
                class="h-1/2 mt-2 font-bold uppercase text-sm px-3 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 favourite city single"
                type="button">❤
        </button>
    </div>
    <h1 class="text-4xl mb-3 flex justify-center"><&>name<&></h1>
    <p class="text-xl flex justify-center mb-4 mx-auto italic font-semibold">"<&>nickname<&>"</p>
    <div id="city_description">
        <div class="text-xl">
            <img src="<&>image<&>" alt="<&>name<&>" class="flex justify-center w-2/3 mt-2 mb-3 mx-auto">
            <div id="city_info_container" class="mx-auto py-4 w-2/3">
                <p><b><%>city<%>: </b> <&>name<&></p>
                <p><b><%>country<%>: </b> <&>country<&></p>
                <p><b><%>nickname<%>: </b> <&>nickname<&></p>
            </div>
        </div>
    </div>
    <div class="h-60">
        <iframe class="dark:filter dark:grayscale-1 w-2/3 h-60 border-0 mt-4 mx-auto"
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCwq4FrSiv7FO0-7zU2qrWs2zuNWEkbKG0&q=<&>name<&>">
        </iframe>
    </div>
    <h2 class="text-3xl flex justify-center mt-5 mx-auto"><%>hotels_of_city<%></h2>
    <div id="hotels_of_city" class="flex"></div>
</div>