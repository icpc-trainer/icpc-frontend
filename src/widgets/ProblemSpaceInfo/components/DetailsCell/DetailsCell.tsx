import React, { FC } from 'react'

import { isSubmissionPending } from '@helpers/isSubmissionPending'

import { Arrow } from '@icons/Arrow'
import { isDisabled } from '@testing-library/user-event/dist/utils'
import { ISubmissionTableItem } from '@widgets/ProblemSpaceInfo/helpers/getSubmissionTableData'

import styles from './DetailsCell.module.css'

interface DetailsCeilProps {
  submissionTableItem: ISubmissionTableItem
}

export const DetailsCell: FC<DetailsCeilProps> = ({ submissionTableItem }) => {
  const { verdict, id, onOpenDetails } = submissionTableItem

  const isPending = isSubmissionPending(verdict)
  const handleOpenDetails = () => onOpenDetails(id)

  return (
    <button className={styles.button} onClick={handleOpenDetails} disabled={isPending}>
      <Arrow className={styles.arrow} width={20} height={20} color={'var(--color-grey-secondary)'} />
    </button>
  )
}
