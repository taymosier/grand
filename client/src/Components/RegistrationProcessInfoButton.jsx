import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class RegistrationProcessInfoButton extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <Button className="button-toggle" id="registrationProcessInfoToggleButton" onClick={this.props.toggleRegistrationProcessInfo}>How To Make A Reservation</Button>
    );
  }
}
