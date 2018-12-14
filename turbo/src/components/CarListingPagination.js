import React from 'react';
import PropTypes from 'prop-types';
const CarListingPagination = ({currentPage,previousPage,nextPage,total}) =>{
  return(
    <div className="rq-pagination">
      <nav>
        <ul className="rq-pagination-list">
          {currentPage!=1 &&
              <li className="pagin-text">
                <a href="#" aria-label="Previous" onClick={()=>previousPage(currentPage)}>
                  <span aria-hidden="true"><i className="arrow_left"></i> Prev</span>
                </a>
              </li>
            }
            {currentPage!=total &&
              <li className="pagin-text">
                <a href="#" aria-label="Next" onClick={()=>nextPage(currentPage)}>
                  <span aria-hidden="true">Next <i className="arrow_right"></i></span>
                </a>
              </li>
          }
        </ul>
      </nav>
    </div>
  );
}
CarListingPagination.propTypes = {
  currentPage: PropTypes.number,
  previousPage: PropTypes.func,
  nextPage: PropTypes.func
}
export default CarListingPagination;
