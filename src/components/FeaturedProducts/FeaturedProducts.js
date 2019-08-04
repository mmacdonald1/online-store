import React, {Component} from 'react'

class FeaturedProducts extends Component{
  render(){
    return(
      <div className="container pb-5 border-bottom">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas.</p>
        </div>
        <div className="ha-custom-tab">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="shop-tab" data-toggle="tab" href="#shop" role="tab" aria-controls="shop"
                    aria-selected="true">
                    <span className="icon"><img src={process.env.PUBLIC_URL+ "/handart/image/icon/tab-nav-icon-1.png"} alt=""/></span>
                    Shop
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="men-tab" data-toggle="tab" href="#men" role="tab" aria-controls="men"
                    aria-selected="true">
                    <span className="icon"><img src={process.env.PUBLIC_URL+ "/handart/image/icon/tab-nav-icon-2.png"} alt=""/></span>
                    Men
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="woman-tab" data-toggle="tab" href="#woman" role="tab" aria-controls="woman"
                    aria-selected="false">
                    <span className="icon"><img src={process.env.PUBLIC_URL+ "/handart/image/icon/tab-nav-icon-3.png"} alt=""/></span>
                    Women
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="elements-tab" data-toggle="tab" href="#elements" role="tab" aria-controls="elements"
                    aria-selected="false">
                    <span className="icon"><img src={process.env.PUBLIC_URL+ "/handart/image/icon/tab-nav-icon-4.png"} alt=""/></span>
                    Elements
                </a>
            </li>
        </ul>
        <div className="tab-content space-db--30" id="myTabContent">
            <div className="tab-pane fade show active" id="shop" role="tabpanel" aria-labelledby="shop-tab">
                <div className="row">
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
                                <h3 className="post-title"> <a href="product-details.html"> zyfg men sweatshirts casual ethnic
                                        style pattern</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-3.jpg"} alt=""/>
                                <div className="hover-content">
                                    <a href="product-details.html" className="hover-image">
                                        <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-4.jpg"} alt=""/>
                                    </a>

    <div className="hover-btns">
      <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
      <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
      <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
    </div>

                                </div>
                                <span className="product-badge">new</span>
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
                                <h3 className="post-title"> <a href="product-details.html">yuqidong sudaderas hombre hip hop
                                        zipper</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-5.jpg"} alt=""/>
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
                            </div>
                            <div className="description-block">
                                <div className="description-header">
                                    <h5 className="description-tag"><a href="#/">Inside Autumn Winter</a></h5>
                                    <div className="rating-block">
                                        <span className="ion-android-star-outline star_on"></span>
                                        <span className="ion-android-star-outline star_on"></span>
                                        <span className="ion-android-star-outline star_on"></span>
                                        <span className="ion-android-star-outline"></span>
                                        <span className="ion-android-star-outline"></span>
                                    </div>
                                </div>
                                <h3 className="post-title"> <a href="product-details.html">SexeMara Sweatshirts Hoodies Male
                                        Tracksuit</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-7.jpg"} alt=""/>
                                <div className="hover-content">
                                    <a href="product-details.html" className="hover-image">
                                        <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-8.jpg"} alt=""/>
                                    </a>

    <div className="hover-btns">
      <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
      <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
      <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
    </div>

                                </div>
                                <span className="product-badge">new</span>
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
                                <h3 className="post-title"> <a href="product-details.html"> zengker winter hooded with fat
                                        thickening </a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-9.jpg"} alt=""/>
                                <div className="hover-content">
                                    <a href="product-details.html" className="hover-image">
                                        <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-10.jpg"} alt=""/>
                                    </a>

    <div className="hover-btns">
      <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
      <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
      <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
    </div>

                                </div>
                                <span className="product-badge">new</span>
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
                                <h3 className="post-title"> <a href="product-details.html"> Vantiorango PU Patchwork Knitted
                                        Plus</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-11.jpg"} alt=""/>
                                <div className="hover-content">
                                    <a href="product-details.html" className="hover-image">
                                        <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-1.jpg"} alt=""/>
                                    </a>

    <div className="hover-btns">
      <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
      <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
      <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
    </div>

                                </div>
                                <span className="product-badge">new</span>
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
                                <h3 className="post-title"> <a href="product-details.html"> Vantiorango PU Patchwork Knitted
                                        Plus</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-13.jpg"} alt=""/>
                                <div className="hover-content">
                                    <a href="product-details.html" className="hover-image">
                                        <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-12.jpg"} alt=""/>
                                    </a>

    <div className="hover-btns">
      <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
      <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
      <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
    </div>

                                </div>
                                <span className="product-badge">new</span>
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
                                <h3 className="post-title"> <a href="product-details.html"> Vantiorango PU Patchwork Knitted
                                        Plus</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-6.jpg"} alt=""/>
                                <div className="hover-content">
                                    <a href="product-details.html" className="hover-image">
                                        <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-5.jpg"} alt=""/>
                                    </a>

    <div className="hover-btns">
      <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
      <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
      <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
    </div>

                                </div>
                                <span className="product-badge">new</span>
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
                                <h3 className="post-title"> <a href="product-details.html"> Vantiorango PU Patchwork Knitted
                                        Plus</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="men" role="tabpanel" aria-labelledby="men-tab">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-3.jpg"} alt=""/>
                                <div className="hover-content">
                                    <a href="product-details.html" className="hover-image">
                                        <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-4.jpg"} alt=""/>
                                    </a>

    <div className="hover-btns">
      <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
      <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
      <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
    </div>

                                </div>
                                <span className="product-badge">new</span>
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
                                <h3 className="post-title"> <a href="product-details.html">yuqidong sudaderas hombre hip hop
                                        zipper</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
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
                                <h3 className="post-title"> <a href="product-details.html"> zyfg men sweatshirts casual ethnic
                                        style pattern</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-7.jpg"} alt=""/>
                                <div className="hover-content">
                                    <a href="product-details.html" className="hover-image">
                                        <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-8.jpg"} alt=""/>
                                    </a>

    <div className="hover-btns">
      <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
      <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
      <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
    </div>

                                </div>
                                <span className="product-badge">new</span>
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
                                <h3 className="post-title"> <a href="product-details.html"> zengker winter hooded with fat
                                        thickening </a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-5.jpg"} alt=""/>
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
                            </div>
                            <div className="description-block">
                                <div className="description-header">
                                    <h5 className="description-tag"><a href="#/">Inside Autumn Winter</a></h5>
                                    <div className="rating-block">
                                        <span className="ion-android-star-outline star_on"></span>
                                        <span className="ion-android-star-outline star_on"></span>
                                        <span className="ion-android-star-outline star_on"></span>
                                        <span className="ion-android-star-outline"></span>
                                        <span className="ion-android-star-outline"></span>
                                    </div>
                                </div>
                                <h3 className="post-title"> <a href="product-details.html">SexeMara Sweatshirts Hoodies Male
                                        Tracksuit</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-11.jpg"}  alt=""/>
                                <div className="hover-content">
                                    <a href="product-details.html" className="hover-image">
                                        <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-1.jpg"}  alt=""/>
                                    </a>

    <div className="hover-btns">
      <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
      <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
      <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
    </div>

                                </div>
                                <span className="product-badge">new</span>
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
                                <h3 className="post-title"> <a href="product-details.html"> Vantiorango PU Patchwork Knitted
                                        Plus</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
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
                                <h3 className="post-title"> <a href="product-details.html"> Vantiorango PU Patchwork Knitted
                                        Plus</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-6.jpg"} alt=""/>
                                <div className="hover-content">
                                    <a href="product-details.html" className="hover-image">
                                        <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-5.jpg"}  alt=""/>
                                    </a>

    <div className="hover-btns">
      <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
      <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
      <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
    </div>

                                </div>
                                <span className="product-badge">new</span>
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
                                <h3 className="post-title"> <a href="product-details.html"> Vantiorango PU Patchwork Knitted
                                        Plus</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-13.jpg"}  alt=""/>
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
                                <h3 className="post-title"> <a href="product-details.html"> Vantiorango PU Patchwork Knitted
                                        Plus</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="tab-pane fade" id="woman" role="tabpanel" aria-labelledby="woman-tab">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 mb--30">
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
                                <h3 className="post-title"> <a href="product-details.html"> zyfg men sweatshirts casual ethnic
                                        style pattern</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
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
                                <h3 className="post-title"> <a href="product-details.html">yuqidong sudaderas hombre hip hop
                                        zipper</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
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
                                <h3 className="post-title"> <a href="product-details.html"> Vantiorango PU Patchwork Knitted
                                        Plus</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
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
                            </div>
                            <div className="description-block">
                                <div className="description-header">
                                    <h5 className="description-tag"><a href="#/">Inside Autumn Winter</a></h5>
                                    <div className="rating-block">
                                        <span className="ion-android-star-outline star_on"></span>
                                        <span className="ion-android-star-outline star_on"></span>
                                        <span className="ion-android-star-outline star_on"></span>
                                        <span className="ion-android-star-outline"></span>
                                        <span className="ion-android-star-outline"></span>
                                    </div>
                                </div>
                                <h3 className="post-title"> <a href="product-details.html">SexeMara Sweatshirts Hoodies Male
                                        Tracksuit</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
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
                                <h3 className="post-title"> <a href="product-details.html"> zengker winter hooded with fat
                                        thickening </a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-6.jpg"} alt=""/>
                                <div className="hover-content">
                                    <a href="product-details.html" className="hover-image">
                                        <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-5.jpg"}  alt=""/>
                                    </a>

    <div className="hover-btns">
      <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
      <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
      <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
    </div>

                                </div>
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
                                <h3 className="post-title"> <a href="product-details.html"> Vantiorango PU Patchwork Knitted
                                        Plus</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-11.jpg"}  alt=""/>
                                <div className="hover-content">
                                    <a href="product-details.html" className="hover-image">
                                        <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-1.jpg"}  alt=""/>
                                    </a>

    <div className="hover-btns">
      <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
      <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
      <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
    </div>

                                </div>
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
                                <h3 className="post-title"> <a href="product-details.html"> Vantiorango PU Patchwork Knitted
                                        Plus</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-13.jpg"}  alt=""/>
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
                                <h3 className="post-title"> <a href="product-details.html"> Vantiorango PU Patchwork Knitted
                                        Plus</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="elements" role="tabpanel" aria-labelledby="elements-tab">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 mb--30">
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
                                <h3 className="post-title"> <a href="product-details.html"> zyfg men sweatshirts casual ethnic
                                        style pattern</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 mb--30">
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
                            </div>
                            <div className="description-block">
                                <div className="description-header">
                                    <h5 className="description-tag"><a href="#/">Inside Autumn Winter</a></h5>
                                    <div className="rating-block">
                                        <span className="ion-android-star-outline star_on"></span>
                                        <span className="ion-android-star-outline star_on"></span>
                                        <span className="ion-android-star-outline star_on"></span>
                                        <span className="ion-android-star-outline"></span>
                                        <span className="ion-android-star-outline"></span>
                                    </div>
                                </div>
                                <h3 className="post-title"> <a href="product-details.html">SexeMara Sweatshirts Hoodies Male
                                        Tracksuit</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-6.jpg"} alt=""/>
                                <div className="hover-content">
                                    <a href="product-details.html" className="hover-image">
                                        <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-5.jpg"}  alt=""/>
                                    </a>

    <div className="hover-btns">
      <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
      <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
      <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
    </div>

                                </div>
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
                                <h3 className="post-title"> <a href="product-details.html"> Vantiorango PU Patchwork Knitted
                                        Plus</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
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
                                <h3 className="post-title"> <a href="product-details.html"> zengker winter hooded with fat
                                        thickening </a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
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
                                <h3 className="post-title"> <a href="product-details.html"> Vantiorango PU Patchwork Knitted
                                        Plus</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-11.jpg"}  alt=""/>
                                <div className="hover-content">
                                    <a href="product-details.html" className="hover-image">
                                        <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-1.jpg"}  alt=""/>
                                    </a>

    <div className="hover-btns">
      <a href="cart.html" className="sin-btn"><i className="ion-bag"></i></a>
      <a href="compare.html" className="sin-btn"><i className="ion-android-options"></i></a>
      <a href="#/" className="sin-btn" data-toggle="modal" data-target="#quickModal"><i className="ion-android-open"></i></a>
    </div>

                                </div>
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
                                <h3 className="post-title"> <a href="product-details.html"> Vantiorango PU Patchwork Knitted
                                        Plus</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
                        <div className="product-card">
                            <div className="image">
                                <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/product-13.jpg"}  alt=""/>
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
                                <h3 className="post-title"> <a href="product-details.html"> Vantiorango PU Patchwork Knitted
                                        Plus</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb--30">
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
                                <h3 className="post-title"> <a href="product-details.html">yuqidong sudaderas hombre hip hop
                                        zipper</a></h3>

                                <p className="mb-0 price"><del className="price-old">€500.00</del> <span
                                        className="price-new">€500.00</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
      </div>
    )
  }
}

export default FeaturedProducts
