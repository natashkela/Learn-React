import React,{Component} from 'react';
import Navbar from './Navbar.js';
import CarInformation from './CarInformation.js';
import Footer from './Footer.js';
class CarDetail extends Component{
  state={
     title: "Toyota Prado",
     breadcrumbs: [
      {
        title: "Home",
        href: "/"
      },
      {
        title:"All Cars",
        href:"/cars"
      },
      {
        title:"Toyota Prado"
      }
    ]
  }
  render(){
    return(
      <div className="car-detail">
        <Navbar />
        <div className="rq-page-content">
          <div className="rq-listing-details">
            <CarInformation breadcrumbs={this.state.breadcrumbs} title={this.state.title}/>
            <div className="rq-content-block gray-bg">
              <div className="container">
                <div className="listing-page-title">
                  <h3>Book Car Now</h3>
                </div>
                <div className="rq-car-booking-section">
                  <div className="car-search">
                    <div className="rq-search-container">
                      <div className="rq-search-single">
                        <div className="rq-search-content">
                          <span className="rq-search-heading">Location</span>
                          <select name="categories" className="category-option">
                            <option value="0">Pick a location</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                          </select>
                        </div>
                      </div>
                      <div className="rq-search-single">
                        <div className="rq-search-content">
                          <span className="rq-search-heading">Pick up</span>
                          <input type="text" name="datefilter" className="rq-form-element datepicker" id="startdate" placeholder="Pick up date"/>
                          <i className="ion-chevron-down datepicker-arrow"></i>
                        </div>
                      </div>
                      <div className="rq-search-single">
                        <div className="rq-search-content">
                          <span className="rq-search-heading">Return</span>
                          <input type="text" name="datefilter" className="rq-form-element" id="enddate" placeholder="Return date"/>
                          <i className="ion-chevron-down datepicker-arrow"></i>
                        </div>
                      </div>
                      <div className="rq-search-single">
                        <div className="rq-search-content">
                          <span className="rq-search-heading">Car Types</span>
                          <select name="categories" className="category-option">
                            <option value="0">Saden</option>
                            <option value="1">SuV</option>
                            <option value="2">BMW</option>
                          </select>
                        </div>
                      </div>
                      <div className="rq-search-single">
                        <div className="rq-search-content last-child">
                          <span className="rq-search-heading">Additional Person</span>
                          <select name="categories" className="category-option">
                            <option value="0">Additional person cost</option>
                            <option value="1">2 persone cost</option>
                            <option value="2">Person cost</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="booking-details">
                    <div className="row">
                      <div className="col-md-12">
                        <h3 className="total-price">Total Booking Cost : <span>$150.00</span></h3>
                      </div>
                      <div className="col-md-12">
                        <div className="book-btn">
                          <button className="rq-btn rq-btn-primary btn-large">Book Now <i className="ion-android-car"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rq-content-block">
              <div className="related-car-faq">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="section-title">Related Cars</h3>
                      <div className="child-tab-wrapper related-cars">
                        <ul className="nav nav-tabs" role="tablist">
                          <li>
                            <a href="#">
                              <img src="img/listing-details-tab/tab-image1.png" alt="" />
                              <span className="tittle">Lamborghini Aventado 2012</span>
                              <span className="car-des">Four Seater Car</span>
                              <span className="rent-price">$39.00<b>/Day</b></span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="img/listing-details-tab/tab-image2.png" alt="" />
                              <span className="tittle">Ford Red Sport Car</span>
                              <span className="car-des">Four Seater Car</span>
                              <span className="rent-price">$29.00<b>/Day</b></span>
                            </a>
                          </li>
                          <li role="presentation">
                            <a href="#car-three"  role="tab" data-toggle="tab">
                              <img src="img/listing-details-tab/tab-image3.png" alt="" />
                              <span className="tittle">Kia Rio White Car 2016</span>
                              <span className="car-des">Four Seater Car</span>
                              <span className="rent-price">$27.00<b>/Day</b></span>
                            </a>
                          </li>
                          <li role="presentation">
                            <a href="#car-four"  role="tab" data-toggle="tab">
                              <img src="img/listing-details-tab/tab-image1.png" alt="" />
                              <span className="tittle">Kia Rio White Car 2016</span>
                              <span className="car-des">Four Seater Car</span>
                              <span className="rent-price">$27.00<b>/Day</b></span>
                            </a>
                          </li>
                          <li role="presentation">
                            <a href="#car-five"  role="tab" data-toggle="tab">
                              <img src="img/listing-details-tab/tab-image2.png" alt="" />
                              <span className="tittle">Kia Rio White Car 2016</span>
                              <span className="car-des">Four Seater Car</span>
                              <span className="rent-price">$27.00<b>/Day</b></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="section-title">FAQs</h3>
                      <div className="rq-faqs">
                        <div className="faq-single">
                          <a href="#" className="faq-title">What is Road tax ?</a>
                          <p className="hidden-content">
                          This is Photoshop's version  of Lorem Ipsum. Proin gravida
                          nibh vel velit tubo auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                          nisi elit exo consequat ipsum, nec sagittis sem nibh id elit.
                          </p>
                        </div>
                        <div className="faq-single">
                          <a href="#" className="faq-title">How to use Manual Model of Audi R8?</a>
                          <p className="hidden-content">
                          This is Photoshop's version  of Lorem Ipsum. Proin gravida
                          nibh vel velit tubo auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                          nisi elit exo consequat ipsum, nec sagittis sem nibh id elit.
                          </p>
                        </div>
                        <div className="faq-single">
                          <a href="#" className="faq-title">What’s fees that you have to pay ?</a>
                          <p className="hidden-content">
                          This is Photoshop's version  of Lorem Ipsum. Proin gravida
                          nibh vel velit tubo auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                          nisi elit exo consequat ipsum, nec sagittis sem nibh id elit.
                          </p>
                        </div>
                        <div className="faq-single">
                          <a href="#" className="faq-title">Problems with your car on road ?</a>
                          <p className="hidden-content">
                          This is Photoshop's version  of Lorem Ipsum. Proin gravida
                          nibh vel velit tubo auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                          nisi elit exo consequat ipsum, nec sagittis sem nibh id elit.
                          </p>
                        </div>
                        <div className="faq-single">
                          <a href="#" className="faq-title">How to rent a car from local network?</a>
                          <p className="hidden-content">
                          This is Photoshop's version  of Lorem Ipsum. Proin gravida
                          nibh vel velit tubo auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                          nisi elit exo consequat ipsum, nec sagittis sem nibh id elit.
                          </p>
                        </div>
                        <div className="faq-single">
                          <a href="#" className="faq-title">How long limited to rent car from Turbo on the world ?</a>
                          <p className="hidden-content">
                          This is Photoshop's version  of Lorem Ipsum. Proin gravida
                          nibh vel velit tubo auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                          nisi elit exo consequat ipsum, nec sagittis sem nibh id elit.
                          </p>
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
    );
  }
}
export default CarDetail;
