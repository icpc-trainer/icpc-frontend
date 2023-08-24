import React, { useContext } from 'react'

import { CodeContext } from '@contexts/codeContext'
import { useUserControl } from '@hooks/useUserControl'

import { SendCodeButton } from '@widgets/ProblemSpaceEditor/components/SendButton/SendCodeButton'

export const SendCodeButtonContainer = () => {
  const { hasCurrentUserControl } = useUserControl()
  const { onSendCode, isSameCode } = useContext(CodeContext)

  const isDisabled = !hasCurrentUserControl

  return <SendCodeButton onSendCode={onSendCode} isDisabled={isDisabled} isSameCode={isSameCode} />
}
