import React from 'react';
import TabAvailableCarsLong from './TabAvailableCarsLong.js';
const TabAvailableCarsBrief = () => {
  let list = [
    {
      title: "Lamborghini Aventado 2012",
      description: "Four Seater Car",
      price: 39.00
    },
    {
      title: "Ford Red Sport Car",
      description: "Four Seater Car",
      price: 29.00
    },
    {
      title: "Kia Rio White Car 2016",
      description: "Four Seater Car",
      price: 27.00
    },
    {
      title: "Kia Rio White Car 2016",
      description: "Four Seater Car",
      price: 27.00
    },
    {
      title: "Kia Rio White Car 2016",
      description: "Four Seater Car",
      price: 27.00
    }
  ];
  return (
    <div className="child-tab-wrapper">
      <ul className="nav nav-tabs" role="tablist">
        {list.map((car, index)=>
          <li role="presentation" className={index == 0 ? "active" : ""}>
            <a href={"#car-"+index}  role="tab" data-toggle="tab">
              <img src="img/tab-image/thumbnail1.jpg" alt="" />
              <span className="tittle">{car.title}</span>
              <span className="car-des">{car.description}</span>
              <span className="rent-price">${car.price}<b>/Day</b></span>
            </a>
          </li>
        )}
      </ul>
      <TabAvailableCarsLong />
    </div>
  );
}
export default TabAvailableCarsBrief;
