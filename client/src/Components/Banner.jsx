import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <Col className="banner" xl="12" lg="12" md="12" sm="12"></Col>
    );
  }
}
