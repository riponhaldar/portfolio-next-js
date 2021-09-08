const plugin = require('tailwindcss/plugin');
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        lora: "'Lora', serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.empty-content': {
          content: "''",
        },
      };
      addUtilities(newUtilities, {
        variants: ['before', 'after'],
      });
    }),
  ],
};
