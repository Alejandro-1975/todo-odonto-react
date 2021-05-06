

import './TodoOdonto.css';

import Home from './paginas/Home.js'
import Capacitacion from './paginas/Capacitacion'
import NotFound from './paginas/404'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function TodoOdonto() {
  
  return (
    <Router>
        <Switch>
        
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
