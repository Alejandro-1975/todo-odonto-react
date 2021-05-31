import jsonInsumosItems from './jsonInsumosItems'
import {Container} from '@material-ui/core'
import Navbar from './Navbar'
import Footer from './Footer'
import RelacionarProductos from '../componentes/RelacionarProductos'
import{Link} from 'react-router-dom'


import CreateSalerData from '../componentes/CreateSalerData'

function detalleInsumos (dato){

    return(
      
      <div className="contenedor">
        <Navbar/>
          <div className="tituloPagina">
             <h1>Detalle del Producto</h1>
          </div >
         <div className="containerDetailProduct">
           <div>
           {jsonInsumosItems.map(function(dato,index){
                            return (
                        
                        <div className="datosVendedor" key={index}>                                                
                            
                                <div className="datosVendedorName">
                                    <h4>{dato.name}</h4>   
                                    <img src={dato.imagen} /> 
                                    <h6>Presentación: {dato.presentacion}</h6>  
                                    <h5>Precio: {dato.price}</h5>   
                                    <p>Marca: {dato.marca}</p>   
                                    <p>Detalle: {dato.detail}</p>  
                                    <p>PUNTUACION DEL PRODUCTO</p>                       
                                </div>  
                                  <a href= {dato.urlDetail}target="_blank">
                                    <button>                                   
                                       Saber más acerca del producto                                      
                                    </button>     
                                  </a>
                                                         
                         </div> ) 
                
              }
              
           )}

           </div> 
          
           </div>
           <RelacionarProductos/>
           <CreateSalerData/>
        
         
        <Footer/>
     </div>
        )
}

export default detalleInsumos