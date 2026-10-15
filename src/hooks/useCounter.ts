import { useCallback, useState } from 'react'

export function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount)
  const increment = useCallback(() => {
    setCount((value) => value + 1)
  }, [])

  return { count, increment }
}
