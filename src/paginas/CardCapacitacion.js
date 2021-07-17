import Navbar from './Navbar.js'
import {Container} from '@material-ui/core'
import MediaCard from './CardsCapacitacion'
import DataCapacitacion from './jsonDataCapacitacion'
import {Link} from 'react-router-dom'
import jsonLinksEmpresas from './jsonLinksEmpresas'
import Footer from './Footer'
import SelectCategory from '../componentes/SelectCategory'
import SelectCheckbox from '../componentes/SelectCheckbox'
import CarrouselFade from '../componentes/CarrouselFade'
 
function Capacitacion (){
        return(
            <div className="contenedor">
                <Navbar />  
               
                
                <div className="banner">   
            
              
            
                 </div>
                <div className="tituloPagina">
                    <h1>Capacitacion de Post-Grado</h1>
                </div >
                <SelectCategory/>
                <SelectCheckbox/>

                <div className="div-tarjetas-aside">
                    
                <div className="containerCards">
                
                   {DataCapacitacion.map(function(dato,index){
                   return (
                
                
                    <Link to={`capacitaciones/${dato.id}`}> 
                           <div className="capacitacionCards" key={index}> 
                
                           <div className= "imgCurso">
                                 <img src={dato.imagen} /> 
                           </div>
                           <div className="dataCurso">
                               <div className="cursoRama">
                                     <h4>{dato.ramaOdontologia}</h4>
                               </div>
                               <div className="cursoTitle">
                                    <h2>{dato.name}</h2>
                               </div>
                               <div className="cursoDato">
                                    <p><b>Dictante/s: </b>{dato.dictantes}</p> 
                                    <p><b>Modalidad del curso:</b> {dato.modalidad}</p>
                                    <p><b>Carga Horaria:</b> {dato.cargaHoraria}</p>
                                    <p><b>Lugar de realizacion:</b> {dato.lugar}</p>
                                    <p><b>Precio:</b> {dato.precio}</p>   
                               </div>
                               
                          </div> 
                      </div> 
                      </Link>     
                      ) 
              
                   }
              
                 )}
                 
                 
                  </div>
                  <aside className="asides" >
         
                    <aside className="ofertas">
                         <h1>¡¡OFERTAS!!</h1>
                         <CarrouselFade/>
                    </aside>
                    
                    <aside className="publicidades">
                        publicidades
                    </aside>                                             
            
                    <aside className="linksEmpresas">
                        <h2> Links a empresas relacionadas</h2>
                        {jsonLinksEmpresas.map(function(dato){return <div className="linkEmpr" key={dato.id}> 
                        
                            <h6>{dato.name}</h6>
                            <a href= {dato.url}target="_blank">
                                <img src={dato.imagen} />
                            </a>                                 
                
                        </div> }    
                        )}
                        
                    </aside>

                  </aside>   
                 </div>
                 <Footer />
            </div>
        )
}

export default Capacitacion