import Navbar from './Navbar.js'
import {Container} from '@material-ui/core'
import MediaCard from './CardsCapacitacion'
import DataCapacitacion from './jsonDataCapacitacion'
import {Link} from 'react-router-dom'
import Footer from './Footer'
 
function RecursosHumanos (){
        return(
            <div>
                <Navbar />  
               
                
                <div className="banner">   
            
              
            
                 </div>
                <div>

                    <h1>Recursos Humanos en Odontología</h1>
                </div >
                <div className="containerCards">
                
                {DataCapacitacion.map(function(dato,index){
                    return (
                
                    <div className="capacitacionCards" key={index}> 
                    <Link to={`insumos/${dato.id}`}> 
                
                  <div className= "imgCurso">
                      <img src={dato.imagen} />
                  </div>
                  <div className="dataCurso">
                        
                        <h4>{dato.ramaOdontologia}</h4>
                        <h2>Nombre del Curso: {dato.name}</h2>
                        <h4>Dictante/s: {dato.dictantes}</h4>
                        <h4>Modalidad del curso: {dato.modalidad}</h4>
                        
                        <h4>Carga Horaria: {dato.cargaHoraria}</h4>
                        <h4>Lugar de realizacion: {dato.lugar}</h4>
                        <h4>Precio: {dato.precio}</h4>   
                  </div> 
                   </Link>     
               </div> ) 
              
               }
              
                 )}
                 
                 </div>
                 <Footer />
            </div>
        )
}

export default RecursosHumanos