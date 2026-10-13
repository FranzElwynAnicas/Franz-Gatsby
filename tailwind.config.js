/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pocketBlack: "#000000",
        pocketWhite: "#FFFFFF",
        pocketGrey: "#526E87",
        pocketYellow: "#FCBE17",
        pocketTeal: "#179CBD",
        pocketLightGrey: "#E6E6E6",
        pocketCyan: "#32D6FF",
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        pocket: "1440px",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};