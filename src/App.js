import React, { Component } from 'react';
import './App.css';
import GameHotCold from './components/game'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HOT OR COLD</h1>
        </header>
        <p className="App-intro">
          To get started, guess a number between 1 and 100.
        </p>
        <GameHotCold />
    </div>
    );
  }
}

export default App;
