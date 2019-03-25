import React, { Component } from 'react';
import { CarouselImage } from "./CarouselImage";

export class ImageCarousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex: 0,
      imageFolder: this.props.imageFolder.toString()+"/",
      images: this.props.galleryImages,
      slides: this.generateSlides(this.props.galleryImages, (this.props.imageFolder.toString()+"/")),
      style: this.props.style
    };
    this.generateSlides = this.generateSlides.bind(this);
    this.navigateToNextImage = this.navigateToNextImage.bind(this);
  }

generateSlides(images, folder){
  let slides = [];
  if(images !== undefined){
   slides = images.map((image, i, src) => {
     i = i+1;
     return(
     <CarouselImage
       src={image.src}
       folder={folder}
       altText={image.src}
       caption={image.caption}
     />);
   });
   //this is too ambiguous, the CarouselImage component returns "end" only
   //when certain conditions are met. Those conditions are not listed here
   // and you would have to know to look in CarouselImage.jsx to see what those conditions
   // are.
   let lastSlide = slides[slides.length-1];

   if(lastSlide === "end"){
     //removes last item in slides array.
     slides = slides.slice(0,-1);
   }
   return slides;
  }
}

navigateToNextImage(){
  let nextSlideIndex = this.state.activeIndex + 1;
  //because the last slide array index would be length-1
  if(nextSlideIndex === this.state.slides.length){
    this.setState({
      activeIndex: 0
    })
  } else {
    this.setState({
      activeIndex: this.state.activeIndex + 1
    })
  }
}

componentDidUpdate(){
  if(this.state.images !== this.props.galleryImages ){
    this.setState({
      activeIndex: 0,
      imageFolder: this.props.imageFolder.toString()+"/",
      images: this.props.galleryImages,
      slides: this.generateSlides(this.props.galleryImages, (this.props.imageFolder.toString()+"/")),
      style: this.props.style
    })
  }
}

  render(){
    return(
      <div className="carousel" style={this.state.style}>
        { this.state.slides !== undefined
          ? <div className="carousel-image-container" onClick={() =>{this.navigateToNextImage()}}>{this.state.slides[this.state.activeIndex]}</div>
          : null
        }
        { this.state.slides !== undefined && this.state.slides.length > 0
          ? <div className="carousel-message" onClick={() =>{this.navigateToNextImage()}}><p>click image to browse</p></div>
          : null
        }
      </div>
    )
  }
}
