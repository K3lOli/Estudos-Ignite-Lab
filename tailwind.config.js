/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      black : '#000',
      white : '#fff',
      transparent: 'transparent',

      gray: {
        900 : '#121214',
        800 : '#202024',
        400 : '#7c7c8a',
        100 : '#e1e1e6',
        200 : '#c4c4cc',
      },

      cyan: {
        500 : '#81d8f7',
        300 : '#b2ebff',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}

