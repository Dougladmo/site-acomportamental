const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
        'quicksand': ['Quicksand', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};