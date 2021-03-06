import React, {Component} from 'react'
import {withRouter} from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class HomeNav extends Component{
  render(){
    return(
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Luce</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/cart">Cart</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default HomeNav



// <header className="site-header ha-header-1 absolute-header sticky-init fixed-header d-lg-block d-none">
//   <div className="container-fluid">
//     <div className="row align-items-center">
//       <div className="col-lg-5">
//         <div className="main-navigation">
//
//           <ul className="main-menu @@menuColor">
// <li className="menu-item has-children">
//   <a href="#/">Home</a>
//   <ul className="sub-menu">
//     <li> <a href="index.html">Home One</a></li>
//     <li> <a href="index-2.html">Home Two</a></li>
//     <li> <a href="index-3.html">Home Three</a></li>
//     <li> <a href="index-4.html">Home Four</a></li>
//   </ul>
// </li>
// {/* Shop */}
// <li className="menu-item has-children mega-menu">
//   <a href="#/">shop</a>
//   <ul className="sub-menu four-column">
//     <li className="cus-col-25">
//       <h3 className="menu-title"><a href="#/">Shop Grid </a></h3>
//       <ul className="mega-single-block">
//         <li><a href="shop-grid.html">Fullwidth</a></li>
//         <li><a href="shop-grid--box-layout.html">Fullwidth (box layout)</a></li>
//         <li><a href="shop-grid-left-sidebar.html">left Sidebar</a></li>
//         <li><a href="shop-grid-left-sidebar--box-layout.html">left Sidebar(box layout)</a></li>
//         <li><a href="shop-grid-right-sidebar.html">Right Sidebar</a></li>
//         <li><a href="shop-grid-right-sidebar--box-layout.html">Right Sidebar(box layout)</a></li>
//       </ul>
//     </li>
//     <li className="cus-col-25">
//       <h3 className="menu-title"> <a href="#/">Shop List</a></h3>
//       <ul className="mega-single-block">
//         <li><a href="shop-list.html">Fullwidth</a></li>
//         <li><a href="shop-list--box-layout.html">Fullwidth (box layout)</a></li>
//         <li><a href="shop-list-left-sidebar.html">left Sidebar</a></li>
//         <li><a href="shop-list-left-sidebar--box-layout.html">left Sidebar(box layout)</a></li>
//         <li><a href="shop-list-right-sidebar.html">Right Sidebar</a></li>
//         <li><a href="shop-list-right-sidebar--box-layout.html">Right Sidebar(box layout)</a></li>
//       </ul>
//     </li>
//     <li className="cus-col-25">
//       <h3 className="menu-title"> <a href="#/">Product Details 1</a></h3>
//       <ul className="mega-single-block">
//         <li><a href="product-details.html">Product Details Page</a></li>
//         <li><a href="product-details-affiliate.html">Product Details Affiliate</a></li>
//         <li><a href="product-details-group.html">Product Details Group</a></li>
//         <li><a href="product-details-variable.html">Product Details Variables</a></li>
//       </ul>
//     </li>
//     <li className="cus-col-25">
//       <h3 className="menu-title"><a href="#/">Product Details 2</a></h3>
//       <ul className="mega-single-block">
//         <li><a href="product-details-left-thumbnail.html">left Thumbnail</a></li>
//         <li><a href="product-details-right-thumbnail.html">Right Thumbnail</a></li>
//         <li><a href="product-details-left-gallery.html">Left Gallery</a></li>
//         <li><a href="product-details-right-gallery.html">Right Gallery</a></li>
//       </ul>
//     </li>
//   </ul>
// </li>
// {/* Pages */}
// <li className="menu-item has-children">
//   <a href="#/">Pages</a>
//   <ul className="sub-menu">
//     <li> <a href="cart.html">Cart</a></li>
//     <li> <a href="checkout.html">Checkout</a></li>
//     <li> <a href="compare.html">Compare</a></li>
//     <li> <a href="wishlist.html">Wishlist</a></li>
//     <li> <a href="login-register.html">Login Register</a></li>
//     <li> <a href="my-account.html">My Account</a></li>
//   </ul>
// </li>
// {/* Blog */}
// <li className="menu-item has-children mega-menu">
//   <a href="#/">Blog</a>
//   <ul className="sub-menu three-column">
//     <li className="cus-col-33">
//       <h3 className="menu-title"><a href="#/">Blog Grid</a></h3>
//       <ul className="mega-single-block">
//         <li><a href="blog.html">Full Widh (Default)</a></li>
//         <li><a href="blog-left-sidebar.html">left Sidebar</a></li>
//         <li><a href="blog-right-sidebar.html">Right Sidebar</a></li>
//       </ul>
//     </li>
//     <li className="cus-col-33">
//       <h3 className="menu-title"><a href="#/">Blog List </a></h3>
//       <ul className="mega-single-block">
//         <li><a href="blog-list.html">Full Widh (Default)</a></li>
//         <li><a href="blog-list-left-sidebar.html">left Sidebar</a></li>
//         <li><a href="blog-list-right-sidebar.html">Right Sidebar</a></li>
//       </ul>
//     </li>
//     <li className="cus-col-33">
//       <h3 className="menu-title"><a href="#/">Blog Details</a></h3>
//       <ul className="mega-single-block">
//         <li><a href="blog-details.html">Image Format (Default)</a></li>
//         <li><a href="blog-details-gallery.html">Gallery Format</a></li>
//         <li><a href="blog-details-audio.html">Audio Format</a></li>
//         <li><a href="blog-details-video.html">Video Format</a></li>
//         <li><a href="blog-details-left-sidebar.html">left Sidebar</a></li>
//       </ul>
//     </li>
//   </ul>
// </li>
// <li className="menu-item">
//   <a href="contact.html">Contact</a>
// </li>
// </ul>
//         </div>
//       </div>
//       <div className="col-lg-3 col-xl-3 offset-lg-1 offset-xl-0">
//         <div className="site-brand">
//          <a href="index.html">
//            <img src={process.env.PUBLIC_URL + '/handart/image/main-logo-white.png'} alt=""/>
//          </a>
//         </div>
//       </div>
//       <div className="col-lg-3 col-xl-4">
//         <div className="header-top-widget">
//           <ul className="header-links">
// <li className="sin-link">
//   <a href="#/" className="search-trigger link-icon"><i className="ion-ios-search-strong"></i></a>
// </li>
// <li className="sin-link">
//   <a href="#/" className="cart-link link-icon"><i className="ion-bag"></i></a>
//   <div className="sin-dropdown cart-dropdown">
//     <div className="inner-single-block">
//       <div className="cart-product">
//         <div className="icon">
//           <img src={process.env.PUBLIC_URL+ "/handart/image/products/home-1/cart-product-1.jpg"} alt=""/>
//           <div className="product-badge-3">1x</div>
//         </div>
//         <div className="description">
//           <h4>Yuqidong Sudaderas</h4>
//           <span className="price">€500.00</span>
//           <ul className="attr-content">
//             <li><span>size :</span> S</li>
//             <li><span>color :</span> Beige</li>
//           </ul>
//         </div>
//         <a href="#/" className="cart-item-cross">
//           <i className="fas fa-times"></i>
//         </a>
//       </div>
//     </div>
//     <div className="inner-single-block">
//       <ul className="cart-details">
//         <li><span className="label">Subtotal</span>  <span className="value">€500.00</span></li>
//         <li><span className="label">Shipping</span>  <span className="value">€7.00</span></li>
//         <li><span className="label">Taxes</span>  <span className="value">€0.00</span></li>
//         <li><span className="label">Total</span>  <span className="value">€507.00</span></li>
//       </ul>
//     </div>
//     <div className="inner-single-block">
//       <a href="checkout.html" className="btn w-100">Checkout</a>
//     </div>
//   </div>
// </li>
// <li className="sin-link">
//   <a href="#/" className="link-icon hamburgur-icon"><i className="ion-navicon"></i></a>
//   <div className="sin-dropdown option-dropdown">
//     <div className="inner-single-block">
//       <h4 className="option-title">English <i className="fas fa-angle-down"></i></h4>
//       <ul className="option-list">
//         <li><a href="#/">English</a></li>
//         <li><a href="#/">اللغة العربية</a></li>
//       </ul>
//     </div>
//     <div className="inner-single-block">
//       <h4 className="option-title">EUR <i className="fas fa-angle-down"></i></h4>
//       <ul className="option-list">
//         <li><a href="#/">€ Euro</a></li>
//         <li><a href="#/">$ US Dollar</a></li>
//       </ul>
//     </div>
//     <div className="inner-single-block">
//       <h4 className="option-title">my account</h4>
//       <ul className="option-list">
//         <li><a href="my-account.html">My account</a></li>
//         <li><a href="checkout.html">Checkout</a></li>
//         <li><a href="login-register.html">Sign in</a></li>
//       </ul>
//     </div>
//   </div>
// </li>
// </ul>
//
// <div className="search-wrapper">
// <div className="search-wrapper-inner">
//   <div className="container">
//     <button className="search-dismiss">
//       <i className="fas fa-times"></i>
//     </button>
//     <form action="#">
//       <div className="search-box">
//         <input type="text" placeholder="Search Our catalog"/>
//         <button className="search-button"><i className="fas fa-search"></i></button>
//       </div>
//     </form>
//   </div>
// </div>
// </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </header>
// <header className="mobile-header d-lg-none absolute-header">
// <div className="container">
//   {/* <div className="mobile-top-section">
//     <ul className="currency-lan-list">
//       <li className="dropdown-trigger">
//         <a href="#/">USD $<i className="fas fa-angle-down"></i></a>
//         <ul className="drop-box">
//           <li>USD $</li>
//           <li>EUR €</li>
//         </ul>
//       </li>
//       <li className="dropdown-trigger">
//         <a href="#/">ENG<i className="fas fa-angle-down"></i></a>
//         <ul className="drop-box">
//           <li>Eng</li>
//           <li>Ban</li>
//         </ul>
//       </li>
//     </ul>
//   </div> */}
//   <div className="row align-items-end">
//     <div className="col-md-4 col-7">
//
//         <a href="index.html" className="site-brand">
//           <img src={process.env.PUBLIC_URL + '/handart/image/main-logo-white.png'} alt=""/>
//         </a>
//
//
//     </div>
//     <div className="col-md-8 col-5 text-right">
//       <div className="mobile-header-btns header-top-widget ">
//         <ul className="header-links">
//           <li className="sin-link">
//             <a href="cart.html" className="cart-link link-icon"><i className="ion-bag"></i></a>
//           </li>
//           <li className="sin-link">
//             <a href="#/" className="link-icon hamburgur-icon off-canvas-btn"><i className="ion-navicon"></i></a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </div>
// </header>
//
// {/*Off Canvas Navigation Start*/}
// <aside className="off-canvas-wrapper">
// <div className="btn-close-off-canvas">
//   <i className="ion-android-close"></i>
// </div>
// <div className="off-canvas-inner">
//   {/* search box start */}
//   <div className="search-box offcanvas">
//     <form>
//       <input type="text" placeholder="Search Here"/>
//       <button className="search-btn"><i className="ion-ios-search-strong"></i></button>
//     </form>
//   </div>
//   {/* search box end */}
//   {/* mobile menu start */}
//   <div className="mobile-navigation">
//     {/* mobile menu navigation start */}
//     <nav className="off-canvas-nav">
//       <ul className="mobile-menu">
//         <li className="menu-item-has-children">
//           <a href="#/">Home</a>
//           <ul className="sub-menu">
//             <li> <a href="index.html">Home One</a></li>
//             <li> <a href="index-2.html">Home Two</a></li>
//             <li> <a href="index-3.html">Home Three</a></li>
//             <li> <a href="index-4.html">Home Four</a></li>
//           </ul>
//         </li>
//         <li className="menu-item-has-children">
//           <a href="#/">Blog</a>
//           <ul className="sub-menu">
//             <li className="menu-item-has-children">
//               <a href="#/">Blog Grid</a>
//               <ul className="sub-menu">
//                 <li><a href="blog.html">Full Widh (Default)</a></li>
//                 <li><a href="blog-left-sidebar.html">left Sidebar</a></li>
//                 <li><a href="blog-right-sidebar.html">Right Sidebar</a></li>
//               </ul>
//             </li>
//             <li className="menu-item-has-children">
//               <a href="#/">Blog List</a>
//               <ul className="sub-menu">
//                 <li><a href="blog-list.html">Full Widh (Default)</a></li>
//                 <li><a href="blog-list-left-sidebar.html">left Sidebar</a></li>
//                 <li><a href="blog-list-right-sidebar.html">Right Sidebar</a></li>
//               </ul>
//             </li>
//             <li className="menu-item-has-children">
//             <a href="#/">Blog Details</a>
//             <ul className="sub-menu">
//               <li><a href="blog-details.html">Image Format (Default)</a></li>
//               <li><a href="blog-details-gallery.html">Gallery Format</a></li>
//               <li><a href="blog-details-audio.html">Audio Format</a></li>
//               <li><a href="blog-details-video.html">Video Format</a></li>
//               <li><a href="blog-details-left-sidebar.html">left Sidebar</a></li>
//             </ul>
//             </li>
//           </ul>
//         </li>
//
//         <li className="menu-item-has-children">
//           <a href="#/">Shop</a>
//           <ul className="sub-menu">
//             <li className="menu-item-has-children">
//               <a href="#/">Shop Grid</a>
//               <ul className="sub-menu">
//                 <li><a href="shop-grid.html">Fullwidth</a></li>
//                 <li><a href="shop-grid--box-layout.html">Fullwidth (box layout)</a></li>
//                 <li><a href="shop-grid-left-sidebar.html">left Sidebar</a></li>
//                 <li><a href="shop-grid-left-sidebar--box-layout.html">left Sidebar(box layout)</a></li>
//                 <li><a href="shop-grid-right-sidebar--box-layout.html">Right Sidebar</a></li>
//                 <li><a href="shop-grid-right-sidebar.html">Right Sidebar(box layout)</a></li>
//               </ul>
//             </li>
//             <li className="menu-item-has-children">
//               <a href="#/">Shop List</a>
//               <ul className="sub-menu">
//                 <li><a href="shop-list.html">Fullwidth</a></li>
//                 <li><a href="shop-list--box-layout.html">Fullwidth (box layout)</a></li>
//                 <li><a href="shop-list-left-sidebar.html">left Sidebar</a></li>
//                 <li><a href="shop-list-left-sidebar--box-layout.html">left Sidebar(box layout)</a></li>
//                 <li><a href="shop-list-right-sidebar.html">Right Sidebar</a></li>
//                 <li><a href="shop-list-right-sidebar--box-layout.html">Right Sidebar(box layout)</a></li>
//               </ul>
//             </li>
//             <li className="menu-item-has-children">
//             <a href="#/">Product Details 1</a>
//             <ul className="sub-menu">
//               <li><a href="product-details.html">Product Details Page</a></li>
//               <li><a href="product-details-affiliate.html">Product Details Affiliate</a></li>
//               <li><a href="product-details-group.html">Product Details Group</a></li>
//               <li><a href="product-details-variable.html">Product Details Variables</a></li>
//             </ul>
//             </li>
//             <li className="menu-item-has-children">
//             <a href="#/">Product Details 2</a>
//             <ul className="sub-menu">
//             <li><a href="product-details-left-thumbnail.html">left Thumbnail</a></li>
//             <li><a href="product-details-right-thumbnail.html">Right Thumbnail</a></li>
//             <li><a href="product-details-left-gallery.html">Left Gallery</a></li>
//             <li><a href="product-details-right-gallery.html">Right Gallery</a></li>
//             </ul>
//             </li>
//           </ul>
//         </li>
//         <li className="menu-item-has-children">
//           <a href="#/">Pages</a>
//           <ul className="sub-menu">
//             <li> <a href="cart.html">Cart</a></li>
//             <li> <a href="checkout.html">Checkout</a></li>
//             <li> <a href="compare.html">Compare</a></li>
//             <li> <a href="wishlist.html">Wishlist</a></li>
//             <li> <a href="login-register.html">Login Register</a></li>
//             <li> <a href="my-account.html">My Account</a></li>
//           </ul>
//         </li>
//         <li><a href="contact.html">Contact</a></li>
//
//       </ul>
//     </nav>
//     {/* mobile menu navigation end */}
//   </div>
//   {/* mobile menu end */}
//   <nav className="off-canvas-nav">
//     <ul className="mobile-menu currency-menu">
//       <li className="menu-item-has-children">
//         <a href="#/">Currency - USD $ <i className="fas fa-angle-down"></i></a>
//         <ul className="sub-menu">
//           <li> <a href="cart.html">USD $</a></li>
//           <li> <a href="checkout.html">EUR €</a></li>
//         </ul>
//       </li>
//       <li className="menu-item-has-children">
//         <a href="#/">Lang - Eng<i className="fas fa-angle-down"></i></a>
//         <ul className="sub-menu">
//           <li>Eng</li>
//           <li>Ban</li>
//         </ul>
//       </li>
//     </ul>
//   </nav>
//   <div className="off-canvas-bottom">
//     <div className="contact-list mb--10">
//       <a href="#/" className="sin-contact"><i className="fas fa-mobile-alt"></i>(12345) 78790220</a>
//       <a href="#/" className="sin-contact"><i className="fas fa-envelope"></i>examle@handart.com</a>
//     </div>
//     <div className="header-social social-normal">
//       <a href="#/" className="single-icon"><i className="fab fa-facebook-f"></i></a>
//       <a href="#/" className="single-icon"><i className="fab fa-twitter"></i></a>
//       <a href="#/" className="single-icon"><i className="fas fa-rss"></i></a>
//       <a href="#/" className="single-icon"><i className="fab fa-youtube"></i></a>
//       <a href="#/" className="single-icon"><i className="fab fa-google-plus-g"></i></a>
//       <a href="#/" className="single-icon"><i className="fab fa-instagram"></i></a>
//     </div>
//   </div>
// </div>
// </aside>
// {/*Off Canvas Navigation End*/}
