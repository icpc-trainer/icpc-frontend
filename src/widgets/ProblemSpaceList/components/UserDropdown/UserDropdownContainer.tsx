import React, { FC, useContext } from 'react'

import { workSpaceSocket } from '@sockets/work-space-socket'

import { ProblemItemContext } from '@contexts/problemItemContext'

import { IYandexUser } from 'src/types/types'

import { UserDropdown } from './UserDropdown'

interface UserDropdownProps {
  user: IYandexUser
}

export const UserDropdownContainer: FC<UserDropdownProps> = ({ user }) => {
  const { problem } = useContext(ProblemItemContext)

  const onSendProblemAssigned = () => {
    workSpaceSocket.sendProblemAssigned({ user, problemAlias: problem.alias })
  }

  return <UserDropdown user={user} onSendProblemAssign={onSendProblemAssigned} />
}
