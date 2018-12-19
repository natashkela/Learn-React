import React from 'react';
import PropTypes from 'prop-types';
const BlogCategories = ({list}) =>{
  return (
    <ul className="nav nav-tabs" role="tablist">
      <li role="presentation" className="active"><a href="#all"  role="tab" data-toggle="tab">All</a></li>
      {list.map((category,index)=>
        <li key={index} role="presentation"><a href={"#"+category.uniqueName}  role="tab" data-toggle="tab">{category.title}</a></li>
      )}
    </ul>
  );
}
BlogCategories.propTypes = {
  list:PropTypes.array
}
export default BlogCategories;
