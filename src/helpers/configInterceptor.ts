import { InternalAxiosRequestConfig } from 'axios'

import { urls } from '@constants/urls'

import { getCookie } from './getCookie'
import { setCookie } from './setCookie'

export const configInterceptor = (config: InternalAxiosRequestConfig) => {
  const isMessagesUrl = /training-sessions\/.*\/problem\/.*\/comments/.test(config.url)

  const urlParams = new URLSearchParams(window.location.hash)
  const accessToken = urlParams.get('#access_token')

  if (accessToken) {
    const expiresIn = urlParams.get('expires_in')
    setCookie('access_token', accessToken, expiresIn)
    if (!isMessagesUrl) {
      config.headers['Authorization'] = `OAuth ${accessToken}`
    }
  } else {
    if (!document.cookie || !document.cookie.includes('access_token')) {
      window.location.replace(urls.yandexPassport)
    } else {
      const token = getCookie('access_token')
      if (token && !isMessagesUrl) {
        config.headers['Authorization'] = `OAuth ${token}`
      }
    }
  }

  return config
}
