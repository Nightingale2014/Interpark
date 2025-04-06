// vite.config.js 예시
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
      ],
    },
  },
});
