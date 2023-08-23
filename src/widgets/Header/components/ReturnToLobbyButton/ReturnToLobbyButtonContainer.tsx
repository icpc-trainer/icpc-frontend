import React, { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate, useParams } from 'react-router'

import { TrainingFinishedHandler } from '@sockets/types'
import { workSpaceSocket } from '@sockets/work-space-socket'

import { api } from '@api/index'

import { ReturnToLobbyButton } from '@widgets/Header/components/ReturnToLobbyButton/ReturnToLobbyButton'

import { ReturnToLobbyModal } from '../ReturnToLobbyModal/ReturnToLobbyModal'

export const ReturnToLobbyButtonContainer: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { trainingSessionId } = useParams()
  const navigate = useNavigate()

  const onCompleteTraining = () => {
    api.postCompleteTrainingSession(trainingSessionId).then(console.log).catch(console.log)
  }

  const onOpenModal = () => setIsModalOpen(true)
  const onCloseModal = () => setIsModalOpen(false)

  const trainingFinishedEventHandler: TrainingFinishedHandler = ({ teamId }) => {
    navigate(`/lobby/${teamId}`)
  }

  useEffect(() => {
    return workSpaceSocket.subscribeTrainingFinished(trainingFinishedEventHandler)
  }, [])

  return (
    <>
      <ReturnToLobbyButton onOpenModal={onOpenModal} />
      {isModalOpen &&
        createPortal(
          <ReturnToLobbyModal onCompleteTraining={onCompleteTraining} onClose={onCloseModal} />,
          document.getElementById('modal')!,
        )}
    </>
  )
}
