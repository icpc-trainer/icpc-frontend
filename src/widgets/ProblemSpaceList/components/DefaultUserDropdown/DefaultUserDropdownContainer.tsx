import React, { useContext } from 'react'

import { workSpaceSocket } from '@sockets/work-space-socket'

import { ProblemItemContext } from '@contexts/problemItemContext'

import { DefaultUserDropdown } from '@widgets/ProblemSpaceList/components/DefaultUserDropdown/DefaultUserDropdown'

export const DefaultUserDropdownContainer = () => {
  const { problem } = useContext(ProblemItemContext)

  const onSendProblemAssigned = () => {
    workSpaceSocket.sendProblemAssigned({ user: null, problemAlias: problem.alias })
  }

  return <DefaultUserDropdown onSendProblemAssigned={onSendProblemAssigned} />
}
