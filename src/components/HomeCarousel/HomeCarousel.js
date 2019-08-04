import React, {Component} from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


class HomeCarousel extends Component{
  constructor(){
    super()
    this.state={
      activeIndex: 0,
      items: [
        {
          src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
          altText: 'Slide 3',
          caption: 'Slide 3'
        }
      ]
    }
  }
  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render(){
    const { activeIndex } = this.state;

    const slides = this.state.items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default HomeCarousel

// <div className="handart-slick-slider hero-slider" data-slick-setting='{
//     "autoplay": true,
//     "autoplaySpeed": 8000,
//     "slidesToShow": 1,
//     "arrows": true,
//     "prevArrow":{"buttonclassName": "slick-prev","iconclassName":"ion-ios-arrow-left"},
//     "nextArrow":{"buttonclassName": "slick-next","iconclassName":"ion-ios-arrow-right"}
// }'>
//     <div className="single-slider hero-content bg-image" data-bg="image/bg-images/home-1/home-slider-image-1.jpg">
//         <div className="container position-relative">
//             <div className="row">
//                 <div className="col-lg-12 text-center">
//                     <div className="icon">
//                         <img src={process.env.PUBLIC_URL + '/handart/image/icon/slider-icon-1.png'} alt=""/>
//                     </div>
//                     <h1>Hand Made Product</h1>
//
//                     <p>Typi Non Habent Claritatem Insitam Est Usus Legentis In Qui Facit</p>
//
//                     <div className="slider-btn">
//                         <a href="shop-grid.html" className="btn btn-outlined">Shop Now</a>
//                     </div>
//
//                 </div>
//             </div>
//
//         </div>
//         <span className="herobanner-progress"></span>
//     </div>
//     <div className="single-slider hero-content bg-image" data-bg="image/bg-images/home-1/home-slider-image-2.jpg">
//         <div className="container position-r
//         elative">
//             <div className="row">
//                 <div className="col-lg-12 text-center">
//                     <div className="icon">
//                         <img src={process.env.PUBLIC_URL+ "/handart/image/icon/slider-icon-2.png"} alt=""/>
//                     </div>
//                     <h1>Sale Off Hand Made</h1>
//
//                     <p>Typi Non Habent Claritatem Insitam Est Usus Legentis In Qui Facit</p>
//
//                     <div className="slider-btn">
//                         <a href="shop-grid.html" className="btn btn-outlined">Shop Now</a>
//                     </div>
//
//                 </div>
//             </div>
//         </div>
//         <span className="herobanner-progress"></span>
//     </div>
//     <div className="single-slider hero-content bg-image" data-bg="image/bg-images/home-1/home-slider-image-2.jpg">
//         <div className="container position-r
//         elative">
//             <div className="row">
//                 <div className="col-lg-12 text-center">
//                     <div className="icon">
//                         <img src={process.env.PUBLIC_URL+ "/handart/image/icon/slider-icon-3.png"} alt=""/>
//                     </div>
//                     <h1>Home Decor Product</h1>
//
//                     <p>Typi Non Habent Claritatem Insitam Est Usus Legentis In Qui Facit</p>
//
//                     <div className="slider-btn">
//                         <a href="shop-grid.html" className="btn btn-outlined">Shop Now</a>
//                     </div>
//
//                 </div>
//             </div>
//         </div>
//         <span className="herobanner-progress"></span>
//     </div>
// </div>
