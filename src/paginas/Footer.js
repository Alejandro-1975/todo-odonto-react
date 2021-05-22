import { Link } from "react-router-dom";




function Footer() {
    return( 
        <div className="Footer">
            
            <div className="bottomNav">
                <Link to="/">Home</Link>
                <Link to="/capacitaciones">Capacitacion</Link>
                <Link to="/insumos">Insumos</Link>
                <Link to="/equipamiento">Equipamiento</Link>
                <Link to="/libreria">Libros</Link>
                <Link to="/instrumental">Instrumental</Link>               
                <Link to="/software">Software</Link>
                <Link to="/rh">Recursos Humanos</Link>
                <Link to="/alquileres-usados">Clasificados</Link>
                <Link to="/youtube">Canales de Youtube</Link>
                <Link to="/blogs">Blogs</Link>
           </div>
           <div className="footer-item">
                 <img src="/images/logos/todoodonto-2.jpg"/>
                  <p>"Todo lo que necesitas de Odontología en un solo lugar"</p>
            </div>
     
        </div>)
}
export default Footer