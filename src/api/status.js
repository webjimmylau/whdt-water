import tool from '@/utility/tool'

const showMessage = (data) => {
  // 9999 请求超时
  if (data.error_code === 9999) {
    window.$util.message('请求失败，请检查网络，或刷新页面', 'error')
    return
  }

  // 401 密码失效
  // 6015 没有权限
  // 6017 账号或员工已被禁用
  if (data.error_code === 401 || data.error_code === 6015 || data.error_code === 6017) {
    ElMessageBox.alert(data.message, '提示', {
      confirmButtonText: '重新登录',
      callback: (action) => {
        if (action === 'confirm') {
          tool.jumpToLogin()
        }
      }
    })
    return
  }

  // 500 出错啦
  if (data.error_code === 500) {
    ElMessageBox.alert(data.message, '提示', {
      confirmButtonText: '确定',
      callback: () => {}
    })
    return
  }

  // error_code !== 0 统一提示错误信息
  // 404 资源不存在
  if (data.error_code) {
    window.$util.message(data.message, 'error')
  }
}

export default showMessage
