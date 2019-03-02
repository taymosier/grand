import React, {Component} from 'react';
import { NavItem } from 'reactstrap';

export class MenuButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: "home",
      portal: this.props.route,
      name: this.props.name,
      id: this.props.name+"-menu-button"
    };
  }

  render(){
    return(
      <NavItem className='menuButton' id={this.state.id} onClick={() => {this.props.setPage(this.state.name)}}>{this.state.name}</NavItem>
    );
  }
}
