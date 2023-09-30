import { VGradientButton } from './button/index'
import type { App } from 'vue'

const components = [VGradientButton]

const install = function (app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install,
}
