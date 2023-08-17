import React, { FC, useState } from 'react'

import { useGetContestsQuery } from '@store/api/api'

import { ContestsList } from './ContestsList'

export const ContestsListContainer: FC = () => {
  const { data: contests } = useGetContestsQuery()

  if (!contests) return null

  return <ContestsList contests={contests} />
}
