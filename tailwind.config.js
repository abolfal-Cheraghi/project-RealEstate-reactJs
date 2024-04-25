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
        gray1: "#70778b",
        gray2: "lightgray",
        gray3: "#a2a2a2",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "0rem",
          lg: "2rem",
          xl: "4rem",
          "2xl": "0rem",
        },
      },
    },
  },
  plugins: [],
};
