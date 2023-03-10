import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo/Titulo';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

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
