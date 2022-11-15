import React from "react";

const Footer = () => {

    return (
        <>
            <div id="footer">
                <p id="titulo-footer" className="titulo">INFORMACIÓN DE CONTACTO</p>
                <div id="cont-footer">
                    <div className="columna">
                        <p><span className="bi bi-geo-alt-fill"></span> Tte. Gral. Julio Argentino Roca 1250 - Hurlingham - Buenos Aires</p>
                        <p><span className="bi bi-telephone-fill"></span> Telefono: (011) 1234-5678</p>
                        <p><span className="bi bi-envelope-fill"></span> Mail: beer-and-burger@gmail.com</p>
                        <p><b>Horarios</b></p>
                        <p>Lunes-Jueves: 12:00 - 00:00hs</p>
                        <p>Viernes-Domingos: 12:00 - 00:30hs</p>
                    </div>
                    <div className="columna pedidos">
                        <p>Encontranos en PedidosYa</p>
                        <img src="img/pedidosya.png"></img>
                    </div>
                    <div className="columna mapouter">
                        <div className="gmap_canvas">
                            <iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                            src="https://maps.google.com/maps?width=500&amp;height=180&amp;hl=en&amp;q=Tte. Gral. Julio Argentino Roca 1250&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                        </div>
                    </div>
                    <div className="redes-sociales">
                        <a href="https://es-la.facebook.com/" ><img src="img/redes-facebook.png" alt="redes sociales facebook" title="facebook"></img></a>
                        <a href="https://www.instagram.com/" ><img src="img/redes-instagram.png" alt="redes sociales instagram" title="instagram"></img></a>
                    </div>
                    <div id="copy">
                         <p>© Copyright - Desarrollado por <a href="https://github.com/Mondone">Mondone design</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
