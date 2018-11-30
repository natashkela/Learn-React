import React, { Component } from 'react';
import Navbar from './Navbar.js';
class App extends Component {
  render() {
    return (
      <div>
      <div id="main-wrapper">
        <header className="header">
          <div className="header-body">
            <div className="header-overlay"></div>
            <div className="container">
              <h1>Turbo helps you</h1>
              <p>Rent car to move from local hosts in 190+ countries.</p>
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
                  <div className="rq-search-content last-child">
                    <span className="rq-search-heading">Driver age</span>
                    <select name="categories" className="category-option">
                      <option value="0">25 Years old</option>
                      <option value="1">25 Years old</option>
                      <option value="2">25 Years old</option>
                      <option value="3">25 Years old</option>
                      <option value="4">25 Years old</option>
                      <option value="5">25 Years old</option>
                    </select>
                  </div>
                </div>
                <div className="rq-search-single search-btn">
                  <div className="rq-search-content">
                    <button className="rq-btn rq-btn-primary fluid-btn">Search <i className="arrow_right"></i></button>
                  </div>
                </div>
              </div>
              <div className="rq-counting-list">
                <ul className="list-unstyled">
                  <li>
                    <span className="count-result" data-from="25" data-to="12460" data-speed="5000" data-refresh-interval="50"></span>
                    <span className="count-category">User access</span>
                  </li>
                  <li>
                    <span className="count-result" data-from="25" data-to="8960" data-speed="5000" data-refresh-interval="50"></span>
                    <span className="count-category">Cars</span>
                  </li>
                  <li>
                    <span className="count-result" data-from="25" data-to="10360" data-speed="5000" data-refresh-interval="50"></span>
                    <span className="count-category">Reviews</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          <Navbar />
        </header>

        <div className="rq-page-content">
          <div className="rq-content-block gray-bg">
            <span className="bg-large-text">Turbo</span>
            <div className="container">
              <div className="row">
                <div className="col-md-11">
                  <div className="rq-mission-block">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mission-content">
                          <h1 className="rq-title">Our Mission<span className="rq-dot">.</span><i className="rq-line"></i></h1>
                          <p className="mission-text">Suspendisse hendrerit facilisis ante. Sed feugiat lectus
                          non tim porttitor aliquam. Ut a ipsum tempus, venenatis nibh et, eleifefend nisi.
                          Etiam hendrerit, purus ac varius vestibulum, enim lon arcu euismod purus,
                          id hendrerit tellus turpis biben dum exilon Morbi cursus justo ut malesuada tempus.
                          </p>
                          <address>
                            <a href="#">Brasion Mike</a>
                            <cite>- CEO Founder</cite>
                          </address>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mission-image">
                          <img src="img/block-transparent-img.png" alt="" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="rq-browse-section">
                <h1 className="rq-title">Top Our Cars<span className="rq-dot">.</span></h1>
                <a href="#">Browse All Car <i className="ion-ios-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="rq-content-block with-border-bottom vertical-line">
            <div className="rq-car-listing-tab">
              <ul className="nav nav-tabs parent-tab" role="tablist">
                <li role="presentation" className="active">
                  <a href="#top-popular"  role="tab" data-toggle="tab">Top Popular</a></li>
                <li role="presentation">
                  <a href="#new-cars"  role="tab" data-toggle="tab">New Cars</a></li>
                <li role="presentation">
                  <a href="#sale-off"  role="tab" data-toggle="tab">Sale Off</a></li>
              </ul>
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade in active" id="top-popular">
                  <div className="child-tab-wrapper">
                    <ul className="nav nav-tabs" role="tablist">
                      <li role="presentation" className="active">
                        <a href="#car-one"  role="tab" data-toggle="tab">
                          <img src="img/tab-image/thumbnail1.jpg" alt="" />
                          <span className="tittle">Lamborghini Aventado 2012</span>
                          <span className="car-des">Four Seater Car</span>
                          <span className="rent-price">$39.00<b>/Day</b></span>
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#car-two"  role="tab" data-toggle="tab">
                          <img src="img/tab-image/thumbnail2.jpg" alt="" />
                          <span className="tittle">Ford Red Sport Car</span>
                          <span className="car-des">Four Seater Car</span>
                          <span className="rent-price">$29.00<b>/Day</b></span>
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#car-three"  role="tab" data-toggle="tab">
                          <img src="img/tab-image/thumbnail3.jpg" alt="" />
                          <span className="tittle">Kia Rio White Car 2016</span>
                          <span className="car-des">Four Seater Car</span>
                          <span className="rent-price">$27.00<b>/Day</b></span>
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#car-four"  role="tab" data-toggle="tab">
                          <img src="img/tab-image/thumbnail1.jpg" alt="" />
                          <span className="tittle">Kia Rio White Car 2016</span>
                          <span className="car-des">Four Seater Car</span>
                          <span className="rent-price">$27.00<b>/Day</b></span>
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#car-five"  role="tab" data-toggle="tab">
                          <img src="img/tab-image/thumbnail2.jpg" alt="" />
                          <span className="tittle">Kia Rio White Car 2016</span>
                          <span className="car-des">Four Seater Car</span>
                          <span className="rent-price">$27.00<b>/Day</b></span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane fade in active" id="car-one">
                        <div className="rq-tab-car-details">
                          <div className="car-logo">
                            <img src="img/partner-logo/partner3.png" alt="" />
                          </div>
                          <h3>Lamborghini Aventado</h3>
                          <div className="large-image-wrapper">
                            <div className="image-bg"></div>
                            <img src="img/tab-image/full-img1.png" alt="" />
                          </div>
                          <div className="car-details-option">
                            <span><i className="ion-briefcase"></i>2 large bags</span>
                            <span><i className="ion-no-smoking"></i>No smoking</span>
                            <span><i className="ion-speedometer"></i>08/12 mpg</span>
                            <span>Starting at <span className="red-section">$39.0</span>/day</span>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="car-two">
                        <div className="rq-tab-car-details">
                          <div className="car-logo">
                            <img src="img/partner-logo/partner3.png" alt="" />
                          </div>
                          <h3>Ford Red Sport Car</h3>
                          <div className="large-image-wrapper">
                            <div className="image-bg ford"></div>
                            <img src="img/tab-image/full-img2.png" alt="" />
                          </div>
                          <div className="car-details-option">
                            <span><i className="ion-briefcase"></i>2 large bags</span>
                            <span><i className="ion-no-smoking"></i>No smoking</span>
                            <span><i className="ion-speedometer"></i>08/12 mpg</span>
                            <span>Starting at <span className="red-section">$39.0</span>/day</span>
                          </div>
                        </div>

                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="car-three">
                        <div className="rq-tab-car-details">
                          <div className="car-logo">
                            <img src="img/partner-logo/partner3.png" alt="" />
                          </div>
                          <h3>Kia Rio White Car 2016</h3>
                          <div className="large-image-wrapper">
                            <div className="image-bg kia"></div>
                            <img src="img/tab-image/full-img3.png" alt="" />
                          </div>
                          <div className="car-details-option">
                            <span><i className="ion-briefcase"></i>2 large bags</span>
                            <span><i className="ion-no-smoking"></i>No smoking</span>
                            <span><i className="ion-speedometer"></i>08/12 mpg</span>
                            <span>Starting at <span className="red-section">$39.0</span>/day</span>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="car-four">
                        <div className="rq-tab-car-details">
                          <div className="car-logo">
                            <img src="img/partner-logo/partner3.png" alt="" />
                          </div>
                          <h3>Kia Rio White Car 2016</h3>
                          <div className="large-image-wrapper">
                            <div className="image-bg kia"></div>
                            <img src="img/tab-image/full-img3.png" alt="" />
                          </div>
                          <div className="car-details-option">
                            <span><i className="ion-briefcase"></i>2 large bags</span>
                            <span><i className="ion-no-smoking"></i>No smoking</span>
                            <span><i className="ion-speedometer"></i>08/12 mpg</span>
                            <span>Starting at <span className="red-section">$39.0</span>/day</span>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="car-five">
                        <div className="rq-tab-car-details">
                          <div className="car-logo">
                            <img src="img/partner-logo/partner3.png" alt="" />
                          </div>
                          <h3>Kia Rio White Car 2016</h3>
                          <div className="large-image-wrapper">
                            <div className="image-bg kia"></div>
                            <img src="img/tab-image/full-img3.png" alt="" />
                          </div>
                          <div className="car-details-option">
                            <span><i className="ion-briefcase"></i>2 large bags</span>
                            <span><i className="ion-no-smoking"></i>No smoking</span>
                            <span><i className="ion-speedometer"></i>08/12 mpg</span>
                            <span>Starting at <span className="red-section">$39.0</span>/day</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div role="tabpanel" className="tab-pane fade" id="new-cars">
                  <div className="child-tab-wrapper">
                    <ul className="nav nav-tabs" role="tablist">
                      <li role="presentation">
                        <a href="#car-two-new"  role="tab" data-toggle="tab">
                          <img src="img/tab-image/thumbnail2.jpg" alt="" />
                          <span className="tittle">Ford Red Sport Car</span>
                          <span className="car-des">Four Seater Car</span>
                          <span className="rent-price">$29.00<b>/Day</b></span>
                        </a>
                      </li>
                      <li role="presentation" className="active">
                        <a href="#car-one-new"  role="tab" data-toggle="tab">
                          <img src="img/tab-image/thumbnail1.jpg" alt="" />
                          <span className="tittle">Lamborghini Aventado 2012</span>
                          <span className="car-des">Four Seater Car</span>
                          <span className="rent-price">$39.00<b>/Day</b></span>
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#car-three-new"  role="tab" data-toggle="tab">
                          <img src="img/tab-image/thumbnail3.jpg" alt="" />
                          <span className="tittle">Kia Rio White Car 2016</span>
                          <span className="car-des">Four Seater Car</span>
                          <span className="rent-price">$27.00<b>/Day</b></span>
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#car-four-new"  role="tab" data-toggle="tab">
                          <img src="img/tab-image/thumbnail1.jpg" alt="" />
                          <span className="tittle">Kia Rio White Car 2016</span>
                          <span className="car-des">Four Seater Car</span>
                          <span className="rent-price">$27.00<b>/Day</b></span>
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#car-five-new"  role="tab" data-toggle="tab">
                          <img src="img/tab-image/thumbnail2.jpg" alt="" />
                          <span className="tittle">Kia Rio White Car 2016</span>
                          <span className="car-des">Four Seater Car</span>
                          <span className="rent-price">$27.00<b>/Day</b></span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane fade in active" id="car-one-new">
                        <div className="rq-tab-car-details">
                          <div className="car-logo">
                            <img src="img/partner-logo/partner3.png" alt="" />
                          </div>
                          <h3>Lamborghini Aventado</h3>
                          <div className="large-image-wrapper">
                            <div className="image-bg"></div>
                            <img src="img/tab-image/full-img1.png" alt="" />
                          </div>
                          <div className="car-details-option">
                            <span><i className="ion-briefcase"></i>2 large bags</span>
                            <span><i className="ion-no-smoking"></i>No smoking</span>
                            <span><i className="ion-speedometer"></i>08/12 mpg</span>
                            <span>Starting at <span className="red-section">$39.0</span>/day</span>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="car-two-new">
                        <div className="rq-tab-car-details">
                          <div className="car-logo">
                            <img src="img/partner-logo/partner3.png" alt="" />
                          </div>
                          <h3>Ford Red Sport Car</h3>
                          <div className="large-image-wrapper">
                            <div className="image-bg ford"></div>
                            <img src="img/tab-image/full-img2.png" alt="" />
                          </div>
                          <div className="car-details-option">
                            <span><i className="ion-briefcase"></i>2 large bags</span>
                            <span><i className="ion-no-smoking"></i>No smoking</span>
                            <span><i className="ion-speedometer"></i>08/12 mpg</span>
                            <span>Starting at <span className="red-section">$39.0</span>/day</span>
                          </div>
                        </div>

                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="car-three-new">
                        <div className="rq-tab-car-details">
                          <div className="car-logo">
                            <img src="img/partner-logo/partner3.png" alt="" />
                          </div>
                          <h3>Kia Rio White Car 2016</h3>
                          <div className="large-image-wrapper">
                            <div className="image-bg kia"></div>
                            <img src="img/tab-image/full-img3.png" alt="" />
                          </div>
                          <div className="car-details-option">
                            <span><i className="ion-briefcase"></i>2 large bags</span>
                            <span><i className="ion-no-smoking"></i>No smoking</span>
                            <span><i className="ion-speedometer"></i>08/12 mpg</span>
                            <span>Starting at <span className="red-section">$39.0</span>/day</span>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="car-four-new">
                        <div className="rq-tab-car-details">
                          <div className="car-logo">
                            <img src="img/partner-logo/partner3.png" alt="" />
                          </div>
                          <h3>Kia Rio White Car 2016</h3>
                          <div className="large-image-wrapper">
                            <div className="image-bg kia"></div>
                            <img src="img/tab-image/full-img3.png" alt="" />
                          </div>
                          <div className="car-details-option">
                            <span><i className="ion-briefcase"></i>2 large bags</span>
                            <span><i className="ion-no-smoking"></i>No smoking</span>
                            <span><i className="ion-speedometer"></i>08/12 mpg</span>
                            <span>Starting at <span className="red-section">$39.0</span>/day</span>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="car-five-new">
                        <div className="rq-tab-car-details">
                          <div className="car-logo">
                            <img src="img/partner-logo/partner3.png" alt="" />
                          </div>
                          <h3>Kia Rio White Car 2016</h3>
                          <div className="large-image-wrapper">
                            <div className="image-bg kia"></div>
                            <img src="img/tab-image/full-img3.png" alt="" />
                          </div>
                          <div className="car-details-option">
                            <span><i className="ion-briefcase"></i>2 large bags</span>
                            <span><i className="ion-no-smoking"></i>No smoking</span>
                            <span><i className="ion-speedometer"></i>08/12 mpg</span>
                            <span>Starting at <span className="red-section">$39.0</span>/day</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div role="tabpanel" className="tab-pane fade in" id="sale-off">
                  <div className="child-tab-wrapper">
                    <ul className="nav nav-tabs" role="tablist">
                      <li role="presentation" className="active">
                        <a href="#car-one-sale"  role="tab" data-toggle="tab">
                          <img src="img/tab-image/thumbnail1.jpg" alt="" />
                          <span className="tittle">Lamborghini Aventado 2012</span>
                          <span className="car-des">Four Seater Car</span>
                          <span className="rent-price">$39.00<b>/Day</b></span>
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#car-two-sale"  role="tab" data-toggle="tab">
                          <img src="img/tab-image/thumbnail2.jpg" alt="" />
                          <span className="tittle">Ford Red Sport Car</span>
                          <span className="car-des">Four Seater Car</span>
                          <span className="rent-price">$29.00<b>/Day</b></span>
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#car-three-sale"  role="tab" data-toggle="tab">
                          <img src="img/tab-image/thumbnail3.jpg" alt="" />
                          <span className="tittle">Kia Rio White Car 2016</span>
                          <span className="car-des">Four Seater Car</span>
                          <span className="rent-price">$27.00<b>/Day</b></span>
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#car-four-sale"  role="tab" data-toggle="tab">
                          <img src="img/tab-image/thumbnail1.jpg" alt="" />
                          <span className="tittle">Kia Rio White Car 2016</span>
                          <span className="car-des">Four Seater Car</span>
                          <span className="rent-price">$27.00<b>/Day</b></span>
                        </a>
                      </li>
                      <li role="presentation">
                        <a href="#car-five-sale"  role="tab" data-toggle="tab">
                          <img src="img/tab-image/thumbnail2.jpg" alt="" />
                          <span className="tittle">Kia Rio White Car 2016</span>
                          <span className="car-des">Four Seater Car</span>
                          <span className="rent-price">$27.00<b>/Day</b></span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane fade in active" id="car-one-sale">
                        <div className="rq-tab-car-details">
                          <div className="car-logo">
                            <img src="img/partner-logo/partner3.png" alt="" />
                          </div>
                          <h3>Lamborghini Aventado</h3>
                          <div className="large-image-wrapper">
                            <div className="image-bg"></div>
                            <img src="img/tab-image/full-img1.png" alt="" />
                          </div>
                          <div className="car-details-option">
                            <span><i className="ion-briefcase"></i>2 large bags</span>
                            <span><i className="ion-no-smoking"></i>No smoking</span>
                            <span><i className="ion-speedometer"></i>08/12 mpg</span>
                            <span>Starting at <span className="red-section">$39.0</span>/day</span>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="car-two-sale">
                        <div className="rq-tab-car-details">
                          <div className="car-logo">
                            <img src="img/partner-logo/partner3.png" alt="" />
                          </div>
                          <h3>Ford Red Sport Car</h3>
                          <div className="large-image-wrapper">
                            <div className="image-bg ford"></div>
                            <img src="img/tab-image/full-img2.png" alt="" />
                          </div>
                          <div className="car-details-option">
                            <span><i className="ion-briefcase"></i>2 large bags</span>
                            <span><i className="ion-no-smoking"></i>No smoking</span>
                            <span><i className="ion-speedometer"></i>08/12 mpg</span>
                            <span>Starting at <span className="red-section">$39.0</span>/day</span>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="car-three-sale">
                        <div className="rq-tab-car-details">
                          <div className="car-logo">
                            <img src="img/partner-logo/partner3.png" alt="" />
                          </div>
                          <h3>Kia Rio White Car 2016</h3>
                          <div className="large-image-wrapper">
                            <div className="image-bg kia"></div>
                            <img src="img/tab-image/full-img3.png" alt="" />
                          </div>
                          <div className="car-details-option">
                            <span><i className="ion-briefcase"></i>2 large bags</span>
                            <span><i className="ion-no-smoking"></i>No smoking</span>
                            <span><i className="ion-speedometer"></i>08/12 mpg</span>
                            <span>Starting at <span className="red-section">$39.0</span>/day</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rq-content-block gray-bg">
            <div className="container">
              <div className="rq-partners-section">
                <div className="partners-wrapper">
                  <div className="partner-single"><a href="#"><img src="img/partner-logo/partner1.png" alt="" /></a></div>
                  <div className="partner-single"><a href="#"><img src="img/partner-logo/partner3.png" alt="" /></a></div>
                  <div className="partner-single"><a href="#"><img src="img/partner-logo/partner2.png" alt="" /></a></div>
                  <div className="partner-single"><a href="#"><img src="img/partner-logo/partner4.png" alt="" /></a></div>
                  <div className="partner-single"><a href="#"><img src="img/partner-logo/partner5.png" alt="" /></a></div>
                </div>
              </div>
              <div className="rq-testimonial-section">
                <div className="rq-testimonial-content">
                  <h1 className="rq-title">What Client Say<span className="rq-dot">.</span></h1>
                  <div className=" owl-carousel testimonial-wrapper">
                    <div className="item">
                      <p className="testimoinal-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                      Pellentesque  eueget ante venenatis euismod. Etiam in odio mattis, suscipit ex sit amet, toronil inoui bibenidum risus.

                      </p>
                      <span className="author-name-title">
                        <img src="img/testimoianl1.png" alt="" />
                        <a href="#">Adam Levine <i className="ion-ios-minus-empty"></i>
                          <span>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                          </span>
                        </a>
                      </span>

                    </div>
                    <div className="item">
                      <p className="testimoinal-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                      Pellentesque  eueget ante venenatis euismod. Etiam in odio mattis, suscipit ex sit amet, toronil inoui bibenidum risus.
                      </p>
                      <span className="author-name-title">
                        <img src="img/testimoianl1.png" alt="" />
                        <a href="#">Adam Levine <i className="ion-ios-minus-empty"></i>
                          <span>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                          </span>
                        </a>
                      </span>

                    </div>
                    <div className="item">
                      <p className="testimoinal-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                      Pellentesque  eueget ante venenatis euismod. Etiam in odio mattis, suscipit ex sit amet, toronil inoui bibenidum risus.
                      </p>
                      <span className="author-name-title">
                        <img src="img/testimoianl1.png" alt="" />
                        <a href="#">Adam Levine <i className="ion-ios-minus-empty"></i>
                          <span>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                          </span>
                        </a>
                      </span>

                    </div>
                    <div className="item">
                      <p className="testimoinal-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                      Pellentesque  eueget ante venenatis euismod. Etiam in odio mattis, suscipit ex sit amet, toronil inoui bibenidum risus.
                      </p>

                      <span className="author-name-title">
                        <img src="img/testimoianl1.png" alt="" />
                        <a href="#">Adam Levine <i className="ion-ios-minus-empty"></i>
                          <span>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                            <i className="ion-android-star"></i>
                          </span>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rq-tips-tricks">
                <h1 className="rq-title">Tips &amp; Tricks<span className="rq-dot"></span></h1>
                <div className="row">
                  <div className="col-md-4">
                    <div className="rq-tips-single wow fadeInLeft" data-wow-duration="500ms">
                      <div className="image-container">
                        <img src="img/tips/tips1.jpg" alt="" />
                      </div>
                      <div className="tips-content">
                        <span className="date">March, 24th, 2016</span>
                        <h4><a href="#">Rent A Car So Easiest With A Few Minutes From Turbo</a></h4>
                        <a className="rq-btn rq-btn-normal continue-button" href="#">Continue Reading <i className="arrow_right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="rq-tips-single wow fadeInUp" data-wow-duration="500ms">
                      <div className="image-container">
                        <img src="img/tips/tips2.jpg" alt="" />
                      </div>
                      <div className="tips-content">
                        <span className="date">March, 15th, 2016</span>
                        <h4><a href="#">Experience awesome travel on Mazda of Selena</a></h4>
                        <a className="rq-btn rq-btn-normal continue-button" href="#">Continue Reading <i className="arrow_right"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="rq-tips-single wow fadeInRight" data-wow-duration="500ms">
                      <div className="image-container">
                        <img src="img/tips/tips3.jpg" alt="" />
                      </div>
                      <div className="tips-content">
                        <span className="date">February, 08th, 2016</span>
                        <h4><a href="#">Have A Great Pinic On Moutain With Your Family In Last Week</a></h4>
                        <a className="rq-btn rq-btn-normal continue-button" href="#">Continue Reading <i className="arrow_right"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rq-call-to-action">
            <div className="container">
              <h2>Need help renting online? <span>(855) 962-3621</span></h2>
            </div>
          </div>
        </div>
      </div>
      <footer className="rq-footer">
        <div className="rq-main-footer">
          <div className="container">
            <button className="toggle-widget">Footer widget</button>
            <div className="footer-widget">
              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <div className="widget-list">
                    <ul>
                      <li><a href="#">Site map</a></li>
                      <li><a href="#">Terms & Conditions</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Help</a></li>
                      <li><a href="#">Affiliate</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3">
                  <div className="widget-list">
                    <ul className="address">
                      <li><a href="#">Our Location</a></li>
                      <li><a href="#">Career</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3">
                  <div className="widget-list">
                    <ul className="address">
                      <li><a href="#">FAQs</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Car Blog</a></li>
                      <li><a href="#">Location</a></li>
                      <li><a href="#">Press</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3">
                  <div className="widget-list">
                    <div className="rq-newsletter">
                      <h5>Sign up for get our newsletter</h5>
                      <form action="#">
                        <input className="fq-newsletter-form" type="text" placeholder="Your Email..." />
                        <button className="rq-btn" type="submit"><i className="ion-android-send"></i></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rq-copyright-section">
          <div className="container">
            <div className="copyright-content">
              <p><a href="#"><img src="img/company-logo.png" alt="" /></a> © 2016 <a href="#">Turbo, Inc</a>.</p>
              <ul className="list-unstyled social-list">
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fa fa-rss"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}

export default App;
