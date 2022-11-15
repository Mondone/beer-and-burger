import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'; 
import Producto from './components/Producto';
import Changuito from './components/Changuito';
import { DataProvider } from './context/DataProvider';

function App() {
  
  //Creamos nuestra lista de productos
  const [productos] = useState(
    [
      {id: 1,titulo: "Clásica",detalles: "Con Cheddar, LyT, Cebolla, Mostaza",precio: 800,img: '/img/burger-clasica.jpg',cantidad: 1,},
      {id: 2,titulo: "Bacon",detalles: "Doble Con Bacon, Cheddar, LyT, Cebolla caramelizada",precio: 1200,img: '/img/burger-bacon.jpg',cantidad: 1,},
      {id: 3,titulo: "Chicken",detalles: "De Pollo, LyT, Pepino",precio: 900,img: '/img/burger-chicken.jpg',cantidad: 1,},
      {id: 4,titulo: "Huevo",detalles: "Extra carne con Huevo, LyT, Especias",precio: 1200,img: '/img/burger-huevo.jpg',cantidad: 1,},
      {id: 5,titulo: "Triple",detalles: "Doble carne, triple queso, Cebolla caramelizada ",precio: 1300,img: '/img/burger-triple.jpg',cantidad: 1,},
      {id: 6,titulo: "Papas Cheddar",detalles: "Papas cheddar especial",precio: 1400,img: '/img/fritas.jpg',cantidad: 1,},
      {id: 7,titulo: "Porron",detalles: "Cerveza casera",precio: 900,img: '/img/cerveza.jpg',cantidad: 1,},
      {id: 8,titulo: "Tragos",detalles: "Tragos c/s alcohol",precio: 1200,img: '/img/sin-alcohol.jpg',cantidad: 1,},
      {id: 9,titulo: "Bebida",detalles: "Agua o Jugos",precio: 600,img: '/img/jugo.jpg',cantidad: 1,},
    ],
  )
  
  //Creacion y persistencia del changuito
  let productosChanguito = JSON.parse(localStorage.getItem('changuito'));
  if(!productosChanguito){
    productosChanguito=[];
  }

  const [changuito, agregarProducto] = useState(productosChanguito);

  useEffect(() =>{
    if(productosChanguito){
      localStorage.setItem('changuito', JSON.stringify(changuito));
    }else{
      localStorage.setItem('changuito', JSON.stringify([]));
    }
  }

  );

  return (
    <DataProvider>
      <Header/>
      <Main/>
      <div id="productosMain">
        {
          productos.map( producto => (
          <Producto
              producto={producto}
              productos={productos}
              key={producto.id}
              changuito={changuito}
              agregarProducto={agregarProducto}
          />
          ))
        }
      </div>
      <Changuito
        changuito={changuito}
        agregarProducto={agregarProducto}
      />
      <Footer/>
    </DataProvider>
  );
}

export default App;
