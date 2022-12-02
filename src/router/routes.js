const components = {
  // 基本
  home: () => import('@/views/home'),
  login: () => import('@/views/login'),
  empty: () => import('@/views/empty'),

  // 报表
  meterList: () => import('@/views/meter/list'),
  meterDo: () => import('@/views/meter/do')
}

const routes = [
  // 首页
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: components.home,
    meta: {
      title: '首页'
    }
  },

  // 报表
  {
    path: '/meter',
    redirect: '/meter/list'
  },
  {
    path: '/meter/list',
    component: components.meterList,
    meta: {
      title: '报表列表'
    }
  },
  {
    path: '/meter/do',
    component: components.meterDo,
    meta: {
      title: '报表'
    }
  },

  // 登录
  {
    path: '/login',
    component: components.login,
    meta: {
      title: '登录'
    }
  },

  // 页面不存在
  {
    path: '/empty',
    component: components.empty,
    meta: {
      title: '页面不存在'
    }
  }
]

export default routes
