// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'], // adjust paths to your project
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],  // 👈 custom font family
        poppins: ['Poppins', 'sans-serif'], // add Poppins
      },
    },
  },
  plugins: [],
}
