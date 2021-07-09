<div id="hotel_container">
    <div class="flex w-2/3 justify-end mx-auto">
        <button data-id="<&>id<&>"
                class="h-1/2 mt-2 font-bold uppercase text-sm px-3 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 favourite hotel single"
                type="button">❤
        </button>
    </div>
    <h1 class="text-4xl mb-4 flex justify-center text-center"><&>name<&></h1>
    <span class="mx-auto flex justify-center text-2xl mb-4"><&>stars<&></span>
    <p class="mx-auto flex justify-center w-2/3 text-xl mb-4"><&>description<&></p>
    <div id="hotel_description">
        <div class="text-xl">
            <img src="<&>image<&>" alt="<&>name<&>" class="flex justify-center w-2/3 mt-2 mb-3 mx-auto">
            <div id="hotel_gallery" class="md:flex w-2/3 mx-auto gap-4 md:overflow-hidden md:mb-4"></div>
            <iframe class="w-2/3 mx-auto h-60 mt-4 mb-4 border-0"
                    loading="lazy"
                    allowfullscreen
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCwq4FrSiv7FO0-7zU2qrWs2zuNWEkbKG0&q=<&>latitude<&>,<&>longitude<&>&zoom=11">
            </iframe>
            <div id="hotel_content" class="md:flex w-2/3 mx-auto gap-2">
                <div id="hotel_info_container"
                     class="rounded-md border-3 border-gray-700 bg-gradient-to-r from-green-50 via-blue-50 to-white w-full md:w-1/2 px-4 py-4 text-sm font-light md:text-base
                            dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800">
                    <p><span class="font-semibold"><%>address<%>: </span><&>address<&></p>
                    <span class="font-semibold"><%>website<%>: </span><a href="<&>website<&>" target="_blank"
                                                                         class="hover:text-blue-700 hover:underline dark:hover:text-blue-300"><&>website<&></a>
                    <br>
                    <span class="font-semibold"><%>telephone<%>: </span><a href="tel:<&>phone<&>"
                                                                         class="hover:text-blue-700 hover:underline dark:hover:text-blue-300"><&>phone<&></a>
                    <br>
                    <span class="font-semibold"><%>email<%>: </span><a
                        href="mailto:<&>email<&>?subject=<%>email_subject<%>"
                        class="hover:text-blue-700 hover:underline dark:hover:text-blue-300"><&>email<&></a>
                    <div id="amenities" class=""><span class="font-semibold"><%>amenities<%>:</span></div>
                    <p><span class="font-semibold"><%>price<%>:</span> <&>price<&></p>

                </div>
                <iframe class="w-full md:w-1/2 mt-3 md:mt-0"
                        loading="lazy"
                        allowfullscreen
                        src="https://www.google.com/maps/embed/v1/streetview?key=AIzaSyCwq4FrSiv7FO0-7zU2qrWs2zuNWEkbKG0&location=<&>latitude<&>,<&>longitude<&>">
                </iframe>
            </div>
        </div>
    </div>
</div>