import axios, { AxiosRequestHeaders } from 'axios'

import { env } from './env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
})

api.interceptors.request.use(async (req) => {
  const token = localStorage.getItem('authToken')

  if (token) {
    req.headers = {
      ...req.headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    } as AxiosRequestHeaders
  }

  return req
})

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 3000)),
    )

    return config
  })
}
