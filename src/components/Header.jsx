import React , {useContext} from 'react';
import { DataContext } from '../context/DataProvider';

const Header = () => {

    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const toogleCarrito = () =>{
        setMenu(!menu)
    }
    return (
        <>
            <div className="header">
                <img className="logo" src='/img/logo.png'></img>
                <nav id="navegador">
                    <div >INICIO</div>
                    <div >PRODUCTOS</div>
                </nav>
                <img className="changuito" src='/img/changuito.png' onClick={toogleCarrito} ></img>
            </div>
        </>
    );
}

export default Header;