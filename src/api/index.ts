import axios, { AxiosInstance } from 'axios'

import { urls } from '@constants/urls'
import { checkAuthorizationToken } from '@helpers/checkAuthorizationToken'
import { configInterceptor } from '@helpers/configInterceptor'
import { errorInterceptor } from '@helpers/errorInterceptor'
import { createFile } from '@utils/createFile'

import { CreateTrainingSession, PostCommentRequest, PostSubmissionsRequest } from './requests'
import {
  GetCodeByAliasResponse,
  GetCommentsByAliasResponse,
  GetLobbyOnlineUsersResponse,
  GetProblemStatementResponse,
  GetProblemsResponse,
  GetSelectedCompilerByAliasResponse,
  GetSelectedContestResponse,
  GetTeamStatusResponse,
  GetUserTeamsResponse,
  GetVerdictsByAliasResponse,
  GetWorkSpaceOnlineUsersResponse,
  getParticipationResponse,
  getStandingsResponse,
} from './responses'

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

  delete(url: string) {
    return this.client.delete(url)
  }

  getSaveContests(contestId: string) {
    // каждый раз дергать для нового контеста (он сохраняется в бд)
    return this.get(`contests/${contestId}`)
  }

  async getProblems(trainingSessionId: string) {
    return (await this.get<GetProblemsResponse>(`contests/${trainingSessionId}/problems`)).problems
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

  getSubmissions(trainingSessionId: string, submissionId: number) {
    return this.get(`/training-sessions/${trainingSessionId}/submissions/${submissionId}`)
  }

  getCodeByAlias(trainingSessionId: string, problemAlias: string) {
    return this.get<GetCodeByAliasResponse>(`training-sessions/${trainingSessionId}/code/${problemAlias}`)
  }

  postComment(trainingSessionId: string, problemAlias: string, content: string) {
    return this.post<PostCommentRequest>(`training-sessions/${trainingSessionId}/problem/${problemAlias}/comments`, {
      content,
    })
  }

  getCommentsByAlias(trainingSessionId: string, problemAlias: string) {
    return this.get<GetCommentsByAliasResponse>(
      `training-sessions/${trainingSessionId}/problem/${problemAlias}/comments`,
    )
  }

  async getWorkSpaceOnlineUsers(trainingSessionId: string) {
    return (await this.get<GetWorkSpaceOnlineUsersResponse>(`training-sessions/${trainingSessionId}/online`)).users
  }

  async getLobbyOnlineUsers(teamId: string) {
    return (await this.get<GetLobbyOnlineUsersResponse>(`lobby/${teamId}/online`)).users
  }

  getSubmissionsByAlias(trainingSessionId: string, problemAlias: string) {
    return this.get<GetVerdictsByAliasResponse>(
      `training-sessions/${trainingSessionId}/submissions/problem/${problemAlias}`,
    )
  }

  getProblemByAlias(trainingSessionId: string, problemAlias: string) {
    return this.get<{ problemAlias: string; status: string; attempts: number }>(
      `contests/${trainingSessionId}/problems/${problemAlias}`,
    )
  }

  getUserTeams() {
    return this.get<GetUserTeamsResponse>(`teams`)
  }

  getTeamStatus(teamId: number) {
    return this.get<GetTeamStatusResponse>(`training-sessions/team/${teamId}/reconnect`)
  }

  createTrainingSession(teamId: string, contestId: string) {
    return this.post<CreateTrainingSession>(`training-sessions`, { team_id: teamId, contest_id: contestId })
  }

  async getSelectedContest(teamId: string) {
    return (await this.get<GetSelectedContestResponse>(`lobby/${teamId}/selected-contest`)).contestId
  }

  async getSelectedCompilerByAlias(trainingSessionId: string, problemAlias: string) {
    return (
      await this.get<GetSelectedCompilerByAliasResponse>(
        `training-sessions/${trainingSessionId}/compiler/${problemAlias}`,
      )
    ).compiler
  }

  getParticipation(trainingSessionId: string) {
    return this.get<getParticipationResponse>(`training-sessions/${trainingSessionId}/participation`)
  }

  getStandings(trainingSessionId: string) {
    return this.get<getStandingsResponse>(`contests/${trainingSessionId}/standings`)
  }

  removeCommentById(trainingSessionId: string, messageId: string) {
    return this.delete(`training-sessions/${trainingSessionId}/comments/${messageId}`)
  }
}

export const api = new Api(urls.openApiUrl)
