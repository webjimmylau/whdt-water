import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import util from '@/utility/util'

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  base: '/',
  routes
})

router.beforeEach((to, from, next) => {
  // let isLoginPage = to.path.includes(`/login`)

  // 登录
  // if (!util.getAccessToken() && !isLoginPage) {
  //   ElMessageBox.alert('当前登录状态已失效，请重新登录', '提示', {
  //     confirmButtonText: '确定',
  //     callback: () => {}
  //   })
  //   return
  // }

  // 无效路由
  // if (!to.matched.length) {
  //   router.push(`/empty`)
  //   next(false)
  //   return
  // }

  next()
})

router.afterEach((to, from) => {})

export default router
