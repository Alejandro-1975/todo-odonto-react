import Navbar from './Navbar.js'
import {Container} from '@material-ui/core'
import MediaCard from './CardsCapacitacion'
import DataCapacitacion from './jsonDataCapacitacion'
import {Link} from 'react-router-dom'
 
function Capacitacion (){
        return(
            <div>
                <Navbar />  
               
                <div className="head">
                      asdf
                            
                </div>
                <div className="banner">   
            
              
            
                 </div>
                <div>

                    <h1>Capacitacion de Post-Grado</h1>
                </div >
                <div className="containerCards">
                
                {DataCapacitacion.map(function(dato,index){
                    return (
                
                    <div className="capacitacionCards" key={index}> 
                    <Link to={`capacitaciones/${dato.id}`}> 
                
                  <div className= "imgCurso">
                      <img src={dato.imagen} />
                  </div>
                  <div className="dataCurso">
                        
                        <h4>{dato.ramaOdontologia}</h4>
                        <p>Nombre del Curso:</p> <h2>{dato.name}</h2>
                        
                         <p>Dictante/s: {dato.dictantes}</p> 
                        <p>Modalidad del curso: {dato.modalidad}</p>
                        
                        <p>Carga Horaria: {dato.cargaHoraria}</p>
                        <p>Lugar de realizacion: {dato.lugar}</p>
                        <p>Precio: {dato.precio}</p>   
                  </div> 
                   </Link>     
               </div> ) 
              
               }
              
                 )}
                 <MediaCard/>
                 </div>
            </div>
        )
}

export default Capacitacion