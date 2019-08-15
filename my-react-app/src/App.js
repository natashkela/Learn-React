import React, {useState} from 'react';
import Person from './Person/Person';
import './App.css';

const App = props => {
    const [personState, setPersonsState] = useState({
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
        ],
        otherState: 'some other value'
    });
    //It replaces completely whole state with all information
    const switchNameHandler = () => {
        //console.log('was clicked');
        //Do not do this this.state.persons[0].name = 'Maximillian';
        setPersonsState({
            person:[
                {
                    name: "Max",
                    age: 27
                },
                {
                    name: "Nata",
                    age:22
                },
                {
                    name: "Kote", 
                    age: 27
                }
            ],
            otherState: personState.otherState
        });
    };

  return (
      <div className="App">
          <h1>Hi, I am a React app</h1>
          <p>This is really working!</p>
          <button onClick={switchNameHandler}>Switch Age</button>
          <Person name={personState.person[0].name} age={personState.person[0].age}> These are children </Person>
      </div>
  );
};

export default App;