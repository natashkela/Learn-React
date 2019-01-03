import React from 'react';
import PropTypes from 'prop-types';
import ListYourCarGeneralInfo from './ListYourCarGeneralInfo';
import ListYourCarDetails from './ListYourCarDetails';
const ListYourCarContent = ({tab}) => {
  return (
    <div>
      {tab.uniqueName == "general-info" &&
        <ListYourCarGeneralInfo />
      }
      {tab.uniqueName == "car-details" &&
        <ListYourCarDetails />
      }
    </div>
  );
}
ListYourCarContent.propTypes = {
  tab:PropTypes.object
}
export default ListYourCarContent;
