import React,{Component} from 'react';
import Navbar from './Navbar';
import BreadcrumbSecondary from './BreadcrumbSecondary';
import CheckoutMethod from './CheckoutMethod';
import BillingInformation from './BillingInformation';
import PaymentInformation from './PaymentInformation';
import OrderReview from './OrderReview';
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
   ],
   isLoggedIn:true
 }
  render(){
    return (
      <div className="checkout">
        <Navbar />
          {this.state.isLoggedIn &&
            <div className="rq-page-content">
              <div className="rq-content-block">
                <div className="container">
                  <BreadcrumbSecondary title={this.state.title} breadcrumbs={this.state.breadcrumbs} />
                  <div className="rq-checkout-wrapper">
                    <div className="container">
                      <div className="row">
                        <div className="panel-group" id="checkout-accordion" role="tablist" aria-multiselectable="true">
                          <CheckoutMethod />
                          <BillingInformation />
                          <PaymentInformation />
                          <OrderReview />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          {!this.state.isLoggedIn &&
            <div></div>
          }
        <Footer />
      </div>
    )
  }
}
export default Checkout;
