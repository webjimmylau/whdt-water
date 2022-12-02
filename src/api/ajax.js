import axios from 'axios'
import showMessage from './status'
import util from '@/utility/util'

// 拦截器 基本配置
const baseURL = `${import.meta.env.VITE_API_APP}}`
const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 拦截器 请求
instance.interceptors.request.use(
  (config) => {
    const { url, headers } = config

    // 获取缓存token和设置当前接口token
    const token = util.getAccessToken()
    if (token) {
      headers['Authorization'] = `Bearer ${encodeURIComponent(token)}`
    }

    config.url = /\?/.test(url)
      ? `${url}${/(&|\?)$/.test(url) ? '' : '&'}_t=${Date.now()}`
      : `${url}?_t=${Date.now()}`
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 拦截器 响应
instance.interceptors.response.use(
  (response) => {
    // 获取当前接口返回token和设置缓存token
    const authorization = response.headers['authorization'] || response.headers['Authorization']
    const expiresIn = response.headers['expires_in']
    authorization && util.setAccessToken(authorization.replace('Bearer ', ''), expiresIn)

    // 对响应数据做点什么
    return response
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error.response.data)
  }
)

// 请求方法
const methods = ['get', 'post', 'put', 'patch', 'delete']
const ajax = {}

methods.forEach((method) => {
  ajax[method] = async (url, params, config) => {
    const data = method === 'get' ? { params } : params
    return await instance[method](url, data, config)
      .then((res) => {
        const data = res.data
        // 统一处理错误信息
        showMessage(data)

        return data
      })
      .catch((error) => {
        // 请求超时
        let err = error
        if (!error.error_code && error.error_code !== 0) {
          err = {
            error_code: 9999
          }
        }

        // 统一处理错误信息
        showMessage(err)
        return err
      })
  }
})

export default ajax
