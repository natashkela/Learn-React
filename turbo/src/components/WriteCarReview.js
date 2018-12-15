import React from 'react';
const WriteCarReview = ()=>{
  return (
    <div className="review-form">
      <h4>Write your review</h4>
      <div className="review-star">
        <a href="#"><i className="ion-android-star"></i></a>
        <a href="#"><i className="ion-android-star"></i></a>
        <a href="#"><i className="ion-android-star"></i></a>
        <a href="#"><i className="ion-android-star"></i></a>
        <a href="#"><i className="ion-android-star"></i></a>
      </div>
      <div id="respond" className="comment-respond">
        <form id="commentform" className="commentform" action="#">
          <div className="row">
            <div className="col-md-6">
              <input type="text" className="comment-input" placeholder="Enter your name..." />
            </div>
            <div className="col-md-6">
              <input type="email" className="comment-input" placeholder="Enter your email..." />
            </div>
            <div className="col-md-12">
              <textarea className="comment-input"  placeholder="Here goes your review"></textarea>
            </div>
            <div className="col-md-12">
              <button className="continue-btn rq-btn rq-btn-normal">Submit Review</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default WriteCarReview;
