/** @type {import('tailwindcss').Config} */
import textShadow from 'tailwindcss-textshadow'

module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'chakra-petch': ['var(--font-chakra-petch)'],
      },
      colors: {
        main: '#0270FF', // ✅ ok
        secondary: '#00050B',
        label: '#fff',
      },
      backgroundImage: {
        'room-tech': "url('/images/room_tech.png')", 
      },
      boxShadow: {
        scroll: '0 0 12px rgba(2, 112, 255, 0.6)',
      },
    },
  },
  plugins: [textShadow],
};

