import { sidebars } from './config/sidebars'
import { nav } from './config/nav'
import { defineConfig } from 'vitepress'
import { docsDirName } from '@visual-design/build-utils'
// console.log(sidebars)
export default defineConfig({
  title: 'Visual Desgin',
  lang: 'zh-CN',
  lastUpdated: true,
  // srcDir: '.',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    logo: '/logo.png',
    outline: 'deep',
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: '最近更新时间',
    sidebar: sidebars,
    // 启用页面滚动效果
    nav,
  },
  markdown: {
    lineNumbers: true,
  },
  vite: {
    server: {
      port: 8000,
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity,
    },
    json: {
      stringify: true,
    },
  },
})
