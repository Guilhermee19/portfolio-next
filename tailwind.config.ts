import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
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
      }
    },
  },
  plugins: [],
}
export default config
