import React, { Component } from 'react';

export class BillboardImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      src: '',
      image: '',
    }
  }

  componentDidMount(){
    this.setState({
      src: require(`../../../public/images/billboards/${this.props.image}`),
      image: this.props.image,
      style: this.props.style !== undefined ? this.props.style : null
    })
  }

  componentDidUpdate(){
    if(this.state.image !== this.props.image){
      this.setState({
        src: require(`../../../public/images/billboards/${this.props.image}`),
        image: this.props.image
      })
    }
    if(this.props.style !== undefined && this.state.style !== this.props.style){
      this.setState({
        style: this.props.style
      })
    }
  }

  render(){
    try{
      return(
        <img className="billboard-image"
          alt={this.state.image}
          onClick={this.props.toggle !== undefined ? this.props.toggle : null}
          src={this.state.src}
          style={this.state.style !== undefined ? this.state.style : null}
        />
      );
    } catch(e){
      return null;
    }
  }
}
