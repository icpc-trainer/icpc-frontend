import React, { useEffect } from 'react'
import { useParams } from 'react-router'

import { api } from '@api/index'

import { useCountdown } from '@hooks/useCountdown'
import { convertMsToTime } from '@utils/converMsToTime'

import { Timer } from './Timer'

export const TimerContainer = () => {
  const { trainingSessionId } = useParams()

  const { secondsLeft, setSecondsLeft } = useCountdown()

  useEffect(() => {
    api
      .getParticipation(trainingSessionId)
      .then(({ participantLeftTime }) => {
        setSecondsLeft(participantLeftTime)
      })
      .catch(console.log)
  }, [])

  const secondsLeftString = convertMsToTime(secondsLeft)

  return <Timer secondsLeftString={secondsLeftString} />
}
