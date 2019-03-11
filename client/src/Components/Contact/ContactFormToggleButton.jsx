import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class ContactFormToggleButton extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <Button className="contact-form-toggle-button" onClick={this.props.toggleContactForm}>Toggle Me</Button>
    );
  }
}
