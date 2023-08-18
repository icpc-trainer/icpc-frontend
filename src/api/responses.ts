import { IMessage, IProblem, ISubmission, ITeam, ITeamStatus, IYandexUser } from 'src/types/types'

export interface GetProblemsResponse {
  problems: IProblem[]
}
export type GetTeamsResponse = ITeam[]

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

export type GetTeamStatusResponse = ITeamStatus
