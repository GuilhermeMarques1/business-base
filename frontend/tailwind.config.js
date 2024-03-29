/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#1bda7e',
        purple: '#41167f'
      }
    }
  },
  plugins: []
}
