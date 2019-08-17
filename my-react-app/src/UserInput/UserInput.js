import React from 'react';
import PropTypes from 'prop-types';

const UserInput = (props) => {
    const style={
        'border-radius':'4px',
        'box-shadow':'0',
        'padding' : '10px'
    };
    return (
        <input type="text" name="user_input" style={style} onChange={props.changed} value={props.username}/>
    );
};


export default UserInput;