/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#151592',
      'grey-dark': '#696969',
      'grey-light': '#e5e7eb',
      white: '#fcfbfa',
      lavender: '#7e3af2',
      'lavender-hover': '#6C2BD9',
      red: '#e02424',
      grey: '#eceff1',
    },
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
      screens: {
        xs: { min: '480px' },
        xsmax: { max: '480px' },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.before-element': {
          position: 'relative',
        },
        '.before-element::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '25px',
          height: '3px',
          backgroundColor: 'rgb(126, 58, 242)',
        },
      })
    },
  ],
}
