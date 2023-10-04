import { VGradientButton } from './button'
import { VIcon } from './icon'
import { VRow } from './row'
import { VCol } from './col'
import { VGradientCard } from './card'
import { VLantern, VSatellite, VWifi } from './demo'
import type { App } from 'vue'

const components = [
  VRow,
  VCol,
  VGradientButton,
  VIcon,
  VLantern,
  VSatellite,
  VWifi,
  VGradientCard,
]

const install = function (app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install,
}
