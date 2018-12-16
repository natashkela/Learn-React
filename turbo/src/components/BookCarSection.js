import React from 'react';
import Searchbox from './Searchbox.js';
const BookCarSection = ()=>{
  return (
    <div className="rq-content-block gray-bg">
      <div className="container">
        <div className="listing-page-title">
          <h3>Book Car Now</h3>
        </div>
        <div className="rq-car-booking-section">
          <Searchbox />
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
  );
}
export default BookCarSection;
