import { Link } from 'react-router-dom'
import { useSession } from '../context/SessionContext'

export function AdminPage() {
  const { user, logout } = useSession()

  const stats = [
    { label: 'Active Sessions', value: '128' },
    { label: 'Total Logins', value: '9,847' },
    { label: 'Challenges Done', value: '4,253' },
    { label: 'Members', value: '356' },
  ]

  return (
    <div className='admin-page'>
      <div className='container'>
        <div className='admin-header'>
          <h1>Admin Dashboard</h1>
          <p>Welcome back, {user ? user.username : 'Admin'}.</p>
        </div>
        <div className='admin-stats'>
          {stats.map((stat) => (
            <div key={stat.label} className='admin-stat'>
              <span className='stat-num'>{stat.value}</span>
              <span className='stat-lbl'>{stat.label}</span>
            </div>
          ))}
        </div>
        <div className='cta-section' style={{ padding: '40px 0' }}>
          <div className='container'>
            <div className='cta-content'>
              <h2>User Management</h2>
              <p>Manage community members and content.</p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to='/' className='btn btn-secondary'>
                  <span>Back Home</span>
                </Link>
                <button className='btn btn-secondary' onClick={logout}>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
