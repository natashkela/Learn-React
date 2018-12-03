import React from 'react';
import TabAvailableCarsLong from './TabAvailableCarsLong.js';
const TabAvailableCarsBrief = () => {
  let list = [
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
  ];
  return (
    <div className="child-tab-wrapper">
      <ul className="nav nav-tabs" role="tablist">
        {list.map((car, index)=>
          <li role="presentation" className={index == 0 ? "active" : ""}>
            <a href={"#car-"+(index+1)}  role="tab" data-toggle="tab">
              <img src={require("../img/tab-image/thumbnail"+(index+1)+".jpg")} alt="" />
              <span className="tittle">{car.title}</span>
              <span className="car-des">{car.description}</span>
              <span className="rent-price">${car.price}<b>/Day</b></span>
            </a>
          </li>
        )}
      </ul>
      <TabAvailableCarsLong list={list}/>
    </div>
  );
}
export default TabAvailableCarsBrief;
