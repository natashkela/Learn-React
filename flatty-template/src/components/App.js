import React, {Component} from 'react';
import Navbar from './Navbar.js';
import Header from './Header.js';
import AllFeatures from './AllFeatures.js';
import InviteMeContainer from './InviteMeContainer.js';
class App extends Component {

  state = {
    features: [
      {
        img: '../img/ser01.png',
        featureHeader: 'Browser Compatibility',
        featureText: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      },
      {
        img: '../img/ser02.png',
        featureHeader: 'Email Campaigns',
        featureText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
      },
      {
        img: '../img/ser03.png',
        featureHeader: 'Browser Compatibility',
        featureText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
      }

    ]
  };
  render(){
    return (
      <div>

      <Navbar />
      <Header />
      <AllFeatures features={this.state.features}/>
      <InviteMeContainer />

    <div className="container">
      <div className="row mt centered">
        <div className="col-lg-6 col-lg-offset-3">
          <h1>Flatty is for Everyone.</h1>
          <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h3>
        </div>
      </div>

      <div className="row mt centered">
        <div className="col-lg-6 col-lg-offset-3">
          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
              <div className="item active">
                <img src="../src/img/p01.png" alt="" />
              </div>
              <div className="item">
                <img src="../src/img/p02.png" alt="" />
              </div>
              <div className="item">
                <img src="../src/img/p03.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <InviteMeContainer />

    <div className="container">
      <div className="row mt centered">
        <div className="col-lg-6 col-lg-offset-3">
          <h1>Our Awesome Team.<br/>Design Lovers.</h1>
          <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h3>
        </div>
      </div>
      <div className="row mt centered">
        <div className="col-lg-4">
          <img className="img-circle" src="../src/img/pic1.jpg" width="140" alt="" />
          <h4>Michael Robson</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
          <p><i className="glyphicon glyphicon-send"></i> <i className="glyphicon glyphicon-phone"></i> <i className="glyphicon glyphicon-globe"></i></p>
        </div>

        <div className="col-lg-4">
          <img className="img-circle" src="../src/img/pic2.jpg" width="140" alt="" />
          <h4>Pete Ford</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
          <p><i className="glyphicon glyphicon-send"></i> <i className="glyphicon glyphicon-phone"></i> <i className="glyphicon glyphicon-globe"></i></p>
        </div>

        <div className="col-lg-4">
          <img className="img-circle" src="../src/img/pic3.jpg" width="140" alt="" />
          <h4>Angelica Finning</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
          <p><i className="glyphicon glyphicon-send"></i> <i className="glyphicon glyphicon-phone"></i> <i className="glyphicon glyphicon-globe"></i></p>
        </div>
      </div>
    </div>

    <div className="container">
      <hr/>
      <div className="row centered">
        <div className="col-lg-6 col-lg-offset-3">
          <form className="form-inline" role="form">
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email address" />
            </div>
            <button type="submit" className="btn btn-warning btn-lg">Invite Me!</button>
          </form>
        </div>
        <div className="col-lg-3"></div>
      </div>
      <hr/>
      <p className="centered">Created by BlackTie.co - Attribution License 3.0 - 2013</p>
    </div>

      </div>
    );
  }
};

export default App;
