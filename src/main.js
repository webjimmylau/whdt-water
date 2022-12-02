import { createApp } from 'vue'
import App from './App.vue'

import util from '@/utility/util'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import '@/assets/styles/base.css'
import '@/assets/styles/common.less'

const app = createApp(App)

window.$util = util

// 中文配置
app.use(ElementPlus, {
  locale: zhCn
})

app.mount('#app')
