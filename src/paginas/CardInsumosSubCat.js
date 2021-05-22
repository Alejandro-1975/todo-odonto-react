import Navbar from './Navbar.js'

import SubCategoriaInsumos from './jsonInsumosSubCategory'


import DataChannel from './jsonYoutubeChannels.js'
import {Link} from 'react-router-dom'
import Footer from './Footer'
 
function InsumosOdCat (){
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
                
                        {SubCategoriaInsumos.map(function(dato,index){
                            return (
                        
                        <div className="insumosCards" key={index}>                                                
                        
                            <div className="datosCardInsumos">             
                                 <img src={dato.imagen} />
                            </div>   
                           
                            <div className="cardInsumosTitle">
                                <h4>{dato.name}</h4>                                    
                            </div>                              
                                                    
                        
                        
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
                        
                  

export default InsumosOdCat
 

       