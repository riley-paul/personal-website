const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: colors.gray["100"],
        secondary: colors.gray["200"],
        background: colors.slate["900"],
        background_secondary: colors.slate["700"],
      },
    },
    invert: "",
    fontFamily: {
      mono: ["Share Tech Mono", "monospace"],
      serif: ["Roboto Slab", "serif"],
      display: ["Abril Fatface", "cursive"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
