import React,{Component} from 'react'

class Email extends Component{
  render(){
    return(
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
    )
  }
}

export default Email
