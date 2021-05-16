
import Navbar from './Navbar.js'
import {Container} from '@material-ui/core'

import DataChannel from './jsonYoutubeChannels.js'
import {Link} from 'react-router-dom'
 
function YoutubeChannels (){
        return(
            <div>
                <Navbar />  
               
                
                <div className="banner">   
            
              
            
                 </div>
                <div className="cards-aside-ytch">
                 <div className="containeryoutubeCards">
                    <div className="containeryoutubeCardsTitle">
                       <h1>Canales de Youtube relacionados a la ODONTOLOGÍA</h1>    
                    </div >
                
                        {DataChannel.map(function(dato,index){
                            return (
                        
                        <div className="youtubeCards" key={index}> 
                        
                        
                        <div className= "imgCurso">
                                            
                            <a href= {dato.url}target="_blank">
                                <img src={dato.logo} />
                            </a>  
                            <div className="datosYoutubeCh">
                                <h4>{dato.name}</h4>    
                                <p><b>Categoria:</b> {dato.ctgy}</p> 
                                <p><b>Idioma:</b> {dato.idioma}</p> 
                                <p><b>Detalle:</b> {dato.detail}</p> 
                            </div>
                        </div>                              
                                                    
                        
                        
                    </div> ) 
                    
                    }
                    
                 )}
                 
                 </div>
                 <aside className="publicidades">
                     hola
                 </aside>
                 </div>
            </div>
        )
}                          
                        
                  

export default YoutubeChannels