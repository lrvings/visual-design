// Mapping the first sub link to the nav link to avoid 404 error.
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pkg = require('@visual-design/components/package.json')
function getNav() {
  return [
    {
      text: '📝 指南',
      link: '/guide/index',
      activeMatch: '/guide/',
    },
    {
      text: '🔥 组件',
      link: '/component/button',
      activeMatch: '/component/',
    },
    {
      text: pkg.version,
      items: [
        {
          text: '更新日志',
          link: '',
        },
      ],
    },
    // {
    //   text: '🎉 面试',
    //   link: '/docs/interview/internet-questions',
    //   activeMatch: '/docs/interview/',
    // },
    // {
    //   text: '🔧 编程工具',
    //   link: '/docs/code-tools/vscode',
    //   activeMatch: '/docs/code-tools/',
    // },
  ]
}

export const nav = getNav()
