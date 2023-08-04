/* eslint-disable no-undef */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#E55E46",
          secondary: "#333333",
          neutral: "#ababab",
          "base-100": "#ffffff",
          info: "#ECF0F3",
          success: "#521647",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
