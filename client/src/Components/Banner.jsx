import React, { Component } from 'react';
import { Col } from 'reactstrap';

import { capitalizeEveryWord } from "../helpers/dynamicCSS.js";

export class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {
      "image": this.props.banner_info.image,
      "header": this.props.banner_info.header[this.props.language],
      "subheader": this.props.banner_info.subheader[this.props.language],
      "style": {
        "backgroundImage": `url(${require("../../public/images/banners/" + this.props.banner_info.image)})`
      }
    };
  }

  componentDidUpdate(){
    if(this.state.image !== this.props.banner_info.image ){
      this.setState({
        "image": this.props.banner_info.image,
        "header": this.props.banner_info.header[this.props.language],
        "subheader": this.props.banner_info.subheader[this.props.language],
        "style": {
          "backgroundImage": `url(${require("../../public/images/banners/" + this.props.banner_info.image)})`
        }
      })
    }
  }

  render(){
    return(
      <Col className="banner-container" xl="12" lg="12" md="12" sm="12" style={this.state.style}>
        <p className="banner-header">{capitalizeEveryWord(this.state.header)}</p>
        <p className="banner-subheader">{capitalizeEveryWord(this.state.subheader)}</p>
      </Col>
    );
  }
}
