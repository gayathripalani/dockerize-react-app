import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin';
import VitePluginReactRemoveAttributes from 'vite-plugin-react-remove-attributes';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePluginReactRemoveAttributes({
      attributes: ['data-testid'],
    }),],
  server: {
    port: 3000
  }
})
