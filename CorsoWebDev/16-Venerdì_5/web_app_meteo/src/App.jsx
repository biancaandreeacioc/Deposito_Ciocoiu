
import './App.css'
import {Routes, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ListaCitta } from './pages/ListaCitta';
import { DettaglioMeteo } from './pages/DettaglioMeteo';

function App() {
  

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<ListaCitta/>}/>
        <Route path='/meteo/:citta' element={<DettaglioMeteo/>}/>
      </Routes>
    </>
  )
}

export default App
