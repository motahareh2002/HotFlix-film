module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
      extend: {
        colors:{
          'primary': '#f9ab00'
        }
      },
  },
  plugins: [require("@tailwindcss/forms")],
}
