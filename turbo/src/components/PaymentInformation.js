import React from 'react';
import PropTypes from 'prop-types';
const PaymentInformation = ({paymentInformation, index,activePanel}) =>{
  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" onClick={()=>activePanel(index)} id="payment-information-heading">
        <h4 className="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#checkout-accordion" href="#payment-information" aria-expanded="true" aria-controls="payment-information">
            Payment Information
          </a>
        </h4>
      </div>
      <div id="payment-information" className={paymentInformation ? "panel-collapse collapse in" : "panel-collapse collapse"} role="tabpanel" aria-labelledby="payment-information-heading">
        <div className="panel-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute
        </div>
      </div>
    </div>
  );
}
PaymentInformation.propTypes = {
  paymentInformation:PropTypes.bool,
  index: PropTypes.number,
  activePanel: PropTypes.bool
}
export default PaymentInformation;
