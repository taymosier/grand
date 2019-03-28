import React, { Component } from 'react';
import { Col } from 'reactstrap';

import { ContactFormToggleButton } from './Contact/ContactFormToggleButton';
import { RegistrationProcessInfoButton } from './Registration/RegistrationProcessInfoButton';
import { PreviousPageButton } from './PreviousPageButton';

import { ContactForm } from './Contact/ContactForm';
import { LanguageButtonContainer } from "./Languages/LanguageButtonContainer";
import { RegistrationProcessInfoModal } from "./Registration/RegistrationProcessInfoModal";


export class Toolbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      setLanguage: this.props.setLanguage,
      previousPage: this.props.previousPage,
      setPage: this.props.setPage,
      language: this.props.language,
      contactFormVisible: this.props.contactFormVisible,
      toggleContactForm : this.props.toggleContactForm,
      toggleRegistrationProcessInfo: this.props.toggleRegistrationProcessInfo,
      registrationInfoVisible: this.props.registrationInfoVisible,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState({
      contactFormVisible: !this.state.contactFormVisible
    })
  }

  componentDidUpdate(){
    if(this.state.previousPage !== this.props.previousPage){
      this.setState({
        previousPage: this.props.previousPage
      })
    }
    if(this.state.language !== this.props.language){
      this.setState({
        language: this.props.language,
      });
    }
    if(this.state.registrationInfoVisible !== this.props.registrationInfoVisible){
      this.setState({
        registrationInfoVisible: this.props.registrationInfoVisible
      })
    }
    if(this.state.contactFormVisible !== this.props.contactFormVisible){
      this.setState({
        contactFormVisible: this.props.contactFormVisible,
      })
    }
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
        toggleContactForm={this.state.toggleContactForm}
        language={this.state.language}
      />
      <RegistrationProcessInfoButton
        toggleRegistrationProcessInfo={this.state.toggleRegistrationProcessInfo}
        language={this.state.language}
      />
      {this.state.previousPage !== "" && this.state.previousPage !== undefined
        ? <PreviousPageButton previous={this.state.previousPage} setPage={this.state.setPage}/>
        : null
      }
      <ContactForm
        toggle={this.state.toggleContactForm}
        visible={this.state.contactFormVisible}
        language={this.state.language}
      />
      <RegistrationProcessInfoModal
        toggle={this.state.toggleRegistrationProcessInfo}
        visible={this.state.registrationInfoVisible}
      />
      </Col>
    )
  }
}
