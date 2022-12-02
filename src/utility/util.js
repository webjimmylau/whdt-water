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

const util = {
  rootPath,
  srcPath,
  isDevelopment
}

export default util
