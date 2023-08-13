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
  status: string
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

export interface SubmissionFull {
  checkerLog: SubmissionChecker[]
  compileLog: string
  compiler: string
  contestId: number
  contestName: string
  diff: string
  finalScore: string
  ip: string
  maxMemoryUsage: number
  maxTimeUsage: number
  participantInfo: SubmissionParticipantInfo
  postprocessorMessage: string
  precompileChecks: any
  preliminaryScore: string
  problemAlias: string
  problemId: string
  problemName: string
  runId: number
  source: string
  status: string
  submissionTime: string
  testFileType: string
  timeFromStart: number
  verdict: string
}

export interface SubmissionChecker {
  answer: string
  checkerError: string
  error: string
  input: string
  isSample: boolean
  memoryUsed: number
  message: number
  output: string
  runningTime: number
  sequenceNumber: number
  testName: string
  testsetIdx: number
  verdict: string
}

export interface SubmissionParticipantInfo {
  id: number
  login: string
  name: string
  startTime: string
  uid: string
}
