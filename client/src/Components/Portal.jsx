import React, { Component } from 'react';
import { Col } from 'reactstrap';

import { HomeView } from "../Views/HomeView"

export class Portal extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: 'home'
    };
  }

  componentDidUpdate(){
      
  }

  render(){
    return(
      <Col className="portal"
        xl={{ size: 8, offset: 4 }}
        lg={{ size: 12, offset: 0 }}
        md="12"
        sm="12">
        <HomeView />
      </Col>
    );
  }
}
