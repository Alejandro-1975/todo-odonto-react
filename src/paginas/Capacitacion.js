import Navbar from './Navbar.js'
import {Container} from '@material-ui/core'
import MediaCard from './CardsCapacitacion'
import tarjetas from './tarjetas'
 
function Capacitacion (){
        return(
            <Container>
                <Navbar />  
               
                <div className="head">
                      asdf
                            
                </div>
                <div>

                    <h1>Capacitacion de Post-Grado</h1>
                </div>
                <MediaCard/>
                {tarjetas.map(function(dato,index){return <div className="tarjet-list" key={index}> 
                  <h1>{dato.name}</h1>
                  <img src={dato.imagen} />
                  <h5>{dato.detalle}</h5>          
               </div> }
              
                 )}
            </Container>
        )
}

export default Capacitacion