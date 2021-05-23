// import jsonDataCapacitacion from './jsonDataCapacitacion'
// import {Container} from '@material-ui/core'
// import {useParams,useState,useEffect} from 'react'


// function detalleCursos (){
//     var {id} = useParams()
//     var [curso, setCurso] = useState({})

//     useEffect(()=>{

//         var resultado = jsonDataCapacitacion.find(function(dato){
//             if (dato.id==id) {
//                return true
//             }
//             return false
//         })
//         setCurso(resultado)
//     })


//     return(
//         <Container>
//            <img src={curso.foto} alt=""/>
//             <div className="cursoRama">
//                <h4>{curso.ramaOdontologia}</h4>
//             </div>
//             <div className="cursoTitle">
//                <h2>{curso.name}</h2>
//             </div>
//             <div className="cursoDato">
//                <p><b>Dictante/s: </b>{curso.dictantes}</p> 
//                <p><b>Modalidad del curso:</b> {curso.modalidad}</p>
//                <p><b>Carga Horaria:</b> {curso.cargaHoraria}</p>
//                <p><b>Lugar de realizacion:</b> {curso.lugar}</p>
//                <p><b>Precio:</b> {curso.precio}</p>   
//             </div>
                               
           
//         </Container>
//         )
// }

// export default detalleCursos