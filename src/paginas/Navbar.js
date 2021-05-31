import { Link } from "react-router-dom";
//import Cart from './Cart.js'
import SearchAppBar from '../componentes/mUiAppBar'
import MenuListComposition from '../componentes/MenuList'
import SearchItems from './Search'




function Navbar() {
    return( 
     <>  
     <div className="head">         
        
       
       
        <div className="firstNav">

          <ul className="nav">
            <li><a href="">Menu Inicio</a>
              <ul>
                <li> <Link to="/nosotros">Nosotros</Link>  </li>  
                <li> <Link to="/">Página Principal</Link>  </li>  
                <li> <Link to="/contacto">Contacto</Link>  </li>  
              </ul>
           </li>
           <li><a href="">Menu Categorias Principales</a>       
              <ul>
                <li><a href="">Compras Odontología</a>
                  <ul>
                    <li><Link to="/insumos">Insumos</Link></li>
                    <li><Link to="/instrumental">Instrumental</Link> </li>
                    <li><Link to="/equipamiento">Equipamiento</Link></li>
                    <li><Link to="/software">Software</Link></li>
                  </ul>
                </li>
                <li><Link to="/capacitaciones">Capacitacion</Link></li>  
                <li><Link to="/libreria">Libros</Link></li>  
                <li><Link to="/alquileres-usados">Clasificados</Link></li> 
                <li><Link to="/rh">Recursos Humanos</Link></li> 
                <li><Link to="/youtube">Canales de Youtube</Link></li> 
                <li><Link to="/blogs">Blogs</Link></li> 
              </ul> 
           </li>  
         </ul>
        </div>
        
        <SearchItems/>
        
        <div className="slogan">
              <img src="/images/logos/todoodonto-2.jpg"/>
              <p >"Todo lo que necesitas de Odontología en un solo lugar"</p>
        </div>
        <Link to='/detalle-insumos'>DetalleInsumos</Link>  
        <Link to='/detalle-insumoscopy'>DetalleInsumoscopy</Link>  
     </div>      
    </>
  )
}
export default Navbar                 
                        
                                     
           

