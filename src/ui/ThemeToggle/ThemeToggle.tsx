import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts/themeContext'
import { DarkTheme } from '../icons/DarkTheme'
import { LightTheme } from '../icons/LightTheme'

import styles from './ThemeToggle.module.css'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button className={styles.themeToggle} onClick={() => toggleTheme()}>
      {theme === 'dark-theme' ? (
        <LightTheme width={24} height={24} color={'var(--color-black-typo-primary)'} />
      ) : (
        <DarkTheme width={24} height={24} color={'var(--color-black-typo-primary)'} />
      )}
    </button>
  )
}
