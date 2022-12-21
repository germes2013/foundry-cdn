import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

export default defineConfig({
  //замените на ваш домен
  site: "https://sweet-kitten-dcaa13.netlify.app",
  integrations: [tailwind(), svelte()],
});


