import React,{Component} from 'react';
import Navbar from './Navbar.js';
import Breadcrumb from './Breadcrumb';
import CountryListSelect from './CountryListSelect';
import CityListSelect from './CityListSelect';
import Footer from './Footer.js';
class Profile extends Component{
  state = {
    isLoggedIn:true,
    hasCar:true,
    title: "My Profile",
    breadcrumbs: [
     {
       title: "Home",
       href: "/"
     },
     {
       title:"My Profile"
     }
   ],
   profile:{
     id:1,
     username:"nvacheishvili",
     email:"nvacheishvili@wpi.edu",
     country:"GE",
     city:"Tbilisi",
     licenseNum:"123456",
     aboutme: "I made this website wohooo"
   }
  }
  handleSelectCountry(val){
    this.setState(prevState=>prevState.profile.country=val);
  }
  handleSelectCity(val){
    this.setState(prevState=>prevState.profile.city=val);
  }
  render(){
    return (
      <div className="my-profile">
        <Navbar isLoggedIn={this.state.isLoggedIn} hasCar={this.state.hasCar}/>
        <div className="rq-page-content">
          <Breadcrumb title={this.state.title} breadcrumbs={this.state.breadcrumbs}/>
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
                      <form method="POST" encType="multipart/form-data" id="update_profile" >
                        <input type="hidden" name="action" value="profile-update" />
                        <input type="hidden" name="id" value="1" />
                        <img src={this.state.profile.id && this.state.profile.username ? require("../img/users/"+this.state.profile.id+"-"+this.state.profile.username+".jpg") : require("../img/users/avatar.jpg")} style={{width:"200px",height:"200px"}} className="img-responsive" />
                        <br />
                        <input type="file" className="file" name="preview-image" data-filename-placement="inside" />
                        <br />
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input type="text" className="form-control" id="email" name="email" value={this.state.profile.email ? this.state.profile.email : ""} placeholder="Jane Doe" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input type="password" className="form-control" id="password" name="password" value="" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="re_password">Repeat Password</label>
                          <input type="password" className="form-control" id="re_password" name="re_password" value="" placeholder="" />
                        </div>
                        <div className="form-group country">
                          <label htmlFor="location">Country</label>
                          <CountryListSelect selected={this.state.profile.country} selectCountry={this.handleSelectCountry.bind(this)} />
                        </div>
                        <div className="form-group city">
                          <label htmlFor="location">City</label>
                          <CityListSelect countrySelected={this.state.profile.country} selectRegion={this.state.profile.city} selectCity={this.handleSelectCity.bind(this)}/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="drivers_license">Driver License Number</label>
                          <input type="text" className="form-control" id="drivers_license" name="drivers_license" value={this.state.profile.licenseNum ? this.state.profile.licenseNum : ""} placeholder="License Number" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="aboutme">About me</label>
                          <textarea className="form-control" rows={5}>
                             {this. state.profile.aboutme ? this.state.profile.aboutme : ""}
                          </textarea>
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
