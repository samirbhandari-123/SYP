/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Pacifico" : ["Pacifico", 'sans-serif']
      }
    },
  },
  plugins: [],
}

