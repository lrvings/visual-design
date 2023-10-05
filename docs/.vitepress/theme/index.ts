import DefaultTheme from 'vitepress/theme'
import VisualDesign from '@visual-design/components'
import '@visual-design/theme-chalk/src/index.scss'

import { define } from '../utils/types'
import type { Theme } from 'vitepress'
export default define<Theme>({
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(VisualDesign)
  },
})
