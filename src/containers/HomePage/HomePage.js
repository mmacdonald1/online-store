import React, {Component} from 'react'

class HomePage extends Component{
  render(){
    return(
      <div className="site-wrapper" id="top">
        <header className="site-header ha-header-1 absolute-header sticky-init fixed-header d-lg-block d-none">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="main-navigation">
                  <ul className="main-menu @@menuColor">
        <li className="menu-item has-children">
          <a href="#/">Home</a>
          <ul className="sub-menu">
            <li> <a href="index.html">Home One</a></li>
            <li> <a href="index-2.html">Home Two</a></li>
            <li> <a href="index-3.html">Home Three</a></li>
            <li> <a href="index-4.html">Home Four</a></li>
          </ul>
        </li>
        {/* Shop */}
        <li className="menu-item has-children mega-menu">
          <a href="#/">shop</a>
          <ul className="sub-menu four-column">
            <li className="cus-col-25">
              <h3 className="menu-title"><a href="#/">Shop Grid </a></h3>
              <ul className="mega-single-block">
                <li><a href="shop-grid.html">Fullwidth</a></li>
                <li><a href="shop-grid--box-layout.html">Fullwidth (box layout)</a></li>
                <li><a href="shop-grid-left-sidebar.html">left Sidebar</a></li>
                <li><a href="shop-grid-left-sidebar--box-layout.html">left Sidebar(box layout)</a></li>
                <li><a href="shop-grid-right-sidebar.html">Right Sidebar</a></li>
                <li><a href="shop-grid-right-sidebar--box-layout.html">Right Sidebar(box layout)</a></li>
              </ul>
            </li>
            <li className="cus-col-25">
              <h3 className="menu-title"> <a href="#/">Shop List</a></h3>
              <ul className="mega-single-block">
                <li><a href="shop-list.html">Fullwidth</a></li>
                <li><a href="shop-list--box-layout.html">Fullwidth (box layout)</a></li>
                <li><a href="shop-list-left-sidebar.html">left Sidebar</a></li>
                <li><a href="shop-list-left-sidebar--box-layout.html">left Sidebar(box layout)</a></li>
                <li><a href="shop-list-right-sidebar.html">Right Sidebar</a></li>
                <li><a href="shop-list-right-sidebar--box-layout.html">Right Sidebar(box layout)</a></li>
              </ul>
            </li>
            <li className="cus-col-25">
              <h3 className="menu-title"> <a href="#/">Product Details 1</a></h3>
              <ul className="mega-single-block">
                <li><a href="product-details.html">Product Details Page</a></li>
                <li><a href="product-details-affiliate.html">Product Details Affiliate</a></li>
                <li><a href="product-details-group.html">Product Details Group</a></li>
                <li><a href="product-details-variable.html">Product Details Variables</a></li>
              </ul>
            </li>
            <li className="cus-col-25">
              <h3 className="menu-title"><a href="#/">Product Details 2</a></h3>
              <ul className="mega-single-block">
                <li><a href="product-details-left-thumbnail.html">left Thumbnail</a></li>
                <li><a href="product-details-right-thumbnail.html">Right Thumbnail</a></li>
                <li><a href="product-details-left-gallery.html">Left Gallery</a></li>
                <li><a href="product-details-right-gallery.html">Right Gallery</a></li>
              </ul>
            </li>
          </ul>
        </li>
        {/* Pages */}
        <li className="menu-item has-children">
          <a href="#/">Pages</a>
          <ul className="sub-menu">
            <li> <a href="cart.html">Cart</a></li>
            <li> <a href="checkout.html">Checkout</a></li>
            <li> <a href="compare.html">Compare</a></li>
            <li> <a href="wishlist.html">Wishlist</a></li>
            <li> <a href="login-register.html">Login Register</a></li>
            <li> <a href="my-account.html">My Account</a></li>
          </ul>
        </li>
        {/* Blog */}
        <li className="menu-item has-children mega-menu">
          <a href="#/">Blog</a>
          <ul className="sub-menu three-column">
            <li className="cus-col-33">
              <h3 className="menu-title"><a href="#/">Blog Grid</a></h3>
              <ul className="mega-single-block">
                <li><a href="blog.html">Full Widh (Default)</a></li>
                <li><a href="blog-left-sidebar.html">left Sidebar</a></li>
                <li><a href="blog-right-sidebar.html">Right Sidebar</a></li>
              </ul>
            </li>
            <li className="cus-col-33">
              <h3 className="menu-title"><a href="#/">Blog List </a></h3>
              <ul className="mega-single-block">
                <li><a href="blog-list.html">Full Widh (Default)</a></li>
                <li><a href="blog-list-left-sidebar.html">left Sidebar</a></li>
                <li><a href="blog-list-right-sidebar.html">Right Sidebar</a></li>
              </ul>
            </li>
            <li className="cus-col-33">
              <h3 className="menu-title"><a href="#/">Blog Details</a></h3>
              <ul className="mega-single-block">
                <li><a href="blog-details.html">Image Format (Default)</a></li>
                <li><a href="blog-details-gallery.html">Gallery Format</a></li>
                <li><a href="blog-details-audio.html">Audio Format</a></li>
                <li><a href="blog-details-video.html">Video Format</a></li>
                <li><a href="blog-details-left-sidebar.html">left Sidebar</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="contact.html">Contact</a>
        </li>
      </ul>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3 offset-lg-1 offset-xl-0">
                <div className="site-brand">
                 <a href="index.html">
                   <img src="image/main-logo-white.png" alt=""/>
                 </a>
                </div>
              </div>
              <div className="col-lg-3 col-xl-4">
                <div className="header-top-widget">
                  <ul className="header-links">
        <li className="sin-link">
          <a href="#/" className="search-trigger link-icon"><i className="ion-ios-search-strong"></i></a>
        </li>
        <li className="sin-link">
          <a href="#/" className="cart-link link-icon"><i className="ion-bag"></i></a>
          <div className="sin-dropdown cart-dropdown">
            <div className="inner-single-block">
              <div className="cart-product">
                <div className="icon">
                  <img src="image/products/home-1/cart-product-1.jpg" alt=""/>
                  <div className="product-badge-3">1x</div>
                </div>
                <div className="description">
                  <h4>Yuqidong Sudaderas</h4>
                  <span className="price">€500.00</span>
                  <ul className="attr-content">
                    <li><span>size :</span> S</li>
                    <li><span>color :</span> Beige</li>
                  </ul>
                </div>
                <a href="#/" className="cart-item-cross">
                  <i className="fas fa-times"></i>
                </a>
              </div>
            </div>
            <div className="inner-single-block">
              <ul className="cart-details">
                <li><span className="label">Subtotal</span>  <span className="value">€500.00</span></li>
                <li><span className="label">Shipping</span>  <span className="value">€7.00</span></li>
                <li><span className="label">Taxes</span>  <span className="value">€0.00</span></li>
                <li><span className="label">Total</span>  <span className="value">€507.00</span></li>
              </ul>
            </div>
            <div className="inner-single-block">
              <a href="checkout.html" className="btn w-100">Checkout</a>
            </div>
          </div>
        </li>
        <li className="sin-link">
          <a href="#/" className="link-icon hamburgur-icon"><i className="ion-navicon"></i></a>
          <div className="sin-dropdown option-dropdown">
            <div className="inner-single-block">
              <h4 className="option-title">English <i className="fas fa-angle-down"></i></h4>
              <ul className="option-list">
                <li><a href="#/">English</a></li>
                <li><a href="#/">اللغة العربية</a></li>
              </ul>
            </div>
            <div className="inner-single-block">
              <h4 className="option-title">EUR <i className="fas fa-angle-down"></i></h4>
              <ul className="option-list">
                <li><a href="#/">€ Euro</a></li>
                <li><a href="#/">$ US Dollar</a></li>
              </ul>
            </div>
            <div className="inner-single-block">
              <h4 className="option-title">my account</h4>
              <ul className="option-list">
                <li><a href="my-account.html">My account</a></li>
                <li><a href="checkout.html">Checkout</a></li>
                <li><a href="login-register.html">Sign in</a></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>

      <div className="search-wrapper">
        <div className="search-wrapper-inner">
          <div className="container">
            <button className="search-dismiss">
              <i className="fas fa-times"></i>
            </button>
            <form action="#">
              <div className="search-box">
                <input type="text" placeholder="Search Our catalog"/>
                <button className="search-button"><i className="fas fa-search"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      <header className="mobile-header d-lg-none absolute-header">
        <div className="container">
          {/* <div className="mobile-top-section">
            <ul className="currency-lan-list">
              <li className="dropdown-trigger">
                <a href="#/">USD $<i className="fas fa-angle-down"></i></a>
                <ul className="drop-box">
                  <li>USD $</li>
                  <li>EUR €</li>
                </ul>
              </li>
              <li className="dropdown-trigger">
                <a href="#/">ENG<i className="fas fa-angle-down"></i></a>
                <ul className="drop-box">
                  <li>Eng</li>
                  <li>Ban</li>
                </ul>
              </li>
            </ul>
          </div> */}
          <div className="row align-items-end">
            <div className="col-md-4 col-7">

                <a href="index.html" className="site-brand">
                  <img src="image/main-logo-white.png" alt=""/>
                </a>


            </div>
            <div className="col-md-8 col-5 text-right">
              <div className="mobile-header-btns header-top-widget ">
                <ul className="header-links">
                  <li className="sin-link">
                    <a href="cart.html" className="cart-link link-icon"><i className="ion-bag"></i></a>
                  </li>
                  <li className="sin-link">
                    <a href="#/" className="link-icon hamburgur-icon off-canvas-btn"><i className="ion-navicon"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/*Off Canvas Navigation Start*/}
      <aside className="off-canvas-wrapper">
        <div className="btn-close-off-canvas">
          <i className="ion-android-close"></i>
        </div>
        <div className="off-canvas-inner">
          {/* search box start */}
          <div className="search-box offcanvas">
            <form>
              <input type="text" placeholder="Search Here"/>
              <button className="search-btn"><i className="ion-ios-search-strong"></i></button>
            </form>
          </div>
          {/* search box end */}
          {/* mobile menu start */}
          <div className="mobile-navigation">
            {/* mobile menu navigation start */}
            <nav className="off-canvas-nav">
              <ul className="mobile-menu">
                <li className="menu-item-has-children">
                  <a href="#/">Home</a>
                  <ul className="sub-menu">
                    <li> <a href="index.html">Home One</a></li>
                    <li> <a href="index-2.html">Home Two</a></li>
                    <li> <a href="index-3.html">Home Three</a></li>
                    <li> <a href="index-4.html">Home Four</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#/">Blog</a>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <a href="#/">Blog Grid</a>
                      <ul className="sub-menu">
                        <li><a href="blog.html">Full Widh (Default)</a></li>
                        <li><a href="blog-left-sidebar.html">left Sidebar</a></li>
                        <li><a href="blog-right-sidebar.html">Right Sidebar</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#/">Blog List</a>
                      <ul className="sub-menu">
                        <li><a href="blog-list.html">Full Widh (Default)</a></li>
                        <li><a href="blog-list-left-sidebar.html">left Sidebar</a></li>
                        <li><a href="blog-list-right-sidebar.html">Right Sidebar</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                    <a href="#/">Blog Details</a>
                    <ul className="sub-menu">
                      <li><a href="blog-details.html">Image Format (Default)</a></li>
                      <li><a href="blog-details-gallery.html">Gallery Format</a></li>
                      <li><a href="blog-details-audio.html">Audio Format</a></li>
                      <li><a href="blog-details-video.html">Video Format</a></li>
                      <li><a href="blog-details-left-sidebar.html">left Sidebar</a></li>
                    </ul>
                    </li>
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <a href="#/">Shop</a>
                  <ul className="sub-menu">
                    <li className="menu-item-has-children">
                      <a href="#/">Shop Grid</a>
                      <ul className="sub-menu">
                        <li><a href="shop-grid.html">Fullwidth</a></li>
                        <li><a href="shop-grid--box-layout.html">Fullwidth (box layout)</a></li>
                        <li><a href="shop-grid-left-sidebar.html">left Sidebar</a></li>
                        <li><a href="shop-grid-left-sidebar--box-layout.html">left Sidebar(box layout)</a></li>
                        <li><a href="shop-grid-right-sidebar--box-layout.html">Right Sidebar</a></li>
                        <li><a href="shop-grid-right-sidebar.html">Right Sidebar(box layout)</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#/">Shop List</a>
                      <ul className="sub-menu">
                        <li><a href="shop-list.html">Fullwidth</a></li>
                        <li><a href="shop-list--box-layout.html">Fullwidth (box layout)</a></li>
                        <li><a href="shop-list-left-sidebar.html">left Sidebar</a></li>
                        <li><a href="shop-list-left-sidebar--box-layout.html">left Sidebar(box layout)</a></li>
                        <li><a href="shop-list-right-sidebar.html">Right Sidebar</a></li>
                        <li><a href="shop-list-right-sidebar--box-layout.html">Right Sidebar(box layout)</a></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                    <a href="#/">Product Details 1</a>
                    <ul className="sub-menu">
                      <li><a href="product-details.html">Product Details Page</a></li>
                      <li><a href="product-details-affiliate.html">Product Details Affiliate</a></li>
                      <li><a href="product-details-group.html">Product Details Group</a></li>
                      <li><a href="product-details-variable.html">Product Details Variables</a></li>
                    </ul>
                    </li>
                    <li className="menu-item-has-children">
                    <a href="#/">Product Details 2</a>
                    <ul className="sub-menu">
                    <li><a href="product-details-left-thumbnail.html">left Thumbnail</a></li>
                    <li><a href="product-details-right-thumbnail.html">Right Thumbnail</a></li>
                    <li><a href="product-details-left-gallery.html">Left Gallery</a></li>
                    <li><a href="product-details-right-gallery.html">Right Gallery</a></li>
                    </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#/">Pages</a>
                  <ul className="sub-menu">
                    <li> <a href="cart.html">Cart</a></li>
                    <li> <a href="checkout.html">Checkout</a></li>
                    <li> <a href="compare.html">Compare</a></li>
                    <li> <a href="wishlist.html">Wishlist</a></li>
                    <li> <a href="login-register.html">Login Register</a></li>
                    <li> <a href="my-account.html">My Account</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>

              </ul>
            </nav>
            {/* mobile menu navigation end */}
          </div>
          {/* mobile menu end */}
          <nav className="off-canvas-nav">
            <ul className="mobile-menu currency-menu">
              <li className="menu-item-has-children">
                <a href="#/">Currency - USD $ <i className="fas fa-angle-down"></i></a>
                <ul className="sub-menu">
                  <li> <a href="cart.html">USD $</a></li>
                  <li> <a href="checkout.html">EUR €</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#/">Lang - Eng<i className="fas fa-angle-down"></i></a>
                <ul className="sub-menu">
                  <li>Eng</li>
                  <li>Ban</li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="off-canvas-bottom">
            <div className="contact-list mb--10">
              <a href="#/" className="sin-contact"><i className="fas fa-mobile-alt"></i>(12345) 78790220</a>
              <a href="#/" className="sin-contact"><i className="fas fa-envelope"></i>examle@handart.com</a>
            </div>
            <div className="header-social social-normal">
              <a href="#/" className="single-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#/" className="single-icon"><i className="fab fa-twitter"></i></a>
              <a href="#/" className="single-icon"><i className="fas fa-rss"></i></a>
              <a href="#/" className="single-icon"><i className="fab fa-youtube"></i></a>
              <a href="#/" className="single-icon"><i className="fab fa-google-plus-g"></i></a>
              <a href="#/" className="single-icon"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </aside>
      {/*Off Canvas Navigation End*/}






      <section className="hero-area section-margin">
          <div className="handart-slick-slider hero-slider" data-slick-setting='{
              "autoplay": true,
              "autoplaySpeed": 8000,
              "slidesToShow": 1,
              "arrows": true,
              "prevArrow":{"buttonclassName": "slick-prev","iconclassName":"ion-ios-arrow-left"},
              "nextArrow":{"buttonclassName": "slick-next","iconclassName":"ion-ios-arrow-right"}
          }'>
              <div className="single-slider hero-content bg-image" data-bg="image/bg-images/home-1/home-slider-image-1.jpg">
                  <div className="container position-relative">
                      <div className="row">
                          <div className="col-lg-12 text-center">
                              <div className="icon">
                                  <img src="image/icon/slider-icon-1.png" alt=""/>
                              </div>
                              <h1>Hand Made Product</h1>

