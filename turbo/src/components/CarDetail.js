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
    ],
    car: {
      id:1,
      brand:"Toyota",
      model:"Prado",
      year:"2016",
      color:"silver",
      mileage:122343,
      transmission:1,
      seats:6,
      luggage:3,
      fuel: "Petrol",
      features: [
        {
          name:"Air Condition",
          value:true
        },
        {
          name:"Bluetooth",
          value:true
        },
        {
          name:"AUX",
          value:true
        },
        {
          name:"Child Seat",
          value:false
        },
        {
          name:"GPS",
          value:false
        },
        {
          name:"Seat Heating",
          value:false
        },
        {
          name:"Ski Rack",
          value:false
        }
      ],
      description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little."
    },
    reviews: [
      {
        author:"Nata Vacheishvili",
        stars:5,
        comment:"Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am."
      }
    ],
    relatedCars:[
      {
        title: "Lamborghini Aventado 2012",
        description: "Four Seater Car",
        price: 39.00,
        id: 1
      },
      {
        title: "Ford Red Sport Car",
        description: "Four Seater Car",
        price: 29.00,
        id: 2
      },
      {
        title: "Kia Rio White Car 2016",
        description: "Four Seater Car",
        price: 27.00,
        id: 3
      },
      {
        title: "Kia Rio White Car 2016",
        description: "Four Seater Car",
        price: 27.00,
        id: 4
      }
    ]
  }
  calculateTotalCost(){
    return 150;
  }
  render(){
    return(
      <div className="car-detail">
        <Navbar />
        <div className="rq-page-content">
          <div className="rq-listing-details">
            <CarInformation breadcrumbs={this.state.breadcrumbs} title={this.state.title} car={this.state.car} reviews={this.state.reviews}/>
            <BookCarSection totalCost={this.calculateTotalCost()}/>
            <RelatedCarInfo relatedCars={this.state.relatedCars} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default CarDetail;
