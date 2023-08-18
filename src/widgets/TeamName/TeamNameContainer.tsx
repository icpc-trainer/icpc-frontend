import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { api } from '@api/index'

import { ITeam } from 'src/types/types'

import { TeamName } from './TeamName'

export const TeamNameContainer: FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<ITeam>(null)
  const { teamId } = useParams<{ teamId: string }>()

  useEffect(() => {
    api
      .getUserTeams()
      .then(res => {
        const foundTeam = res.find(team => team.id === parseInt(teamId, 10))
        if (foundTeam) {
          setSelectedTeam(foundTeam)
        }
      })
      .catch(console.log)
  }, [teamId])

  if (!selectedTeam) {
    return null
  }

  return <TeamName teamName={selectedTeam.name} />
}
