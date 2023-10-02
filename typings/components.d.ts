import type Icon from '@visual-design/components/icon'
// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    VIcon: typeof Icon
  }
}

export {}