                              <p>Typi Non Habent Claritatem Insitam Est Usus Legentis In Qui Facit</p>

                              <div className="slider-btn">
                                  <a href="shop-grid.html" className="btn btn-outlined">Shop Now</a>
                              </div>

                          </div>
                      </div>

                  </div>
                  <span className="herobanner-progress"></span>
              </div>
              <div className="single-slider hero-content bg-image" data-bg="image/bg-images/home-1/home-slider-image-2.jpg">
                  <div className="container position-r
                  elative">
                      <div className="row">
                          <div className="col-lg-12 text-center">
                              <div className="icon">
                                  <img src="image/icon/slider-icon-2.png" alt=""/>
                              </div>
                              <h1>Sale Off Hand Made</h1>

                              <p>Typi Non Habent Claritatem Insitam Est Usus Legentis In Qui Facit</p>

                              <div className="slider-btn">
                                  <a href="shop-grid.html" className="btn btn-outlined">Shop Now</a>
                              </div>

                          </div>
                      </div>
                  </div>
                  <span className="herobanner-progress"></span>
              </div>
              <div className="single-slider hero-content bg-image" data-bg="image/bg-images/home-1/home-slider-image-2.jpg">
                  <div className="container position-r
                  elative">
                      <div className="row">
                          <div className="col-lg-12 text-center">
                              <div className="icon">
                                  <img src="image/icon/slider-icon-3.png" alt=""/>
                              </div>
                              <h1>Home Decor Product</h1>

