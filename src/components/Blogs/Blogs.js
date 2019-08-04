import React, {Component} from 'react'

class Blogs extends Component{
  render(){
    return(
      <div className="container">
        <div className="section-title mb--25">
          <h2>Latest Blog</h2>
          <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas.</p>
        </div>
        <div className="row ">
          <div className="col-lg-4 col-md-6 mt--30">
            <div className="blog-card">
              <a href= {process.env.PUBLIC_URL+ "/handart/image/others/blog-card-1.jpg"} data-fancybox className="blog-image">
                <img src= {process.env.PUBLIC_URL+ "/handart/image/others/blog-card-1.jpg"} alt=""/>
                <div className="date-badge">
                  <span className="month">
                    august
                  </span>
                  <h5>16</h5>
                </div>
                <div className="plus-icon">
                  <i className="fas fa-plus-circle"></i>
                </div>
              </a>
              <div className="text">
                <h3 className="blog-title"><a href="blog-details.html">5 Disadvantages Of Handcraft</a></h3>
                <span className="post-meta"><i className="fas fa-user"></i>Demo Handart</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard
                dummy text ever since the ...</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt--30">
            <div className="blog-card">
              <div className="position-relative">
                <div className="handart-slick-slider blog-gallery-slider arrow-type-two" data-slick-setting='{
                          "autoplay": true,
                          "autoplaySpeed": 8000,
                          "slidesToShow": 1,
                          "arrows": true,
                          "prevArrow":{"buttonclassName": "slick-prev","iconclassName":"fa fa-chevron-left"},
                          "nextArrow":{"buttonclassName": "slick-next","iconclassName":"fa fa-chevron-right"}
                          }'>
                  <img src= {process.env.PUBLIC_URL+ "/handart/image/others/blog-card-slider-1.jpg"} alt=""/>
                  <img src= {process.env.PUBLIC_URL+ "/handart/image/others/blog-card-slider-2.jpg"} alt=""/>
                </div>
                <div className="date-badge">
                  <span className="month">
                    august
                  </span>
                  <h5>16</h5>
                </div>
              </div>
              <div className="text">
                <h3 className="blog-title"><a href="blog-details--gallery-format.html">How You Can Workaround Handcraft</a></h3>
                <span className="post-meta"><i className="fas fa-user"></i>Demo Handart</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard
                dummy text ever since the ...</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt--30">
            <div className="blog-card">
              <a href= {process.env.PUBLIC_URL+ "/handart/image/others/blog-card-slider-3.jpg"} data-fancybox className="blog-image">
                <img src= {process.env.PUBLIC_URL+ "/handart/image/others/blog-card-slider-3.jpg"} alt=""/>
                <div className="date-badge">
                  <span className="month">
                    august
                  </span>
                  <h5>16</h5>
                </div>
                <div className="plus-icon">
                  <i className="fas fa-plus-circle"></i>
                </div>
              </a>
              <div className="text">
                <h3 className="blog-title"><a href="blog-details.html">7 Awesome Things You Can Learn</a></h3>
                <span className="post-meta"><i className="fas fa-user"></i>Demo Handart</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
                  standard
                  dummy text ever since the ...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Blogs
