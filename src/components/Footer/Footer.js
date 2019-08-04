import React, {Component} from 'react'

class Footer extends Component{
  render(){
    return(
      <footer className="">
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
    )
  }
}

export default Footer
