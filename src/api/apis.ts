import http from './axios'
import { useAxios } from '@/uses/useAxios'

export const useHttp = (url: string) => {
  return useAxios(url, http)
}

export default {
  LOGIN: '/login/',
  LOGOUT: '/logout/',
}
