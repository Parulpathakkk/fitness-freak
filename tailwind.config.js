/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {  fontFamily: {
      inter: ["Inter, monospace"],
      mont: ["Montserrat,  sans-serif"],
      unbounded: ["Unbounded,  sans-serif"],
    }},
  },
  plugins: [],
}

