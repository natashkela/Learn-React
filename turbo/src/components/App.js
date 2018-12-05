import React, { Component } from 'react';
import Footer from './Footer.js';
import IndexIntroduction from './IndexIntroduction.js';
import CarListingTabContainer from './CarListingTabContainer.js';
import TestimonialsContainer from './TestimonialsContainer.js';
import RecentTipsContainer from './RecentTipsContainer.js';
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
          <IndexIntroduction />
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
              <TestimonialsContainer />
              <RecentTipsContainer />
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
