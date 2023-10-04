import { withInstall } from '@visual-design/utils'
import Lantern from './src/lantern.vue'
import Satellite from './src/satellite.vue'
import Wifi from './src/wifi.vue'
import FlowLine from './src/flow-line.vue'
import WordCloud from './src/word-cloud.vue'

export const VFlowLine = withInstall(FlowLine)
export const VWordCloud = withInstall(WordCloud)
export const VLantern = withInstall(Lantern)
export const VSatellite = withInstall(Satellite)
export const VWifi = withInstall(Wifi)
