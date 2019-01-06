import React,{Component} from 'react';
import ListYourCarContent from './ListYourCarContent';
class ListYourCarTabContent extends Component{
  state = {
    tabs:[
      {
        title:"General Information",
        isActive:true,
        uniqueName:"general-info"
      },
      {
        title:"Profile Photo",
        isActive:false,
        uniqueName:"profile-photo"
      },
      {
        title:"Mobile Number",
        isActive:false,
        uniqueName:"mobile-number"
      },
      {
        title:"Car Details",
        isActive: false,
        uniqueName:"car-details"
      },
      {
        title:"Car Availability",
        isActive: false,
        uniqueName:"car-availability"
      },
      {
        title:"Car Photos",
        isActive: false,
        uniqueName:"car-photos"
      }
    ],
    isLoggedIn:true,
    customerInformation:{
      firstName: "Nata",
      lastName: "Vacheishvili",
      phone:"7742320539"
    }
  }
  handleTabClick(event,name){
    event.preventDefault();
    this.setState(prevState=>
      prevState.tabs.map((tab,index)=>
          tab.isActive = (tab.uniqueName==name)
      )
    )
  }
  render(){
    return (
      <div className="container list-your-car-container">
        <div className="row margin-top-30">
          <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <div id="elements-menu">
              <ul className="nav nav-stacked rq-elements-menu">
                {this.state.tabs.map((tab,index)=>
                  <li onClick={(event) => this.handleTabClick(event,tab.uniqueName)} key={index} className={tab.isActive ? "active" : ""}><a href={"#"+tab.uniqueName}>{tab.title}</a></li>
                )}
              </ul>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-9 col-lg-9">
            {this.state.tabs.map((tab,index)=>
              <div key={index} id={tab.uniqueName} className={tab.isActive ? "active" : "hidden"}>
                <ListYourCarContent tab={tab} isLoggedIn={this.state.isLoggedIn} customerInformation={this.state.customerInformation}/>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default ListYourCarTabContent;
