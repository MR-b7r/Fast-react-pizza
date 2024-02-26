/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: "Roboto Mono, monospace" },
    extend: {
      screens: {
        xs: "480px",
        xx: "380px",
      },
    },
  },
  plugins: [],
};
