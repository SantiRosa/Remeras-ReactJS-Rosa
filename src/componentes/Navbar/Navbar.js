import { BsCartCheck } from 'react-icons/bs';
import './Navbar.scss'
import './Carrito.scss'

export const Navbar = () => {
    return (<header className="header">
        <div className="header_conteiner">

        <h1 className="header_titulo">Timoteo</h1>

        <nav className="header_navbar">
            <p className="header_navlink">Inicio</p>
            <p className="header_navlink">Colección</p>
            <p className="header_navlink">Quienes Somos</p>
            <p className="header_navlink">Encontranos</p>
            <p className="header_navlink">Consultas</p>
            <BsCartCheck className="bs_carrito"/>
        </nav>
        </div>
        
    </header>);

}
export default Navbar