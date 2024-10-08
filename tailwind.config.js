/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary and Secondary color shades
        primary: "var(--primary)",           // اللون الأساسي
        "primary-dark": "var(--primary-dark)",  // اللون الأساسي الغامق
        "primary-light": "var(--primary-light)", // اللون الأساسي الفاتح

        secondary: "var(--secondary)",       // اللون الثانوي
        "secondary-dark": "var(--secondary-dark)", // اللون الثانوي الغامق
        "secondary-light": "var(--secondary-light)", // اللون الثانوي الفاتح
        custGray:"var(--custGray)",
        // Background and foreground colors
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        '5rem': '5rem',
        '1rem': '1rem',
      },
      container: {
        padding: {
          DEFAULT: '5rem', // Padding for larger screens (default)
          sm: '1rem',      // Padding for mobile screens
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-animated")],
};
