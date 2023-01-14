// https://nuxt.com/docs/api/configuration/nuxt-config
// https://v3.nuxtjs.org/guide/directory-structure/nuxt.config/
import { resolve } from 'path'
// import SelectionColor from 'SelectionColor.js'
export default defineNuxtConfig({
    ssr: true,
    alias: {
        // https://v3.nuxtjs.org/docs/directory-structure/nuxt.config/#alias 
        "@": resolve(__dirname, '/'),
    },
    css: ['~/assets/css/tailwind.css'],
    vue: {
        compilerOptions: {
            isCustomElement: tag => tag.includes('-')
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        'nuxt-icon',
        'nuxt-directus',
        '@nuxtjs/supabase'
    ],
    supabase: {
      // OPTIONS
    },
    directus: {
        url: 'https://y4aazew4.directus.app/',
    },

    runtimeConfig: {
        // A PRIVATE KEY THAT IS ONLY AVAILABLE SERVER-SIDE
        apiSecret: '123',
        public: {
            directusUrl: process.env.DIRECTUS_URL,
        }
    },

    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    //   Currently still needed
    build: {
        transpile: ['@heroicons/vue', '@headlessui/vue'],
    },

    vite: {
        optimizeDeps: {
            include: [
                // '@heroicons/vue/20/solid',
                // '@heroicons/vue/24/solid',
                // '@heroicons/vue/24/outline',
                '@headlessui/vue',
                'vue',
                'pinia',
            ],
        },
    },

})

