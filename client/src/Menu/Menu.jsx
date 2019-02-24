import React, { Component } from 'react';
import { Col, Nav } from 'reactstrap';

import { MenuButton } from './MenuButton';


export class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: []
    }
  }

  render(){
    var sections = [
      {
        "name": "Grande Luxxe",
        "id": "home"
      },
      {
        "name": "Rooms & Suites",
        "id": "rooms"
      },
      {
        "name": "Getting Here",
        "id": "getting-here"
      },
      {
        "name": "Dining",
        "id": "dining"
      },
      {
        "name": "What To Do",
        "id": "what-to-do"
      },
      {
        "name": "Golf",
        "id": "golf"
      },
      {
        "name": "Spa",
        "id": "spa"
      },
      {
        "name": "Entertainment",
        "id": "entertainment"
      }
    ];

    // Keeping this here for reference
    // let buttonHeight = (100/sections.length).toString()+'%';
    // const buttonStyle = {
    //   height: buttonHeight
    // }

    let menuItems = sections.map(option =>
      <MenuButton option={option.name} id={`${option.id}-button`} />
    )
    return(
      <Col className="menu-container" xl={{ size: 2, offset: 1 }} lg={{ size: 12, offset: 0 }} md="3">
        <Nav className="menu" vertical>
          {menuItems}
        </Nav>
      </Col>
    );
  }
}
