import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router/index'

import util from '@/utility/util'
import tool from '@/utility/tool'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import '@/assets/styles/base.css'
import '@/assets/styles/common.less'

const app = createApp(App)

// 路由
app.use(router)

window.$util = util
window.$tool = tool

// 中文配置
app.use(ElementPlus, {
  locale: zhCn
})

app.mount('#app')
