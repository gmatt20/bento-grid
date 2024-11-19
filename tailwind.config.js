/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
      },
      gridTemplateColumns: {
        "custom-columns": "1fr 3fr 1fr",
      },
    },
  },
  plugins: [],
};
