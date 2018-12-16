import React,{Component} from 'react';
import Navbar from './Navbar.js';
import BookCarSection from './BookCarSection.js'
import CarInformation from './CarInformation.js';
import RelatedCarInfo from './RelatedCarInfo.js';
import Footer from './Footer.js';
class CarDetail extends Component{
  state={
     title: "Toyota Prado",
     breadcrumbs: [
      {
        title: "Home",
        href: "/"
      },
      {
        title:"All Cars",
        href:"/cars"
      },
      {
        title:"Toyota Prado"
      }
    ]
  }
  render(){
    return(
      <div className="car-detail">
        <Navbar />
        <div className="rq-page-content">
          <div className="rq-listing-details">
            <CarInformation breadcrumbs={this.state.breadcrumbs} title={this.state.title}/>
            <BookCarSection />
            <RelatedCarInfo />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default CarDetail;
