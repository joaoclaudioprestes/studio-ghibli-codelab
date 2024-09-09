/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#F1A5B1",
        dark: {
          100: "#0B0A0A",
          200: "#FFFFFF",
        },
        ...colors,
      },
      fontFamily: {
        anda: ["Andada Pro", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
