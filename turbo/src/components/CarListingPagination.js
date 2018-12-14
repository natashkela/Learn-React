import React from 'react';
const CarListingPagination = () =>{
  return(
    <div className="rq-pagination">
      <nav>
        <ul className="rq-pagination-list">
          <li className="pagin-text">
            <a href="#" aria-label="Previous">
              <span aria-hidden="true"><i className="arrow_left"></i> Prev</span>
            </a>
          </li>
          <li className="active"><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a className="center-dot" href="#">...</a></li>
          <li><a href="#">12</a></li>
          <li className="pagin-text">
            <a href="#" aria-label="Next">
              <span aria-hidden="true">next <i className="arrow_right"></i></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default CarListingPagination;
