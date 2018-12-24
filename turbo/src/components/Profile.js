import React,{Component} from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
class Profile extends Component{
  state = {
    isLoggedIn:true,
    hasCar:true
  }
  render(){
    return (
      <div classNameName="my-profile">
        <Navbar isLoggedIn={this.state.isLoggedIn} hasCar={this.state.hasCar}/>
        <div className="rq-page-content">
          <div className="inner-page-banner" style={{backgroundImage: "url('../img/inner-banner/about-us.jpg')", backgroundSize: 'cover', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'}}>
            <div className="rq-overlay"></div>
            <div className="container">
              <div className="rq-title-container bredcrumb-title">
                <h2 className="rq-title">My Profile</h2>
                <ol className="breadcrumb rq-subtitle">
                  <li><a href="index.php">Home</a></li>
                  <li className="active">My Profile</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="rq-content-block">
            <div className="rq-about-us-content-wrapper">
            <div className="product">
              <div className="container">
                <div className="row">
                  <div className="col-md-9">
                    <div>
                      <div className="title">
                        <h3 className="elements-title">Update Profile Information</h3>
                      </div>
                      <form method="POST" enctype="multipart/form-data" id="update_profile" >
                        <input type="hidden" name="action" value="profile-update" />
                        <input type="hidden" name="id" value="1" />
                            <img src={require("../img/users/1-nvacheishvili.jpg")} style={{width:"200px",height:"200px"}} className="img-responsive" />
                      <br />
                        <input type="file" className="file" name="preview-image" data-filename-placement="inside" />
                        <br />
                          <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" name="email" value="nvacheishvili@pwpi.edu" placeholder="Jane Doe" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" value="" placeholder="" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="re_password">Repeat Password</label>
                            <input type="password" className="form-control" id="re_password" name="re_password" value="" placeholder="" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input type="text" className="form-control" id="location" name="location" value="Tbilisi" placeholder="Tbilisi" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="drivers_license">Driver License Number</label>
                            <input type="text" className="form-control" id="drivers_license" name="drivers_license" value="1234567" placeholder="" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="aboutme">About me</label>
                            <textarea className="form-control" name="aboutme" value="" rows="5">asdasdsadasdsadasd</textarea>
                          </div>
                          <button type="submit" className="btni margin-bottom-15 rq-btn rq-btn-primary btn-large border-radius">Save</button>
                      </form>
                    </div>
                  </div>
                </div>
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
export default Profile;
