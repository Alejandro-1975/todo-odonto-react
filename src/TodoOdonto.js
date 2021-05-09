

import './TodoOdonto.css';

import Home from './paginas/Home.js'
import Capacitacion from './paginas/Capacitacion'
import NotFound from './paginas/404'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import detalleCursos from './paginas/PageDetalleCapacitacion';

function TodoOdonto() {
  
  return (
    <Router>
        <Switch>
          <Route path="/PageDetalleCapacitacion">
              <detalleCursos/>
          </Route>
          <Route path="/Capacitacion">
              <Capacitacion />
          </Route>
    
          <Route path="/"exact> 
                <Home />
          </Route>   

          <Route path="*">
            <NotFound/>
          </Route>
        
        </Switch>
      
    </Router>
  );
}
   

export default TodoOdonto;
