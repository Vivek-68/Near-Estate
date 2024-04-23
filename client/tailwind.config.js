/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lilac':'#6D63E8',
        'grey':'#9E9E9E',
        'notwhite':'#FAFAFA',
      },
    },
  },
  plugins: [],
}