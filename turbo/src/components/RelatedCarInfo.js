import React from 'react';
import PropTypes from 'prop-types';
import RelatedCars from './RelatedCars.js';
import Faqs from './Faqs.js';
const RelatedCarInfo = ({relatedCars}) => {
  return (
    <div className="rq-content-block">
      <div className="related-car-faq">
        <div className="container">
          <div className="row">
            <RelatedCars relatedCars={relatedCars}/>
            <Faqs />
          </div>
        </div>
      </div>
    </div>
  );
}
RelatedCarInfo.propTypes = {
  relatedCars:PropTypes.array
}
export default RelatedCarInfo;
