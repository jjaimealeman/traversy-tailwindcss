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
      // animate-rainbow bg-clip-text text-transparent whitespace-pre pr-2 bg-gradient-to-b from-red-600 to-sky-700
      keyframes: {
        rainbow: {
          from: {
            filter: "hue-rotate(0deg)",
          },
          to: {
            filter: "hue-rotate(-360deg)",
          },
        },
      },
      animation: {
        rainbow: "rainbow 3s ease infinite",
      },
      colors: {
        // LoopStudios
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue1: 'hsl(201, 11%, 66%)',
        // Shortly
        cyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%) ',
        // Fylo
        darkBlue: 'hsl(217, 28%, 15%)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 18%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(1, 100% 63%)',
        // Bookmark
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)',
      },
      fontFamily: {
        // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
        bold: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
        // NEW FONTS: Architect Daughter and Be Vietnam
        arch: ['Architects Daughter', 'cursive'],
        viet: ['Be Vietnam Pro', 'sans-serif'],
        beba: ['Bebas Neue', 'cursive'],
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
