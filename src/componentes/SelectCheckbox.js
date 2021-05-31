 import jsonCapacitacionFiltros from '../paginas/jsonCapacitacionFiltros'
 import '../css/categorias.css';



function SelectCheckbox (){
        return(
          
          <div className="contenedor">
             
               <div className="categoryFilter">
                  <div className="filtroTitle">
                     <h2>Elija la MODALIDAD del curso que busca para filtrar</h2>
                     <p>Si no chequea ninguno, apareceran todas las MODALIDADES en el TEMA que haya elegido</p>
                  </div> 
                  <div className="filtroCheck">  
                    {jsonCapacitacionFiltros.map(function(dato,index){
                            return (
                        
                         <div className= "filtro" key={index}>
                    
                                 <div  >
                                         <input aria-checked="false" type="checkbox" name="filter" id="id_filter_simsearch1.fha" value="simsearch1.fha" data-is-custom="false"/>
                                            <label className="filtroCheckon" for="id_filter_simsearch1.fha"> {dato.name}
                                            </label>
                                 </div>
                    
                   
                        </div> ) 
                  
                    }
                     
                 )}    
                   </div> 
         </div>  
            
            </div>
        )
}                          
                        
 
export default SelectCheckbox
