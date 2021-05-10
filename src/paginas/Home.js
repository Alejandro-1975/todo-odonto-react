


import tarjetas from './tarjetas.js'
import {Link} from 'react-router-dom'
import Navbar from './Navbar.js'
import jsonEntidadesOd from './jsonEntidadesOd.js'
import jsonLinksEmpresas from './jsonLinksEmpresas'

function Home
() {
  
  return (
    <div className="todoOdonto">
    
      <Navbar />
      
      <div className="head">
        asdf
      
       
      </div>
        <div className="banner">   
            
              
            
        </div>

        <div className ="div-tarjetas-aside">
           <div className="tarjets">
               {tarjetas.map(function(dato,index){return <div className="tarjet-list" key={index}> 
                  <h1>{dato.name}</h1>
                  <img src={dato.imagen} />
                  <h5>{dato.detalle}</h5>  
                  
                  <Link>{dato.title}</Link>    
               </div> }
              
                 )}

           </div>               
                
          <aside className="asides" >
         
              <aside className="ofertas">
               <h1>¡¡OFERTAS!!</h1>


              </aside>
              <aside className="publicidades">
                
              </aside>
                                   
        

               <aside className="linksEmpresas">
                 {jsonLinksEmpresas.map(function(dato,index){return <div className="linkEmpr" key={index}> 
                 
                     <h5>{dato.name}</h5>
                        <a href= {dato.url}target="_blank">
                          <img src={dato.imagen} width="auto"height ="70"/>
                        </a>                                 
           
                    </div> }    
                 )}
                   

               </aside>

              </aside>
      </div>
      <div className="banner2">
        asd
      </div>
      <div className="recomendaciones">
        asdg
      </div>
      <div className="entidadesOdontologicas">
            
          <h1>Entidades Odontologicas de la Republica Argentina</h1>
          <div className="containerEntidades">
           {jsonEntidadesOd.map(function(dato,index){return <div className="entidad" key={index}> 
                 
                     <h5>{dato.name}</h5>
                     <a href= {dato.url}target="_blank">
                        <img src={dato.imagen} width="auto"height ="70"/>
                     </a>                                 
               
                  </div> }                       
              )}
          </div>
      </div>
      <div className="footer">
        asd
      </div>
    </div>
  )
}

export default Home;
