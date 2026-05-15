/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C9A84C',
          dark: '#A8872E',
        },
        secondary: {
          DEFAULT: '#1B3265',
          dark: '#0F1E42',
        },
        coral: '#E07B5A',
        sky: '#7EB8D4',
        cream: '#FFFDF5',
      },
      fontFamily: {
        heading: ['Quicksand', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
