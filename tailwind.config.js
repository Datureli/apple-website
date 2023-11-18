module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  mode: 'jit',  
  theme: {
    extend: {
      fontFamily: {
        sans: ['SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'little-black': '#1d1d1f',
        'link': '#0066CC',
        'soft-grey': '#515154',
      },
    },
  },
  plugins: [
    require('@fortawesome/fontawesome-free/css/all.min.css'),
  ],
} 