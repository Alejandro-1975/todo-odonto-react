import {Link} from 'react-router-dom'
import Navbar from './Navbar.js'

function NotFound(){
    return(

        <div>
            <Navbar />  
            <h1>Pagina no encontrada</h1>
            <Link to="/">Volver al Sitio</Link>
        </div>
    )
}

export default NotFound