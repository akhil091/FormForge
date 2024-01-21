/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'fira': ['Fira Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      screens: {
        'xs-mobile': '250px',
        'mobile': '320px',
      }
    },
  },
  plugins: [],
}

