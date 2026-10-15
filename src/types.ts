// Nexus Application Types

export interface NavItem {
  label: string
  path: string
  icon: string
}

export interface ContentCard {
  id: string
  title: string
  description: string
  icon: string
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  color: string
}

export interface GamingGame {
  id: string
  title: string
  genre: string
  description: string
  rating: number
  image: string
}

export interface CodeChallenge {
  id: string
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  topic: string
  description: string
  solution: string
}

export interface PhysicsSimulation {
  id: string
  title: string
  description: string
  type: 'gravity' | 'pendulum' | 'collision' | 'wave'
  difficulty: 'Easy' | 'Medium' | 'Advanced'
}