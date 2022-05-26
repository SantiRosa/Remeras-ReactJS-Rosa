import './ItemListContainer.scss'


export const ItemListContainer =({nombre}) => {

    return (
        <section className="list_container">
            <h2>Colección</h2>
            <hr/>

            <p>Hola, {nombre}</p>
        </section>
    )
}
export default ItemListContainer