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
        if (participantLeftTime) {
          const minutes = parseInt(participantLeftTime.match(/(\d+)M/)[1])
          const seconds = parseInt(participantLeftTime.match(/(\d+\.\d+)S/)[1], 10)
          const totalSeconds = minutes * 60 + seconds

          setSecondsLeft(totalSeconds)
        }
      })
      .catch(console.log)
  }, [])

  const secondsLeftString = convertMsToTime(secondsLeft)

  return <Timer secondsLeftString={secondsLeftString} />
}
