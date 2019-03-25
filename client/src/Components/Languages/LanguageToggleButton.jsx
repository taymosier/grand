import React, { Component } from 'react';
import { Button } from 'reactstrap';


export class LanguageToggleButton extends Component {
  constructor(props){
    super(props);
    this.state ={
      language: this.props.language
    };
  }
  render(){
    const componentStyle = {
      background: "#F6F4F3",
      color: "black"
    }
    return(
      <Button
        id={`${this.state.language}ToggleButton`}
        className="language-toggle-button"
        style={componentStyle}
        value={this.props.value}
        onClick={(e) => {this.props.setLanguage(e)}}
      >
        {this.state.language}
      </Button>
    );
  }
}
