import React, { Fragment, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Formulario = () => {
    //Creo un hook para guardar datos del cliente
    const [pedido, editarPedido] = useState({
        nombre:"",
        mesa:""
    });
    //State para el error en el formulario
    const [error, setError] = useState(false);

    //Extraer valores
    const {nombre, mesa} = pedido;

    //Agarramos lo que el usuario escribe en el formulario
    const handleChange = (e) => {
        editarPedido({
            ...pedido,
            [e.target.name] : e.target.value, 
        })
    };

    //Funcion para cuando el formulario se envía
    const submitForm = (e) => {
        e.preventDefault();
        if(nombre.trim() === '' || mesa.trim() === ''){
            setError(true);
            return;
        }else{
            alert("Pedido Realizado, en breve sera atendido")
        }
        setError(false);
    };
    
    return (  
        <Fragment>
            <div className='formulario'>
            {
                error
                ? <h4>Debe completar ambos datos</h4>
                : null
            }
            <Form onSubmit={submitForm}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Nombre completo" 
                        name="nombre"
                        onChange={handleChange}
                        value={nombre}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Numero de Mesa</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ejemplo: 205" 
                        name="mesa"
                        onChange={handleChange}
                        value={mesa}/>
                </Form.Group>
                <Button 
                    variant="primary" 
                    type="submit">
                    Realizar pedido
                </Button>
            </Form>
            </div>
        </Fragment>
    );
}
export default Formulario;

