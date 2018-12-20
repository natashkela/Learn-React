import React,{Component} from 'react';
class LeaveComment extends Component {
  Comment = React.createRef();
  Author = React.createRef();
  state = {
    author: "",
    comment: ""
  }
  handleAuthorChange(){
    let com = this.Author.current.value;
    this.setState(prevState=>{
      return{
        author: com
      }
    });
  }
  handleCommentChange(){
    let com = this.Comment.current.value;
    this.setState(prevState=>{
      return{
        comment: com
      }
    });
  }
  render(){
    return (
      <div id="respond" className="comment-respond">
        <h2 className="single-sub-title">Leave a comment</h2>
        <form id="commentform" className="commentform" action="#">
          <div className="row">
            <div className="col-md-6">
              <input type="text" className="comment-input" ref={this.Author}  onChange={()=>this.handleAuthorChange()} placeholder="Enter your name..." />
            </div>
            <div className="col-md-12">
              <textarea className="comment-input"  ref={this.Comment} onChange={()=>this.handleCommentChange()} placeholder="Here goes your comment"></textarea>
            </div>
            <div className="col-md-12">
              <button type="submit"   className="continue-btn rq-btn rq-btn-normal">Submit Comment</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default LeaveComment;
