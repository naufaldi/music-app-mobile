module.exports = {
  purge: ["./public/**/*.html", "./public/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkblue: "#1E1B2E",
      'darkblue-secondary': "#27293E",
      white: "#fff",
      pink: {
        500: "#D44FF0",
      },
      purple: {
        500: "#882DEC",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
