import React, { Component } from 'react';
import buildings from './data.json';
import GameCard from './components/game_pieces';

import './App.css';

class App extends Component {
  state = {
    clicked: [],
    buildings
  };

  addToClicked = id => {
    if (this.state.clicked.indexOf(id) > -1) {
      console.log("I've already been clicked!");
    } else {
      let clicked = [...this.state.clicked, id];
      this.setState({ clicked });
      this.shuffleArray();
    }
  };

  shuffleArray = () => {
    let buildings = this.state.buildings;
    for (let i = buildings.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [buildings[i], buildings[j]] = [buildings[j], buildings[i]];
    }
    this.setState({ buildings });
  };

  render() {
    return (
      <div>
        {this.state.buildings.map(building => (
          <GameCard
            key={building.id}
            image={building.image}
            id={building.id}
            name={building.name}
            addToClicked={this.addToClicked}
          />
        ))}
      </div>
    );
  }
}

export default App;
