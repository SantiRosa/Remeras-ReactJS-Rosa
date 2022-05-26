import './Nosotros.scss'


export const Nosotros = ({titulo, content}) => {
        
    return (
        <section className="nosotros">
            <h1 className="nosotros_titulo">{titulo}</h1>
            <hr/>
            <p className="nosotros_objetivo">{content}</p>   
        </section>
    )
} 
export default Nosotros