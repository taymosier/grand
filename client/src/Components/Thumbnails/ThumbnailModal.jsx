import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';


export class ThumbnailModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      language: null,
      image: null,
      title: null,
      flavor: null,
      link: null,
      isOpen: !this.isEmptyProp(this.props.image),
      toggle: this.props.closeThumbnail,
    }
  }

  isEmptyProp(prop){
    if(prop === undefined || prop === ""){
      return true;
    }
    return false;
  }

  componentDidMount(){
    if(this.props.image !== undefined){
      this.setState({
        language: this.checkForEmptyProp(this.props.language),
        image: this.checkForEmptyProp(this.props.thumbnail.image),
        title: this.checkForEmptyProp(this.props.thumbnail.text.title[this.props.language]),
        flavor: this.checkForEmptyProp(this.props.thumbnail.text.flavor[this.props.language]),
        link: this.checkForEmptyProp(this.props.link)})
      }
  }

  componentDidUpdate(){
    if(this.props.image === undefined){
      return null;
    }
    if(this.state.image !== this.props.thumbnail.image){
      this.setState({
        language: this.checkForEmptyProp(this.props.language),
        image: this.checkForEmptyProp(this.props.thumbnail.image),
        title: this.checkForEmptyProp(this.props.thumbnail.text.title[this.props.language]),
        flavor: this.checkForEmptyProp(this.props.thumbnail.text.flavor[this.props.language]),
        link: this.checkForEmptyProp(this.props.link)
      })
    }
  }

  render(){
    return(
      <Modal isOpen={this.state.isOpen} toggle={this.toggle} className="menu-modal" id="thumbnailModal">
        <ModalHeader toggle={this.props.toggle} className="">
          <Button close onClick={this.props.toggle} size="large" className="thumbnail-close-button"/>
        </ModalHeader>
        <ModalBody className="thumbnail-modal-body" onClick={this.props.toggle}>

        </ModalBody >
      </Modal>
    );
  }
}
