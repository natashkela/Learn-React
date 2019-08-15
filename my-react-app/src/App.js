import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state   = {
      person:[
          {
              name: "Max",
              age: 20
          },
          {
              name: "Nata",
              age:22
          },
          {
              name: "Kote",
              age: 23
          }
      ]
  };

  switchNameHandler = () => {
      console.log('was clicked');
  }

  render(){
      return (
          <div className="App">
              <h1>Hi, I am a React app</h1>
              <p>This is really working!</p>
              <button onClick={this.switchNameHandler}>Switch Age</button>
              <Person name={this.state.person[0].name} age={this.state.person[0].age}> These are children </Person>
          </div>
      );
  }
}

export default App;
