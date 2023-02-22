/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.html'],
  theme: {

    extend: {
      screens: {
        '2xl':'2130px',
        'lg':'1130px'
      },
      colors: {
        'header-hero': '#fbf8f3',
        'blue-section': '#d7f5f5',
        'yellow-section': '#fbf8f3',
        'p-color': '#737373',
        'logo-color': '#3180f5'
      },
      fontFamily: {
      'inter': ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'hero-mobile': "url('/assets/hero-image-desktop.png')",
        'hero-tablet': "url('/assets/hero-image-tablet.png')"
      },
    },
  },
  plugins: [],
}
