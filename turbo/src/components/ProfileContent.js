import React from 'react';
import PropTypes from 'prop-types';
import MyProfile from './MyProfile';
const ProfileContent = ({tab, profile, errorLog, profileEmailChange, profilePasswordChange,
                    profileRePasswordChange, profileSelectedCountryChange,
                    profileSelectedCityChange, profileDriversLicenseChange,
                    profileAboutMeChange}) => {
  return (
    <div>
      {tab.uniqueName == "profile" &&
        <MyProfile
            profile={profile}
            errorLog={errorLog}
            profileEmailChange={profileEmailChange}
            profilePasswordChange={profilePasswordChange}
            profileRePasswordChange={profileRePasswordChange}
            profileSelectedCountryChange={profileSelectedCountryChange}
            profileSelectedCityChange={profileSelectedCityChange}
            profileDriversLicenseChange={profileDriversLicenseChange}
            profileAboutMeChange= {profileAboutMeChange} />
      }
    </div>
  );
}
ProfileContent.propTypes = {
  tab: PropTypes.object,
  profile: PropTypes.object,
  errorLog: PropTypes.array,
  profileEmailChange: PropTypes.func,
  profilePasswordChange: PropTypes.func,
  profileRePasswordChange: PropTypes.func,
  profileSelectedCountryChange: PropTypes.func,
  profileSelectedCityChange: PropTypes.func,
  profileDriversLicenseChange: PropTypes.func,
  profileAboutMeChange: PropTypes.func
}
export default ProfileContent;
