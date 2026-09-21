import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './',
  define: {
    'import.meta.env.VITE_BOOK_ID': JSON.stringify(process.env.BOOK_ID || ''),
    'import.meta.env.VITE_EDITION_ID': JSON.stringify(process.env.EDITION_ID || ''),
  },
  build: {
    outDir: 'single-build',
    emptyOutDir: true,
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
})
