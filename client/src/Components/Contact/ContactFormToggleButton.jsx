import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class ContactFormToggleButton extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <Button className="button-toggle" id="contactFormToggleButton" onClick={this.props.toggleContactForm}>Check Availability</Button>
    );
  }
}
