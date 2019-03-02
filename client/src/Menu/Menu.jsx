import React, { Component } from 'react';
import { Col, Nav } from 'reactstrap';

import { MenuButton } from './MenuButton';

export class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentView: ""
    };
  }


  render(){
    let topLevelButtons = ["home","rooms", "getting here","dining","what to do","golf","spa","entertainment"];
    let button;
    let buttonList = [];
    for(let i =0; i < topLevelButtons.length; i++){
      button = <MenuButton name={topLevelButtons[i]} setPage={this.props.setPage}/>;
      buttonList.push(button);
    }
    return(
      <Col className="menu-container" xl={{ size: 12, offset: 0 }} lg={{ size: 12, offset: 0 }} md="12">
        <Nav className="menu" vertical>
          {buttonList}
        </Nav>
      </Col>
    );
  }
}
