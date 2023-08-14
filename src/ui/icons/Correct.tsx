import React, { FC } from 'react'

import { IconBaseProps } from './types'

export const Correct: FC<IconBaseProps> = ({ color, width, height, disabled, ...rest }) => (
  <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.6 23.8L5.1333 16.3333L6.56663 14.9L12.6 20.9333L25.4 8.13333L26.8333 9.56666L12.6 23.8Z"
      fill={disabled ? 'var(--color-grey-secondary)' : color}
    />
  </svg>
)
