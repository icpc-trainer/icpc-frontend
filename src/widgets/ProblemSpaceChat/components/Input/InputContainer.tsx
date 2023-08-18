import React, { ChangeEventHandler, KeyboardEventHandler, useState } from 'react'
import { useParams } from 'react-router'

import { api } from '@api/index'

import { Input } from '@widgets/ProblemSpaceChat/components/Input/Input'

const minRows = 1
const maxRows = 4

export const InputContainer = () => {
  const { trainingSessionId, alias } = useParams()

  const [value, setValue] = useState('')
  const [rows, setRows] = useState(minRows)

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = event => {
    const lineHeight = Number(getComputedStyle(event.target).lineHeight.replace('px', ''))

    const prevRows = event.target.rows

    event.target.rows = minRows
    const currentRows = Math.floor(event.target.scrollHeight / lineHeight)
    event.target.rows = prevRows

    event.target.scrollTop = event.target.scrollHeight

    setValue(event.target.value)
    setRows(currentRows < maxRows ? currentRows : maxRows)
  }

  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = event => {
    if (event.key === 'Enter') {
      event.preventDefault()

      api
        .postMessage(trainingSessionId, alias, value)
        .then(() => setValue(''))
        .catch(console.log)
    }
  }

  return <Input value={value} rows={rows} onChange={onChange} onKeyDown={onKeyDown} />
}
