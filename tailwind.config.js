/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // fontSize: {
    //   xxs: '0.6rem',
    // },
    fontFamily: {
      sans: ['neue-haas-grotesk-text', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'gray': '#CCCCCC',
        'lightgray': '#EFEFEF',
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        'blue-500': '#2276FC',
        'yellow-100': '#fef7da',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        min: '0.15px',
      },
      lineHeight: {
        extratight: 1.125,
        tight: 1.2,
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
        16: '4rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        20: '5rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      minHeight: {
        fill: 'calc(100vh - 117px)'
      }, 
      fontSize: {
        videohero: 'clamp(1.5rem, 0.352rem + 3.6735vw, 6rem)',
        projecttext: 'clamp(1.5rem, 0.926rem + 1.8367vw, 3.75rem)'
      }
    },
  },
  plugins: [],
}
