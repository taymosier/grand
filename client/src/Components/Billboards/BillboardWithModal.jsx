import React, { Component } from 'react';
import { Button,  Row } from 'reactstrap';
import { BillboardModal } from './BillboardModal';


export class BillboardWithModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      btnTxt: {
        "en": "View Floorplan",
        "es": "**Needs Translation**"
      },
      language: "en"
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  componentDidMount(){
    this.setState({
      contents: this.props.contents,
      images: this.props.contents.image,
      language: this.props.language,
      modal: false
    })
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(){
    this.setState({
      modal: !this.state.modal
    })
  }

  render(){
    let classes = "";
    let id = "";
    if(this.state.contents !== undefined){
      return(
        <Row className={`billboard-with-modal ${classes}`} id={id}>
          <BillboardModal isOpen={this.state.modal} toggle={this.toggleModal} images={this.state.images !== undefined ? this.state.images : null} contents={this.state.contents !== undefined ? this.state.contents : null}/>
          <Button className="billboard-modal-toggle" onClick={this.toggleModal}>{this.state.btnTxt["en"]}</Button>
        </Row>
      )
    }
    return null
  }
}
