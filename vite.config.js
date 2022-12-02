import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import util from './src/utility/util'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // element-plus
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  server: {
    port: 6000
  },
  resolve: {
    alias: {
      '@': util.srcPath() // src快捷路径
    },
    extensions: ['.js', '.json', '.vue'] // 文件引入免后缀
  },
  css: {
    // 去除beta/gamma/build时charset警告
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove()
              }
            }
          }
        }
      ]
    },
    preprocessorOptions: {
      less: {
        additionalData: `@import "${util.srcPath('assets/styles/variable.less')}";` // less变量
      }
    }
  }
})
