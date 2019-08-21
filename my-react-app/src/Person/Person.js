import React from 'react';
import PropTypes from 'prop-types';
import './Person.css';
const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>
                Me var {props.name} da var {props.age} wlis
            </p>
            <p onClick={props.click}>
                {props.children}
            </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};
Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    changed: PropTypes.func
};
export default Person;