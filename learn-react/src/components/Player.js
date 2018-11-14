import React, {PureComponent} from 'react';
import Counter from './Counter';
import Icon from './Icon';
import PropTypes from 'prop-types';
class Player extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    score: PropTypes.number,
    id: PropTypes.number,
    index: PropTypes.number,
    highScore: PropTypes.bool
  };
  render(){
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore,
      highScore
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Icon isHighScore={highScore}/>
          { name }
        </span>

        <Counter score={score} index={index} changeScore={changeScore}/>
      </div>
    );
  }
}

export default Player;
