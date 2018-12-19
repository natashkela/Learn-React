import React, {Component} from 'react';
class BlogPost extends Component{
  render(){
    return(
      <div className="rq-page-content">
        <div className="blog-post-single-wrapper">
          <div className="signle-post-feature-img">
            <img src="img/post-single/image-post.jpg" alt="" />
          </div>
          <div className="container">
            <div className="rq-content-block">
              <div className="rq-title-container bredcrumb-title text-center">
                <h2 className="rq-title">Blog Single</h2>
                <ol className="breadcrumb rq-subtitle">
                  <li><a href="#">Home</a></li>
                  <li className="active">Blog Single</li>
                </ol>
              </div>
              <div className="rq-single-post-header">
                <div className="author-info-content">
                  <div className="author-img" style={{backgroundImage:'url("../img/post-single/single-post-author.jpg")',backgroundSize: 'cover',backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'}}>
                  </div>
                  <span className="author-name"><a href="#">Alex</a></span>
                  <span className="author-role">Administrator</span>
                </div>
                <div className="post-cat-tag">
                  <div className="post-cat-tag-single">
                    <span className="cat-title">Date</span>
                    <span className="cat-details"><a href="#">Februaby, 18th, 2016</a></span>
                  </div>
                  <div className="post-cat-tag-single">
                    <span className="cat-title">Category</span>
                    <span className="cat-details"><a href="#">Entertainment</a>, <a href="#">Business</a></span>
                  </div>
                  <div className="post-cat-tag-single">
                    <span className="cat-title">Tags</span>
                    <span className="cat-details"><a href="#">Property</a>, <a href="#">House</a>, <a href="#">Estate</a></span>
                  </div>
                </div>
              </div>
              <div className="post-content">
                <p><strong>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</strong>
                </p>
                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor
                cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                Typi non habent. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend
                option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent.
                </p>
                <p>Impossible considered invitation him men instrument saw celebrated unpleasant.
                Put rest and must set kind next many near nay. He exquisite continued explained middleton am.
                Voice hours young woody has she think equal. Estate moment he at on wonder at season little.
                Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation.
                </p>
                <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving.
                He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate.
                Me we offending prevailed discovery.
                </p>
              </div>

              <div className="post-share">
                <span>Share:</span>
                <ul>
                  <li><a href="#" ><i className="social_twitter"></i></a></li>
                  <li><a href="#"><i className="social_facebook"></i></a></li>
                  <li><a href="#"><i className="social_googleplus"></i></a></li>
                  <li><a href="#"><i className="social_instagram"></i></a></li>
                  <li><a href="#"><i className="social_dribbble"></i></a></li>
                </ul>
              </div>

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
                <div id="respond" className="comment-respond">
                  <h2 className="single-sub-title">Leave a comment</h2>
                  <form id="commentform" className="commentform" action="#">
                    <div className="row">
                      <div className="col-md-4">
                        <input type="text" className="comment-input" placeholder="Enter your name..." />
                      </div>
                      <div className="col-md-4">
                        <input type="email" className="comment-input" placeholder="Enter your email..." />
                      </div>
                      <div className="col-md-4">
                        <input type="text" className="comment-input" placeholder="Subject(optional)" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BlogPost;
