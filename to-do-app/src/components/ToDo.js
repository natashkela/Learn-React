import React from 'react';
import PropTypes from 'prop-types';

const ToDo = ({name}) => {
  return (
    <div>
      <span>{name}</span>
    </div>
  );
}

ToDo.propTypes = {
  name: PropTypes.string
};

export default ToDo;
