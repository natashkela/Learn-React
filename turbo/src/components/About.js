import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Breadcrumb from './Breadcrumb.js';
import AboutUsContentContainer from './AboutUsContentContainer';
import Footer from './Footer.js';
class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Breadcrumb />
        <AboutUsContentContainer />
        <Footer />
      </div>
    );
  }
}

export default About;
