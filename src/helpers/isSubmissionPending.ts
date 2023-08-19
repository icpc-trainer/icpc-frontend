export const isSubmissionPending = (verdict: string) => {
  return verdict === 'No report' || verdict === ''
}
