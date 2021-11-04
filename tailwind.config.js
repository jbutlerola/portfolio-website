module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      mocha: {
        light: '#686261',
        DEFAULT: '#5E5857',
        dark: '#524D4B'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
