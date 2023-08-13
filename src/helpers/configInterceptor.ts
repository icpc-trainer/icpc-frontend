import { InternalAxiosRequestConfig } from 'axios'

import { urls } from '../constants/urls'
import { getCookie } from './getCookie'
import { setCookie } from './setCookie'

export const configInterceptor = (config: InternalAxiosRequestConfig) => {
  const urlParams = new URLSearchParams(window.location.hash)
  const accessToken = urlParams.get('#access_token')

  if (accessToken) {
    const expiresIn = urlParams.get('expires_in')
    setCookie('access_token', accessToken, expiresIn)
    config.headers['Authorization'] = `OAuth ${accessToken}`
  } else {
    if (!document.cookie || !document.cookie.includes('access_token')) {
      window.location.replace(urls.yandexPassport)
    } else {
      const token = getCookie('access_token')
      if (token) {
        config.headers['Authorization'] = `OAuth ${token}`
      }
    }
  }

  return config
}
