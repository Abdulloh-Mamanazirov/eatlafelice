/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        patua: "Patua, sans-serif",
      },
      colors: {
        primary: "#fcba2f",
      },
      screens: {
        "md-lg": "900px",
      },
    },
  },
  plugins: [],
};
