<template>
        <!-- global container -->
        <div class="continer mx-auto">
        <div class="flex items-center justify-center min-h-screen bg-rose-500">
            <!-- card container -->
            <div class="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
                <!-- left side -->
                <div class="p-6 md:p-20">
                    <!-- top content -->
                    <h2 class="font-mono mb-5 text-4xl font-bold">Log In</h2>
                    <p class="max-w-sm mb-12 font-sans font-light text-gray-600">Log in to your account to upload or download pictures, videos, or music.</p>
                    <input class="w-full p-6 border border-gray-600 rounded-md placeholder:font-sans placeholder:font-light" type="text" placeholder="Enter your email address">

                    <!-- middle content -->
                    <div class="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                        <div class="font-thin text-cyan-700">Forgot password</div>
                        <button class="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-green-700 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
                            <span> Next </span>
                            <Icon class="inline" icon="material-symbols:arrow-forward" />
                        </button>
                    </div>

                    <!-- border -->
                    <div class="mt-12 border-b border-b-gray-300"></div>

                    <!-- bottom content -->
                    <p class="py-6 text-sm font-thin text-center text-gray-400">or log in with</p>

                    <!-- bottom buttons container -->
                    <div class="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
                        <button class="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                            <Icon class="inline" icon="logos:facebook" />
                            <span class="font-thin">Facebook</span>
                        </button>
                        <button class="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                            <Icon class="inline" icon="logos:google-icon" />
                            <span class="font-thin">Google</span>
                        </button>
                    </div>
                    <div class="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0 pt-4">
                        <button class="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                            <Icon class="inline" icon="octicon:mark-github-16" />
                            <span class="font-thin">Github</span>
                        </button>
                        <button class="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
                            <Icon class="inline" icon="logos:twitter" />
                            <span class="font-thin">Twitter</span>
                        </button>
                    </div>
                </div>
                <!-- right side -->
                <img class="w-[430px] hidden md:block rounded-r-2xl" src="/images/login-modal/images/image.jpg" alt="">

                <!-- close button -->
                <div class="group absolute -top-5 md:top-5 right-5 flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-rose-500 rounded-full hover:cursor-pointer">
                    <Icon class="w-6 h-6 text-rose-500 group-hover:text-white " icon="mdi:close-thick" />
                </div>
            </div>
        </div>
        </div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
components: {
                Icon,
            }
}
</script>

