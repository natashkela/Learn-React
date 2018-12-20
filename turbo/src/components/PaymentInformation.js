import React from 'react';
import PropTypes from 'prop-types';
const PaymentInformation = () =>{
  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id="payment-information-heading">
        <h4 className="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#checkout-accordion" href="#payment-information" aria-expanded="true" aria-controls="payment-information">
            05. Payment Information
          </a>
        </h4>
      </div>
      <div id="payment-information" className="panel-collapse collapse" role="tabpanel" aria-labelledby="payment-information-heading">
        <div className="panel-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute
        </div>
      </div>
    </div>
  );
}
export default PaymentInformation;
