


import tarjetas from './tarjetas.js'
import {Link} from 'react-router-dom'
import Navbar from './Navbar.js'
import jsonEntidadesOd from './jsonEntidadesOd.js'
import jsonLinksEmpresas from './jsonLinksEmpresas'
import SearchAppBar from '../componentes/mUiAppBar'
import Footer from './Footer'
import Recomendados from './jsonRecomendados'


function Home
() {
  
  return (
    <div className="todoOdonto">
      <SearchAppBar/>           
      <div className="head">
        
        <Navbar />
       
      </div>
        <div className="banner"> 
         <div className="capa-gradiente"></div>
                       
            
        </div>

        <div className ="div-tarjetas-aside">
           <div className="tarjets">
               {tarjetas.map(function(dato,index){
                 return (
                 <div className="tarjet-list" key={index}> 
                  <Link to={`${dato.ctgy}/${dato.id}`}> 
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
                  publicidades
              </aside>
                                   
        

               <aside className="linksEmpresas">
                 <h2> Links a empresas relacionadas</h2>
                 {jsonLinksEmpresas.map(function(dato){return <div className="linkEmpr" key={dato.id}> 
                 
                     <h6>{dato.name}</h6>
                        <a href= {dato.url}target="_blank">
                          <img src={dato.imagen} />
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
       
        <h1>Los Recomendados</h1>
        <div className="div-recomendacion">
      {Recomendados.map(function(dato,index){
        return <div className="recomendacion" key={index}> 
                 
                 <h2>{dato.title}</h2>
                 <img src={dato.imagen} />
                                             
           
              </div> }                       
          )}
          </div>
          </div>
      <div className="entidadesOdontologicas">
            
          <h1>Entidades Odontologicas de la Republica Argentina</h1>
          <div className="containerEntidades">
           {jsonEntidadesOd.map(function(dato,index){return <div className="entidad" key={index}> 
                 
                     <h6>{dato.name}</h6>
                     <a href= {dato.url}target="_blank">
                        <img src={dato.imagen} />
                     </a>                                 
               
                  </div> }                       
              )}
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;
