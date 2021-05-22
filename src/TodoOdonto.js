

import './TodoOdonto.css';

import Home from './paginas/Home.js'
import CardCapacitacion from './paginas/CardCapacitacion'
import NotFound from './paginas/404'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import CardYoutubeChannels from './paginas/CardYoutubeChannels'
import CardInstrumental from './paginas/CardInstrumental'
import CardInsumos from './paginas/CardInsumos'
import CardEquipamientos from './paginas/CardEquipamientos'
import CardBlogs from './paginas/CardBlogs'
import CardRecursosHumanos from './paginas/CardRecursosHumanos'
import CardClasificados from './paginas/CardClasificados'
import CardSoftware from './paginas/CardSoftware'
import CardBiblioteca from './paginas/CardBiblioteca'
import CardInsumosSubCat from './paginas/CardInsumosSubCat'
import Contacto from './paginas/Contacto.js'
import Nosotros from './paginas/Nosotros.js'



function TodoOdonto() {
  
  return (
    <Router>
        <Switch>
        <Route path="/nosotros">
              <Nosotros />
          </Route>   
        <Route path="/contacto">
              <Contacto />
          </Route>   
          <Route path="/libreria">
              <CardBiblioteca />
          </Route>   
          <Route path="/software">
              <CardSoftware />
          </Route>   
          <Route path="/alquileres-usados">
              <CardClasificados />
          </Route>         
          <Route path="/rh">
              <CardRecursosHumanos />
          </Route>         
          <Route path="/blogs">
              <CardBlogs />
          </Route>
          <Route path="/equipamiento">
              <CardEquipamientos />
          </Route>
          <Route path="/insumos/">
              <CardInsumos />
          </Route>
          <Route path="/insumos">
              <CardInsumos />
          </Route>
          <Route path="/instrumental">
              <CardInstrumental />
          </Route>
          <Route path="/youtube">
              <CardYoutubeChannels />
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
