module.exports = {
  purge: {
    content:["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      'hover:text-react',
      'hover:text-nodejs',
      'hover:text-mongodb',
      'hover:text-javascript'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "fuscous-gray": {
        "50": "#f6f6f6",
        "100": "#eeeded",
        "200": "#d4d2d2",
        "300": "#b9b7b7",
        "400": "#858280",
        "500": "#514c4a",
        "600": "#494443",
        "700": "#3d3938",
        "800": "#312e2c",
        "900": "#282524",
      },
      zorba: {
        50: "#fafaf9",
        100: "#f6f5f4",
        200: "#e8e6e2",
        300: "#dbd6d1",
        400: "#bfb8af",
        500: "#a4998c",
        600: "#948a7e",
        700: "#7b7369",
        800: "#625c54",
        900: "#504b45",
      },
      "di-serria": {
        50: "#fcf9f6",
        100: "#f9f3ec",
        200: "#f1e2d0",
        300: "#e9d0b4",
        400: "#d8ad7c",
        500: "#c78a44",
        600: "#b37c3d",
        700: "#956833",
        800: "#775329",
        900: "#624421",
      },
      "harvest-gold": {
        50: "#fdfbf8",
        100: "#fbf7f1",
        200: "#f5ecdb",
        300: "#efe0c5",
        400: "#e4c99a",
        500: "#d8b26e",
        600: "#c2a063",
        700: "#a28653",
        800: "#826b42",
        900: "#6a5736",
      },
      "swiss-coffee": {
        50: "#fdfdfd",
        100: "#fbfbfb",
        200: "#f6f5f4",
        300: "#f0eeed",
        400: "#e5e2e0",
        500: "#dad5d2",
        600: "#c4c0bd",
        700: "#a4a09e",
        800: "#83807e",
        900: "#6b6867",
      },
      react: {
        DEFAULT: "#61DAFB"
      },
      nodejs: {
        DEFAULT: "#67A063"
      },
      mongodb: {
        DEFAULT: "#54B542"
      },
      javascript: {
        DEFAULT: "#F0DB4F"
      }
    },
    extend: {},
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
      text: ['hover']
    },
  },
  plugins: [],
};
