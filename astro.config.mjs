import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), alpinejs(), react()],
  site: "https://rileypaul.ca",
});
