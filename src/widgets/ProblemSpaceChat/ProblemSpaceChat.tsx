import React, { useRef, useState } from 'react'

import { BlockWrapper } from '@ui/BlockWrapper/BlockWrapper'

import { Message } from 'src/types/types'

import { ProblemSpaceChatMessage } from './components/ProblemSpaceChatMessage/ProblemSpaceChatMessage'

import styles from './ProblemSpaceChat.module.css'

interface ProblemSpaceChatProps {
  messages: Message[]
  onSendMessage: (message: string) => void
}

export const ProblemSpaceChat: React.FC<ProblemSpaceChatProps> = ({ messages, onSendMessage }) => {
  const [state, setState] = useState({
    message: '',
    rows: 1,
    minRows: 1,
    maxRows: 10,
  })

  const textLog = useRef(null)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textareaLineHeight = 24
    const { minRows, maxRows } = state

    const previousRows = event.target.rows
    event.target.rows = minRows

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight)
    if (currentRows === previousRows) {
      event.target.rows = currentRows
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows
      event.target.scrollTop = event.target.scrollHeight
    }

    setState({
      ...state,
      message: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    })
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSendMessage(state.message)
      setState({
        ...state,
        message: '',
      })
    }
  }

  return (
    <BlockWrapper className={styles.blockWrapper}>
      <span className={styles.commentsTitle}>Комментарии к задаче</span>
      <div className={styles.chat}>
        {messages.map((message, index) => (
          <ProblemSpaceChatMessage key={index} message={message} />
        ))}
      </div>
      <textarea
        rows={state.rows}
        className={styles.inputField}
        placeholder="Текст для ввода"
        id="message"
        name="message"
        value={state.message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </BlockWrapper>
  )
}
