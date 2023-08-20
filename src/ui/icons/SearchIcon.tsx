import React, { FC } from 'react'

import { IconBaseProps } from './types'

export const SearchIcon: FC<IconBaseProps> = ({ color, width, height, disabled, ...rest }) => (
  <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      d="M13.6667 13.6667L19 19M9.22222 15.4444C5.78578 15.4444 3 12.6587 3 9.22222C3 5.78578 5.78578 3 9.22222 3C12.6587 3 15.4444 5.78578 15.4444 9.22222C15.4444 12.6587 12.6587 15.4444 9.22222 15.4444Z"
      stroke={disabled ? 'var(--color-grey-secondary)' : color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
