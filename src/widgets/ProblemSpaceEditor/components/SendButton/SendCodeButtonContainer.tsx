import React, { useContext, useEffect, useState } from 'react'

import { ContestFinishedHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import { CodeContext } from '@contexts/codeContext'
import { useUserControl } from '@hooks/useUserControl'

import { SendCodeButton } from '@widgets/ProblemSpaceEditor/components/SendButton/SendCodeButton'

export const SendCodeButtonContainer = () => {
  const { hasCurrentUserControl } = useUserControl()
  const { onSendCode, isSameCode } = useContext(CodeContext)

  const [isContestFinished, setIsContestFinished] = useState(false)

  const contestFinishedEventHandler: ContestFinishedHandler = () => {
    console.log('button')
    setIsContestFinished(true)
  }

  useEffect(() => {
    return workSpaceSocket.subscribeContestFinished(contestFinishedEventHandler)
  }, [])

  const isDisabled = !hasCurrentUserControl || isContestFinished

  return <SendCodeButton onSendCode={onSendCode} isDisabled={isDisabled} isSameCode={isSameCode} />
}
