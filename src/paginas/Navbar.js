import { Link } from "react-router-dom";
//import Cart from './Cart.js'



function Navbar() {
    return( 
     <div>
        <div className="head">
              <div>
                 <img src="/images/logos/todoodonto-2.jpg"/>
                 <p>"Todo lo que necesitas de Odontología en un solo lugar"</p>
              </div>
              <div className="firstNav">
                   <ul>
                      <Link to="/nosotros">Nosotros</Link>   
                  </ul>
                  <ul>
                      <Link to="/">Página Principal</Link>   
                  </ul>
                 <ul class="Categorias"> Categorías
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
                  </ul>
                   <ul>
                      <Link to="/contacto">Contacto</Link>
                  </ul>
               </div>
        </div>
                      
        </div>                   
                                     
           

 )
}
export default Navbar