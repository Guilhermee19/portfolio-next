/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
      }
    },
  },
  plugins: [],
};

