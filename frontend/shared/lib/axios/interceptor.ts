import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig
} from 'axios'

const apiConfig = (config: InternalAxiosRequestConfig) => {
  config.headers.set('Content-Type', 'application/json')
  return config
}

export const apiInstance = (api: AxiosInstance) => {
  api.interceptors.request.use(apiConfig)

  // 공통 에러 처리
  api.interceptors.response.use(
    response => response,
    // async error => {
    (error: AxiosError) => {
      console.error(error)

      if (error.response?.status === 401) {
        console.error('인증 만료')
      }

      return Promise.reject(error)
    }
  )
  return api
}