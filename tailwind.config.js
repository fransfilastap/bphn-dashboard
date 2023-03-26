const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-inter, "")', ...defaultTheme.fontFamily.sans],
        heading: ['var(--font-inter, "")', ...defaultTheme.fontFamily.mono],
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require("flowbite/plugin")]
}
