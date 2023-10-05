import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import glob from 'fast-glob'
import { epRoot, excludeFiles, pkgRoot } from '@visual-design/build-utils'
import { generateExternal, writeBundles } from '../utils'
import { VisualDesignAlias } from '../plugins/visual-design-alias'
import { buildConfigEntries, target } from '../build-info'

import type { OutputOptions } from 'rollup'
const __defProp = Object.defineProperty
const __name = (target: any, value: any) =>
  __defProp(target, 'name', { value, configurable: true })
globalThis.__name = __name
// 将packages下的所有js、ts、vue文件使用rollup打包，保持原有文件目录结构
export const buildModules = async () => {
  // excludeFiles 排除['node_modules', 'test', 'mock', 'gulpfile', 'dist']下的文件
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  )
  // 使用rollup的[JavaScript API](https://www.rollupjs.com/guide/javascript-api)
  const bundle = await rollup({
    input,
    plugins: [
      // 将@visual-design/theme-chalk开头的import路径替换为visual-design/theme-chalk，并标记为外部模块
      VisualDesignAlias(),
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vue: vue({
            isProduction: false,
          }),
          vueJsx: vueJsx(),
        },
      }),
      nodeResolve({
        // 查找到外部(node_modules)模块
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(), // 将CommonJS模块转换为ES6，以便rollup可以处理它们
      esbuild({
        // 使用 esbuild 执行代码转换和压缩
        sourceMap: true,
        target,
        loaders: {
          '.vue': 'ts',
        },
      }),
    ],
    // 标记所有visual-design的dependencies、peerDependencies以及'@vue'开头的包为external(外部包)
    // 在使用时，babel一般会忽略node_modules里的包，但是因为这里已经转为了es5语法，所以语法是没有问题的。另外虽然babel不会处理，但是webpack、rollup等打包工具仍会处理依赖关系，最终将这里忽略的外部包打包到最终产物里。
    external: await generateExternal({ full: false }),
    treeshake: false,
  })
  // 使用Promise.all, 遍历buildConfigEntries(esm和cjs)生成的options，多次调用bundle.write()方法生成文件
  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format, // esm | cjs
        dir: config.output.path, // dist/visual-design/(es | lib)
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true, // 保留模块结构，打包产物和源码文件结构一致。使用原始模块名作为文件名，为所有模块创建单独的 chunk，而不是创建尽可能少的 chunk
        preserveModulesRoot: epRoot, // 以visual-design为产物根目录，打包后原visual-design作为根目录，其他模块在此目录下保持原目录结构
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`, // chunks入口文件名
      }
    })
  )
}
