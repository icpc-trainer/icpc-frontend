import React, { FC } from 'react'

import { IconBaseProps } from './types'

export const Check: FC<IconBaseProps> = ({ color, width, height, disabled, ...rest }) => (
  <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.87504 14.875L3.20837 10.2083L4.10421 9.31251L7.87504 13.0833L15.875 5.08334L16.7709 5.97918L7.87504 14.875Z"
      fill={disabled ? 'var(--color-grey-secondary)' : color}
    />
  </svg>
)
