import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToDo from './AddToDo'

class App extends Component {
  state: {
    toDo: []
  };

  handleAddToDo = (name) => {

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <AddToDo addToDo={this.handleAddToDo} />
        </div>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  addToDo: PropTypes.func
};
