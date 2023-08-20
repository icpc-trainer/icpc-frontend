export type PostSubmissionsRequest = FormData

export interface PostCommentRequest {
  content: string
}

export interface CreateTrainingSession {
  team_id: string
  contest_id: string
}
