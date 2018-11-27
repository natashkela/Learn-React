import React from 'react';
import TeamMember from './TeamMember.js';
import PropTypes from 'prop-types';
const TeamMemberContainer = ({team}) => {
  return (
    <div className="container">
      <div className="row mt centered">
        <div className="col-lg-6 col-lg-offset-3">
          <h1>Our Awesome Team.<br/>Design Lovers.</h1>
          <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h3>
        </div>
      </div>
      <div className="row mt centered">
        {team.map((member,index)=>(
          <TeamMember name={member.name} key={index} about={member.about} />
        ))}
      </div>
    </div>
  );
}

TeamMemberContainer.propTypes = {
  team: PropTypes.array
}
export default TeamMemberContainer;
