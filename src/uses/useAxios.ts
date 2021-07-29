import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from 'axios'
import { ref, Ref, shallowRef } from 'vue'
import axios from 'axios'

export interface UseAxiosReturn<T> {
  data: Ref<T | null>
  response: Ref<AxiosResponse | null>
  statusCode: Ref<number | null>
  error: Ref<any>
  isLoading: Ref<boolean>
  execute: (params?: AxiosRequestConfig) => Promise<any>
  abort: () => void
}

export function useAxios<T>(
  url: string,
  instance?: AxiosInstance
): UseAxiosReturn<T> {
  const response = shallowRef<AxiosResponse | null>(null)
  const data = shallowRef<T | null>(null)
  const isLoading = ref(false)
  const error = ref<any>(null)
  const statusCode = ref<number | null>(null)

  const http = instance || axios
  let axiosSource: CancelTokenSource

  const abort = () => {
    if (isLoading.value) {
      axiosSource.cancel()
    }
  }

  const execute = async (params?: AxiosRequestConfig) => {
    isLoading.value = true
    error.value = null
    statusCode.value = null

    const axiosSource = axios.CancelToken.source()

    try {
      const axiosResponse = await http(url, {
        cancelToken: axiosSource.token,
        ...(params || {}),
      })
      const { data, status } = axiosResponse
      response.value = axiosResponse
      data.value = data
      statusCode.value = status
    } catch (error) {
      response.value = null
      data.value = null
      error.value = error
    }

    isLoading.value = false
  }

  return {
    isLoading,
    response,
    error,
    statusCode,
    data,
    execute,
    abort,
  }
}
