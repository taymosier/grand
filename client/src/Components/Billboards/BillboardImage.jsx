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
      image: this.props.image
    })
  }

  componentDidUpdate(){
    if(this.state.image !== this.props.image){
      this.setState({
        src: require(`../../../public/images/billboards/${this.props.image}`),
        image: this.props.image
      })
    }
  }

  render(){
    try{
      return(
        <img className="billboard-image" src={this.state.src} alt={this.state.image}/>
      );
    } catch(e){
      return null;
    }
  }
}
