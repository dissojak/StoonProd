/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        myYellow: "#ffc44d",
        myGreen: "#40bfbb",
        myGreenDarken: "#318a87",
        myRed: "#f65893",
        myBleu: "#4b9be2",
        myOrange: "#FFB244",
        onyx: "hsl(240, 1%, 17%)",
        jet: "hsl(0, 0%, 22%)",
        eerieBlack1: "hsl(240, 2%, 13%)",
        eerieBlack2: "hsl(240, 2%, 12%)",
        smokyBlack: "hsl(0, 0%, 7%)",
        vegasGold: "hsl(209, 36%, 55%)",
        bittersweetShimmer: "hsl(0, 43%, 51%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "custom-1": "-4px 8px 24px hsla(0, 0%, 0%, 0.25)",
        "custom-2": "0 16px 30px hsla(0, 0%, 0%, 0.25)",
        "custom-3": "0 16px 40px hsla(0, 0%, 0%, 0.25)",
      },
      transitionTimingFunction: {
        "custom-1": "0.25s ease",
        "custom-2": "0.5s ease-in-out",
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
    },
  },
  plugins: [],
};
