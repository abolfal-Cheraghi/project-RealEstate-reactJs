/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // color
    extend: {
      colors: {
        // green: {
        //   100: "#eaf7f4",
        //   200: "#07c196",
        //   300: "#00c194",
        //   400: "#00a376",
        // },
        green: "07c196",
        darkme: "#212121",
        blue: "#082039",
        gray1: "#70778b",
        gray2: "lightgray",
        gray3: "#a2a2a2",
      },
    },
    container: {
      center: "true",
    },
  },
  plugins: [],
};
