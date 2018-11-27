import React from 'react';
import InviteMe from './InviteMe.js';
import ipadHand from '../img/ipad-hand.png';
const Header = () => {
  return (
    <div id="headerwrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>Make your landing page<br/>
            look really good.</h1>
            <InviteMe />
          </div>
          <div className="col-lg-6">
            <img className="img-responsive" src={ipadHand} alt="" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;
