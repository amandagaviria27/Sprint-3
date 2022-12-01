import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Inicio from './components/pages/Inicio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Servicios from './components/pages/Servicios';
import SeguimientoGuia from './components/pages/SeguimientoGuia';
import NuestraCompañia from './components/pages/NuestraCompañia';
import SolicitaRecogida from './components/pages/SolicitaRecogida';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Inicio} />
          <Route path='/servicios' component={Servicios} />
          <Route path='/seguimientoguia' component={SeguimientoGuia} />
          <Route path='/solicitarecogida' component={SolicitaRecogida} />
          <Route path='/nuestracompañia' component={NuestraCompañia} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
