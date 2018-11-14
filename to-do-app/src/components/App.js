import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToDo from './AddToDo';
import ToDo from './ToDo';
class App extends Component {
  state = {
    toDo: []
  };

  handleAddToDo = (name) => {
      this.setState(prevState => {
        return {
          toDo: [...prevState.toDo, name]
        };
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <AddToDo addToDo={this.handleAddToDo} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3">
            {this.state.toDo.map((name,index) =>
              <ToDo key={index} name={name}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  addToDo: PropTypes.func
};
