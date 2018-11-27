import React from 'react';
const App = () => {
  return (
    <div>
    <div className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#"><b>FLATTY</b></a>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Already a member?</a></li>
          </ul>
        </div>
      </div>
    </div>

  <div id="headerwrap">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h1>Make your landing page<br/>
          look really good.</h1>
          <form className="form-inline" role="form">
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email address" />
            </div>
            <button type="submit" className="btn btn-warning btn-lg">Invite Me!</button>
          </form>
        </div>
        <div className="col-lg-6">
          <img className="img-responsive" src="../src/img/ipad-hand.png" alt="" />
        </div>

      </div>
    </div>
  </div>


  <div className="container">
    <div className="row mt centered">
      <div className="col-lg-6 col-lg-offset-3">
        <h1>Your Landing Page<br/>Looks Wonderful Now.</h1>
        <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h3>
      </div>
    </div>

    <div className="row mt centered">
      <div className="col-lg-4">
        <img src="../src/img/ser01.png" width="180" alt="" />
        <h4>1 - Browser Compatibility</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
      </div>

      <div className="col-lg-4">
        <img src="../src/img/ser02.png" width="180" alt="" />
        <h4>2 - Email Campaigns</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>

      </div>

      <div className="col-lg-4">
        <img src="../src/img/ser03.png" width="180" alt="" />
        <h4>3 - Gather Your Notes</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>

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
  </div>

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
  </div>

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
};

export default App;
