import React, {Component} from 'react';
import { NavItem } from 'reactstrap';

import { capitalizeEveryWord } from "../helpers/dynamicCSS.js";

export class MenuButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: "home",
      text: this.props.text,
      portal: this.props.route,
      name: this.props.name,
      id: this.props.name+"-menu-button"
    };
  }

  componentDidUpdate(){
    if(this.state.text !== this.props.text){
      this.setState({
        text: this.props.text
      })
    }
  }

  render(){
    return(
      <NavItem
        className='menuButton'
        id={this.state.id}
        onClick={
          () => {this.props.setPage(this.state.name)}
        }
      >
        {capitalizeEveryWord(this.state.text)}
      </NavItem>
    );
  }
}
