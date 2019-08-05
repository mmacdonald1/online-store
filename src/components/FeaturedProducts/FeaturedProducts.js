import React, {Component} from 'react'
import FeaturedItems from './FeaturedItems/FeaturedItems'

class FeaturedProducts extends Component{
  constructor(){
    super()
    this.state={
      products:[
        {
          new:true,
          sale:'25%',
          img:'',
          title: 'Zyfg Men Sweatshirts Casual Ethnic Style Pattern',
          originalPrice: '$20.00',
          newPrice: '$15.00'
        }
      ]
    }
  }
  render(){
    return(
      <div className="container pb-5 border-bottom">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas.</p>
        </div>
        <div className="ha-custom-tab">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="shop-tab" data-toggle="tab" href="#shop" role="tab" aria-controls="shop"
                    aria-selected="true">
                    <span className="icon"><img src={process.env.PUBLIC_URL+ "/handart/image/icon/tab-nav-icon-1.png"} alt=""/></span>
                    Shop
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="men-tab" data-toggle="tab" href="#men" role="tab" aria-controls="men"
                    aria-selected="true">
                    <span className="icon"><img src={process.env.PUBLIC_URL+ "/handart/image/icon/tab-nav-icon-2.png"} alt=""/></span>
                    Men
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="woman-tab" data-toggle="tab" href="#woman" role="tab" aria-controls="woman"
                    aria-selected="false">
                    <span className="icon"><img src={process.env.PUBLIC_URL+ "/handart/image/icon/tab-nav-icon-3.png"} alt=""/></span>
                    Women
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="elements-tab" data-toggle="tab" href="#elements" role="tab" aria-controls="elements"
                    aria-selected="false">
                    <span className="icon"><img src={process.env.PUBLIC_URL+ "/handart/image/icon/tab-nav-icon-4.png"} alt=""/></span>
                    Elements
                </a>
            </li>
        </ul>
        <div className="tab-content space-db--30" id="myTabContent">
            <div className="tab-pane fade show active" id="shop" role="tabpanel" aria-labelledby="shop-tab">
                <div className="row">
                  {this.state.products ? (this.state.products.map((product, idx)=>{
                    return <FeaturedItems product={product} key={idx}/>
                  })) :null}
                </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
}

export default FeaturedProducts
