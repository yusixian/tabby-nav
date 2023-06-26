const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  darkMode: 'class', // https://tailwindcss.com/docs/dark-mode
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  important: '#__next',
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        xs: { max: '475px' },
        md: { max: '768px' },
        tablet: '640px',
        xl: '1366px',
        '2xl': '1366px',
      },
      text: {},
      colors: {
        primary: 'var(--primary)',
        accent: {
          default: 'var(--accent-100)',
          200: 'var(--accent-200)',
        },
        header: 'var(--bg-header)',
        text: {
          100: 'var(--text-100)',
          200: 'var(--text-200)',
        },
        bg: {
          100: 'var(--bg-100)',
          200: 'var(--bg-200)',
          300: 'var(--bg-300)',
          900: 'var(--bg-900)',
        },
      },
      backgroundImage: {
        gradient: 'var(--gradient-bg)',
        'gradient-pink': 'var(--gradient-pink)',
      },
      fontFamily: {
        poppins: 'var(--font-poppins)',
      },
    },
  },
  plugins: [],
});
