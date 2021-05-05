import {Link} from 'react-router-dom'


function NotFound(){
    return(

        <div>
            <h1>Pagina no encontrada</h1>
            <Link to="/">Volver al Sitio</Link>
        </div>
    )
}

export default NotFound