/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        'main-colour': '#4AAD37',
        'nav-colour': '#4AAD37',
        'dark-colour': '#1e293b',
        'footer-colour': '#1F2937',
        'alt-colour': '#1f2937',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateRows: {
        reg: 'auto 1fr',
        rev: '1fr auto',
      },
      gridTemplateColumns: {
        reg: 'auto 1fr',
        rev: '1fr auto',
        display: 'auto auto auto auto auto'
      },
    },
  },
  plugins: [],
};
