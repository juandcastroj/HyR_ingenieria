/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {   
      fontFamily: {
        TTmilks: ["TTmilks", "ui-sans-serif"], 
        BubbleboddyNeue: ["BubbleboddyNeue", "ui-sans-serif"], 
        OpunMai: ["OpunMai", "ui-sans-serif"], 
      },
    colors: {
      blueText: '#033649',
      blueButton: '#004e64',
    },},
  },
  plugins: [],
}