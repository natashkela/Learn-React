import React from 'react';
const RelatedCarInfo = () => {
  return (
    <div className="rq-content-block">
      <div className="related-car-faq">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="section-title">Related Cars</h3>
              <div className="child-tab-wrapper related-cars">
                <ul className="nav nav-tabs" role="tablist">
                  <li>
                    <a href="#">
                      <img src="img/listing-details-tab/tab-image1.png" alt="" />
                      <span className="tittle">Lamborghini Aventado 2012</span>
                      <span className="car-des">Four Seater Car</span>
                      <span className="rent-price">$39.00<b>/Day</b></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/listing-details-tab/tab-image2.png" alt="" />
                      <span className="tittle">Ford Red Sport Car</span>
                      <span className="car-des">Four Seater Car</span>
                      <span className="rent-price">$29.00<b>/Day</b></span>
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#car-three"  role="tab" data-toggle="tab">
                      <img src="img/listing-details-tab/tab-image3.png" alt="" />
                      <span className="tittle">Kia Rio White Car 2016</span>
                      <span className="car-des">Four Seater Car</span>
                      <span className="rent-price">$27.00<b>/Day</b></span>
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#car-four"  role="tab" data-toggle="tab">
                      <img src="img/listing-details-tab/tab-image1.png" alt="" />
                      <span className="tittle">Kia Rio White Car 2016</span>
                      <span className="car-des">Four Seater Car</span>
                      <span className="rent-price">$27.00<b>/Day</b></span>
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#car-five"  role="tab" data-toggle="tab">
                      <img src="img/listing-details-tab/tab-image2.png" alt="" />
                      <span className="tittle">Kia Rio White Car 2016</span>
                      <span className="car-des">Four Seater Car</span>
                      <span className="rent-price">$27.00<b>/Day</b></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="section-title">FAQs</h3>
              <div className="rq-faqs">
                <div className="faq-single">
                  <a href="#" className="faq-title">What is Road tax ?</a>
                  <p className="hidden-content">
                  This is Photoshop's version  of Lorem Ipsum. Proin gravida
                  nibh vel velit tubo auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                  nisi elit exo consequat ipsum, nec sagittis sem nibh id elit.
                  </p>
                </div>
                <div className="faq-single">
                  <a href="#" className="faq-title">How to use Manual Model of Audi R8?</a>
                  <p className="hidden-content">
                  This is Photoshop's version  of Lorem Ipsum. Proin gravida
                  nibh vel velit tubo auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                  nisi elit exo consequat ipsum, nec sagittis sem nibh id elit.
                  </p>
                </div>
                <div className="faq-single">
                  <a href="#" className="faq-title">What’s fees that you have to pay ?</a>
                  <p className="hidden-content">
                  This is Photoshop's version  of Lorem Ipsum. Proin gravida
                  nibh vel velit tubo auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                  nisi elit exo consequat ipsum, nec sagittis sem nibh id elit.
                  </p>
                </div>
                <div className="faq-single">
                  <a href="#" className="faq-title">Problems with your car on road ?</a>
                  <p className="hidden-content">
                  This is Photoshop's version  of Lorem Ipsum. Proin gravida
                  nibh vel velit tubo auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                  nisi elit exo consequat ipsum, nec sagittis sem nibh id elit.
                  </p>
                </div>
                <div className="faq-single">
                  <a href="#" className="faq-title">How to rent a car from local network?</a>
                  <p className="hidden-content">
                  This is Photoshop's version  of Lorem Ipsum. Proin gravida
                  nibh vel velit tubo auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                  nisi elit exo consequat ipsum, nec sagittis sem nibh id elit.
                  </p>
                </div>
                <div className="faq-single">
                  <a href="#" className="faq-title">How long limited to rent car from Turbo on the world ?</a>
                  <p className="hidden-content">
                  This is Photoshop's version  of Lorem Ipsum. Proin gravida
                  nibh vel velit tubo auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                  nisi elit exo consequat ipsum, nec sagittis sem nibh id elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RelatedCarInfo;
