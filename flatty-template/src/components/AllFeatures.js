import React from 'react';
import PropTypes from 'prop-types';
import Feature from './Feature.js';
const AllFeatures = ({features}) => {
  return (
  <div className="container">
    <div className="row mt centered">
      <div className="col-lg-6 col-lg-offset-3">
        <h1>Your Landing Page<br/>Looks Wonderful Now.</h1>
        <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h3>
      </div>
    </div>

    <div className="row mt centered">
      {features.map((feature,index)=>(
        <Feature img={feature.img} key={index} featureHeader={feature.featureHeader} featureText={feature.featureText} counter={index+1} />
      ))}
    </div>
  </div>
);
}

AllFeatures.propTypes={
  features:PropTypes.array
}

export default AllFeatures;
