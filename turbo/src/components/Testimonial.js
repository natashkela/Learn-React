import React from 'react';
import PropTypes from 'prop-types';
const Testimonial = ({author,stars,comment,userId}) => {
  return (
    <div>
      <div className="item">
        <p className="testimoinal-text">{comment}</p>
        <span className="author-name-title">
          <img src={require("../img/testimoianl1.png")} alt="" />
          <a href={"profile?id="+userId}>{author}<i className="ion-ios-minus-empty"></i>
            <span>
              {Array.apply(null, { length: stars }).map((e, i) =>
                  <i key={i} className="ion-android-star"></i>
                )
              }
            </span>
          </a>
        </span>

      </div>
      </div>
  );
}
Testimonial.propTypes = {
  author:PropTypes.string,
  stars: PropTypes.number,
  comment:PropTypes.string,
  userId:PropTypes.number
}
export default Testimonial;
