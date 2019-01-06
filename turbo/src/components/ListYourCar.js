import React,{Component} from 'react';
import Navbar from './Navbar.js';
import BreadcrumbTernary from './BreadcrumbTernary';
import ListYourCarTabContent from './ListYourCarTabContent';
import Footer from './Footer.js';
class ListYourCar extends Component{
  state = {
    isLoggedIn:false,
    hasACar:false,
    title: "List Your Car",
    breadcrumbs: [
     {
       title: "Home",
       href: "/"
     },
     {
       title:"List Your Car"
     }
   ],
   description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet dolor vel ex aliquet tincidunt."
  }
  render(){
    return (
      <div className="list-your-car">
        <Navbar isLoggedIn={this.state.isLoggedIn} hasACar={this.state.hasACar}/>
        <BreadcrumbTernary breadcrumbs={this.state.breadcrumbs} title={this.state.title} description={this.state.description} />
        <ListYourCarTabContent />
        <Footer />
      </div>
    );
  }
}
export default ListYourCar;
