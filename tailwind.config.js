const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "cod-gray": {
          DEFAULT: "#191919",
          50: "#757575",
          100: "#6B6B6B",
          200: "#565656",
          300: "#424242",
          400: "#2D2D2D",
          500: "#191919",
          600: "#0D0D0D",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        "texas-rose": {
          DEFAULT: "#FFA858",
          50: "#FFFFFF",
          100: "#FFFDFB",
          200: "#FFE8D2",
          300: "#FFD3AA",
          400: "#FFBD81",
          500: "#FFA858",
          600: "#FF8B20",
          700: "#E76F00",
          800: "#AF5400",
          900: "#773900",
          950: "#5B2B00",
        },
      },
    },
  },
  plugins: [nextui()],
};
