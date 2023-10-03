import { buildConfig } from '../build-info'

import type { Module } from '../build-info'
const PKG_NAME = 'visual-design'
const PKG_PREFIX = '@visual-design'
/** used for type generator */
export const pathRewriter = (module: Module) => {
  const config = buildConfig[module]

  return (id: string) => {
    id = id.replaceAll(`${PKG_PREFIX}/theme-chalk`, `${PKG_NAME}/theme-chalk`)
    id = id.replaceAll(`${PKG_PREFIX}/`, `${config.bundle.path}/`)
    return id
  }
}
