import VPApp from './components/vp-app.vue'
import VPDemo from './components/vp-demo.vue'
import type { Component } from 'vue'
export default VPApp
export const globals: [string, Component][] = [
  ['Demo', VPDemo],
  // ['IconList', IconList],
  // ['ApiTyping', ApiTyping],
  // ['FunctionType', ApiFunctionType],
  // ['EnumType', ApiEnumType],
  // ['BooleanType', ApiBooleanType],
  // ['StringType', ApiStringType],
  // ['NumberType', ApiNumberType],
  // ['RefType', ApiRefType],
  // ['ExternalType', ApiExternalType],
]
