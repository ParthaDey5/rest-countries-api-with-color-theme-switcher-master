/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],

  darkMode: 'class',

  theme: {
    extend: {
      transitionProperty: {
        colors: 'background-color, border-color, color, fill, stroke',
      },
      opacity: {
        65: '0.65',
      },
      boxShadow: {
        custom:  '0px 0px 10px 3px rgba(0, 0, 0, 0.1)',
        custom2: '0px 0px 1dvw 1px rgba(0, 0, 0, 0.1)',
      },
    },
  },

  plugins: [],
}
