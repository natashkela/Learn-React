import React from 'react';
const RelatedCars = () => {
  return (
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
  );
}
export default RelatedCars;
