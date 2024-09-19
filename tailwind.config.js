/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "8rem",
    },
    extend: {
      colors: {
        primary: " #B88E2F",
        seconday: "#FFF3E3",
      },
    },
  },
  plugins: [],
};
