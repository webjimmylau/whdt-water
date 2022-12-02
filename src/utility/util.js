/**
 * util.js
 * 公共方法配置（和业务无关）
 */

import path from 'path'

// 根目录
export const rootPath = (dir = './') => {
  return path.join(__dirname, '../../', dir)
}

// src目录
export const srcPath = (dir = './') => {
  return path.join(__dirname, '../', dir)
}

// 判断是否是开发环境
export const isDevelopment = () => {
  return import.meta.env.MODE === 'development'
}

// local 本地缓存
export const localStorage = {
  getItem: function (name) {
    return window.localStorage && window.localStorage.getItem(name)
  },
  setItem: function (name, value) {
    window.localStorage && window.localStorage.setItem(name, value)
  },
  removeItem: function (name) {
    window.localStorage && window.localStorage.removeItem(name)
  },
  clear: function () {
    window.localStorage && window.localStorage.clear()
  }
}

// token 获取
export const getAccessToken = () => {
  const token = localStorage.getItem('token')
  const expiresAt = localStorage.getItem('expires_at')

  if (Date.now() >= expiresAt) {
    removeLoginLocalStorage()
    return ''
  }

  return token
}

// 移除 登录相关本地存储
export const removeLoginLocalStorage = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('expires_at')
}

const util = {
  rootPath,
  srcPath,
  isDevelopment,
  localStorage,
  getAccessToken,
  removeLoginLocalStorage
}

export default util
