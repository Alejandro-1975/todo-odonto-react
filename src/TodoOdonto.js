

import './TodoOdonto.css';

import Home from './paginas/Home.js'
import CardCapacitacion from './paginas/CardCapacitacion'
import NotFound from './paginas/404'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import detalleCursos from './paginas/PageDetalleCapacitacion';
import YoutubeChannels from './paginas/CardYoutubeChannels'

function TodoOdonto() {
  
  return (
    <Router>
        <Switch>
        <Route path="/youtube-channels">
              <YoutubeChannels />
          </Route>
          <Route path="/items/:id">
              <detalleCursos/>
          </Route>
         
          <Route path="/capacitaciones">
              <CardCapacitacion />
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

// ruta de categorias segun id 1 a 9  que a su vez llevan a la ruta de items por id 
