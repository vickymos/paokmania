/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    fontFamily: {
      'sans': ['"Ubuntu"', 'serif'],
      'headings': ['"Roboto Condensed"', 'serif'],
    },
    extend: {
      colors:{
        gold: '#ab884a'
      }
    },
   
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}