import React, { Component } from 'react';
import { CarouselImage } from "./CarouselImage";

export class ImageCarousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex: 0,
      images: this.props.galleryImages,
      slides: this.generateSlides(this.props.galleryImages),
    };
    this.generateSlides = this.generateSlides.bind(this);
    this.navigateToPreviousImage = this.navigateToPreviousImage.bind(this);
    this.navigateToNextImage = this.navigateToNextImage.bind(this);
  }

generateSlides(images){
  let slides = [];
  if(images !== undefined){
    slides = images.map((image) => {
      return(
      <CarouselImage
        src={image.src}
        folder={image.folder}
        altText={image.src}
        caption={image.caption}
      />);
    });
    return slides
  } else {
    return ""
  }
}

navigateToPreviousImage(){
  this.setState({
    activeIndex: this.state.activeIndex -1
  })
}

navigateToNextImage(){
  this.setState({
    activeIndex: this.state.activeIndex + 1
  })
}

componentDidUpdate(){
  if(this.state.images !== this.props.galleryImages ){
    this.setState({
      activeIndex: 0,
      images: this.props.galleryImages,
      slides: this.generateSlides(this.props.galleryImages),
    })
  }
}

  render(){
    return(
      <div className="carousel">
      {this.state.slides !== undefined && this.state.slides.length !== 0 && this.state.activeIndex !== 0
        ? <div className="carousel-back-nav-button" onClick={()=>{this.navigateToPreviousImage()}}></div>
        : null
      }
      { this.state.slides !== undefined
        ? <div className="carousel-image-container" onClick={() =>{this.navigateToNextImage()}}>{this.state.slides[this.state.activeIndex]}</div>
        : null
      }
      {this.state.slides !== undefined && this.state.slides.length !== 0 && this.state.activeIndex !== this.state.slides.length-1
        ? <div className="carousel-forward-nav-button" onClick={() =>{this.navigateToNextImage()}}></div>
        : null
      }
      </div>
    )
  }
}
