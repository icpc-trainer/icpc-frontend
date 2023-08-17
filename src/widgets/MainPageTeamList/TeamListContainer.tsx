import React, { FC, useCallback, useEffect, useState } from 'react'
import { TeamList } from './TeamList'
import { ITeam } from 'src/types/types'
import { api } from '@api/index'
import { BlockWrapper } from '@ui/BlockWrapper/BlockWrapper'
import { Loading } from '@ui/Loading/Loading'

export const TeamListContainer = () => {
    const [teams, setTeams] = useState<ITeam[]>([])
    useEffect(()=>{
        api.getUserTeams()
            .then(setTeams)
            .catch(console.log)
    }, [])

    if (teams === null) {
        return <BlockWrapper>
            <span>Loading</span>
        </BlockWrapper>
    }

  return <TeamList teams={teams}/>
}
