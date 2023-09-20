/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary-red': '#EA5454',
        'primary-blue': '#44D3D2',
        'primary-orange': '#FCAE4A',
        'primary-dark-blue': '#549EF2',
        'primary-dark': '#4D4F62'
      }
    },
  },
  plugins: [],
}

