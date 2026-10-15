import { Routes, Route, Navigate } from 'react-router-dom'
import { SessionProvider } from './context/SessionContext'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { GamingPage } from './pages/GamingPage'
import { CodePage } from './pages/CodePage'
import { PhysicsPage } from './pages/PhysicsPage'
import { AdminPage } from './pages/AdminPage'
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {
  return (
    <SessionProvider>
      <div className='app'>
        <Header />
        <main>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/gaming' element={<GamingPage />} />
            <Route path='/code' element={<CodePage />} />
            <Route path='/physics' element={<PhysicsPage />} />
            <Route
              path='/admin'
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </SessionProvider>
  )
}

export default App
