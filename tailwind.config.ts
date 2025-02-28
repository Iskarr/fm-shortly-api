module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        xl: "1440px",
      },
      colors: {
        teal: {
          500: "#2acfcf",
          600: "#27bcbc",
        },
        indigo: {
          900: "#3b3054",
        },
        gray: {
          100: "#f0f1f6",
          900: "#232127",
        },
      },
    },
  },
  plugins: [],
};
