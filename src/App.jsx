import { useState } from 'react'
import Home from './components/home'
import './App.css'

function App() {
  const [page, setPage] = useState('home') // hangi sayfa gösterilecek

  return (
    <div>
      {page === 'home' && <Home onGoMenu={() => setPage('menu')} />}
    </div>
  )
}

export default App
