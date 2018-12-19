import React from 'react';
const LeaveComment = () => {
  return (
    <div id="respond" className="comment-respond">
      <h2 className="single-sub-title">Leave a comment</h2>
      <form id="commentform" className="commentform" action="#">
        <div className="row">
          <div className="col-md-6">
            <input type="text" className="comment-input" placeholder="Enter your name..." />
          </div>
          <div className="col-md-12">
            <textarea className="comment-input"  placeholder="Here goes your comment"></textarea>
          </div>
          <div className="col-md-12">
            <button className="continue-btn rq-btn rq-btn-normal">Submit Comment</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default LeaveComment;
