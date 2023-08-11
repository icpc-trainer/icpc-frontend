import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

import { urls } from "../../constants/urls"
import { getCookie } from "../../helpers/getCookie"
import { setCookie } from "../../helpers/setCookie"
import { YandexUser } from "../../types/types"

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: urls.openApiUrl,
    prepareHeaders: (headers) => {
      const urlParams = new URLSearchParams(window.location.hash)
      const accessToken = urlParams.get("#access_token")

      if (accessToken) {
        const expiresIn = urlParams.get("expires_in")
        setCookie("access_token", accessToken, expiresIn)
        headers.set("Authorization", `OAuth ${accessToken}`)
      } else {
        if (!document.cookie || !document.cookie.includes("access_token")) {
          window.location.replace(urls.yandexPassport)
        } else {
          const token = getCookie("access_token")
          if (token) {
            headers.set("Authorization", `OAuth ${token}`)
          }
        }
      }

      return headers
    },
  }),
  endpoints: (build) => ({
    getYandexUser: build.query<YandexUser, void>({
      query: () => ({
        url: "user/me",
      }),
    }),
  }),
})

export const { useGetYandexUserQuery } = userApi
