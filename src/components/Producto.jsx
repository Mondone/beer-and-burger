import React from 'react';

const Producto = ({producto, productos, changuito, agregarProducto}) => {
    // Extraigo los valores
    const {id,titulo,detalles,precio,img,cantidad} = producto;
    // Funcion para comprar un producto
    const seleccionarProducto = (id) =>{
        const check = changuito.every(item =>{
            return item.id !== id
        })
        if(check){
            const data = productos.filter(producto =>{
                return producto.id === id
            })
            agregarProducto([...changuito, ...data])
        }else{
            alert("Ya agregaste este producto, subi la cantidad en el pedido")
        }
    }
    // Funcion para quitar un producto del changuito
    const quitarProducto = (id) => {
        const nuevosProductos = changuito.filter( (producto) => producto.id !== id);
        agregarProducto(nuevosProductos);
    };

    return ( 
        <>
            <div className='producto'>
                <div className='contenedor'>
                    <img src={img} height="150px"/>
                    <div className='textInfo'>
                        <h3>{titulo}</h3> 
                        <p> {detalles} | ${precio} </p>
                    </div>
                    <div className='boton'>
                    {
                        productos
                        ?
                            <button type="button" class="btn btn-danger" onClick={ () => seleccionarProducto(id) } >Comprar</button>
                        :
                            <button type="button" class="btn btn-danger" onClick={ () => quitarProducto(id) } >Quitar</button>
                    }       
                    </div>
                </div>
            </div>
        </>
     );
}
export default Producto;