                              <p>Typi Non Habent Claritatem Insitam Est Usus Legentis In Qui Facit</p>

                              <div className="slider-btn">
                                  <a href="shop-grid.html" className="btn btn-outlined">Shop Now</a>
                              </div>

                          </div>
                      </div>
                  </div>
                  <span className="herobanner-progress"></span>
              </div>
          </div>
      </section>
      <section className="section-margin welcome-section">
          <div className="container">
              <div className="row justify-content-center section-padding border-bottom">
                  <div className="col-lg-8">
                      <div className="welcome-content">
                          <h6 className="title-xs">Who We Are</h6>
                          <div className="section-title">
                              <h2>Welcome To Handart</h2>
                              <div className="title-sep">
                                  <img src="image/icon/title-sep-icon.png" alt=""/>
                              </div>
                          </div>
                         <article className="welcome-description">
                             <h4 className="sr-only">Welcome Article</h4>
                              <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                                  nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
                                  duis
                                  dolore te feugait nulla facilisi.</p>
                         </article>
                          <div className="author-block">
                              <a href="#/"> <span className="font-weight-mid text-black text-uppercase">Jhon doe</span> - CEO Handart</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Featured Products</h2>
            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas.</p>
          </div>
          <div className="ha-custom-tab">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                  <a className="nav-link active" id="shop-tab" data-toggle="tab" href="#shop" role="tab" aria-controls="shop"
                      aria-selected="true">
                      <span className="icon"><img src="image/icon/tab-nav-icon-1.png" alt=""/></span>
                      Shop
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" id="men-tab" data-toggle="tab" href="#men" role="tab" aria-controls="men"
                      aria-selected="true">
                      <span className="icon"><img src="image/icon/tab-nav-icon-2.png" alt=""/></span>
                      Men
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" id="woman-tab" data-toggle="tab" href="#woman" role="tab" aria-controls="woman"
                      aria-selected="false">
                      <span className="icon"><img src="image/icon/tab-nav-icon-3.png" alt=""/></span>
                      Women
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" id="elements-tab" data-toggle="tab" href="#elements" role="tab" aria-controls="elements"
                      aria-selected="false">
                      <span className="icon"><img src="image/icon/tab-nav-icon-4.png" alt=""/></span>
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
                                  <img src="image/products/home-1/product-1.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-2.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-3.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-4.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-5.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-6.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-7.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-8.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-9.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-10.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-11.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-1.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-13.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-12.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-6.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-5.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-3.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-4.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-1.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-2.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-7.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-8.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-5.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-6.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-11.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-1.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-9.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-10.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-6.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-5.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-13.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-12.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-1.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-2.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-3.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-4.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-9.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-10.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-5.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-6.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-7.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-8.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-6.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-5.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-11.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-1.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-13.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-12.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-1.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-2.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-5.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-6.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-6.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-5.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-7.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-8.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-9.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-10.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-11.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-1.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-13.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-12.jpg" alt=""/>
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
                                  <img src="image/products/home-1/product-3.jpg" alt=""/>
                                  <div className="hover-content">
                                      <a href="product-details.html" className="hover-image">
                                          <img src="image/products/home-1/product-4.jpg" alt=""/>
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
      </section>
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
                        <img src="image/others/testimonial-avatar.png" alt=""/>
                      </div>
                      <div className="testimonial-content">
                        <p>
                          Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer
                          possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes
                          demonstraverunt lectores
                          legere me lius quod ii legunt saepius.
                        </p>
                        <span className="quote-image">
                          <img src="image/icon/quotation.png" alt=""/>
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
                        <img src="image/others/testimonial-avatar.png" alt=""/>
                      </div>
                      <div className="testimonial-content">
                        <p>
                          Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer
                          possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes
                          demonstraverunt lectores
                          legere me lius quod ii legunt saepius.
                        </p>
                        <span className="quote-image">
                          <img src="image/icon/quotation.png" alt=""/>
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
                        <img src="image/others/testimonial-avatar.png" alt=""/>
                      </div>
                      <div className="testimonial-content">
                        <p>
                          Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer
                          possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes
                          demonstraverunt lectores
                          legere me lius quod ii legunt saepius.
                        </p>
                        <span className="quote-image">
                          <img src="image/icon/quotation.png" alt=""/>
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
            <img src="image/products/home-1/product-1.jpg" alt=""/>
            <div className="hover-content">
              <a href="product-details.html" className="hover-image">
                <img src="image/products/home-1/product-2.jpg" alt=""/>
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
            <img src="image/products/home-1/product-3.jpg" alt=""/>
            <div className="hover-content">
              <a href="product-details.html" className="hover-image">
                <img src="image/products/home-1/product-4.jpg" alt=""/>
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
            <img src="image/products/home-1/product-5.jpg" alt=""/>
            <div className="hover-content">
              <a href="product-details.html" className="hover-image">
                <img src="image/products/home-1/product-6.jpg" alt=""/>
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
            <img src="image/products/home-1/product-7.jpg" alt=""/>
            <div className="hover-content">
              <a href="product-details.html" className="hover-image">
                <img src="image/products/home-1/product-8.jpg" alt=""/>
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
            <img src="image/products/home-1/product-9.jpg" alt=""/>
            <div className="hover-content">
              <a href="product-details.html" className="hover-image">
                <img src="image/products/home-1/product-10.jpg" alt=""/>
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
            <img src="image/products/home-1/product-11.jpg" alt=""/>
            <div className="hover-content">
              <a href="product-details.html" className="hover-image">
                <img src="image/products/home-1/product-12.jpg" alt=""/>
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


