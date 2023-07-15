import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['thirsty-rough-two', defaultTheme.fontFamily.sans],
        body: ['futura-pt', defaultTheme.fontFamily.sans],
        sans: ['futura-pt', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
