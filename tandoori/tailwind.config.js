/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        Textpos1:["Indie Flower","sans-serif"],

      },
      colors: {
        'poster_color':'#FFCA60'
      }
    },
  },
  plugins: [],
};

