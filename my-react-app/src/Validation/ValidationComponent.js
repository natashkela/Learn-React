import React from 'react';
import PropTypes from 'prop-types';
const ValidationComponent = (props) => {
    let message = '';
    if(props.textLength <= 5){
        message = 'Text too short';
    }
    else{
        message = 'Text too long';
    }
    return (
        <div onClick={props.removeCharComponent}>
            <p>{message}</p>
        </div>
    );
};
ValidationComponent.propTypes = {
    textLength: PropTypes.number,
    removeCharComponent: PropTypes.func
};
export default ValidationComponent;