import React, {Component} from 'react';
import CountryListSelect from './CountryListSelect';
import CityListSelect from './CityListSelect';
import Map from './Map';
class ListYourCarGeneralInfo extends Component {
  state={
    carLocationCountry:"",
    carLocationCity:""
  }
  handleSelectCountry(val){
    this.setState(prevState=>prevState.carLocationCountry=val);
  }
  handleSelectCity(val){
    this.setState(prevState=>prevState.carLocationCity=val);
  }
  render(){
    return (
      <div className="list-your-car-general-info">
        <h5 className="margin-top-10 margin-bottom-0"><strong>Where is your car located?</strong></h5>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 country">
            <CountryListSelect selected={this.state.carLocationCountry} selectCountry={this.handleSelectCountry.bind(this)}/>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 city">
            <CityListSelect countrySelected={this.state.carLocationCountry} citySelected={this.state.carLocationCity} selectRegion={this.handleSelectCity.bind(this)} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <input type="text" className="rq-form-control" placeholder="Your Car Address" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <input type="text" className="rq-form-control" placeholder="Zip Code" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Map />
          </div>
        </div>
      </div>
    )
  }
}
export default ListYourCarGeneralInfo;
