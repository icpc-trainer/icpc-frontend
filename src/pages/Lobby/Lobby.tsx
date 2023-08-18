import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import { lobbySocket } from '@sockets/lobby-socket'
import { ContestSelectedHandler, TrainingStartedHandler } from '@sockets/types'

import { api } from '@api/index'

import { useGetCurrentUserQuery } from '@store/api/api'

import { urls } from '@constants/urls'
import { SelectedContestContext } from '@contexts/contestListContext'

import { User } from '@icons/User'
import { BlockWrapper } from '@ui/BlockWrapper/BlockWrapper'
import { ContestsListContainer } from '@widgets/ContestsList/ContestsListContainer'

import styles from './Lobby.module.css'
import { TeamNameContainer } from "@widgets/TeamName/TeamNameContainer"
import { LobbyOnlineUserListContainer } from "@widgets/LobbyOnlineUserList/LobbyOnlineUserListContainer"

const Lobby = () => {
  const [selectedContestId, setSelectedContestId] = useState(null)

  const { teamId } = useParams()
  const navigate = useNavigate()

  const { data: currentUser } = useGetCurrentUserQuery()

  const onCreateTrainingSession = () => {
    api.createTrainingSession(teamId, selectedContestId).then(console.log).catch(console.log)
  }

  const contestSelectedEventHandler: ContestSelectedHandler = ({ contestId }) => {
    setSelectedContestId(contestId)
  }

  const trainingStartedEventHandler: TrainingStartedHandler = ({ id }) => {
    navigate(`/workspace/${id}`)
  }

  lobbySocket.init(`${urls.websocketLobby}?team_id=${teamId}&user_id=${currentUser.id}`, currentUser)

  useEffect(() => {
    api.getSelectedContest(teamId).then(setSelectedContestId).catch(console.log)

    const contestSelectedUnsubscribe = lobbySocket.subscribeContestSelected(contestSelectedEventHandler)
    const trainingStartedUnsubscribe = lobbySocket.subscribeTrainingStarted(trainingStartedEventHandler)

    return () => {
      contestSelectedUnsubscribe()
      trainingStartedUnsubscribe()
    }
  }, [])

  return (
    <SelectedContestContext.Provider value={{ selectedContestId }}>
      <div className={styles.lobby}>
        <div className={styles.contestList}>
          <button className={styles.askQuestion}>Задать вопрос</button>
          <BlockWrapper className={styles.blockWrapper}>
            <ContestsListContainer />
          </BlockWrapper>
        </div>
        <div className={styles.startTraining}>
          <div className={styles.startTrainingWrapper}>
            <button className={styles.startButton} onClick={onCreateTrainingSession}>
              Начать тренировку
            </button>
            <TeamNameContainer />
            <LobbyOnlineUserListContainer />
          </div>
        </div>
      </div>
    </SelectedContestContext.Provider>
  )
}

export default Lobby
