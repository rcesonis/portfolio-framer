/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        deepBlue: '#000814',
        navyBlue: '#001d3d',
        oceanBlue: '#003566',
        sunYellow: '#FFC300',
        sunriseYellow: '#FFD60A',
        accentLightBlue: '#10A5E9',
      },
      fontFamily: {
        merriSans: ['Merriweather Sans', 'sans-serif'],
        workSans: ['Work Sans', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'logo-dark-mode': "url('./assets/logo-dark-mode.png')",
        'logo-light-mode': "url('./assets/logo-light-mode.png')",
        'curvy-dark-mode': "url('./assets/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('./assets/bg-curvy-light-mode.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
};
