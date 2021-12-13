const colors = require('tailwindcss/colors');
module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'app-background': '#f2f2f2',
        'modal-background': 'rgba(0, 0, 0, 0.4)',
        'main-color': {
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
  plugins: [],
};

