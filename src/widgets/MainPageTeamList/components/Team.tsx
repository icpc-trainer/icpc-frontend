import React, { FC, FunctionComponent } from 'react'

import { ITeam } from 'src/types/types'

import styles from './Team.module.css'
import { Link } from 'react-router-dom'

interface TeamProps {
    team: ITeam
}

export const Team: FC<TeamProps> = ({ team }) => {
    return (
        <div className={styles.teamContainer} key={team.id}>
            <span>{team.name}</span>

            <button className={styles.buttonActive}>
                <Link to="/lobby">Присоединиться</Link>
            </button>
        </div>
    )
}