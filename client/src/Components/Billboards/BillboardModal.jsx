import React, { Component } from 'react';
import { Button, Modal, ModalBody} from 'reactstrap';
import { BillboardImage } from './BillboardImage';

import { splitText } from '../../helpers/dynamicCSS'

export class BillboardModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount(){
    this.setState({
      isOpen: this.props.modal,
      class: "",
      toggle: this.props.toggle,
      images: this.props.images,
      multipleImages: typeof this.props.images === "object",
      activeImage: 0,
      imageFull: false
    })
    this.toggleActiveImage = this.toggleActiveImage.bind(this);
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
  }

  componentDidUpdate(){
    if(this.state.isOpen !== this.props.isOpen){
      this.setState({
        images: this.props.images,
        isOpen: this.props.isOpen
      })
    }
  }

  toggleModal(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleActiveImage(e){
    e.preventDefault();
    let i = this.state.activeImage
    i !== this.state.images.length-1 ? i = i+1 : i = 0
    this.setState({
      activeImage: e.target.value
    })
  }

  toggleFullScreen(){
    this.setState({
      imageFull: !this.state.imageFull
    })
  }

  render(){
    let fullScreen = {
      "left": "1.25vw",
      "margin": "0",
      "max-width": "97.5vw",
      "max-height": "97.5vh",
      "min-width": "97.5vw",
      "min-height": "97.5vh",
      "padding": "0",
      "position": "absolute",
      "top": "1vh",
      "z-index": "100000"
    }
    return(
      <Modal className="billboard-modal" style={this.state.imageFull ? {"margin": "0", "background": "transparent", "border": "none"} : null} isOpen={this.state.isOpen} toggle={this.state.toggle}>
        <ModalBody style={this.state.imageFull ? {"margin": "0", "background": "transparent", "border": "none"} : null}>

          {this.state.multipleImages
            ?  <BillboardImage
                className={`billboard-modal-image ${this.state.class}`} //Image Element in top left of modal screen
                image={this.state.images[this.state.activeImage].src}
                alt={this.state.images}
                style={this.state.imageFull ? fullScreen : null}
                toggle={this.toggleFullScreen}
               />
            : <BillboardImage
                className={`billboard-modal-image ${this.state.class}`}
                image={this.state.images}
                alt={this.state.images}
                style={this.state.imageFull ? fullScreen : null}
                toggle={this.toggleFullScreen}
               />
          }

          {this.state.images !== undefined && this.state.multipleImages && !this.state.imageFull
            ? <div className="billboard-modal-image-options">
            {this.state.images.map((item) => {
              return <Button
                        onClick={this.toggleActiveImage}                            //image select if there are multiple images
                        value={`${item.index}`}
                        className="billboard-modal-image-select-button"
                        style={`${this.state.activeImage}` === `${item.index}` ? {"background":"#427587"} : null}
                      >
                        {item.caption !== undefined ? item.caption : "Floorplan"}
                      </Button>
                }
              )
            }
            </div>
            : <div className="billboard-modal-image-options" /> //empty div if only one image
          }

          <div className="billboard-modal-text" style={this.state.imageFull ? {"display": "none"} : null}>
            <p className="billboard-modal-text-header">Room Info</p>
            <div className="billboard-modal-main-text">
              {this.props.contents.flavor_text.en !== undefined && this.state.imageFull
                ? splitText(this.props.contents.flavor_text.en, "billboard-modal-text-block") //returns an array of <p> elements
                : null
              }
              <Button className="toggle-image-fullscreen-button" onClick={this.toggleFullScreen}>View Full Screen</Button>
            </div>
          </div>
          <Button className="close-billboard-modal-button" onClick={this.props.toggle}>X</Button>
        </ModalBody>
      </Modal>
    )
  }
}
