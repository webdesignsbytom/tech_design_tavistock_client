/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'shape-bg-1': "url('../assets/images/pages/background-wavy-lines.jpg')",
      },
      colors: {
        'main-bg': '#f7fafc', // Light
        'dark-main-bg': '#292929', // Dark
        'footer-colour': '#1F2937', // dark bluey
        'alt-colour': '#1f2937', // dark bluey
        'dark-alt-colour': '#121212', // dark bluey
        'text-main': '#77869a',
        'text-dark': '#212121', // Not dark mode
        'dark-text': '#949494', // dark mode
        'dark-text-light': '#e8e8e8', // dark mode
        'purple-main': '#9333ea',
        'yellow-main': '#ecc94b',
        'green-main': '#38a169',
        'purple-dark': '#553c9a',
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
        displaySmall: '1fr 3fr 1fr',
        a1a: 'auto 1fr auto',
        faf: '1fr 0.5fr 1fr',
      },
    },
  },
  plugins: [],
};
