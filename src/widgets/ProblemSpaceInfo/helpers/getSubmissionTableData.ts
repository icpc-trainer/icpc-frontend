import { ISubmission } from '../../../types/types'

export type OnOpenDetails = (id: number) => void

export interface ISubmissionTableItem extends ISubmission {
  onOpenDetails: OnOpenDetails
}

export const getSubmissionTableData = (
  submissions: ISubmission[],
  onOpenDetails: OnOpenDetails,
): ISubmissionTableItem[] => {
  return submissions.map(submission => ({ ...submission, onOpenDetails }))
}
