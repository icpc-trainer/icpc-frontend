import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import { api } from '../../api'
import { ProblemSpaceDescription } from './ProblemSpaceDescription'

export const ProblemSpaceDescriptionContainer = () => {
  const { id: contestId, alias: currentAlias } = useParams()

  const {
    data: currentProblemDescription,
    isLoading,
    isError,
    refetch,
  } = useQuery(['currentProblemAlias', currentAlias], () => api.getProblemStatement(contestId, currentAlias))

  return (
    <ProblemSpaceDescription
      currentProblemDescription={currentProblemDescription}
      isLoading={isLoading}
      isError={isError}
      refetch={refetch}
    />
  )
}
