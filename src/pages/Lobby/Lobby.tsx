import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'

import { lobbySocket } from '@sockets/lobby-socket'
import { ContestSelectedHandler, TrainingStartedHandler } from '@sockets/types'

import { api } from '@api/index'

import { useGetCurrentUserQuery } from '@store/api/api'

import { urls } from '@constants/urls'
import { SelectedContestContext } from '@contexts/contestListContext'

import { BlockWrapper } from '@ui/BlockWrapper/BlockWrapper'
import { Button } from '@ui/Button/Button'
import { ContestsListContainer } from '@widgets/ContestsList/ContestsListContainer'
import { LobbyOnlineUserListContainer } from '@widgets/LobbyOnlineUserList/LobbyOnlineUserListContainer'
import { TeamNameContainer } from '@widgets/TeamName/TeamNameContainer'

import styles from './Lobby.module.css'

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

  useEffect(() => {
    api.getSelectedContest(teamId).then(setSelectedContestId).catch(console.log)

    const contestSelectedUnsubscribe = lobbySocket.subscribeContestSelected(contestSelectedEventHandler)
    const trainingStartedUnsubscribe = lobbySocket.subscribeTrainingStarted(trainingStartedEventHandler)
    const closeSocket = lobbySocket.init(
      `${urls.websocketLobby}?team_id=${teamId}&user_id=${currentUser.id}`,
      currentUser,
    )

    return () => {
      contestSelectedUnsubscribe()
      trainingStartedUnsubscribe()
      closeSocket()
    }
  }, [])

  return (
    <SelectedContestContext.Provider value={{ selectedContestId }}>
      <div className={styles.lobby}>
        <div className={styles.contestList}>
          <div className={styles.buttonContainer}>
            <Link className={styles.link} to="/">
              На главную
            </Link>

            <a className={styles.link} href="https://t.me/+JhE-UUz1BGc5OWEy" target="_blank" rel="noopener noreferrer">
              Telegram-чатик
            </a>
          </div>
          <BlockWrapper className={styles.blockWrapper}>
            <ContestsListContainer />
          </BlockWrapper>
        </div>
        <div className={styles.startTraining}>
          <div className={styles.startTrainingWrapper}>
            <Button
              type="button"
              disabled={selectedContestId === null}
              title={'Начать тренировку'}
              onClick={onCreateTrainingSession}
              className={styles.startButton}
            />

            <TeamNameContainer />
            <LobbyOnlineUserListContainer />
          </div>
        </div>
      </div>
    </SelectedContestContext.Provider>
  )
}

export default Lobby
