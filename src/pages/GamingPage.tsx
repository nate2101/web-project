import { Link } from 'react-router-dom'
import { IconPlay } from '../components/icons'

export function GamingPage() {
  const games = [
    { id: 1, title: 'Cyber Strike', genre: 'FPS', rating: 4.8, desc: 'Fast-paced arena shooter' },
    { id: 2, title: 'Code Breaker', genre: 'Puzzle', rating: 4.6, desc: 'Crack the code, survive the levels' },
    { id: 3, title: 'Gravity Rush', genre: 'Platformer', rating: 4.7, desc: 'Defy physics in a neon world' },
    { id: 4, title: 'Shadow Ops', genre: 'Strategy', rating: 4.5, desc: 'Deep tactical espionage missions' },
  ]

  return (
    <div className='gaming-page'>
      <div className='container'>
        <div className='gaming-header'>
          <h1>Gaming Hub</h1>
          <p>Explore curated games, from classic retro to modern shooters.</p>
        </div>
        <div className='games-grid'>
          {games.map((game) => (
            <div key={game.id} className='game-card'>
              <div className='game-card-info'>
                <h3>{game.title}</h3>
                <div className='game-meta'>
                  <span>{game.genre}</span>
                  <span className='game-rating'>Rating: {game.rating}</span>
                </div>
                <p className='game-desc'>{game.desc}</p>
                <Link to={'/gaming/' + game.id} className='btn btn-primary btn-full'>
                  <span className='btn-icon'><IconPlay /></span>
                  <span>Play Now</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
