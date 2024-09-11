/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'K2D': ['K2D', 'sans-serif'], 
      // "K2D", sans-serif;
    },
    extend: {
      // clipPath: {
      //   'custom-polygon': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      // },
    },
  },
  plugins: [
    require('daisyui'),
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     '.clip-polygon': {
    //       clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    //     },
    //   };

    //   addUtilities(newUtilities);
    // },
  ],
}

