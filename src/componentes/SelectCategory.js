

import jsonCapacitacionCategorias from '../paginas/jsonCapacitacionCategorias'



import {Link} from 'react-router-dom'


function SelectCategory (){
        return(
            <>
            <div className="contenedor">
                
                 <div className="ctgyCardsContainer">
                     <div className="categoryTitle">
                         <h2>Elija el TEMA que busca para filtrar</h2>
                     </div>
                   
                
                        {jsonCapacitacionCategorias.map(function(dato,index){
                            return (
                        
                        <div className="ctgyCards" key={index}>                                                
                        
                            <div className="imgCtgy">             
                                 <img src={dato.imagen} />
                            </div>   
                           
                            <div className="titleCtgy">
                                <h4>{dato.name}</h4>                                    
                            </div>                            
                  
                    </div> ) 
                    
                    }
                    
                 )}
                 
              
                 </div>
               
            </div>
            </>
        )
}                          
                        
                  

export default SelectCategory