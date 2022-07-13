import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind({
      config: { applyAstroPreset: false, applyBaseStyles: true },
    }),
  ],
  site: "https://risgar.github.io/",
})