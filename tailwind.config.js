/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        fondo: "linear-gradient(to right from-orange-400 to-rose-400)",
      },
    },
  },
  plugins: [],
};
