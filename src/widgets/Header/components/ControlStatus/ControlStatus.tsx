import React, { FC } from 'react'

import { KeyboardOff } from '@icons/KeyboardOff'
import { KeyboardOn } from '@icons/KeyboardOn'

interface ControlStatusProps {
  isActive: boolean
}

export const ControlStatus: FC<ControlStatusProps> = ({ isActive }) => {
  return isActive ? (
    <KeyboardOn color="var(--color-black-typo-primary)" width={32} height={32} />
  ) : (
    <KeyboardOff color="var(--color-grey-secondary)" width={32} height={32} />
  )
}
