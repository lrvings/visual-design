import { VGradientButton } from './button/index'
import { VIcon } from './icon/index'
import type { App } from 'vue'

const components = [VGradientButton, VIcon]

const install = function (app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install,
}
