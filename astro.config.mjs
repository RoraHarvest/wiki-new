import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://wiki.ultramarine-linux.org',
  integrations: [
  // Enable Preact to support Preact JSX components.
  preact(), mdx()],
  site: `https://astro.build`
});