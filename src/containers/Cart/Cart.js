import React,{Component} from 'react'

class Cart extends Component{
  render(){
    return(
      <main className="cart-page-main-block inner-page-sec-padding-top">
        <div className="cart_area cart-area-padding sp-inner-page--top ">
          <div className="container">
            <div className="page-section-title">
              <h1>SHOPPING CART</h1>
            </div>
            <div className="row">
              <div className="col-12">
                <form action="#" className>
                  {/* Cart Table */}
                  <div className="cart-table table-responsive mb--40">
                    <table className="table">
                      {/* Head Row */}
                      <thead>
                        <tr>
                          <th className="pro-remove" />
                          <th className="pro-thumbnail">Image</th>
                          <th className="pro-title">Product</th>
                          <th className="pro-price">Price</th>
                          <th className="pro-quantity">Quantity</th>
                          <th className="pro-subtotal">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Product Row */}
                        <tr>
                          <td className="pro-remove"><a href="#"><i className="far fa-trash-alt" /></a></td>
                          <td className="pro-thumbnail"><a href="#"><img src="image/products/home-1/product-1.jpg" alt="Product" /></a></td>
                          <td className="pro-title"><a href="#">Rinosin Glasses</a></td>
                          <td className="pro-price"><span>$395.00</span></td>
                          <td className="pro-quantity">
                            <div className="pro-qty">
                              <div className="count-input-block">
                                <input type="number" className="form-control text-center" defaultValue={1} />
                              </div>
                            </div>
                          </td>
                          <td className="pro-subtotal"><span>$395.00</span></td>
                        </tr>
                        {/* Product Row */}
                        <tr>
                          <td className="pro-remove"><a href="#"><i className="far fa-trash-alt" /></a></td>
                          <td className="pro-thumbnail"><a href="#"><img src="image/products/home-1/product-2.jpg" alt="Product" /></a></td>
                          <td className="pro-title"><a href="#">Rinosin Glasses</a></td>
                          <td className="pro-price"><span>$395.00</span></td>
                          <td className="pro-quantity">
                            <div className="pro-qty">
                              <div className="count-input-block">
                                <input type="number" className="form-control text-center" defaultValue={1} />
                              </div>
                            </div>
                          </td>
                          <td className="pro-subtotal"><span>$395.00</span></td>
                        </tr>
                        {/* Discount Row  */}
                        <tr>
                          <td colSpan={6} className="actions">
                            <div className="coupon-block">
                              <div className="coupon-text">
                                <label htmlFor="coupon_code">Coupon:</label>
                                <input type="text" name="coupon_code" className="input-text" id="coupon_code" defaultValue placeholder="Coupon code" />
                              </div>
                              <div className="coupon-btn">
                                <input type="submit" className="btn-black" name="apply_coupon" defaultValue="Apply coupon" />
                              </div>
                            </div>
                            <div className="update-block text-right">
                              <input type="submit" className="btn-black" name="update_cart" defaultValue="Update cart" />
                              <input type="hidden" id="_wpnonce" name="_wpnonce" defaultValue="05741b501f" /><input type="hidden" name="_wp_http_referer" defaultValue="/petmark/cart/" />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-section-2 sp-inner-page--bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mb--30 mb-lg-0">
                {/* slide Block 5 / Normal Slider */}
                <div className="cart-block-title">
                  <h2>YOU MAY BE INTERESTED IN…</h2>
                </div>
                <div className="product-slider handart-slick-slider arrow-type-two" data-slick-setting="{
							          &quot;autoplay&quot;: true,
							          &quot;autoplaySpeed&quot;: 8000,
							          &quot;slidesToShow&quot;: 2,
							          &quot;arrows&quot;: true,
							          &quot;prevArrow&quot;:{&quot;buttonClass&quot;: &quot;slick-prev&quot;,&quot;iconClass&quot;:&quot;fa fa-chevron-left&quot;},
							          &quot;nextArrow&quot;:{&quot;buttonClass&quot;: &quot;slick-next&quot;,&quot;iconClass&quot;:&quot;fa fa-chevron-right&quot;}
							          }" data-slick-responsive="[
							                                  {&quot;breakpoint&quot;:991, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3} },
							                                  {&quot;breakpoint&quot;:768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2} },
							                                  {&quot;breakpoint&quot;:480, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1} }
							                              ]">
                  <div className="single-slide">
                    <div className="product-card">
                      <div className="image">
                        <img src="image/products/home-1/product-1.jpg" alt="" />
                        <div className="hover-content">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/home-1/product-2.jpg" alt="" />
                          </a>
                        </div>
                        <span className="product-badge">new</span>
                        <span className="product-badge-2">-5%</span>
                      </div>
                      <div className="description-block">
                        <div className="description-header">
                          <h5 className="description-tag"><a href>Fashion Manufacturer</a></h5>
                          <div className="rating-block">
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline" />
                            <span className="ion-android-star-outline" />
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
                        <img src="image/products/home-1/product-3.jpg" alt="" />
                        <div className="hover-content">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/home-1/product-4.jpg" alt="" />
                          </a>
                        </div>
                        <span className="product-badge">new</span>
                        <span className="product-badge-2">-5%</span>
                      </div>
                      <div className="description-block">
                        <div className="description-header">
                          <h5 className="description-tag"><a href>Fashion Manufacturer</a></h5>
                          <div className="rating-block">
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline" />
                            <span className="ion-android-star-outline" />
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
                        <img src="image/products/home-1/product-5.jpg" alt="" />
                        <div className="hover-content">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/home-1/product-6.jpg" alt="" />
                          </a>
                        </div>
                        <span className="product-badge">new</span>
                        <span className="product-badge-2">-5%</span>
                      </div>
                      <div className="description-block">
                        <div className="description-header">
                          <h5 className="description-tag"><a href>Fashion Manufacturer</a></h5>
                          <div className="rating-block">
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline" />
                            <span className="ion-android-star-outline" />
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
                        <img src="image/products/home-1/product-7.jpg" alt="" />
                        <div className="hover-content">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/home-1/product-8.jpg" alt="" />
                          </a>
                        </div>
                        <span className="product-badge">new</span>
                        <span className="product-badge-2">-5%</span>
                      </div>
                      <div className="description-block">
                        <div className="description-header">
                          <h5 className="description-tag"><a href>Fashion Manufacturer</a></h5>
                          <div className="rating-block">
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline" />
                            <span className="ion-android-star-outline" />
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
                        <img src="image/products/home-1/product-9.jpg" alt="" />
                        <div className="hover-content">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/home-1/product-10.jpg" alt="" />
                          </a>
                        </div>
                        <span className="product-badge">new</span>
                        <span className="product-badge-2">-5%</span>
                      </div>
                      <div className="description-block">
                        <div className="description-header">
                          <h5 className="description-tag"><a href>Fashion Manufacturer</a></h5>
                          <div className="rating-block">
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline" />
                            <span className="ion-android-star-outline" />
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
                        <img src="image/products/home-1/product-11.jpg" alt="" />
                        <div className="hover-content">
                          <a href="product-details.html" className="hover-image">
                            <img src="image/products/home-1/product-12.jpg" alt="" />
                          </a>
                        </div>
                        <span className="product-badge">new</span>
                        <span className="product-badge-2">-5%</span>
                      </div>
                      <div className="description-block">
                        <div className="description-header">
                          <h5 className="description-tag"><a href>Fashion Manufacturer</a></h5>
                          <div className="rating-block">
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline star_on" />
                            <span className="ion-android-star-outline" />
                            <span className="ion-android-star-outline" />
                          </div>
                        </div>
                        <h3 className="post-title"> <a href="product-details.html"> zyfg men sweatshirts casual ethnic style pattern</a></h3>
                        <p className="mb-0 price"><del className="price-old">€500.00</del> <span className="price-new">€500.00</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cart Summary */}
              <div className="col-lg-6 col-12 d-flex">
                <div className="cart-summary">
                  <div className="cart-summary-wrap">
                    <h4><span>Cart Summary</span></h4>
                    <p>Sub Total <span className="text-primary">$1250.00</span></p>
                    <p>Shipping Cost <span className="text-primary">$00.00</span></p>
                    <h2>Grand Total <span className="text-primary">$1250.00</span></h2>
                  </div>
                  <div className="cart-summary-button">
                    <a href="checkout.html" className="checkout-btn c-btn">Checkout</a>
                    <button className="update-btn c-btn">Update Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Cart
