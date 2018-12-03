import React from 'react';
const TabCarListNavigation = () => {
  let list = [
      {
        name: "Top Popular",
        href: "#tab-popular"
      },
      {
        name: "New Cars",
        href: "#new-cars"
      },
      {
        name: "Sale Off",
        href: "#sale-off"
      }
  ];
  console.log(list);
  return (
    <ul className="nav nav-tabs parent-tab" role="tablist">
      {list.map((tab,index)=>

        <li role="presentation" key={index} className={index == 0 ? "active":""}>
          <a href={tab.href}  role="tab" data-toggle="tab">{tab.name}</a></li>
      )}
    </ul>
  );
}
export default TabCarListNavigation;
