import React from 'react';
import TeamMember from './TeamMember.js';
import PropTypes from 'prop-types';
import InformationText from './InformationText.js';
const TeamMemberContainer = ({team}) => {
  let mainText = [
      "Our Awesome Team.",
      "Design Lovers."
  ];
  return (
    <div className="container">
      <InformationText mainText={mainText}/>
      <div className="row mt centered">
        {team.map((member,index)=>(
          <TeamMember name={member.name} key={index} index={index+1} about={member.about} />
        ))}
      </div>
    </div>
  );
}

TeamMemberContainer.propTypes = {
  team: PropTypes.array
}
export default TeamMemberContainer;
