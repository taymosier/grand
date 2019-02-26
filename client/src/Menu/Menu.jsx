import React, { Component } from 'react';
import { Col, Nav } from 'reactstrap';

import { MenuButton } from './MenuButton';


export class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <Col className="menu-container" xl={{ size: 2, offset: 1 }} lg={{ size: 12, offset: 0 }} md="3">
        <Nav className="menu" vertical>
        </Nav>
      </Col>
    );
  }
}
