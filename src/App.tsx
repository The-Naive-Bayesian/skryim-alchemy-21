import React from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientList from "./components/IngredientList";
import Ingredients from './data/Ingredients';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <IngredientList ingredients={Ingredients}/>
    </div>
  );
}

export default App;
