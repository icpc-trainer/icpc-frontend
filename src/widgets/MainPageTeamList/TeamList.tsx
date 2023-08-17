import { GetItemKeyFunction, List, RenderItemFunction } from '@ui/List/List'
import React, { FC, useCallback, useEffect, useState } from 'react'
import styles from './TeamList.module.css'
import { ITeam } from 'src/types/types'
import { Team } from './components/Team'

interface TeamListProps {
    teams: ITeam[]
}
export const TeamList: FC<TeamListProps> = ({teams}) => {
    const getTeamKey: GetItemKeyFunction<ITeam> = team => team.id
    const renderTeam: RenderItemFunction<ITeam> = team => <Team team={team} />

  return <List<ITeam> 
    data={teams}
    getItemKey={getTeamKey}
    renderItem={renderTeam}
    itemClassName={styles.team}
    listClassName={styles.teams}
    />
}

