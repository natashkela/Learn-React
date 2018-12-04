import React from 'react';
import PropTypes from 'prop-types';
import TabCarListNavigation from './TabCarListNavigation.js';
import TabAvailableCarsBrief from './TabAvailableCarsBrief.js';
const CarListingTabContainer = ({list}) => {
  return (
    <div className="rq-content-block with-border-bottom vertical-line">
      <div className="rq-car-listing-tab">
        <TabCarListNavigation />
        <div className="tab-content">
          {list.map((tabCarList,index)=>
              <TabAvailableCarsBrief list={tabCarList} id={"car-tab"+index} key={index} count={index}/>
          )}
        </div>
      </div>
    </div>
  );
}
CarListingTabContainer.propTypes={
  list:PropTypes.array
}
export default CarListingTabContainer;
