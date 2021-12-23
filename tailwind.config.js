const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        lg: "0 0px 20px -10px rgba(0, 0, 0, 0.02), 0 4px 7px -4px rgba(0,0,0,0.2)",
      },
      colors: {
        transparent: "transparent",
        beige: "#faf4d3",
        gold: "#D1AC00",
        peach: "#F6BE9A",
        "dark-green": "#004643",
        black: "#0C1618",
        "light-grey": "#FAFAFA",
      },
      fontFamily: {
        sans: ["Cabin", "Times New Roman", ...defaultTheme.fontFamily.sans],
        serif: ["Limelight", ...defaultTheme.fontFamily.serif],
      },
    },
    container: {
      center: true,
    },
  },
};
