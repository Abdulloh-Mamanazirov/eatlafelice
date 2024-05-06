/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        patua: "Patua, sans-serif",
      },
      colors: {
        primary: "#009132",
        secondary: "#e00018",
      },
      screens: {
        "md-lg": "900px",
      },
    },
  },
  plugins: [],
};
