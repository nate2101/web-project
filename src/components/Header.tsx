import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IconHome, IconGamepad, IconCode, IconAtom, IconShield, IconLogout, IconMenu } from './icons'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { label: 'Home', path: '/', Icon: IconHome },
    { label: 'Gaming', path: '/gaming', Icon: IconGamepad },
    { label: 'Code Lab', path: '/code', Icon: IconCode },
    { label: 'Physics', path: '/physics', Icon: IconAtom },
    { label: 'Admin', path: '/admin', Icon: IconShield },
  ]

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/')

  return (
    <header className='header'>
      <div className='container header-inner'>
        <Link to='/' className='logo'>
          <span className='logo-text'>NEXUS</span>
        </Link>
        <nav className='nav'>
          {navItems.map((item) => (
            <div key={item.path} className={'nav-item' + (isActive(item.path) ? ' active' : '')}>
              <Link to={item.path}>
                <span className='nav-icon'><item.Icon /></span>
                <span className='nav-label'>{item.label}</span>
              </Link>
            </div>
          ))}
        </nav>
        <div className='header-actions'>
          <Link to='/login' className='btn btn-secondary'>
            <span className='btn-icon'><IconLogout /></span>
            <span>Login</span>
          </Link>
          <button className='mobile-menu-btn' onClick={() => setMobileOpen(!mobileOpen)} aria-label='menu'>
            <IconMenu />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className='mobile-nav container'>
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)} className='mobile-nav-item'>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
