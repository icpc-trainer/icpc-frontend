import React, { FC, useContext } from 'react'

import { socket } from '@sockets/socket'

import { ProblemItemContext } from '@contexts/problemItemContext'
import { getAvatarUrl } from '@helpers/getAvatarUrl'

import { IYandexUser } from 'src/types/types'

import { IconBaseProps } from '../../../../ui/icons/types'
import { UserDropdown } from './UserDropdown'

interface UserDropdownProps {
  user: IYandexUser
}

export const UserDropdownContainer: FC<UserDropdownProps> = ({ user }) => {
  const { problem } = useContext(ProblemItemContext)

  const onSendProblemAssign = () => {
    socket.sendProblemAssigned({ user, problemAlias: problem.alias })
  }

  return <UserDropdown user={user} onSendProblemAssign={onSendProblemAssign} />
}
