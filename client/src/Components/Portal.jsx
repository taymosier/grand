import React, { Component } from 'react';
import { Button, Col } from 'reactstrap';

import { DefaultChild } from "../Views/DefaultChild"

export class Portal extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    let height = 100-90;
    return(
      <Col className="portal"
        xl={{ size: 8, offset: 4 }}
        lg={{ size: 12, offset: 0 }}
        md="12"
        sm="12">
        <DefaultChild />
      </Col>
    );
  }
}
