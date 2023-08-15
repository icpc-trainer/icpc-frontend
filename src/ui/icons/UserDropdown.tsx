import React, { FC } from 'react'

import { IconBaseProps } from './types'
import { getAvatarUrl } from '@helpers/getAvatarUrl'
import { IYandexUser } from 'src/types/types'

interface UserDropdownProps extends IconBaseProps {
    yandexUser: IYandexUser
    width:number
    height:number

}

export const UserDropdown: FC<UserDropdownProps> = ({ yandexUser, width, height }) => {
    const avatarUrl = getAvatarUrl(yandexUser.default_avatar_id)
    return <img width={width} height={height} src={avatarUrl} style={{borderRadius: "16px", margin:"0px 5px"}} alt="avatar" />
}
