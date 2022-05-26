import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './componentes/Navbar/Navbar'
import {Nosotros} from './componentes/Nosotros/Nosotros'
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer'
import {Footer} from './componentes/Footer/Footer'


function App() {
const slogan = {
  nombre: 'El cajon de las Remeras',
  contenido: 'Aprendemos y mejoramos con cada paso que damos y cada proyecto que abordamos. Nos adaptamos fácilmente a nuevas circunstancias y/o situaciones, comprendiendo que cada proyecto nos propone un nuevo desafío e instancia de aprendizaje.'
}
const nombre = {
  comprador: "Santiago",
}

  return (
    <div className="App">
     <Navbar/>
     <Nosotros titulo={slogan.nombre} content={slogan.contenido}/>
     <ItemListContainer nombre={nombre.comprador}/>
     <Footer/>
    </div>
  );
}

export default App;
