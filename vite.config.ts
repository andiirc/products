import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'src/main.tsx',
      },
    },
  },
  test: {
    coverage: {
      provider: 'instanbul',
      reporter: ['text', 'json', 'html'],
    },
  },
  plugins: [react(), splitVendorChunkPlugin(), tsconfigPaths()],
})
