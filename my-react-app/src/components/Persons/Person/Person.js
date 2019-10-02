import React, {Component, Fragment} from 'react';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';
class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.login);
    }

    //has to be named like this & should be static
    static contextType = AuthContext;
  render() {
      console.log('[Person.js] rendering...');
      return (
          <Fragment>
                  {this.context.authenticated ? <p>Authenticated! </p> : <p>Please Login</p>}
                  <p onClick={this.props.click}>
                      I'm {this.props.name} and I am {this.props.age} years old!
                  </p>
                  <p>{this.props.children}</p>
                  <input ref={this.inputElementRef} type="text" onChange={this.props.changed} value={this.props.name}/>
          </Fragment>
      );
  }
};

export default withClass(Person, classes.Person);
