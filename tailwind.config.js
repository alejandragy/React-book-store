/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '500':'500px',
      },
    },
    fontFamily:{
      'karla':['Karla', 'sans-serif'],
    },
  },
  plugins: [],
}