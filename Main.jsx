import ReactDOM from 'react-dom';
import React from 'react' ;
import Pokedex from './components/Pokedex';

const App = () => {
  return(
    <div className="pokedex-container">
      <header>
        <p className="brand">Pokedex</p>
      </header>
      <Pokedex />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'))
