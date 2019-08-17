import React from 'react';
import PropTypes from 'prop-types';
import './CharComponent.css';
const CharComponent = (props) => {
    return (
        <div className='CharComponent' onClick={props.delete}>
            <p>{props.character}</p>
        </div>
    );
};
CharComponent.propTypes = {
    character: PropTypes.string,
    delete: PropTypes.func
};
export default CharComponent;