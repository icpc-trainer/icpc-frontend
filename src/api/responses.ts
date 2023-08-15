import { IMessage, IProblem, ISubmission, IYandexUser } from 'src/types/types'

export interface GetProblemsResponse {
  problems: IProblem[]
}

export type GetProblemStatementResponse = string

export interface GetCodeByAliasResponse {
  code: string
}

export type GetMessagesByAliasResponse = IMessage[]

export interface GetYandexUsersOnlineResponse {
  users: IYandexUser[]
}

export interface GetVerdictsByAliasResponse {
  count: number
  submissions: ISubmission[]
}
