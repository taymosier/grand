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
        roomType: "",
        streetAddress: "",
        mailingAddress: "",
        city: "",
        state: "",
        country: "",
        zipcode: "",
        toggleContactForm: this.props.toggle
      },
      placeholders: this.getFormPlaceholders(this.props.language)
    }
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  getFormPlaceholders(language){
    let placeholders;
    if(language === "es"){
      placeholders = {
        firstName: "Nombre de Pila",
        lastName: "Apellido",
        email: "Correo Electrónico",
        phone: "Número de Teléfono",
        roomType: "",
        comments: "Comentarios",
        arrival: "Fecha Deseada de Llegada",
        departure:"Fecha Deseada de Salida",
        streetAddress: "Dirección",
        mailingAddress: "Suite - P.O. Box - Apt - Unidad",
        city: "Ciudad",
        state: "Estado",
        country: "País",
        zipcode: "Código Postal"
      }
    } else {
      placeholders = {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone Number",
        roomType: "",
        comments: "Comments",
        arrival: "Desired Arrival Date",
        departure: "Desired Departure Date",
        streetAddress: "Street Address",
        mailingAddress: "Suite - P.O. Box - Apt - Unit",
        city: "City",
        state: "State",
        country: "Country",
        zipcode: "Zipcode"
      }
    }
    return placeholders;
  }

  componentDidUpdate(){
    if(this.state.isOpen !== this.props.visible){
      this.setState({
        isOpen: this.props.visible,
        placeholders: this.getFormPlaceholders(this.props.language)
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
    let rooms = [];
    rooms.push("Select Available Room");
    rooms.push("Three Bedroom Presidential Villa");
    return(
        <Modal isOpen={this.state.isOpen} toggle={this.state.toggleContactForm} className="contact-form" id="contactForm">
          <Button className="contact-form-close-button" onClick={this.props.toggle} close aria-label="Cancel" size="lg"/>
          <ModalHeader toggle={this.state.toggleContactForm} className="contact-form-header">For questions or to begin the reservation process, please fill out the form below</ModalHeader>
          <ModalBody >
            <Form className="contact-form-fields-container" action="https://formspree.io/taymosier@gmail.com" method="POST">
              <Col className="contact-form-left-col" xl={{ size: 5, offset: 1 }} lg={{ size: 10, offset: 1 }} md={{ size: 6, offset: 0 }} xs={{ size: 12, offset: 0 }}>
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "firstName",
                      value: this.state.formFields.firstName,
                      type: "text",
                      placeholder: this.state.placeholders["firstName"],
                      hasLabel: false,
                      label: ""
                    }
                  }
                />
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "lastName",
                      value: this.state.formFields.lastName,
                      type: "text",
                      placeholder: this.state.placeholders["lastName"],
                      hasLabel: false,
                      label: ""
                    }
                  }
                />
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "email",
                      value: this.state.formFields.email,
                      type: "email",
                      placeholder: this.state.placeholders["email"],
                      hasLabel: false,
                      label: ""
                    }
                  }
                />
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "phone",
                      value: this.state.formFields.phone,
                      type: "number",
                      placeholder: this.state.placeholders["phone"],
                      hasLabel: false,
                      label: ""
                    }
                  }
                />
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "roomType",
                      type: "select",
                      placeholder: "",
                      hasLabel: false,
                      label: "", options: rooms,
                      value: this.state.formFields.roomType
                    }
                  }
                />
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "comments",
                      value: this.state.formFields.comments,
                      type: "textarea",
                      placeholder: "",
                      hasLabel: true,
                      label: this.state.placeholders["comments"]
                    }
                  }
                />
              </Col>
              <Col className="contact-form-right-col"
                xl={{ size: 4, offset: 1 }}
                lg={{ size: 10, offset: 1 }}
                md={{ size: 6, offset: 0 }}
                sm={{ size: 12, offset: 0 }}
                xs={{ size: 12, offset: 0 }}
              >
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "arrivalDate",
                      value: this.state.formFields.arrivalDate,
                      type: "date",
                      placeholder: "",
                      hasLabel: true,
                      label: this.state.placeholders["arrival"]
                    }
                  }
                />
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "departureDate",
                      value: this.state.formFields.departureDate,
                      type: "date",
                      placeholder: "",
                      hasLabel: true,
                      label: this.state.placeholders["departure"]
                    }
                  }
                />
                <div className="addressBreak" />
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "streetAddress",
                      value: this.state.formFields.streetAddress,
                      type: "text",
                      placeholder: this.state.placeholders["streetAddress"],
                      hasLabel: false,
                      label: ""
                    }
                  }
                />
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "mailingAddress",
                      value: this.state.formFields.mailingAddress,
                      type: "text",
                      placeholder: this.state.placeholders["mailingAddress"],
                      hasLabel: false,
                      label: ""
                    }
                  }
                />
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "city",
                      value: this.state.formFields.city,
                      type: "text",
                      placeholder: this.state.placeholders["city"],
                      hasLabel: false,
                      label: ""
                    }
                  }
                />
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "state",
                      value: this.state.formFields.state,
                      type: "text",
                      placeholder: this.state.placeholders["state"],
                      hasLabel: false,
                      label: ""
                    }
                  }
                />
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "country",
                      value: this.state.formFields.country,
                      type: "text",
                      placeholder: this.state.placeholders["country"],
                      hasLabel: false,
                      label: ""
                    }
                  }
                />
                <ContactFormGroup
                  onChange={this.onFieldChange}
                  field={
                    {
                      name: "zipcode",
                      value: this.state.formFields.zipcode,
                      type: "text",
                      placeholder: this.state.placeholders["zipcode"],
                      hasLabel: false,
                      label: ""
                    }
                  }
                />
              </Col>
            </Form>
            <Button type="submit" value="Send" id="contactFormSubmitButton">Submit</Button>
          </ModalBody>
        </Modal>
    );
  }
}
