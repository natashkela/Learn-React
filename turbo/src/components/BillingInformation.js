import React from 'react';
import PropTypes from 'prop-types';
const BillingInformation = ({billingInformation, index, activePanel})=>{
  return (
    <div className="panel panel-default">
      <div className="panel-heading" onClick={()=>activePanel(index)} role="tab" id="billing-information-heading">
        <h4 className="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#checkout-accordion" href="#billing-information" aria-expanded="true" aria-controls="billing-information">
            Billing Information
          </a>
        </h4>
      </div>
      <div id="billing-information" className={billingInformation ? "panel-collapse collapse in" : "panel-collapse collapse"} role="tabpanel" aria-labelledby="billing-information-heading">
        <div className="panel-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute
        </div>
      </div>
    </div>
  );
}
BillingInformation.propTypes={
  billingInformation:PropTypes.bool,
  index: PropTypes.number,
  activePanel: PropTypes.bool
}
export default BillingInformation;
