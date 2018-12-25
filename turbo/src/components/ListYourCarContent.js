import React from 'react';
import PropTypes from 'prop-types';
import ListYourCarGeneralInfo from './ListYourCarGeneralInfo';
const ListYourCarContent = ({tab}) => {
  return (
    <div>
      {tab.uniqueName == "general-info" &&
        <ListYourCarGeneralInfo />
      }
    </div>
  );
}
ListYourCarContent.propTypes = {
  tab:PropTypes.object
}
export default ListYourCarContent;
