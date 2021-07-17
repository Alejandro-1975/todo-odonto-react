import Navbar from './Navbar.js'
import CategoriaInsumos from './jsonInsumosCategorias'
import jsonInsumosSubCategory from './jsonInsumosSubCategory'
import {Link,useParams} from 'react-router-dom'
import Footer from './Footer'
import jsonInsumosItems from './jsonInsumosItems'
import Slideshow from '../componentes/Slideshow'
import Carrousel from '../componentes/Carrousel'

import {useState,useEffect} from 'react'



function InsumosOd (){


   var {id} = useParams()
   
   var [subCtgy, setSubCtgy] = useState([])

    useEffect(()=>{

      
    },[]); 
                       
  function SearchbyCtgy (e){
      var id = e.id
    var resultado = jsonInsumosSubCategory.filter(function(dato){
        if ((dato.ctgyId)==id) {
        return true
        }
        return false
    })
    setSubCtgy(resultado)
  }

        return(
            <div>
                <Navbar />  
               
                
                <div className="bannerProductosOferta">   
            
              
                <Carrousel/>
             

            
                 </div>
                 <div className="contenedor">
               <div className="containerInsumosCtgyTitle">
                       <h1>Insumos Odontológicos</h1>    
               </div >  
               <div className="containerInsumosCtgy">
                         <div className="containerInsumosCtgyTitle">
                              <h3>Categorias</h3>    
                        </div >
                
                        {CategoriaInsumos.map(function(dato,index){
                            return (
                                                                     
                        <div className="insumosCards" key={index} onClick={() => SearchbyCtgy(dato)}>                                                
                        
                            <div className="datosCardInsumos">             
                                 <img src={dato.imagen} />
                            </div>   
                           
                            <div className="cardInsumosTitle">
                                <h4>{dato.name}</h4>                                    
                               
                            </div>                              
                       
                    </div> 
                    ) 
                    
                    }
                   
                 )}
                 
                 
                 </div>  
                 <div className="containerInsumosCtgy">
                     <div className="containerInsumosCtgyTitle">
                       <h3>Subcategorias</h3>
                     </div >
                     {subCtgy.map(function(dato){
                         return(
                            <div className="insumosCardsSubCtgy" >                                              
                            <div className="cardInsumosTitle">
                                 <h4>{subCtgy.name}</h4>                                    
                            </div>       
                       
                     </div> 
                         )

                     })}
                                                                    
                       
                    
                    
                   
                 
                 </div>         
                <div className="cards-aside-ytch">
                
                
                 <div className="contenedorProductos">
                 <div className="producto">
                    <h3>Producto</h3>
                 </div>
                 <div className="containerDetailProductMain">
                   
                    {jsonInsumosItems.map(function(dato,index){
                                        return (
                        
                        <div className="datosProductoMain" key={index}>                                                
                            
                                <div className="datosProductoNameMain">
                                    <div>
                                     <img src={dato.imagen} /> 
                                    </div>
                                     <h4>{dato.name}</h4>                                                                                                 
                                </div>  
                                <div className="buttonProducto">
                                    <Link to='/detalle-insumoscopy'>
                                    <button>                                   
                                      Ir a detalles y precios del producto                                     
                                    </button> 
                                    </Link>  
                                </div>                                
                                   
                                                    
                         </div> ) 
                
              }
              
           )}

           </div> 
          
           </div>
                    
                
              
                 <aside className="publicidades">
                 hola
                 </aside>
                 </div>
                 </div>
                 <Footer />
            </div>
        )
}                          
                        
                  

export default InsumosOd
 
//<Link to={`${dato.subctgy}/${dato.id}`}>
//</Link>                               
                               