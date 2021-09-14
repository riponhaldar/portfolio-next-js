const plugin = require('tailwindcss/plugin');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
        cormorant: "'Cormorant', serif",
        montserrat: "'Montserrat', sans-serif",
        playfair: "'Playfair Display', serif",
        source: "'Source Sans Pro', sans-serif",
        poppins: "'Poppins', sans-serif",
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
