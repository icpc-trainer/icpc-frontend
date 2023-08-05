import * as React from "react"
import { FC } from "react"

import { IconBaseProps } from "./types"

export const KeyboardOff: FC<IconBaseProps> = ({ color, width, height, disabled, ...rest }) => (
  <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.5667 30.1333L3.53341 5.16667L4.96675 3.73334L29.9667 28.7333L28.5667 30.1333ZM10.0001 21.1667H22.4001L20.4001 19.1667H10.0001V21.1667ZM6.76675 17H8.76675V15H6.76675V17ZM10.9001 17H12.9001V15H10.9001V17ZM23.2334 17H25.2334V15H23.2334V17ZM6.76675 12.8333H8.76675V10.8333H6.76675V12.8333ZM19.1334 12.8333H21.1334V10.8333H19.1334V12.8333ZM23.2334 12.8333H25.2334V10.8333H23.2334V12.8333ZM4.66675 25.3333C4.13341 25.3333 3.66675 25.1278 3.26675 24.7167C2.86675 24.3056 2.66675 23.8444 2.66675 23.3333V8.66667C2.66675 8.13334 2.86675 7.66667 3.26675 7.26667C3.66675 6.86667 4.13341 6.66667 4.66675 6.66667H7.90008L26.5667 25.3333H4.66675ZM28.7334 24.6667L21.1334 17V15H19.0667L17.0001 12.8333V10.8333H14.9001L10.7667 6.66667H27.3334C27.8667 6.66667 28.3334 6.86667 28.7334 7.26667C29.1334 7.66667 29.3334 8.13334 29.3334 8.66667V23.2667C29.3334 23.5333 29.2779 23.7889 29.1667 24.0333C29.0556 24.2778 28.9112 24.4889 28.7334 24.6667Z"
      fill={disabled ? "var(--color-grey-secondary)" : color}
    />
  </svg>
)