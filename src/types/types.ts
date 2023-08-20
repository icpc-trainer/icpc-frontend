interface IStatement {
  type: string
  locale: string
  path: string
}
export interface ILimit {
  compilerName: string
  idlenessLimit: number
  memoryLimit: number
  outputLimit: number
  timeLimit: number
}
export interface IProblem {
  alias: string
  compilers: string[]
  description: string
  id: string
  limits: ILimit[]
  name: string
  problemType: string
  statements: IStatement[]
  testCount: number | null
  status: string
  assignedUser: IYandexUser | null
}

export interface IYandexUser {
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

export interface IMessage {
  id: string
  userId: number
  userFirstName: string
  userLastName: string
  userLogin: string
  problemAlias: string
  content: string
  dtCreated: string
}

export interface ITeam {
  id: number
  name: string
}

export interface ISubmission {
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

export interface ISubmissionFull {
  checkerLog: ISubmissionChecker[]
  compileLog: string
  compiler: string
  contestId: number
  contestName: string
  diff: string
  finalScore: string
  ip: string
  maxMemoryUsage: number
  maxTimeUsage: number
  participantInfo: ISubmissionParticipantInfo
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

export interface ISubmissionChecker {
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

export interface ISubmissionParticipantInfo {
  id: number
  login: string
  name: string
  startTime: string
  uid: string
}

export enum ProblemStatuses {
  NotSubmitted = 'NOT_SUBMITTED',
  Failed = 'FAILED',
  Passed = 'PASSED',
}

export interface IContest {
  id: string
  name: string
}

export interface ITeamStatus {
  id: string
  status: string
  dt_created: string
}

export interface ILeaderBoard {
  titles: ILeaderBoardProblemTitle[]
  rows: ILeaderBoardRow[]
}

export interface ILeaderBoardProblemTitle {
  title: string
  name: string
}

export interface ILeaderBoardRow {
  participantInfo: ISubmissionParticipantInfo
  placeFrom: number[]
  placeTo: number[]
  score: string
  problemResults: ILeaderBoardProblemResult[]
}

export interface ILeaderBoardProblemResult {
  title?: string
  name?: string
  submitDelay: number
  status: 'ACCEPTED' | 'NOT_SUBMITTED' | 'NOT_ACCEPTED'
  score: string
  submissionCount: string
}
