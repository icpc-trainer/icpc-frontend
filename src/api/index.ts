import axios, { AxiosInstance } from 'axios'

import { urls } from '../constants/urls'
import { checkAuthorizationToken } from '../helpers/checkAuthorizationToken'
import { configInterceptor } from '../helpers/configInterceptor'
import { errorInterceptor } from '../helpers/errorInterceptor'
import { createFile } from '../utils/createFile'
import { PostMessageRequest, PostSubmissionsRequest } from './requests'
import {
  GetCodeByAliasResponse,
  GetMessagesByAliasResponse,
  GetProblemStatementResponse,
  GetProblemsResponse,
  GetSubmissionsByAliasResponse,
  GetYandexUsersOnlineResponse,
} from './responses'
import { Submission } from '../types/types'

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

  post<Body = Record<string, unknown>>(url: string, body: Body, params?: Record<string, unknown>) {
    return this.client.post(url, body, { params })
  }

  // TODO: типизировать после реализации
  getSaveContests(contestId: string) {
    // каждый раз дергать для нового контеста (он сохраняется в бд)
    return this.get(`contests/${contestId}`)
  }

  async getProblems(contestId: string) {
    return (await this.get<GetProblemsResponse>(`contests/${contestId}/problems`)).problems
  }

  getProblemStatement(contestId: string, alias: string) {
    return this.get<GetProblemStatementResponse>(`contests/${contestId}/problems/${alias}/statement`)
  }

  postSubmissions(trainingSessionId: string, code: string, compiler: string, problem: string) {
    const formData = createFile(code)
    formData.append('compiler', compiler)
    formData.append('problem', problem)

    return this.post<PostSubmissionsRequest>(`/training-sessions/${trainingSessionId}/submissions`, formData)
  }

  // TODO: типизировать после реализации
  getSubmissions(trainingSessionId: string, submissionId: number) {
    return this.get(`/training-sessions/${trainingSessionId}/submissions/${submissionId}`)
  }

  // TODO: типизировать после реализации
  getSubmissionsFull(trainingSessionId: string, submissionId: number) {
    return this.get(`/training-sessions/${trainingSessionId}/submissions/${submissionId}/full`)
  }

  getCodeByAlias(trainingSessionId: string, problemAlias: string) {
    return this.get<GetCodeByAliasResponse>(`training-sessions/${trainingSessionId}/code/${problemAlias}`)
  }

  postMessage(trainingSessionId: string, problemAlias: string, content: string) {
    return this.post<PostMessageRequest>(
      `training-sessions/${trainingSessionId}/problem/${problemAlias}/comments/send`,
      { content },
    )
  }

  getMessagesByAlias(trainingSessionId: string, problemAlias: string) {
    return this.get<GetMessagesByAliasResponse>(
      `training-sessions/${trainingSessionId}/problem/${problemAlias}/comments`,
    )
  }

  async getYandexUsersOnline(trainingSessionId: string) {
    return (await this.get<GetYandexUsersOnlineResponse>(`training-sessions/${trainingSessionId}/online`)).users
  }

  getSubmissionsByAlias(trainingSessionId: string, problemAlias: string) {
    return this.get<GetSubmissionsByAliasResponse>(
      `training-sessions/${trainingSessionId}/submissions/problem/${problemAlias}`,
    )
  }

  getVerdictsByAlias(trainingSessionId: string, problemAlias: string) {
    return this.get<{ count: number, submissions: Submission[]}>(`training-sessions/${trainingSessionId}/submissions/problem/${problemAlias}`)
  }
}

export const api = new Api(urls.openApiUrl)
