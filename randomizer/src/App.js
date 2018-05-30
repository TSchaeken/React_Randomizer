import React, { Component } from 'react';
import buildings from './data.json';
import GameCard from './components/game_pieces';

import './App.css';

class App extends Component {
  state = {
    buildings
  };

  render() {
    return (
      <div>
        {this.state.buildings.map(building => (
          <GameCard image={building.image} id={building.id} name={building.name} />
        ))}
      </div>
    );
  }
}

export default App;

