/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {   
      fontFamily: {
      },
    colors: {
      blueText: '#033649',
      blueButton: '#004e64',
    },},
  },
  plugins: [],
}