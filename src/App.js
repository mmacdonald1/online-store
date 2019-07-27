import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_h9J1I1bg40Mok0NB90ylaTG900GFPb8e5X">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;
