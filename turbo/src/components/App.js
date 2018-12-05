import React, { Component } from 'react';
import IndexHeader from './IndexHeader.js';
import IndexIntroduction from './IndexIntroduction.js';
import CarListingTabContainer from './CarListingTabContainer.js';
import PartnerImageContainer from './PartnerImageContainer.js';
import TestimonialsContainer from './TestimonialsContainer.js';
import RecentTipsContainer from './RecentTipsContainer.js';
import CallSupportContainer from './CallSupportContainer.js';
import Footer from './Footer.js';
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
              <PartnerImageContainer />
              <TestimonialsContainer />
              <RecentTipsContainer />
            </div>
          </div>
          <CallSupportContainer />
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
