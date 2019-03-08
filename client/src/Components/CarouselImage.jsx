import React, { Component } from 'react';

export class CarouselImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      src: this.props.src,
      srcFolder: this.props.folder,
      altText: this.props.altText,
    };
  }

  componentDidUpdate(){
    if(this.state.src !== this.props.src){
      this.setState({
        src: this.props.src,
        srcFolder: this.props.folder,
        altText: this.props.altText,
      })
    }
  }

  render(){
    try {
      return(<img className="carousel-image" src={require("../../public/images/galleries/" + this.state.srcFolder + this.state.src)} alt={this.state.altText} />)
    } catch(e){
      return null
    }
  }
}
