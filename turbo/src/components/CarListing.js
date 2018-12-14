import React,{Component} from 'react';
import CarListingGrid from './CarListingGrid.js';
import CarListingPagination from './CarListingPagination.js';
class CarListing extends Component{
  state={
    list:[
      {
        brand:"BMW",
        model:"M6 Gran Coupe",
        stars:4,
        transmission:1,
        bodyStyle:"Sedan",
        price:39,
        id:1
      },
      {
        brand:"Ford",
        model:"Shelby GT500",
        stars:5,
        transmission:1,
        bodyStyle:"Sedan",
        price:29,
        id:2
      },
      {
        brand:"Mercedes-Benz",
        model:"C100",
        stars:3,
        transmission:0,
        bodyStyle:"Sedan",
        price:39,
        id:3
      },
      {
        brand:"BMW",
        model:"M6 Gran Coupe",
        stars:4,
        transmission:1,
        bodyStyle:"Sedan",
        price:39,
        id:4
      },
      {
        brand:"Ford",
        model:"Shelby GT500",
        stars:5,
        transmission:1,
        bodyStyle:"Sedan",
        price:29,
        id:5
      },
      {
        brand:"Mercedes-Benz",
        model:"C100",
        stars:3,
        transmission:0,
        bodyStyle:"Sedan",
        price:39,
        id:6
      },
      {
        brand:"BMW",
        model:"M6 Gran Coupe",
        stars:4,
        transmission:1,
        bodyStyle:"Sedan",
        price:39,
        id:7
      },
      {
        brand:"Ford",
        model:"Shelby GT500",
        stars:5,
        transmission:1,
        bodyStyle:"Sedan",
        price:29,
        id:8
      },
      {
        brand:"Mercedes-Benz",
        model:"C100",
        stars:3,
        transmission:0,
        bodyStyle:"Sedan",
        price:39,
        id:9
      },
      {
        brand:"BMW",
        model:"M6 Gran Coupe",
        stars:4,
        transmission:1,
        bodyStyle:"Sedan",
        price:39,
        id:10
      },
      {
        brand:"Ford",
        model:"Shelby GT500",
        stars:5,
        transmission:1,
        bodyStyle:"Sedan",
        price:29,
        id:11
      },
      {
        brand:"Mercedes-Benz",
        model:"C100",
        stars:3,
        transmission:0,
        bodyStyle:"Sedan",
        price:39,
        id:12
      }
    ]
  }
  render(){
    return(
      <div className="rq-car-listing-wrapper">
        <CarListingGrid list={this.state.list}/>
        <CarListingPagination />
      </div>
    );
  }
}
export default CarListing;
