import Navbar from './Navbar.js'

import CategoriaInsumos from './jsonInsumosCategorias'


import {Link} from 'react-router-dom'
import Footer from './Footer'
 
function InsumosOd (){
        return(
            <div>
                <Navbar />  
               
                
                <div className="banner">   
            
              
            
                 </div>
                <div className="cards-aside-ytch">
                 <div className="containeryoutubeCards">
                    <div className="containeryoutubeCardsTitle">
                       <h1>Insumos Odontológicos</h1>    
                    </div >
                
                        {CategoriaInsumos.map(function(dato,index){
                            return (
                        
                        <div className="insumosCards" key={index}>                                                
                        <Link to={`${dato.subctgy}/${dato.id}`}> 
                            <div className="datosCardInsumos">             
                                 <img src={dato.imagen} />
                            </div>   
                           
                            <div className="cardInsumosTitle">
                                <h4>{dato.name}</h4>                                    
                               
                            </div>                              
                                                    
                            </Link>  
                        
                    </div> ) 
                    
                    }
                    
                 )}
                 
                 </div>
                 <aside className="publicidades">
                     hola
                 </aside>
                 </div>
                 <Footer />
            </div>
        )
}                          
                        
                  

export default InsumosOd
 

       