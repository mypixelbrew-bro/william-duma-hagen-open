import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://williamduma.com.pg',
  output: 'static',
  adapter: vercel(),
  integrations: [react()],
  image: {
    domains: [],
  },
});
