/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "300": "300px",
        "350": "350px",
        "400": "400px"
      },
      boxShadow: {
        "outer": "0 0 5px -1px #374151",
        "bottom": "0px 8px 2px -8px #334155"
      },
      borderWidth: {
        "1": "1px"
      }
    },
  },
  plugins: [],
}

