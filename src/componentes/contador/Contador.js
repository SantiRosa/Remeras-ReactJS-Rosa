import { useState, useEffect} from "react"



const Counter = () =>{

    let [contador, setContador] = useState(1)
    let [sacar, setResta] = useState(9)

    const resultado = () => {
        
        setContador(contador + 1)
    }

    const decrementar = () => {
        setResta(sacar - 1)
    }


useEffect(() =>{
    console.log("componente montado")
},[])

useEffect(() => {
    console.log("actualizacion")

},[contador])
    
    return (
 <div className="container my–5">
    
    <h2>Remera</h2>

    <button className="btn btn-primary" onClick={resultado}>+</button>
    <hr/>
    <p>{contador}</p>
    <button className="btn btn-primary" onCkick={decrementar}>-</button>
    <hr/>
    <p>{sacar}</p>
   
    </div>
    )
}
export default Counter