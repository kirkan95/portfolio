/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#b83c2e",
        paper: "#f8f6f1",
      },
    },
  },
  plugins: [],
};
