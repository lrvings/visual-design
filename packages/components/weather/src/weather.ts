import { buildProps } from '@visual-design/utils'

import type { ExtractPropTypes } from 'vue'
import type Weather from './weather.vue'

export const weatherProps = buildProps({})

export type WeatherProps = ExtractPropTypes<typeof weatherProps>
export type WeatherInstance = InstanceType<typeof Weather>
