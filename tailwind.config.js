const colors = require('tailwindcss/colors')
module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        
        'app-background': '#e6e6e6',
        'main-color': {
          '300': '#126887',
          '400': '#178bb5',
          '500': '#33B5E5'
        },
        transparent: 'transparent',
        gray: colors.blueGray,
        yellow: colors.amber,
        red: colors.red,
        green: colors.emerald,
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio')
    // , require('@tailwindcss/forms')
    // , require('@tailwindcss/line-clamp')
    //  require('@tailwindcss/typography')
  ],
};

