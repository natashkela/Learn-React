import React from 'react';
import PropTypes from 'prop-types';
import TabAvailableCarsLong from './TabAvailableCarsLong.js';
const TabAvailableCarsBrief = ({list,id}) => {
  return (
    <div role="tabpanel" class="tab-pane fade in active" id={id}>
      <div className="child-tab-wrapper">
        <ul className="nav nav-tabs" role="tablist">
          {list.map((car, index)=>
            <li role="presentation" key={index} className={index == 0 ? "active" : ""}>
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
    </div>
  );
}
TabAvailableCarsBrief.propTypes = {
  list:PropTypes.array
}
export default TabAvailableCarsBrief;
