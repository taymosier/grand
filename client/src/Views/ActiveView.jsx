import React, { Component } from 'react';

import { BillboardContainer } from "../Components/BillboardContainer";
import { ThumbnailGridContainer } from "../Components/ThumbnailGridContainer";
import { ImageCarousel } from '../Components/ImageCarousel';


export class ActiveView extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: this.props.content,
      pageName: this.props.activeView
    };
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

  render(){
    let imageFolder
    if(this.state.content.images.gallery[0] !== undefined){
      imageFolder = this.state.content.images.gallery[0].folder;
    } else {
      imageFolder = "";
    }
    return(
      <div className="default-child">
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
