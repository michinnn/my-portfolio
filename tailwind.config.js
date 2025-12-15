/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette1: '#3C3333'
,       palette2: '#764D4D'
,       palette3: '#B39594'
,       palette4: '#C1C1C1'
,       palette5: '#FFFFFF'
      },
      fontFamily: {
        varela: ['"Varela Round"', 'sans-serif'],
    },
  },
  plugins: [],
}
}