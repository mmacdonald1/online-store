import React, {Component} from 'react'

class Testimonies extends Component{
  render(){
    return(
      <section className="bg-image section-margin section-padding section-padding-top" data-bg="image/bg-images/home-1/bg-testimonial.jpg">
        <div className="container">
          <div className="testimonial-slider handart-slick-slider arrow-type-two" data-slick-setting='{
              "autoplay": true,
              "autoplaySpeed": 8000,
              "slidesToShow": 1,
              "arrows": true,
              "prevArrow":{"buttonclassName": "slick-prev","iconclassName":"fa fa-chevron-left"},
              "nextArrow":{"buttonclassName": "slick-next","iconclassName":"fa fa-chevron-right"}
          }'>
            <div className="single-slide">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="testimonial-content">
                      <div className="testimonial-avatar">
                        <img src= {process.env.PUBLIC_URL+ "/handart/image/others/testimonial-avatar.png"} alt=""/>
                      </div>
                      <div className="testimonial-content">
                        <p>
                          Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer
                          possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes
                          demonstraverunt lectores
                          legere me lius quod ii legunt saepius.
                        </p>
                        <span className="quote-image">
                          <img src= {process.env.PUBLIC_URL+ "/handart/image/icon/quotation.png"} alt=""/>
                        </span>
                        <h5 className="author">orando BLoom</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slide">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="testimonial-content">
                      <div className="testimonial-avatar">
                        <img src= {process.env.PUBLIC_URL+ "/handart/image/others/testimonial-avatar.png"} alt=""/>
                      </div>
                      <div className="testimonial-content">
                        <p>
                          Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer
                          possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes
                          demonstraverunt lectores
                          legere me lius quod ii legunt saepius.
                        </p>
                        <span className="quote-image">
                          <img src= {process.env.PUBLIC_URL+ "/handart/image/icon/quotation.png"} alt=""/>
                        </span>
                        <h5 className="author">orando BLoom</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-slide">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="testimonial-content">
                      <div className="testimonial-avatar">
                        <img src= {process.env.PUBLIC_URL+ "/handart/image/others/testimonial-avatar.png"} alt=""/>
                      </div>
                      <div className="testimonial-content">
                        <p>
                          Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer
                          possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes
                          demonstraverunt lectores
                          legere me lius quod ii legunt saepius.
                        </p>
                        <span className="quote-image">
                          <img src= {process.env.PUBLIC_URL+ "/handart/image/icon/quotation.png"} alt=""/>
                        </span>
                        <h5 className="author">orando BLoom</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Testimonies
