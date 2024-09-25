import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin , bytecodePlugin } from 'electron-vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
      },
    },
    plugins: [react()],
    server: {
      port: 8080,
      proxy: process.env.NODE_ENV === 'production'
        ? null // No usar proxy en producción
        : {
            '/api': {
              target: 'http://localhost:8000',
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, ''),
            },
          },
    }
    ,
  },
});
