import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import VueMacros from 'unplugin-vue-macros/vite'
// import UnoCSS from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { projRoot } from '@visual-design/build-utils'
// import { MarkdownTransform } from './.vitepress/plugins/markdown-transform'

import type { Alias } from 'vite'

const alias: Alias[] = [
  {
    find: '~/',
    replacement: `${path.resolve(__dirname, './.vitepress/vitepress')}/`,
  },
]
if (process.env.DOC_ENV !== 'production') {
  alias.push(
    {
      find: /^visual-design(\/(es|lib))?$/,
      replacement: path.resolve(projRoot, 'packages/visual-design/index.ts'),
    },
    {
      find: /^visual-design\/(es|lib)\/(.*)$/,
      replacement: `${path.resolve(projRoot, 'packages')}/$2`,
    }
  )
}

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // const { dependencies: epDeps } = getPackageDependencies(epPackage)
  // const { dependencies: docsDeps } = getPackageDependencies(docPackage)

  // const optimizeDeps = [...new Set([...epDeps, ...docsDeps])].filter(
  //   (dep) =>
  //     !dep.startsWith('@types/') &&
  //     !['@visual-design/metadata', 'visual-design'].includes(dep)
  // )

  // optimizeDeps.push(
  //   ...(await glob(['dayjs/plugin/*.js'], {
  //     cwd: path.resolve(projRoot, 'node_modules'),
  //     onlyFiles: true,
  //   }))
  // )

  return {
    server: {
      host: true,
      https: !!env.HTTPS,
      fs: {
        allow: [projRoot],
      },
    },
    resolve: {
      alias,
    },
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        },
      }),

      Components({
        dirs: ['.vitepress/vitepress/components'],

        allowOverrides: true,

        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          // IconsResolver(),
        ],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      // Icons({
      //   autoInstall: true,
      // }),
      // UnoCSS(),
      // MarkdownTransform(),
    ],
    // optimizeDeps: {
    //   include: optimizeDeps,
    // },
  }
})
