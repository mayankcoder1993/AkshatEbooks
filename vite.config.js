import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Only scan the app entry. Generated offline HTML contains bundled source
  // and must not be treated as another development entry point.
  optimizeDeps: {
    entries: ['index.html'],
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: true,
  },
  preview: {
    host: true,
    port: 4173,
    allowedHosts: true,
  },
})
