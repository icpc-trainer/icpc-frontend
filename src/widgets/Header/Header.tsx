import React from 'react'

import { ThemeToggle } from '@ui/ThemeToggle/ThemeToggle'
import { OnlineUserListContainer } from '@widgets/Header/components/OnlineUserList/OnlineUserListContainer'
import { ReturnToLobbyButtonContainer } from '@widgets/Header/components/ReturnToLobbyButton/ReturnToLobbyButtonContainer'
import { Section } from '@widgets/Header/components/Section/Section'
import { Tabs } from '@widgets/Header/components/Tabs/Tabs'

import { ControlButtonContainer } from './components/ControlButton/ControlButtonContainer'
import { TimerContainer } from './components/Timer/TimerContainer'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Section>
        <Tabs />
      </Section>

      <Section>
        <OnlineUserListContainer />
        <ControlButtonContainer />
      </Section>

      <Section>
        <ThemeToggle />
        <TimerContainer />
        <ReturnToLobbyButtonContainer />
      </Section>
    </header>
  )
}
