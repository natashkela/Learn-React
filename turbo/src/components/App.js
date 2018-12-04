import React, { Component } from 'react';
import Footer from './Footer.js';
import OurMission from './OurMission.js';
import CarListingTabContainer from './CarListingTabContainer.js';
import IndexHeader from './IndexHeader.js';
class App extends Component {
  state = {
    list: [
      [
        {
          title: "Lamborghini Aventado 2012",
          description: "Four Seater Car",
          price: 39.00,
          luggage_space:2,
          smoking_allowed:0,
          kilomeeters: 30
        },
        {
          title: "Ford Red Sport Car",
          description: "Four Seater Car",
          price: 29.00,
          luggage_space:3,
          smoking_allowed:0,
          kilomeeters: 36
        },
        {
          title: "Kia Rio White Car 2016",
          description: "Four Seater Car",
          price: 27.00,
          luggage_space:3,
          smoking_allowed:1,
          kilomeeters: 30
        },
        {
          title: "Kia Rio White Car 2016",
          description: "Four Seater Car",
          price: 27.00,
          luggage_space:3,
          smoking_allowed:0,
          kilomeeters: 40
        },
        {
          title: "Kia Rio White Car 2016",
          description: "Four Seater Car",
          price: 27.00,
          luggage_space:2,
          smoking_allowed:1,
          kilomeeters: 35
        }
      ],
      [
        {
          title: "Ford Red Sport Car",
          description: "Four Seater Car",
          price: 29.00,
          luggage_space:3,
          smoking_allowed:0,
          kilomeeters: 36
        },
        {
          title: "Kia Rio White Car 2016",
          description: "Four Seater Car",
          price: 27.00,
          luggage_space:3,
          smoking_allowed:1,
          kilomeeters: 30
        },
        {
          title: "Kia Rio White Car 2016",
          description: "Four Seater Car",
          price: 27.00,
          luggage_space:3,
          smoking_allowed:0,
          kilomeeters: 40
        },
        {
          title: "Kia Rio White Car 2016",
          description: "Four Seater Car",
          price: 27.00,
          luggage_space:2,
          smoking_allowed:1,
          kilomeeters: 35
        }
      ],
      [
        {
          title: "Lamborghini Aventado 2012",
          description: "Four Seater Car",
          price: 39.00,
          luggage_space:2,
          smoking_allowed:0,
          kilomeeters: 30
        },
        {
          title: "Ford Red Sport Car",
          description: "Four Seater Car",
          price: 29.00,
          luggage_space:3,
          smoking_allowed:0,
          kilomeeters: 36
        },
        {
          title: "Kia Rio White Car 2016",
          description: "Four Seater Car",
          price: 27.00,
          luggage_space:3,
          smoking_allowed:1,
          kilomeeters: 30
        },
      ]
    ]
  }
  render() {
    return (
      <div>
      <div id="main-wrapper">
        <IndexHeader />
        <div className="rq-page-content">
          <div className="rq-content-block gray-bg">
            <span className="bg-large-text">Turbo</span>
            <div className="container">
              <div className="row">
                <div className="col-md-11">
                  <div className="rq-mission-block">
                    <OurMission />
                  </div>
                </div>
              </div>
              <div className="rq-browse-section">
                <h1 className="rq-title">Top Our Cars<span className="rq-dot">.</span></h1>
                <a href="#">Browse All Car <i className="ion-ios-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <CarListingTabContainer list={this.state.list} />
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
      <Footer />
      </div>
    );
  }
}

export default App;
