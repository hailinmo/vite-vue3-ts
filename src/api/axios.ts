import axios from 'axios'
import Cookies from 'js-cookie'

export const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/proxy/' : '',
  timeout: 0,
  headers: {
    'X-CSRFToken': Cookies.get('csrftoken'), // 后端为dajngo框架时的设置（可去掉）；
  },
})

// 请求拦截
instance.interceptors.request.use(
  async (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error?.response)
  }
)

export default instance
