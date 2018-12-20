import React,{Component} from 'react';
import Navbar from './Navbar';
import BreadcrumbSecondary from './BreadcrumbSecondary';
import Footer from './Footer';
class Checkout extends Component {
  state = {
    title: "Checkout",
    breadcrumbs: [
     {
       title: "Home",
       href: "/"
     },
     {
       title: "Car Title Goes Here",
       href: "/car"
     },
     {
       title:"Checkout"
     }
   ]
 }
  render(){
    return (
      <div className="checkout">
        <Navbar />
        <div className="rq-page-content">
          <div className="rq-content-block">
            <div className="container">
              <BreadcrumbSecondary title={this.state.title} breadcrumbs={this.state.breadcrumbs} />
              <div className="rq-checkout-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="panel-group" id="checkout-accordion" role="tablist" aria-multiselectable="true">
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
                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="billing-information-heading">
                          <h4 className="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#checkout-accordion" href="#billing-information" aria-expanded="true" aria-controls="billing-information">
                              02. Billing Information
                            </a>
                          </h4>
                        </div>
                        <div id="billing-information" className="panel-collapse collapse" role="tabpanel" aria-labelledby="billing-information-heading">
                          <div className="panel-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="shipping-information-heading">
                          <h4 className="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#checkout-accordion" href="#shipping-information" aria-expanded="true" aria-controls="shipping-information">
                              03. Shipping Information
                            </a>
                          </h4>
                        </div>
                        <div id="shipping-information" className="panel-collapse collapse" role="tabpanel" aria-labelledby="shipping-information-heading">
                          <div className="panel-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="shipping-method-heading">
                          <h4 className="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#checkout-accordion" href="#shipping-method" aria-expanded="true" aria-controls="shipping-method">
                              04. Shipping Method
                            </a>
                          </h4>
                        </div>
                        <div id="shipping-method" className="panel-collapse collapse" role="tabpanel" aria-labelledby="shipping-method-heading">
                          <div className="panel-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute
                          </div>
                        </div>
                      </div>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Checkout;
