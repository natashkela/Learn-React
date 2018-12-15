import React from 'react';
import PropTypes from 'prop-types';
const BreadcrumbSecondary = ({breadcrumbs})=>{
  return(
    <ol className="breadcrumb secondary rq-subtitle">
      {breadcrumbs.map((breadcrumb,index)=>
        breadcrumb.href ? <li key={index}><a href={breadcrumb.href}>{breadcrumb.title}</a></li> : <li key={index} className="active">{breadcrumb.title}</li>
      )}
    </ol>
  );
}
BreadcrumbSecondary.propTypes = {
  breadcrumbs: PropTypes.array
}
export default BreadcrumbSecondary;
