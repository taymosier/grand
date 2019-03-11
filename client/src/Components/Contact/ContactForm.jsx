import React, { Component } from 'react';
import { Button, Col, Form, Modal, ModalHeader, ModalBody} from 'reactstrap';

import { ContactFormGroup } from './ContactFormGroup';

export class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: this.props.visible,
      formFields: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        streetAddress: "",
        mailingAddress: "",
        city: "",
        state: "",
        zip: "",
      }
    }
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  componentDidUpdate(){
    if(this.state.isOpen !== this.props.visible){
      this.setState({
        isOpen: this.props.visible
      })
    }
  }

  onFieldChange(e){
    e.preventDefault();
    let newForm = this.state.formFields;
    newForm[`${e.target.name}`] = e.target.value
    console.log(e.target.name);
    this.setState({
      formFields: newForm
    })
  }

  render(){
    return(
        <Modal isOpen={this.state.isOpen} toggle={this.toggle} className="contact-form" id="contactForm">
          <ModalHeader toggle={this.toggle}>Contact Form</ModalHeader>
          <ModalBody >
            <Form className="contact-form-fields-container">
              <Col className="contact-form-left-col" xl={{ size: 4, offset: 1 }} lg={6}>
                <ContactFormGroup onChange={this.onFieldChange} field={{name: "firstName", value: this.state.formFields.firstName, type: "text", placeholder: "First Name", hasLabel: true, label: ""}} />
                <ContactFormGroup onChange={this.onFieldChange} field={{name: "lastName", value: this.state.formFields.lastName, type: "text", placeholder: "Last Name", hasLabel: false, label: ""}} />
                <ContactFormGroup onChange={this.onFieldChange} field={{name: "email", value: this.state.formFields.email, type: "email", placeholder: "Email", hasLabel: false, label: ""}} />
                <ContactFormGroup onChange={this.onFieldChange} field={{name: "phone", value: this.state.formFields.phone, type: "number", placeholder: "Phone Number", hasLabel: false, label: ""}} />
                <ContactFormGroup onChange={this.onFieldChange} field={{name: "comments", value: this.state.formFields.comments, type: "textarea", placeholder: "", hasLabel: true, label: "Comments"}} />
              </Col>
              <Col className="contact-form-right-col" xl={{ size: 5, offset: 6 }} lg={6}>
                <ContactFormGroup onChange={this.onFieldChange} field={{name: "arrivalDate", value: this.state.formFields.arrivalDate, type: "date", placeholder: "", hasLabel: true, label: "Desired Arrival Date"}} />
                <ContactFormGroup onChange={this.onFieldChange} field={{name: "departureDate", value: this.state.formFields.departureDate, type: "date", placeholder: "", hasLabel: true, label: "Desired Departure Date"}} />
                <div className="addressBreak" />
                <ContactFormGroup onChange={this.onFieldChange} field={{name: "streetAddress", value: this.state.formFields.streetAddress, type: "text", placeholder: "Street Address", hasLabel: false, label: ""}} />
                <ContactFormGroup onChange={this.onFieldChange} field={{name: "mailingAddress", value: this.state.formFields.mailingAddress, type: "text", placeholder: "Suite - P.O. Box - Apt - Unit", hasLabel: false, label: ""}} />
                <ContactFormGroup onChange={this.onFieldChange} field={{name: "city", value: this.state.formFields.city, type: "text", placeholder: "City", hasLabel: false, label: ""}} />
                <ContactFormGroup onChange={this.onFieldChange} field={{name: "state", value: this.state.formFields.state, type: "text", placeholder: "State", hasLabel: false, label: ""}} />
                <ContactFormGroup onChange={this.onFieldChange} field={{name: "zipcode", value: this.state.formFields.zipcode, type: "text", placeholder: "Zipcode", hasLabel: false, label: ""}} />
              </Col>
            </Form>
          </ModalBody>
          <Button className="contact-form-close-button" onClick={this.props.toggle}> Close</Button>
        </Modal>
    );
  }
}
