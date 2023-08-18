import React, { FC } from 'react'
import { useNavigate } from 'react-router'

import { api } from '@api/index'

import { Team } from '@widgets/MainPageTeamList/components/Team'

import { ITeam } from '../../../types/types'

interface TeamContainerProps {
  team: ITeam
}

export const TeamContainer: FC<TeamContainerProps> = ({ team }) => {
  const navigate = useNavigate()

  const onChoose = () => {
    api
      .getTeamStatus(team.id)
      .then(teamStatus => {
        navigate(`/workspace/${teamStatus.id}`)
      })
      .catch(err => {
        if (err.response.status === 404) {
          navigate(`/lobby/${team.id}`)
        }
      })
  }

  return <Team team={team} onChoose={onChoose} />
}
