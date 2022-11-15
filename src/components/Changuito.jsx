import React , { useContext , useState } from 'react';
import { DataContext } from "../context/DataProvider";
import Formulario from './Formulario';
import Producto from './Producto';

const Changuito = ({changuito, agregarProducto}) => {

    const value = useContext(DataContext)
    // Mostrar ocultar changuito con cambio de clases css
    const [menu, setMenu] = value.menu
    const toogleCarrito = () =>{
        setMenu(false);
    }
    const ver = menu ? "carrito-contenedor mostrar" : "carito-contenedor";
    const ver2 = menu ? "carrito mostrar" : "carrito";

     // Api chistes mientras esperamos el pedido , hook para guardarlo //  
    const [chiste, setChiste] = useState(""); 

     // Optenemos la informacion de la Api
    const consultarApi = async() => {
        try {
            const api = await fetch('https://api.chucknorris.io/jokes/random');
            const resultado = await api.json();
            console.log(resultado.value);
            setChiste(resultado.value);
        } catch (error) {
            console.log(error)
        };
    };

    return (  
        <>
            <div className={ver}>
                <div className={ver2}>
                    <button type="button" class="btn-close" aria-label="Close" onClick={toogleCarrito}></button>
                    <h2>Su pedido</h2>
                    {changuito.map( producto => (
                        <Producto 
                            key= {producto.id}
                            producto = {producto}
                            changuito = {changuito}
                            agregarProducto = {agregarProducto}
                        />
                    ))}
                    <div className='formulario'>
                        <Formulario/>
                        <div className="chiste">
                            <p>Mientras esperan pueden pedirle chistes a Chuck Norris</p>
                            <img className="chuck" src='/img/chuck.png' onClick={consultarApi}></img>
                            <p>{chiste}</p>
                        </div>
                    </div>   
                </div>
            </div>
        </>
    );
}
 
export default Changuito;