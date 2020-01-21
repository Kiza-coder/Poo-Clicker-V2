import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JumbotronHeader from './components/Jumbotron/Jumbotron';
import Game from './components/Game/Game';
import Footer from './components/Footer/Footer';

const App =() => {
  return (
          <div>
              <JumbotronHeader />
              <Game />
              <Footer />
          </div>
  );
}

export default App;
