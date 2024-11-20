/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
      },
      gridTemplateColumns: {
        "custom-columns": "1fr 1fr 1fr 1fr",
        "custom-rows": "1fr 1fr 1fr",
      },
    },
  },
  plugins: [],
};
