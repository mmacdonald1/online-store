import React, {Component} from 'react'

class LatestProducts extends Component{
  render(){
    return(
      <section className="section-padding">
        <div className="container">
          <div className="section-title mb--55">
            <h2>Latest Products</h2>
            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas.</p>
          </div>
          <div className="product-slider handart-slick-slider arrow-type-two space-db--5" data-slick-setting='{
          "autoplay": true,
          "autoplaySpeed": 8000,
          "slidesToShow": 4,
          "arrows": true,
          "prevArrow":{"buttonclassName": "slick-prev","iconclassName":"fa fa-chevron-left"},
          "nextArrow":{"buttonclassName": "slick-next","iconclassName":"fa fa-chevron-right"}
          }' data-slick-responsive='[
                                  {"breakpoint":991, "settings": {"slidesToShow": 3} },
                                  {"breakpoint":768, "settings": {"slidesToShow": 2} },
                                  {"breakpoint":480, "settings": {"slidesToShow": 1} }
                              ]'>
      <div className="single-slide">
        <div className="product-card">
          <div className="image">
            <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-1.jpg"}  alt=""/>
            <div className="hover-content">
              <a href="product-details.html" className="hover-image">
                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-2.jpg"}  alt=""/>
              </a>

      <div className="hover-btns">
        <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
        <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
        <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
      </div>

            </div>
            <span className="product-badge">new</span>
            <span className="product-badge-2">-5%</span>
          </div>
          <div className="description-block">
            <div className="description-header">
              <h5 className="description-tag"><a href="#/">Fashion Manufacturer</a></h5>
              <div className="rating-block">
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline"></span>
                <span className="ion-android-star-outline"></span>
              </div>
            </div>
            <h3 className="post-title"> <a href="product-details.html"> zyfg men sweatshirts casual ethnic style pattern</a></h3>

            <p className="mb-0 price"><del className="price-old">€500.00</del> <span className="price-new">€500.00</span></p>
          </div>
        </div>
      </div>
      <div className="single-slide">
        <div className="product-card">
          <div className="image">
            <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-3.jpg"}  alt=""/>
            <div className="hover-content">
              <a href="product-details.html" className="hover-image">
                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-4.jpg"}  alt=""/>
              </a>

      <div className="hover-btns">
        <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
        <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
        <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
      </div>

            </div>
            <span className="product-badge">new</span>
            <span className="product-badge-2">-5%</span>
          </div>
          <div className="description-block">
            <div className="description-header">
              <h5 className="description-tag"><a href="#/">Fashion Manufacturer</a></h5>
              <div className="rating-block">
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline"></span>
                <span className="ion-android-star-outline"></span>
              </div>
            </div>
            <h3 className="post-title"> <a href="product-details.html"> zyfg men sweatshirts casual ethnic style pattern</a></h3>

            <p className="mb-0 price"><del className="price-old">€500.00</del> <span className="price-new">€500.00</span></p>
          </div>
        </div>
      </div>
      <div className="single-slide">
        <div className="product-card">
          <div className="image">
            <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-5.jpg"}  alt=""/>
            <div className="hover-content">
              <a href="product-details.html" className="hover-image">
                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-6.jpg"} alt=""/>
              </a>

      <div className="hover-btns">
        <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
        <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
        <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
      </div>

            </div>
            <span className="product-badge">new</span>
            <span className="product-badge-2">-5%</span>
          </div>
          <div className="description-block">
            <div className="description-header">
              <h5 className="description-tag"><a href="#/">Fashion Manufacturer</a></h5>
              <div className="rating-block">
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline"></span>
                <span className="ion-android-star-outline"></span>
              </div>
            </div>
            <h3 className="post-title"> <a href="product-details.html"> zyfg men sweatshirts casual ethnic style pattern</a></h3>

            <p className="mb-0 price"><del className="price-old">€500.00</del> <span className="price-new">€500.00</span></p>
          </div>
        </div>
      </div>
      <div className="single-slide">
        <div className="product-card">
          <div className="image">
            <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-7.jpg"}  alt=""/>
            <div className="hover-content">
              <a href="product-details.html" className="hover-image">
                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-7.jpg"}  alt=""/>
              </a>

      <div className="hover-btns">
        <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
        <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
        <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
      </div>

            </div>
            <span className="product-badge">new</span>
            <span className="product-badge-2">-5%</span>
          </div>
          <div className="description-block">
            <div className="description-header">
              <h5 className="description-tag"><a href="#/">Fashion Manufacturer</a></h5>
              <div className="rating-block">
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline"></span>
                <span className="ion-android-star-outline"></span>
              </div>
            </div>
            <h3 className="post-title"> <a href="product-details.html"> zyfg men sweatshirts casual ethnic style pattern</a></h3>

            <p className="mb-0 price"><del className="price-old">€500.00</del> <span className="price-new">€500.00</span></p>
          </div>
        </div>
      </div>
      <div className="single-slide">
        <div className="product-card">
          <div className="image">
            <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-9.jpg"}  alt=""/>
            <div className="hover-content">
              <a href="product-details.html" className="hover-image">
                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-10.jpg"}  alt=""/>
              </a>

      <div className="hover-btns">
        <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
        <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
        <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
      </div>

            </div>
            <span className="product-badge">new</span>
            <span className="product-badge-2">-5%</span>
          </div>
          <div className="description-block">
            <div className="description-header">
              <h5 className="description-tag"><a href="#/">Fashion Manufacturer</a></h5>
              <div className="rating-block">
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline"></span>
                <span className="ion-android-star-outline"></span>
              </div>
            </div>
            <h3 className="post-title"> <a href="product-details.html"> zyfg men sweatshirts casual ethnic style pattern</a></h3>

            <p className="mb-0 price"><del className="price-old">€500.00</del> <span className="price-new">€500.00</span></p>
          </div>
        </div>
      </div>
      <div className="single-slide">
        <div className="product-card">
          <div className="image">
            <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-11.jpg"}  alt=""/>
            <div className="hover-content">
              <a href="product-details.html" className="hover-image">
                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-12.jpg"}  alt=""/>
              </a>

      <div className="hover-btns">
        <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
        <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
        <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
      </div>

            </div>
            <span className="product-badge">new</span>
            <span className="product-badge-2">-5%</span>
          </div>
          <div className="description-block">
            <div className="description-header">
              <h5 className="description-tag"><a href="#/">Fashion Manufacturer</a></h5>
              <div className="rating-block">
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline star_on"></span>
                <span className="ion-android-star-outline"></span>
                <span className="ion-android-star-outline"></span>
              </div>
            </div>
            <h3 className="post-title"> <a href="product-details.html"> zyfg men sweatshirts casual ethnic style pattern</a></h3>

            <p className="mb-0 price"><del className="price-old">€500.00</del> <span className="price-new">€500.00</span></p>
          </div>
        </div>
      </div>
          </div>
        </div>
      </section>
    )
  }
}

export default LatestProducts
