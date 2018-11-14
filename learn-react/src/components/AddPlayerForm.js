import React,{Component} from 'react';
import PropTypes from 'prop-types';
class AddPlayerForm extends Component{
  playerInput = React.createRef();

  static propTypes = {
    addPlayer: PropTypes.func
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {addPlayer} = this.props;
    addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  }

  render(){
    return(
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.playerInput}  placeholder="Enter a player's name" />
          <input type="submit" value="Add Player" />
        </form>
    )
  }
}

export default AddPlayerForm;
