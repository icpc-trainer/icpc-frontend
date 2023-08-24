import React, { FC } from 'react'

import { useGetContestsQuery } from '@store/api/api'

import { pdfContests } from '@constants/pdfContests'

import { ContestsList } from './ContestsList'

export const ContestsListContainer: FC = () => {
  const { data: contests } = useGetContestsQuery()

  if (!contests) return null

  return <ContestsList contests={contests.filter(({ id }) => !pdfContests.includes(Number(id)))} />
}
