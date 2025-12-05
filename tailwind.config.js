/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        taupe: {
          light: "#f7f5f1",   // off-white taupe
          DEFAULT: "#e6e2dc", // soft beige/taupe
          dark: "#d4cec7",    // slightly warmer darker taupe
        },
        slateblue: {
          light: "#89a4c7",   // muted blue
          DEFAULT: "#557497", // your main slate blue
          dark: "#3b526d",    // deep slate blue
        },
      },
    },
  },
  plugins: [],
};
