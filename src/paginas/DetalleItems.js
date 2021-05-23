import jsonInsumosItems from './jsonInsumosItems'
import {Container} from '@material-ui/core'



function detalleInsumos (dato){

    return(
        <Container>
           <img src={dato.foto} alt=""/>
            <div className="cursoRama">
               <h4>{dato.ramaOdontologia}</h4>
            </div>
            <div className="cursoTitle">
               <h2>{dato.name}</h2>
            </div>
            <div className="cursoDato">
               <p><b>Dictante/s: </b>{dato.dictantes}</p> 
               <p><b>Modalidad del dato:</b> {dato.modalidad}</p>
               <p><b>Carga Horaria:</b> {dato.cargaHoraria}</p>
               <p><b>Lugar de realizacion:</b> {dato.lugar}</p>
               <p><b>Precio:</b> {dato.precio}</p>   
            </div>
                               
           
        </Container>
        )
}

export default detalleCursos