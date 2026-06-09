
import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { NavLink, Route, Routes } from 'react-router-dom'
import { DettaglioNome } from './pages/DettaglioNome'

function App() {

  const visualizzaStileAttivo = ({ isActive }) => ({
    color: isActive ? 'gold' : 'green',
    fontWeight: isActive ? 'bold' : 'normal'
  })

  return (
    <div>
      <nav>
        <NavLink to='/' style={visualizzaStileAttivo}>
          Home
        </NavLink>
        <NavLink to='/about' style={visualizzaStileAttivo}>
          About
        </NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path=':nome' element={<DettaglioNome />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
