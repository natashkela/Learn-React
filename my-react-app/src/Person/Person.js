import React from 'react';
import PropTypes from 'prop-types';
const Person = (props) => {
    return (
        <p>
            Ras shvebi aba ? Me {props.year} wlis var exla
        </p>
    );
};
Person.propTypes = {
    year: PropTypes.number
};
export default Person; 