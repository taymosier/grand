import React, { Component } from 'react';
import { Button, Col, Form, Modal, ModalHeader, ModalBody} from 'reactstrap';

import { Menu } from './Menu';

export class MenuModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeView: this.props.activeView,
      isOpen: this.props.isOpen
    }
  }

  componentDidUpdate(){
    if(this.state.isOpen !== this.props.isOpen){
      this.setState({
        isOpen: this.props.isOpen
      })
    }
  }

  render(){
    return(
      <Modal isOpen={this.state.isOpen} toggle={this.toggle} className="menu-modal" id="menuModal">
        <ModalHeader toggle={this.toggle} className="">
          <Button close onClick={this.props.toggle} className="menu-close-button"/>
        </ModalHeader>
        <ModalBody onClick={this.props.toggle}>
          <Menu setPage={this.props.setPage}/>
        </ModalBody >
      </Modal>
    );
  }
}
