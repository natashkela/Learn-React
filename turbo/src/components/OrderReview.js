import React from 'react';
import PropTypes from 'prop-types';
const OrderReview = ({orderReview, index, activePanel, reservedCarShortInfo})=>{
  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" onClick={()=>activePanel(index)} id="order-review-heading">
        <h4 className="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#checkout-accordion" href="#order-review" aria-expanded="true" aria-controls="order-review">
            Order Review
          </a>
        </h4>
      </div>
      <div id="order-review" className={orderReview ? "panel-collapse collapse in" : "panel-collapse collapse"} role="tabpanel" aria-labelledby="order-review-heading">
        <div className="panel-body">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">Car Picture</div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>Car Brand & Model</p>
              <p>Car Year</p>
              <p>Car Author</p>
              <p>Price Information</p>
              <p>Dates of Reservation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
OrderReview.propTypes = {
  orderReview:PropTypes.bool,
  index: PropTypes.number,
  activePanel: PropTypes.bool,
  reservedCarShortInfo:PropTypes.object
}
export default OrderReview;
