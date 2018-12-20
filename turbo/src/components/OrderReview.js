import React from 'react';
const OrderReview = ()=>{
  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id="order-review-heading">
        <h4 className="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#checkout-accordion" href="#order-review" aria-expanded="true" aria-controls="order-review">
            06. Order Review
          </a>
        </h4>
      </div>
      <div id="order-review" className="panel-collapse collapse" role="tabpanel" aria-labelledby="order-review-heading">
        <div className="panel-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute
        </div>
      </div>
    </div>
  );
}
export default OrderReview;
