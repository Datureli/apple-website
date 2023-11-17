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
      fontSize: {
        '7xxl': '17px', // Dodaj niestandardowy rozmiar czcionki '7xl'
      },
      colors: {
        'little-black': '#1d1d1f',
        'link': '#0066CC',
        'soft-grey': '#515154',
        ...colors
      },
    },
  },
  plugins: [
    require('@fortawesome/fontawesome-free/css/all.min.css'),
  ],
} 