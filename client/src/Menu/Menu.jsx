import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


export class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: []
    }
  }
  render(){
    return(
      <Col className="menu" xl={{ size: 2, offset: 1 }} lg={{ size: 12, offset: 0 }} md="3"></Col>
    );
  }
}
