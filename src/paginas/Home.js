


import tarjetas from './tarjetas.js'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar.js'

function Home
() {
  
  return (
    <div className="todoOdonto">
    
      <Navbar />
      
      <div className="head">
        asdf
      
       
      </div>
        <div className ="div-tarjetas-aside">
           <div className="tarjets">
               {tarjetas.map(function(dato,index){return <div className="tarjet-list" key={index}> 
                  <h1>{dato.name}</h1>
                  <img src={dato.imagen} />
                  <h5>{dato.detalle}</h5>          
               </div> }
              
                 )}

           </div>               
                
          <aside className="asides" >
         
              <aside className="ofertas">
               adsf

              </aside>
              <aside className="publicidades">
                <a href="https://www.colgateprofesional.com.ar/"target="_blank">
                 <img src="/images/logos/COLGATE_Logo.jpg"width="100"height ="80"></img>
                </a>
                <a href="https://latam.oralb.com/es" target="_blank"> <img src="/images/logos/Oral-B-Logo.png"width="100"height ="40">

                 </img>
                </a>

              </aside>
          
               <aside className="linksEmpresas">
               asd
               </aside>

              </aside>
      </div>
      <div className="banner">
        asd
      </div>
      <div className="recomendaciones">
        asd
      </div>
      <div className="footer">
        asd
      </div>
    </div>
  )
}

export default Home;
