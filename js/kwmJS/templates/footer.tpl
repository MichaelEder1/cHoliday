<div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 w-full dark:text-gray-100 dark:bg-gray-800">
    <div class="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div class="md:max-w-md lg:col-span-2">
            <a href="#"
               class="text-gray-600 transition-colors duration-300 hover:text-blue-400 font-hero no-underline dark:text-gray-100">C-Holiday</a>
            <div class="mt-4 lg:max-w-sm">
                <p class="text-sm text-gray-800 dark:text-gray-100">
                    <%>footer_text<%>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
            <div>
                <p class="font-semibold tracking-wide text-gray-800 dark:text-gray-100"><%>footer_travel<%></p>
                <ul class="mt-2 space-y-2">
                    <li>
                        <a href="#"
                           class="text-gray-600 dark:text-gray-100 transition-colors duration-300 hover:text-blue-400"><%>footer_europe<%></a>
                    </li>
                    <li>
                        <a href="#"
                           class="text-gray-600 dark:text-gray-100 transition-colors duration-300 hover:text-blue-400"><%>footer_asia<%></a>
                    </li>
                    <li>
                        <a href="#"
                           class="text-gray-600 dark:text-gray-100 transition-colors duration-300 hover:text-blue-400"><%>footer_america<%></a>
                    </li>
                    <li>
                        <a href="#"
                           class="text-gray-600 dark:text-gray-100 transition-colors duration-300 hover:text-blue-400"><%>footer_africa<%></a>
                    </li>
                    <li>
                        <a href="#"
                           class="text-gray-600 dark:text-gray-100 transition-colors duration-300 hover:text-blue-400"><%>footer_australia<%></a>
                    </li>
                </ul>
            </div>
            <div>
                <p class="font-semibold tracking-wide text-gray-800 dark:text-gray-100">C-Holiday</p>
                <ul class="mt-2 space-y-2">
                    <li>
                        <a href="#/favourites"
                           class="text-gray-600 dark:text-gray-100 transition-colors duration-300 hover:text-blue-400"><%>favourites<%></a>
                    </li>
                    <li>
                        <a href="#"
                           class="text-gray-600 dark:text-gray-100 transition-colors duration-300 hover:text-blue-400"><%>footer_aboutUs<%></a>
                    </li>
                    <li>
                        <a href="#"
                           class="text-gray-600 dark:text-gray-100 transition-colors duration-300 hover:text-blue-400"><%>footer_contact<%></a>
                    </li>
                    <li>
                        <a href="#"
                           class="text-gray-600 dark:text-gray-100 transition-colors duration-300 hover:text-blue-400"><%>footer_termsAndConditions<%></a>
                    </li>
                    <li>
                        <a href="#"
                           class="text-gray-600 dark:text-gray-100 transition-colors duration-300 hover:text-blue-400"><%>footer_privacyPolicy<%></a>
                    </li>
                </ul>
            </div>
            <div>
                <p class="font-semibold tracking-wide text-gray-800 dark:text-gray-100"><%>footer_newsletter<%></p>
                <ul class="mt-2 space-y-2">
                    <div>
                        <p class="text-sm text-gray-800 dark:text-gray-100">
                            <%>footer_newsletterDescription<%>
                    </div>
                    <input type="email" placeholder="<%>footer_newsletterPlaceholder<%>"
                           class=" p-2 border border-gray-800 dark:bg-gray-300 dark:text-gray-100 text-sm">
                </ul>
                <div class="mt-4" id="darkButton">
                        <button @click="darkMode = !darkMode" class="flex items-center rounded shadow bg-blue-400 hover:bg-blue-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded dark:bg-gray-500 dark:text-white dark:hover:bg-gray-600 transition w-max ring-blue-400px-4 focus:outline-none focus:ring-yellow-500">
                            <!-- Dark Mode icon -->
                            <svg x-show="darkMode" xmlns="http://www.w3.org/2000/svg" class="h-4 text-indigo-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                            </svg>
                            <!-- Light Mode icon -->
                            <svg x-show="!darkMode" xmlns="http://www.w3.org/2000/svg" class="h-4 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/>
                            </svg>
                            <span x-text="darkMode ? 'change to Light Mode':'change to Dark Mode'"></span>
                        </button>
                    </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col justify-between pt-3 pb-10 border-t sm:flex-row">
        <p class="text-sm text-gray-600 dark:text-gray-100">
            &copy; 2021 Michael Eder (S1910456008) <%>footer_rightsReserved<%>
        </p>
        <div class="inline flex items-center mt-4 space-x-4 sm:mt-0" id="language">
      <span href="#" class="cursor-pointer" data-language="de">
        <img src="img/austria.svg" class="w-6 h-4">
      </span>
            <span href="#" class="cursor-pointer" data-language="en">
        <img src="img/usa.svg" class="w-6 h-4">
      </span>
            <span class="cursor-pointer" data-language="es">
        <img src="img/spain.svg" class="w-6 h-4">
      </span>
        </div>
    </div>
</div>