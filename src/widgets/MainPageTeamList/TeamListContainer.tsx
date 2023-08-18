import React, { useEffect, useState } from 'react'

import { api } from '@api/index'

import { ITeam } from 'src/types/types'

import { TeamList } from './TeamList'

export const TeamListContainer = () => {
  const [teams, setTeams] = useState<ITeam[]>(null)
  useEffect(() => {
    api.getUserTeams().then(setTeams).catch(console.log)
  }, [])

  if (!teams) {
    return null
  }

  return <TeamList teams={teams} />
}
