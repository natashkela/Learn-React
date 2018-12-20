import React from 'react';
import PropTypes from 'prop-types';
import LeaveComent from './LeaveComment';
const BlogPostComments = () => {
  return (
    <div id="comments" className="post-comment-section">
      <h2 className="single-sub-title">02 Comments</h2>
      <div className="comment-wrapper">
        <ol className="comment-list">
          <li className="comment">
            <div className="comment-author-img">
              <img src="img/post-single/comment-img1.jpg" alt="" />
            </div>
            <div className="comment-details">
              <span className="author-name"><a className="name" href="#">bruno mar - </a><a href="#" className="reply">Reply</a></span>
              <span className="comment-text">Comment example here. Nulla risus lacus, vehicula id mi vitae,
                auctor accumsan nulla. Sed a mi quam. In euismod urna ac massa.
              </span>
              <span className="date">Jul 17,2015 at 15 hours ago</span>
            </div>
          </li>
          <li className="comment">
            <div className="comment-author-img">
              <img src="img/post-single/comment-img2.jpg" alt="" />
            </div>
            <div className="comment-details">
              <span className="author-name"><a className="name" href="#">kelly alexandra - </a><a href="#" className="reply">Reply</a></span>
              <span className="comment-text">Comment example here. Nulla risus lacus, vehicula id mi vitae,
                auctor accumsan nulla. Sed a mi quam. In euismod urna ac massa.
              </span>
              <span className="date">Jul 17,2015 at 15 hours ago</span>
            </div>
          </li>
        </ol>
      </div>
      <LeaveComent />
    </div>
  );
}
export default BlogPostComments;
