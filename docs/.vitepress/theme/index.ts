import DefaultTheme from 'vitepress/theme'
import VisualDesign from '@visual-design/components/index'
import '@visual-design/theme-chalk/src/index.scss'

import { define } from '../utils/types'
// import 'uno.css'
import type { Theme } from 'vitepress'
export default define<Theme>({
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(VisualDesign)
  },
})
