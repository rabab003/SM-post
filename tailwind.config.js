// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Your custom colors
        primary: "#0095F6", // Instagram blue
        secondary: "#8E8E8E", // Gray
        accent: "#FF3040", // Red
      },
    },
  },
  plugins: [],
};
