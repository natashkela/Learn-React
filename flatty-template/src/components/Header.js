import React from 'react';
import ipadHand from '../img/ipad-hand.png';
const Header = () => {
  return (
    <div id="headerwrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>Make your landing page<br/>
            look really good.</h1>
            <form className="form-inline" role="form">
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email address" />
              </div>
              <button type="submit" className="btn btn-warning btn-lg">Invite Me!</button>
            </form>
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
