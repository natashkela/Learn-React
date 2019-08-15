import React from 'react';
import PropTypes from 'prop-types';
const Person = (props) => {
    return (
        <div>
            <p>
                Me var {props.name} da var {props.age} wlis
            </p>
            <p>
                {props.children}
            </p>
        </div>
    );
};
Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};
export default Person;