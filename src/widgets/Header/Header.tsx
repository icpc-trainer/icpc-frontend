import classnames from 'classnames'

import React from 'react'

import { ThemeToggle } from '@ui/ThemeToggle/ThemeToggle'
import { ReturnToLobbyButtonContainer } from '@widgets/Header/components/ReturnToLobbyButton/ReturnToLobbyButtonContainer'
import { OnlineUserListContainer } from '@widgets/Header/components/OnlineUserList/OnlineUserListContainer'
import { Section } from '@widgets/Header/components/Section/Section'

import { ControlButtonContainer } from './components/ControlButton/ControlButtonContainer'
import { TimerContainer } from './components/Timer/TimerContainer'

import styles from './Header.module.css'

export const Header = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  return (
    <header className={styles.header}>
      <Section className={styles.tabs}>
        <span
          className={classnames(styles.tabItem, activeTab === 'solution' ? styles.tabItemSelected : '')}
          onClick={() => setActiveTab('solution')}
        >
          Решение
        </span>
        <span
          className={classnames(styles.tabItem, activeTab === 'leaderBoard' ? styles.tabItemSelected : '')}
          onClick={() => setActiveTab('leaderBoard')}
        >
          Положение участников
        </span>
      </Section>

      <Section>
        <OnlineUserListContainer />
        <ControlButtonContainer />
        <ThemeToggle />
      </Section>

      <Section>
        <TimerContainer />
        <ReturnToLobbyButtonContainer />
      </Section>
    </header>
  )
}
