import path from 'path'
import { copyFile, mkdir } from 'fs/promises'
import { copy } from 'fs-extra'
import { parallel, series } from 'gulp'
import {
  buildOutput,
  epOutput,
  epPackage,
  projRoot,
} from '@visual-design/build-utils'
import { buildConfig, run, runTask, withTaskName } from './src'
import type { TaskFunction } from 'gulp'
import type { Module } from './src'

export const copyFiles = () =>
  Promise.all([
    copyFile(epPackage, path.join(epOutput, 'package.json')),
    copyFile(
      path.resolve(projRoot, 'README.md'),
      path.resolve(epOutput, 'README.md')
    ),
    copyFile(
      path.resolve(projRoot, 'global.d.ts'),
      path.resolve(epOutput, 'global.d.ts')
    ),
  ])

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = path.resolve(buildOutput, 'types', 'packages')
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      copy(src, buildConfig[module].output.path, { dereference: true })
    )

  return parallel(copyTypes('esm'), copyTypes('cjs'))(done)
}

export const copyFullStyle = async () => {
  await mkdir(path.resolve(epOutput, 'dist'), { recursive: true })
  await copyFile(
    path.resolve(epOutput, 'theme-chalk/index.css'),
    path.resolve(epOutput, 'dist/index.css')
  )
}

export default series(
  // 1.清除dist目录
  withTaskName('clean', () => run('pnpm run clean')),
  // 2.创建dist/visual-design目录
  withTaskName('createOutput', () => mkdir(epOutput, { recursive: true })),
  // runTask: 在 internal/build目录下，使用child_process执行 pnpm run start xxx 即执行src/tasks中的gulp的xxx任务
  parallel(
    runTask('buildModules')
    // runTask('buildFullBundle'),
    // runTask('generateTypesDefinitions'),
    // runTask('buildHelper')
    // series(
    //   withTaskName('buildThemeChalk', () =>
    //     run('pnpm run -C packages/theme-chalk build')
    //   ),
    //   copyFullStyle
    // )
  )

  // parallel(copyTypesDefinitions, copyFiles)
)
export * from './src'
