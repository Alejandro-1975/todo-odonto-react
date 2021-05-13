


import tarjetas from './tarjetas.js'
import {Link} from 'react-router-dom'
import Navbar from './Navbar.js'
import jsonEntidadesOd from './jsonEntidadesOd.js'
import jsonLinksEmpresas from './jsonLinksEmpresas'
import SearchAppBar from './mUiAppBar'

function Home
() {
  
  return (
    <div className="todoOdonto">
      <SearchAppBar/>
      <Navbar />
      
      <div className="head">
        <img src="/images/logos/todoodonto-2.jpg"width="auto"height ="85"/>
        <p>"Todo lo que necesitas de Odontología en un solo lugar"</p>
      
       
      </div>
        <div className="banner"> 
         <div className="capa-gradiente"></div>
                       
            
        </div>

        <div className ="div-tarjetas-aside">
           <div className="tarjets">
               {tarjetas.map(function(dato,index){
                 return (
                 <div className="tarjet-list" key={index}> 
                  <Link to={`capacitaciones/${dato.id}`}> 
                    <h1>{dato.name}</h1>
                    <img src={dato.imagen} />
                    <p>{dato.detalle}</p>  
                    
                  </Link>      
               </div>
               ) }
              )}

           </div>               
                
          <aside className="asides" >
         
              <aside className="ofertas">
               <h1>¡¡OFERTAS!!</h1>


              </aside>
              <aside className="publicidades">
                
              </aside>
                                   
        

               <aside className="linksEmpresas">
                 <h2> Links a empresas relacionadas</h2>
                 {jsonLinksEmpresas.map(function(dato,index){return <div className="linkEmpr" key={index}> 
                 
                     <h6>{dato.name}</h6>
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
                 
                     <h6>{dato.name}</h6>
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
