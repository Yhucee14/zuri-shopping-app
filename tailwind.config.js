/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans', 'sans-serif'],
      },
      colors: {
        green: '#69F0AE',
        blue: '#1B6392',
        white: '#FFFFFF',
        black: '#1D1D1D',
        grey: '#A4A4A4',
        deepBlue: '#0C239E'
      },
      screens: {
        xx: "320px",
        xs: "412px",
        ss: "620px",
        sm: "768px",
        md: "1020px",
        lg: "1400px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}
