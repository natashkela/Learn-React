import React, {Component} from 'react';
import Navbar from './Navbar.js';
import Header from './Header.js';
import AllFeatures from './AllFeatures.js';
import InviteMeContainer from './InviteMeContainer.js';
import TeamMemberContainer from './TeamMemberContainer.js';
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

    ],
    team: [
      {
        name:"Nata Vacheishvili",
        about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
      },
      {
        name:"Kote Kipiani",
        about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
      },
      {
        name:"Tiko Vacheishvili",
        about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
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
        </div>
        <InviteMeContainer />

        <TeamMemberContainer team={this.state.team} />

        <div className="container">
          <InviteMeContainer />
          <p className="centered">Created by BlackTie.co - Attribution License 3.0 - 2013</p>
        </div>
      </div>
    );
  }
};

export default App;
