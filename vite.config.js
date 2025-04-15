import { defineConfig } from 'vite';
import { resolve } from 'path';
import eslint from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  publicDir: 'public',
  root: './',
  resolve: {
    extensions: ['.js', '.ts'],
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
          return null;
        },
      },
    },
    minify: 'esbuild',
  },
  plugins: [
    eslint({
      cache: false,
      fix: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Contrast Report',
        short_name: 'Contrast Report',
        description:
          'Straightforward contrast checking with Picture-in-Picture mode.',
        theme_color: '#ffffff',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        screenshots: [
          {
            src: 'screenshots/screenshot-1.png',
            type: 'image/png',
            sizes: '1366x768',
            form_factor: 'wide',
          },
          {
            src: 'screenshots/screenshot-2.png',
            type: 'image/png',
            sizes: '1366x768',
            form_factor: 'wide',
          },
        ],
        icons: [
          {
            src: 'icons/icon-48x48.webp',
            sizes: '48x48',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-72x72.webp',
            sizes: '72x72',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-96x96.webp',
            sizes: '96x96',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-128x128.webp',
            sizes: '128x128',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-144x144.webp',
            sizes: '144x144',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-152x152.webp',
            sizes: '152x152',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-192x192.webp',
            sizes: '192x192',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-256x256.webp',
            sizes: '256x256',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-384x384.webp',
            sizes: '384x384',
            type: 'image/webp',
          },
          {
            src: 'icons/icon-512x512.webp',
            sizes: '512x512',
            type: 'image/webp',
          },
        ],
      },
    }),
  ],
});
