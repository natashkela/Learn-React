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
    ]
  }
  render(){
    return (
      <div className="container">
        <div className="row margin-top-30">
          <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
            <div id="elements-menu">
              <ul className="nav nav-stacked rq-elements-menu">
                {this.state.tabs.map((tab,index)=>
                  <li key={index} className={tab.isActive ? "active" : ""}><a href={"#"+tab.uniqueName}>{tab.title}</a></li>
                )}
              </ul>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-9 col-lg-9">
            {this.state.tabs.map((tab,index)=>
              <div key={index} id={tab.uniqueName} className={tab.isActive ? "active" : "hidden"}>
                <ListYourCarContent tab={tab}/>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default ListYourCarTabContent;
