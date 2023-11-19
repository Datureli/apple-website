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
        's2condPurple': '#a32eff',
        'little-black': '#1d1d1f',
        'link': '#0066CC',
        'soft-grey': '#515154',
      },
    },
  },
  safelist: [
    {
      pattern:
        /(bg|text|border)-(text-link|text-little-black)/,
    },
  ],
  plugins: [
    require('@fortawesome/fontawesome-free/css/all.min.css'),
  ],
} 