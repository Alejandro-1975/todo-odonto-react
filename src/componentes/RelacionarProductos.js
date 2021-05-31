// import jsonInsumosItems from './jsonInsumosItems'





function RelacionarProductos (dato){

    return(
      
      <div className="contenedor">
       
          
         <div className="containerProductRel">
            <div className="datosVendedorTitle">
                 <h2>Productos relacionados con su elección </h2>
            </div >
            <div className="productRel">
                <div>
                     <h4> Link a Todas las Subcategorias de la categoria</h4>
                </div>
                <div>
                     <h4> Link a El Instrumental de esa categoria</h4>
                </div>                
                <div>
                     <h4> Link a El equipamiento de esa categoria</h4>
                </div>
                

            </div>
           {/* <div>
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
                              
                                                         
                         </div> ) 
                
              }
              
           )}

           </div>  */}
          
           </div>
          
           
     </div>
        )
}

export default RelacionarProductos 