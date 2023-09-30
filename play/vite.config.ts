import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/], // <--
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    server: {
      host: true,
      https: !!env.HTTPS,
    },
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "./src/styles/index.scss" as *;',
        },
      },
    },
  }
})
