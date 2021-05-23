import { Link } from "react-router-dom";
//import Cart from './Cart.js'
import SearchAppBar from '../componentes/mUiAppBar'
import MenuListComposition from '../componentes/MenuList'




function Navbar() {
    return( 
     <div>
        <SearchAppBar />
        <div className="head">
                    
              <div>
                  <p>"Todo lo que necesitas de Odontología en un solo lugar"</p>
              </div>
              <MenuListComposition />
              
        </div>
                      
        </div>                   
                                     
           

 )
}
export default Navbar