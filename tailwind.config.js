/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    fontFamily: {
      'sans': ['"Ubuntu"', 'serif'],
      'headings': ['"Roboto Condensed"', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}