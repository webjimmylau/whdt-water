/**
 * psi-api-business.js
 * 接口-进销存-企业业务后台
 */

import ajax from './ajax'

/**
 * --------------------------------------------------
 * 报表
 */

// 报表-列表
export const meterList = (params) => {
  return ajax.get(`/v1/meter/list`, params)
}

// 报表-导出
export const meterExport = (params) => {
  return ajax.get(`/v1/meter/export`, params)
}

// 报表-新增
export const meterAdd = (params) => {
  return ajax.post(`/v1/meter`, params)
}

// 报表-编辑
export const meterEdit = (id, params) => {
  return ajax.put(`/v1/meter/${id}`, params)
}

// 报表-删除
export const meterDelete = (id) => {
  return ajax.delete(`/v1/meter/${id}`)
}

// 报表-详情
export const meterDetail = (id) => {
  return ajax.get(`/v1/meter/${id}`)
}

// 报表-审核
export const meterApprove = (id) => {
  return ajax.put(`/v1/meter/${id}/approve`)
}

// 报表-弃审
export const meterCancelApprove = (id) => {
  return ajax.put(`/v1/meter/${id}/disapprove`)
}

// 报表-选单-列表
export const meterVerifyList = (params) => {
  return ajax.get(`/v1/meter/order/vouchers`, params)
}

// 报表-备注-编辑(已审核)
export const meterRemark = (id, params) => {
  return ajax.put(`/v1/meter/${id}/remark`, params)
}

const apiBusiness = {}

export default apiBusiness
