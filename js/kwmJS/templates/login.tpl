<div id="login">
    <h1 class="flex justify-center text-3xl font-semibold font-hero tracking-wide mx-auto pb-6 mt-4 text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-blue-300 dark:text-gray-100">
        <%>welcomeMessage<%></h1>
    <form class="w-full max-w-sm mx-auto">
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 text-left" for="inline-full-name">
                    <%>username<%>
                </label>
            </div>
            <div class="md:w-2/3">
                <input class="bg-gray-200 dark:bg-gray-300 dark:text-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none dark:focus:bg-gray-200 focus:bg-white focus:border-blue-500"
                       id="inline-full-name" type="text" placeholder="Jane Doe">
            </div>
        </div>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 text-left" for="inline-password">
                    <%>password<%>
                </label>
            </div>
            <div class="md:w-2/3">
                <input class="bg-gray-200 dark:bg-gray-300 dark:text-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-200 focus:border-blue-500"
                       id="inline-password" type="password" placeholder="******************">
            </div>
        </div>
        <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
                <button class="shadow bg-blue-400 hover:bg-blue-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded dark:bg-gray-500 dark:text-white dark:hover:bg-gray-600"
                        type="button" id="login-submit">
                    <%>login<%>
                </button>
            </div>
        </div>
    </form>
</div>