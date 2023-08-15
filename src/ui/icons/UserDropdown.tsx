import React, { FC } from 'react'

import { getAvatarUrl } from '@helpers/getAvatarUrl'

import { IYandexUser } from 'src/types/types'

import { IconBaseProps } from './types'

interface UserDropdownProps extends IconBaseProps {
  yandexUser: IYandexUser
  width: number
  height: number
  onSendProblemAssign?: (user: IYandexUser, problemAlias: string) => void
  problemAlias?:string
}

export const UserDropdown: FC<UserDropdownProps> = ({ yandexUser, width, height, onSendProblemAssign, problemAlias }) => {
  const avatarUrl = getAvatarUrl(yandexUser.default_avatar_id)
  return (
    <img
      width={width}
      height={height}
      src={avatarUrl}
      style={{ borderRadius: '16px', margin: '0px 5px' }}
      alt="avatar"
      onClick={()=>onSendProblemAssign(yandexUser, problemAlias)}
    />
  )
}
