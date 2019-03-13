import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class MenuModalToggleButton extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <Button className="button-toggle" id="menuToggleModalButton" onClick={this.props.toggle}>Menu</Button>
    );
  }
}
