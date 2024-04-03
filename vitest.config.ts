import { defineConfig } from 'vitest/config';

export default defineConfig({    
  test: {
    globals: true,
    //environment: 'jsdom',
    coverage: {
      reporter: ['html', 'json', 'text-summary'],
      include: [ 
        'src/**/*.{js,jsx,ts,tsx}',
      ],
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
