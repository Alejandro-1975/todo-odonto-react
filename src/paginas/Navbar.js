import { Link } from "react-router-dom";



function Navbar() {
    return( <div className="firstNav">
    <Link to="/">Home</Link>
    <Link to="/Capacitacion">Capacitacion</Link>
    <Link to="/PageDetalleCapacitacion<">Detalle Cursos</Link>
 </div>)
}
export default Navbar