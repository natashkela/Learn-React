import React, {Component} from 'react';
import Navbar from './Navbar';
import BreadcrumbSecondary from './BreadcrumbSecondary';
import RelatedPosts from './RelatedPosts';
import LeaveComent from './LeaveComment';
import Footer from './Footer';
class BlogPost extends Component{
  state={
    title: "Blog Post Title",
    breadcrumbs: [
     {
       title: "Home",
       href: "/"
     },
     {
       title:"Blog Post Title"
     }
   ],
   blogPost:{
     categories:[0,1,3,5],
     blogId:1,
     title:"Title Of Single Post With Image Format",
     date:"15/02/2016",
     author:"Logan cee",
     shortDescription:"Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.autem vel eum iriure dolor in heninndrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto.Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation"
   }
  }
  render(){
    return(
      <div className="blog-post">
        <Navbar />
        <div className="rq-page-content">
          <div className="blog-post-single-wrapper">
            <div className="signle-post-feature-img">
              <img src={require("../img/post-single/image-post.jpg")} alt="" />
            </div>
            <div className="container">
              <div className="rq-content-block">
                <BreadcrumbSecondary title={this.state.title} breadcrumbs={this.state.breadcrumbs}/>
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

                <RelatedPosts />
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
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default BlogPost;
