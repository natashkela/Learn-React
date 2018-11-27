import React from 'react';
import PropTypes from 'prop-types';
import feature1 from '../img/ser01.png';
import feature2 from '../img/ser02.png';
import feature3 from '../img/ser03.png';
const Feature = ({img, featureHeader, featureText, counter}) =>{
  return (
    <div className="col-lg-4">
      <img src={feature1} width="180" alt="" />
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
