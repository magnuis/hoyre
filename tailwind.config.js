/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0065f1',
        primary_dark: '#114297',
        secondary: '#11265f',
        secondary_dark: '#041434',
        light: '#b5dafe',
        lighter: '#b5dafe52',
        gray: '#4B5563',
        light_gray: '#6B7280',
        lighter_gray: '#f5f5f5',
        dark_gray: '#111827',
        blue_200: '#8ac6fd',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
}
