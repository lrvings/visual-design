import { VGradientButton } from './button'
import { VIcon } from './icon'
import { VRow } from './row'
import { VCol } from './col'
import { VGradientCard } from './card'
import { VWeather } from './weather'
import { VFlowLine, VLantern, VSatellite, VWifi, VWordCloud } from './demo'
import type { App } from 'vue'

const components = [
  VRow,
  VCol,
  VGradientButton,
  VIcon,
  VLantern,
  VSatellite,
  VWifi,
  VFlowLine,
  VGradientCard,
  VWeather,
  VWordCloud,
]

const install = function (app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install,
}
