/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      mono: ["Share Tech Mono", "monospace"],
      serif: ["Merriweather", "serif"],
      sans: ["Source Sans Pro", "sans-serif"],
      display: ["Abril Fatface", "cursive"],
      photo: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
