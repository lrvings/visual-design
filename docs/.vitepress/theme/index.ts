import VisualDesign from '@visual-design/components/index'

import VPApp, { globals } from '../vitepress'
import { define } from '../utils/types'
import 'uno.css'
// import './style.css'
import type { Theme } from 'vitepress'

export default define<Theme>({
  // NotFound,
  Layout: VPApp,
  enhanceApp: ({ app }) => {
    app.use(VisualDesign)

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
})
