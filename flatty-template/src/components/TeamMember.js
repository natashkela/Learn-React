import React from 'react';
import PropTypes from 'prop-types';
import pic1 from '../img/pic1.jpg';
import pic2 from '../img/pic2.jpg';
import pic3 from '../img/pic3.jpg';
const TeamMember = ({name,about}) => {
  return (
    <div className="col-lg-4">
      <img className="img-circle" src={pic1} width="140" alt="" />
      <h4>{name}</h4>
      <p>{about}</p>
      <p><i className="glyphicon glyphicon-send"></i> <i className="glyphicon glyphicon-phone"></i> <i className="glyphicon glyphicon-globe"></i></p>
    </div>
  );
}

TeamMember.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string
}
export default TeamMember;
