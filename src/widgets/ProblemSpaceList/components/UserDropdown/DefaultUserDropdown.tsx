import React, { FC } from 'react'

import { getAvatarUrl } from '@helpers/getAvatarUrl'

import { User } from '@icons/User'

import { IYandexUser } from 'src/types/types'

import { IconBaseProps } from '../../../../ui/icons/types'

import styles from './DefaultUserDropdown.module.css'

interface DefaultUserDropdownProps {
  onSendProblemAssign: (user: IYandexUser | null) => void
}

export const DefaultUserDropdown: FC<DefaultUserDropdownProps> = ({ onSendProblemAssign }) => {
  return (
    <button className={styles.defaultUserDropdown} onClick={() => onSendProblemAssign(null)}>
      <User width={26} height={26} color={'var(--color-black-typo-primary)'} />
    </button>
  )
}
