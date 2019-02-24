import React, {Component} from 'react';
import { NavItem } from 'reactstrap';


export class MenuButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      option: this.props.option,
      id: this.props.id,
    };
  }
  render(){
    return(
      <NavItem className='menuButton' id={this.state.id} >{this.state.option}</NavItem>
    );
  }
}
