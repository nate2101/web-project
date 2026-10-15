import { useCounter } from '../hooks/useCounter'

export function Counter() {
  const { count, increment } = useCounter()

  return (
    <button type="button" className="counter" onClick={increment}>
      Count is {count}
    </button>
  )
}
