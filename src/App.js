
import './Styles.css';
import {Navbar} from './componentes/Navbar'

function App() {

  const contenido = "Resto de la App"
  const estilo = {fontSize: "50px", backgroundColor: "red"}

  return (
    <div className="App">
     <Navbar/>
     <p style ={estilo}>{contenido}</p>
    </div>
  );
}

export default App;
