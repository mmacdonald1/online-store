import React, {Component} from 'react'

class About extends Component{
  render(){
    return(
      <div className="container">
          <div className="row justify-content-center section-padding border-bottom">
              <div className="col-lg-8">
                  <div className="welcome-content">
                      <h6 className="title-xs">Who We Are</h6>
                      <div className="section-title">
                          <h2>Welcome To Handart</h2>
                          <div className="title-sep">
                              <img src={process.env.PUBLIC_URL+ "/handart/image/icon/title-sep-icon.png"} alt=""/>
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
    )
  }
}

export default About
