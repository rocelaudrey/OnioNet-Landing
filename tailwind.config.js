/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Global default font
      },
      colors: {
        primary: "#921573", // 👉 You can now use bg-primary, text-primary, etc.

        purple: {
          DEFAULT: "#921573",
          50: "#f9e7f0",
          100: "#f4d1e3",
          200: "#e5a5c7",
          300: "#d278a9",
          400: "#be4c8d",
          500: "#a93574",
          600: "#921573",
          700: "#78125d",
          800: "#5d0e48",
          900: "#3d0930",
        },

        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
