import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


export class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <Col
        className="footer"
        xl={{ size: 12, offset: 0 }}
        lg={{ size: 12, offset: 0 }}
        md="12"
        sm="12">
      </Col>
    );
  }
}
