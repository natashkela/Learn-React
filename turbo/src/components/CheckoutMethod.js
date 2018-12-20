import React from 'react';
const CheckoutMethod = () => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id="checkout-method-heading">
        <h4 className="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#checkout-accordion" href="#checkout-method" aria-expanded="true" aria-controls="checkout-method">
            01. Checkout Method
          </a>
        </h4>
      </div>
      <div id="checkout-method" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="checkout-method-heading">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-6">
              <div className="panel-subtitle">
                <h5>Check as a guest or register</h5>
                <p>Register with us for future convenience:</p>
              </div>
              <div className="rq-radiobox-content">
                <span className="rq-radiobox">
                  <input type="radio" name="checkout-login-method" id="checkout-login-method" value="guest" checked />
                  <label for="checkout-login-method">Check as guest</label>
                </span>
                <span className="rq-radiobox">
                  <input checked type="radio" name="checkout-login-method" id="checkout-login-method-two" value="guest" />
                  <label for="checkout-login-method-two">Register</label>
                </span>
              </div>
              <div className="panel-subtitle">
                <h5>Register and save time !</h5>
                <p>Register with us for future convenience:</p>
              </div>

              <div className="widget-categories">
                <ul>
                  <li>Fast and easy check out</li>
                  <li>Easy access to your order history and status</li>
                </ul>
              </div>
              <div className="guest-btn">
                <button className="rq-btn rq-btn-transparent">Continue</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="panel-subtitle">
                <h5>Already Registered ?</h5>
                <p>Please login below :</p>
              </div>
              <form action="#" className="rq-checkout-form">
                <div className="form-group">
                  <label for="login-email">Email Address <span className="required">*</span></label>
                  <input type="email" className="rq-form-control small" id="login-email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label for="login-password">Password <span className="required">*</span></label>
                  <input type="password" className="rq-form-control small" id="login-password" placeholder="Password" />
                </div>
                <span className="required">* Required Fields</span>
                <div className="login-button">
                  <a href="#">Forgot Your Password ?</a>
                  <button type="submit" className="rq-btn rq-btn-primary btn-large">Log In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutMethod;
