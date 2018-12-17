import React from 'react';
import RelatedCars from './RelatedCars.js';
import Faqs from './Faqs.js';
const RelatedCarInfo = () => {
  return (
    <div className="rq-content-block">
      <div className="related-car-faq">
        <div className="container">
          <div className="row">
            <RelatedCars />
            <Faqs />
          </div>
        </div>
      </div>
    </div>
  );
}
export default RelatedCarInfo;