      <section className="section-padding">
        <h2 className="sr-only">Promotion Imgaes</h2>
        <div className="container">
          <div className="row space-db--30">
            <div className="col-lg-6 mb--30">
              <a href="#/" className="overflow-image">
                <img src="image/others/promo-images.jpg" alt=""/>
              </a>
            </div>
            <div className="col-lg-6 mb--30">
              <a href="#/" className="overflow-image">
                <img src="image/others/promo-images-2.jpg" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-margin">
          <h2 className="sr-only">Method section</h2>
        <div className="container">
          <div className="row  border-bottom section-padding space-dt--30">
            <div className="col-md-4 col-sm-6 mt--30">
              <div className="method-card">
                <div className="icon">
                  <img src="image/icon/method-icon-1.png" alt=""/>
                </div>
                <article className="text">
                  <h3 className="method-title"><a href="#/">FREE SHIPPING WORLDWIDE</a></h3>
                  <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram</p>
                </article>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt--30">
              <div className="method-card">
                <div className="icon">
                  <img src="image/icon/method-icon-2.png" alt=""/>
                </div>
                <article className="text">
                  <h3 className="method-title"><a href="#/">MONEY BACK GUARANTEE</a></h3>
                  <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram</p>
                </article>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt--30">
              <div className="method-card">
                <div className="icon">
                  <img src="image/icon/method-icon-3.png" alt=""/>
                </div>
                <article className="text">
                  <h3 className="method-title"><a href="#/">ONLINE SUPPORT 24/7</a></h3>
                  <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="section-title mb--25">
            <h2>Latest Blog</h2>
            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas.</p>
          </div>
          <div className="row ">
            <div className="col-lg-4 col-md-6 mt--30">
              <div className="blog-card">
                <a href="image/others/blog-card-1.jpg" data-fancybox className="blog-image">
                  <img src="image/others/blog-card-1.jpg" alt=""/>
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
                    <img src="image/others/blog-card-slider-1.jpg" alt=""/>
                    <img src="image/others/blog-card-slider-2.jpg" alt=""/>
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
                <a href="image/others/blog-card-slider-3.jpg" data-fancybox className="blog-image">
                  <img src="image/others/blog-card-slider-3.jpg" alt=""/>
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
      </section>
      {/* Modal */}
      <div className="modal fade modal-quick-view" id="quickModal" tabIndex="-1" role="dialog" aria-labelledby="quickModal"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button type="button" className="close modal-close-btn ml-auto" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          <div className="product-details-modal">
            <div className="row">
              <div className="col-lg-5">
                {/* Product Details Slider Big Image*/}
                <div className="product-details-slider handart-slick-slider arrow-type-two" data-slick-setting='{
                          "slidesToShow": 1,
                          "arrows": false,
                          "fade": true,
                          "draggable": false,
                          "swipe": false,
                          "asNavFor": ".product-slider-nav"
                          }'>
                  <div className="single-slide">
                    <img src="image/products/product-details-big-1.jpg" alt=""/>
                  </div>
                  <div className="single-slide">
                    <img src="image/products/product-details-big-2.jpg" alt=""/>
                  </div>
                  <div className="single-slide">
                    <img src="image/products/product-details-big-3.jpg" alt=""/>
                  </div>
                  <div className="single-slide">
                    <img src="image/products/product-details-big-4.jpg" alt=""/>
                  </div>
                  <div className="single-slide">
                    <img src="image/products/product-details-big-5.jpg" alt=""/>
                  </div>
                </div>
                {/* Product Details Slider Nav */}
                <div className="mt--30 product-slider-nav handart-slick-slider arrow-type-two" data-slick-setting='{
                        "infinite":true,
                          "autoplay": true,
                          "autoplaySpeed": 8000,
                          "slidesToShow": 3,
                          "arrows": true,
                          "prevArrow":{"buttonclassName": "slick-prev","iconclassName":"fa fa-chevron-left"},
                          "nextArrow":{"buttonclassName": "slick-next","iconclassName":"fa fa-chevron-right"},
                          "asNavFor": ".product-details-slider",
                          "focusOnSelect": true
                          }'>
                  <div className="single-slide">
                    <img src="image/products/product-details-big-1.jpg" alt=""/>
                  </div>
                  <div className="single-slide">
                    <img src="image/products/product-details-big-2.jpg" alt=""/>
                  </div>
                  <div className="single-slide">
                    <img src="image/products/product-details-big-3.jpg" alt=""/>
                  </div>
                  <div className="single-slide">
                    <img src="image/products/product-details-big-4.jpg" alt=""/>
                  </div>
                  <div className="single-slide">
                    <img src="image/products/product-details-big-5.jpg" alt=""/>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 mt--30 mt-lg--30">
                <div className="product-details-description pl-lg--30">
                  <h3 className="title">Zyfg Men Sweatshirts Casual Ethnic Style Pattern</h3>
                  <div className="widget-block">
                    <div className="rating-block">
                      <span className="ion-android-star-outline star_on"></span>
                      <span className="ion-android-star-outline star_on"></span>
                      <span className="ion-android-star-outline star_on"></span>
                      <span className="ion-android-star-outline"></span>
                      <span className="ion-android-star-outline"></span>
                    </div>
                    <div className="review-widget">
                      <a href="#/"><i className="far fa-comment"></i>Read reviews (1)</a>
                      <a href="#/"><i className="fas fa-pencil-alt"></i>Write a review</a>
                    </div>
                  </div>
                  <div className="price-block">
                    <del className="price-old">$500.00</del> <span className="price-new">$500.00</span>
                  </div>
                  <article className="product-details-article border-top">
                    <h4 className="sr-only">Product Summery</h4>
                    <p>Long printed dress with thin adjustable straps. V-neckline and wiring under the Dust with ruffles at the
                      bottom of the
                      dress.</p>
                  </article>
                  <div className="widget-block-3">
                    <span className="widget-label">Quantity</span>
                    <div className="widgets">
                      <div className="count-input-block">
                        <input type="number" className="form-control text-center" />
                        <div className="count-input-btns">
                          <button className="inc-ammount count-btn"><i className="zmdi zmdi-chevron-up"></i></button>
                          <button className="dec-ammount count-btn"><i className="zmdi zmdi-chevron-up"></i></button>
                        </div>
                      </div>
                      <div className="add-cart-btn">
                        <a href="#/" className="btn btn-outlined--primary"><i className="ion-bag"></i>Add to Cart</a>
                      </div>
                      <div className="product-status">
                        <p><i className="zmdi zmdi-check"></i> In Stock</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="widget-social-share">
              <span className="widget-label">Share</span>
              <div className="social-share rounded-icons transparent-bg text-left">
                <a href="#/" className="single-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#/" className="single-icon"><i className="fab fa-twitter"></i></a>
                <a href="#/" className="single-icon"><i className="fab fa-youtube"></i></a>
                <a href="#/" className="single-icon"><i className="fab fa-google-plus-g"></i></a>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>


      <footer className="">

        <div className="newsletter-section section-margin-top">
          <div className="container">
            <div className="border-top">
              <div className="row justify-content-center section-padding-top">
                <div className="col-lg-9">
                  <div className="newsletter-content">
                    <p>Special Ofers For Subscribers</p>
                    <h2 className="title">Ten Percent Member Discount</h2>
                    <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas.</p>
                    <div className="newsletter-subscription">
                      <form id="mc-form" className="mc-form footer-newsletter">
                        <div className="newsletter-input">

                          <input placeholder="Your Email Adress" id="mc-email" type="email" autoComplete="off"  name="EMAIL"/>
                          <button className="subscribe-btn" id="mc-submit"><span>Subscribe</span></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="copyright footer-">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-left">
                <div className="copyright-text">
                  <p>Copyright <a href="#/" className="author">Handart</a>. All Rights Reserved</p>
                </div>
              </div>
              <div className="col-md-6">

                  <div className="footer-social social-normal text-center text-md-right ">
                    <a href="#/" className="single-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="#/" className="single-icon"><i className="fab fa-twitter"></i></a>
                    <a href="#/" className="single-icon"><i className="fas fa-rss"></i></a>
                    <a href="#/" className="single-icon"><i className="fab fa-youtube"></i></a>
                    <a href="#/" className="single-icon"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#/" className="single-icon"><i className="fab fa-instagram"></i></a>
                  </div>


              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    )
  }
}

export default HomePage
