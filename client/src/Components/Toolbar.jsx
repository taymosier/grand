import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

import { ContactFormToggleButton } from './Contact/ContactFormToggleButton';
import { RegistrationProcessInfoButton } from './RegistrationProcessInfoButton';

import { ContactForm } from './Contact/ContactForm';
import { LanguageButtonContainer } from "./LanguageButtonContainer";
import { RegistrationProcessInfoModal } from "./RegistrationProcessInfoModal";

export class Toolbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      setLanguage: this.props.setLanguage,
      language: this.props.language,
      contactFormVisible: this.props.contactFormVisible,
      registrationInfoVisible: this.props.registrationInfoVisible
    };
    this.toggle = this.toggle.bind(this);
    this.toggleRegistrationProcessInfo = this.toggleRegistrationProcessInfo.bind(this);
  }

  toggle(){
    this.setState({
      contactFormVisible: !this.state.contactFormVisible
    })
  }

  toggleRegistrationProcessInfo(){
    this.setState({
      registrationInfoVisible: !this.state.registrationInfoVisible
    })
  }

  render(){
    return(
      <Col
        xl={{ size: 3, offset: 0 }}
        lg={{ size: 2, offset: 0 }}
        md={{ size: 3, offset: 1 }}
        sm={{ size: 12, offset: 0 }}
        xs={{ size: 12, offset: 0 }}
        className={"toolbar"}
      >
      <LanguageButtonContainer
        setLanguage={this.state.setLanguage}
      />
      <ContactFormToggleButton
        toggleContactForm={this.toggle}
        language={this.state.language}
      />
      <RegistrationProcessInfoButton
        toggleRegistrationProcessInfo={this.toggleRegistrationProcessInfo}
        language={this.state.language}
      />
      <ContactForm
        toggle={this.toggle}
        visible={this.state.contactFormVisible}
        language={this.state.language}
      />
      <RegistrationProcessInfoModal
        toggle={this.toggleRegistrationProcessInfo}
        visible={this.state.registrationInfoVisible}
      />
      </Col>
    )
  }
}
