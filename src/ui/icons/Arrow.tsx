import React, { FC } from 'react'

import { IconBaseProps } from './types'

export const Arrow: FC<IconBaseProps> = ({ color, width, height, disabled, ...rest }) => (
  <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 20.5L8 12.5L9.43333 11.0667L16 17.6667L22.5667 11.1L24 12.5333L16 20.5Z"
      fill={disabled ? 'var(--color-grey-secondary)' : color}
    />
  </svg>
)
