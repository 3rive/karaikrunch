import { defineConfig } from 'astro/config'; // ✅ Correct
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
});
