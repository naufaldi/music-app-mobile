module.exports = {
  purge: ["./public/**/*.html", "./public/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkblue: "#1E1B2E",
      "darkblue-secondary": "#27293E",
      white: "#fff",
      "white-100": "hsla(0,0%,100%,0.5)",
      "white-300": "hsla(0,0%,100%,0.3)",
      "white-500": "hsla(0,0%,100%,0.1)",
      pink: {
        500: "#D44FF0",
      },
      purple: {
        500: "#882DEC",
        600: "#7623cf",
      },
      blue: {
        500: "#5185F5",
        600: "#4625E6",
      },
      red: {
        500: "#FF7E9D",
        600: "#CB0D3A",
      },
      orange: {
        500: "#FFA133",
        600: "#EC442D",
      },
      green: {
        500: "#22C55E",
        600: "#16A34A",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
