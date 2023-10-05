// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    VIcon: typeof import('../packages/visual-design')['VIcon']
    VGradientButton: typeof import('../packages/visual-design')['VGradientButton']
  }
}

export {}
