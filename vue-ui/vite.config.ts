import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      vue(),
      createHtmlPlugin({
        entry: '/src/main.ts',
        minify: true
      }),
      AutoImport({
        resolvers: [TDesignResolver({
          library: 'vue-next'
        })],
      }),
      Components({
        resolvers: [TDesignResolver({
          library: 'vue-next'
        })],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('src', import.meta.url))
      },
    },
    server: {
      host: env.VITE_SERVER_HOST,
      port: parseInt(env.VITE_SERVER_PORT)
    }
  }
})
