const defaultTheme = require("tailwindcss/defaultTheme");
const { fadeDurate } = require("./public/variables");

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include paths to your React components
  ],
  theme: {
    screens: {
      xxs: "0px",
      xs: "380px",
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        fadeOut: `fade ${fadeDurate}ms ease forwards`,
      },
    }, // Add custom Tailwind theme configurations here
  },
  plugins: [require("@tailwindcss/typography")], // Add custom Tailwind plugins here
};
