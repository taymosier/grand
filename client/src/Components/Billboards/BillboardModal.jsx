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
    this.getImageDimensionRatio = this.getImageDimensionRatio.bind(this);
    this.toggleActiveImage = this.toggleActiveImage.bind(this);
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
    this.setFullScreenImageStyle = this.setFullScreenImageStyle.bind(this);
    this.getImageOptionPlaceholderStyle = this.getImageOptionPlaceholderStyle.bind(this);
  }

  componentDidMount(){
    this.setState({
      activeImage: 0,
      class: "",
      contents: this.props.contents,
      imageFull: false,
      images: this.props.images,
      isOpen: this.props.modal,
      multipleImages: typeof this.props.images === "object",
      toggle: this.props.toggle
    })
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

  getImageDimensionRatio(){
    let imageHeight = document.querySelector('.billboard-image').naturalHeight;
    let imageWidth = document.querySelector('.billboard-image').naturalWidth;
    let ratio;
    if(imageHeight >= imageWidth){
      ratio = imageWidth/imageHeight;
    } else if (imageHeight < imageWidth){
      ratio = imageHeight/imageWidth;
    }
    return ratio;
  }

  setFullScreenImageStyle(){
    let ratio = this.getImageDimensionRatio();
    let left = `${(100 - (100*ratio))/2}vw`;
    let fullScreen = {
      "left": left,
      "margin": "0",
      "maWidth": `${100*ratio}vw`,
      "maxHeight": "97.5vh",
      "minWidth": `${100*ratio}vw`,
      "minHeight": "97.5vh",
      "padding": "0",
      "position": "absolute",
      "top": "1vh",
      "zIndex": "100000"
    }
    return fullScreen
  }

  getImageOptionPlaceholderStyle(){
    return {
      "text-align": "center",
      "width": "50%",
      "minWidth": "50%",
      "maxWidth": "50%",
      "margin": "5%",
      "minHeight": "fit-content",
      "maxHeight": "fit-content",
      "height": "fit-content"
    }
  }

  render(){

    return(
      <Modal className="billboard-modal" style={this.state.imageFull ? {"margin": "0", "background": "transparent", "border": "none"} : null} isOpen={this.state.isOpen} toggle={this.state.toggle}>
        <ModalBody style={this.state.imageFull ? {"margin": "0", "background": "transparent", "border": "none"} : null}>

          {this.state.multipleImages
            ?  <BillboardImage //Image Element in top left of modal screen
                image={this.state.images[this.state.activeImage].src}
                alt={this.state.images}
                style={this.state.imageFull ? this.setFullScreenImageStyle() : null}
                toggle={this.toggleFullScreen}
               />
            : <BillboardImage
                image={this.state.images}
                alt={this.state.images}
                style={this.state.imageFull ? this.setFullScreenImageStyle() : null}
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
            : <div className="billboard-modal-image-options" style={this.getImageOptionPlaceholderStyle()}>Floorplan</div>
          }

          <div className="billboard-modal-text" style={this.state.imageFull ? {"display": "none"} : null}>
            <p className="billboard-modal-text-header">Room Info</p>
            <div className="billboard-modal-main-text">
              {this.props.contents.flavor_text.en !== undefined && !this.state.imageFull
                ? splitText(this.props.contents.flavor_text.en, "billboard-modal-text-block") //returns an array of <p> elements
                : null
              }
            </div>
            <Button className="toggle-image-fullscreen-button" onClick={this.toggleFullScreen}>View Full Screen</Button>
            <Button className="close-billboard-modal-button" onClick={this.props.toggle}>X</Button>
          </div>
        </ModalBody>
      </Modal>
    )
  }
}
