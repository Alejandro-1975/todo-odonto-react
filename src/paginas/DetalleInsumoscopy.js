import jsonInsumosItemsVendedor from './jsonInsumosItemsVendedor'
import jsonInsumosItems from './jsonInsumosItems'
import {Container} from '@material-ui/core'
import Navbar from './Navbar'
import Footer from './Footer'
import RelacionarProductos from '../componentes/RelacionarProductos'
import{Link} from 'react-router-dom'


import CreateSalerData from '../componentes/CreateSalerData'

function detalleInsumoscopy (dato){

    return(
      
      <>
      <Navbar/>
      <div className="tituloPage">
             <h1>Detalle del Producto</h1>
          </div >
      <div className="contenedorDetail">
        
          
         <div className="containerDetailProduct">
           <div>
           {jsonInsumosItems.map(function(dato,index){
                            return (
                        
                        <div className="datosProductos" key={index}>                                                
                            
                                <div className="datosProductosName">
                                    <h4>{dato.name}</h4>   
                                    <img src={dato.imagen} /> 
                                    <h6>Presentación: {dato.presentacion}</h6>  
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
           <div className="containerDetailSalers">
           <div>
           {jsonInsumosItemsVendedor.map(function(dato,index){
                            return (
                        
                        <div className="datosSaler" key={index}>                                                
                            
                                <div className="datosSalerName">
                                  <div>
                                    <h4>Producto: {dato.name}</h4> 
                                  </div> 
                                  <div>
                                    <p>Marca: {dato.marca}</p>  
                                    <a href= {dato.urlDetail}target="_blank">
                                       <button>                                   
                                          Agregar al carrito                                    
                                       </button>     
                                    </a> 
                                  </div>                                    
                                  <div>
                                    <h5>Precio: {dato.price}</h5>   
                                    <p>Oferta: {dato.ofertaBool}</p>
                                    <h5>Oferta: {dato.oferta}</h5>  
                                    <p>Stock: {dato.stock}</p>
                                  </div>                                    
                                  <div>
                                    <h3>Local Comercial: {dato.vendedor}</h3> 
                                    </div>
                                    <div>                                     
                                    <p>PUNTUACION DEL VENDEDOR</p>  
                                  </div>
                                                         
                                </div>  
                                  
                                                         
                         </div> ) 
                
              }
              
           )}

           </div> 
          
           </div>
           <div className="productDetailRel">
           <RelacionarProductos/>
          
           <CreateSalerData/>   
           </div>
          
             
        
         
       
     </div>
     
     <Footer/>
       </>
        )
}


export default detalleInsumoscopy