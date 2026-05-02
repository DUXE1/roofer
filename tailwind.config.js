/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'surface-dark': '#0f1419',
        'cta': '#ff6b35',
        'accent': '#ff6b35',
        'background': '#0a0e13',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'float-up': 'floatUp 0.6s ease-out forwards',
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(135deg, rgba(15, 20, 25, 0.8), rgba(10, 14, 19, 0.9))',
      },
    },
  },
  plugins: [],
}
