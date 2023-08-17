import React, { FC } from 'react'

import { useGetContestsQuery } from '@store/api/api'

import { ContestsList } from './ContestsList'

export const ContestsListContainer: FC = () => {
  const { data: contests } = useGetContestsQuery()
  if (!contests) {
    return null // настроить свой лоадер
  }
  return <ContestsList contests={contests} />
}

