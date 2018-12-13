import React from 'react';
const Breadcrumb = () => {
  return(
    <div className="inner-page-banner">
      <div className="rq-overlay"></div>
      <div className="container">
        <div className="rq-title-container bredcrumb-title">
          <h2 className="rq-title">About Us</h2>
          <ol className="breadcrumb rq-subtitle">
            <li><a href="#">Home</a></li>
            <li className="active">About Us</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default Breadcrumb;
