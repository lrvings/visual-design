import { createApp } from 'vue'

import '@visual-design/theme-chalk/src/index.scss'
;(async () => {
  const apps = import.meta.glob('./src/*.vue')
  const name = location.pathname.replace(/^\//, '') || 'App'
  const file = apps[`./src/${name}.vue`]
  if (!file) {
    location.pathname = 'App'
    return
  }
  const App = ((await file()) as any).default
  const app = createApp(App)

  app.mount('#play')
})()
