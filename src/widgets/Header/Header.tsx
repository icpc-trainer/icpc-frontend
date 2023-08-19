import classnames from 'classnames'

import React, { FC } from 'react'

import { ThemeToggle } from '@ui/ThemeToggle/ThemeToggle'
import { FinishButtonContainer } from '@widgets/Header/components/FinishButton/FinishButtonContainer'
import { OnlineUserListContainer } from '@widgets/Header/components/OnlineUserList/OnlineUserListContainer'
import { Section } from '@widgets/Header/components/Section/Section'

import { ControlButtonContainer } from './components/ControlButton/ControlButtonContainer'
import { TimerContainer } from './components/Timer/TimerContainer'

import styles from './Header.module.css'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Section className={styles.tabs}>
        <span className={classnames(styles.tabItem, styles.tabItemSelected)}>Решение</span>
        <span className={styles.tabItem}>Положение участников</span>
      </Section>

      <Section>
        <OnlineUserListContainer />
        <ControlButtonContainer />
        <ThemeToggle />
      </Section>

      <Section>
        <TimerContainer />
        {/*<FinishButtonContainer />*/}
      </Section>
    </header>
  )
}
