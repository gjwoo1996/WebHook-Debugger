import axios from 'axios'
import { apiInstance } from '@/shared/lib/axios/interceptor'

// const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}`
const apiUrl = process.env.NEXT_PUBLIC_API_URL
const boApiUrl = process.env.BO_API_URL

export const api = apiInstance(
  axios.create({
    baseURL: apiUrl,
  })
)

export const boApi = apiInstance(
  axios.create({
    baseURL: boApiUrl,
  })
)

const defaultConfig = {
  timeout: 10000,
  withCredentials: true,
}
