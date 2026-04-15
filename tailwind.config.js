/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a8a4ff',
        'primary-dim': '#675df9',
        secondary: '#62fae3',
        'secondary-dim': '#50ebd5',
        tertiary: '#ac8aff',
        accent: '#6C63FF',
        background: '#060e20',
        surface: '#060e20',
        'surface-bright': '#1f2b49',
        'surface-variant': '#192540',
        'surface-container': '#0f1930',
        'surface-container-low': '#091328',
        'surface-container-high': '#141f38',
        'surface-container-highest': '#192540',
        'on-surface': '#dee5ff',
        'on-surface-variant': '#a3aac4',
        outline: '#6d758c',
        'outline-variant': '#40485d',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spinReverse 15s linear infinite',
        'pulse-dot': 'pulse 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        spinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        '3xl': '60px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
