import { withInstall } from '@visual-design/utils'
import Lantern from './src/lantern.vue'
import Satellite from './src/satellite.vue'
import Wifi from './src/wifi.vue'

export const VLantern = withInstall(Lantern)
export const VSatellite = withInstall(Satellite)
export const VWifi = withInstall(Wifi)
