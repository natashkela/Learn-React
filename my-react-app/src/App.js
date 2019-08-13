import React, {Component} from 'react';
import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render(){
      return (
          <div className="App">
              <h1>Hi, I am a React app</h1>
              <p>This is really working!</p>
              <Person year={20} />
          </div>
      );
  }
}

export default App;
