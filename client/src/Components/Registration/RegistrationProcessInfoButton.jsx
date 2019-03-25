import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class RegistrationProcessInfoButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      language: "",
      text: ""
    }
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
      return "Como Hacer Una Reserva"
    }
    return "How To Make A Reservation"
  }

  render(){
    return(
      <Button className="button-toggle" id="registrationProcessInfoToggleButton" onClick={this.props.toggleRegistrationProcessInfo}>{this.state.text}</Button>
    );
  }
}
