import React, { Component } from 'react';
import { Col } from 'reactstrap';

export class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {
      "image": this.props.src.image,
      "header": this.props.src.header,
      "subheader": this.props.src.subheader
    };
  }
  render(){
    return(
      <Col className="banner-container" xl="12" lg="12" md="12" sm="12">
      <div className="banner-header-container">
        <h1 className="banner-header">{this.state.header}</h1>
        <div className="banner-break"></div>
      <div className="banner-subheader-container">
        <h2 className="banner-subheader">{this.state.subheader}</h2>
        </div>
      </div>
        <img className="banner" src={require("../../public/images/banners/"+this.state.image)}/>
      </Col>
    );
  }
}
