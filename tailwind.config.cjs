/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      mono: ["Share Tech Mono", "monospace"],
      serif: ["Roboto Slab", "serif"],
      display: ["Abril Fatface", "cursive"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
