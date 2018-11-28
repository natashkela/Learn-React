import React from 'react';
import PropTypes from 'prop-types';
const TeamMember = ({name,about,index}) => {
  return (
    <div className="col-lg-4">
      <img className="img-circle" src={require('../img/pic'+index+'.jpg')} width="140" alt="" />
      <h4>{name}</h4>
      <p>{about}</p>
      <p><i className="glyphicon glyphicon-send"></i> <i className="glyphicon glyphicon-phone"></i> <i className="glyphicon glyphicon-globe"></i></p>
    </div>
  );
}

TeamMember.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string,
  index: PropTypes.number
}
export default TeamMember;
