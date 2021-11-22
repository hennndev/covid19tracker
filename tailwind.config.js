module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'cards': 'repeat(auto-fill, minmax(250px, 1fr))'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
