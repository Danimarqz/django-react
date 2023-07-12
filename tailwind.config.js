/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "orange-button": "#ff561e"
      }
    },
  },
  plugins: [
    function ({addUtilities}) {
      const extendUnderline = {
        '.underline': {
          'text-decoration': 'underline',
          'text-decoration-color': "#ff561e",
        },
    }
    addUtilities(extendUnderline)
  } 
  ],
}

