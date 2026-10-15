import { Link } from 'react-router-dom'
import { IconPlay } from '../components/icons'

interface Challenge {
  id: number
  title: string
  difficulty: string
  topic: string
  desc: string
  solution: string
}

const CHALLENGES: Challenge[] = [
  { id: 1, title: 'Password Cracker', difficulty: 'Easy', topic: 'Encryption', desc: 'Break a simple Caesar cipher and learn substitution ciphers.', solution: '// Hint: shift each letter back by 3' },
  { id: 2, title: 'SQL Injection Defense', difficulty: 'Medium', topic: 'Security', desc: 'Learn how SQL injection works and prevent it.', solution: '// Hint: never concatenate user input' },
  { id: 3, title: 'XSS Prevention', difficulty: 'Medium', topic: 'Security', desc: 'Sanitize user input to prevent XSS attacks.', solution: '// Hint: escape HTML entities' },
  { id: 4, title: 'Password Hashing', difficulty: 'Hard', topic: 'Cryptography', desc: 'Build a secure hashing system with salt.', solution: '// Hint: use bcrypt cost 10+' },
]

export function CodePage() {
  return (
    <div className='code-page'>
      <div className='container'>
        <div className='code-header'>
          <h1>Ethical Code Lab</h1>
          <p>Learn security and ethical hacking through challenges.</p>
        </div>
        <div className='challenges-grid'>
          {CHALLENGES.map((ch) => (
            <div key={ch.id} className='challenge-card'>
              <div className='challenge-header'>
                <h3>{ch.title}</h3>
                <span className={'challenge-diff ' + ch.difficulty.toLowerCase()}>{ch.difficulty}</span>
              </div>
              <p className='challenge-desc'>{ch.desc}</p>
              <p className='challenge-desc'><strong>Topic:</strong> {ch.topic}</p>
              <details>
                <summary style={{ cursor: 'pointer', color: 'var(--accent)', fontSize: '14px', marginTop: '12px' }}>
                  View Hint
                </summary>
                <pre className='challenge-solution'>{ch.solution}</pre>
              </details>
            </div>
          ))}
        </div>
        <div className='cta-section' style={{ padding: '40px 0' }}>
          <div className='container'>
            <div className='cta-content'>
              <h2>Want More Challenges?</h2>
              <p>Join our community of ethical hackers.</p>
              <Link to='/admin' className='btn btn-primary'>
                <span className='btn-icon'><IconPlay /></span>
                <span>Join Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
