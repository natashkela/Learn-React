import React from 'react';
const RelatedPosts = ()=> {
  return (
    <div className="related-posts">
      <h2 className="single-sub-title">related posts</h2>
      <div className="rq-blog-grid-wrapper">
        <div className="row">
          <div className="col-md-4">
            <a href="#">
              <div className="rq-blog-grid-single"
              style={{backgroundImage:'url("../img/post-single/related-post1.jpg")',backgroundSize: 'cover',backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'}}>
                <div className="rq-overlay"></div>
                <span className="company-name">successful more in Car Rental field 2016</span>
                <div className="rq-listing-meta">
                  <span className="date">15th,Dec,2016</span>
                  <span className="v-line">|</span>
                  <span className="author-name"><b>by</b>Admin</span>
                  <span className="v-line">|</span>
                  <span className="category"><b>in</b>Tips &amp; Tricks</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#">
              <div className="rq-blog-grid-single"
                   style={{backgroundImage:'url("../img/post-single/related-post2.jpg")',backgroundSize: 'cover',backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'}}>
                <div className="rq-overlay"></div>
                <span className="company-name">5 tips to rent a car for your trip so easy and fastly</span>
                <div className="rq-listing-meta">
                  <span className="date">15th,Dec,2016</span>
                  <span className="v-line">|</span>
                  <span className="author-name"><b>by</b>Admin</span>
                  <span className="v-line">|</span>
                  <span className="category"><b>in</b>Tips &amp; Tricks</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#">
              <div className="rq-blog-grid-single"
                   style={{backgroundImage:'url("../img/post-single/related-post3.jpg")',backgroundSize: 'cover',backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'}}>
                <div className="rq-overlay"></div>
                <span className="company-name">discover the awesome land that you should come</span>
                <div className="rq-listing-meta">
                  <span className="date">15th,Dec,2016</span>
                  <span className="v-line">|</span>
                  <span className="author-name"><b>by</b>Admin</span>
                  <span className="v-line">|</span>
                  <span className="category"><b>in</b>Life Style</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RelatedPosts;
