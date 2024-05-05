/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
      boxShadow: {
        custom: "0px 12px 16px 0px #28293D09",
      },
    },
  },
  plugins: [],
};
