import React, { Component } from 'react';
import { Col } from 'reactstrap';

export class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {
      "image": this.props.banner_info.image,
      "header": this.props.banner_info.header,
      "subheader": this.props.banner_info.subheader
    };
  }

  componentDidUpdate(){
    if(this.state.image !== this.props.banner_info.image ){
      this.setState({
        "image": this.props.banner_info.image,
        "header": this.props.banner_info.header,
        "subheader": this.props.banner_info.subheader
      })
    }
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
        <img className="banner" src={require("../../public/images/banners/"+this.state.image)} alt={this.state.image}/>
      </Col>
    );
  }
}
