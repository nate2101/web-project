import { useState } from 'react'

export function PhysicsPage() {
  const [activeSim, setActiveSim] = useState('gravity')

  const simulations = [
    { id: 'gravity', name: 'Gravity', desc: 'Watch objects fall and orbit' },
    { id: 'pendulum', name: 'Pendulum', desc: 'Explore swinging motion' },
    { id: 'collision', name: 'Collisions', desc: 'Watch elastic and inelastic collisions' },
    { id: 'wave', name: 'Waves', desc: 'Create and observe wave interference' },
  ]

  const active = simulations.find((s) => s.id === activeSim)

  return (
    <div className='physics-page'>
      <div className='container'>
        <div className='physics-header'>
          <h1>Physics Playground</h1>
          <p>Interactive simulations of fundamental physics concepts.</p>
        </div>
        <div className='physics-sim'>
          <h2>{active ? active.name : 'Gravity'}</h2>
          <p>{active ? active.desc : 'Watch objects fall and orbit'}</p>
          <div className='sim-controls'>
            {simulations.map((sim) => (
              <button key={sim.id} onClick={() => setActiveSim(sim.id)} className={activeSim === sim.id ? 'active' : ''}>
                {sim.name}
              </button>
            ))}
          </div>
          <div className='physics-canvas' style={{ marginTop: '24px', minHeight: '300px', background: 'var(--bg-card)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
              Interactive simulation canvas area. Select a simulation to see it in action.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
