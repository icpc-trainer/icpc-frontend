import React, { FC } from 'react'

import { ITeam } from 'src/types/types'

import styles from './Team.module.css'

interface TeamProps {
  team: ITeam
  onChoose: () => void
}

export const Team: FC<TeamProps> = ({ team, onChoose }) => {
  return (
    <div className={styles.teamContainer}>
      <span>{team.name}</span>

      <button className={styles.buttonActive} onClick={onChoose}>
        Присоединиться
      </button>
    </div>
  )
}
