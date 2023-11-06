/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        "black-1/2": "rgba(0,0,0,0.85)",
        "icarus-red": "#880807",
        "icarus-red-1/2": "rgba(136,8,7,0.5)",
        "gray-700-3/4": "rgba(55, 65, 81, 0.75)"
      },
    },
    screens: {
      sm: {'raw': '(min-width: 640px)'},
      md: "768px",
      lg: "1024px"
    }
  },
  plugins: [],
}