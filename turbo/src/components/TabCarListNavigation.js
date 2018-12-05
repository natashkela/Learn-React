import React from 'react';
const TabCarListNavigation = () => {
  let list = [
      {
        name: "Top Popular"
      },
      {
        name: "New Cars"
      },
      {
        name: "Sale Off"
      }
  ];
  return (
    <ul className="nav nav-tabs parent-tab" role="tablist">
      {list.map((tab,index)=>

        <li role="presentation" key={index} >
          <a href={"#car-tab"+(index)}  role="tab" data-toggle="tab">{tab.name}</a></li>
      )}
    </ul>
  );
}
export default TabCarListNavigation;
