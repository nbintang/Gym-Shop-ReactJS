/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily : {
        'archivo': ['Archivo Black', 'sans-serif'],
        'nova' : ['Nova Square', 'sans-serif'],
        'fira-sans' : ['Fira Sans', 'sans-serif']
      },
      colors : {
        'white-cream' : '#EDF7FA',
      },
      
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
}

