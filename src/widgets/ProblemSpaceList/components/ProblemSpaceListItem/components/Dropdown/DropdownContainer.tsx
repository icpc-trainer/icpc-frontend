import classNames from 'classnames'

import React, { FC, useEffect, useState } from 'react'
import { Dropdown } from './Dropdown'
import { api } from '@api/index'
import { trainingSessionId } from '@constants/training-session-id'
import { IYandexUser } from 'src/types/types'

interface DropdownContainerProps {
    className?: string
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DropdownContainer: FC<DropdownContainerProps> = ({ isOpen, setIsOpen }) => {
    const toggleDropdown = () => setIsOpen(!isOpen)
    return <Dropdown toggleDropdown={toggleDropdown} isOpen={isOpen} />
}
