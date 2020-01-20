import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';

import JumbotronHeader from './components/Jumbotron/Jumbotron';
import Game from './components/Game/Game';
import Footer from './components/Footer/Footer';
import Ribbon from './components/Ribbon/Ribbon';

const App =() => {
  return (
          <div>
              <JumbotronHeader />
              <Ribbon />
              <Game />
              <Footer />
          </div>
  );
}

export default App;
