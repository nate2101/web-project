import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSession } from '../context/SessionContext'

export function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { login: doLogin } = useSession()

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const success = await doLogin(username, password)
    if (success) {
      navigate(from, { replace: true })
    } else {
      setError('Invalid credentials. Use: admin / Password123!')
      setPassword('')
    }
    setLoading(false)
  }

  return (
    <div className='login-page'>
      <div className='login-bg'>
        <div className='bg-deco deco-1' />
        <div className='bg-deco deco-2' />
        <div className='bg-deco deco-3' />
      </div>
      <div className='login-wrap'>
        <div className='login-card'>
          <div className='login-brand'>
            <h2>NEXUS</h2>
            <p>Gaming - Code - Physics</p>
          </div>
          <form className='login-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter username' disabled={loading} autoComplete='username' />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' disabled={loading} autoComplete='current-password' />
            </div>
            {error && <div className='form-error'>{error}</div>}
            <button type='submit' className='btn btn-primary btn-full' disabled={loading}>
              {loading ? <span>Authenticating...</span> : <span>Access Portal</span>}
            </button>
          </form>
          <div className='credential-strip'>
            <div className='cred-rest'>
              <span className='cred-label'>ADMIN LOGIN</span>
              <div className='cred-items'>
                <div className='cred-item'>
                  <span className='cred-key'>Username:</span>
                  <span className='cred-val'>admin</span>
                </div>
                <div className='cred-item'>
                  <span className='cred-key'>Password:</span>
                  <span className='cred-val'>Password123!</span>
                </div>
              </div>
            </div>
            <p className='cred-note'>Educational use only</p>
          </div>
        </div>
      </div>
    </div>
  )
}
