import React, { Component } from 'react';
import { Button, PopoverHeader, PopoverBody, UncontrolledPopover} from 'reactstrap';

// splitText([(string) text], [(string) class name], [(string/regex) delimiter to split text on])
import { splitText } from '../helpers/dynamicCSS.js'

export class InfoPane extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: this.props.isOpen,
      name: this.props.name,
      id: this.props.id,
      label: this.props.label,
      text: this.props.text,
      btnDropleft: false,
      setActivePane: this.props.setActivePane
    }
  }

  componentDidUpdate(){
    console.log(`${this.state.name} isOpen: ${this.props.isOpen}`)
    if(this.state.isOpen !== this.props.isOpen){
      this.setState({
        isOpen: this.props.isOpen
      })
    }
  }
  render(){
    let text = splitText(this.state.text, "info-text", /_\/_/g);
    let name = this.state.name;
    return(
      <div className="popoverContainer">
        <Button id={this.state.id} type="button" onClick={() => {this.state.setActivePane(this.state.name)}}>
          {this.state.label}
        </Button>
        <UncontrolledPopover isOpen={this.state.isOpen} trigger="click" placement="left" target={this.state.id} >
          <PopoverHeader>{this.state.label}</PopoverHeader>
          <PopoverBody>
            {text}
          </PopoverBody>
        </UncontrolledPopover>
      </div>
    )
  }
}
