import { defineConfig } from 'vite';
import soften from 'vite-plugin-soften';
export default defineConfig({
  plugins: [
    soften(),
  ]
})