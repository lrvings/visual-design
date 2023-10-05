declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    VIcon: typeof import('visual-design')['VIcon']
    VGradientButton: typeof import('visual-design')['VGradientButton']
  }
}

export {}
