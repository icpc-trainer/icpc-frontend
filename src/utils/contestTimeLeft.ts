export const contestTimeLeft = (contestStatus: string, contestDateCreated: string, contestDurationInMs: number) => {
  let contestDateCreatedInMs = new Date(contestDateCreated).getTime()
  // console.log(contestDateCreatedInMs)
  let finishTimeInMs = contestDateCreatedInMs + contestDurationInMs
  console.log(finishTimeInMs)
  // return finishTime
}
