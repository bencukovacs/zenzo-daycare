/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Vintage earthy palette matching your logo
        sage: {
          50: '#f6f7f6',
          100: '#e3e6e3',
          200: '#c7cdc8',
          300: '#a4aca6',
          400: '#7d887f',
          500: '#5f6b62',
          600: '#4a544c',
          700: '#3d453e',
          800: '#333833',
          900: '#2c2f2c',
        },
        terracotta: {
          50: '#fdf6f3',
          100: '#fbeae3',
          200: '#f6d2c2',
          300: '#efb397',
          400: '#e5886a',
          500: '#dc6846',
          600: '#cd5138',
          700: '#aa4130',
          800: '#88372e',
          900: '#6e302a',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf1e4',
          300: '#f6e5cc',
          400: '#f0d4a7',
          500: '#e8bf7a',
          600: '#dca54c',
          700: '#c08a2e',
          800: '#9e7129',
          900: '#815d26',
        }
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}