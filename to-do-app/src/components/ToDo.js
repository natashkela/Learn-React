import React from 'react';
import PropTypes from 'prop-types';

const ToDo = ({name, removeToDo, id}) => {
  // console.log(name);
  return (
    <div className="todo">
      <span onClick={()=>removeToDo(id)} className="fas fa-times remove-icon"></span>
      <span >{name}</span>
    </div>
  );
}

ToDo.propTypes = {
  name: PropTypes.string,
  removeToDo: PropTypes.func,
  id: PropTypes.number
};

export default ToDo;
