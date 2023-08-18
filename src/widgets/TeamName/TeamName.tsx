import React, { FC } from 'react'

interface TeamNameProps {
  teamName: string
}
export const TeamName: FC<TeamNameProps> = ({ teamName }) => {
  return <span>{teamName}</span>
}
