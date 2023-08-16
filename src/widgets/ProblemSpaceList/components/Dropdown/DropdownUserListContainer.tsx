import React, { useContext, useEffect, useState } from 'react'

import { socket } from '@sockets/socket'
import { UserHandler, UserLeaveHandler } from '@sockets/types'

import { api } from '@api/index'

import { trainingSessionId } from '@constants/training-session-id'

import { OnlineUserList } from '@widgets/Header/components/OnlineUserList/OnlineUserList'

import { IYandexUser } from 'src/types/types'

import { DropdownUserList } from './DropdownUserList'
import { useParams } from 'react-router'
import { User } from '@icons/User'

import { DefaultUserDropdown } from '../UserDropdown/DefaultUserDropdown'
import { ProblemItemContext } from '@contexts/problemItemContext'

export const DropdownUserListContainer = () => {
    const [onlineUsers, setOnlineUsers] = useState<IYandexUser[]>([])
    const { problem } = useContext(ProblemItemContext)

    useEffect(() => {
        api.getOnlineUsers(trainingSessionId).then(setOnlineUsers).catch(console.log)
    }, [])

    const onSendProblemAssign = (user: IYandexUser | null) => {
        socket.sendProblemAssigned({ user: user, problemAlias: problem.alias })
    }

    return (
        <>
            <DropdownUserList onlineUsers={onlineUsers}/>
            <DefaultUserDropdown onSendProblemAssign={onSendProblemAssign} />
        </>
    )
}
