import React, { FC, useState } from 'react'

import { ReturnToLobbyButton } from '@widgets/Header/components/ReturnToLobbyButton/ReturnToLobbyButton'
import { createPortal } from 'react-dom'
import { ReturnToLobbyModal } from '../ReturnToLobbyModal/ReturnToLobbyModal'
import { useNavigate, useParams } from 'react-router'
import { api } from '@api/index'

export const ReturnToLobbyButtonContainer: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { trainingSessionId } = useParams()
  const navigate = useNavigate()

  const onCompleteTraining = () => {
    api.postCompleteTrainingSession(trainingSessionId)
      .then(console.log)
      .catch(console.log)
    navigate('/')
  } 

  return <>
    <ReturnToLobbyButton setIsModalOpen={setIsModalOpen} />
    {isModalOpen &&
      createPortal(
        <ReturnToLobbyModal onCompleteTraining={onCompleteTraining} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />,
        document.getElementById('modal')!,
      )}
  </>
}
