import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Titulo from './components/Titulo/Titulo'

function App() {
  let greeting = `Bienvenides`
  return(
    <>
      <Titulo greeting= {greeting}/>
      <NavBar/>
      <ItemListContainer greeting= "¡Hola, mira nuestros modelos!"/>
    </>
  )
}

export default App
