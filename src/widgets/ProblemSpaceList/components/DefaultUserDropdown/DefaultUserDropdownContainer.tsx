import React, { useContext } from 'react'

import { workSpaceSocket } from '@sockets/work-space-socket'

import { ProblemItemContext } from '@contexts/problemItemContext'

import { DefaultUserDropdown } from '@widgets/ProblemSpaceList/components/DefaultUserDropdown/DefaultUserDropdown'

export const DefaultUserDropdownContainer = () => {
  const { problem, onCloseDropdown } = useContext(ProblemItemContext)

  const onSendProblemAssigned = () => {
    workSpaceSocket.sendProblemAssigned({ user: null, problemAlias: problem.alias })
    onCloseDropdown()
  }

  return <DefaultUserDropdown onSendProblemAssigned={onSendProblemAssigned} />
}
