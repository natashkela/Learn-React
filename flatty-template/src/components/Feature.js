import React from 'react';
import PropTypes from 'prop-types';
const Feature = ({img, featureHeader, featureText, counter}) =>{
  return (
    <div className="col-lg-4">
      <img src={require('../img/ser0'+counter+'.png')} width="180" alt="" />
      <h4>{counter} - {featureHeader}</h4>
      <p>{featureText}</p>

    </div>
  );
}

Feature.propTypes = {
  counter: PropTypes.number,
  img: PropTypes.string,
  featureHeader: PropTypes.string,
  featureDescription: PropTypes.string
}
export default Feature;
