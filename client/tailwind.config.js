/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        flexpa: {
          50: "#f5f8f7",
          100: "#dee9e6",
          200: "#bed1ce",
          300: "#95b3af",
          400: "#6f928f",
          500: "#557775",
          600: "#456361",
          700: "#384d4c",
          800: "#2f403f",
          900: "#2a3736",
          950: "#151e1e",
        },
      },
    },
  },
  plugins: [],
};
