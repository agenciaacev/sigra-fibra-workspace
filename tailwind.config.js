/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        siga: {
          primary:  '#27CAA3',
          secondary:'#03C2C3',
          dark:     '#062f2f',
          mid:      '#0a4545',
          light:    '#e0f9f6',
        }
      }
    },
  },
  plugins: [],
}
