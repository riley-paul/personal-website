import { radixThemePreset } from 'radix-themes-tw';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  presets: [radixThemePreset],
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
