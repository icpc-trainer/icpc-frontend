import axios, { AxiosInstance } from "axios"

import { urls } from "../constants/urls"
import { checkAuthorizationToken } from "../helpers/checkAuthorizationToken"
import { configInterceptor } from "../helpers/configInterceptor"
import { errorInterceptor } from "../helpers/errorInterceptor"
import { Message, Verdict, YandexUser } from "../types/types"
import { createFile } from "../utils/createFile"

class Api {
  private readonly client: AxiosInstance

  constructor(baseURL: string) {
    checkAuthorizationToken()
    this.client = axios.create({ baseURL })
    this.client.interceptors.request.use(configInterceptor, errorInterceptor)
  }

  async get<Response = any>(url: string, params?: Record<string, unknown>) {
    return (await this.client.get<Response>(url, { params })).data
  }

  async post<Body = Record<string, unknown>>(url: string, body: Body, params?: Record<string, unknown>) {
    return await this.client.post(url, body, { params })
  }

  async getSaveContests(contestId: string) {
    // каждый раз дергать для нового контеста (он сохраняется в бд)
    return await this.get(`contests/${contestId}`)
  }

  async getProblems(trainingSessionId: string) {
    return (await this.get(`contests/${trainingSessionId}/problems`)).problems
  }

  async getProblemStatement(contestId: string, alias: string) {
    return await this.get(`contests/${contestId}/problems/${alias}/statement`)
  }
  async getMe() {
    return await this.get("user/me")
  }

  postSubmissions(trainingSessionId: string, code: string, compiler: string, problem: string) {
    const formData = createFile(code)
    formData.append("compiler", compiler)
    formData.append("problem", problem)

    return this.post(`/training-sessions/${trainingSessionId}/submissions`, formData)
  }

  async getSubmissions(trainingSessionId: string, submissionId: number) {
    return await this.get(`/training-sessions/${trainingSessionId}/submissions/${submissionId}`)
  }

  async getSubmissionsFull(trainingSessionId: string, submissionId: number) {
    return await this.get(`/training-sessions/${trainingSessionId}/submissions/${submissionId}/full`)
  }

  getCodeByProblemAlias(trainingSessionId: string, problemAlias: string) {
    return this.get<{ code: string }>(`training-sessions/${trainingSessionId}/code/${problemAlias}`)
  }

  postMessage(trainingSessionId: string, problemAlias: string, content: string) {
    return this.post(`training-sessions/${trainingSessionId}/problem/${problemAlias}/comments/send`, { content })
  }

  getMessagesByAlias(trainingSessionId: string, problemAlias: string) {
    return this.get<Message[]>(`training-sessions/${trainingSessionId}/problem/${problemAlias}/comments`)
  }

  async getYandexUsersOnline(trainingSessionId: string) {
    return (await this.get<{ users: YandexUser[] }>(`training-sessions/${trainingSessionId}/online`)).users
  }

  getVerdictsByAlias(trainingSessionId: string, problemAlias: string) {
    return this.get<{ count: number, submissions: Verdict[]}>(`training-sessions/${trainingSessionId}/submissions/problem/${problemAlias}`)
  }
}

export const api = new Api(urls.openApiUrl)
