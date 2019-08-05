import React, {Component} from 'react'

class FeaturedItems extends Component{
  render(){
    return(
      <div className="col-lg-3 col-sm-6 mb--30">
          <div className="product-card">
              <div className="image">
                  <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-1.jpg"} alt=""/>
                  <div className="hover-content">
                      <a href="product-details.html" className="hover-image">
                          <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-2.jpg"} alt=""/>
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
                  <h3 className="post-title"> <a href="product-details.html">{this.props.product.title}</a></h3>

                  <p className="mb-0 price"><del className="price-old">{this.props.product.originalPrice}</del> <span
                          className="price-new">{this.props.product.newPrice}</span></p>
              </div>
          </div>
      </div>
    )
  }
}

export default FeaturedItems
