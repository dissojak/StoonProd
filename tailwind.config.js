/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        myYellow: "#ffc44d",
        myYellowHover: "#ffb833", // Hover state for myYellow
        myGreen: "#40bfbb",
        myGreenHover: "#38a29f", // Hover state for myGreen
        myGreenDark: "#318a87",
        myGreenDarkenHover: "#297370", // Hover state for myGreenDarken
        myRed: "#f65893",
        myRedHover: "#e64e87", // Hover state for myRed
        myBleu: "#4b9be2",
        myBleuHover: "#3b88d1", // Hover state for myBleu
        myOrange: "#FFB244",
        myOrangeHover: "#ffa330", // Hover state for myOrange
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        slide: "slide 35s linear infinite", // Custom slide animation
        "slide-xl": "slide 35s linear infinite",
        "slide-lg": "slide 30s linear infinite",
        "slide-md": "slide 20s linear infinite",
        "slide-sm": "slide 10s linear infinite",
        "slide-xs": "slide 6s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)", // Moves the logos from right to left
          },
        },
      },
    },
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "1024px",
      // => @media (min-width: 1024px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
      xl: "1920px",
    },
  },
  plugins: [],
};
