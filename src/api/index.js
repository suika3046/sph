// API统一管理
import requests from './request'
import mockRequests from './mockAjax'

export const requestCategoryList = () =>
  requests.get('/product/getBaseCategoryList')

export const requestGetBannerList = () => mockRequests.get('/banner')
