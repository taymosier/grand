import React, { Component } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Popover, PopoverHeader, PopoverBody} from 'reactstrap';

// splitText([(string) text], [(string) class name], [(string/regex) delimiter to split text on])
import { splitText } from '../helpers/dynamicCSS.js'

export class InfoPane extends Component {
  constructor(props){
    super(props);
    this.state = {
      className: this.props.className,
      label: this.props.label,
      text: this.props.text,
      btnDropleft: false
    }
  }
  render(){
    let text = splitText(this.state.text, "info-text", /_\/_/g);
    return(
      <Dropdown
        className={"dropdown-info"}
        direction="left"
        isOpen={this.state.btnDropleft}
        toggle={() => { this.setState({ btnDropleft: !this.state.btnDropleft }); }}
      >
        <DropdownToggle caret className={"dropdown-info-button"}>
          {this.state.label}
        </DropdownToggle>
        <DropdownMenu className="dropwdown-info-text-container">
          <DropdownItem className={"info-text-item"}>
            {text}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}
