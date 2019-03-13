import React, { Component } from 'react';

import { BillboardContainer } from "../Components/BillboardContainer";
import { ThumbnailGridContainer } from "../Components/ThumbnailGridContainer";
import { ImageCarousel } from '../Components/ImageCarousel';
import { ContactFormToggleButton } from '../Components/Contact/ContactFormToggleButton';
import { RegistrationProcessInfoButton } from '../Components/RegistrationProcessInfoButton';

import { ContactForm } from '../Components/Contact/ContactForm';

import { RegistrationProcessInfoModal } from "../Components/RegistrationProcessInfoModal";


export class ActiveView extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: this.props.content,
      pageName: this.props.activeView,
      contactFormVisible: false,
      registrationInfoVisible: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggleRegistrationProcessInfo = this.toggleRegistrationProcessInfo.bind(this);
  }

  componentDidMount(){
    if(this.props.content){
      this.setState({
        content: this.props.content
      })
    }
  }

  componentDidUpdate(){
    try{
      if(this.props.content !== this.state.content){
        this.setState({
          content: this.props.content,
          pageName: this.props.activeView
        })
      }
    } catch(e){
      console.log(e)
    }
  }

  toggle(){
    this.setState({
      contactFormVisible: !this.state.contactFormVisible
    })
  }

  toggleRegistrationProcessInfo(){
    this.setState({
      registrationInfoVisible: !this.state.registrationInfoVisible
    })
  }

  render(){
    let imageFolder
    if(this.state.content.images.gallery[0] !== undefined){
      imageFolder = this.state.content.images.gallery[0].folder;
    } else {
      imageFolder = "";
    }
    return(
      <div className="default-child">
      <ContactFormToggleButton toggleContactForm={this.toggle}/>
      <RegistrationProcessInfoButton toggleRegistrationProcessInfo={this.toggleRegistrationProcessInfo}/>
        <ContactForm toggle={this.toggle} visible={this.state.contactFormVisible}/>
        <RegistrationProcessInfoModal toggle={this.toggleRegistrationProcessInfo} visible={this.state.registrationInfoVisible} />
        {this.props.content.text.header !== undefined
          ? <h1 className="page-header">{this.props.content.text.header}</h1>
          : null
        }
        {this.props.content.text.description !== undefined
          ? <div className="page-description"><p>{this.props.content.text.description}</p></div>
          : null
        }
        {this.state.content.images.gallery !== [] || this.state.content.images.gallery !== undefined
          ? <ImageCarousel galleryImages={this.state.content.images.gallery} imageFolder={imageFolder}/>
          : null
        }
        {this.state.content.billboards !== undefined
          ? <BillboardContainer billboards={this.state.content.billboards} />
          : null
        }
        {this.state.content.images.thumbnails !== undefined
          ? <ThumbnailGridContainer thumbnails={this.state.content.images.thumbnails} />
          : null
        }
      </div>
    );
  }
}
