import React, {Component, Fragment} from 'react';
import HomePage from './containers/HomePage/HomePage'
import HomeNav from './components/HomeNav/HomeNav'
import Footer from './components/Footer/Footer'
import StripeCheckout from './containers/StripeCheckout/StripeCheckout'
import Cart from './containers/Cart/Cart'
import Contact from './containers/Contact/Contact'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <HomeNav />
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/checkout" component={StripeCheckout}/>
              <Route exact path="/cart" component={Cart}/>
              <Route exact path="/contact" component={Contact}/>
            </Switch>
            <Footer/>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
