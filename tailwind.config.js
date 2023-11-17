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
      colors: {
        'little-black': '#1d1d1f',
        'link': '#0066cc',
        'soft-grey': '#515154'
      },
    },
  },
  plugins: [
    require('@fortawesome/fontawesome-free/css/all.min.css'),
  ],
} 