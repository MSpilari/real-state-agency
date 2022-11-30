/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      '3xsm': '320px',
      '2xsm': '375px',
      xsm: '425px',
      ...defaultTheme.screens
    },
    extend: {}
  },
  plugins: []
}
