/** @type {import('tailwindcss').Config} */
export default {
   important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        black: {
          900: '#000000',
          800: '#070707',
          700: '#090808',
        },
        white: {
          DEFAULT: '#ffffff',
          'a700': '#ffffff',
        },
        gray: {
          100: '#f6f6f6',
          300: '#d9d9d9',
          400: '#c2c2c2',
          500: '#767676',
          600: '#525252',
          700: '#3d3d3d',
        },
        blue_gray: {
          100: '#d3d5d8',
          800: '#3d4b66',
        },
        red: {
          500: '#ff0000',
          'vermilion': '#e34234',
        },
      },
      fontFamily: {
        'neue-montreal': ['Neue Montreal', 'sans-serif'],
        'helvetica-neue': ['Helvetica Neue', 'sans-serif'],
        'coolvetica': ['Coolvetica', 'sans-serif'],
        'degular': ['Degular Demo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}