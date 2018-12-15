import React from 'react';
import CarFeatures from './CarFeatures.js';
import CarLocation from './CarLocation.js';
import MainCarFeatures from './MainCarFeatures.js';
import BreadcrumbSecondary from './BreadcrumbSecondary';
const CarInformation = ({breadcrumbs,title}) => {
  let car = {
    id:1,
    brand:"Toyota",
    model:"Prado",
    year:"2016",
    color:"silver",
    mileage:122343,
    transmission:1,
    seats:6,
    luggage:3,
    fuel: "Petrol",
    features: [
      {
        name:"Air Condition",
        value:true
      },
      {
        name:"Bluetooth",
        value:true
      },
      {
        name:"AUX",
        value:true
      },
      {
        name:"Child Seat",
        value:false
      },
      {
        name:"GPS",
        value:false
      },
      {
        name:"Seat Heating",
        value:false
      },
      {
        name:"Ski Rack",
        value:false
      }
    ],
    description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little."
  };
  let reviews = [
    {
      author:"Nata Vacheishvili",
      stars:5,
      comment:"Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am."
    }
  ];
  return (
    <div>
      <div className="rq-listing-single">
        <div className="rq-listing-gallery-post">
          <div className="rq-gallery-content">
            <div className="details-slider owl-carousel">
              <div className="item">
                <img src="img/listing-detail2.png" alt="" />
              </div>
              <div className="item">
                <img src="img/listing-detail.png" alt="" />
              </div>
              <div className="item">
                <img src="img/listing-detail2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rq-content-block">
        <div className="container">
          <div className="rq-title-container bredcrumb-title text-center">
            <h1 className="rq-title light">{title}</h1>
            <BreadcrumbSecondary breadcrumbs={breadcrumbs}/>
          </div>
          <MainCarFeatures mileage={car.mileage}
                            transmission={car.transmission}
                            seats={car.seats}
                            luggage={car.luggage}
                            fuel={car.fuel} />
          <CarFeatures car={car} reviews={reviews}/>
          <CarLocation car={car} />
        </div>
      </div>
    </div>
  );
}
export default CarInformation;
