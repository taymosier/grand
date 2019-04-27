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
    return(
      <Button
        id={`${this.state.language}ToggleButton`}
        className="language-toggle-button"
        value={this.props.value}
        onClick={(e) => {this.props.setLanguage(e)}}
      >
        {this.state.language}
      </Button>
    );
  }
}
