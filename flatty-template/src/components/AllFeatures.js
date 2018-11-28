import React from 'react';
import InformationText from './InformationText';
import PropTypes from 'prop-types';
import Feature from './Feature.js';
const AllFeatures = ({features}) => {
  return (
  <div className="container">
    <InformationText mainText={["Your Landing Page","Looks Wonderful Now."]}
                      description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
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
