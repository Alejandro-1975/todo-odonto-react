import Navbar from './Navbar.js'
import CategoriaInsumos from './jsonInsumosCategorias'
import jsonInsumosSubCategory from './jsonInsumosSubCategory'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import jsonInsumosItems from './jsonInsumosItems'
import Slideshow from '../componentes/Slideshow'

// import jsonInsumosSubCategory from './jsonInsumosSubCategory'
// import {useState,useEffect} from 'react'
// import {useParams} from 'react-router-dom'

// function selectSubctgy (){
//     var ctgy = jsonInsumosSubCategory{dato.ctgy-id}
//     var [SubCtgy, setSubCtgy] = useState({})

//     useEffect(()=>{

//         var resultado = jsonInsumosSubCategory.filter(function(dato){
//             if (ctgy==id) {
//                return  
//                  <div className="subcategory">
               //      <h3>Subcategorias</h3>
                //                                                                        
             //         <div className="insumosCards" key={index}>                                              
             //            <div className="cardInsumosTitle">
             //                 <h4>{dato.name}</h4>                                    
              //            </div>       
                 //     </div> )                                    
           //     }
                   
                //  )}
                //  </div>
//             }
//             return false
//         })
//         setSubCtgy(resultado)
//     },[]); 
                       
  
function InsumosOd (){
        return(
            <div>
                <Navbar />  
               
                
                <div className="banner">   
            
              
            
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
                                <Link to={`${dato.subctgy}/${dato.id}`}>                                           
                        <div className="insumosCards" key={index}>                                                
                        
                            <div className="datosCardInsumos">             
                                 <img src={dato.imagen} />
                            </div>   
                           
                            <div className="cardInsumosTitle">
                                <h4>{dato.name}</h4>                                    
                               
                            </div>                              
                       
                    </div> 
                    </Link>  ) 
                    
                    }
                   
                 )}
                 
                 
                 </div>  
                 <div className="containerInsumosCtgy">
                     <div className="containerInsumosCtgyTitle">
                       <h3>Subcategorias</h3>
                     </div >
                     {jsonInsumosSubCategory.map(function(dato,index){
                            return (
                                                                    
                        <div className="insumosCards" key={index}>                                              
                           <div className="cardInsumosTitle">
                                <h4>{dato.name}</h4>                                    
                           </div>       
                      
                    </div> ) 
                    
                    }
                   
                 )}
                 </div>        
                <div className="cards-aside-ytch">
                
                
                 <div>
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
                                    <button>                                   
                                      Ir a detalles y precios del producto                                     
                                    </button> 
                                </div>                                  
                                   
                                                    
                         </div> ) 
                
              }
              
           )}

           </div> 
          
           </div>
                    
                
              
                 <aside className="publicidades">
                 <img src="http://localhost:3000/public/images/ofertas/oferta.jpg" /> 
                 </aside>
                 </div>
                 </div>
                 <Footer />
            </div>
        )
}                          
                        
                  

export default InsumosOd
 

                                 
                               