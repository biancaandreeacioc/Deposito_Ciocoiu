
import './App.css'
import { AddTask } from './components/AddTask'
import { ListaTask } from './components/ListaTask'

function App() {
  

  return (
    <div className="contenitoreApp">
      <h1>LISTA</h1>
      <AddTask/>
      <ListaTask/>
    </div>
  )
}

export default App
