import React from 'react';
import PropTypes from 'prop-types';
const InformationText = ({mainText, description}) => {
  return (
    <div className="row mt centered">
      <div className="col-lg-6 col-lg-offset-3">
        <h1>
          {mainText.map((text,index)=>(
            <span> {text} <br/> </span>
          ))}
        </h1>
        <h3>{description}</h3>
      </div>
    </div>
  );
}
InformationText.propTypes = {
  mainText: PropTypes.array,
  description: PropTypes.string
}
export default InformationText;
