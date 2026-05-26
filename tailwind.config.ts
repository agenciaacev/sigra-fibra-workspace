import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        siga: {
          primary: '#27CAA3',
          secondary: '#03C2C3',
          dark: '#062f2f',
          mid: '#0a4545',
          light: '#e0f9f6',
        },
      },
    },
  },
  plugins: [],
}

export default config
