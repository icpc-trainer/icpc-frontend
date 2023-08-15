import React, { useEffect, useState } from 'react'

import { api } from '@api/index'

import { trainingSessionId } from '@constants/training-session-id'
import { useCountdown } from '@hooks/useCountdown'
import { convertMsToTime } from '@utils/converMsToTime'

import { Timer } from './Timer'

export const TimerContainer = () => {
  const [contestStatus, setContestStatus] = useState('')
  const [contestDateCreated, setContestDateCreated] = useState('')
  const [contestDurationInSec, setContestDurationInSec] = useState<number>(null)

  const { secondsLeft, setSecondsLeft } = useCountdown(contestDurationInSec)

  const contestid = '51004'

  useEffect(() => {
    api
      .getContestStatusAndDate(trainingSessionId)
      .then(({ dt_created, status }) => {
        setContestStatus(status)
        setContestDateCreated(dt_created)
      })
      .catch(console.log)

    api
      .getContestInfo(contestid)
      .then(({ duration }) => {
        setSecondsLeft(duration)
      })
      .catch(console.log)
  }, [contestDurationInSec])

  const secondsLeftString = convertMsToTime(secondsLeft)
  return <Timer secondsLeftString={secondsLeftString} />
}
