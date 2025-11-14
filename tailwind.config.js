/** @type {import('tailwindcss').Config} */

import tailwindcssAnimated from 'tailwindcss-animated';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"], 
      },
      colors: {
      },
    },
  },
  plugins: [
    tailwindcssAnimated
  ],
}