import React, {Component} from 'react'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import About from '../../components/About/About'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import SupportIcons from '../../components/SupportIcons/SupportIcons'


class HomePage extends Component{
  render(){
    return(
      <div className="site-wrapper" id="top">
        <section className="hero-area section-margin">
          <HomeCarousel/>
        </section>
        <section className="section-margin welcome-section">
          <About/>
        </section>
        <section className="section-padding">
          <FeaturedProducts />
        </section>
          <SupportIcons />
      </div>
    )
  }
}

export default HomePage
