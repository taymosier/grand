import React, { Component } from 'react';
import { Button, Col, Modal, ModalHeader, ModalBody} from 'reactstrap';

export class RegistrationProcessInfoModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: this.props.visible
    };
  }

  componentDidUpdate(){
    if(this.state.isOpen !== this.props.visible){
      this.setState({
        isOpen: this.props.visible
      })
    }
  }

  render(){
    return(
      <Modal className="registration-info-container" isOpen={this.state.isOpen} toggle={this.toggle} id="registrationInfoContainer">
        <ModalHeader toggle={this.toggle} className="registration-process-header"></ModalHeader>
        <ModalBody >
          <Col className="registration-step-container" xl={{ size: 2, offset: 0 }} lg={{ size: 3, offset: 0 }} md={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }}>
            <div className="registration-step-image-container"></div>
            <h3>Step #1: Check it</h3>
            <p>First you need to fill out the form to Check Availability. Availability changes daily so, we have to call and check the date and location for you. Our goal is to respond within 24 hours.
Note: We will send a link to our booking form when we inform you that your date and location are available.</p>
          </Col>
          <Col className="registration-step-container" xl={{ size: 2, offset: 0 }} lg={{ size: 3, offset: 0 }} md={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }}>
            <div className="registration-step-image-container"></div>
            <h3>Step #2: Book It</h3>
            <p>Make sure you can get airfare and then fill out the Booking Form (we will send a link to you) or call us at xxx-xxx-xxxx. We will usually book it for you and have a confirmation number in short order.</p>
          </Col>
          <Col className="registration-step-container" xl={{ size: 2, offset: 0 }} lg={{ size: 3, offset: 0 }} md={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }}>
            <div className="registration-step-image-container"></div>
            <h3>Step #3: Pay for It</h3>
            <p>You don't pay until you get a confirmation number that you can verfiy with the resort's central reservations. We then request full payment. Payments can be made by credit card on our secure shopping cart, or by paypal or by check (checks are our favorite!).</p>
          </Col>
          <Col className="registration-step-container" xl={{ size: 2, offset: 0 }} lg={{ size: 3, offset: 0 }} md={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }}>
          <div className="registration-step-image-container"></div>
            <h3>Step #4: Enjoy It!!</h3>
            <p>We provide all the paperwork and information to get there and to be treated as the guests of owners at the exclusive Mayan resorts. Your only job now is to remember your swimming suit.</p>
          </Col>
        </ModalBody>
        <Button className="registration-steps-close-button" onClick={this.props.toggle}>Close</Button>
      </Modal >
    );
  }
}
