/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        'main-bg': '#f7fafc',
        'dark-colour': '#1e293b',
        'footer-colour': '#1F2937',
        'alt-colour': '#1f2937',
        'text-main': '#77869a',  
        'text-alt': '#9333ea',  
        'yellow-1': '#ecc94b',  
        'green-1': '#38a169',  
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateRows: {
        reg: 'auto 1fr',
        rev: '1fr auto',
        a1a: 'auto 1fr auto',
      },
      gridTemplateColumns: {
        reg: 'auto 1fr',
        rev: '1fr auto',
        display: 'auto auto auto auto auto',
        displaySmall: '1fr 3fr 1fr'
      },
    },
  },
  plugins: [],
};
