/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        container: '1144px',
      },
      colors: {
        primary: '#F40404',
        overlay: 'rgba(0, 0, 0, 0.60);',
        secondary: '#000',
        common: '#6C6C6C',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
