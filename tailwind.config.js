/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#bcd3ff",
          300: "#8eb6ff",
          400: "#598bff",
          500: "#3366f5",
          600: "#1f48e0",
          700: "#1a39b8",
          800: "#1b3492",
          900: "#0f1f5c",
          950: "#0a1440",
        },
        accent: {
          400: "#ffc247",
          500: "#fbab0f",
          600: "#dd8a06",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,31,92,.06), 0 8px 24px rgba(15,31,92,.08)",
      },
    },
  },
  plugins: [],
};
