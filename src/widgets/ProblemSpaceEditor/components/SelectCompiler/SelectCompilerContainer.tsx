import React, { FC, useContext } from 'react'

import { CodeContext } from '@contexts/codeContext'

import { SelectCompiler } from './SelectCompiler'

export const SelectCompilerContainer: FC = () => {
  const { compilers } = useContext(CodeContext)

  if (!compilers) return null

  return <SelectCompiler compilers={compilers} />
}
