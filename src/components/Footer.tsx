import { Link } from 'react-router-dom'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-grid'>
          <div className='footer-section'>
            <Link to='/' className='logo'>
              <span className='logo-text'>NEXUS</span>
            </Link>
            <p className='footer-desc'>Interactive hub for gaming, ethical coding, and physics enthusiasts.</p>
          </div>
          <div className='footer-section'>
            <h4 className='footer-title'>Quick Links</h4>
            <ul className='footer-links'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/gaming'>Gaming Hub</Link></li>
              <li><Link to='/code'>Code Lab</Link></li>
              <li><Link to='/physics'>Physics Lab</Link></li>
            </ul>
          </div>
          <div className='footer-section'>
            <h4 className='footer-title'>Explore</h4>
            <ul className='footer-links'>
              <li><Link to='/gaming'>Explore Games</Link></li>
              <li><Link to='/code'>Ethical Hacking</Link></li>
              <li><Link to='/physics'>Physics Sims</Link></li>
              <li><Link to='/admin'>Admin Portal</Link></li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>&copy; {year} NEXUS. All rights reserved.</p>
          <p className='footer-note'>Educational content only.</p>
        </div>
      </div>
    </footer>
  )
}
