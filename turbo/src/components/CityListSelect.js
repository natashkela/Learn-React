import React from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
const CityListSelect = ({countrySelected, citySelected}) => {
  return (
    <RegionDropdown className="rq-form-control reverse" countryValueType="short" country={countrySelected} value={citySelected} onChange={(val)=>this.selectRegion(val)} />
  );
}
export default CityListSelect;
