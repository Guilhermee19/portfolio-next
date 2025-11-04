/** @type {import('tailwindcss').Config} */
import textShadow from 'tailwindcss-textshadow'

module.exports = {
  darkMode: ["class"],
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
        'blue-dark': '#080c1b',
        'blue-light': '#e1eeff',
        main: '#0070ff', // ✅ ok
        secondary: '#00050B',
        label: '#fff',
        'label-dark': '#333131',
      },
      backgroundImage: {
        'room-tech': "url('/images/room_tech.png')", 
      },
      boxShadow: {
        scroll: '0 0 12px rgba(0, 112, 255, 0.6)',
      },
    },
  },
  plugins: [textShadow],
};

