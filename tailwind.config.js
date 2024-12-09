/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#27272a',
      'grey-dark': '#696969',
      'grey-light': '#e5e7eb',
      white: '#fcfbfa',
      lavender: '#7e3af2',
      red: '#e02424',
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
  plugins: [],
}
