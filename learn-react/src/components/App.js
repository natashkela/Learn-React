import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score:0
      },
      {
        name: "Treasure",
        id: 2,
        score:0
      },
      {
        name: "Ashley",
        id: 3,
        score:0
      },
      {
        name: "James",
        id: 4,
        score:0
      }
    ]
  };

  //player id Counter
  prevPlayerId = 4;

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleAddPlayer = (name) => {
    this.setState(prevState=>{
      return {
        players: [
          ...prevState.players,
          {
          name: name,
          score: 0,
          id: this.prevPlayerId += 1
        }]
    }
    });
  }

  handleScoreChange = (index, delta) => {
    this.setState(prevState=>({
      score: prevState.players[index].score+=delta
    }));
  }

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  }

  render() {
    let highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map( (player,index) =>
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            score = {player.score}
            index = {index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            highScore={highScore==player.score}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
