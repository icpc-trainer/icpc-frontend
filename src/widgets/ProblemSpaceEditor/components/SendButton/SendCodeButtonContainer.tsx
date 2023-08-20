import React, { useContext, useEffect, useState } from 'react'

import { TrainingFinishedHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import { CodeContext } from '@contexts/codeContext'
import { useUserControl } from '@hooks/useUserControl'

import { SendCodeButton } from '@widgets/ProblemSpaceEditor/components/SendButton/SendCodeButton'

export const SendCodeButtonContainer = () => {
  const { hasCurrentUserControl } = useUserControl()
  const { onSendCode } = useContext(CodeContext)

  const [isTrainingFinished, setIsTrainingFinished] = useState(false)

  const trainingFinishedEventHandler: TrainingFinishedHandler = () => {
    console.log('button')
    setIsTrainingFinished(true)
  }

  useEffect(() => {
    return workSpaceSocket.subscribeTrainingFinished(trainingFinishedEventHandler)
  }, [])

  const isDisabled = !hasCurrentUserControl || isTrainingFinished

  return <SendCodeButton onSendCode={onSendCode} isDisabled={isDisabled} />
}
