/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      
      
      
      "luxury",
      "retro",
      "cupcake",
      "winter",
      "fantasy"

      
      
    ],
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
}

