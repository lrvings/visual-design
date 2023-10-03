// Mapping the first sub link to the nav link to avoid 404 error.

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
