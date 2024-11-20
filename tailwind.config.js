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
      colors: {
        "purple-custom-100": "#dacffc",
        "purple-custom-500": "#7650dc",
        "yellow-custom-100": "#f9eee1",
        "yellow-custom-500": "#ffcb6b",
      },
    },
  },
  plugins: [],
};
