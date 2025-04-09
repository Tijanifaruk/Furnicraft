
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#442073',  // Your existing color
        secondary: '#BD8BFF', // New custom color
        tertiary: '#6B32B5',
        special:'#CFAF62',
        Details:'#919191',
        purple:'#F5EDFF',
        lightestpurple : '#F9F5FF',
        foundationblack : '#5E5E5E',
        lightPurple:"#E6D3FF",
        lighterPurple:"#faf5ff",
        new :"#AA68FF",
        footer : "#562891"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Custom font
        playfair: ["Playfair Display", "serif"], 
      },
    },
  },
  plugins: [],
};