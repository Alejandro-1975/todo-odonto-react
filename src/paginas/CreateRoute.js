

import dataRoute from './tarjetas'
import {Link} from 'react-router-dom'
 
function CreateRoute (){
        return(
            
       {dataRoute.map(function(dato,index){
                    return (
                
                   
                    <Link to={`capacitaciones/${dato.id}`}> 
                
                  
                   </Link>     
              
              
               }
              
                 )}
               
        )
}

export default CreateRoute         
                        
            
               
                  
               