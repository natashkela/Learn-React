import React from 'react';
const Countview = () => {
  return(
    <div className="rq-counting-list">
      <ul className="list-unstyled">
        <li>
          <span className="count-result" data-from="25" data-to="12460" data-speed="5000" data-refresh-interval="50"></span>
          <span className="count-category">User access</span>
        </li>
        <li>
          <span className="count-result" data-from="25" data-to="8960" data-speed="5000" data-refresh-interval="50"></span>
          <span className="count-category">Cars</span>
        </li>
        <li>
          <span className="count-result" data-from="25" data-to="10360" data-speed="5000" data-refresh-interval="50"></span>
          <span className="count-category">Reviews</span>
        </li>
      </ul>
    </div>
  )
}
export default Countview;
