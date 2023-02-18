/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        pop: ['var(--font-poppins)', ...fontFamily.sans],
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
          '50%': { transform: 'scale(1.5)' },
        },
      },
      animation: {
        rotate: 'rotate 5s infinite',
      },
    },
  },
  plugins: [],
}
