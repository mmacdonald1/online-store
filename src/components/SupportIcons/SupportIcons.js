import React, {Component} from 'react'

class SupportIcons extends Component{
  render(){
    return(
      <div>
      <section className="section-margin">
          <h2 className="sr-only">Method section</h2>
        <div className="container">
          <div className="row section-padding space-dt--30">
            <div className="col-md-4 col-sm-6 mt--30">
              <div className="method-card">
                <div className="icon">
                  <img src= {process.env.PUBLIC_URL+ "/handart/image/icon/method-icon-1.png"}alt=""/>
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
                  <img src= {process.env.PUBLIC_URL+ "/handart/image/icon/method-icon-2.png"}alt=""/>
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
                  <img src= {process.env.PUBLIC_URL+ "/handart/image/icon/method-icon-3.png"}alt=""/>
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
      </div>
    )
  }
}

export default SupportIcons
