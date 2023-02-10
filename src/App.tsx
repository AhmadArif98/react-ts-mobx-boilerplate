import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MainComponent} from './components/page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MainComponent />
      </header>
    </div>
  );
}

export default App;
