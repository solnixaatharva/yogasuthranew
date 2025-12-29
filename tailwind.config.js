/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#DC2C5C",
          dark: "#B21F49",
          mid: "#FF6BA9",
          light: "#FFD7E4",
        },

        // your new orange base (kept as a color token)
        sun: {
          DEFAULT: "#FF8B4B",
          mid: "#FF8B4B",
          dark: "#FF8B4B",
        },

        cream: {
          DEFAULT: "#EFE6D0",
          mid: "#E9DEC7",
          dark: "#D8C9A4",
        },

        accent: "#ED0B5A",
        coral: "#FFBFA3",

        neutral: {
          50: "#F9F9F9",
          100: "#F4F4F4",
          200: "#E5E7EB",
          300: "#9E9E9E",
          800: "#333333",
        },

        contrast: "#6B1229",
        success: "#4FBF9F",
      },

      // NEW: dark + shiny gradient utility
      backgroundImage: {
        // Dark orange base + glossy overlay highlight (stacked gradients)
        // Use via: className="bg-sun-shiny"
        "sun-shiny":
          "linear-gradient(to bottom, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 35%, rgba(0,0,0,0.22) 100%), linear-gradient(90deg, #8F1A12 0%, #B23A1C 45%, #D75A1A 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
