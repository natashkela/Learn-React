import React from 'react';
import PropTypes from 'prop-types';
import './UserOutput.css'
const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hello {props.username}, how are you doing? </p>
            <p>Have a great day!</p>
        </div>
    );
};

UserOutput.propTypes = {
    username: PropTypes.string
};

export default UserOutput;