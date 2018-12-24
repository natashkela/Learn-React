import React from 'react';
import CountryListSelect from './CountryListSelect';
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
          <div className="row">
            <div className="col-md-6">
              <input type="text" name="billing-first-name" className="rq-form-control reverse" placeholder="First Name" required />
            </div>
            <div className="col-md-6">
              <input type="text" name="billing-last-name" className="rq-form-control reverse" placeholder="Last Name" required />
            </div>
            <div className="col-md-12">
              <input type="text" name="address1" className="rq-form-control reverse" placeholder="Address Line 1" required />
            </div>
            <div className="col-md-12">
              <input type="text" name="address2" className="rq-form-control reverse" placeholder="Address Line 2" required />
            </div>
            <div className="col-md-6">
              <input type="text" name="city" className="rq-form-control reverse" placeholder="City" required />
            </div>
            <div className="col-md-6">
              <CountryListSelect />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
BillingInformation.propTypes={
  billingInformation:PropTypes.bool,
  index: PropTypes.number,
  activePanel: PropTypes.func
}
export default BillingInformation;
