/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#c542f5',
          200: '#9e35c4',
          300: '#6d2487',
          400: '#331040'
        }
      }
    },
  },
  plugins: [],
  darkMode: 'media',
}
