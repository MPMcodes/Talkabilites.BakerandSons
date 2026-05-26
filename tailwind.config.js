/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C9A84C',
          dark: '#A8872E',
          light: '#E6CD84',
        },
        secondary: {
          DEFAULT: '#1B3265',
          dark: '#0F1E42',
          light: '#2E4D9E',
        },
        coral: {
          DEFAULT: '#E07B5A',
          light: '#F4A78C',
        },
        sky: {
          DEFAULT: '#7EB8D4',
          light: '#A9D4E8',
        },
        mint: '#8FD9C0',
        peach: '#FFCBA4',
        lavender: '#B8A9E0',
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
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-18px) translateX(6px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(22px) translateX(-10px)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '42% 58% 63% 37% / 42% 45% 55% 58%' },
          '33%': { borderRadius: '60% 40% 38% 62% / 56% 58% 42% 44%' },
          '66%': { borderRadius: '38% 62% 55% 45% / 60% 38% 62% 40%' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.6)' },
          '70%': { transform: 'scale(1.08)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%, 100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        marquee: 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 48s linear infinite',
        wiggle: 'wiggle 2.5s ease-in-out infinite',
        'pop-in': 'pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin-slow 22s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        wave: 'wave 12s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
