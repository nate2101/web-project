import { Link } from 'react-router-dom'
import { IconGamepad, IconCode, IconAtom, IconPlay, IconArrow } from '../components/icons'

export function HomePage() {
  return (
    <div className='home-page'>
      <div className='hero'>
        <div className='hero-bg'>
          <div className='bg-shape shape-1' />
          <div className='bg-shape shape-2' />
          <div className='bg-shape shape-3' />
        </div>
        <div className='hero-content'>
          <div className='hero-badge'>Welcome to NEXUS</div>
          <h1>Explore. Create. <span className='gradient-text'>Evolve.</span></h1>
          <p className='hero-sub'>
            Where gaming, ethical coding, and physics collide. Your portal to interactive
            experiences that push boundaries.
          </p>
          <div className='hero-actions'>
            <Link to='/gaming' className='btn btn-primary'>
              <span className='btn-icon'><IconPlay /></span>
              <span>Explore Gaming</span>
            </Link>
            <Link to='/code' className='btn btn-secondary'>
              <span className='btn-icon'><IconCode /></span>
              <span>Join Code Lab</span>
            </Link>
          </div>
          <div className='hero-stats'>
            <div className='stat-item'>
              <span className='stat-num'>128+</span>
              <span className='stat-lbl'>Games</span>
            </div>
            <div className='stat-item'>
              <span className='stat-num'>96%</span>
              <span className='stat-lbl'>Completion</span>
            </div>
            <div className='stat-item'>
              <span className='stat-num'>4.2k</span>
              <span className='stat-lbl'>Active Users</span>
            </div>
          </div>
        </div>
      </div>

      <div className='features-section'>
        <div className='container'>
          <div className='section-header'>
            <h2>Interactive Labs</h2>
            <p>Choose your path and dive deep into something amazing</p>
          </div>
          <div className='features-grid'>
            <div className='feature-card'>
              <div className='feature-icon'><IconGamepad /></div>
              <h3>Gaming Hub</h3>
              <p>Explore our curated collection of indie games, retro classics, and modern masterpieces.</p>
              <Link to='/gaming' className='feature-link'>
                Explore Games <span className='arrow'>&gt;</span>
              </Link>
            </div>
            <div className='feature-card'>
              <div className='feature-icon'><IconCode /></div>
              <h3>Ethical Code Lab</h3>
              <p>Learn ethical hacking, secure coding practices, and cybersecurity through hands-on labs.</p>
              <Link to='/code' className='feature-link'>
                Enter Lab <span className='arrow'>&gt;</span>
              </Link>
            </div>
            <div className='feature-card'>
              <div className='feature-icon'><IconAtom /></div>
              <h3>Physics Playground</h3>
              <p>Play with gravity, collisions, waves, and more. Interactive physics simulations.</p>
              <Link to='/physics' className='feature-link'>
                Launch Physics <span className='arrow'>&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='cta-section'>
        <div className='container'>
          <div className='cta-content'>
            <h2>Ready to Play?</h2>
            <p>Join thousands of learners exploring gaming, code, and physics today.</p>
            <Link to='/login' className='btn btn-primary'>
              <span className='btn-icon'><IconArrow /></span>
              <span>Get Started Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
