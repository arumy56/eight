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

      
      
    ],
  },
  plugins: [require("daisyui")],
}

