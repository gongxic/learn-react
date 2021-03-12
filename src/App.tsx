import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Axios from 'axios';

function App() {

  function clickTest() {
    Axios.get('https://netcore.miniprogram.icu/WeatherForecast').then(m => alert(m)).then(e => { alert('error click') })
  }

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
        <button onClick={ }></button>
      </header>
    </div>
  );
}

export default App;
