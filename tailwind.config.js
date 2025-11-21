/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D3623A',
        primaryLight: '#FF926B',
        primarySoft: '#FFBBA3',
        accentBlue: '#2BC3F5',
        accentBlueDark: '#039DE3',
        neutralDark: '#414857'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 18px 45px rgba(3,0,44,0.18)'
      },
      borderRadius: {
        '3xl': '1.5rem'
      }
    }
  },
  plugins: []
};



