import DefaultTheme from 'vitepress/theme'
import VisualDesign from '@visual-design/components/index'

import { globals } from '../vitepress'
import { define } from '../utils/types'
import 'uno.css'
// import './style.css'
import type { Theme } from 'vitepress'
export default define<Theme>({
  extends: DefaultTheme,
  enhanceApp: ({ app, siteData }) => {
    app.use(VisualDesign)
    // eslint-disable-next-line no-console
    console.log(siteData.value)

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
})
