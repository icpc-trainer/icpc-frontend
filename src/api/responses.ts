import { Message, Problem, Submission, YandexUser } from 'src/types/types'

export interface GetProblemsResponse {
  problems: Problem[]
}

export type GetProblemStatementResponse = string

export interface GetCodeByAliasResponse {
  code: string
}

export type GetMessagesByAliasResponse = Message[]

export interface GetYandexUsersOnlineResponse {
  users: YandexUser[]
}

export interface GetSubmissionsByAliasResponse {
  count: number
  submissions: Submission[]
}
