import { defineConfig } from 'vitepress'
import { sidebars } from './config/sidebars'
import { nav } from './config/nav'
export default defineConfig({
  title: 'Visual Desgin',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    logo: '/logo.png',
    outline: 'deep',
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: '最近更新时间',
    sidebar: sidebars,
    // 启用页面滚动效果
    nav,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present wenju Li',
    },

    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        indexName: 'vitepress',
      },
    },
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
      chunkSizeWarningLimit: Number.POSITIVE_INFINITY,
    },
    json: {
      stringify: true,
    },
  },
})
