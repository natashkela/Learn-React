import React, {useEffect, useRef, useContext} from 'react';
import AuthContext from '../../context/auth-context';
import classes from './Cockpit.css';

const Cockpit = ( props ) => {
    const toggleButtonRef = React.useRef(null);
    useEffect(()=>{
       console.log(['Cockpit.js useEffect']);
       //HTTP request

        const timer = setTimeout(()=>{
            alert('Saved Data to cloud');
        },1000);

        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(()=>{
        console.log(['Cockpit.js 2nd useEffect']);
        //HTTP request
        return () => {
            console.log('[Cockpit.js] 2nd cleanup work in useEffect');
        }
    });
    //instantly click button
    //executes the function only after the first execution  once
    useEffect(()=>{
        toggleButtonRef.current.click();
    },[]);
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }
    const authContext = useContext(AuthContext);
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked} ref={toggleButtonRef}>Toggle Persons</button>
                <button onClick={authContext.login}>Login</button>
        </div>
    );
};

export default React.memo(Cockpit);