import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class ContactFormToggleButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      language: "",
      text: "Check Availability"
    };
  }

  componentDidMount(){
    if(this.props.language){
      this.setState({
        language: this.props.language,
        text: this.getButtonText(this.props.language)
      })
    }
  }

  componentDidUpdate(){
    if(this.state.language !== this.props.language){
      this.setState({
        language: this.props.language,
        text: this.getButtonText(this.props.language)
      })
    }
  }

  getButtonText(language){
    if(language === "es"){
      return "Consultar Disponibilidad"
    }
    return "Check Availability"
  }

  render(){
    return(
      <Button className="button-toggle" id="contactFormToggleButton" onClick={this.props.toggleContactForm}>{this.state.text}</Button>
    );
  }
}
