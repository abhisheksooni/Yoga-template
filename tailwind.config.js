/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightBG:"#F5F0FF",
        DarkBG:"#14092A",
        text1:"#220953",
        // text1:"#220953",
      }
    },
  },
  plugins: [],
}