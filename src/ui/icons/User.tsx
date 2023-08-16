import React, { FC } from 'react'

import { IconBaseProps } from './types'

export const User: FC<IconBaseProps> = ({ color, width, height, disabled, ...rest }) => (
  <svg
    width={width}
    height={height}
    style={{ margin: '4px 5px' }}
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.40008 23.5C8.80008 22.6111 10.1834 21.9389 11.5501 21.4833C12.9167 21.0278 14.4001 20.8 16.0001 20.8C17.6001 20.8 19.089 21.0278 20.4667 21.4833C21.8445 21.9389 23.2334 22.6111 24.6334 23.5C25.6112 22.3 26.3056 21.0889 26.7167 19.8667C27.1279 18.6444 27.3334 17.3556 27.3334 16C27.3334 12.7778 26.2501 10.0833 24.0834 7.91667C21.9167 5.75001 19.2223 4.66667 16.0001 4.66667C12.7779 4.66667 10.0834 5.75001 7.91675 7.91667C5.75008 10.0833 4.66675 12.7778 4.66675 16C4.66675 17.3556 4.87786 18.6444 5.30008 19.8667C5.7223 21.0889 6.4223 22.3 7.40008 23.5ZM15.9939 17C14.7091 17 13.6279 16.559 12.7501 15.6771C11.8723 14.7952 11.4334 13.7119 11.4334 12.4271C11.4334 11.1424 11.8744 10.0611 12.7563 9.18334C13.6382 8.30556 14.7215 7.86667 16.0063 7.86667C17.291 7.86667 18.3723 8.30763 19.2501 9.18954C20.1279 10.0714 20.5667 11.1548 20.5667 12.4395C20.5667 13.7243 20.1258 14.8056 19.2439 15.6833C18.362 16.5611 17.2786 17 15.9939 17ZM15.9866 29.3333C14.1389 29.3333 12.4025 28.9833 10.7774 28.2833C9.15233 27.5833 7.73871 26.6278 6.53658 25.4167C5.33447 24.2056 4.38897 22.7907 3.70008 21.172C3.01119 19.5533 2.66675 17.8238 2.66675 15.9833C2.66675 14.1429 3.01675 12.4134 3.71675 10.7947C4.41675 9.17602 5.3723 7.76667 6.58341 6.56667C7.79453 5.36667 9.20943 4.41667 10.8281 3.71667C12.4468 3.01667 14.1763 2.66667 16.0167 2.66667C17.8572 2.66667 19.5867 3.01667 21.2054 3.71667C22.8241 4.41667 24.2334 5.36667 25.4334 6.56667C26.6334 7.76667 27.5834 9.17778 28.2834 10.8C28.9834 12.4222 29.3334 14.1526 29.3334 15.9911C29.3334 17.8297 28.9834 19.5574 28.2834 21.1745C27.5834 22.7915 26.6334 24.2056 25.4334 25.4167C24.2334 26.6278 22.8209 27.5833 21.1958 28.2833C19.5707 28.9833 17.8343 29.3333 15.9866 29.3333Z"
      fill={disabled ? 'var(--color-grey-secondary)' : color}
    />
  </svg>
)
