import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './Validation/ValidationComponent.js';
import CharComponent from "./CharComponent/CharComponent";
import Radium, {StyleRoot} from 'radium';
class App extends Component {
    state = {
        persons: [
            { id: 1, name: 'Max', age: 28 },
            { id:2, name: 'Manu', age: 29 },
            {id:3, name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        username: 'nvacheishvili',
        showPersons:false,
        enteredText : ''
    };

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index,1);
        this.setState({persons:persons});
    };

    nameChangedHandler = (event, id) => {
        const personsIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personsIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personsIndex] = person;
        this.setState( {
            persons: persons
        } )
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    textLengthHandler = (event) => {
        this.setState({enteredText: event.target.value});
    };

    textCharHandler = (index) => {
        let text = this.state.enteredText.split('');
        text.splice(index,1)
        text = text.join('');
        this.setState({enteredText: text})
    };

    render () {
        const style={
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor:'pointer',
            ':hover':{
                backgroundColor:'lightgreen',
                color:'black'
            }
        };

        let persons = null;

        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map( (person, index) => {
                           return  <Person key={"delete_person_"+person.id} changed={(event) => this.nameChangedHandler(event, person.id)} name={person.name} age={person.age} click={()=>this.deletePersonHandler(index)} />
                        })}
                </div>
            );
            style.backgroundColor='red';
            style[':hover']={
                backgroundColor:'lightred',
                color:'black'
            }
        }

        let charComponents = (
            <div>
                {this.state.enteredText.split("").map( (c, index) => {
                        return <CharComponent key={index} character={c} delete={() => this.textCharHandler(index)}/>
                })}
            </div>
        );

        let classes = [];
        if(this.state.persons.length <=2){
            classes.push('red');
        }
        if(this.state.persons.length<=1){
            classes.push('bold');
        }
        let textLength = this.state.enteredText.length;
        return (
            <StyleRoot>
                <div className="App">
                    <h1>Hi, I'm a React App</h1>
                    <p className={classes.join(' ')}>This is really working!</p>
                    <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
                    {persons}
                    <div>
                        <input type="text" onChange={(event) => this.textLengthHandler(event)}/>
                        <p>{textLength}</p>
                        <ValidationComponent textLength={textLength} />
                        {charComponents}
                    </div>
                </div>
            </StyleRoot>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default Radium(App);
