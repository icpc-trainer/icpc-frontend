interface Statement {
  type: string
  locale: string
  path: string
}
export interface Limit {
  compilerName: string
  idlenessLimit: number
  memoryLimit: number
  outputLimit: number
  timeLimit: number
}
export interface Problem {
  alias: string
  compiler: string[]
  description: string
  id: string
  limits: Limit[]
  name: string
  problemType: string
  statements: Statement[]
  testCount: number | null
}
export type Problems = Problem[]

export interface YandexUser {
  client_id: string
  default_avatar_id: string
  default_email: string
  display_name: string
  emails: string[]
  first_name: string
  id: string
  is_avatar_empty: boolean
  last_name: string
  login: string
  psuid: string
  real_name: string
  sex: string
}

export interface Message {
  id: string
  userId: number
  userFirstName: string
  userLastName: string
  userLogin: string
  problemAlias: string
  content: string
  dtCreated: string
}

export interface Submission {
  compileLog: string
  compiler: string
  diff: string
  problemAlias: string
  problemId: string
  score: number
  source: string
  submissionTime: string
  timeFromStart: number
  verdict: string
  id: number
}
