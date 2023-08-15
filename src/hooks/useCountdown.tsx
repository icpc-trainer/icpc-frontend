import { useEffect, useState } from 'react'

export const useCountdown = (seconds: number) => {
  const [secondsLeft, setSecondsLeft] = useState(seconds)

  useEffect(() => {
    if (secondsLeft <= 0) return

    const timeout = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [secondsLeft])

  return { secondsLeft, setSecondsLeft }
}
