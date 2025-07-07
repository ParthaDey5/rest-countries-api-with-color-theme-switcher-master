import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/rest-countries-api-with-color-theme-switcher-master/",

  plugins: [
    react(),
    tailwindcss()
  ],
});
