import jsonInsumosVendedor from '../paginas/jsonInsumosVendedor'


// width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy'

function CreateSalerData (dato){

    return(
        <>
        <div className="contenedor">
            
             <div className="vendedor">
                <div>
                    <div className="datosVendedorTitle">
                        <h2>Datos del Vendedor</h2>
                    </div>
                
                
                        {jsonInsumosVendedor.map(function(dato,index){
                            return (
                        
                        <div className="datosVendedor" key={index}>                                                
                            
                                <div className="datosVendedorName">
                                    <h4>{dato.name}</h4>   
                                    <img src={dato.logo} /> 
                                    <h6>{dato.city}</h6>  
                                    <h5>{dato.provincia}</h5>   
                                    <p>REPUTACION DEL VENDEDOR</p>   
                                    <p>CANTIDAD DE VENTAS REALIZADAS</p>  
                                    <p>OPINIONES DE COMPRADORES</p>                       
                                </div>       
                              
                          
                                 <div className="datosVendedorMap">             
                                 <div className="datosVendedorLogo">             
                                     <iframe src={dato.map} allowfullscreen='' loading='lazy'></iframe>
                                </div>  
                                </div>  
                             
                                  
                        
                                                        
                
                    </div> ) 
                
                
                
                }
                
             )}
             
             </div> 
             </div>
           
        </div>
        </>

    )
}


export default CreateSalerData