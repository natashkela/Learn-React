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

  handleRemoveToDo = (index) => {
    this.setState( prevState => {
      return {
        players: prevState.toDo.splice(index,1)
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
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-3">
            <h2> To Do </h2>
            {this.state.toDo.map((name,index) =>
              <ToDo key={index} id={index} name={name} removeToDo={this.handleRemoveToDo}/>
            )}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-3">
            <h2> Done </h2>
            {this.state.toDo.map((name,index) =>
              <ToDo key={index} id={index} name={name} removeToDo={this.handleRemoveToDo}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  addToDo: PropTypes.func,
  key: PropTypes.number,
  name: PropTypes.string,
  removeToDo: PropTypes.func
};
