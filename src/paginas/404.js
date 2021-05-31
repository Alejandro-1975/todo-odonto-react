import {Link} from 'react-router-dom'
import Navbar from './Navbar.js'
import Footer from './Footer'
import Container from '@material-ui/core/container';

function NotFound(){
    return(

        <Container maxWidth>
            <Navbar />  
            <div className="notFound">
                <h1>Pagina no encontrada</h1>
                <p> Esta página esta en construcción para mejorar su experiencia. </p>
                <p>Le agradecemos que vuelva a nuestro sitio web a traves de los links del encabezado o del pie de pagina. </p> 
                <p> Muchas Gracias.</p> 
            <div className="not-found">
                <img src="/images/not-found.jpg" />  
            </div>        
               
            </div>
                     
            
            <Footer />
        </Container>
    )
}

export default NotFound