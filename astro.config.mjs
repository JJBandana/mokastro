// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://jjbandana.github.io',
  outDir: "./docs",
  output: "static",
  build: {
    assets: "astro"
  }
});
