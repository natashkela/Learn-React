import React from 'react';
import PropTypes from 'prop-types';
import ListYourCarGeneralInfo from './ListYourCarGeneralInfo';
import ListYourCarDetails from './ListYourCarDetails';
import ListYourCarAvailability from './ListYourCarAvailability';
import ListYourCarPhotos from './ListYourCarPhotos';
const ListYourCarContent = ({tab}) => {
  return (
    <div>
      {tab.uniqueName == "general-info" &&
        <ListYourCarGeneralInfo />
      }
      {tab.uniqueName == "car-details" &&
        <ListYourCarDetails />
      }
      {tab.uniqueName == "car-availability" &&
        <ListYourCarAvailability />
      }
      {tab.uniqueName == "car-photos" &&
        <ListYourCarPhotos />
      }
    </div>
  );
}
ListYourCarContent.propTypes = {
  tab:PropTypes.object
}
export default ListYourCarContent;
