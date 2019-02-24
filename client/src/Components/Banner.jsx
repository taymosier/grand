import React, { Component } from 'react';
import { Col } from 'reactstrap';

export class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {
      src: this.props.src,
      subheading: '',
    };
  }
  render(){
    return(
      <Col className="banner-container" xl="12" lg="12" md="12" sm="12">
      <div className="banner-heading-container">
        <h1 className="banner-heading">Nuevo Vallarta</h1>
        <div className="banner-break"></div>
        <h2 className="banner-subheading">{this.state.subheading}</h2>
      </div>
        <img className="banner" src={require("../../public/images/banners/"+this.state.src)}/>
      </Col>
    );
  }
}
