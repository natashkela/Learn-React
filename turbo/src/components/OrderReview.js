import React from 'react';
import PropTypes from 'prop-types';
const OrderReview = ({orderReview, index, activePanel})=>{
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
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute
        </div>
      </div>
    </div>
  );
}
OrderReview.propTypes = {
  orderReview:PropTypes.bool,
  index: PropTypes.number,
  activePanel: PropTypes.bool
}
export default OrderReview;
