import React, { useEffect, useState } from 'react'

import { socket } from '@sockets/socket'
import { UserHandler, UserLeaveHandler } from '@sockets/types'

import { api } from '@api/index'

import { trainingSessionId } from '@constants/training-session-id'

import { OnlineUserList } from '@widgets/Header/components/OnlineUserList/OnlineUserList'

import { DropdownUserList } from './DropdownUserList'
import { IYandexUser } from 'src/types/types'

export const DropdownUserListContainer = () => {
    const [onlineUsers, setOnlineUsers] = useState<IYandexUser[]>([])
    useEffect(() => {
        api.getOnlineUsers(trainingSessionId)
            .then(setOnlineUsers)
            .catch(console.log)
    }, [onlineUsers])
    console.log(onlineUsers)

    return <DropdownUserList onlineUsers={onlineUsers} />
}
