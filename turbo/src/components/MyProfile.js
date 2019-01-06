import React from 'react';
import PropTypes from 'prop-types';
import CountryListSelect from './CountryListSelect';
import CityListSelect from './CityListSelect';
const MyProfile = ({profile,errorLog, profileEmailChange, profilePasswordChange,
                    profileRePasswordChange, profileSelectedCountryChange,
                    profileSelectedCityChange, profileDriversLicenseChange,
                    profileAboutMeChange}) => {
  return (
    <div className="list-your-car-details">
      <h5 className="margin-top-10 margin-bottom-0"><strong>Update Profile Information</strong></h5>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          {errorLog.length>0 &&
          <div className="alert alert-danger margin-bottom-15" role="alert">
            {this.state.errorLog.map((error,index)=>
              <span key={index}>{error}</span>
            )}
            </div>
          }
          <form method="POST" encType="multipart/form-data" id="update_profile" >
            <input type="hidden" name="action" value="profile-update" />
            <input type="hidden" name="id" value="1" />
            <img src={profile.id && profile.username ? require("../img/users/"+profile.id+"-"+profile.username+".jpg") : require("../img/users/avatar.jpg")} style={{width:"200px",height:"200px"}} className="img-responsive" />
            <br />
            <input type="file" className="file rq-form-control" name="preview-image" data-filename-placement="inside" />
            <br />
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="rq-form-control" onChange={()=>profileEmailChange()}  id="email" name="email" value={profile.email ? profile.email : ""} placeholder="Jane Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="rq-form-control" onChange={()=>profilePasswordChange()}  id="password" name="password" value={profile.password ? profile.password : ""} placeholder="" />
            </div>
            <div className="form-group">
              <label htmlFor="re_password">Repeat Password</label>
              <input type="password" className="rq-form-control" onChange={()=>profileRePasswordChange()}  id="re_password" name="re_password" value={profile.repassword ? profile.repassword : ""} placeholder="" />
            </div>
            <div className="form-group country">
              <label htmlFor="location">Country</label>
              <CountryListSelect selected={profile.country} selectCountry={()=>profileSelectedCountryChange()} />
            </div>
            <div className="form-group city">
              <label htmlFor="location">City</label>
              <CityListSelect countrySelected={profile.country} selectRegion={profile.city} selectCity={()=>profileSelectedCityChange()}/>
            </div>
            <div className="form-group">
              <label htmlFor="drivers_license">Driver License Number</label>
              <input type="text" className="rq-form-control" onChange={()=>profileDriversLicenseChange()}  id="drivers_license" name="drivers_license" value={profile.licenseNum ? profile.licenseNum : ""} placeholder="License Number" />
            </div>
            <div className="form-group">
              <label htmlFor="aboutme">About me</label>
              <textarea className="rq-form-control"  rows={5} onChange={()=>profileAboutMeChange()} value={profile.aboutme ? profile.aboutme : ""}>
              </textarea>
            </div>
            <button type="submit" className="btni margin-bottom-15 rq-btn rq-btn-primary btn-large border-radius">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}
MyProfile.propTypes= {
  profile:PropTypes.object,
  errorLog: PropTypes.array,
  profileEmailChange: PropTypes.func,
  profilePasswordChange: PropTypes.func,
  profileRePasswordChange: PropTypes.func,
  profileSelectedCountryChange: PropTypes.func,
  profileSelectedCityChange: PropTypes.func,
  profileDriversLicenseChange: PropTypes.func,
  profileAboutMeChange: PropTypes.func
}
export default MyProfile;
