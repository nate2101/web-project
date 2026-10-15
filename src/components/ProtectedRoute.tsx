import { Navigate, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useSession } from '../context/SessionContext'

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useSession()
  const location = useLocation()

  if (loading) {
    return (
      <div className='auth-loading'>
        <div className='spinner' />
        <p>Loading...</p>
      </div>
    )
  }

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return <>{children}</>
}
