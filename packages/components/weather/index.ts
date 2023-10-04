import { withInstall } from '@visual-design/utils'
import Weather from './src/weather.vue'

export const VWeather = withInstall(Weather)
export default VWeather

export * from './src/weather'
