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
      <Button className="registration-steps-close-button" onClick={this.props.toggle}>Close</Button>
        <ModalHeader toggle={this.toggle} className="registration-process-header"></ModalHeader>
        <ModalBody >
          <Col className="registration-step-container" xl={{ size: 2, offset: 0 }} lg={{ size: 3, offset: 0 }} md={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }}>
            <div className="registration-step-image-container"></div>
            <h3>Step #1: Check Dates</h3>
            <p>Fill out Check Availability form. Availability changes daily. We call resort to check availability of your desired location and date. We try our best to respond within 24 hours. We send a confirmation email that the dates and location are available along with the Booking Form.</p>
          </Col>
          <Col className="registration-step-container" xl={{ size: 2, offset: 0 }} lg={{ size: 3, offset: 0 }} md={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }}>
            <div className="registration-step-image-container"></div>
            <h3>Step #2: Book Dates</h3>
            <p>Fill out Booking Form or call 919-452-8777. We book reservation and send a confirmation number. If desired departure date is in 2.5 months or less make sure of flight availability before filling out Booking Form. </p>
          </Col>
          <Col className="registration-step-container" xl={{ size: 2, offset: 0 }} lg={{ size: 3, offset: 0 }} md={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }}>
            <div className="registration-step-image-container"></div>
            <h3>Step #3: Pay</h3>
            <p>Pay once there’s a confirmation number that’s verifiable with resort's central reservations. Full payment is then due.  Payments - PayPal or check. </p>
          </Col>
          <Col className="registration-step-container" xl={{ size: 2, offset: 0 }} lg={{ size: 3, offset: 0 }} md={{ size: 10, offset: 1 }} sm={{ size: 10, offset: 1 }}>
          <div className="registration-step-image-container"></div>
            <h3>Step #4: Transportation</h3>
            <p>Transportation and guest letter will be provided to you with free courtesy transportation to the resort where you will be treated as the guests of owners at the exclusive resort. </p>
          </Col>
        </ModalBody>
      </Modal >
    );
  }
}
