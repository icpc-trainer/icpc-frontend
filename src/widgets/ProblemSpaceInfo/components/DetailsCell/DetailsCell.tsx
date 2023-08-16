import React, { FC } from 'react'

import { Arrow } from '@icons/Arrow'

import styles from './DetailsCell.module.css'

interface DetailsCeilProps {
  onOpenDetails: () => void
}

export const DetailsCell: FC<DetailsCeilProps> = ({ onOpenDetails }) => {
  return (
    <Arrow
      className={styles.arrow}
      width={20}
      height={20}
      color={'var(--color-grey-secondary)'}
      onClick={onOpenDetails}
    />
  )
}
