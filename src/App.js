import React, {Component, Fragment} from 'react';
import HomePage from './containers/HomePage/HomePage'
import HomeNav from './components/HomeNav/HomeNav'
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
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
