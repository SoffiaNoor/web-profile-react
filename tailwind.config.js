/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yeseva: ['"Yeseva One"', 'cursive'],
        raleway: ['"Raleway"', 'sans-serif'],
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        hourglassS: {
          '0%': { color: 'transparent' },
          '40%': { color: '#f46b45', filter: 'drop-shadow(0 25px 25px rgba(219, 88, 52, 0.37))' },
          '60%': { color: '#ffe4c6', filter: 'drop-shadow(0 25px 25px rgba(255, 177, 156, 0.37))' },
        },
      },
      animation: {
        slidein300: "slidein 1s ease 300ms forwards",
        slidein500: "slidein 1s ease 500ms forwards",
        slidein700: "slidein 1s ease 700ms forwards",
        'typing': 'typing 4s steps(30) 1s 1 normal both, blinkCaret 0.75s step-end infinite',
        'zoomInText': 'zoomInText 1s ease-out',
        hourglassS: 'hourglassS 2s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}