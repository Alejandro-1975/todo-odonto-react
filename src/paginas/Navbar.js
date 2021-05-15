import { Link } from "react-router-dom";



function Navbar() {
    return( <div className="firstNav">
    <Link to="/">Home</Link>
    <Link to="/capacitaciones">Capacitacion</Link>
    <Link to="/youtube-channels">Canales de Youtube</Link>

 </div>)
}
export default Navbar