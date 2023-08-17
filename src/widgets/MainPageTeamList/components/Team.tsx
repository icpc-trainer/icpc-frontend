import React, { FC, FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { ITeam } from 'src/types/types'

import styles from './Team.module.css'

interface TeamProps {
  team: ITeam
}

export const Team: FC<TeamProps> = ({ team }) => {
  return (
    <div className={styles.teamContainer}>
      <span>{team.name}</span>

      <button className={styles.buttonActive}>
        <Link to="/lobby">Присоединиться</Link>
      </button>
    </div>
  )
}
