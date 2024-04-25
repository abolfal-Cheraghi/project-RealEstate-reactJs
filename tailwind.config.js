/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // color
    extend: {
      colors: {
        myGreen: {
          100: "#eaf7f4",
          200: "#07c196",
          300: "#00c194",
          400: "#00a376",
        },
        // myGreen: "07c196",
        myWhite: "#ffffff",
        black: "#212121",
        blue: "#082039",
        blueBG: "#0E2E50" ,
        gray1: "#70778b",
        gray2: "#F5F5F5",
        gray3: "#a2a2a2",
      },

      container: {
        padding: {
          DEFAULT: "1.5rem",
        },
      },

      spacing: {},

      fontSize: {
        fs10x: "0.625rem",
        fs18x: "1.125rem",
        fs22x: "1.375rem",
      },
    },
  },
  plugins: [],
};
