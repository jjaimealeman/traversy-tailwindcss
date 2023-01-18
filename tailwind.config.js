const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./nuxt.config.{js,ts}`,
  ],
  theme: {
    // Screen setup for ALL Traversy projects.
    // screens: {
      // sm: '480px',   // 640px
      // md: '768px',   // 768px
      // lg: '976px',   // 1024px
      // xl: '1440px'   // 1280px
    // },
    extend: {
      colors: {
        veryDarkBlue: 'hsl(229, 31%, 21%)',
      },
      fontFamily: {
        // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
        bold: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        widest: '0.3em'
      },
      spacing: {
        180: '32rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-debug-screens'),
  ],
}
