import React, { FC } from 'react'

import { useGetContestsQuery } from '@store/api/api'

import { ContestsList } from './ContestsList'
import { pdfContests } from "@constants/pdfContests"

export const ContestsListContainer: FC = () => {
  const { data: contests } = useGetContestsQuery()

  if (!contests) return null

  return <ContestsList contests={contests.filter(({ id }) => !pdfContests.includes(Number(id)))} />
}
