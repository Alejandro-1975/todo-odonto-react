import { Link } from "react-router-dom";




function Footer() {
    return( 
        <>
        <div className="footer">
             
                                    
            <div className="listaFooter">
                    <div className="footerLink">
                        <Link to="/">Home</Link>
                        <Link to="/capacitaciones">Capacitacion</Link>
                        <Link to="/insumos">Insumos</Link>
                        <Link to="/equipamiento">Equipamiento</Link>
                        <Link to="/instrumental">Instrumental</Link>               
                        <Link to="/software">Software</Link>
                       
                </div>
                <div className="footerLink">
                      
                        <Link to="/rh">Recursos Humanos</Link>
                        <Link to="/alquileres-usados">Clasificados</Link>
                        <Link to="/youtube">Canales de Youtube</Link>
                        <Link to="/blogs">Blogs</Link>
                        <Link to="/nosotros">Nosotros</Link> 
                        <Link to="/contacto">Contacto</Link>
                </div>
            </div>
            <div className="footer-polit">
                      <Link to="/youtube">Uso de Cookies</Link>
                      <Link to="/blogs">Politicas de Privacidad</Link>
                      <Link to="/nosotros">Nosotros</Link> 
                      <Link to="/contacto">Contacto</Link>
                  
        </div>
            <div className="redes"> 
                <h4>Siganos en</h4>
                                                 
                     <a href= "https://www.facebook.com/Todo-Odonto-103818068577832" target="_blank">
                        <img src="/images/logos/red-soc-face.png" />
                     </a>    
                     <a href= "https://www.facebook.com/od.AlejandroAcosta" target="_blank" >
                        <img src="/images/logos/red-soc-insta.png" />
                     </a> 
                    
            </div>   
        </div>
        <div className="footer-item">
                 <p>"Todo lo que necesitas de Odontología en un solo lugar"</p>
                 <img src="/images/logos/todoodonto-2.jpg"/>
                  
        </div>
        
        </>)
}
export default Footer