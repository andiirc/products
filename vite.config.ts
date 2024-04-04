/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin(), tsconfigPaths()],
  build: {
    outDir: 'dist',
  },
  test: {
    globals: true,
    //setupFiles: ['./setupVitest.ts'],
    environment: 'jsdom',
    coverage: {
      reporter: ['html', 'json', 'text-summary'],
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        'node_modules',
        'dist',
        'coverage',
        'vite.config.ts',
        'jest.config.ts',
        'tsconfig.json',
        'tsconfig.paths.json',
        '.eslintrc.js',
        "src/*.{js,jsx,ts,tsx}",
        "src/app/*.{js,jsx,ts,tsx}",
        'src/shared/data/**',
        'src/shared/theme/**',
      ],
    },
  }
})
