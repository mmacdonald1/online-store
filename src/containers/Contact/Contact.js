import React,{Component} from 'react'

class Contact extends Component{
  render(){
    return(
      <main className="contact_area section-padding pt--60">
        <div className="container">
          <div className="row mt--60 space-db--30">
            <div className="col-lg-5 col-md-5 col-12">
              <div className="contact_adress">
                <div className="ct_address">
                  <h3 className="ct_title">Location &amp; Details</h3>
                  <p>It is a long established fact that readewill be distracted by the readable content of a page when looking
                    at ilayout.</p>
                </div>
                <div className="address_wrapper">
                  <div className="address">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="contact-info-text">
                      <p><span>Address:</span> 1234 - Bandit Tringi lAliquam <br /> Vitae. New York</p>
                    </div>
                  </div>
                  <div className="address">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="contact-info-text">
                      <p><span>Email: </span> support@example.com </p>
                    </div>
                  </div>
                  <div className="address">
                    <div className="icon">
                      <i className="fas fa-mobile-alt" />
                    </div>
                    <div className="contact-info-text">
                      <p><span>Phone:</span> (800) 0123 456 789 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-12 mt-sm--30 mt-md--0">
              <div className="contact_form">
                <h3 className="ct_title">Send Us a Message</h3>
                <form id="contact-form" action="php/mail.php" method="post" className="contact-form">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Your Name <span className="required">*</span></label>
                        <input type="text" name="customerName" id="customername" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Your Email <span className="required">*</span></label>
                        <input type="email" name="customerEmail" id="customerEmail" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Subject</label>
                        <input type="text" name="contactSubject" className="form-control" id="contactSubject" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Your Message</label>
                        <textarea name="contactMessage" className="form-control" id="contactMessage" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-btn">
                        <button type="submit" value="submit" id="submit" className="btn btn-black" name="submit">send</button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="form-output">
                  <p className="form-messege" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Contact
