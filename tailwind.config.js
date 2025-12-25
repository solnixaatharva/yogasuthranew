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
          DEFAULT: '#DC2C5C',
          dark: '#B21F49',
          mid: '#FF6BA9',
          light: '#FFD7E4'
        },
        accent: '#ED0B5A',
        coral: '#FFBFA3',
        neutral: {
          50: '#F9F9F9',
          100: '#F4F4F4',
          200: '#E5E7EB',
          300: '#9E9E9E',
          800: '#333333'
        },
        
        contrast: '#6B1229',
        success: '#4FBF9F'
      }
    },
  },
  plugins: [require("daisyui")],
}

