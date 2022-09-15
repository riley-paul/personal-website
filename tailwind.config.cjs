/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      mono: ["Fira Code", "monospace"],
      serif: ["Roboto Slab", "serif"],
      sans: ["Source Sans Pro", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
